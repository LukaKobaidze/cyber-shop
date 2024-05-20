import Gear from './Gear'
import styles from './PaypalCredit.module.scss'

interface Props {
  
}

export default function PaypalCredit(props: Props) {
  return (
    <div className={styles.container}>
      <Gear />
    </div>
  )
}