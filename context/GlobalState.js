import { useEffect, useReducer, useState } from "react";
import { NavBarMenuReducer, TOGGLE_MENU } from "./reducers";
import ProjectContext from "./project-context";

const GlobalState = ({ children, data }) => {
  const [isBookmarked, setIsBookmarked] = useState();

  useEffect(() => {
    if (localStorage.getItem("isBookmarked") === null) {
      localStorage.setItem("isBookmarked", false);
    }
    setIsBookmarked(JSON.parse(localStorage.getItem("isBookmarked")));
  }, []);

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
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default GlobalState;
