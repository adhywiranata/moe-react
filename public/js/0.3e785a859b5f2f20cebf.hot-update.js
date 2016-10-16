webpackHotUpdate(0,{

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(78);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(248);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _require = __webpack_require__(336);

	var connector = _require.connector;

	var Header = function (_Component) {
	  _inherits(Header, _Component);

	  function Header(props) {
	    _classCallCheck(this, Header);

	    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

	    _this.handleSearchTerm = _this.handleSearchTerm.bind(_this);
	    return _this;
	  }

	  _createClass(Header, [{
	    key: 'handleSearchTerm',
	    value: function handleSearchTerm(event) {
	      this.props.setSearchTerm(event.target.value); //this is coming from Redux, not from parents
	    }
	  }, {
	    key: 'goToSearch',
	    value: function goToSearch(event) {
	      _reactRouter.hashHistory.push('/');
	      event.preventDefault();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var headerStyle = {
	        padding: '5 20',
	        background: '#222222',
	        fontFamily: 'Open Sans, sans-serif',
	        position: 'fixed',
	        zIndex: '+999',
	        width: '100%',
	        textAlign: 'center'
	      };

	      var logoStyle = {
	        textAlign: 'center',
	        fontFamily: 'Open Sans, sans-serif',
	        fontSize: '2em',
	        color: '#FFFFFF',
	        width: 200,
	        margin: '10px auto',
	        textDecoration: 'none',
	        float: 'left'
	      };

	      var searchAreaStyle = {
	        width: '60%',
	        overflow: 'hidden',
	        float: 'left'
	      };

	      var searchInputStyle = {
	        marginTop: 12,
	        padding: '10px 30px',
	        border: 0,
	        borderRadius: 5,
	        outline: 0,
	        width: '50%',
	        fontSize: '1em',
	        fontFamily: 'Open Sans, sans-serif'
	      };

	      var searchButtonStyle = {
	        padding: '13px 20px',
	        background: '#59ABE3',
	        color: '#FFFFFF',
	        border: 'none',
	        fontSize: '1em',
	        textTransform: 'uppercase',
	        margin: '-3px 10px',
	        borderRadius: 5,
	        outline: 0,
	        cursor: 'pointer'
	      };

	      var navStyle = {
	        color: '#FFFFFF',
	        float: 'right',
	        marginRight: 30
	      };

	      var navMenuStyle = {
	        listStyle: 'none'
	      };

	      var navMenuListStyle = {
	        float: 'left',
	        padding: '10px 20px',
	        borderLeft: '1px solid rgba(255,255,255, .2)',
	        color: '#FFFFFF',
	        textDecoration: 'none'
	      };

	      var cartLabelStyle = {
	        padding: '1px 5px',
	        color: '#FFFFFF',
	        background: '#EB9532',
	        borderRadius: 5
	      };

	      return _react2.default.createElement(
	        'div',
	        { style: headerStyle },
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: '/', style: logoStyle },
	          'Moe Storea!'
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: searchAreaStyle },
	          _react2.default.createElement(
	            'form',
	            {
	              onSubmit: this.goToSearch },
	            _react2.default.createElement('input', { type: 'text',
	              placeholder: 'Search... ',
	              value: this.props.searchTerm /* from Redux */,
	              style: searchInputStyle,
	              onChange: this.handleSearchTerm }),
	            _react2.default.createElement('input', { type: 'submit', style: searchButtonStyle, defaultValue: 'Search' })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: navStyle },
	          _react2.default.createElement(
	            'ul',
	            { style: navMenuStyle },
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/', style: navMenuListStyle },
	              _react2.default.createElement(
	                'li',
	                null,
	                'Shopping Cart ',
	                _react2.default.createElement(
	                  'span',
	                  { style: cartLabelStyle },
	                  this.props.shoppingCart.count
	                )
	              )
	            ),
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/', style: navMenuListStyle },
	              _react2.default.createElement(
	                'li',
	                null,
	                'Login'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Header;
	}(_react.Component);

	Header.propTypes = {
	  setSearchTerm: _react.PropTypes.func,
	  searchTerm: _react.PropTypes.string
	};

	var _default = connector(Header);

	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(Header, 'Header', '/Users/adhy/Programming/ToyProjects/moe-react/src/components/Layouts/Header.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/adhy/Programming/ToyProjects/moe-react/src/components/Layouts/Header.js');
	}();

	;

/***/ }

})