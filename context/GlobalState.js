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
  return (
    <ProjectContext.Provider value={{ data, daysLeft }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default GlobalState;
