export const TOGGLE_NAV_MENU = "TOGGLE_MENU";
export const CLOSE_NAV_MENU = "CLOSE_NAV_MENU";

export const TOGGLE_DONATION_MENU = "TOGGLE_DONATION_MENU";
export const SELECT_REWARD = "SELECT_REWARD";
export const RESET_DONATION_MENU = "RESET_DONATION_MENU";
export const FEEDBACK = "FEEDBACK";
export const RESET_DONATION_STATE = "RESET_DONATION_STATE";

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
