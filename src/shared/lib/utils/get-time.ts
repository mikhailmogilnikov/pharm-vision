export const getTime = (date: Date) => {
  const hours = date.getHours();
  const mins = date.getMinutes();

  return `${('0' + hours).slice(-2)}:${('0' + mins).slice(-2)}`;
};
