import Product, { ProductProperties } from "../models/Product";
import databaseConnect from "./database";

export async function getProducts(options: {
  page?: number;
  limit?: number;
  sort?: string;
}) {
  await databaseConnect();

  const { page = 1, limit = 12, sort } = options;

  const products = await Product.find({})
    .select("title slug price priceDiscount images")
    .limit(limit)
    .skip(limit * (page - 1));

  const totalProducts = await Product.countDocuments({});

  return { products, totalProducts };
}

export async function getProductById(id: string) {
  await databaseConnect();

  const products: ProductProperties | null = await Product.findById(id);

  return products;
}
