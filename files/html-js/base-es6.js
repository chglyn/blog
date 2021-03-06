let, const定义变量
	var fn 存在变量声明; 声明的变量会给window增加属性（全局作用域下）
	var 只会提前声明, fn 即声明又定义

	console.log(a, fn)
	var a;
	function fn() {}

	var a = 2;
	console.log(window.a) //2

	//没有变量提升
	//不可以重复声明
	//不会给window增加属性
	console.log(a); //'a' has already been declared
	let a = 1;
	console.log(window.a) //undefined

	//没有变量提升
	//不可以重复声明
	//不会给window增加属性
	//定义变量一旦声明必须赋值
	//定义的是一个常量（不可以重新赋值）
	const a = 1;

	块级作用域
		//在fn{} for{} if{} obj{}情况下, 一个{}就是一个块级作用域;
		//在块级作用域下, var 和fn声明的变量依然是全局的
		//在块级作用域下, let和const声明的变量是私有的
		// {} 想表示一个对象, 不可以放在行首
		{
			var a = 0;
			function fn() {}
			let b = 1;
		}
		console.log(a); //0
		fn();
		console.log(b); // b not undefined
		//{name:'sunny'} 看成一个块级作用域
		//转变 ({name:'sunny'}) 
		console.log(eval('({name:'sunny'})'));

		//if(){} 中的fn只会提前声明不会定义, 当条件成立先给函数赋值, 代码再执行
		console.log(a);
		console.log(fn);
		if(1或0) {
			console.log(fn);
			var a = 1;
			function fn() {}
		}

		for() {} 点击li获取索引

结构赋值
	let arr = [1, 2, 3, 4, 5];
	//let x = arr[0];
	//let y = arr[1];
	//let z = arr[3];
	let[x, y, z, m] = arr;
	console.log(x, y, z);
	//设置默认值 只有后面结构的值是undefined时候才会走默认值
	let[x, y=10] = [1, 2];
	console.log(x, y); //1 2

	let[x, y=10] = [1];
	console.log(x, y); //1 10
	//省略赋值
	let [ , , z] = [1, 2, 3];
	console.log(z); //3
	//不定参数 将后面的项放在一个数组中赋值给y3
	let [x, y, ...y3] = [1, 2, 3, 4];
	console.log(y3);// [3, 4]
	//对象的结构赋值 
	//如果变量名和属性名一样, 可以直接省略写法
	let {name} = {name:'sunny'};
	console.log(name)
	//对象设置默认值
	let {name, age:18} = {name:'sunny', age:undefined};
	console.log(name, age); // sunny 18
	//嵌套
	let {name, age:18, list} = {name:'sunny', age:undefined, list:['js', 'vue']};
	console.log(name. age, x1, x2); //sunny 18 js vue

	let x, y;
	[x, y] = [1, 2];
	console.log(x, y); //1 2
	({x, y} = {x:1, y:2});
	console.log(x, y); //1 2
	//使用数组结构赋值, 如果等号右边不是一个数组, 默认将其转化为类数组
	let[x, y] = '123';
	console.log(x, y); //1 2
	//使用对象结构赋值, 如果等号右边不是一个对象, 默认将其转化为对象
	let {a} = 1;
	console.log(a); //undefined
	console.log(Object(a)); //{__proto__:}

	let {length:a} = '123';
	console.log(Object('123'));
	console.log(a);

	函数结构赋值
		function fn([x, y, ...z]) {
			console.log(x, y, z); //1, 2, [3, 4]
		}
		fn(1, 2, 3, 4);

		function fn({name='cherry', age=18}) {
			console.log(name, age); //sunny 18
		}
		fn({name:'sunny'});

		function fn({name='sunny', age=18}={}) {
			console.log(name, age); 
		}
		fn();//sunny 18
		fn({});// sunny 18

		function fn({name, age}={name:'sunny', age:18}) {
			console.log(name, age); 
		}
		fn(); //sunny 18
		fn({});//undefined undefined

