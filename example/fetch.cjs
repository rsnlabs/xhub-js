const { XHub } = require("../build/cjs/index.cjs");

const xhub = new XHub("rsnlabs_××××××××××××××××××××××××××××××");

const type = "pussy"

xhub.fetch(type).then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error.message);
});