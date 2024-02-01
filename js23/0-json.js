const apiToGet =
  '{"ticker":{"base":"BTC","target":"USD","price":"38280.58063610","volume":"97811.05442583","change":"-202.19261818"},"timestamp":1621704005,"success":true,"error":""}';

// console.log(apiToGet);
// it doesn't work, because it is not javaScript object
// const apiPrice = apiToGet.ticker.price;
// console.log(apiPrice);

const toObject = JSON.parse(apiToGet);

// console.log(toObject);

const findPrice = toObject.ticker.price;
// console.log(findPrice);

//this is the way we must change the data to send it to server
const apiToPost = {
  ticker: {
    base: "BTC",
    target: "USD",
    price: "38280.58063610",
    volume: "97811.05442583",
    change: "-202.19261818",
  },
  timestamp: 1621704005,
  success: true,
  error: "",
};

const toApiFormat = JSON.stringify(apiToPost);
console.log(toApiFormat);
