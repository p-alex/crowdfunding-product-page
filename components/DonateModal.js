import { useContext } from "react";
import ProjectContext from "../context/project-context";
import {
  Modal,
  HeaderTag,
  Paragraph,
} from "../component-library/component-library";
import styles from "../styles/DonateModal.module.css";
import RewardSelect from "./RewardSelect";
export default function DonateModal() {
  const context = useContext(ProjectContext);
  const { title, rewards } = context.data[0];
  const { isDonationProcessActive, selectedReward } = context.donation;
  const { handleResetDonationMenu } = context;

  return (
    <>
      {isDonationProcessActive ? (
        <Modal handleResetDonationMenu={handleResetDonationMenu}>
          <button
            className={styles.close_btn}
            onClick={handleResetDonationMenu}
          >
            <img src="/images/icon-close-menu.svg" />
          </button>
          <HeaderTag type="two">Back this project</HeaderTag>
          <Paragraph marginBottom="0">
            Want to support us bringing {title} out in the world?
          </Paragraph>
          <RewardSelect stock={999} id={""} />
          {rewards.map((reward) => (
            <RewardSelect
              key={reward.id}
              title={reward.title}
              minPledge={reward.minPledge}
              desc={reward.desc}
              stock={reward.stock}
              id={reward.id}
            />
          ))}
        </Modal>
      ) : null}
    </>
  );
}
