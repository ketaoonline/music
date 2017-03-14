var React = require('react');
//登录页面
var About = React.createClass({
	handlerLogin:function(){
		var users = localStorage.users;
		var username = document.getElementById("username").value;
		var password = document.getElementById("password").value;
		if(users){
			users = JSON.parse(users);
			var length = users.length;
			var isCorrect =false;
			for(var i = 0; i < length; i++){
				if(users[i].username == username && users[i].password == password){
					isCorrect = true;
				}
			}
			if(isCorrect){				
				window.location.href = "./";
			}
			else{
				alert("用户名或密码错误");
			}
		}
		else{
			alert("请先注册，然后再登录");
		}
	},
	render:function(){
		return (
			<div>
		<div className="box">
		<div className="login-box">
			<div className="login-title text-center">
				<h1><small>登录</small></h1>
			</div>
			<div className="login-content ">
			<div className="form">
			<form>
				<div className="form-group">
					<div className="col-xs-12  ">
						<div className="input-group">
							<span className="input-group-addon"><span className="glyphicon glyphicon-user"></span></span>
							<input type="text" id="username" name="username" className="form-control" placeholder="用户名"/>
						</div>
					</div>
				</div>
				<div className="form-group">
					<div className="col-xs-12  ">
						<div className="input-group">
							<span className="input-group-addon"><span className="glyphicon glyphicon-lock"></span></span>
							<input type="text" id="password" name="password" className="form-control" placeholder="密码"/>
						</div>
					</div>
				</div>
				<div className="form-group form-actions">
					<div className="col-xs-4 col-xs-offset-4 ">
						<button onClick={this.handlerLogin} className="btn btn-info"><span className="glyphicon glyphicon-off"></span> 登录</button>
					</div>
				</div>
			</form>
			</div>
		</div>
	</div>
</div>
	
			</div>
		)
	}
});

module.exports = About;