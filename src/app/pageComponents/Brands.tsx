import Image from "next/image";
import styles from "./Brands.module.scss";
import Paragraph from "@/components/Paragraph";
import Button from "@/components/Button";

interface Props {}

export default function Brands(props: Props) {
  return (
    <div className={styles.brands}>
      <div className={`${styles.box} ${styles.boxOne}`}>
        <Image
          src="/delete-later/macbook-pro.png"
          alt="Popular Products"
          width={360}
          height={376}
          className={styles.boxImage}
        />
        <div className={styles.textWrapper}>
          <h2 className={styles.boxHeading}>Macbook Pro</h2>
          <Paragraph>
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </Paragraph>
          <Button className={styles.boxButton}>Shop Now</Button>
        </div>
      </div>
      <div className={`${styles.box} ${styles.boxTwo}`}>
        <Image
          src="/delete-later/macbook-pro.png"
          alt="Popular Products"
          width={360}
          height={376}
          className={styles.boxImage}
        />
        <div className={styles.textWrapper}>
          <h2 className={styles.boxHeading}>Macbook Pro</h2>
          <Paragraph>
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </Paragraph>
          <Button className={styles.boxButton}>Shop Now</Button>
        </div>
      </div>
      <div className={`${styles.box} ${styles.boxThree}`}>
        <Image
          src="/delete-later/macbook-pro.png"
          alt="Popular Products"
          width={360}
          height={376}
          className={styles.boxImage}
        />
        <div className={styles.textWrapper}>
          <h2 className={styles.boxHeading}>Macbook Pro</h2>
          <Paragraph>
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </Paragraph>
          <Button className={styles.boxButton}>Shop Now</Button>
        </div>
      </div>
      <div className={`${styles.box} ${styles.boxFour}`}>
        <Image
          src="/delete-later/macbook-pro.png"
          alt="Popular Products"
          width={360}
          height={376}
          className={styles.boxImage}
        />
        <div className={styles.textWrapper}>
          <h2 className={styles.boxHeading}>Macbook Pro</h2>
          <Paragraph>
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </Paragraph>
          <Button variant="2" className={styles.boxButton}>
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
}
