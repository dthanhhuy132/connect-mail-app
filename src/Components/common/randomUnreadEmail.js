export default function randomUnreadEmail(index) {
  let randomNumberArr = [];

  for (let i = 0; i <= index; i++) {
    let randomNumber = Math.random() * index;
    if (randomNumber < index / 2) randomNumberArr.push(i);
  }

  return randomNumberArr;
}
