import Button from '@/components/Button';
import styles from './HeroMain.module.scss';
import Paragraph from '@/components/Paragraph';
import Image from 'next/image';

interface Props {}

export default function HeroMain(props: Props) {
  return (
    <div className={styles.container}>
      <div className={`contentWrapper ${styles.contentWrapper}`}>
        <div>
          <span className={styles.subHeading}>Pro.Beyond.</span>
          <h1 className={styles.heading}>
            IPhone 14 <span className="bold">Pro</span>
          </h1>
          <Paragraph className={styles.paragraph}>
            Created to change everything for the better. For everyone
          </Paragraph>
          <Button asLink href="/" variant="2">
            Shop Now
          </Button>
        </div>
        <Image src="/hero.png" width={400} height={632} alt="" priority />
      </div>
    </div>
  );
}
