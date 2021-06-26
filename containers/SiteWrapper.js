import { useContext } from "react";
import ProjectContext from "../context/project-context";
import styles from "../styles/SiteWrapper.module.css";
export default function SiteWrapper({ children }) {
  const context = useContext(ProjectContext);
  const { isDonationProcessActive, donationSuccess } = context.donation;
  const { isNavMenuActive } = context;
  return (
    <div
      className={
        isDonationProcessActive || isNavMenuActive || donationSuccess
          ? styles.site_wrapper + " " + styles.disabled_scroll
          : styles.site_wrapper
      }
    >
      {children}
    </div>
  );
}
