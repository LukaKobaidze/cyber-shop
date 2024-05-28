import mongoose, { Document, Schema } from "mongoose";

export interface ProductProperties {
  title: string;
  price: number;
  priceDiscount?: number;
  description: number;
  category: string;
  brand: string;
  images: string[];
  reviews: {
    username: string;
    rating: number;
    comment: string;
    dateAdded: string;
  }[];
}

type ProductInterface = Document & ProductProperties;

const productSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  priceDiscount: { type: Number },
  description: { type: String, required: true },
  category: { type: String, required: true },
  brand: { type: String, required: true },
  images: [{ type: String, required: true }],
  reviews: [{
    username: { type: String, required: true },
    rating: { type: String, required: true },
    comment: { type: String },
    dateAdded: { type: Date, required: true },
  }],
});

const Product = mongoose.model<ProductInterface>(
  "Product",
  productSchema,
  "products",
);

export default Product;