字符串的扩展
	console.log(String.prototype);
	//include 返回值布尔 true/false
	//片段字符串中有没有指定字符
	//includes(指定字符, 开始查找的位置(可选))
	//参数2 如果不是数字默认会转化为数字 Number方法转化
	let str = 'abc123';
	console.log(str.includes('a')); //true
	console.log(str.includes('a', 2)); //false
	console.log(str.includes('a', null)); //true

	//startsWith endsWith
	//startsWith 判断字符串是不是以指定字符作为开头
	//语法：startsWith('指定字符', 开始查找的位置(可选))
	console.log(str.startsWith('a')); //true
	//endsWith 判断字符串是不是以指定字符作为结尾
	//语法： endsWith('指定字符', n); n：从前n个中查看 
	console.log(str.startsWith('c', 3)); //true

	//repeat(n) 将字符串重复n次; n 取整 不可以是负数 Infinity
	//0到-1, 取整0
	let str = '123'; 
	console.log(str.repeat(2)); //123123

	//padStart padEnd; 按照指定字符补全字符串的指定长度 (es7方法)
	//参数1：长度lenght, 参数2：指定字符
	//语法： padStart/padEnd(length, '指定字符')
	let str = 'ab';
	console.log(str.padStart(4, 'jj')); //jjab
	console.log(str.padStart(5, 'cdef')); //cdeab

模版字符串
	let name = 'sunny';
	document.body.innerHTML = `<div>${name}</div>`;

Array类上的扩展
	console.dir(Array);
	//Array 类, 是一个函数; 返回一个数组
	//Array(x, y) 将参数变成一个数组返回 [x, y];
	//只有一个参数并且参数是个数字, 返回一个有n个空位的数组
	console.log(Array('3')); //['3']
	console.log(Array(3)); //[empty x 3]

	//Array.of() 跟Array一样, 唯一不同是： 参数是一个数字的时候返回是一个只有一项的数组
	console.log(Array.of(3)); //[3]

	//Array.from() 返回一个数组; 参数是 数组或类数组
	console.log(Array.from([123])); //[123]
	console.log(Array.from('123')); //['1', '2', '3']

数组原型上的扩展方法 (所有数组实例方法 参数从索引n到索引m, 包n不包m)
	console.log(Array.prototype);
	//copyWithin 从原数组中读取内容, 替换数组的指定位置的内容
	//参数(替换的目标起始位置, 查找的起始位置, 查找的结束位置/默认到结尾)
	//原数组length不变, 如果有超出部分截取掉
	let arr = [1, 2, 3, 4, 5, 6, 7, 8];
	console.log(arr.copyWithin(4, 2, 4)); //[1, 2, 3, 4, 3, 4, 7, 8]
	console.log(arr.copyWithin(3, 2)); //[1, 2, 3, 3, 4, 5, 6, 7]

	//includes 判断数组中有没有某一项, 参数2是开始查找的位置
	console.log([1, 2].include(1)); //true

	let arr = [1, 2, 3, 4]; 
	//遍历数组的方法, 参数是一个函数, 自己函数中的this是window; 改变this指向, 可以通过第二个参数改变函数中的this
	//reduce, reduceRight不可以改变this, 第二参数给初始值赋值

	//fill 按照指定字符填充数组的指定位置(会改变原数组) 
	//将数组的每一项都变成指定字符
	console.log(arr.fill('sunny')); //['sunny', 'sunny', 'sunny', 'sunny']
	console.log(arr.fill('sunny', 2, 3)); //[1, 2,'sunny', 4]

	//filter 遍历数组, 根据返回值去过滤原数组（原数组不变） es5
	let arr = ['sunny', 1, 2, 'sunny'];
	let newArr = arr.filter(function(item, index) {
		//如果返回true留下当前项, 返回false不留下当前项;  结果返回一个新数组 
		//return true;
		//return false
		return typeof item === 'number';
	})
	console.log(newArr); //[1, 2]

	//find 先遍历数组, 一旦参数函数返回true, 停止查找 返回当前项 (es6)
	//只会查找一个
	let num = arr.find(function(item) {
		return typeof item === 'number';
	})
	console.log(num); // 1

	//findIndex 先遍历数组, 一旦参数函数返回true, 停止查找 返回当前索引
	//只会查找一个
	let index = arr.find(function(item) {
		return typeof item === 'string';
	})
	console.log(index); // 0 

	//every 遍历数组, 如果遍历每一项都返回true, 最后结果为true; 只要有一个为false, 结果为false
    let num = [1, 2, 3].every(function(item) {
    	return item === 'number'
	});
	console.log(num); //true

    let num = [1, 2, 3, 'sunny'].every(function(item) {
    	return item === 'number'
	});
	console.log(num); //false

	//some 遍历数组, 只要有一项都是true, 结果为true
    let num = [1, 2, 3, 'sunny'].some(function(item) {
    	return item === 'number'
	});
	console.log(num); //true

	//reduce 迭代
	let arr = [1, 2, 3];
	let num = arr.reduce(function(prev, item) {
		//prev 上一次的返回值
		//item 当前项
		console.log(prev);
		//return 1;
		// return prev + item;
	}, n); // n初始的值
	console.log(num); // 1 1; 6

	//reduceRight 和reduce顺序相反

	//keys 遍历每一项的索引的接口 使用for of遍历
	console.log([1, 2].keys());
	for(let key of arr.keys()) {
		console.log(key); //打印索引
	}
	//for of 遍历数组每一项的值; for in 遍历数组每一项的索引

	//entries 遍历接口 可以遍历到索引和每一项 每一次遍历得到一个数组[索引, 当前项]
	//一般可以通过数组的结构赋值获取到遍历的结果
	for(let [index, item] of arr.entries()) {
		console.log(index, item);
	}

