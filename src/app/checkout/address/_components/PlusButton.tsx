import styles from './PlusButton.module.scss'

interface Props {
  
}

export default function PlusButton(props: Props) {
  return (
    <div className={`contentWrapper ${styles.container}`}>
      <div className={styles.buttonWrapper}>
        <button>+</button>
        <span></span>
      </div>
      
      <p></p>
    </div>
  )
}