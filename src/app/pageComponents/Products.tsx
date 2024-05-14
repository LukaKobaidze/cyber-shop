'use client';

import { useState } from 'react';
import styles from './Products.module.scss';

const tabs = ['New Arrival', 'Bestseller', 'Featured Products'] as const;

interface Props {}

export default function Products(props: Props) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={`contentWrapper`}>
      <div className={styles.tabsWrapper}>
        {tabs.map((tabName, tabIndex) => (
          <button
            onClick={() => setActiveTab(tabIndex)}
            className={`${styles.tab} ${
              activeTab === tabIndex ? styles.active : ''
            }`}
          >
            {tabName}
          </button>
        ))}
      </div>
    </div>
  );
}
