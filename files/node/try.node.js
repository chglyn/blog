NodeJS特点
	单线程
	非阻塞I/O  Non-blocking 
	事件驱动   Event Driven
	Node不为每个用户开辟一个线程, 所以选择了单线程。单线程, 要照顾所有的用户, 就必须有非阻塞I/O, 否则一个人的I/O就把别人
	,一旦有非阻塞I/O, 一个人如果I/O去了, 就会放弃CPU的使用权, 换成另一个人使用CPU, 所以CPU的利用率100%。第一个人I/O结束
	.就要用事件来通知线程, 此时必须有事件环, 就有一个队伍调度机制。Node中有超过半数的C++代码, 在搭建事件环。

	<!--（回调函数嵌套回调函数）-->
NodeJS适合开发什么样的应用程序？
	善于I/O, 不善于计算; 因为NodeJS最擅长就是任务调度

	当应用程序需要处理大量并发的I/O, 而在向客户端发出相应之前, 应用程序内部并不需要进行非常复杂的处理的时候, NodeJS非常适合。 
	NodeJS也非常适合与web socket配合, 开发长链接的实时交互应用程序。
	比如： 用户表单收集、考试系统、聊天室、图文直播、提供JSON的API(为前台Angular使用)

第一个运行包
	// require引包
	var http = require("http");
	var fs = require('fs');
	//创建服务器 参数是一个回调函数, 表示如果有请求进来, 要做什么
	var server = http.createServer(function(req, res) {
		//req表示请求, request; res表示相应response

		if(req.url == '/favicon.ico') return;

		if(req.url == "/fang") {
			fs.readFile("./test.html", function(err, data) { //读取html内容
				//第一个参数是完整路径, 当前目录 /
				//第二个参数, 就是回调函数, 表示文件读取成功之后, 做的事情
				//设置HTTP头部, 状态码是200, 文件类型是html, 字符集是utf-8
				res.writeHead(200, {"Content-type":"text/html;charset=UTF-8"});
				//res.end("我买了一个iPhone"+(1+2+3)+'s');
				res.write(data);
				res.end(data); //必须写; end里面不能直接写成1+2
				//res.end((1+2).toString());

				/*
					if(error) {
						throw err;
					}

					//fs模块 ------------

					//stat检测状态 (path, callback)
					fs.stat('./a/b', function(err, stats) { 
						//检测这个路径是不是一个文件夹 是文件夹返回true, 否则返回false
						console.log(stats.isDirectory());
					});

					//使用数组进行遍历获取文件或文件夹
					fs.readir('./a/', function(err, files) {
						//files是个数组, 表示a文件下所有的东西, 包括文件及文件夹
						console.log(files);
						var wenjianjia = [];
						(function fn(i){
							if(i == files.length) return; //遍历结束
							fs.atat('./a/' + files[i], function() {
								if(stats.isDirectory()) {
									wenjianjia.push(files[i]);
								}
								fn(i+1);
							});
						}(0))
					});
					res.end(data);
				*/
				console.log(1);
			})
			console.log(2); 
		}else if(req.url == "yuan") {
			fs.readFile("./yuan.html", function(err, data) {
				res.writeHead(200, {"Content-type":"text/html;charset=UTF-8"});
				res.end(data);
			})
		}else if(req.url == "b.css") { // link中的css名字
			fs.readFile("./a.css", function(err, data) { //写css的文件名字
				res.writeHead(200, {"Content-type":"text/css"});
				res.end(data);
			})
		}else if(req.url == "0.jpg") {
			fs.readFile("./0.jpg", function(err, data) {
				res.writeHead(200, {"Content-type":"image/jpg"});
				res.end(data);
			})
		}else{
			res.writeHead(400, {"Content-type":"text/html;charset=UTF-8"});
			res.end("没有此界面");
		}
	});
	//运行服务器 监听3000端口(端口号可以任意修改)
	server.listen(3000, "127.0.0.1");
	//浏览器访问:127.0.0.1:3000
 	//NodeJS是服务器的程序, 写的js语句, 都将运行在服务器上, 返回给客户的, 都是已经处理好的纯html
