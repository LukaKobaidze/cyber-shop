import mongoose, { Document, Schema } from "mongoose";

export interface ProductProperties {
  title: string;
  slug: string;
  price: number;
  priceDiscount?: number;
  description: string;
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
  slug: { type: String, required: true },
  price: { type: Number, required: true },
  priceDiscount: { type: Number },
  description: { type: String, required: true },
  category: { type: String, required: true },
  brand: { type: String, required: true },
  images: [{ type: String, required: true }],
  reviews: [
    {
      username: { type: String, required: true },
      rating: { type: String, required: true },
      comment: { type: String },
      dateAdded: { type: Date, required: true },
    },
  ],
});

productSchema.pre("save", async function () {});

export default mongoose.models.Product ||
  mongoose.model<ProductInterface>("Product", productSchema, "products");
