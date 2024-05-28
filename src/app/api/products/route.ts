import databaseConnect from "@/backend/lib/database";
import Product from "@/backend/models/Product";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  await databaseConnect();

  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 12;
  const sort = searchParams.get("sort");

  const totalProductsLength = await Product.countDocuments({}) 
  const products = await Product.find({})
    .limit(limit)
    .skip(limit * (page - 1));


  return NextResponse.json({
    products,
    totalPages: Math.ceil(totalProductsLength / limit),
  });
}
