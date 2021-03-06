组件化分析：
	模块化：从代码角度进行分析 --> 把可复用的代码, 抽离为单个模块, 便于项目维护开发
	组件化：从UI界面角度进行分析 --> 把一些可复用的UI元素, 抽离为单个组件
	组件化好处：随着项目的增大, 组件越来越多, 很方便把现有的组件, 拼接为一个完整的界面
	Vue是如何实现组件化的：创建.vue文件, 创建对应的组件
	React是如何实现组件化的：一切都是基于JS来表现

DOM和虚拟DOM
	DOM的本质是什么：浏览器中的概念, 用JS对象来表示页面上的元素, 并提供了操作DOM对象的API
	什么是React中的虚拟DOM：是框架中的概念, 用JS对象来模拟, 页面上的DOM和DOM嵌套
	虚拟DOM的目的：为了实现界面中, DOM元素的高效更新
	本质：用JS对象来模拟, 页面上的DOM和DOM嵌套关系
	目的：为了实现页面元素的高效更新

Diff算法
	tree diff：
		新旧两颗DOM树, 一层一层对比的过程, 就是Tree diff; 当整颗DOM对比完毕, 则所有需要被按需要的元素, 必然能够找到
	component diff： 
		在进行tree diff时候, 每一层中, 组件级别的对比; 
		如果对比前后, 组件类型相同, 则暂时不需要被更新；
		如果对比前后, 组件类型不同, 创建新组件, 并追加到页面上
	elem diff：
		在进行组件对比的时候, 如果两个组件类型相同, 则需要进行元素级别的对比
    
Node和Chrome之间的关系
	如果chrome浏览器支持的, 则node就支持
  
// cnpm i react react-dom -s
使用React创建基本的虚拟DOM
  //必须这么写
  import React from 'react'
  import ReactDOM from 'react-dom'

  //参数1 创建的元素类型, 字符串, 表示元素的名称
  //参数2 是一个对象或null, 表示当前这个DOM元素的属性
  //参数3 子节点(包括其他, 虚拟DOM, 获取文本子节点)
  //参数n 其他子节点	
  const myh1 = React.createElement('h1', null, '这是一个h1');
  const myh1 = React.createElement('h1', { id:'myh1', title:'这是个h1' }, '这是一个h1');

  //使用ReactDOM把虚拟DOM渲染到界面上
  //参数1 要渲染的那个虚拟DOM
  //参数2 指定页面上一个容器, 第二个元素接收的应该是一个DOM元素 而不是选择器
  ReactDOM.render(myh1, document.getElementById('app'));

节点嵌套
	const myh1 = React.createElement('h1', { id:'myh1', title:'这是个h1' }, '这是一个h1');
	const mydiv = React.createElement('div', null, '这是一个div元素', myh1);
	ReactDOM.render(mydiv, document.getElementById('app'));
  
jsx语法事项
	//注意：在js文件中不能使用这种html的标记
	//可以使用babel来转换 
	//添加.babelrc文件 { 'presets'：['env', 'stage-0', 'react'], 'plugins':['transform-runtime'] }
	//jsx语法, 符合xml规范的js
	//jsx语法本质: 在运行时候, 被转化成了React.createElement形式来执行
	//配置webapck module时添加excludes
jsx中书写js代码
	let a = 10
	let str = 'hello world'
	let boo = true
	const h1 = <h1>这是一个h1</h1>
	const arr = [
		<h2>这是h2</h2>,
		<h3>这是h3</h3>
	];
	const arrstr = ['三毛', '娃哈哈'];
	/*外部使用遍历
	需要把key添加给forEach、map、for循环直接控制的元素
	vue和React中key的作用 需要保存状态, 使用:key="item.id"
	const newArr = [];
	arr.forEach(item=>{
		const temp = <h5 key={item}>{item}</h5>
		newArr.push(temp);
	})
	什么情况下使用{}： 需要在jsx控制区域内写js表达式, 则需要把js代码写到{}中
	jsx语法注意事项
		注释使用js语法
			1、	{ /* 注释 */}
			2、	{
					//注释...
				}

		为jsx中的元素添加class类名：需要使用className来代替, htmlFor替换for属性
		在jsx创建DOM时候, 所有的节点, 必须有唯一的根元素进行包裹
		在jsx语法中, 标签必须成对出现, 则必须自闭合
	*/
	ReactDOM.render(<div>
		{a + 2}
		<hr />
		{str}
		<hr />
		{boo?'条件为真':'条件为假'}
		<hr />
		<p title={str}>p标签</p>
		<hr />
		{h1}
		<hr />
		{arr}
		<hr />
		{newArr}
		<hr />
		{arr.map(item => <h3 key={item}>{item}</h3>)}
	</div>, document.getElementById('app'))