数组的空位 --> 当前数组的某个索引位置 没有任何值, undefined不是空位
	//判断一个数组中某一个位置是不是空位 使用in方法判断
	//in 判断数组索引位置上有没有值
	let arr = [, , , ,];
	console.log(arr.length); //4 --> 查看有几个逗号
	
	let arr = [, undefined, , ,];
	console.log(1 in arr); //true
	console.log(0 in arr); //false

	//es5中数组方法对空位处理不一致, 一般直接跳过空位
	//es6中将空位处理为undefined
	let arr = [1, , , 3];
	arr.fillter(function(item) {
		console.log(item);
	})

	arr.find(function(item) {
		console.log(item);
	})

	for(let item of arr) {
		console.log(item);
	}

函数的扩展
	//参数默认值
	function fn(x='sunny', y='cherry') {
		console.log(x, y);
	}
	fn(0); //0, cherry

	//参数使用结构赋值
	function fn({name='sunny', age=18}) {
		//{name='sunny', age=18} = undefined
		console.log(name, age)
	}
	fn(); //undefined undefined 

	//length 如果形参有默认值length就会失真, 如果没有默认值就是形参的个数
	function fn(x, y=10) {}
	fn(1, 2);
	//fn(, 2); 会报错; 参数默认值一般放在最后面
	console.log(fn.length); //1

	//arguments 是一个类数组
	function fn(...arg) {
		console.log(arguments);
		console.log(arg); //数组 [1, 2]
	}
	fn(1, 2);

	有名函数的name
	function fn() {}
	console.log(fn.name) // 'fn'
	console.log((function() {}())); // ''
	//特殊情况
	//1. 通过bind方法得到一个新函数, name是bound + 原函数名
	let fn1 = fn.bind(null);
	console.log(fn1.name); //bound fn

	//2. 通过构造函数方式创建一个函数
	//new Functon('形参', '函数体')
	//new Function('函数体');
	// Function fn(形参) { 函数体}
	let fn2 = new Function('x, y', 'console.log(x, y)', return x + y);
	console.log(10, 100); // 10, 100; 110
	console.log(fn2.name);// 匿名

	//JSON字符串变成JSON对象 使用new Function()
	var str = '[{name:"sunny"}, {age:18}]';
	let arr = (new Function("return "+str))();
	console.log(arr); //arr --> [{name:"sunny"}, {age:18}]
	
