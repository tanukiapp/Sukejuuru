"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dateparser = function () {
  function Dateparser() {
    _classCallCheck(this, Dateparser);
  }

  _createClass(Dateparser, [{
    key: "getDate",
    value: function getDate(datetime) {
      var _date = datetime.slice(0, 8);

      var year = _date.slice(0, 4);
      var month = _date.slice(4, 6);
      var day = _date.slice(6, 8);

      return year + "-" + month + "-" + day;
    }
  }, {
    key: "getDatetime",
    value: function getDatetime(datetime) {
      var _date = datetime.slice(0, 8);
      var _time = datetime.slice(8, 14);

      var year = _date.slice(0, 4);
      var month = _date.slice(4, 6);
      var day = _date.slice(6, 8);

      var hours = _time.slice(0, 2);
      var minutes = _time.slice(2, 4);
      var seconds = _time.slice(4, 8);

      return new Date(year + "-" + month + "-" + day + "T" + hours + ":" + minutes + ":" + seconds + ".000Z").toISOString();
    }
  }]);

  return Dateparser;
}();

module.exports = Dateparser;
