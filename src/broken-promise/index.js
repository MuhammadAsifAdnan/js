// exports, require, module, __filename, __dirname
function promise() {
  return new Promise.resolve("Its been resolved the old way");
}
console.log("external broken-promise outside");

module.exports = { promise };
module.exports[1] = "1";
module.exports["6"] = "1";
module.exports.tada = "65";
