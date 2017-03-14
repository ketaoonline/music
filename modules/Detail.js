var React = require('react');

var Detail = React.createClass({
	getDefaultProps:function(){
		return {
			url:'http://localhost:3000/db'
		}
	},
	getInitialState:function(){
		return {
			list:[]
		}
	},
	componentWillMount:function(){
		var _this = this;
		$.ajax({
			type:'GET',
			url:this.props.url,			
			dataType:"json",
			success:function(res){
				_this.setState({
					list: res.musics
				})
			},
			error:function(err){
				console.log(err);
			}
		});
	},
	render:function(){	
		console.log(this.state.list[0])
		if(this.state.list.length >  0){
			var lst =  [];
			var data = this.state.list;
			var listLength = data.length;
			for(var i = 0; i < listLength; i++){
				if(data[i].id === this.props.params.id){
					console.log(data[i].attrs.singer[0]);
					lst.push(
						<div className="detailContainer" key={i}>
							<div className="leftImage">
								<p><img src={data[i].image}/></p>
								<p>
									<button className="download">下载此歌曲</button>
								</p>
							</div>
							<div className="rightWord">
								<h3>{data[i].attrs.title}</h3>
								<p>歌手：<span className="whiteSpan">{data[i].attrs.singer[0]}</span></p>
								<p>
									写字楼里写字间 写字间里程序员
								</p>
								<p>
									程序人员写程序 又拿程序换酒钱
								</p>
								<p>
									酒醒只在网上坐 酒醉还来网下眠
								</p>
								<p>
									酒醉酒醒日复日 网上网下年复年
								</p>
								<p>
									宁愿老死程序间 只要老板多发钱
								</p>
								<p>
									小车大房不去想 撰个二千好过年
								</p>
								<p>
									若要见识新世面 公务员比程序员
								</p>
								<p>
									一个在天一在地 而且还比我们闲
								</p>
								<p>
									别人看我穿白领 我看别人穿名牌
								</p>
								<p>
									天生我才写程序 臀大近视肩周炎
								</p>
							</div>
						</div>
					)
				}
			}
		}
		return (
			<div>
				{lst}
			</div>
		)
	}
});

module.exports = Detail;