url:
 	URL和真实物理文件是没有关系。URL通过Node的顶层路由设计, 呈现一个静态文件。
 
 	var http = require("http");
 	var url = require('url');  127.0.0.1:3000/a/b?id=1&age=2;
 	http.createServer(function(req, res) {
 		var path = url.parse(req.url).pathname; /a/b
 		//var query = url.parse(req.url).query;  //id=1
 		//var query = url.parse(req.url, true).query; //成对存在{id:1, age:2} 
 		//url.path()如果第二个参数是true, 那么就可以将会所有的查询变成对
 		//就可以直接打点得到这个参数
 		console.log(query);
 		console.log(path);

 		/* 静态服务器
 		var extname = path.extname(pathname);
		var fileUrl =  './' + path.normalize('./static/' + path);
 		fs.readFile('./static/' + path, function(err, data) {
 			if(err) {
 				//如果此文件不存在, 应该用404
 				fs.readFile('./static/404.html', function(err, data) {
 					res.writeHead(200, {"Content-type":"text/html;charset=UTF-8"});
 					res.end(data);
 				})
 			}
 			//HTML类型, text/html
 			//jpg文件 image/jpg
 			var mime = getMine(extname);
 			res.writeHead(200, {'Content-type':mime});
 			res.end(data);
			/*
			getMine(extname, function(mime) {
 				res.writeHead(200, {'Content-type':mime});
 				res.end(data);	
			});
			*/
 		})

 		*/
 		res.end();
 	}).listen(300, 'localhost');

 	function getMine(extname) {
		//读取文件 抛出错误 
		/*
		fs.readFile('./mine.json', function(err, data) {
			if(err) {
				return;
			}
			var minJSON = JSON.parse(data);
			var mine = mineJSON[extname] || 'text/plain';
			callback(mine);
		})
		*/
 		switch(extname){
 			case: '.html':
 				return "text/html";
 				break;
 			case: '.jpg':
 				return "image/jpg";
 				break;
 			case: '.css':
 				return 'text/css';
 				break;
 		}
 	}
	

模块的概念
	//每各模块都是独立的文件, 文件中的函数, 变量在这个JS文件中生效, 外部文件不能访问
	//使用exports进行暴露, 提供外部使用
	//exports可以多次, require只需一次
	a.js
		var msg = 'sunny';
		exports.msg = msg;
	b.js
		var A = reuqire('./a.js'); //如果不写./, 默认从node_modules中读取
		console.log(A.msg);
	

	function Person(name, age) {
		this.name = name;
		this.age = age;
	}
	Person.prototype = {
		say: function() {
			console.log(this.name);
		}
	}
	//Person被视为构造函数, 可以用new实例化
	module.exports = Person;

	var Person = require('./Person.js');
	var sunny = new Person('sunny', 18);
	sunny.say(); //'sunny'

	//某一文件中, 提供了函数, 共别人使用, 只需要暴露函数就行。 exports.xxx = xxx;
	//某一文件中, 描述了一个类。 module.exports = xxx;

	//	./都不写从main文件中读取
	//如果node_modules中没有index.js文件，推荐使用package.json文件
	//package.json  存在模块文件夹根目录(与exports文件同级)
		{
			name: '',
			version: '0.0.1',
			main: '' //入口文件
		}
	
路径
	//模块中的任何相对路径, 都是相对当前的命令提示符路径, 不是相对于这个模块自己
	//在任何js文件里面, __dirname: 当前所在的绝对路径

	require()别的js文件时候, 将执行那个js文件

	注意：
	require中的路径, 是从当前这个js文件出发, 找到别人; 而fs是通过命令提示符找到别人的
	所以, 桌面上有一个a.js, test文件夹中有一个b.js, c.js

	//a要引用b;
		var b = require('./b.js');
	//b要引用c
		var b = require('./c.js');
	//但是, fs等其他的模块用到路径的时候, 都是相当于cmd命令光标所在位置
	//所以, 在b中想读1.txt文件, 推荐绝对路径
	fs.readFile(__dirname + '/1.txt', function(err, data) {
		if(err) { throw error; }
		console.log(data);
	});

post请求
	相比较get请求, post请求比较复杂。 因为node认为, 使用post请求时, 数据量会比较多。
	为了追求极致的效率, 它将数据拆分为了众多小的模块, 然后通过特定的事件, 将这些小模块有序的传递给回调函数。

	var postData = '';
	req.addListener('data', function(chunk) {
		postData += chunk;
	})

	req.addListener('end', function() {
		console.log(postData);
		var param = querystring.parse(postData);
		res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
		res.end(param.name);
	})



	//html
	<form method="post" action="/dopost">
		姓名：<input type='text' name="name" />
		<input type="submit" />
	</form>

	//js
	var http = require('http');
	var querystring = require('querystring');
	var server = http.createServer(function(req, res) {
		if(req.url == '/dopost' && req.method.toLowerCase() == 'post') {
			//post请求的一个公式
			var allData = '';
			req.addListener('data', function(chunk) {
				allData += chunk;
				console.log(chunk);
			})

			req.addListener('end', function() {
				console.log(allData.toString());
				dataString = allData.toString();
				//querystring.parse(dataString, null, null, { decodeURIComponent: gbkDecodeURIComponent})
				var obj = querystring.parse(dataString);
				console.log(obj.name);
			})
		}
	}).listen(80, '127.0.0.1'); 


formidable
	//html 
	<form method="post" action="/dopost" enctype="multipart/form-data"></form>

	//js
	var http = require('http');
	var fromidable = require('fromidable');
	var server = http.createServer(function(req, res) {
		if(req.url == '/dopost' && req.method.toLowerCase() == 'post') {
			var form = new fromidable.IncomingForm();
			form.uploadDir = './uploads'; //上传图片存放地址
			//执行里面的回调函数时候, 表单已经全部接收完毕
			form.parse(req, function(err, fields, files) {
				//所有的文本域都在fields存放
				//所有文件域files存放

				if(err) { throw err };

				console.log(fields);
				console.log(files);

				res.writeHead(200, {'content-type':'text/plain'});
				res.end('成功');

				//res.write('received upload:\n\n');
				//res.end(util.inspect({fields:fields, files:files}));
			})
		}
	}).listen(80, '127.0.0.1'); 

