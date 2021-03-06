 && 运算符比 || 高
/*
	一旦经历了var的操作，所得出来的属性，window，这种属性叫做不可配置的属性
	不可配置的属性delete不掉
*/
	eg:
	var num = 123;
	delete window.num //false

typeof null => object
typeof NaN => number
true => 1
false => 0
Number([]); --> 0
数据类型：number string boolean undefined function object

typeof:返回数据类型的字符串表达 
	能判断：undefined 数值 字符串 布尔 function 
	不能判断：null object Array
instanceof 判断对象的具体类型 (实例)
var a;
	a === undefined //true
	typeof a==='undefined' //true
	a = null;
	a===null // true;
	typeof a === 'object' //true

var o = null;
	o = 2;
	o =null; //让o指向的对象成为垃圾对象(被垃圾回收器回收)

内存的分类
	栈：全局变量/局部变量 (标识这个对象的变量)
	堆：对象（对象本身）
***************************************
函数声明整体提升
变量 声明提升
imply global暗示全局变量
即任何变量，如果变量未经声明就赋值，此变量就为全局变量所有。
	a=10  ==> window.a=10;
一切声明的全局变量，全是window的属性
	var a=1; ==>window.a=1;
***************************************
预编译发生在函数执行前一刻
//预编译
	创建AO对象  Activetion Object
	找形参和变量声明，将变量和形参名作为AO属性名，值为：undefined
	将实参值和形参统一
	在函数体里面找函数声明，值赋予函数体
	再执行...
***********************函数***********************
function foo() {
	console.log(this)
}
foo.call() --> foo(); 

function fn(a) {
	console.log(a); //function a() {}
	
	var a=123;
	console.log(a) //123
	
	function a() {}
	console.log(a); //123
	
	var b=function() {}
	console.log(b); //function b() {}
	
	function d() {}
}
fn(1);

global object ===window === GO

//解析
function a() {
   function b() {
      function c() {}
      c();
   }
   b();
}
a();

a defined a.[[scope]] --> 0:GO
a doing a.[[scope]] --> 0:aAO
		   -->  1:GO
b defined b.[[scope]] --> 0:aAO
		   -->  1:GO		  
b doing b.[[scope]] --> 0:bAO
		   -->  1:aAO
		   -->  2:GO
c defined c.[[scope]] --> 0:bAO
		   -->  1:aAO
		   -->  2:GO	
c doing a.[[scope]] 0 -->cAO
		    1 --> bAO
		    2 --> aAO
		    3 --> GO
		
//闭包： （内部的函数被保存到外部时，将会生成闭包。闭包会导致原有作用域链不释放，造成内存泄漏。） 里面的函数比外面的函数活着还长 ^-^
function a() {
   function b() {
	var bbb=234;
	console.log(aaa);
   }
   var aaa=123;
   return b;
}
var glob=100;
var demo=a();
demo(); //123
闭包一定是嵌套函数
内层函数一定操作了外层函数的局部变量
外层函数一定将内层函数返回外部, 并且被全局变量保存住
***************************************
function a() {
  var num = 100;
  function b() {
	num ++;
	console.log(num);
  }
  return b;
}
var demo = a();
demo(); //101
demo(); //102
***************************************
function test() {
	var arr = [];
	for(var i = 0; i < 10; i++) {
		arr[i] = function() {
			console.log(i); // 打印10个10
		}
	}
	return arr;
}

var myArr = test();
for (var j = 0; j < 10; j++) {
	myArr[j]();
}
上面函数修改如下
function test() {
	var arr = [];
	for(var i = 0; i < 10; i++) {
		(function(j) {
			arr[j] = function() {
				console.log(j);  //0 - 10
			}
		}(i))
	}
	return arr;
}

var demo = a;
function test() {
	var abc = 123;
	function a() {
		console.log(abc); //123
	}
	demo = a;
}
test();
demo();
***************************************
	a = 100;
	function demo(e) {
		function e() {}
		arguments[0] = 2;
		console.log(e); //2
		if(a) { //if里面不能放函数，之前可以放函数
			var b = 123;
			function c() {}
		}
		var c;
		a = 10;
		var a;
		console.log(b); //undefined
		f = 123;
		console.log(c); // undefined 或者 function c() {}
		console.log(a); //10
	}
	var a;
	demo(1);
	console.log(a); //100
	console.log(f); //123
***************************************
//立即执行函数 -> 执行完立即释放
	(function(a, b, c) { //形参
		console.log(a+b+c);
	}(1, 2, 3)); //实参

	var num = (function(a, b, c) { 
		 var d = a + b + c;
		 return d; //6
	}(1, 2, 3));

******只有表达式才能被执行符号执行******
	var test = function() {
		console.log('a'); //a
	}();
 
 	第二次执行 test(); //undefined;
*****************************************
 function test(a, b) {
 	console.log(a+b); // 什么也不输出
 }(1, 2);
 ***************************************
 （正负非）+|-|! function test() {
	console.log('a') //a
 }();
***************************************
逗号运算符：
a = (1 - 1, 1 + 1); //2 计算前面结果，再计算后面运算结果 => 返回后面结果

	var x = 1;
	if(function f() {}) { // 表达式, 再执行
		x += typeof f;
	}
	console.log(x); //1undefined
******************************对象************************
//js对象比较灵活 可以增加、改变方法
对象模型：
	var obj = {
		//属性: 值
		name: 'sunny',
		sex: 'male',
		age: '20',
		health: 100,
		say: function() {
			//obj.health --;
			console.log(this.name);  //this --> obj
		}
	}
	访问属性：obj.name;
	删除对象属性：delete obj.sex;
	修改对象属性：obj.age = 18;
	添加对象属性：obj.sex = 'female';
