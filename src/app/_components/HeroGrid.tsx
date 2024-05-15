import Paragraph from '@/components/Paragraph';
import styles from './HeroGrid.module.scss';
import Button from '@/components/Button';
import Image from 'next/image';

interface Props {}

export default function HeroGrid(props: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={`${styles.box} ${styles.boxOne}`}>
          <Image
            src="/playstation-5.png"
            width="360"
            height="343"
            alt=""
            className={styles.boxOneImage}
          />
          <div>
            <h2 className={styles.boxOneHeading}>Playstation 5</h2>
            <Paragraph className={styles.boxOneParagraph}>
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
              redefine your PlayStation experience.
            </Paragraph>
          </div>
        </div>
        <div className={`${styles.box} ${styles.boxTwo}`}>
          <Image
            src="/apple-airpods-max.png"
            width="104"
            height="272"
            alt=""
            className={styles.boxTwoImage}
          />
          <div className={styles.boxTwoTextWrapper}>
            <h2 className={styles.boxTwoHeading}>
              Apple AirPods <span className="bold">Max</span>
            </h2>
            <Paragraph className={styles.boxTwoParagraph}>
              Computational audio. Listen, it's powerful
            </Paragraph>
          </div>
        </div>
        <div className={`${styles.box} ${styles.boxThree}`}>
          <Image src="/apple-vision-pro.png" width="136" height="190" alt="" />
          <div className={styles.boxThreeTextWrapper}>
            <h2 className={styles.boxThreeHeading}>
              Apple Vision <span className="bold">Pro</span>
            </h2>
            <Paragraph className={styles.boxThreeParagraph}>
              An immersive way to experience entertainment
            </Paragraph>
          </div>
        </div>
        <div className={`${styles.box} ${styles.boxFour}`}>
          <div className={styles.boxFourTextWrapper}>
            <h2 className={styles.boxFourHeading}>
              Macbook <span className="bold">Air</span>
            </h2>
            <Paragraph className={styles.boxFourParagraph}>
              The new 15‑inch MacBook Air makes room for more of what you love with a
              spacious Liquid Retina display.
            </Paragraph>
            <Button asLink href="/">
              Shop Now
            </Button>
          </div>
          <Image src="/macbook-air.png" width="292" height="502" alt="" />
        </div>
      </div>
    </div>
  );
}
