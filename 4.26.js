// ==UserScript==
// @name         棚子🙆‍♂️支持所有答题｜考试必备!!｜题目搜索｜万能答题｜解除复制限制｜快速回答｜AI搜题｜AI问答｜AI生图｜AI聊天｜｜防检测｜考试拿满分｜
// @version      2.20
// @description  【😉♂️已完美兼容、智慧树、中国大学mooc、慕课、雨课堂、新国开、超星、学习通、知到、国家开放大学、蓝墨云、职教云、智慧职教、云班课精品课、剩余网站仅支持部分功能✨】、【🎇完美应付考试、测试，一键搜题😎】、【兼容、U校园、学堂在线】、【🎉新增AI搜题、AI问答，AI生图，Ai聊天定制化服务🥳】、【💙强制破除网站不可复制文字💙】、【🐮基于生成式AI(ChatGPT)的答案生成🐮】、【有其他平台支持需要的请加群催更:😄834934149😄，共同交流进步脚本无任何诸如（手机号，学校信息，等隐私信息）收集💚】
// @author       棚子
// @note         会员单：@小李 @不会服输的 @小日 @逆熵学园 @我有一个梦想
// @match        *://*.mosoteach.cn/*
// @match        *://*.chaoxing.com/*
// @match      	 *://*.xueyinonline.com/*
// @match        *://*.edu.cn/*
// @match        *://*.ouchn.cn/*
// @match        *://*.nbdlib.cn/*
// @match        *://*.hnsyu.net/*
// @match        *://*.gdhkmooc.com/*
// @match        *://*.zhihuishu.com/*
// @match      	 *://*.icve.com.cn/*
// @match      	 *://*.yuketang.cn/*
// @match      	 *://v.met0.top/*
// @match      	 *://*.icourse163.org/*
// @match      	 *://*.xuetangx.com/*
// @namespace    https://a.wpzllq.top
// @supportURL   https://a.wpzllq.top
// @icon         https://wpzllq.cn/wp-content/uploads/2023/12/1702644733-ta.webp
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.1/jquery.js
// @license 	MIT
// @grant        GM_getValue
// @grant        GM_addStyle
// @grant        unsafeWindow

