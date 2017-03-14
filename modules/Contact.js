var React = require('react');

var Contact = React.createClass({
	handlerClick:function(){
		console.log(1234);
		if(localStorage.users){
			var users = localStorage.users;
			console.log(users);
			var length = users.length;
			var isExist = false;
			var user = {
				username:"",
				password:""
			};
			var username = document.getElementById("username").value;
			var password = document.getElementById("password").value;
			for(i = 0; i < length; i++){
				if(users[i].username === username){
					isExist = true;
				}
			}
			if(isExist){
				alert("用户已经存在");
			}
			else{
				console.log(users)
				user.username = username;
				user.password = password;
				users.push(user);
				localStorage.users = JSON.parse(users);
				alert("注册成功");
			}
		}
		else{
			localStorage.users = [];
			var users = [];
			var user = {
				username:"",
				password:""
			};
			var username = document.getElementById("username").value;
			var password = document.getElementById("password").value;
			user.username = username;
			user.password = password;
			users.push(user);
			localStorage.users = JSON.parse(users);
			alert("注册成功");
		}
	},
	render:function(){
		return (
			<div>
		<div className="box">
		<div className="login-box">
			<div className="login-title text-center">
				<h1><small>注册</small></h1>
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
						<button type="submit" onClick={this.handlerClick} className="btn btn-sm btn-info"><span className="glyphicon glyphicon-off"></span> 注册</button>
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

module.exports = Contact;