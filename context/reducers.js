export const TOGGLE_MENU = "TOGGLE_MENU";
export const TOGGLE_DONATION_MENU = "TOGGLE_DONATION_MENU";
export const SELECT_REWARD = "SELECT_REWARD";
export const RESET_DONATION_MENU = "RESET_DONATION_MENU";

export const NavBarMenuReducer = (
  state = { selectedReward: "", isDonationProcessActive: false },
  action
) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return !state;
    default:
      return state;
  }
};

export const DonationReducer = (
  state = {
    selectedReward: "",
    isDonationProcessActive: false,
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
      return { selectedReward: "", isDonationProcessActive: false };
    default:
      return state;
  }
};
