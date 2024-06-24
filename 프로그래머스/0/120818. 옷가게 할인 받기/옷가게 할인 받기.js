function solution(price) {
  if (price >= 100000 && price < 300000) {
    incentivePrice = Math.floor(price * 0.95);
    return incentivePrice;
  } else if (price >= 300000 && price < 500000) {
    incentivePrice = Math.floor(price * 0.9);
    return incentivePrice;
  } else if (price >= 500000) {
    incentivePrice = Math.floor(price * 0.8);
    return incentivePrice;
  } else if (price < 100000) {
    return price;
  }
  return incentivePrice;
}