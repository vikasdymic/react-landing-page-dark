"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _heroBg = _interopRequireDefault(require("../img/hero-bg.jpg"));

require("./Scss/Hero.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Hero =
/*#__PURE__*/
function (_Component) {
  _inherits(Hero, _Component);

  function Hero() {
    _classCallCheck(this, Hero);

    return _possibleConstructorReturn(this, _getPrototypeOf(Hero).apply(this, arguments));
  }

  _createClass(Hero, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("section", {
        className: "hero"
      }, _react.default.createElement("article", {
        className: "hero__content"
      }, _react.default.createElement("aside", {
        className: "hero__content__left"
      }, _react.default.createElement("div", {
        className: "hero__content__left__tagline"
      }, _react.default.createElement("h1", null, _react.default.createElement("small", null, "Lorem ipsum dolor sit amet"), "Donec quam felis ultricies"))), _react.default.createElement("aside", {
        className: "hero__content__right"
      }, _react.default.createElement("div", {
        className: "hero__content__right__wrapper"
      }, _react.default.createElement("h3", null, "Lorem ipsum"), _react.default.createElement("p", null, "Nullam dictum felis ", _react.default.createElement("span", {
        className: "hero__content__right__wrapper__formhighlight"
      }, "eu pede mollis pretium"), ". Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."), _react.default.createElement("form", null, _react.default.createElement("input", {
        type: "text",
        name: "personName"
      }), _react.default.createElement("input", {
        type: "email",
        name: "personEmail"
      }), _react.default.createElement("input", {
        type: "submit",
        value: "Sign Up Now"
      })), _react.default.createElement("small", null, "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus."))), _react.default.createElement("div", {
        className: "hero__bg"
      }, _react.default.createElement("img", {
        src: _heroBg.default,
        alt: "long-exposure of night sky with rotation"
      }))));
    }
  }]);

  return Hero;
}(_react.Component);

var _default = Hero;
exports.default = _default;

//# sourceMappingURL=Hero.js.map