export const TOGGLE_MENU = "TOGGLE_MENU";
export const NavBarMenuReducer = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return !state;
    default:
      return state;
  }
};
