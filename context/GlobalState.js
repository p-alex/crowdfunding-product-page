import { useEffect, useReducer, useState } from "react";
import {
  DonationReducer,
  NavBarMenuReducer,
  TOGGLE_MENU,
  TOGGLE_DONATION_MENU,
  SELECT_REWARD,
  RESET_DONATION_MENU,
} from "./reducers";
import ProjectContext from "./project-context";

const GlobalState = ({ children, data }) => {
  const [isBookmarked, setIsBookmarked] = useState();

  useEffect(() => {
    if (localStorage.getItem("isBookmarked") === null)
      localStorage.setItem("isBookmarked", false);
    setIsBookmarked(JSON.parse(localStorage.getItem("isBookmarked")));
  }, []);

  const daysLeft = (currentDate, endDate) => {
    const date1 = new Date(currentDate);
    const date2 = new Date(endDate);
    const diff = date2.getTime() - date1.getTime();
    const msInADay = 1000 * 3600 * 24;
    return diff / msInADay;
  };

  const [isNavMenuActive, dispatchNavMenuActive] = useReducer(
    NavBarMenuReducer,
    false
  );

  const [donation, dispatchDonation] = useReducer(DonationReducer, {
    selectedReward: "",
    isDonationProcessActive: false,
  });

  const handleToggleMenu = () => dispatchNavMenuActive({ type: TOGGLE_MENU });

  const handleToggleDonationMenu = () =>
    dispatchDonation({ type: TOGGLE_DONATION_MENU });

  const handleSelectedReward = (id) =>
    dispatchDonation({ type: SELECT_REWARD, payload: id });

  const handleResetDonationMenu = () =>
    dispatchDonation({ type: RESET_DONATION_MENU });

  const toggleBookmarked = () => {
    const isBookmarked = JSON.parse(localStorage.getItem("isBookmarked"));
    localStorage.setItem("isBookmarked", !isBookmarked);
    setIsBookmarked(JSON.parse(localStorage.getItem("isBookmarked")));
  };
  return (
    <ProjectContext.Provider
      value={{
        data,
        daysLeft,
        isNavMenuActive,
        handleToggleMenu,
        toggleBookmarked,
        isBookmarked,
        donation,
        handleToggleDonationMenu,
        handleSelectedReward,
        handleResetDonationMenu,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default GlobalState;
