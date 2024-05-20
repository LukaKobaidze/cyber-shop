'use client'
import styles from './Summery.module.scss'
import { productsData } from "@/data/products.data";
import Image from 'next/image';


interface Props {
  
}

export default function Summery(props: Props) {
  return (
    <div className={styles.summery}>
      <h3 className={styles.title}>Summery</h3>

      <div className={styles.itemContainer}>
        {productsData.map((product)=> {

          return(
            <div className={styles.item}>
              <div className={styles.imageTitle}>
                <Image src={product.image} alt="" width={40} height={40} />
                <p>{product.title}</p>
              </div>
              <p className={styles.price}>${product.price}</p>
            </div>
          )
        })}
      </div>
      <div className={styles.addressContainer}>
        <p className={styles.addressTitle}>Address</p>
        <p className={styles.address}>1131 Dusty Townline, Jacksonville, TX 40322</p>

        <p className={styles.shipmentTitle}>Shipment Method</p>
        <p className={styles.shipment}>Free</p>
      </div>
      <div className={styles.priceContainer}>
        <div className={styles.subtotal}>
          <p>Subtotal</p>
          <h4>$3109</h4>
        </div>
        <div className={styles.tax}>
          <p>Estimated Tax</p>
          <h4>$129</h4>
        </div>
        <div className={styles.shipping}>
          <p>Estimated shipping & Handling</p>
          <h4>$42</h4>
        </div>
        <div className={styles.total}>
          <p>Total</p>
          <h4>$3280</h4>
        </div>
      </div>
    </div>
  )
}