对象创建方法：
	var obj = {} plainObject 对象字面量/对象直接量
	var obj = new Object(); //系统自带的构造函数  new Array() new String()
	自定义 
	//（构造函数和普通函数结构上没区别，存在new才会返回一个对象）
	//构造函数命名规则 --> 大驼峰命名
	function Person() {}
	var person = new Person();
	
	function Car(color) { // color --> 参数
		this.color = color;  // color --> 接受参数
		this.name = 'BMW';
		this.width = 4900;
		this.height = height;
		this.health = 100;
		this.run = function() {
			this.health --;
		}
	}
	var car = new Car('red')//car变量写成Car走预编译环节，进行覆盖
	//console.log(car); --> 返回一个对象
	var car1 = new Car('green');
	car.name = 'Maserati';
	car1.name = 'Marz';
	//打印car car1 的name属性不同互不影响
	//car调用run -->health降低，car1没调用-->health没变化、、
构造函数内部原理（有new存在时）
	在函数体最前面隐式的加上this = {};
	执行this.xxx = xxx;
	隐式的返回this;
	
	function Student(name, age, sex){
		//隐式添加 this = {
		//	name: '',
		// 	...
		//}; 
		//AO:{this:{name:'xiaoliu'}};
		this.name = name;
		this.age = age;
		this.sex = sex;
		this.grade = 2018;
		//隐式添加 return this;
	}
	var student = new Student('xiaozhang', 18, 'male');
	//打印studen返回一个对象
	
	 function Person(name, height) {
	 	//隐式添加 var this = {};
	 	this.name = name;
		this.height = height;
		this.say = function() {
			console.log(this.say); 
		}
		//显示添加 return {};  --> 返回一个空对象
		//显示添加 return 123/(原始值); 返回原始值相当于renturn this --> 返回一个对象
		//隐式添加 return this;
	 } 
	 console.log(new Person('xiaoliu', 180).name);
	 var person = new Person(); 
	
	function Person(name, height) {
		var that = [};
		var that.name = name;
		var that.height = height;
		return that;
	}
	var person = new Person('xiaoliu', 180);
	var person1= new Person('xiaozhang', 175);
	//person person1 各自返回一个各自的对象
************************包装类************************
原始值没有属性和方法
var num = 123;
var num = new Number(num);
num.abc = 'a';
console.log(num); --> 返回一个对象
console.log(num * 2); 246 --> 能计算，又返回原类型

由对象特征给String添加属性
var str = new String('abcd');
//str.abc = 'a';
//访问str.abc --> undefined

var num = 4;
num.len = 3;
//new Number(4).len = 3; 新建一个数字对象，新建的数字对象；len赋值3 然后销毁delete
//new Number(4).len; 再一次重新创建数字对象，添加一个属性len；和上面new Number不同
console.log(num.len); //undefined

var str = 'abcd';
str.length = 2;
//new String('abcd').length = 2; delete
//new String('abcd');
console.log(str); //abcd
console.log(str.length); //4

var bol = new Boolean('true');
eg:
	var str = 'abc';
	str += 1；
	var test = typeof str; //test == 'string'
	if(test.length == 6) { 
		test.sign = 'typeof返回的结果有可能是string';
		//创建new String('test').sign = 'typeof返回的结果有可能是string';
	}
	//再次访问重新创建new String('test').sign;
	console.log(test.sign); // undefined
(undefine.String/null.String 没有String)

function Person(name, age, sex) {
	var a = 0;
	this.name = name;
	this.age = age;
	this.sex = sex;
	function sss() {
		a++;
		document.write(a);
	}
	this.say = sss;
}
var person = new Person();
Person.say(); //1
Person.say(); //2
var person1 = new Person();
person1.say(); //1
************************原型**************************
定义：
	原型是function对象的一个属性，它定义了构造函数制造出的对象的公共祖先。通过该构造函数产生的对象，可以继承该原型的属性和方法。原型也是对象。
	//Person.prototype --> 原型
	//Person.prototype = {} --> 祖先
	Person.prototype.name = 'hehe';
	function Person() {}
	var person = new Person();
	var person1 = new Person();
	//person.constructor --> function Person() {}
	//person1.constructor --> function Person() {}
	console.log(person.name, person1.name); //hehe hehe
	
	function Person() {}
	Car.prototype = {
		//constructor更改了指向
		constructor:Person
	}
	function Car();
	var car = new Car();
	//Car.constructor -- > function Person() {}
	
	Perototype.name = 'sunny';
	function Person(){}
	var person = new Person();
	//person.__proto__

	Person.prototype.name = 'abc';
	function Person () {
		//var this = {
		//	__proto__: Person.prototype
		//}
	}
	var obj = { name: 'sunny' };
	//person.__proto__ = obj; --> abc
	var person = new Person();
	person.__proto__ = obj;
	console.log(person.name);//sunny

	Person.prototype.name = 'sunny';
	function Person () {}
	Person.prototype.name = 'cherry';
	var person = new Person();
	console.log(person.name); //cherry
	
	Person.prototype.name = 'sunny';
	function Person () {}
	var person = new Person();
	Person.prototype.name = 'cherry';
	console.log(person.name);  //cherry
	
	Person.prototype.name = 'sunny';
	function Person(){
		//var this = { __proto__ : Person.prototype }
	}
	var person = new Person(); //{ __proto__ : Person.prototype }
	Person.prototype = {
		//原型给修改了，换了个新对象 
		//Person函数里面的__proto__没有修改，只是修改了Person.prototype 带点写法只是在原基础上修改属性
		name: 'cherry'
	}
	console.log(person.name); //sunny
	
	Person.prototype.name = 'sunny';
	function Person(){
		//var this = { __proto__ : Person.prototype }
	}
	Person.prototype = {
		name: 'cherry'
	}
	var person = new Person(); //{ __proto__ : Person.prototype }
	console.log(person.name); //cherry 没生成 就改变了
	
	/*解析
	var obj = { name: 'a' };
	var obj1 = obj;
	obj = { name: 'b' };
	console.log(obj1.name); //a
	
	Person.prorotype = {  name: 'a' };
	__proto__ = Person.prototype;
	Person.prototype = { name: 'b' };
	*/
******************原型链************************
Grand.prototype.__proto__ = Object.prototype; //Object.prototype 是所有对象的最终原型
Grand.prototype.lastName = 'Deng';
function Grand() {}
var grand = new Grand();
Father.prototype = grand;
function Father() {
	this.name = 'sunny';
	this.num = 100;
}
var father = new Father();
Son.prototype = father;
function Son() {
	this.hobbit = 'smoke';
}
var son = new Son();
son.num ++ //--> 101
console.log(father.num); //100;
//引用值可以自己操作自己

