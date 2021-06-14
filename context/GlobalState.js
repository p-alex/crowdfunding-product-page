import { useReducer } from "react";
import { NavBarMenuReducer, TOGGLE_MENU } from "./reducers";
import ProjectContext from "./project-context";

const GlobalState = ({ children, data }) => {
  const daysLeft = (currentDate, endDate) => {
    const date1 = new Date(currentDate);
    const date2 = new Date(endDate);

    const diff = date2.getTime() - date1.getTime();
    const msInADay = 1000 * 3600 * 24;
    const result = diff / msInADay;
    return result;
  };

  const [isNavMenuActive, dispatch] = useReducer(NavBarMenuReducer, false);

  const handleToggleMenu = () => dispatch({ type: TOGGLE_MENU });

  return (
    <ProjectContext.Provider
      value={{ data, daysLeft, isNavMenuActive, handleToggleMenu }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default GlobalState;
