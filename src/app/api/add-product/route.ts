import databaseConnect from "@/backend/lib/database";
import Product from "@/backend/models/Product";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";

const Bucket = process.env.S3_BUCKET;
const s3 = new S3Client({
  region: process.env.S3_REGION,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
  },
});

export async function POST(req: Request) {
  await databaseConnect();

  const data = await req.formData();
  const images = data.get("images") as unknown as File[];

  try {
    const response = await Promise.all(
      images.map(async (image) => {
        const Body = (await image.arrayBuffer()) as Buffer;
        s3.send(new PutObjectCommand({ Bucket, Key: image.name, Body }));
      }),
    );

    // const product = new Product({
    //   title: body.title,
    //   price: body.price,
    //   priceDiscount: body.priceDiscount,
    //   description: body.description,
    //   category: body.category,
    //   brand: body.brand,
    //   images: [],
    //   reviews: [],
    // });
    console.log("S3 Response: ", response);

    return NextResponse.json(response);
  } catch (err) {
    console.log("ERROR: ", err);
    return NextResponse.json(err);
  }
}
