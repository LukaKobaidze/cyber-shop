import Paragraph from '@/components/Paragraph'
import styles from './BigSummerSale.module.scss'
import Image from 'next/image'

interface Props {
  
}

export default function BigSummerSale(props: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <h1>Big Summer <strong>Sale</strong></h1>
        <Paragraph className='paragraph'>Don't miss out – limited time offer. Shop now for the best deals!</Paragraph>

        <Image className={styles.notebook} src="/bss-notebook.png" alt="just some stuff" width={358} height={136} />
        <Image className={styles.purpleIpad} src="/bss-purple-ipad.png" alt="just some stuff" width={237} height={192} />
        <Image className={styles.blueIpad} src="/bss-blue-ipad.png" alt="just some stuff" width={345} height={282} />
        <Image className={styles.watch} src="/bss-watch.png" alt="just some stuff" width={397} height={201} />
        <Image className={styles.iphone} src="/bss-iphone.png" alt="just some stuff" width={120} height={366} />
      </div>
      
    </div>
  )
}