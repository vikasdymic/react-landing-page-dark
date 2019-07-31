"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./Scss/PurchaseOption.min.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PurchaseOption =
/*#__PURE__*/
function (_Component) {
  _inherits(PurchaseOption, _Component);

  function PurchaseOption() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PurchaseOption);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PurchaseOption)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "setActiveAll", function () {
      return _this.props.itemKey === _this.props.activeKey ? 'option option--active' : 'option';
    });

    _defineProperty(_assertThisInitialized(_this), "setActiveCost", function () {
      return _this.props.itemKey === _this.props.activeKey ? 'option__cost option__cost--active' : 'option__cost';
    });

    _defineProperty(_assertThisInitialized(_this), "clicked", function () {
      _this.props.clicked(_this.props.itemKey);
    });

    return _this;
  }

  _createClass(PurchaseOption, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("article", {
        onClick: this.clicked,
        className: this.setActiveAll(),
        "data-key": this.props.itemKey
      }, _react.default.createElement("h4", {
        onClick: this.clicked,
        className: "option__title"
      }, this.props.optionTitle), _react.default.createElement("p", {
        onClick: this.clicked,
        className: this.setActiveCost()
      }, this.props.optionCost), _react.default.createElement("p", {
        onClick: this.clicked,
        className: "option__description"
      }, this.props.optionDescription), _react.default.createElement("button", {
        onClick: this.clicked,
        className: "option__button",
        type: "button",
        value: this.props.optionButton
      }, this.props.optionButton));
    }
  }]);

  return PurchaseOption;
}(_react.Component);

var _default = PurchaseOption;
exports.default = _default;

//# sourceMappingURL=PurchaseOption.js.map