创建第一种组件并为组件传递props值
	function Hello(props) {
		//如果在一个组件中 return null, 则表示组件为空的 什么也不渲染
		//在组件中必须返回一个合法的jsx虚拟DOM元素
		//不论是vue 还是react 组件中的props只能只读 不能赋值

		return <h1>这是Hello组件 --> {props.name}</h1>
	}
	const person = {
		name: 'sunny',
		age: 18,
		sex: male
	}
	ReactDOM.render(<div>
		{/* 直接把组建的名称 以标签的方式 丢在页面上 */}
		{ /*单个传值*/ }	<Hello name={person.name}></Hello>
 		{ /*多个传值*/ } <Hello {...person} />
	</div>, document.getElementById('app'))

	抽离组件
		//(webpack-->resolve模块-->extensions属性-->.js/.jsx/.json, 按顺序填写 表示这几个文件的后缀名可以省略)
		//webpack-->resolve模块-->alias-->'@':path.join(__dirname, './src') @表示项目根目录中src这一层目录
		创建components文件夹, 在该目录下创建Hello.jsx文件, 存放Hello代码
		然后使用 export default Hello 导出组件, 再引入import React from 'react';  
		导入组件 import Hello from './components/Hello'
			  //import Hello from '@/components/Hello' --> @表示项目根目录中的src这一层目录

es5构造函数
	function Person(name, age) {
		this.name = name;
		this.age = age;
	}
	//info属性 直接挂在了构造函数 所以是静态属性 可以通过Person.info访问
	Person.info = 'info'; 
	//实例方法
	Person.prototype.say = function() {
		console.log('Person的实例方法')
	}
	//静态方法
	Person.say = function() {
		console.log('Person静态方法')
	}
	var p = new Person('sunny', 18);
	console.log(p);
	p.say();
	Person.info();
//========================================
es6 class关键字
	//在class{}的区域内 只能写构造器 静态方法 静态属性 实例方法
	//class关键字内部 还是用原来的配方实现的 简称语法糖
	class Son{
		//这是类中的构造器
		// 类中的构造器：每一个类中都有一个构造器, 如果没有手动指定构造器 可以认为内部有一个隐藏的构造器
		// 构造器作用：new这个类的时候 优先执行构造器中的代码
		constructor(name, age) {
			this.name = name;
			this.age = age;
		}
		//在class内部, 通过static修饰的属性, 就是静态属性
		static info = 'info'
		//实例方法
		say() {
			console.log('Son的实例方法');
		}
		//静态方法
		static say() {
			console.log('Son静态方法');
		}
	}
	const s = new Son('sunny', 18);
	console.log(s);
	s.say();
	Son.say();

class继承
	//理解成原型对象 prototype
	class People{
		constructor(name, age) {
			this.name = name;
			this.age = age;
		}
		say() {
			console.log('hello');
		}
	}
	//在class类中 使用extends关键字实现子类继承父类
	//语法： class 子类 extends 父类
	class American extends People{
		constructor(name, age) {
			// 为何在constructor中使用super
			// 如果一个子类 通过extends关键字继承父类, 那么在子类的constructor构造函数中必须优先调用一下super();
			// super是什么
			//super是一个函数 是父类的构造器; 子类中的super就是父类中的constructor构造器的一个引用
			//如果没有传参 调用了super之后a1实例的name和age都变成undefined
			super(name, age);
		}
	}
	const a1 = new American('sunny', 18);
	console.log(a1);
	a1.say();

	class Chinese extends People{
		//IdNumber 身份号 中国独有的 就不能挂载父类上
		constructor(name, age, IdNumber) {
			//子类中 this只能放在super后面使用
			super(name, age);
			this.IdNumber = IdNumber;
		}
	}
	const c1 = new Chinese('cherry', 18, '13100*****');
	console.log(c1);
	c1.say();
