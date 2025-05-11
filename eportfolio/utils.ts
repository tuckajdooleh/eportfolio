export const getYearsSinceDate = (date: Date): number => {
  const currentDate = new Date();
  
  // Get the difference in years
  let yearsDifference = currentDate.getFullYear() - date.getFullYear();
  
  // Adjust for cases where the full year hasn't passed yet
  // For example, if comparing Jan 2021 to Dec 2021, it should return 0 years
  const currentMonth = currentDate.getMonth();
  const dateMonth = date.getMonth();
  
  if (dateMonth > currentMonth) {
    yearsDifference--;
  } else if (dateMonth === currentMonth) {
    const currentDay = currentDate.getDate();
    const dateDay = date.getDate();
    
    if (dateDay > currentDay) {
      yearsDifference--;
    }
  }
  
  return yearsDifference;
}

export const getDaysSinceDate = (date: Date): number => {
  const currentDate = new Date();
  
  // Remove time portion for accurate day calculation
  const normalizedCurrentDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate()
  );
  
  const normalizedInputDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );
  
  // Calculate difference in milliseconds
  const differenceInMs = normalizedCurrentDate.getTime() - normalizedInputDate.getTime();
  
  // Convert milliseconds to days (1000ms * 60s * 60min * 24h)
  const daysDifference = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
  
  return daysDifference;
}