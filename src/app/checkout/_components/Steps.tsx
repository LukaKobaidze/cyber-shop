'use client'
import { IconLocation, IconPayment, IconShipping } from '@/icons';
import styles from './Steps.module.scss';
import { usePathname } from 'next/navigation';

interface Props {}

export default function Steps(props: Props) {
  const pathname = usePathname();

  const isActive = (path: string) => pathname.includes(path);

  return (
    <div className={styles.container}>
      <div className={`contentWrapper ${styles.contentWrapper}`}>
        <div className={`${styles.icon} ${isActive('checkout/address') ? styles.active : ''}`}>
          <div className={styles.holder}>
            <IconLocation />
          </div>
          <div className={styles.title}>
            <p>Step 1</p>
            <h4>Address</h4>
          </div>
        </div>

        <div className={`${styles.icon} ${isActive('checkout/shipping') ? styles.active : ''}`}>
          <div className={styles.holder}>
            <IconShipping />
          </div>
          <div className={styles.title}>
            <p>Step 2</p>
            <h4>Shipping</h4>
          </div>
        </div>

        <div className={`${styles.icon} ${isActive('checkout/payment') ? styles.active : ''}`}>
          <div className={styles.holder}>
            <IconPayment />
          </div>
          <div className={styles.title}>
            <p>Step 3</p>
            <h4>Payment</h4>
          </div>
        </div>
      </div>
    </div>
  );
}