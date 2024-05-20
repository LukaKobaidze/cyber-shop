import Paragraph from "@/components/Paragraph";
import styles from "./ProductDetails.module.scss";

interface Props {
  description: string;
  details: {
    title: string;
    list: { name: string; value: string }[];
  }[];
}

export default function ProductDetails(props: Props) {
  const { description, details } = props;

  return (
    <div className={styles.container}>
      <div className={`content-wrapper ${styles.contentWrapper}`}>
        <h2 className={styles.mainHeading}>Details</h2>
        <Paragraph className={styles.description}>{description}</Paragraph>
        {details?.map(({ title, list }) => (
          <>
            <h3 className={styles.detailTitle}>{title}</h3>
            <ul className={styles.detailList}>
              {list.map(({ name, value }) => (
                <li className={styles.detailListItem}>
                  <span className={styles.deatilListItemName}>{name}</span>
                  <span className={styles.deatilListItemValue}>{value}</span>
                </li>
              ))}
            </ul>
          </>
        ))}
      </div>
    </div>
  );
}