//a.sayName() sayName里面的this指向是谁调用的这个方法，this就是指向谁
Person.prototype = {
	name: 'a',
	sayName: function() {
		console.log(this.name);
	}
}
function Person() {}
var person = new Person();
console.log(person.name); //a
修改如下：
Person.prototype = {
	name: 'a',
	sayName: function() {
		console.log(this.name);
	}
}
function Person() {
	this.name = 'b';
}
var person = new Person();
console.log(person.name); //b 就近原则 --> 近的有值就取值，没有往上获取

Person.prototype = {
	height: 100
}
function Person() {
	this.eat = function() {
		this.height ++;
	}
}
var person = new Person();
console.log(person.height); //100

**********************数组map方法实现原理****************************
var list = [
	{
		id:1, name:"apple"
	},
	{
		id: 2, name: "banner"
	}
]

Array.prototype.myMap = function(func) {
	for(var i = 0; i < this.length; i++) {
		if(func(this[i], i)) {
			return this[i]
		}
	}
}

list.myMap(function(item, i) {
	console.log(item)
})

*******************Object.create**********************
//var obj = Object.create(原型)；

var obj = { name: 'sunny', age: '23' };
var obj1 = Object.create(obj);

Person.prototype.name = 'sunny';
function Person() {} 
var person = Object.create(Person.prototype);

绝大多数对象的最终都会继承自Object.prototype
特例：var obj = Object.create(null || 123); 

无toString： undefined.toString、 null.toString
123.toString 会识别成浮点型 

var num = 123;
//num.toString();  --> new Number(num).toString();
Number.prototype.toString = function() { }
//Number.prototype.__proto__ = Object.prototype;

//object.prototype.toString = function() {} (重写)
Person.prototype = {
	toString: function() {
		return : 'hehe';
	}
}
function Person() {}
var person = new Person();
console.log(person.toString()); //hehe
/*
	Object.prototype.toString
	Number.prototype.toString
	Array.prototype.toString
	Boolean.prototype.toString
	String.prototype.toString
*/
JS可正常计算的范围：小数点前16位，小数点后16位
**********************call、apply***************************
call、apply 改变this的指向

function Person(name, age) {
	//this == obj;
	//obj.name = name;
	//obj.name = name;
	this.name = 'sunny';
	this.age = '100';
}
var person = new Person('sunny', 100);
var obj = {}
Person.call(obj, 'cherry', 300);


function Person(name, age, sex) {
	this.name = name;
	this.age = age;
	this.sex = sex;
}
function Studen(name, age, sex, tel, grade) {
	Person.call(this, name, age, sex);
	this.tel = tel;
	this.grade = grade;
}
var student = new Student('sunny', 12, 'male', 138, 2018);


function Person(name, age, sex) {
	this.name = name;
	this.age = age;
	this.sex = sex;
}
function Studen(name, age, sex, tel, grade) {
	Person.apply(this, [name, age, sex]);
	this.tel = tel;
	this.grade = grade;
}
var student = new Student('sunny', 12, 'male', 138, 2018);

// call需要把实参按照形参的个数传进去
// apply 需要传一个arguments

function foo() {
	bar.apply(null, arguments); 
}
function bar() {
	console.log(arguments); //1, 2, 3, 4, 5
}
foo(1, 2, 3, 4, 5);
javascript设计模式 0-35页上半部分或者50页，35页上半部分-38页上半部忽略F

*******************继承**************************
原型链
	过多的继承了没用的属性
借用构造函数（call/apply）
	不能继承借用函数的原型
	每次构造函数都要多走一个函数
共享原型
	不能随便改动自己的原型 
	Person.prototype.lastName = 'sunny';
	function Person() {}
	function Son() {}
	Son.prototype = Person.prototype;
	var son = new Son();
	console.log(son.lastName); //sunny

	function inherit(Target, Origin) {
		Target.prototype = Origin.prototype;
	}
	inherit(Son, Person); (先继承后使用)
	var son = new Son();
	//inherit(Son, Person);
	console.log(son.lastName); //sunny
圣杯模式
	Father.prototype.lastName = 'sunny';
	function Father(){}
	function Son(){}
	function inherit(Target, Origin){
		function F() {
			//Target.prototype = new F(); //***
			F.prototype = Origin.Prototype;
			Target.prototype = new F();     //***
			Target.prototype.constructor = Target;
			Target.prototype.uber = Origin.prototype;
		}
	}
	/*
		var inherit = (function() {
			var F = function () {};
			return function (Target, Origin) {
				F.prototype = Origin.Prototype;
				Target.prototype = new F();    
				Target.prototype.constructor = Target;
				Target.prototype.uber = Origin.prototype;
			}
		}())
	*/
	inherit(Son, Father);
	var son = new Son();
	var father = new Father();
	console.log(son.lastName); 
	console.log(father.lastName); //sunny
	Son.prototype.sex = 'male';
	console.log(son.sex); //male
	console.log(father.sex);//underfined
	son.__proto__ -->new F() --> Father.prototype

********************命名空间*********************
管理变量、防止污染全局、适用于模块化开发  
//var obj ={}
var name = 'cherry';
var init = (function() {
	var name = 'sunny';
	function callName() {
		console.log(name); //sunny
	}
	return function() {
		callName();
	}
}()) 
//通过闭包私有属性执行(外部不能直接访问name值，只能callName函数能访问)
init(); 
***********************链式********************
如何实现链式调用模式（模仿Jquery）
obj.eat().smoke().dirnk().sleep();

var obj = {
	eat: function() {
		console.log('Smoking');
		//return undefined; 默认
		return this;
	},
	drink: function() {
		console.log('Drinking');
		return this;
	},
	sleep: function() {
		console.log('Sleep');
		return this;
	}
}
obj.eat().drink().sleep();

var obj = ｛
	name: 'snuuy'
｝
隐形转换 obj.name --> obj['name']

********************对象枚举***************
for in 
	var obj = {
		name: 'sunny',
		age: 23
		//prop: 123
	}
	for(var prop in obj) {
		console.log(obj.prop); //undefind  看上面底层原理
		console.log(prop+' '+obj[prop]);
	}

