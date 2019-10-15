const daysSinceJoining = (joinDate: number): number => {
  const currentDateInSec = Date.now() / 1000;
  const diffInSec = currentDateInSec - joinDate;
  const roundedDiffInDays = Math.ceil(diffInSec / 60 / 60 / 24);
  return roundedDiffInDays;
};

export { daysSinceJoining };