// @connect      127.0.0.1
// @connect      *
// ==/UserScript==
(function(_this) {


	function MyPage(menu) {

		this.aner = null;
		this.version = "5.2";
		this.$ = $;
		this.menu = menu;
		this.config = this.urlToObject(window.location.href);
		this.api = this.getAPI(this.config.hostname);
		this.config.tk_uid = null;
		this.initMenu();
		// this.initVue();
		return this;
	}
	MyPage.prototype.urlToObject = function(url) {
		let obj = {};
		let arr1 = url.split("?");
		obj["front_url"] = arr1[0].split("/");
		if (url.includes('mooc.mosoteach.cn')) {
			obj.hostname = "mooc.mosoteach";
		} else if (url.includes('mosoteach.cn')) {
			obj.hostname = "mosoteach";
		} else if (url.includes("zhihuishu.com")) {
			obj.hostname = "zhihuishu";
		} else if (url.includes("icve.com.cn")) {
			obj.hostname = "icve";
		} else if (url.includes("met0.top")) {
			obj.hostname = "meto";
		} else if (url.includes("ouchn.cn")) {
			obj.hostname = "ouchn";
		} else if (url.includes("chaoxing.com")) {
			obj.hostname = "chaoxing";
		} else if (url.includes("yuketang.cn")) {
			obj.hostname = "yuketang";
		} else if (url.includes("icourse163")) {
			obj.hostname = "mooc";
		} else if (url.includes("unipus.cn")) {
			obj.hostname = "uschool";
		} else if (url.includes("xuetangx.com")) {
			obj.hostname = "xuetangx";
		}

		if (arr1[1]) {
			let arr2 = arr1[1].split("&");
			for (let i = 0; i < arr2.length; i++) {
				let res = arr2[i].split("=");
				obj[res[0]] = res[1];
			}
		}
		return obj;
	}
	MyPage.prototype.getAPI = function(hostname) {
		switch (hostname) {
			case "mooc.mosoteach":
			var user = [{
					赞助者: '逆熵学院',
					金额: 50,
					性别: '男'
				},
				{
					赞助者: '棚子',
					金额: 50,
					性别: '男'
				},
				{
					赞助者: '小李',
					金额: 30,
					性别: '女'
				},
				{
					赞助者: '卧龙',
					金额: 9.9,
					性别: '男'
				},
				{
					赞助者: 'm70069629',
					金额: 9.9,
					性别: '男'
				},
				{
					赞助者: '波比',
					金额: 5.5,
					性别: '男'
				},
				{
					赞助者: 'yianann',
					金额: 5.5,
					性别: '男'
				},
				{
					赞助者: '泽伊',
					金额: 5.5,
					性别: '男'
				}
			]
			console.table(user)
				console.log("精品云班课脚本准备中");
				return new jpyunbanke_api(this.config);
			case "mosoteach":
			var user = [{
					赞助者: '逆熵学院',
					金额: 50,
					性别: '男'
				},
				{
					赞助者: '棚子',
					金额: 50,
					性别: '男'
				},
				{
					赞助者: '小李',
					金额: 30,
					性别: '女'
				},
				{
					赞助者: '卧龙',
					金额: 9.9,
					性别: '男'
				},
				{
					赞助者: 'm70069629',
					金额: 9.9,
					性别: '男'
				},
				{
					赞助者: '波比',
					金额: 5.5,
					性别: '男'
				},
				{
					赞助者: 'yianann',
					金额: 5.5,
					性别: '男'
				},
				{
					赞助者: '泽伊',
					金额: 5.5,
					性别: '男'
				}
			]
			console.table(user)
				console.log("云班课脚本准备中");
				return new yunbanke_api(this.config);
			case "zhihuishu":
				var user = [{
						赞助者: '逆熵学院',
						金额: 50,
						性别: '男'
					},
					{
						赞助者: '棚子',
						金额: 50,
						性别: '男'
					},
					{
						赞助者: '小李',
						金额: 30,
						性别: '女'
					},
					{
						赞助者: '卧龙',
						金额: 9.9,
						性别: '男'
					},
					{
						赞助者: 'm70069629',
						金额: 9.9,
						性别: '男'
					},
					{
						赞助者: '波比',
						金额: 5.5,
						性别: '男'
					},
					{
						赞助者: 'yianann',
						金额: 5.5,
						性别: '男'
					},
					{
						赞助者: '泽伊',
						金额: 5.5,
						性别: '男'
					}
				]
				console.table(user)
				console.log("智慧树脚本准备中");
				return new zhihuishu_api(this.config);
			case "icve":
			var user = [{
					赞助者: '逆熵学院',
					金额: 50,
					性别: '男'
				},
				{
					赞助者: '棚子',
					金额: 50,
					性别: '男'
				},
				{
					赞助者: '小李',
					金额: 30,
					性别: '女'
				},
				{
					赞助者: '卧龙',
					金额: 9.9,
					性别: '男'
				},
				{
					赞助者: 'm70069629',
					金额: 9.9,
					性别: '男'
				},
				{
					赞助者: '波比',
					金额: 5.5,
					性别: '男'
				},
				{
					赞助者: 'yianann',
					金额: 5.5,
					性别: '男'
				},
				{
					赞助者: '泽伊',
					金额: 5.5,
					性别: '男'
				}
			]
			console.table(user)
				console.log("智慧职教脚本准备中");
				return new icve_api(this.config);
			case "meto":
			var user = [{
					赞助者: '逆熵学院',
					金额: 50,
					性别: '男'
				},
				{
					赞助者: '棚子',
					金额: 50,
					性别: '男'
				},
				{
					赞助者: '小李',
					金额: 30,
					性别: '女'
				},
				{
					赞助者: '卧龙',
					金额: 9.9,
					性别: '男'
				},
				{
					赞助者: 'm70069629',
					金额: 9.9,
					性别: '男'
				},
				{
					赞助者: '波比',
					金额: 5.5,
					性别: '男'
				},
				{
					赞助者: 'yianann',
					金额: 5.5,
					性别: '男'
				},
				{
					赞助者: '泽伊',
					金额: 5.5,
					性别: '男'
				}
			]
			console.table(user)
				console.log("meto脚本准备中");
				return new meto_api(this.config);
			case "ouchn":
			var user = [{
					赞助者: '逆熵学院',
					金额: 50,
					性别: '男'
				},
				{
					赞助者: '棚子',
					金额: 50,
					性别: '男'
				},
				{
					赞助者: '小李',
					金额: 30,
					性别: '女'
				},
				{
					赞助者: '卧龙',
					金额: 9.9,
					性别: '男'
				},
				{
					赞助者: 'm70069629',
					金额: 9.9,
					性别: '男'
				},
				{
					赞助者: '波比',
					金额: 5.5,
					性别: '男'
				},
				{
					赞助者: 'yianann',
					金额: 5.5,
					性别: '男'
				},
				{
					赞助者: '泽伊',
					金额: 5.5,
					性别: '男'
				}
			]
			console.table(user)
				console.log("国开脚本准备中");
				return new ouchn_api(this.config);
			case "chaoxing":
			var user = [{
					赞助者: '逆熵学院',
					金额: 50,
					性别: '男'
				},
				{
					赞助者: '棚子',
					金额: 50,
					性别: '男'
				},
				{
					赞助者: '小李',
					金额: 30,
					性别: '女'
				},
				{
					赞助者: '卧龙',
					金额: 9.9,
					性别: '男'
				},
				{
					赞助者: 'm70069629',
					金额: 9.9,
					性别: '男'
				},
				{
					赞助者: '波比',
					金额: 5.5,
					性别: '男'
				},
				{
					赞助者: 'yianann',
					金额: 5.5,
					性别: '男'
				},
				{
					赞助者: '泽伊',
					金额: 5.5,
					性别: '男'
				}
			]
			console.table(user)
				console.log("超星脚本准备中");
				return new chaoxin_api(this.config);
			case "yuketang":
			var user = [{
					赞助者: '逆熵学院',
					金额: 50,
					性别: '男'
				},
				{
					赞助者: '棚子',
					金额: 50,
					性别: '男'
				},
				{
					赞助者: '小李',
					金额: 30,
					性别: '女'
				},
				{
					赞助者: '卧龙',
					金额: 9.9,
					性别: '男'
				},
				{
					赞助者: 'm70069629',
					金额: 9.9,
					性别: '男'
				},
				{
					赞助者: '波比',
					金额: 5.5,
					性别: '男'
				},
				{
					赞助者: 'yianann',
					金额: 5.5,
					性别: '男'
				},
				{
					赞助者: '泽伊',
					金额: 5.5,
					性别: '男'
				}
			]
			console.table(user)
				console.log("雨课堂脚本准备中");
				return new yuketang_api(this.config);
			case "mooc":
			var user = [{
					赞助者: '逆熵学院',
					金额: 50,
					性别: '男'
				},
				{
					赞助者: '棚子',
					金额: 50,
					性别: '男'
				},
				{
					赞助者: '小李',
					金额: 30,
					性别: '女'
				},
				{
					赞助者: '卧龙',
					金额: 9.9,
					性别: '男'
				},
				{
					赞助者: 'm70069629',
					金额: 9.9,
					性别: '男'
				},
				{
					赞助者: '波比',
					金额: 5.5,
					性别: '男'
				},
				{
					赞助者: 'yianann',
					金额: 5.5,
					性别: '男'
				},
				{
					赞助者: '泽伊',
					金额: 5.5,
					性别: '男'
				}
			]
			console.table(user)
				console.log("慕课脚本准备中");
				return new mooc_api(this.config);
			case "uschool":
			var user = [{
					赞助者: '逆熵学院',
					金额: 50,
					性别: '男'
				},
				{
					赞助者: '棚子',
					金额: 50,
					性别: '男'
				},
				{
					赞助者: '小李',
					金额: 30,
					性别: '女'
				},
				{
					赞助者: '卧龙',
					金额: 9.9,
					性别: '男'
				},
				{
					赞助者: 'm70069629',
					金额: 9.9,
					性别: '男'
				},
				{
					赞助者: '波比',
					金额: 5.5,
					性别: '男'
				},
				{
					赞助者: 'yianann',
					金额: 5.5,
					性别: '男'
				},
				{
					赞助者: '泽伊',
					金额: 5.5,
					性别: '男'
				}
			]
			console.table(user)
				console.log("U校园脚本准备中");
				return new uschool_api(this.config);
			case "xuetangx":
			var user = [{
					赞助者: '逆熵学院',
					金额: 50,
					性别: '男'
				},
				{
					赞助者: '棚子',
					金额: 50,
					性别: '男'
				},
				{
					赞助者: '小李',
					金额: 30,
					性别: '女'
				},
				{
					赞助者: '卧龙',
					金额: 9.9,
					性别: '男'
				},
				{
					赞助者: 'm70069629',
					金额: 9.9,
					性别: '男'
				},
				{
					赞助者: '波比',
					金额: 5.5,
					性别: '男'
				},
				{
					赞助者: 'yianann',
					金额: 5.5,
					性别: '男'
				},
				{
					赞助者: '泽伊',
					金额: 5.5,
					性别: '男'
				}
			]
			console.table(user)
				console.log("学堂在线脚本准备中");
				return new xuetangx_api(this.config);
			default:
				return null;
		}
	};








	/*
	 *  u校园请求
	 */
	class uschool_api {
		constructor(config) {
			this.config = config;
		}


	}
	/*
	 *  学堂在线请求
	 */

	class xuetangx_api {
		constructor(config) {
			this.config = config;
		}


	}
	/*
	 *  mooc请求
	 */
	class mooc_api {
		constructor(config) {
			this.config = config;
		}
	}

	/*
	 *  雨课堂请求
	 */
	class yuketang_api {
		constructor(config) {
			this.config = config;
		}

	}
	/*
	 *  超星请求
	 */
	class chaoxin_api {
		constructor(config) {
			this.config = config;
		}



	}

	/*
	 *  国开请求
	 */
	class ouchn_api {
		constructor(config) {
			this.config = config;
		}


		sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

	}
	/*
	 *  meto请求
	 */
	class meto_api {
		constructor(config) {
			this.config = config;
		}


	}
	/*
	 *  智慧职教请求
	 */
	class icve_api {
		constructor(config) {
			this.config = config;
		}


	}
	/*
	 *  智慧树请求
	 */
	class zhihuishu_api {
		sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
		constructor(config) {
			this.config = config;

		}
	}
	/*
	 *  精品云班课请求
	 */
	class jpyunbanke_api {
		constructor(config) {
			this.config = config;
		}

	}


	/*
	 *  云班课请求
	 */
	class yunbanke_api {
		constructor(config) {
			this.config = config;
		}



	}






	// 鼠标拖动样式


	MyPage.prototype.arrowMove = function(e) {
		// var e = document.getElementById(e);
		// 元素大小
		let elW = e.currentTarget.offsetWidth
		let elH = e.currentTarget.offsetHeight
		// 元素位置
		let elL = e.currentTarget.parentNode.parentNode.offsetLeft
		let elT = e.currentTarget.parentNode.parentNode.offsetTop
		// 鼠标位置
		let x = e.clientX
		let y = e.clientY
		// 窗口大小
		let w = window.innerWidth
		let h = window.innerHeight
		// 鼠标到元素左边距离
		let moveX = x - elL
		let moveY = y - elT
		let el = e.currentTarget
		document.onmousemove = function(e) {
			// el.style.position = 'fixed';
			el.parentNode.parentNode.style.left = e.clientX - moveX + 'px'
			el.parentNode.parentNode.style.top = e.clientY - moveY + 'px'
		}
		document.onmouseup = function(e) {
			document.onmousemove = null
			document.onmouseup = null
		}
	};

	MyPage.prototype.initMenu = function() {
		let $ = this.$,
			menu = this.menu;
		$(document).on('mousedown', '#x_set', function(e) {
			window.my.arrowMove(e); //.target.parentNode.id
		});
		$(document).on('click', '#x_start', function() {
			window.my.start();
		});
		$(document).on('click', '#x_set', function() {
			$('html').find("#set").toggle('active');
			$('html').find("#aner").hide("slow");
		});







		/**
		 * MosoteachHelper CSS
		 */
		const styleTag = `
			<style scoped>
				#${menu.id} #zhu button[disabled]{
					color: white !important;
					background-color: rgb(188, 188, 188) !important;
				}
				#${menu.id} #zhu button{
					float:left;
					margin:25px 2px;
					// width:70px;
					// height:25px;
					/* 把按钮撑大 */
					padding: 4px 8px;
					/* 去除默认边框 */
					border: none;
					/* 圆角 */
					border-radius: 50px;
					/* 按钮背景色 */
					background-color: #8888ff;
					/* 字体颜色、大小、粗细、字间距 */
					color: #fff;
					font-size: 12px;
					font-weight: bold;
					letter-spacing: 1px;
					/* 鼠标小手 */
					cursor: pointer;

					/* 给个定位 */
					position: relative;
					/* 3D模式 */
					transform-style: preserve-3d;
					/* 过度动画时间 */
					transition: ease-in-out 2s;
				}
				#${menu.id} #zhu button:hover {
					/* 鼠标放上来旋转一圈 */
					transform: rotateX(360deg);
				}
				#${menu.id} #zhu button::before,
				#${menu.id} #zhu button:after {
					content: "";
					/* 白色边框线 */
					border: 0.8px solid #fff;
					/* 圆角 */
					border-radius: 50px;

					/* 通过定位来撑开边框，简单来说，确定4边的距离，中间自然就固定了 */
					position: absolute;
					top: 1px;
					left: 1px;
					right: 1px;
					bottom: 1px;

					/* 3D模式 */
					transform-style: preserve-3d;
					/* 设置透视参数，向 Z轴方向移动，正常时候就是向屏幕外面移动 */
					transform: perspective(1000px) translateZ(5px);
				}
				#${menu.id} #zhu button::after {
					/* 另一边反着移动一下 */
					transform: perspective(1000px) translateZ(-5px);
				}
				#${menu.id} #zhu button span {
					/* 设置 span 为块元素 */
					display: flex;

					/* 3D模式 */
					transform-style: preserve-3d;
					/* 同样设置透视，抬高 Z轴距离 */
					transform: perspective(500px) translateZ(8px);
				}
				#${menu.id}{
					font-size:14px;
					z-index: 9999;
					text-align:center;
					// width:0;
					// height:0;
					position:fixed;
					pointer-events: none;
					left:${menu.pos.x}px;
					top:${menu.pos.y}px;
					// background:${menu.background};
					// opacity:${menu.opacity};
				}
				#${menu.id} #zhu{
					pointer-events: visible;
				}
				#${menu.id} .drawer{
					height:550px;
					pointer-events: visible;
					position:relative;
					// max-height:400px;
					overflow:auto;
					text-align:left;
					display: none;
					background: #fff;
					border-radius: 20px;
					box-shadow: 0 5px 15px rgba(0,0,0,0.2);
					width: 100%; /* initially */
					// max-width: 300px;
					// opacity: 0.9;
					z-index: 199;
					padding:3px;
					margin:10px;
				}
				#${menu.id} .drawer iframe{
				  width: 100%;
				  height: 100%;
				  border: none; /* 去除 iframe 边框 */
				}
				#${menu.id} p{
					text-align:left;
					padding-left:5px;
				}
				#${menu.id} .drawer input{
					border-radius: 3px;
					border: 1px solid;
					width:50%;
				}
				#${menu.id} .drawer button{
					display:inline;
					vertical-align:middle;
					border: 1px solid;
					background-color: transparent;
					text-transform: uppercase;
					padding: 1px 2px;
					font-weight: 300;
				}
				#${menu.id} .drawer button:hover {
					color: white;
					border: 0;
					background-color: #4cc9f0;
					-webkit-box-shadow: 10px 10px 99px 6px rgba(76,201,240,1);
					-moz-box-shadow: 10px 10px 99px 6px rgba(76,201,240,1);
					box-shadow: 10px 10px 99px 6px rgba(76,201,240,1);
				}
				#${menu.id} #x_set{
					animation: change 3s linear 0s infinite;
					float:left;
					position:relative;
					z-index: 200;
					margin:10px;
					border-radius:50%;
					overflow:hidden;
					height: 50px;
					width:50px;
					border: solid 2px #00ff00;
					background: url(${GM_getValue("userimg") ? GM_getValue("userimg"):"https://wpzllq.cn/wp-content/uploads/2023/12/1702644733-ta.webp"});
					background-size: 50px 50px;
				}
				@keyframes change {
					0% {border: solid 2px #333;}
					25% {border: solid 2px #ec5e00;}
					50% {border: solid 2px #00dcdc;}
					75% {border: solid 2px #1ab558;}
					100% {border: solid 2px #333;}
				}
			</style>`;

		$(styleTag).appendTo('head');
		let $menu = $(
			`
				<div id='${menu.id}'>
					<div id ="zhu">
						<div id="x_set"></div>
					</div>
					<div class= "drawer" id="set">
						  <iframe class="iframe" src="https://a.wpzllq.top" style="width: 100%; height:100%;"></iframe>
					</div>
					<div class= "drawer" id="aner">


					</div>
				</div>`);
		$($menu).appendTo('html');

		this.aner = $('#aner');


	}



	_this.MyPage = MyPage;
})(unsafeWindow || window);

