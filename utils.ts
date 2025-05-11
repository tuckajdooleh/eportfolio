export const getYearsSinceDate = (date: Date): number => {
  const currentDate = new Date();

  let yearsDifference = currentDate.getFullYear() - date.getFullYear();
  
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
  
  const differenceInMs = normalizedCurrentDate.getTime() - normalizedInputDate.getTime();
  
  const daysDifference = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
  
  return daysDifference;
}