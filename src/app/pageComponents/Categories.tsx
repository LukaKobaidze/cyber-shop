import {
  IconCamera,
  IconComputer,
  IconGaming,
  IconHeadphone,
  IconPhone,
  IconSmartWatch,
} from '@/icons';
import styles from './Categories.module.scss';
import Link from 'next/link';

const categoriesData = [
  { name: 'Phones', path: '/phones', Icon: IconPhone },
  { name: 'Smart Watches', path: '/smart-watches', Icon: IconSmartWatch },
  { name: 'Cameras', path: '/cameras', Icon: IconCamera },
  { name: 'Headphones', path: '/headphones', Icon: IconHeadphone },
  { name: 'Computers', path: '/computers', Icon: IconComputer },
  { name: 'Gaming', path: '/gaming', Icon: IconGaming },
];

interface Props {}

export default function Categories(props: Props) {
  return (
    <div className={styles.container}>
      <div className={`contentWrapper`}>
        <h2 className={styles.heading}>Browse By Category</h2>
        <div className={styles.categories}>
          {categoriesData.map(({ name, path, Icon }) => (
            <Link href={'/catalog' + path} className={`card ${styles.category}`}>
              <Icon className={styles.categoryIcon} />
              <span className={styles.categoryName}>{name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