hasOwnProperty
	var obj = {
		name: 'sunny',
		age: 23,
		__proto__: {
			lastName: 'cherry',
			__proto__: Object.prototype
		}
	}
	obj.prototype.name = '123';
	for(var prop in obj) {
		//只有是对象就用hasOwnProperty
		//是自己的属性返回true，否则返回false
		//能返回原型及原型链上的属性，一旦延展到原型链最顶端(系统自带的不会打印、自己设置的会打印)就不会打印这个属性
		if(obj.hasOwnProperty(prop)) {  
			console.log(obj[prop]);
		}
	}

in 能不能访问这个对象的属性，包括原型
	var obj = {
		name: 'sunny',
		age: 23,
		__proto__: {
			lastName: 'cherry',
			__proto__: Object.prototype
		}
	}
	'height' in obj  //true
	'lastName' in  obj //true

instanceof 
	// A instanceof B
	//A对象是不是B构造函数构造出来的 （官方解释）
	//看A对象的原型上  有没有 B的原型 ***
	//call、toString
	function Person() {}
	var person = new Person();
	var obj = {};
	person instaceof Person //true
	person instanceof Object //true
	[] instanceof Object //true
	[] instanceof Array //true
	obj instanceof Person //false

	//Object.prototype.toString.call([]);
	Object.prototype.toString = function() {
		//this 谁调用指向谁
		//识别this
		//返回相应的结果
	}
	区分数组对象的方法  constructor instanceof toString

	浅度克隆、深度克隆
	var obj = {
		name: 'sunny',
		age: '23',
		sex: 'female'
	}
	var obj1 = {}
	function clone(origin, target) {
		var target = target || {};
		for(var prop in origin) {
			target[prop] = origin[prop];
		}
		return target;
	}
	clone(obj, obj1);


	var obj = {
		name: 'sunny',
		age: '23',
		sex: 'female',
		card: ['BMW', 'visa'],
		wife: {
			name: 'cherry',
			son: {
				name: 'abc'
			}
		}
	}
	var obj1 = {}
	/*	
		遍历数组 用for in
		判断是不是原始值 用typeof
		判断是数组还是对象 用toString.call/constructor/instanceof
		建立相应的数组或对象 
	*/
	function deepClone(origin, target) {
		var target = target || {},
		toStr = Object.prototype.toString,
		arrStr = '[object Array]';
		for(var prop in origin) {
			if(origin.hasOwnProperty(prop)) {
				if(origin[prop] !== 'null' && typeof(origin[prop]) == 'object') { //引用值
					if(toStr.call(origin[prop] == arrStr)) {
						target[prop] = [];
					}else{
						target[prop] = {};
					}
					//target[prop] = toStr.call(origin[prop] == arrStr ? [] : {};
					deepClone(origin[prop], target[prop]);
				}else{
					target[prop] = origin[prop];
				}
			}
		}
		return target;
	}
	deepClone(obj, obj1);

三目运算符
	//条件判断 ？ 是 ： 否 并且会返回值
	var num = 1 > 0 ? ('10' > '9' ? 1 : 0) : 2; //先运算()运算符，在执行... --> 0
***************************this***************************
检测是否属于isNaN
function myIsNaN(num) {
	var ret = Number(num);
	ret += '';
	if(ret == 'NaN') {
		retrun true;
	}else{
		return false;
	}
}

{} == {} //false

this:
	1、函数预编译过程中this -> window
	2、全局作用域里this -> window
	3、call/apply可以改变函数运行时this指向
	4、obj.func(); func()里面的this指向obj (谁调用了这个方法，this就指向谁)
		
	//------------------------------------------------
	1. 由 new 调用？绑定到新创建的对象。
	2. 由 call 或者 apply （或者 bind ）调用？绑定到指定的对象。
	3. 由上下文对象调用？绑定到那个上下文对象。
	4. 默认：在严格模式下绑定到 undefined ，否则绑定到全局对象。
	//------------------------------------------------
	
	function foo(x) {
		var a = 123;
		function b() {}
	}
	foo(1);

	OA: {
		arguments: [1],
		this: window,
		a: undefined,
		b:  function b() {}
	}

	var name = '222';
	var a = {
		name: '111',
		say: function() {
			console.log(this.name);
		}
	}
	var fun = a.say;
	fun();  //222
	a.say(); //111
	var b = {
		name: '333',
		say: function(fun) {
			//this --> b
			/*
			function() {
				console.log(this.name); 
				//this --> window
			}
			*/
			fun();
		}
	}
	b.say(a.say); //222
	b.say = a.say;
	b.say(); //333

	var foo = '123';
	function print() {
		var foo = '456';
		this.foo = '789';
		console.log(foo); //456
	}
	print();

	var foo = 123;
	function print() {
		this.foo = 234;
		console.log(foo); 
	}
	print(); //234
	new Print(); //123

	var a = 5;
	function test()  {
		a = 0;
		console.log(a);
		alert(this.a);
		var a;
		alert(a);
	}
	//test();   // 0 5 0
	new test(); // 0 undefined 0

	function print() {
		console.log(foo); //undefined
		var foo = 2;
		console.log(foo); //2
		alert(hello); // hello is not undefined
	}
	print();

	function print() {
		var test;
		test();
		function test(){
			console.log(1); //1
		}
	}
	print();

	function print() {
		var x = 1;
		if(x =='1') console.log(x); //true
		if(x === '1') console.log(x); //false
	}
	print();

	function print() {
		var marty = {
			name: 'marty',
			printName: function() {
				console.log(this.name);
			}
		}
		var test1 = { name: 'test1' };
		var test2 = { name:'test2' };
		var test3 = { name: 'test3'};
		test3.printName = marty.printName;
		var printName2 = marty.printName.bind({ name: 123});
		marty.printName.call(test1); //test1
		marty.printName.apply(test2); //test2
		marty.printName(); //marty
		printName2();
		test3.printName(); //test3
	}
	print();

	var bar = { a: '002'};
	function print() {
		bar.a = 'a';
		Object.prototype.b = 'b';
		return function inner() {
			alert(bar.a); //a
			alert(bar.b); //b
		}
	}
	print()();
	
