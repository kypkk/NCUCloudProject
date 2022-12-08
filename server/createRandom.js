//create a random string
function random() {
  let str = "";
  let lower = "qwertyuiopasdfghjklzxcvbnm";
  let upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
  let number = "1029384756";
  for (let i = 0; i < 5; i++) {
    let swit = Math.ceil(Math.random() * 3);
    if (swit == 1) {
      let idx = Math.floor(Math.random() * 26);
      str += lower[idx];
    } else if (swit == 2) {
      let idx = Math.floor(Math.random() * 26);
      str += upper[idx];
    } else {
      let idx = Math.floor(Math.random() * 10);
      str += number[idx];
    }
  }
  return str;
}

export default random;
