export const randomId = () => {
  return Math.random().toString(36)
}

export const formatParticipants = (count: number): string => {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  let suffix = "участников"; // по умолчанию

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    suffix = "участников";
  } else if (lastDigit === 1) {
    suffix = "участник";
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    suffix = "участника";
  }

  return `${count} ${suffix}`;
}