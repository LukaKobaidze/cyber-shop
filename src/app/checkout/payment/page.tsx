import styles from './PaymentPage.module.scss'
import Payment from './_components/Payment'
import Summery from './_components/Summery'

interface Props {
  
}

export default function PaymentPage(props: Props) {
  return (
    <div className={styles.container}>
      <div className={`contentWrapper ${styles.contentWrapper}`}>
        <Summery />
        <Payment />
      </div>
    </div>
  )
}