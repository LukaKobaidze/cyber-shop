import styles from "./Footer.module.scss";
import Image from 'next/image';
import Link from "next/link";
import { IconFacebook, IconTwitter, IconTiktok, IconInstagram} from '@/icons';

interface Props {}

export default function Footer(props: Props) {
  return (
    <footer className={styles.footer}>
      <div className={`contentWrapper ${styles.contentWrapper}`}>
        <div className={styles.innerContent}>
          <div className={styles.firstContainer}>
            <Link href="/" className={styles.logo}>
              <Image src="/white-logo.png" alt="" width={65} height={23} />
            </Link>
            <p>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
          </div>
          <div className={styles.secondContainer}>
            <h4>Services</h4>

            <ul>
              <li>Bonus program</li>
              <li>Gift cards</li>
              <li>Credit and payment</li>
              <li>Service contracts</li>
              <li>Non-cash account</li>
              <li>Payment</li>
            </ul>
          </div>
          <div className={styles.thirdContainer}>
            <h4>Assistance to the buyer</h4>

            <ul>
              <li>Find an order</li>
              <li>Terms of delivery</li>
              <li>Exchange and return of goods</li>
              <li>Guarantee</li>
              <li>Frequently asked questions</li>
              <li>Terms of use of the site</li>
            </ul>
          </div>
        </div>
        <div className={styles.iconWrapper}>
            <IconTwitter viewBox="0 0 16 16" />
            <IconFacebook viewBox="0 0 16 16" />
            <IconTiktok viewBox="0 0 16 16" />
            <IconInstagram viewBox="0 0 16 16" />
          </div>
      </div>
    </footer>
  );
}
