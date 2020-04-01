Function.prototype.myCreate = function () {
  function F() {}
  F.prototype = proto
  return new F()
}