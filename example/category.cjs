const { XHub } = require("../build/cjs/index.cjs");

const xhub = new XHub("rsnlabs_××××××××××××××××××××××××××××××");

xhub.getCategories().then(category => {
  console.log(category);
});