参数作用域问题
	//函数执行时候先给形参赋值, 形参也是私有变量,
	//如果给形参的默认值是一个变量, 先看是不是自己的私有变量, 不是自己的, 查看在全局中是否有这个变量, 没有就报错
	let m = 10, n =100;
	function fn(x = m, y = n) {
		//私有作用域：私有变量 x, y, m, n
		console.log(x, y);
		let m = 'sunny';
		//var m = 'cherry';
		let n = 18
	}
	fn(); // 10 100

	let x = 10;
	function fn(x, y = x) {
		console.log(x, y);
	}
	fn(1); // 1 1

扩展运算符 ...
	//将非数组变成数组(类数组 length)
	let str = '123';
	console.log([...str]);//['1', '2', '3']
	function fn() {
		console.log([...arguments]);
	}
	fn(1, 2); // [1, 2]
	//将数组变成非数组
	var arr = [1, 2];
	console.log(...arr); 1 2
	//求数组最大值
	let arr = [121, 123, 134];
	console.log(Math.max.apply(null, arr));
	console.log(eval("Math max("+arr+")"));
	console.log(Math.max(...arr));

箭头函数	
	//箭头函数是匿名函数
	//函数体只有一行代码return 可以省略
	//形参只有一个时候可以省略括号
	//语法：let fn = (形参)=>{ 函数体 }
	//注意：
	//箭头函数没有this指向, 里面的this是上一级作用域下的this
	//箭头函数没有arguments
		let fn = (...arg)=>{
			console.log(arg);
		}
		fn(1, 2);
	//箭头函数不可以用作构造函数 因为不可以使用new执行
		let F = ()=>{}
		console.log(new F);//F not constructor

	let fn = x=>x+1;  == let fn = x=>{return x+1}
	//通常函数当做参数时使用箭头函数	
	
对象的扩展
	let name = 'sunny', age = 18;
	let person = {name, age} == person{name:name, age:age}

	let str = 'cherry';
	let obj = {
		fn() {},
		//fn: function() {}
		//属性名是字符串 属性名使用[] 里面放变量
		[str]:name
	}

	//Object.is(参数1, 参数2) 判断两个值是否相等
	// -0 === 0 true   NaN === NaN false

	console.dir(Object);

	//Object.assign(参数1, 参数2) 合并对象  将参数2合并到参数1上 返回一个对象
	let obj1 = {name:'sunny'};
	let obj2 = {age:18};
	let person = Object.assign(obj1, obj2); //{name:'sunny', age:18}

	es7中提供了对象的扩展运算符...
	let person = {...obj1, ...obj2}; //{name:'sunny', age:18}

	//Object.getOwnPropertyDescriptor 获取一个对象中某个描述
	console.log(Object.getOwnPropertyDescriptor('123', 'length'));
	
	//字符串的length不可以修改, 字符串中的方法是不可以改变原字符串
	let str = '123';
	str.length = 0;
	console.log(str); //123
	/*
	* configurable:false 是否可配置 可以删除这个属性
	* enumerable:false 是否枚举 (用for in遍历不出来)
	* value: 3
	* writeable: false 是否可以修改
	*/
	
	let person = {name:'sunny', age:18};

	//Object.keys()  返回值是数组 [所有可枚举的属性]
	console.log(Object.keys(person)); //['name', 'age']

	//Object.values() 返回值是数组 [所有可枚举的属性的键值]
	console.log(Object.values(person)); // sunny 18

	//Object.entries() 返回值是数组 [每一项也是一个数组[键, 值]]
	console.log(Object.entries(person)); //[['name', 'sunny'], ['age', '18']]

对象的set和get
	let obj = {
		_name: 'A',
		get name(){
			//通过obj获取name属性就会触发这个函数
			//可以通过teturn获取返回值
			//console.log(1);
			return this._name;
		}
		set name(val) {
			//val 设置的值--> 通过obj给name属性设置值就会触发这个函数
			//console.log(2); this == obj
			this._name = val;
		}
	}
	console.log(obj.name); // sunny
	obj.name = 'cherry';