arguments.calee （运行时的函数）
	function foo() {
		console.log(arguments.calee);
		console.log(arguments.calee == foo); //true
	}
	foo();
	//递归
	var num  = (function(n) {
		if(n ==1) {
			return 1;
		}
		return n * arguments.callee(n - 1);
	} (20))

	function foo() {
		console.log(arguments.calee); //foo函数
		function test() {
			console.log(arguments.calee); //test函数
		}
		tes();
	}
	foo();
func.caller （函数自己）
	function test() {
		console.log(test.caller); //test函数
	}
	test();
*********************数组*****************************
var arr = [1, 2, 3];
Array.toString.push = function() {
	for(var i = 0; i < arguments.length; i++) {
		this[this.length] = arguments[i];
	}
	return this.length;
}
改变原数组：
	push(4, 4, 5)//向数组最后一位添加
	pop() //从最后一位开始拿出去
	shift() //从数组前面删除
	unshift(-1, 0) //在数组前面添加
	reverse() //逆转数组
	sort//排序
	splice(从第几位开始, 截取多少长度, 在切口处添加新的数据)
 
	slice = function (pos) {
		pos += pos > 0 ? 0 : this.length;
	}
	/*
		必须写俩形参
		返回值 
			1、当返回值为负数，那么前面的数放在前面
			2、为正数，那么后面的数在前
			3、为0，不动
	*/
	var arr = [1, 3, 5, 4, 10];
	arr.sort(function(a, b) {
		/*
		if(a > b) {  a - b > 0
			return 1;
		}else{ a - b < 0
			return -1;
		}
		*/
		return a - b;  //升序
		//return b -a; 降序
	})

	给一个有序的数组 乱序
	var arr = [1, 2, 3, 4, 5, 6];
	arr.sort(function(){
		return Math.random() - 0.5;
	})
不改变原数组
	concat join  --> split toString slice
	var arr = [1, 2, 3, 4, 5, 6];
	//slice(从该位开始截，截取到该位)
	slice(1, 3); //2, 3
   join() //返回数组
   split()// 返回字符串

//使用指定的函数 将元素进行组合 最终生成单个值
var arr = [1, 2, 3, 4, 5];
//传参 函数 初始值(可传可不传)
arr.reduce(function(prev, current, index, arr) {
	return prev + current;
}, 13); //init
//案例 时间 14：10：09 拼成141009
[h, m, s].reduce(function(prev, current, index, arr) {
	return prev + ('0' + current).slice(-2);
}, 13);

*********************类数组****************************

包装类：包装类包装原始类型的值, 提供操作值的API的对象

原始类型的值不能拥有属性和方法
如何使用：自动创建（看生命周期），自动销毁（调用完函数之后）


类数组必须有length属性(能像数组/对象一样使用)
function foo() {
	console.log(arguments);
	//arguments.push(7);
}
foo(1, 2, 3, 4, 5);

var obj = {
	'0': 'a',
	'1': 'b',
	'3': 'c',
	'length': 3,
	'push': Array.prototype.push,
	'splice': Array.prototype.splice
}

var arr = ['a', 'b', 'c']

obj.push('d'); //打印...


/*
	属性要为索引(数字)属性，必须有length属性，最好加上push
	好处：

	Array.prototype.push = function(target) {
		this.[obj.length] = target;
		this.length ++;
	}

*/

var obj = {
	'2': 'a',
	'3': 'b',
	'lenght': 2,
	'push': Array.prototype.push
}
obj.push('c');
obj.push('d');
//打印obj...
obj = {
	2: 'c',
	3: 'd',
	length: 4
}

封装type
	/*
		typeof([]) --> array
		typeof({}) --> object
		typeof(123) --> nubmer
		typeof(function) --> object
		typeof(new Number) --> new Object
		1、分类：原始值(没有属性,能访问) 引用值
		2、区分引用值
	*/

	function type(target) {
		var template = {
			'[object Array]' : 'array',
			'[object Object]' : 'object',
			'[object Number]' : 'number - object',
			'[object Bollean]' : 'boolean - object',
			'[object String]' : 'string - object'
		}
		if(target === null) {
			return 'null';
		}
		if(typeof(target) == 'object'){
			var str = Object.prototype.toString.call(target);
			return template[str];
		}else{
			return typeof(target);
		}
	}
数组去重
	/* 
		利用对象的属性不能重复特征
	*/
	var arr = [1, 1, 1, 1, 2, 2, 2];
	Array.prototype.unique = function() {
		var temp = {},
			arr = [],
			len = this.length;
		for(var i = 0; i < len; i++) {
			if(!temp[this[i]]) { //取值undefined
				temp[this[i]] = 1; //随意等于一个值 处理0 undefined
				arr.push([this[i]]);
			}
		}
		return arr;
	}
	
	function unique(arr) {
		var newArr = [];
		var len = arr.length;
		for(var i = 0; i < len; i++) {
			for(var j = i + 1; j < len; j ++) {
				if(arr[i] === arr[j]) {
					j = ++i;
				}
			}
			newArr.push(arr[i]);
		}
		return newArr;
	}
	
	function unique(arr) {
		arr.sort();
		var len = arr.length;
		var newArr = [arr[0]];
		for(var i = 0; i < len; i++){
			if(arr[i] !== newArr[newArr.length - 1]) {
				newArr.push(arr[i]);
			}
		}
		return newArr;
	}

***************try catch*******************
//在try里面的发生错误，不会执行错误后的try里面的代码
//如果try里面没有报错，不会执行catch里面的代码，否则try里面报错，会执行catch代码
	try{
		console.log('a');
		console.log(b);
		console.log(c);
	}catch(e){  //error.message error.name --> error
		console.log('e');
	}
	console.log('d');

	Error.name的六种值对应的信息
	1、EvalError: eval的使用与定义不一致
	2、RangeError：数值越界
	3、ReferenceError：非法或不能识别的引用数值 ***
	4、SyntaxError：发生语法解析错误 ***
	5、TypeError：操作数类型错误
	6、URIError：URI处理函数使用不当

