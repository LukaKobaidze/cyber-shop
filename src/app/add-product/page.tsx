"use client";
import AnimationInput from "@/components/AnimationInput";
import Paragraph from "@/components/Paragraph";
import useInputFields from "@/hooks/useInputFields";
import styles from "./page.module.scss";
import { useState } from "react";
import Button from "@/components/Button";
import Select from "@/components/Select";
import { hyphenCaseToTitleCase } from "@/utils";
import { useDropzone } from "react-dropzone";

const categories = [
  "phones",
  "smart-watches",
  "cameras",
  "headphones",
  "computers",
  "gaming",
];

export default function AddProductPage() {
  const [images, setImages] = useState<(File & { preview: string })[]>([]);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    multiple: true,
    accept: {
      "image/*": [],
    },
    onDrop: (file) => {
      setImages((state) => [
        ...state,
        ...file.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) }),
        ),
      ]);
    },
  });
  const { fields } = useInputFields([
    "title",
    "price",
    "priceDiscount",
    "description",
    "category",
    "brand",
  ]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (images.length === 0) return;

    const formData = new FormData();

    images.forEach((img) => {
      formData.append("images", img);
    });
    formData.set("title", fields.title);
    formData.set("price", fields.price);
    formData.set("priceDiscount", fields.priceDiscount);
    formData.set("description", fields.description);
    formData.set("category", fields.category);
    formData.set("brand", fields.brand);

    fetch("/api/add-product", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <form
      className={`content-wrapper ${styles.container}`}
      onSubmit={handleSubmit}
    >
      <h1>Add Product</h1>
      <Paragraph>
        Use this form to add a product to the database (MongoDB)
      </Paragraph>
      <AnimationInput
        placeholder="Title"
        value={fields.title}
        required={false}
      />
      <AnimationInput
        placeholder="Price"
        value={fields.price}
        required={false}
      />
      <AnimationInput
        placeholder="Price Discount (%)"
        value={fields.priceDiscount}
      />
      <AnimationInput
        placeholder="Description"
        value={fields.description}
        required={false}
      />
      <label htmlFor="category" className={styles.categoryLabel}>
        Category
      </label>
      <Select id="category" classNameContainer={styles.select}>
        {categories.map((category) => (
          <option value={category}>{hyphenCaseToTitleCase(category)}</option>
        ))}
      </Select>
      <AnimationInput
        placeholder="Brand (Iphone, Samsung, more...)"
        value={fields.brand}
        required={false}
      />
      <p className={styles.imagesTitle}>Images</p>
      <Paragraph className={styles.imagesParagraph}>
        First image will be the default image when displaying products, other
        images will show up once the user hovers over them in product
        description page (Look at the design for the reference).
      </Paragraph>
      <ol>
        {images.map((file, index) => (
          <li className={styles.imagesListItem}>
            <img src={file.preview} className={styles.imagePreview} />
            <span>
              {file.name} ({file.size} bytes)
            </span>
            <button
              className={styles.imageAction}
              onClick={() =>
                setImages((state) => [
                  ...state.slice(0, index),
                  ...state.slice(index + 1),
                ])
              }
            >
              remove
            </button>
          </li>
        ))}
      </ol>
      <button {...getRootProps({ className: styles.uploadImage })}>
        <input {...getInputProps()} />
        <span>Drag & Drop or Click here to upload an image</span>
      </button>
      <Button type="submit" className={styles.submitButton}>
        Confirm & Add Product
      </Button>
    </form>
  );
}
