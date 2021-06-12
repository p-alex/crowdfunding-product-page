import { useContext } from "react";
import ProjectContext from "../context/project-context";
import styles from "../styles/Stats.module.css";
import {
  SectionContainer,
  ProgressBar,
} from "../component-library/component-library";
export default function Stats() {
  const context = useContext(ProjectContext);
  const { currentBackAmount, targetBackAmount, totalBackers, endDate } =
    context.data[0];
  return (
    <SectionContainer textAlign="center">
      <div className={styles.stats_container}>
        <div className={styles.stat}>
          <span>{currentBackAmount.toLocaleString("en")}$</span>
          <small>of {targetBackAmount.toLocaleString("en")}$ backed</small>
        </div>
        <div className={styles.stat}>
          <span>{totalBackers}</span>
          <small>total backers</small>
        </div>
        <div className={styles.stat}>
          <span>{context.daysLeft(Date.now(), endDate).toFixed(0)}</span>
          <small>days left</small>
        </div>
      </div>
      <ProgressBar
        currentValue={currentBackAmount}
        maxValue={targetBackAmount}
        marginTop={"40px"}
      />
    </SectionContainer>
  );
}