Symbol
	//Symbol 是一个新的基本数据类型  而且是一个值类型
	//使用Symbol函数执行 得到一个Symbol数据类型
	//Symbol跟字符串类型差不多 但是使用Symbol函数得到一个数据 每一个是完全不同的
	let sym = Symbol(); 
	let sym2 = Symbol();
	typeof sym; //'symbol'
	sym == sym2; // false

	//Symbol可以接受一个参数(); 参数是对Symbol数据类型的描述
	//即使描述一样, 但是值也是不一样的 
	let sym = Symbol('fn');
	let sym2 = Symbol('fn');
	sym == sym2; // false

	//一般当做对象的属性； 任意一个Symbol得到的值都是不同的
	let obj = {
		sym: 'sunny',
		[sym]: 'sunny'
	}
	obj.[sym2] = 'sunny';
	console.log(obj); //得到三个不同的值

	//Symbol值不可以跟其他值计算
	//Symbol 不可以转化为数字
	//Symbol 不可以字符串拼接
	console.log(Symbol('1') + 1); //报错
	Number(Symbol(1)); //报错
	Symbol(1) +'1';

	//可以转化为布尔值
    !Symbol('1'); //false

    //可以toString变成显示字符串
    console.log(Symbol('ZF').toString()); // "Symbol('ZF')"

    //Symbol.for() 如果之前有相同参数的Symbol的值, 找到这个值返回
    //如果没有找到, 就创建一个新的Symbol值
    let foo = Symbol('sunny');
    let foo2 = Symbol.for('Sunny');
    let foo3 = Symbol.for('Sunny');
    foo == foo2; //false
    foo2 == foo3; // true

   // Symbol.keyFor(symbol值) 找到使用Symbol.keyFor()创建的值的描述
   //如果使用的是Symbol创建的是获取不到的 
   Symbol.keyFor(foo2); //sunny
   Symbol.keyFor(foo); //undefined

set
	//类似数组 只有值val,  没有键key
	//通过构造函数方式, 创建一个set实例
	 new Set(); //{ ... }

	//参数是一个数组 或者是类数组 只要是有enterable接口
	//有interable接口： 数组, arguments 元素集合 map  Set 字符串
	//特点： 会默认去重
	new Set([1, 2, 2]); // {1, 2}

	//size: set实例的大小个数
	// add 增加 如果之前没有则添加上， 如果存在，不加; 返回值是增加后的set实例(可以实现链式写法)
	//参数一次添加一个
	let  set = new Set([1, 2, null, true]);
	set.add(1).add(10).add(20, 300); // 

	//delete(删除的值) 删除 返回值是true/false 如果里面有这一项就删除成功/true, 否则删除失败/false
	set.delete(1);// true
	set.delete(1000); //false

	//has 判断有没有这一项 返回值是true/false
	set.has(NaN); //false

	//clear 清空; 没有返回值 undefined
	set.clear(); //{ }

	// forEach keys values entries 遍历方法
	set.forEach((item, index, input)=>{
		//item, index 当前项
		//input 当前set实例
		console.log(item, index); 
	})

	for(let key of set.keys()) {
		//key 是val
	}

	for(let value of set.values()) {
		//value 是val
	}

	for(let key of set.entries()) {
		//key 是val
	}

set使用场景
	//数组去重

	let arr1 = [1, 3, 5, 8, 9];
	let arr2 = [2, 4, 6, 8, 0];
	
	//并集
	function add(arg, arg2) {
		return [...new Set([...arg, ...arg2])]
	}

	//交集
	function same(arg, arg2){
		return arr.filter(item=>arg2.includes(item));
	}

	//差集   并集 - 交集
	function diff(arg, arg2)  {
		return add(arg, arg2).filter(item=>!same(arg, aeg2).includes(item));
	}