上传改名
	rename(oldpath, newpath, callback);

	var http = require('http');
	var fs = require('fs');
	var fromidable = require('fromidable');

	var server = http.createServer(function(req, res) {
		if(req.url == '/dopost' && req.method.toLowerCase() == 'post') {
			var form = new fromidable.IncomingForm();
			form.uploadDir = './uploads'; //上传图片存放地址
			//执行里面的回调函数时候, 表单已经全部接收完毕
			form.parse(req, function(err, fields, files) {
				if(err) { throw err };

				var old = __dirname + '/' + files.tupian.path;
				var new = __dirname + '/' + (Math.randon());

				fs.rename(old, new);

				res.writeHead(200, {'content-type':'text/plain'});
				res.end('成功');
			})
		}
	}).listen(80, '127.0.0.1'); 


ejs模版引擎

	var ejs = require('ejs');
	var fs = require('fs');
	var http = require('http');

	var server = http.createServer(function(req, res) {
		fs.readFile('./views/index.ejs', function(err, data) {
			var template = data.toString();
			var dictionary = { a:6 };
			var html = ejs.render(template, dictionary);
			console.log(html);
		})
	}).listen(80, 127.0.0.1);

express框架
	express框架是后台node框架, 和jquery bootstrap zepto都不是一个东西
	express在后台的欢迎程度, 和jquery一样,就是企业的事实上级标准

	原生node开发, 会发现很多问题, 比如：
	1、呈递静态页面很不方面, 需要处理每个http请求, 还要考虑304问题
	2、路由处理代码不直观清晰, 需要很多正则表达式和字符串函数
	3、不能集中精力写业务, 要考虑很多其他的东西

	//路由
	var express = require('express');
	var app = express();

	app.get('/', function(req, res) {
		res.send('hello');
	});

	app.get('/haha', function(req, res) {
		res.send('haha');
	});

	app.get(/\/student\/([\d]{10})/, function(req, res) {
		res.send('学号：' + req.params[0]);
	});

	app.get('/teacher/:gonghao', function(req, res) {
		res.send('工号：' + req,params.gonghao);
	})

	app.listen(3000);


	//静态文件  中间件
	var express = require('express');
	var app = express();

	//app.set('view engine', 'ejs'); 
	//engine 模版引擎 view 文件目录
	/*
	app.get('/', function(req, res) {
		res.render('haha', { //ejs文件名称 --> haha.ejs
			'news': [ ... ]
		})
	})

	//如果想处理这个网址的任何Method请求, 那么写all
	//app.all('/', function() { })

	*/
	app.use(express.static('./public'));
	app.listen(3000);

	//restful 路由设计

中间件
	1、如果get/post回调函数中, 没有next参数, 那么就匹配上第一个路由, 就不会往下匹配
	2、具体的往上写, 抽象的往下写

	app.get('/', function(req, res, next) {
		if(检索数据库) {
			console.log(1);
		}else{
			next();
		}
	});

	app.get('/', function(req, res) {
		console.log(2);
	});

	app.use()也是一个中间件, 与post get不同的是, 网址不是精确匹配, 而是能够有小文件夹扩展的
	比如： http://127.0.0.1/admin/aa/bb/cc/dd
	app.use('/admin', function(req, res) {
		res.write(req.originalUrl + '\n'); //  /admin/aa/bb/cc/dd
		res.write(req.baseUrl + '\n'); //      /admin
		res.write(req.path + '\n');  //        /aa/bb/cc/dd
		res.end('您好');
	})

get、post请求
	1、get请求的参数在url中, 在原生node中, 需要使用url模块来识别参数字符串, 
	 在express中, 不需要使用url模块, 可以直接使用req.query对象

	2、post请求在express中不能直接获得, 必须使用body.parser模块, 使用后,
	可以用req.body得到参数, 如果表单中含有文件上传, 那么还需要使用fomidable模块



	Node中全是回调函数, 自己封装函数, 里面如果有异步的方法, 比如：I/O, 那么就要用回调函数的方法封装

	student.getDetail(123, function(detail) {
		res.render('index', {
			'name': detail.name
		})
	})


project/views
	view -->文件夹 
		node_modules --> 安装包
		demo.ejs  --> 模版

	app.js --> 文件
		var express = require('express');
		var app = express();

		var data = [
			{
				title : '第一条',
				shijian: 2019-01-02,
				desc: '------'
			},
			{
				title : '第二条',
				shijian: 2019-01-02,
				desc: '------'
			}
		]

		app.set('view engine', ejs);

		app.get('/news/:id', function(req, res) {

			var id = parseInt(req.params.id);
			res.render('demo', data[id])

		}).listen(3000);

		访问http://127.0.0.1:3000/news/1
		//underscore.js模版
