import Stars from "@/components/Stars";
import styles from "./ProductReviews.module.scss";
import ProgressBar from "@/components/ProgressBar/ProgressBar";

// DELETE LATER
const reviews = {
  "5": 100,
  "4": 11,
  "3": 3,
  "2": 8,
  "1": 1,
};

interface Props {}

export default function ProductReviews(props: Props) {
  const [totalReviews, totalStars] = (
    Object.keys(reviews) as (keyof typeof reviews)[]
  ).reduce(
    (count, star) => {
      count[0] += reviews[star];
      count[1] += Number(star) * reviews[star];

      return count;
    },
    [0, 0],
  );
  const reviewAverage = (totalStars / totalReviews).toFixed(1);

  return (
    <div className={`content-wrapper ${styles.container}`}>
      <h2 className={styles.heading}>Reviews</h2>
      <div className={styles.detailsWrapper}>
        <div className={styles.reviewAverage}>
          <span className={styles.reviewAverageNumber}>{reviewAverage}</span>
          <span className={styles.reviewAverageOutOf}>
            of {totalReviews} reviews
          </span>
          <Stars amount={Number(reviewAverage)} />
        </div>
        <div className={styles.reviewsGrid}>
          <span className={styles.reviewsLabel}>Excellent</span>
          <ProgressBar current={reviews["5"]} total={totalReviews} />
          <span className={styles.reviewsAmount}>{reviews["5"]}</span>

          <span className={styles.reviewsLabel}>Good</span>
          <ProgressBar current={reviews["4"]} total={totalReviews} />
          <span className={styles.reviewsAmount}>{reviews["4"]}</span>

          <span className={styles.reviewsLabel}>Average</span>
          <ProgressBar current={reviews["3"]} total={totalReviews} />
          <span className={styles.reviewsAmount}>{reviews["3"]}</span>

          <span className={styles.reviewsLabel}>Below Average</span>
          <ProgressBar current={reviews["2"]} total={totalReviews} />
          <span className={styles.reviewsAmount}>{reviews["2"]}</span>

          <span className={styles.reviewsLabel}>Poor</span>
          <ProgressBar current={reviews["1"]} total={totalReviews} />
          <span className={styles.reviewsAmount}>{reviews["1"]}</span>
        </div>
      </div>
    </div>
  );
}