创建第二种组件并为组件传递props值
	class Hello extends React.Component{
		//在组件中, 必须有render函数
		//render作用：渲染当前组件所对应的虚拟DOM结构, render相当于实例方法
		render() {
			//render函数中, 必须有返回的合法jsx虚拟DOM结构
			//在class关键字创建的组件中, 如果使用外界传递过来的props参数, 不需要接收, 直接通过this.xxx = xxx访问即可
			return <div>
				{/*在class组件内部, this表示当前组件的实例对象*/}
				这是第二个Hello组件 --> {this.props.name}
				}
			</div>
		}
	}
	var user = {
		name: 'cherry',
		age: 18
	}
	ReactDOM.render(<div>
		{/*<Hello name={user.name} />*/}
		<hr />
		<Hello {...user} />
	</div>, document.getElementById('app'))
两种创建组件方式的对比
	使用构造函数创建出来的组件, 叫无状态组件
	使用class关键字创建出来的组件, 叫有状态组件
	什么情况下使用有状态组件, 什么情况下使用无状态组件
		如果一个组件需要有自己的私有数据, 推荐使用class创建有状态组件
		如果一个组件不需要有自己的私有数据, 推荐使用无状态组件
		React官方： 无状态组件,由于没有自己的state和生命周期函数, 所以运行效率比有状态运行效率高
	有状态组件和无状态组件之间的本质区别就是：有无state属性, 有无生命周期函数
	组件中的props和state/data之间的区别
		props中数据, 都是外界传递过来的
		state/data中数据, 都是组件私有的
		props中数据都是只读状态, 不能赋值
		state/data中的数据, 可读可写
		
style行内样式
	const itemStyle = {color:'red', fontSize:'16px', fontWeight:400}
	//封装样式
	const itemStyle = {
		item1: {color:'red', fontSize:'16px', fontWeight:400}
	}
	class Hello extends React.Component{
		render() {
			{/* 在jsx中, 如果想写行内样式, 不能为style设置字符串值 */}
			{/* 而应该这么写 style={ { color:'red' } } */}
			{/* 在行内样式中, 如果是数值类型的形式, 则可以不用引号包裹, 如果是字符串类型的类型值, 则必须使用引号包裹 */}
			
			return <div style={ {color:'red', fontSize:'16px', fontWeight:400} }>
				这是第二个Hello组件 --> {this.props.name}
				}
			</div>
			<hr />
			return <div style={ itemStyle }>
				这是第二个Hello组件 --> {this.props.name}
				}
			</div>
		}
	}
	
怎么添加样式表追加样式
	//导入列表组件需要的样式表
	//直接导入的css样式表, 默认是在全局上生效的
	import cssobj from '@/css/style.css'

	class Hello extends React.Component{
		render() {
			return <div className="title">
				这是第二个Hello组件 --> {this.props.name}
			</div>
		}
	}
为普通样式表通过modules参数启用模块化
	webpack：
		rules:{
			//css-loader之后通过?追加参数
			//有个固定参数叫做 modules 表示为普通css样式表 启用模块化
			{
				test:/\.css$/,
				use:[ 'style-loader', 'css-loader?modules']
			}
		}

		class Hello extends React.Component{
			render() {
				{/* css模块化只针对类选择器和id选择器生效 */}
				return <div className="{cssobj.title}">
					这是第二个Hello组件 --> {this.props.name}
					}
				</div>
				
				{/*多个className 
				return <div className="{[cssobj.title, 'test'].join(' ')}">
					这是第二个Hello组件 --> {this.props.name}
					}
				</div>
				*/}
			}
		}

使用localIdentName自定义生成的类名格式, 可选参数有：
	[path] 表示样式表 相对于项目跟目录, 所在路径
	[name] 表示样式表文件名称
	[local] 表示样式表的类名定义名称
	[hash:length] 表示32位的hash值
	如：{test:/\.css$/, use:['style-loader', 'css-loader?module&localIdentName=[path][name]-[local]-[hash:5]']}

