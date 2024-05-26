import styles from './page.module.scss'
import Payment from './_components/Payment'
import Summary from './_components/Summary'

interface Props {}

export default function PaymentPage(props: Props) {
  return (
    <div className={styles.container}>
      <div className={`contentWrapper ${styles.contentWrapper}`}>
        <Summary />
        <Payment />
      </div>
    </div>
  )
}
