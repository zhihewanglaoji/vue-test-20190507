new Vue({
	el:"#vue-app",
	data :{
		name : "name is a xp",
		job : "后台开发工程师",
		website : "https://www.baidu.com",
		websiteTag : "<a href='https://www.sina.com.cn'>百度</a>",
	},
	methods:{
		greet : function(msg){
			return 'Good Morning'+msg+'>>'+this.name+'!';
		}
	}
});