es5严格模式
	'use strict'(启动es5.0模式，遵循es5.0模式，推荐局部使用)
		为了兼容老版浏览器，不会识别的浏览器
	不再兼容es3的一些不规则语法。使用全新的es5规范
	两种用法：
		全局严格模式
		局部函数内严格模式
	就是一行字符串，不会对不兼容严格模式的浏览器产生影响
	不支持with,arguments.callee,func.caller，变量赋值前必须声明
	局部this必须被赋值(Person.call(null/undefined)赋值什么就是什么)，拒绝重复属性和参数(不报错)，不能使用eval()
		var obj = { name: 'obj' }; ①
		var name = 'window';  ③
		function foo() {
			var name = 'scope'; ②
			with(obj) { //with可以改变作用域链
				console.log(name);
			}
		}
		foo();

		with(document) {
			write('a');
		}

		var global = 100;
		function foo() {
			var global = 200
			eval('console.log(global)');
		}
		foo();
浏览器基于es3.0的方法 + es5.0新增方法 
es3.0 和 es5.0产生冲突部分
es5.0严格模式 那么es3.0和es5.0产生冲突部分就是用es5.0，否则会使用es3.0

***************DOM、BOM****************
DOM  --> Document Object Model
	DOM定义了表示和修改文档所需的方法。
	DOM对象即为宿主对象，有浏览器厂商定义，用来操作html和xml功能的一类对象的集合。
	也有人称DOM是对HTML及XML标准编程接口

基本操作
	对接点的增删改查
		查
		查看元素节点
			document代表整个文档
			document.getElementById()//元素id在ie8以下的浏览器，不区分id大小，二期也返回匹配name属性的元素
			document.getElementsByTagName()//标签名 (用的较多，方法定义在document.prototype和Element.prototype上)
			document.getElementsByName()//需注意，只有部分标签name可生效（表单，表单元素，img，iframe）
			document.getElementsByClassName()//类名 --> ie8和ie8以下的ie版本没有，可以多个class一起
			querySelector()//css选择器 在ie7和ie7以下的版本中没有
			querySelectorAll()//css选择器 在ie7和ie7以下的版本中没有
	tab切换：
		var btn = document.getElementsByTagName('button');
		var div  = document.getElementsByClassName('content');
		for(var i = 0; i < btn.length; i++) {
			(function(n) {
				btn[n].onclick = function() {
					for(var j = 0; j < btn.length; j++) {
						btn[j].className = '';
						div[j].style.display = 'none'; 
					}
					this.className = 'active';
					div[n].style.display = 'block';
				}
			}(i))
		}

	
	轮播图, 4张图轮播
	var index = 0;	
	var rightBtn = document.getElementById('right');
	var leftBtn = document.getElementById('left');
	var item = document.getElementsByClassName('item');
	var clearActive = fuction() {
		for(var i = 0; i < item.length; i++) {
			item[i].className = 'item';
		}
	}
	var addActive = function() {
		clearActive();
		item[index].calssName = 'item active';
	}
	rightBtn.onclick = function() {
		if(index < 4) {
			index ++;
		}else{
			index = 0;
		}
		addActive();
	}
	leftBtn.onclick = function() {
		if(index == 0) {
			index = 4;
		}else{
			index --;
		}
		addActive();
	}
		
	运动demo	
	var div = document.creatElement('div');
	document.body.appendChild(div);
	//var speed = 0;
	setInterval(function() {
		//speed += speed/7;
		//div.style.left = parseInt(div.style.left) + speed +'px';
		div.style.left = parseInt(div.style.left) + 2 +'px';
	}, 100)
 	
 	（通过函数e查看键盘内部对应的数）

 	类似刮刮乐
	 	<ul>
	 		<li> img-date="0"</li>
	 	</ul>
	 	var ul = document.getElementsByTagName('ul')[0];
	 	ul.onmourseover = function(e) {
	 		var event = e || window.event;
	 		var target = event.target || event.srcElement;
	 		target.style.backgroundColor = 'rgb(0, 255', + target.getAttribute('img-date')+')';
	 		target.setAttribute('img-date', parseInt(target.getAttribute('img-date')) + 6);
	 	}
节点的类型
	元素节点  --> 1
	属性节点  --> 2
	文本节点  --> 3
	注释节点  --> 8
	document --> 9
	DocumentEragment --> 11
遍历节点树
	parentNode 父节点（最顶端的parentNode为document）
	childNodes 子节点们 (包括所有元素和节点)
	firstChild 第一个子节点 (包括所有元素和节点)
	lastChild 最后一个子节点 (包括所有元素和节点)
	nextSibling 后一个兄弟节点 (包括所有元素和节点)
	previousSibling 前一个兄弟节点 (包括所有元素和节点)
基于元素节点树的遍历
	parentElement 返回当前元素的父元素节点（IE不兼容）
	children 只返回当前元素的元素子节点（除了children其他属性IE9/8以下不能识别）
	node.childElementCount == node.children.length 当前元素节点的子元素
	firstElementChild 返回的是第一个元素节点（IE不兼容）
	lastElementChild 返回的是最后一个元素节点（IE不兼容）
	nextElementSibling/previosElementSibling 返回后一个/前一个兄弟元素
节点的四个属性
	nodeName 元素的标签名，以大写形式表示，只读
	nodeValue Text节点或Comment节点的文本内容，可读写
	nodeType 该节点的类型，只读
	attributes Element节点的属性结合
	节点的一个方法 Node.hasChildNodes();
遍历元素里面的节点类型	
	function retElementChild(node){
		var arr = [],
		/*
			temp = {
				length: 0.
				push: Array.prototype.push,
				splice: Array.prototype.splice
			}
		*/
		child = node.childNodes,
		len = child.length;
		for(var i = 0; i < len; i++) {
			if(child[i].nodeType === 1) {
				arr.push(child[i]);
				//tem.push(child[i]);
			} 
		}
		return arr;
		//retrun temp;
	}

	document --> HTMLDocument.prototype --> document.prototype
	Document.prototype上定义了documentElement属性，指代文档根元素html文档中，总是代表html元素
增：
	document.createElement();
	document.createTextNode();
	document.createComment(); //注释节点
	document.createDocumentFragment(); //文档碎片节点
