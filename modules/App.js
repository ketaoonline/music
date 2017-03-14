var React = require('react');
var NavLink = require('./NavLink');
var IndexLink = require('react-router').IndexLink;

var App = React.createClass({
	render:function(){
		return (
				 <div className="navbar-wrapper">
      				<div className="container">
						<nav className="navbar navbar-inverse navbar-static-top">
				          <div className="container">
				            <div className="navbar-header">
				              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
				                <span className="sr-only">Toggle navigation</span>
				                <span className="icon-bar"></span>
				                <span className="icon-bar"></span>
				                <span className="icon-bar"></span>
				              </button>
				              <a className="navbar-brand" href="#">Music</a>
				            </div>
				            <div id="navbar" className="navbar-collapse collapse">
				              <ul className="nav navbar-nav">
				                <li><IndexLink to="/">首页</IndexLink></li>
				                <li><NavLink to="/about">登录</NavLink></li>
				                <li><NavLink to="/contact">注册</NavLink></li>
				                <li className="dropdown">
				                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">分类<span className="caret"></span></a>
				                  <ul className="dropdown-menu">
				                    <li><a href="#">中国风</a></li>
				                    <li><a href="#">欧美风</a></li>
				                  </ul>
				                </li>
				              </ul>
				            </div>
				          </div>
				        </nav>

				        {this.props.children}
						
				         <footer>
					        <p className="pull-right"><a href="#">Back to top</a></p>
					        <p>&copy; 2016 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
						 </footer>
					</div>
				</div>
		)
	}
});

module.exports = App;