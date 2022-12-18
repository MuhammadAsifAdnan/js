import fetch from "node-fetch";

function doWhenDataReceived(value) {
  returnNextElement.next(value);
}

function* createFlow() {
  const data = yield fetch("https://jsonplaceholder.typicode.com/posts/1");
  console.log(data);
}

const returnNextElement = createFlow();
const futureData = returnNextElement.next();

futureData.value.then(doWhenDataReceived);
