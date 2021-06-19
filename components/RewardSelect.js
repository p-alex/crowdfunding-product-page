import {
  HeaderTag,
  Paragraph,
  Button,
} from "../component-library/component-library";
import { useState, useEffect, useContext } from "react";
import ProjectContext from "../context/project-context";
import styles from "../styles/RewardSelect.module.css";
function RewardSelect({ title, minPledge, desc, stock, id }) {
  const context = useContext(ProjectContext);
  const { handleSelectedReward, handleDonation } = context;
  const { selectedReward } = context.donation;
  let [pledge, setPledge] = useState(0);
  useEffect(() => {
    if (pledge < minPledge) setPledge(minPledge);
    if (/^0[0-9]+/.test(pledge)) setPledge(1);
    if (pledge > 999999) setPledge(999999);
    if (minPledge == undefined && pledge < 1) setPledge(1);
  }, [pledge]);
  return (
    <div
      className={
        stock > 0 ? styles.option : styles.option + " " + styles.disabled
      }
    >
      <div className={styles.option_info}>
        <button
          className={
            id === selectedReward
              ? styles.radioBtn + " " + styles.active
              : styles.radioBtn
          }
          disabled={!stock}
          onClick={() => handleSelectedReward(id)}
        >
          <div className={styles.circle}></div>
        </button>
        <div className={styles.option_info_container}>
          <HeaderTag type={"three"}>
            {title ? title : "Pledge with no reward"}
          </HeaderTag>
          {title && <span>Pledge ${minPledge} or more</span>}
        </div>
      </div>
      <Paragraph marginTop="10px" marginBottom="0">
        {title
          ? desc
          : "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."}
      </Paragraph>
      {title && (
        <span className={styles.option_items_left}>
          {stock} <small>left</small>
        </span>
      )}
      {id === selectedReward && (
        <div className={styles.option_pledge}>
          <span>Enter your pledge</span>
          <div className={styles.option_pledge_container}>
            <div className={styles.input}>
              <span>$</span>

              <input
                type="number"
                aria-label="pledge_amount"
                name="pledge"
                value={pledge}
                onChange={(e) => setPledge(e.target.value)}
              />
            </div>
            <Button
              size="small"
              type="button"
              isDisabled={false}
              func={() => handleDonation(Number(pledge), id)}
              tabindex={"0"}
            >
              Continue
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
export default RewardSelect;
