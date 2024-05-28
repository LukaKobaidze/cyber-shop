"use client";
import AnimationInput from "@/components/AnimationInput";
import Paragraph from "@/components/Paragraph";
import useInputFields from "@/hooks/useInputFields";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
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
  const { fields, onFieldUpdate } = useInputFields({
    title: "",
    price: "",
    priceDiscount: "",
    description: "",
    category: categories[0],
    brand: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (images.length === 0) return;

    const body = new FormData();

    images.forEach((img) => {
      body.append("images", img, img.name);
    });
    body.set("title", fields.title);
    body.set("price", fields.price);
    body.set("priceDiscount", fields.priceDiscount);
    body.set("description", fields.description);
    body.set("category", fields.category);
    body.set("brand", fields.brand);

    setSubmitMessage("");
    setIsLoading(true);
    fetch("/api/add-product", {
      method: "POST",
      body,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSubmitMessage(data.message);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
        onChange={(e) => onFieldUpdate(e.target.value, "title")}
        required
      />
      <AnimationInput
        placeholder="Price"
        value={fields.price}
        onChange={(e) => onFieldUpdate(e.target.value, "price")}
        required
      />
      <AnimationInput
        placeholder="Price Discount (%)"
        value={fields.priceDiscount}
        onChange={(e) => onFieldUpdate(e.target.value, "priceDiscount")}
      />
      <AnimationInput
        placeholder="Description"
        value={fields.description}
        onChange={(e) => onFieldUpdate(e.target.value, "description")}
        required
      />
      <label htmlFor="category" className={styles.categoryLabel}>
        Category
      </label>
      <Select
        id="category"
        classNameContainer={styles.select}
        value={fields.category}
        onChange={(e) => onFieldUpdate(e.target.value, "category")}
      >
        {categories.map((category) => (
          <option value={category} selected={fields.category === category}>
            {hyphenCaseToTitleCase(category)}
          </option>
        ))}
      </Select>
      <AnimationInput
        placeholder="Brand (Iphone, Samsung, more...)"
        value={fields.brand}
        onChange={(e) => onFieldUpdate(e.target.value, "brand")}
        required
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
      <Button
        type="submit"
        className={styles.submitButton}
        disabled={isLoading}
      >
        Confirm & Add Product
      </Button>
      <p>{isLoading ? "Sending..." : submitMessage}</p>
    </form>
  );
}