if (window.location == window.parent.location) { // 判断是否为ifarm
	window.my = new unsafeWindow.MyPage({
		id: "wzq",
		width: 80,
		background: '#fff',
		opacity: 0.8,
		pos: {
			x: 100,
			y: 100
		}
	})
}




(function() {
	'use strict';

	// 域名规则列表
	var rules = {
		black_rule: {
			name: "black",
			hook_eventNames: "",
			unhook_eventNames: ""
		},
		default_rule: {
			name: "default",
			hook_eventNames: "contextmenu|select|selectstart|copy|cut|dragstart",
			unhook_eventNames: "mousedown|mouseup|keydown|keyup",
			dom0: true,
			hook_addEventListener: true,
			hook_preventDefault: true,
			hook_set_returnValue: true,
			add_css: true
		}
	};
	// 域名列表
	var lists = {
		// 黑名单
		black_list: [
			/.*\.youtube\.com.*/,
			/.*\.wikipedia\.org.*/,
			/mail\.qq\.com.*/,
			/translate\.google\..*/
		]
	};

	// 要处理的 event 列表
	var hook_eventNames, unhook_eventNames, eventNames;
	// 储存名称
	var storageName = getRandStr('qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM', parseInt(Math.random() *
		12 + 8));
	// 储存被 Hook 的函数
	var EventTarget_addEventListener = EventTarget.prototype.addEventListener;
	var document_addEventListener = document.addEventListener;
	var Event_preventDefault = Event.prototype.preventDefault;

	// Hook addEventListener proc
	function addEventListener(type, func, useCapture) {
		var _addEventListener = this === document ? document_addEventListener : EventTarget_addEventListener;
		if (hook_eventNames.indexOf(type) >= 0) {
			_addEventListener.apply(this, [type, returnTrue, useCapture]);
		} else if (this && unhook_eventNames.indexOf(type) >= 0) {
			var funcsName = storageName + type + (useCapture ? 't' : 'f');

			if (this[funcsName] === undefined) {
				this[funcsName] = [];
				_addEventListener.apply(this, [type, useCapture ? unhook_t : unhook_f, useCapture]);
			}

			this[funcsName].push(func);
		} else {
			_addEventListener.apply(this, arguments);
		}
	}

	// 清理循环
	function clearLoop() {
		var elements = getElements();

		for (var i in elements) {
			for (var j in eventNames) {
				var name = 'on' + eventNames[j];
				if (elements[i][name] !== null && elements[i][name] !== onxxx) {
					if (unhook_eventNames.indexOf(eventNames[j]) >= 0) {
						elements[i][storageName + name] = elements[i][name];
						elements[i][name] = onxxx;
					} else {
						elements[i][name] = null;
					}
				}
			}
		}
	}

	// 返回true的函数
	function returnTrue(e) {
		return true;
	}

	function unhook_t(e) {
		return unhook(e, this, storageName + e.type + 't');
	}

	function unhook_f(e) {
		return unhook(e, this, storageName + e.type + 'f');
	}

	function unhook(e, self, funcsName) {
		var list = self[funcsName];
		for (var i in list) {
			list[i](e);
		}

		e.returnValue = true;
		return true;
	}

	function onxxx(e) {
		var name = storageName + 'on' + e.type;
		this[name](e);

		e.returnValue = true;
		return true;
	}

	// 获取随机字符串
	function getRandStr(chs, len) {
		var str = '';

		while (len--) {
			str += chs[parseInt(Math.random() * chs.length)];
		}

		return str;
	}

	// 获取所有元素 包括document
	function getElements() {
		var elements = Array.prototype.slice.call(document.getElementsByTagName('*'));
		elements.push(document);

		return elements;
	}

	// 添加css
	function addStyle(css) {
		var style = document.createElement('style');
		style.innerHTML = css;
		document.head.appendChild(style);
	}

	// 获取目标域名应该使用的规则
	function getRule(url) {
		function testUrl(list, url) {
			for (var i in list) {
				if (list[i].test(url)) {
					return true;
				}
			}

			return false;
		}

		if (testUrl(lists.black_list, url)) {
			return rules.black_rule;
		}

		return rules.default_rule;
	}

	// 初始化
	function init() {
		// 获取当前域名的规则
		var url = window.location.host + window.location.pathname;
		var rule = getRule(url);

		// 设置 event 列表
		hook_eventNames = rule.hook_eventNames.split("|");
		// TODO Allowed to return value
		unhook_eventNames = rule.unhook_eventNames.split("|");
		eventNames = hook_eventNames.concat(unhook_eventNames);

		// 调用清理 DOM0 event 方法的循环
		if (rule.dom0) {
			setInterval(clearLoop, 30 * 1000);
			setTimeout(clearLoop, 2500);
			window.addEventListener('load', clearLoop, true);
			clearLoop();
		}

		// hook addEventListener
		if (rule.hook_addEventListener) {
			EventTarget.prototype.addEventListener = addEventListener;
			document.addEventListener = addEventListener;
		}

		// hook preventDefault
		if (rule.hook_preventDefault) {
			Event.prototype.preventDefault = function() {
				if (eventNames.indexOf(this.type) < 0) {
					Event_preventDefault.apply(this, arguments);
				}
			};
		}

		// Hook set returnValue
		if (rule.hook_set_returnValue) {
			Event.prototype.__defineSetter__('returnValue', function() {
				if (this.returnValue !== true && eventNames.indexOf(this.type) >= 0) {
					this.returnValue = true;
				}
			});
		}

		console.debug('url: ' + url, 'storageName：' + storageName, 'rule: ' + rule.name);

		// 添加CSS
		if (rule.add_css) {
			addStyle('html, * {-webkit-user-select:text!important; -moz-user-select:text!important;}');
		}
	}

	init();
})();


