'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _hocs = require('../hocs');

var _StyledStack = require('./StyledStack');

var _StyledStack2 = _interopRequireDefault(_StyledStack);

var _doc = require('./doc');

var _doc2 = _interopRequireDefault(_doc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stack = function (_Component) {
  _inherits(Stack, _Component);

  function Stack() {
    _classCallCheck(this, Stack);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Stack.prototype.render = function render() {
    var _props = this.props,
        anchor = _props.anchor,
        children = _props.children,
        fill = _props.fill,
        guidingChild = _props.guidingChild,
        rest = _objectWithoutProperties(_props, ['anchor', 'children', 'fill', 'guidingChild']);

    // make all children but the first absolutely positioned


    var guidingIndex = guidingChild;
    if (guidingIndex === 'first' || !guidingIndex) {
      guidingIndex = 0;
    } else if (guidingIndex === 'last') {
      guidingIndex = _react2.default.Children.count(children) - 1;
    }
    var childIndex = 0;
    var styledChildren = _react.Children.map(children, function (child) {
      if (child) {
        var layer = void 0;
        if (childIndex === guidingIndex) {
          layer = _react2.default.createElement(
            _StyledStack.StyledStackLayer,
            { guiding: true, fill: fill },
            child
          );
        } else {
          layer = _react2.default.createElement(
            _StyledStack.StyledStackLayer,
            { anchor: anchor },
            child
          );
        }
        childIndex += 1;
        return layer;
      }

      return child;
    });

    return _react2.default.createElement(
      _StyledStack2.default,
      _extends({ fillContainer: fill }, rest),
      styledChildren
    );
  };

  return Stack;
}(_react.Component);

if (process.env.NODE_ENV !== 'production') {
  (0, _doc2.default)(Stack);
}

exports.default = (0, _recompose.compose)(_hocs.withTheme)(Stack);