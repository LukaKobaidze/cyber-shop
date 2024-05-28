import databaseConnect from "@/backend/lib/database";
import Product from "@/backend/models/Product";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";
import { NextResponse } from "next/server";

const Bucket = process.env.S3_BUCKET as string;
const s3Client = new S3Client({
  region: process.env.S3_REGION,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
  },
});

export async function POST(req: Request) {
  await databaseConnect();

  const data = await req.formData();
  const images = data.getAll("images") as File[];

  const imageKeys: string[] = [];

  try {
    const response = await Promise.all(
      images.map(async (image) => {
        const Body = (await image.arrayBuffer()) as Buffer;
        const Key = uuidv4() + image.name;

        imageKeys.push(Key);

        return await s3Client.send(
          new PutObjectCommand({ Bucket, Key, Body, ContentType: "image" }),
        );
      }),
    );

    const product = new Product({
      title: data.get("title"),
      slug: data
        .get("title")
        ?.toString()
        .split(" ")
        .slice(0, 5)
        .join("-")
        .toLowerCase(),
      price: Number(data.get("price")),
      priceDiscount: Number(data.get("priceDiscount")),
      description: data.get("description"),
      category: data.get("category"),
      brand: data.get("brand"),
      images: imageKeys.map((imageKey) => process.env.S3_URL + "/" + imageKey),
      reviews: [],
    });

    await product.save();

    return NextResponse.json({
      message: `Product '${data.get("title")}' created!`,
    });
  } catch (err) {
    console.log("ERROR: ", err);
    return NextResponse.json(err);
  }
}
