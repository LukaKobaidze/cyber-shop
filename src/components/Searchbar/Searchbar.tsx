'use client';

import { useState } from 'react';
import { IconSearch } from '@/icons';
import styles from './Searchbar.module.scss';
import Tooltip from '../Tooltip';

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
      <Tooltip position="bottom" text="Search">
        <button
          className={styles.searchButton}
          aria-label="Search"
          disabled={value === ''}
        >
          <IconSearch className={styles.searchButtonIcon} viewBox="0 0 24 24" />
        </button>
      </Tooltip>
    </div>
  );
}
