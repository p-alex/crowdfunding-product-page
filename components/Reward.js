import { useContext } from "react";
import ProjectContext from "../context/project-context";
import styles from "../styles/Reward.module.css";
import {
  HeaderTag,
  Paragraph,
  Button,
} from "../component-library/component-library";
export default function Reward({ title, minPledge, desc, stock, id }) {
  const context = useContext(ProjectContext);
  const { handleSelectedReward } = context;
  return (
    <div
      className={
        stock > 0 ? styles.reward : styles.reward + " " + styles.disabled
      }
    >
      <div className={styles.reward_info}>
        <HeaderTag type="two">{title}</HeaderTag>
        <span>Pledge ${minPledge} or more</span>
      </div>
      <Paragraph>{desc}</Paragraph>
      <div className={styles.reward_select}>
        <div className={styles.reward_itemsLeft}>
          <span>{stock}</span>
          <small>left</small>
        </div>
        <Button
          size="big"
          type="button"
          isDisabled={!stock > 0}
          func={() => handleSelectedReward(id)}
        >
          Select Reward
        </Button>
      </div>
    </div>
  );
}