Map
	//构造函数方式创建一个Map实例
	//参数是一个数组, 数组的每一项也是一个数组, 有两项key, value
	//属性名不可以重复
	let map = new Map([[key, val], [] ])
	let map = new Map([ [], [] ])

	//一个对象属性名必须是一个字符串, 如果写的不是字符串也默认转化为字符串
	//Map实例的 可以是任意数字类型
	//size: 键值对的个数
	let map = new Map([['name', 'snuuy'], [1, 'money'], [[1, 2], [1, 2]]]);

	//get(key) 获取value
	map.get('name'); //snuuy

	//set(ke, vale); 之前有key, 会修改之前的value; 没有返回新的实例(可以链式写法)
	map.set(1, 2);

	//has(key); 判断key有没有对应的value; 返回true/false
	map.has(1);

	//delete(key); 删除实例中的属性; 返回值true/false
	map.delete(1);

	//clear 清空 没有返回值 
	map.clear();

	//forEach keys values entries 遍历方法
	map.forEach((val, key, input)=>{
		console.log(val, key, input);
	})

	for(var key in map.keys()) {
		console.log(key);
	}

	for(var value in map.values()) {
		console.log(value);
	}

	for(var [key, val] in map.entries()) {
		console.log(key, val);
	}

	//???数组变成Map实例
	var arr = [...];
	let map = new Map();
	for(var [key, val] of arr) {
		map.set(key, val);
	}
Proxy --> 对象默认操作拦截
	//new Proxy({参数1:目标对象}, {参数2:拦截的方法}); 
	let obj = {name:'sunny'};

	//让proxy代理了 obj; 需要通过proxy 操作代理的obj
	let proxy = new Proxy(obj, {
		//get 只要是获取,  例如：proxy.name 就会触发get
		get(target, key, proxy) { // target:目标对象 key：属性名 proxty：当前实例
			console.log(arguments);
			//return 'cherry'
			//return 什么, 就获取什么, 或者就是undefined
			return target[key];
		}
	});
	console.log(proxy.name);//sunny

	let proxy = new Proxy(obj, {
		get(target, propKey, receiver) {
			return target[propKey]
		},
		set(target, propKey, value, receiver) {
			target[propKey] = value;
			return true
		},
		has(target, propKey) {
			if(propKey.startsWith('_')) {
				return false;
			}
			return propKey in target;
		},
		apply() {

		}
	}) 
	proxy.name = 'cherry';
	consoel.log(obj);

	console.log('name' in proxy);//true
	console.log('__proto__' in proxy);//false


	function fn() {
		return {name:'sunny'};
	}
	let proxy = new Proxy(fn,{
		apply(target, object, args) {
			//函数直接执行 call apply
			//args 函数执行的参数
			//object 给函数修改this
			if(object){
				object.fn=target;
				object.fn(...args);
				delete object.fn;
			}else{
				target(...args);
			}
		}
	});

	proxy();

class中的constructor
	class Fn{
		constructor(x) {
			//this:当前实例
			this.x = x; //增加私有属性
			//return 的是基本数据类型对实例没有影响, 
			//如果是引用数据类型 会改变实例
		}
	}

	let fn = new Fn(10); --> { x:10 }
	// Fn();  类必须使用new执行, 不可以作为普通函数执行
	typeof Fn; // 'function'

	//class的name问题
	class Fn(){
		constructor() {
			console.log(Fn.name); //Fn
		}
		getFn() {
			console.log(Fn.name); //fn
		}
	}
	/*
	let Fn1 = class Fn(){
		//Fn 只能在类里面使用
		constructor() {
			console.log(Fn.name); //Fn  -->就近原则
		}
	}
	*/
	let fn = new Fn();

class中的执行变量
	class Person{
		constructor(name) {
			this.name = name;
		}
	}
	let person = new Person('sunny');

	//采用class表达式让类执行
	// es6中class 和 let const 一样没有变量提升
	let person = new Class{
		constructor(name) {
			console.log(name);
		}
	}('sunny');

