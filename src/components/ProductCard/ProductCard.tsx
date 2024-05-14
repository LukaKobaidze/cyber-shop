import Image from "next/image";
import Button from "../Button";
import { IconWishlist } from "@/icons";
import Tooltip from "../Tooltip";
import Link from "next/link";
import styles from "./ProductCard.module.scss";

interface Props {
  link: string;
  image: string;
  title: string;
  price: number;
  imageSizes: string;
  wishlist: boolean;
}

export default function ProductCard(props: Props) {
  const { link, image, title, price, imageSizes, wishlist } = props;

  const tooltipText = wishlist ? "Remove from Wishlist" : "Add to Wishlist";

  return (
    <div className={`card ${styles.container}`}>
      <Link href={link} className={styles.imageWrapper}>
        <Image
          src={image}
          fill
          sizes={imageSizes}
          alt={"Image of " + title}
          className={styles.image}
        />
      </Link>
      <Link href={link} className={styles.title}>{title}</Link>
      <span className={styles.price}>${price}</span>
      <Button className={styles.buyNowButton}>Buy Now</Button>
      <Tooltip position="bottom" text={tooltipText}>
        <button aria-label={tooltipText} className={styles.wishlistButton}>
          <IconWishlist />
        </button>
      </Tooltip>
    </div>
  );
}
