'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Navigation.module.scss';

interface Props {}

export default function Navigation(props: Props) {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <nav className={styles.nav}>
      <Link
        href="/"
        className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}
      >
        Home
      </Link>
      <Link
        href="/catalog"
        className={`${styles.link} ${pathname === '/catalog' ? styles.active : ''}`}
      >
        Catalog
      </Link>
    </nav>
  );
}
