const getNewSeries = () => {
    const newDataPoint = Math.floor(Math.random() * 100); // Generate a random number between 0 and 100
    const currentDate = new Date().getTime(); // Get the current timestamp
    return { x: currentDate, y: newDataPoint }; // Return an object representing a data point
  };
  
  export default getNewSeries;