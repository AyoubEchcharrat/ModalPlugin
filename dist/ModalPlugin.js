"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./ModalPlugin.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ModalPluggin = _ref => {
  let {
    toggleModal,
    setToggleModal,
    children,
    colorBG,
    width,
    height
  } = _ref;
  const determinedWidth = width ? width : 'fit-content';
  const determinedHeight = height ? height : 'fit-content';
  const determinedColorBG = colorBG ? colorBG : 'white';
  const modalContainerStyle = {
    width: determinedWidth,
    height: determinedHeight,
    backgroundColor: determinedColorBG,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    borderRadius: '5px',
    padding: '10px 15px 25px 15px'
  };
  return toggleModal && /*#__PURE__*/_react.default.createElement("div", {
    style: modalContainerStyle
  }, /*#__PURE__*/_react.default.createElement("div", {
    onClick: () => setToggleModal(false),
    className: "close-modal"
  }), children);
};
var _default = ModalPluggin;
exports.default = _default;