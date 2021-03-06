import { useEffect, useReducer, useState } from 'react';
import { DonationReducer, NavBarMenuReducer } from './reducers';
import {
  TOGGLE_NAV_MENU,
  CLOSE_NAV_MENU,
  TOGGLE_DONATION_MENU,
  SELECT_REWARD,
  RESET_DONATION_MENU,
  FEEDBACK,
  RESET_DONATION_STATE,
} from './actions';
import ProjectContext from './project-context';

const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://crowdfunding-product-page-omega.vercel.app'
    : 'http://localhost:3000';

const GlobalState = ({ children, databaseData }) => {
  const [isBookmarked, setIsBookmarked] = useState();
  const [data, setData] = useState(databaseData);

  useEffect(() => {
    if (localStorage.getItem('isBookmarked') === null)
      localStorage.setItem('isBookmarked', false);
    setIsBookmarked(JSON.parse(localStorage.getItem('isBookmarked')));
    setData(databaseData);
  }, []);

  const daysLeft = (currentDate, endDate) => {
    const date1 = new Date(currentDate);
    const date2 = new Date(endDate);
    const diff = date2.getTime() - date1.getTime();
    const msInADay = 1000 * 3600 * 24;
    return diff / msInADay;
  };

  const [isNavMenuActive, dispatchNavMenuActive] = useReducer(NavBarMenuReducer, false);

  const [donation, dispatchDonation] = useReducer(DonationReducer, {
    selectedReward: '',
    isDonationProcessActive: false,
    donationSuccess: '',
  });

  const handleToggleMenu = () => dispatchNavMenuActive({ type: TOGGLE_NAV_MENU });

  const handleToggleDonationMenu = () => {
    dispatchNavMenuActive({ type: CLOSE_NAV_MENU });
    dispatchDonation({ type: TOGGLE_DONATION_MENU });
  };

  const handleSelectedReward = (id) =>
    dispatchDonation({ type: SELECT_REWARD, payload: id });

  const handleResetDonationMenu = () => dispatchDonation({ type: RESET_DONATION_MENU });

  const handleResetDonationState = () => dispatchDonation({ type: RESET_DONATION_STATE });

  const toggleBookmarked = () => {
    const isBookmarked = JSON.parse(localStorage.getItem('isBookmarked'));
    localStorage.setItem('isBookmarked', !isBookmarked);
    setIsBookmarked(JSON.parse(localStorage.getItem('isBookmarked')));
  };

  const handleDonation = async (pledge, rewardID) => {
    const result = await fetch(`${BASE_URL}/api/data`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ pledge: pledge, rewardID: rewardID }),
    });
    const resultJson = await result.json();
    if (resultJson.message === 'Success') {
      const currentData = data;
      const updatedData = currentData.map((data) => {
        data.currentBackAmount += pledge;
        data.totalBackers += 1;
        if (rewardID) {
          data.rewards = data.rewards.map((reward) => {
            if (reward.id === rewardID) {
              return { ...reward, stock: reward.stock - 1 };
            }
            return reward;
          });
        }
        return data;
      });
      setData(updatedData);
      handleResetDonationMenu();
      dispatchDonation({ type: FEEDBACK, payload: resultJson.message });
    } else {
      handleResetDonationMenu();
      dispatchDonation({ type: FEEDBACK, payload: resultJson.message });
    }
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
        handleDonation,
        handleResetDonationState,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default GlobalState;