(function() {
	'use strict';

	function customAlert() {
		var modal = document.createElement("div");
		modal.style.display = "block";
		modal.style.width = "300px";
		modal.style.position = "absolute";
		modal.style.zIndex = "999999";
		modal.style.backgroundColor = "rgba(255, 255, 255, 1)"; // 修改颜色值为不透明
		modal.style.border = "2px solid #333";
		modal.style.borderRadius = "20px";
		modal.style.padding = "10px";

		var closeButton = document.createElement("button");
		closeButton.textContent = "关闭";
		closeButton.style.position = "absolute";
		closeButton.style.top = "-25px";
		closeButton.style.right = "5px";
		closeButton.style.backgroundColor = "#3df6ff"; // 修改属性名称为 backgroundColor
		closeButton.style.borderRadius = "20px";
		closeButton.style.width = "50px";
		closeButton.style.height = "20px";
		closeButton.style.border = "none"; // 移除冒号
		closeButton.style.cursor = "pointer";
		closeButton.style.color = "#333";
		closeButton.style.fontSize = "12px";
		closeButton.style.padding = "0";
		closeButton.style.outline = "none"; // Remove outline on focus
		closeButton.style.transition = "color 0.3s ease"; // Smooth color transition on hover
		closeButton.addEventListener("mouseenter", function() {
			closeButton.style.color = "#ff0000"; // Change color on hover
		});
		closeButton.addEventListener("mouseleave", function() {
			closeButton.style.color = "#333"; // Restore original color when not hovered
		});
		closeButton.addEventListener("click", function() {
			modal.style.display = "none";
		});

		var message = document.createElement("p");
		message.textContent = "本程序隐蔽性很强，棚子考试亲测没问题，\n解决考试不能复制烦恼，\n按F12控制台有各位老板的赞赏名单\n抢先免费体验入群，\n834934149，";
		message.style.fontFamily = "Arial, sans-serif";
		message.style.fontSize = "14px";
		message.style.color = "#333";

		var link = document.createElement("a");
		// link.href = "https://dhl.wpzllq.cn";
		// link.textContent = "https://dhl.wpzllq.cn";
		link.style.color = "blue";
		link.style.textDecoration = "underline";

		message.appendChild(link);
		modal.appendChild(closeButton);
		modal.appendChild(message);

		document.body.appendChild(modal);

		// Get the element with id "zhu"
		var targetElement = document.getElementById("zhu");
		if (targetElement) {
			// Calculate the position of the target element
			var targetRect = targetElement.getBoundingClientRect();
			// Set the position of the modal relative to the target element
			modal.style.left = targetRect.left + "px";
			modal.style.top = targetRect.bottom + 10 + "px"; // Adjust 10px to position below the target element
		} else {
			// If the target element is not found, position the modal in the center of the viewport
			modal.style.left = "50%";
			modal.style.top = "50%";
			modal.style.transform = "translate(-50%, -50%)";
		}
	}

	// Trigger custom alert function
	customAlert();

})();
