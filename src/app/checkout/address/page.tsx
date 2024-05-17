'use client'
import { useState } from 'react'
import styles from './Checkout.module.scss'
import Warning from './_components/Warning'
import PlusButton from './_components/PlusButton'

interface Props {
  
}

export default function AddressPage(props: Props) {
  const [addressSelect, setAddressSelect] = useState([])

  return (
    <div className={styles.container}>
      <div className={`contentWrapper ${styles.contentWrapper}`}>
        <h3 className={styles.title}>Select Address</h3>

        <div className={styles.content}>
          {addressSelect.length === 0 && 
            <Warning />
          }
          <PlusButton />
        </div>
        
      </div>
    </div>
  )
}