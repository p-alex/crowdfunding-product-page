import styles from "../styles/Reward.module.css";
import {
  HeaderTag,
  Paragraph,
  Button,
} from "../component-library/component-library";
export default function Reward() {
  return (
    <div className={styles.reward}>
      <div className={styles.reward_info}>
        <HeaderTag type="two">Bamboo Stand</HeaderTag>
        <span>Pledge $25 or more</span>
      </div>
      <Paragraph>
        You get an ergonomic stand made of natural bamboo. You've helped us
        launch our promotional campaign, and you’ll be added to a special Backer
        member list.
      </Paragraph>
      <div className={styles.reward_select}>
        <div className={styles.reward_itemsLeft}>
          <span>101</span>
          <small>left</small>
        </div>
        <Button size="big" type="button">
          Select Reward
        </Button>
      </div>
    </div>
  );
}
