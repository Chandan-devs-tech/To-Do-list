"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// create icon function
var createIcon = function createIcon(iconClass) {
  //   creating icon
  var iElement = document.createElement('i');
  iElement.classList.add('fa-regular');
  iElement.classList.add(iconClass);
  return iElement;
};
var _default = createIcon;
exports["default"] = _default;