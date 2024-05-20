import Gear from './Gear'
import styles from './PayPal.module.scss'

interface Props {
  
}

export default function Paypal(props: Props) {
  return (
    <div className={styles.container}>
      <Gear />
    </div>
  )
}