插：
	parentNode.appendChild(); 和push类似
	parentNode.insertBefore(a, b); //insert A Before B
删：
	parent.removeChild(parent里子元素);
	child.remove();
替换：
	parent.replaceChild(new, origin);
Element一些属性
	innerHTML
	innerText 火狐不兼容）textContent(老版本ie没有)
Element节点方法
	setAttribute
	getAttribute
封装inertAfter
	Element.prototype.insertAfter = function(targetNode, afterNode) {
		var beforeNode = afterNode.nextElementSibling;
		if(beforeNode == null) {
			this.appecdChild(targetNode);
		}else{
			this.inertBefore(targetNode, beforeNode);
		}
	}
****************date对象、定时器**************
//日期对象 系统自带的
var data = new Date()

setInterval('console.log(a)', 1000);
var minutes = 0, seconds = 0;
var timer = setInterval(function() {
	seconds ++;
	if(seconds == 60) {
		seconds = 0;
		minutes ++;
	}
	//...赋值
	if(minutes == 3) ｛
		clearInterval(timer);
	｝
})
***********************************************
滚动条滚动距离
	function getScrollOffset() {
		if(0 && window.pageXOffset){
			retrun {
				x: window.pageXOffset,
				y: window.pageYoffset
			}
		}else{
			retrun {
				x: document.body.scrollleft + document.documentElement.scrollLeft,
				y: document.body.scrollTop + document.documentElement.scrollTop
			}
		}
	}
	
window.innerWidth/innerHeight
	ie8以及以下不兼容
document.documentElement.clientWidth/clientHeight
	标准模式下，任意浏览器都兼容
document.body.clienWidth/clientHeight
	适用于怪异模式下的浏览器
可视区窗口尺寸
	function getViewportOffset() {
		if(window.innerWidth) {
			return {
				w: window.innerWidth,
				H: window.innerHeight
			}
		}else{
			if(document.compatMode == 'BackCompat') {
				return {
					w: document.body.clienWidth,
					H: document.body.clientHeight
				}
			}else{
				return {
					w: document.documentElement.clientWidth,
					H: document.documentElement.clientHeight
				}
			}
		}
	}
window上三个方法
	scroll() scrollTo() scrollBy();
	三个方法功能类似，用法都将x,y坐标传入。即实现让滚动轮滚动到当前位置
	区别：
		scrollBy会在之前的数据基础上做累加
	var timer = 0;
	var flag = true;
	btn.onclick = function() {
		if(flag) {
			timer = setInterval(function() {
				window.scrollBy(0, 10);
			})
			flag = false;
		}
	}	
	stop.onclick = function() {
		clearInterval(timer);
		flag = true;
	}
********************脚本化CSS****************************
window.getComputedStyle(div, null).width; //只读
	第二个参数可以获取伪元素（::）
	返回的计算样式的值都是绝对值，没有相位（ie8及以下不兼容）
Ele.currentStyle --> CSSStyleDeclaration

封装兼容方法getStyle(elem, prop)
	function getStyle(elem, prop) {
		if(window.getComputedStyle) {
			return window.getComputedStyle(elem, null)[prop];
		}else{
			return elem.currentStyle[prop];
		} 
	}
*********************事件**********************
绑定事件
	addEventListener('事件名', 函数, true/false)  this --> 绑定事件的本身
	兼容性好，但是一个元素的事件上只能绑定一个处理程序
	obj.attachEvent('on'+type, fn)  this --> window
	ie独有，一个事件同样可以绑定多个处理程序

封装addEvent方法兼容浏览器
	function addEvent(elem, type, handle) {
		if(elem.addEventListener) {
			ele.addEventListener(type, handle, false);
		}else if(elem.attachEvent) {
			elem.attachEvent('on' + type, function() {
				handle.call(elem);
			})
		}else{
			elem['on' + type] = handle;
		} 
	}
解除事件
	elem.onclick = null;
	//this.onclick = null 只执行一次

	ele.removeEventListener
	ele.detachEvent
	匿名函数，不能解除

事件处理模型
	<div class="wrapper">
		<div class="content">
			<div class="box"></div>
		</div>
	</div>
	冒泡 
		结构上（非视觉上）嵌套关系的元素，会存在事件冒泡的功能，即同一个事件，自子元素冒泡向父元素。（自底向上）

	捕获
		结构上嵌套关系的元素，会存在事件捕获的功能，即同一个事件，自父元素捕获至子元素（事件源）。（自顶向下）
	先捕获（addEventListener(... , ..., true)），后冒泡 （addEventListener(... , ..., false)）
	**谁先绑定谁先执行**
	focus blur change submit select等事件不冒泡
	取消冒泡：
		w3c标准 e.stopPropagation(); //ie9以下不支持
		ie独有 event.cancelBubble = true

		封装取消冒泡的函数 stopBulle(event)
			function stopBulle(event) {
				if(event.stopPropagation) {
					event.stopPropagation();
				}else{
					event.cancelBubble = true
				}
			}
	阻止默认事件
		默认事件  表单提交，a标签跳转，右键菜单等
		return false以对象属性的方式注册的事件才生效 (句柄方式)
		event.preventDefault() w3c标准 ie9以下不兼容
		event.returnValue = false 兼容IE

		封装阻止默认事件canaelHandler(event)
			function canaelHandler(event){
				if(event.preventDefault) {
					event.preventDefault();
				}else{
					event.returnValue = false;
				}
			}
			
***********************事件对象********************
event || window.event
事件源对象：
	event.target 火狐只有这个
	event.srcElement ie只有这个
	chrome 这俩都有
	兼容性写法 (涉及 事件委托) 
	//e = e ||  window.event;
	target = event.target || event.srcElement;
 	适用于ie
	elem.setCapture(); //事件的获取
	elem.releaseCapture; //事件释放
    顺序：mousedown > mouseup > click  
    contextmenu 鼠标右键事件
    查看onmousedown事件中的e.button分辨出鼠标左右键
	如何解决mouserdown和click冲突 (设置开关)
键盘事件
	顺序：keydown > keypress > keyup
		//Stirng.fromChartCode(e.chartCode)
		keydown 检测字符不准  适应于按键事件
		keypress  检测字符较准
