"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// import "./index.css";
var Upload = /*#__PURE__*/function (_Component) {
  _inherits(Upload, _Component);

  function Upload(props) {
    var _this;

    _classCallCheck(this, Upload);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Upload).call(this));
    _this.state = {
      url: "",
      loading: false
    };

    _this.handleClick = function () {
      window.avatar.click();
    };

    _this.handleChange = function (e) {
      _this.setState({
        loading: true
      });

      var file = e.target.files[0]; //首先判断是否是图片

      if (!/image\/\w+/.test(file.type)) {
        alert("上传的不是图片");
        return false;
      } //在此限制图片的大小


      var imgSize = file.size; //35160  计算机存储数据最为常用的单位是字节(B)
      //在此处我们限制图片大小为2M

      if (imgSize > 2 * 1024 * 1024) {
        alert("上传的图片的大于2M,请重新选择");
        return false;
      } // 创建用来读取此文件的对象


      var reader = new FileReader(); //使用该对象读取file文件

      reader.readAsDataURL(file);

      reader.onload = function (e) {
        //读取成功后返回的一个参数e，整个的一个进度事件
        //选择所要显示图片的img，要赋值给img的src就是e中target下result里面
        //的base64编码格式的地址
        var url = e.target.result;

        _this.setState({
          url: url,
          loading: false
        });

        _this.props.getImg(url);
      };
    };

    return _this;
  }

  _createClass(Upload, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          url = _this$state.url,
          loading = _this$state.loading;
      return _react["default"].createElement(_react["default"].Fragment, null, url ? _react["default"].createElement("div", {
        onClick: this.handleClick,
        className: "thumbnail",
        style: {
          width: "100px",
          height: "100px",
          cursor: "pointer"
        }
      }, _react["default"].createElement("img", {
        src: url,
        alt: "\u56FE\u7247\u52A0\u8F7D\u5931\u8D25",
        style: {
          width: "100%",
          height: "100%"
        }
      })) : _react["default"].createElement("div", {
        className: "upload_box",
        onClick: this.handleClick,
        style: {
          padding: 0,
          margin: 0,
          position: "relative",
          border: "1px dashed #ccc",
          width: "100px",
          height: "100px",
          cursor: "pointer"
        }
      }, loading ? _react["default"].createElement("p", {
        className: "loading",
        style: {
          color: "#ccc",
          lineHeight: "80px",
          fontSize: "12px",
          textAlign: "center"
        }
      }, "\u4E0A\u4F20\u4E2D...") : _react["default"].createElement("div", {
        className: "add",
        style: {
          padding: 0,
          margin: 0,
          width: "70px",
          height: "70px",
          lineHeight: "60px",
          textAlign: "center",
          color: "#ccc",
          fontSize: "60px",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)"
        }
      }, "+")), _react["default"].createElement("input", {
        style: {
          width: 0,
          height: 0
        },
        onChange: this.handleChange,
        type: "file",
        id: "avatar",
        name: "avatar",
        accept: "image/png, image/jpeg"
      }));
    }
  }]);

  return Upload;
}(_react.Component);

Upload.proptypes = {
  getImg: _propTypes["default"].func.isRequired
};
var _default = Upload;
exports["default"] = _default;