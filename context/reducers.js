import {
  TOGGLE_NAV_MENU,
  CLOSE_NAV_MENU,
  TOGGLE_DONATION_MENU,
  SELECT_REWARD,
  RESET_DONATION_MENU,
  FEEDBACK,
  RESET_DONATION_STATE,
} from "./actions";

export const NavBarMenuReducer = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_NAV_MENU:
      return !state;
    case CLOSE_NAV_MENU:
      return false;
    default:
      return state;
  }
};

export const DonationReducer = (
  state = {
    selectedReward: "",
    isDonationProcessActive: false,
    donationSuccess: "",
  },
  action
) => {
  switch (action.type) {
    case TOGGLE_DONATION_MENU:
      return (state = {
        ...state,
        isDonationProcessActive: !state.isDonationProcessActive,
      });
    case SELECT_REWARD:
      return (state = {
        ...state,
        selectedReward: action.payload,
        isDonationProcessActive: true,
      });
    case RESET_DONATION_MENU:
      return (state = {
        ...state,
        selectedReward: "",
        isDonationProcessActive: false,
      });
    case RESET_DONATION_STATE:
      return {
        selectedReward: "",
        isDonationProcessActive: false,
        donationSuccess: "",
      };
    case FEEDBACK:
      return (state = {
        ...state,
        selectedReward: "",
        isDonationProcessActive: false,
        donationSuccess: action.payload,
      });
    default:
      return state;
  }
};