文本类事件
	inout focus blur change
	window.onload = function() {
		//执行方法最慢的
	}
***********************json**************************   
JSON.parse(); string --> json
JSON.stringify(); json --> string
/*		
	解析html 深度优先原则，形成DOM树
	挂载DOM -->  解析完 -->  下载完
		DOMTree  +  cssTree  = randerTree
		randerTree结束后，绘制界面
	DOMTree修改：
		reflow(较严重)   重排 	dom节点的增删改查 
						dom节点的宽高变化...
						offsetWidth，offsetLeft
		repaint  重绘 	修改字体颜色，背景颜色...
*/
**************************js异步*******************************
jS异步加载的三种方案
	1、defer异步加载，但要等到dom文档全部解析完才会被执行。只有ie能用，也可以将代码写到内部 (ie9以下能用)
	2、async异步加载，加载完就执行，async只能加载外部脚本，不能把js写在script标签里 (w3c标准)
	1、2 时也不阻塞页面
	3、创建script，插入到DOM中，加载完毕后callBack

		function loadScript(url, callBack) {
			var script = document.createElement('script'); //创建
			script.type = 'test/javascript'; //设置
			//先绑定事件，再加载文件
			if(script.readyState) { //ie方法
			 	script.onreadystatechange = function() {
			 		if(script.readyState == 'complete' || script.readyState == 'loaded') {
			 			//执行插入js里面的方法
			 			callBack();

			 			//如果插入的js里面是对象 obj[fn]();
			 		}
			 	}
			}else{ //非ie方法 chrome firefox opera safari
				script.onload = function() {
					//执行插入js里面的方法
					callBack();

					//如果插入的js里面是对象 obj[fn]();
				}
			}
			script.scr = url  // 下载
			document.body.appenChild(script); 插入
	    }
		loadScript('...js', function() { 
			//传参在定义之前
			fn();
		}); 

		//如果插入的js里面是对象
		loadScript('...js', 'fn');

*************************js加载时间线*********************************
js时间线
	1、创建Document对象，开始解析web页面。解析html元素和他们的文本内容后添加Element对象和Text节点到文档中，这阶段document.readyState = 'loading'
	2、遇到link外部css，创建线程加载，并继续解析文档。
	3、遇到script外部js，并且没有设置async、defer，浏览器加载，并阻塞，等待js加载完成并执行脚本，然后继续解析文档
	4、遇到script外部js，并且设置async、defer，浏览器创建线程加载，并继续解析文档
		对于ascync属性的脚本，脚本加载完成后立即执行（异步禁止使用document.write()）
	5、遇到img等，先正常解析dom结构，然后浏览器异步加载src，并继续解析文档
	6、当文档解析完成，document.readyState = 'interactive';
	7、文档解析完成后，所有设置有defer的脚本会按照顺序执行（注意与acync的不同，转化为事件驱动阶段）
	8、document对象触发DOMContentLoaded事件，这也标志着程序执行从同步脚本执行阶段，转化为事件驱动阶段
	9、当所有async的脚本加载完成并执行后，img等加载完成后，document.readyState = 'complete'，window对象触发load事件
	10、从此，以异步响应方式处理用户输入，网络事件等。

	/*
		console.log(document.reayState)

		document.onreadystatechange = function() {
			console.log(document.reayState);
		}

		//当dom加载完就执行的部分
		//window.onload = function() {
		//	console.log(document.reayState);
		//}

		//当dom解析完就执行的部分
		document.addEventListener('DOMcomtentloaded', function() {
			console.log(document.reayState);
		}, 'false');
	*/

	//当dom解析完就执行的部分  -->  interactive
	$(document).ready(function() {})

*******************正则********************
//一片两片三四片，落尽正则全不见
	\ 转义符号，把后面的转义
	\t 一个table键（制表符）
	\r  行结束
	\n  换行

两种创建方式
	1、直接量
	2、new RegExp();
	推荐直接量 ***
	正则表达式的作用：匹配特殊字符或有特殊搭配原则的字符的最佳选择

	var str = 'abcababababd';
	var reg = /ab/g; 
	//中间abc连着片段匹配字符串
	// i --> ignoreCase 忽视大小写
	// g --> 全局匹配
	// m  执行多行匹配
	//字符串上面的方法match
	str.match(reg);

	var str = 'abcde\na' //多行字符串
	var reg = /^a/gm; //^ 以a开头，添加m修饰符
	str.match(str); //match把所有匹配出来返回

	var str = 'abcabc';
	var reg = new RegExp('ab', 'igm');
	reg.test(str); //test判断有没有符合的片段
	var reg = /[^ ]/g; //非
	var reg = (a|b|c)/g; // |或

	\w (word) === [0-9A-z_]
	\W === [^\w]
	\d === [0-9]
	\D === [^\d]
	\s === [\t\n\r\v\f ]
	\S === [^/s]
	\b === 单词边界
	\B === 非单词边界
	. === [^\r\n ]
	? 匹配前面的子表达式零次或一次，或指明一个非贪婪限定符。要匹配 ? 字符
	* 匹配前面的子表达式零次或多次。要匹配 * 字符
	\1 寻找第一位重复的子项
	
	var reg = /ab/g;
	var str = 'abababab';
	console.log(reg.exec(str));
	console.log(reg.lastIndex);

	var str = 'aa';
	var reg = /a/g;
	str.replace(reg, 'b'); //ba

	var reg = /(\w)\1(\w)\2/g;
	var str = 'aabb';
	str.replace(reg, '$2$2$1$1'); //bbaa
	str.replace(reg, function($, $1, $2) {
		return $2 + $2 + $1 + $1;
	});

	//the-first-name --> theFirstName
	var reg = /-(\w)/g;
	var str = 'the-first-name';
	str.replace(reg, function($, $1, $2) {
		return $1.toUpperCase(); 
	})

	var str = 'aaaaabbbbbbbcccc';
	var reg = /(\w)\1*/g;
	console.log(str.replace(reg, '$1')); //abc


	var str = '100000000';
	var reg = /(?=(\B)(\d{3})+$)/g;
	str.replace(reg, '.');

