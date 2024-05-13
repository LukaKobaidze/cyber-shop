'use client';

import { useState } from 'react';
import { IconSearch } from '@/icons';
import styles from './Searchbar.module.scss';

interface Props {
  classNameContainer?: string;
}

export default function Searchbar(props: Props) {
  const { classNameContainer } = props;

  const [value, setValue] = useState('');

  return (
    <div className={`${styles.container} ${classNameContainer}`}>
      <input
        className={styles.input}
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className={styles.searchButton} disabled={value === ''}>
        <IconSearch className={styles.searchButtonIcon} viewBox="0 0 24 24" />
      </button>
    </div>
  );
}