使用:local()和:global()
	:local()包裹的类名 是被模块化的类名 只能通过className = [cssobj]来使用
	同时, 默认不可以不写,这样默认在样式表中定义的类 都是被模块化的类名
	:global()包裹的类名 是全局生效的 不会被css-modules控制 定义的类名是什么, 就是使用定义的类名className="类名"
	使用方法, 如： :global(.test) { color:red; }
	注意：只有.title这样的类样式选择器, 才会被模块化控制, 类似于body这样的标签选择器, 不会被模块化控制
	
React中的绑定事件、 this.setState修改state上的数据、绑定文本框的值
	import React from 'react'
	export default class BindEvent extends React.Component{
		constructor() {
			super();
			//私有数据
			this.state = {
				msg: 'hello',
				age: 18
			}
		}
		//实例方法
		render() {
			return <div>
				BindEvent组件
				<hr />
				{/* 事件名 小驼峰命名 */}
				<button onClick={function(){console.log('ok')}}>click me</button>
				<hr />
				{/* 函数添加括号, 获取的是返回值 */}
				<button onClick={this.clickEvent}>click me</button>
				<hr />
				{/* onClick只接收function作为处理函数, 箭头函数本身就是一个匿名的函数 */}
				<button onClick={ ()=>{ this.clickEvent('参数') } }>click me</button>
				<hr />
				<button onClick={ ()=>this.clickEvent('参数', '参数2') }>click me</button>
				<div>{this.state.msg}</div>
				<hr />
				{/*  如果只提供了value, 没有提供onChange事件, 得到的文本框只是一个只读的文本框状态 */}
				{/* 当为文本框绑定value后, 要么提供一个readonly属性, 要么提供一个onChange事件 */}
				<input type="text" style={{width:'100%'}} value={this.state.msg} readonly />
				<hr />
				<input type="text" style={{width:'100%'}} value={this.state.msg} onChange={(e)=>this.txtChange(e)} ref="txt" />
				<!-- 不使用箭头函数 
					<input type="text" style={{width:'100%'}} value={this.state.msg} onChange={this.txtChange.bind(this)} />
				-->
			</div>
		}

		//实例方法
		clickEvent = (arg, arg2)=>{
			console.log('===' + arg + arg2);
			//需求：修改msg值
			//在React中, 如果想为state中的数据重新赋值, 不能使用this.xxx=值;
			//应该调用 React提供的this.setState({ msg:'123' })
			//this.setState方法执行是异步的
			this.setState({
				//在setSate中 只会把对应的state状态更新, 不会覆盖其他的state状态
				msg: '^_^' + arg + arg2;
			}, function() {
				console.log(this.state.msg);
			})
			//打印设置的值, 需要使用 this.setState({}, callback)
			
		}
		/*
			clickEvent(arg) {
				console.log('===' + arg);
			}
		*/
		txtChange = (e) => {
			//获取文本框的值：第一种, 通过事件参数e获取; 
			console.log(e.target.value);
			//第二种：通过ref引用获取
			console.log(this.refs.txt.value);

			const newVal = e.target.value;
			this.setState({
				msg: newVal
			})
		}
		/*
		txtChange(e) {
			console.log(e.target.value);
		}
		*/
	}

	import BindEvent from '@/components/BindEvent'
	ReactDOM.render(<div>
		<BindEvent></BindEvent>
	</div>, document.getElementById('app'))

React组件生命周期
	生命周期：每个组件的实例, 从创建、到运行, 直到销毁, 在这个过程中, 会触发一系列函数, 这些事件叫做组件的生命周期函数

	React创建阶段 特点：只执行一次
		componentWillMount
		render
		componentDidMount
	组件运行阶段 根据props属性或state状态的改变, 有选择的执行0到多次
		componentWillRecelveProps
		shouldComponentUpdate
		componentWillUpdate
		render
		componentDidUpdate
	组件销毁阶段 特点：只执行一次
		componentWillUnmount
		
