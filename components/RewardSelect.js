import {
  HeaderTag,
  Paragraph,
  Button,
} from "../component-library/component-library";
import { useState, useContext, useEffect } from "react";
import ProjectContext from "../context/project-context";
import styles from "../styles/RewardSelect.module.css";
function RewardSelect({ title, minPledge, desc, stock, id }) {
  const context = useContext(ProjectContext);
  const { handleSelectedReward, handleDonation } = context;
  const { selectedReward } = context.donation;
  let [pledge, setPledge] = useState("");
  let [invalid, setInvalid] = useState(false);
  useEffect(() => {
    if (/\D/.test(pledge)) setPledge(pledge.slice(0, pledge.length - 1));
  }, [pledge]);
  const handleInvalid = () => {
    setInvalid(true);
    setTimeout(() => {
      setInvalid(false);
    }, 3000);
  };

  return (
    <div
      className={
        selectedReward === id
          ? styles.selected + " " + styles.option
          : styles.option
      }
      style={stock > 0 ? null : { opacity: "0.4", userSelect: "none" }}
    >
      <div className={styles.option_info}>
        <button
          className={
            id === selectedReward
              ? styles.radioBtn + " " + styles.active
              : styles.radioBtn
          }
          role="checkbox"
          aria-checked={selectedReward === id ? "true" : "false"}
          aria-label={`select ${
            title ? title + " reward" : "pledge with no reward"
          }`}
          disabled={!stock}
          onClick={() => handleSelectedReward(id)}
        >
          <div className={styles.circle}></div>
        </button>
        <div className={styles.option_info_container}>
          <HeaderTag type="three">
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
            <div
              className={styles.input}
              style={invalid ? { outline: "solid red 2px" } : null}
            >
              <span>$</span>

              <input
                type="text"
                aria-label="pledge amount in dollars"
                name="pledge"
                value={pledge}
                onChange={(e) => setPledge(e.target.value)}
              />
            </div>
            <Button
              size="small"
              type="button"
              isDisabled={false}
              func={
                pledge < minPledge || pledge < 1
                  ? handleInvalid
                  : () => handleDonation(Number(pledge), id)
              }
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
