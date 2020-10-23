"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PieChart = /*#__PURE__*/function () {
  function PieChart(ctx, r_) {
    _classCallCheck(this, PieChart);

    _defineProperty(this, "ctx", void 0);

    _defineProperty(this, "w", void 0);

    _defineProperty(this, "h", void 0);

    _defineProperty(this, "x0", void 0);

    _defineProperty(this, "y0", void 0);

    _defineProperty(this, "r", void 0);

    _defineProperty(this, "outLineWidth", void 0);

    _defineProperty(this, "rectW", void 0);

    _defineProperty(this, "rectH", void 0);

    _defineProperty(this, "space", void 0);

    this.ctx = ctx;
    this.w = this.ctx.canvas.width;
    this.h = this.ctx.canvas.height;
    this.x0 = r_;
    this.y0 = r_;
    this.r = r_;
    this.outLineWidth = this.r + 20;
    this.rectW = 30;
    this.rectH = 16;
    this.space = 20;
  }

  _createClass(PieChart, [{
    key: "init",
    value: function init(data) {
      this.drawPie(data);
    }
  }, {
    key: "drawPie",
    value: function drawPie(data) {
      console.log(data);
      var angleList = this.transitionRadian(data);
      console.log(angleList);
      var startRadian = -1.56;
      var rectY = this.space;

      for (var i = 0; i < angleList.length; i++) {
        this.ctx.beginPath();
        var color = angleList[i].color;
        this.ctx.fillStyle = color;
        var endRadian = startRadian + angleList[i].angle;
        this.ctx.arc(this.x0, this.y0, this.r, startRadian, endRadian);
        this.ctx.lineTo(this.x0, this.y0);
        this.ctx.fill();
        startRadian = endRadian;
        rectY += this.rectH + 10;
      }
    }
  }, {
    key: "transitionRadian",
    value: function transitionRadian(data) {
      var total = 0;

      for (var i = 0; i < data.length; i++) {
        total += data[i].num;
      }

      console.log(total);

      for (var _i = 0; _i < data.length; _i++) {
        var angle = 2 * Math.PI * Number(data[_i].num) / total;
        data[_i].angle = angle;
      }

      return data;
    }
  }]);

  return PieChart;
}();

exports["default"] = PieChart;