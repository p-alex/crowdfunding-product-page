import { createContext } from "react";
export default createContext({
  data: [],
  daysLeft: () => {},
  isNavMenuActive: false,
  handleToggleMenu: () => {},
  toggleBookmarked: () => {},
  isBookmarked: false,
  donation: {},
  handleToggleDonationMenu: () => {},
  handleSelectedReward: () => {},
  handleResetDonationMenu: () => {},
  handleDonation: () => {},
});