class静态方法
	//类就相当于原型, 
	//写在原型上的方法都被实例继承
	//static关键字不会被实例继承 可以被子类继承
	class Person() {
		constructor() {}
		getName() {
			console.log('sunny');
		}
		static getAge() { //静态方法
			console.log('cherry'); 
		}
	}

	class Son extends Person{
		getPerson() {
			super.getAge()
		}
	}

	let person = new Person;
	person.getName(); // sunny
	person.getAge();

	let son = new Son;
	son.getPerson();

	//子类继承父类 子类中没有this; super执行完之后才会有this
	class A{
		constructor(x) {
			//super 父类的constructor
			this.x = x;
		}
		getX() {
			console.log(this.x);
		}
		getY() {}
	}

	class B extends A{
		constructor(x) {
			//super 执行不能写this
			//super就是父类的constructor
			super(x); 
		}	
		getA() {
			//super 指向父类的原型
			super.getX() {}
		}	
		//static 父类的静态方法也可以继承
		static getY() {
			//super 指向父类本身
			super.getY();
		}
	}
	let a = new A(10);
 	let b = new B(100);

promise
	//执行顺序：先执行new Promise中的函数 --> 队列中同步代码 --> then中的回调函数
	let pro = new Promise((resolve, reject)=>{
		//resolve 
		//reject
		//resolve 和 reject 只能执行一个
		console.log('promise')
		resolve('success');
		reject('error');
	})
	//then函数异步执行
	pro.then((res)=>{
		//resolve 成功的回调
	},(e)=>{
		//失败的回调
		console.log(e);
	})

	//catch捕获错误异常 如果new promise中有错误被捕获
	//如果then中回调有错误, 也会被捕获; 一般最后添加catch 不会一直向下then


	console.dir(promise);

	//all 
	//Promise.all([每一项都是Promise, 如果不是默认转化为Promise])
	// 一旦发现有一项是错误 就会走失败;
	//每一项都是成功 才会走成功回调; 默认将每一项的参数放在一个数组中, 传给回调函数
	let pro = new Promise((resolve, reject)=>{
		resolve('ok');
	})
	let pro1 = new Promise((resolve, reject)=>{
		reject('error');
	})

	let pro2 = new Promise((resolve, reject)=>{
		resolve('ok');
	})

	let proAll = Promise.all([pro, pro1, pro2]);
	console.log(proAll);//----
	proAll.then((res)=>{
		console.log(res); //['ok', 'ok']
	}, catch(e)=>{
		console.log(e)
	})	

	//race 
	//只要有一个状态改变, 此时当前实例的状态就改变
	Promise.race([pro, pro1, pro2]).then((res)=>{
		console.log(res);
	}, catch(e)=>{
		console.log(e);
	})
	
	//实现promiseAll
	function PromiseAll(promises) {
		return new Promise((resolve, reject) => {
			let index = 0;
			let res = Array(promises.length);

			for(let i = 0; i<promises.length;i++) {
				promises[i].then(val => {
					index ++;
					res[i] = val;
					if(index == promises.length) {
						resolve(res);
					}
				}, error => {
					reject(error);
					return;
				})
			}
		})
	}

	let p1 = new Promise(resolve => resolve('p1'));
	let p2 = new Promise(resolve => resolve('p2'));
	//let p3 = Promise.reject('p3');

	PromiseAll([p1, p2]).then(res => {
		console.log(res);
	}, error => {
		console.log(error)
	})
	

async 
	//async 默认返回一个Promise对象
	async function fn() {
		//return出的内容就是成功回调函数
		//有错误就会被catch捕获到
		return 'sunny';
	}
	fn().then((res)=>{
		console.log(res); //sunny
	}, catch(e) {
		console.log(e);
	})


	let p = new Promise((resolve, reject)=>{
		resolve('sunny');
	});
	async function foo() {
		//await 后面是一个promise实例, 如果不是也会转化为promise
		//直接让promise实例的回调执行, 返回执行时的参数
		//await 不用通过then就可以拿到resolve或reject参数
		console.log(await p); // sunny
		//先将await 后面的异步执行完成后, 再执行后面的代码
		let a = await p;
		console.log(a);
	}
	foo().then((res)=>{
		console.log(res);
	}, catch(e)=>{
		consoel.log(e);
	})

