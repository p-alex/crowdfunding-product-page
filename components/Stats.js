import styles from "../styles/Stats.module.css";
import {
  SectionContainer,
  ProgressBar,
} from "../component-library/component-library";
export default function Stats() {
  return (
    <SectionContainer>
      <div className={styles.stats_container}>
        <div className={styles.stat}>
          <span>$1,204</span>
          <small>of 100.000$ backed</small>
        </div>
        <div className={styles.stat}>
          <span>31</span>
          <small>total backers</small>
        </div>
        <div className={styles.stat}>
          <span>56</span>
          <small>days left</small>
        </div>
      </div>
      <ProgressBar currentValue={1204} maxValue={100000} marginTop={"40px"} />
    </SectionContainer>
  );
}
