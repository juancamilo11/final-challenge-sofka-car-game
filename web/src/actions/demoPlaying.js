export const getNewRandomDistance = () => {
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * 10);
  } while (randomNumber <= 0 || randomNumber > 6);
  return (randomNumber *= 100);
};
