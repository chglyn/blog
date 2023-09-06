import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.419948d5.js";const h=JSON.parse('{"title":"JavaScript基础","description":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。","frontmatter":{"title":"JavaScript基础","editLink":true,"head":[["meta",{"name":"description","content":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。"}],["meta",{"name":"keywords","content":"javaScript,javaScript基础,闭包,作用域,原型,原型链,this"}]]},"headers":[],"relativePath":"note/base-javaScript.md","filePath":"note/base-javaScript.md"}'),p={name:"note/base-javaScript.md"},l=e(`<h3 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h3><p>浅入JS基础。本篇从工作、学习总结归纳JavaScript，列举以下技巧。</p><ul><li>文章涉及：</li><li>变量声明</li><li>typeof</li><li>数据类型</li><li>理解函数</li><li>全局对象(GO)</li><li>闭包</li><li>作用域</li><li>作用域链</li><li>立即执行函数与函数表达式</li><li>运算符</li><li>对象</li><li>new关键字</li><li>包装类</li><li>原型</li><li>原型链</li><li>Object.create()</li><li>call</li><li>apply</li><li>继承</li><li>命名空间</li><li>链式调用</li><li>对象枚举</li><li>this</li><li>数组</li><li>类数组</li><li>try catch</li></ul><h3 id="var" tabindex="-1">var <a class="header-anchor" href="#var" aria-label="Permalink to &quot;var&quot;">​</a></h3><ul><li>即任何变量，如果未经声明就使用，此变量就为全局变量所拥有。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 没有使用var，在全局声明变量num，变量num属于window</span></span>
<span class="line"><span style="color:#e1e4e8;">num = 10;</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(window.num) // 10</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 没有使用var，在全局声明变量num，变量num属于window</span></span>
<span class="line"><span style="color:#24292e;">num = 10;</span></span>
<span class="line"><span style="color:#24292e;">console.log(window.num) // 10</span></span></code></pre></div><ul><li>一切声明的全局变量，全是window的属性。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 使用var在全局声明变量num，变量num就属于window。</span></span>
<span class="line"><span style="color:#e1e4e8;">var num = 10; </span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(window.num) // 10</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 使用var在全局声明变量num，变量num就属于window。</span></span>
<span class="line"><span style="color:#24292e;">var num = 10; </span></span>
<span class="line"><span style="color:#24292e;">console.log(window.num) // 10</span></span></code></pre></div><p>注意</p><p>一旦经历var操作，所得出的属性属于window，这种属性叫做不可配置属性，<strong>不可配置属性不能delete</strong>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var num = 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">delete window.num // false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var num = 1;</span></span>
<span class="line"><span style="color:#24292e;">delete window.num // false</span></span></code></pre></div><ul><li>全局定义相同变量，后面变量能把前面变量覆盖。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var num = 1; // 首次定义  </span></span>
<span class="line"><span style="color:#e1e4e8;">...</span></span>
<span class="line"><span style="color:#e1e4e8;">var num = 10; // 后面再次定义 </span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(num) // 10</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var num = 1; // 首次定义  </span></span>
<span class="line"><span style="color:#24292e;">...</span></span>
<span class="line"><span style="color:#24292e;">var num = 10; // 后面再次定义 </span></span>
<span class="line"><span style="color:#24292e;">console.log(num) // 10</span></span></code></pre></div><h3 id="typeof" tabindex="-1">typeof <a class="header-anchor" href="#typeof" aria-label="Permalink to &quot;typeof&quot;">​</a></h3><p>返回数据类型字符串表达。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var num = 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">typeof num // &#39;number&#39; </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">var x = &#39;app&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">typeof x // &#39;string&#39; </span></span>
<span class="line"><span style="color:#e1e4e8;">...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var num = 1;</span></span>
<span class="line"><span style="color:#24292e;">typeof num // &#39;number&#39; </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">var x = &#39;app&#39;;</span></span>
<span class="line"><span style="color:#24292e;">typeof x // &#39;string&#39; </span></span>
<span class="line"><span style="color:#24292e;">...</span></span></code></pre></div><p>typeof 存在比较特殊地方。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">typeof null // &#39;object&#39; </span></span>
<span class="line"><span style="color:#e1e4e8;">typeof Array // &#39;object&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">typeof null // &#39;object&#39; </span></span>
<span class="line"><span style="color:#24292e;">typeof Array // &#39;object&#39;</span></span></code></pre></div><p>通过typeof能返回：number/string/boolean/object/function类型。</p><p>能判断：undefined/number/boolean/function</p><p>不能判断： null/object/Array。</p><p>对于NaN，返回number，NaN是not a number的缩写。</p><h3 id="数据类型" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型" aria-label="Permalink to &quot;数据类型&quot;">​</a></h3><p>包括基本数据类型与引用数据类型。</p><p>基本数据类型（栈stack） 包括：number/string/boolean/null/undefined。基本数据类型访问顺序按值访问，由高向低分配，占内存最大是8MB，其中string是特殊的栈，由程序员分配。</p><p>引用类型(堆heap) 包括：function/object/Array。引用类型在栈内存中保存的是对象在堆内存中的引用地址(指针)，向高分配，系统自由分配。</p><ul><li><p>空间分配方式： 栈：由操作系统自由分配释放。 堆：一般由程序员分配释放。</p></li><li><p>数据结构： 栈：先进后出的模式。 堆：可以看成一颗树。</p></li></ul><h3 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-label="Permalink to &quot;函数&quot;">​</a></h3><p>预编译发生在函数执行前一刻。 预编译过程：</p><ul><li>创建AO对象：Activetion Object</li><li>找形参和变量声明，将变量和形参名作为AO属性名，值为：undefined</li><li>将实参值和形参统一</li><li>在函数体里面找函数声明，值赋予函数体</li></ul><p>代码片段：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function fn(x, y) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  z = 3;</span></span>
<span class="line"><span style="color:#e1e4e8;">  function bar() {}</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">fn(1, 2);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function fn(x, y) {</span></span>
<span class="line"><span style="color:#24292e;">  z = 3;</span></span>
<span class="line"><span style="color:#24292e;">  function bar() {}</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">fn(1, 2);</span></span></code></pre></div><ul><li>首次创建Activetion Object</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">x:         undefined</span></span>
<span class="line"><span style="color:#e1e4e8;">y:         undefined</span></span>
<span class="line"><span style="color:#e1e4e8;">z:         undefined</span></span>
<span class="line"><span style="color:#e1e4e8;">bar:       undefined</span></span>
<span class="line"><span style="color:#e1e4e8;">arguments: undefined</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">x:         undefined</span></span>
<span class="line"><span style="color:#24292e;">y:         undefined</span></span>
<span class="line"><span style="color:#24292e;">z:         undefined</span></span>
<span class="line"><span style="color:#24292e;">bar:       undefined</span></span>
<span class="line"><span style="color:#24292e;">arguments: undefined</span></span></code></pre></div><ul><li>然后实参值与形参统一</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">x:         1</span></span>
<span class="line"><span style="color:#e1e4e8;">y:         2</span></span>
<span class="line"><span style="color:#e1e4e8;">z:         3</span></span>
<span class="line"><span style="color:#e1e4e8;">bar:       undefined</span></span>
<span class="line"><span style="color:#e1e4e8;">arguments: &lt;1, 2&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">x:         1</span></span>
<span class="line"><span style="color:#24292e;">y:         2</span></span>
<span class="line"><span style="color:#24292e;">z:         3</span></span>
<span class="line"><span style="color:#24292e;">bar:       undefined</span></span>
<span class="line"><span style="color:#24292e;">arguments: &lt;1, 2&gt;</span></span></code></pre></div><ul><li>函数体中如果有函数声明，值赋予函数体</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">x:         1</span></span>
<span class="line"><span style="color:#e1e4e8;">y:         2</span></span>
<span class="line"><span style="color:#e1e4e8;">z:         3</span></span>
<span class="line"><span style="color:#e1e4e8;">bar:       &lt;function&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">arguments: &lt;1, 2&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">x:         1</span></span>
<span class="line"><span style="color:#24292e;">y:         2</span></span>
<span class="line"><span style="color:#24292e;">z:         3</span></span>
<span class="line"><span style="color:#24292e;">bar:       &lt;function&gt;</span></span>
<span class="line"><span style="color:#24292e;">arguments: &lt;1, 2&gt;</span></span></code></pre></div><h3 id="global-object-go" tabindex="-1">Global Object(GO) <a class="header-anchor" href="#global-object-go" aria-label="Permalink to &quot;Global Object(GO)&quot;">​</a></h3><p>简称全局对象，与widow关系是全等(Global Object === window)。</p><p>代码片段</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function a() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  function b() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    function c() {}</span></span>
<span class="line"><span style="color:#e1e4e8;">    c();</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  b();</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">a();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function a() {</span></span>
<span class="line"><span style="color:#24292e;">  function b() {</span></span>
<span class="line"><span style="color:#24292e;">    function c() {}</span></span>
<span class="line"><span style="color:#24292e;">    c();</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  b();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">a();</span></span></code></pre></div><p>通过上述代码片段，函数a在全局定义，同时创建自己的scope属性，指向它父函数作用域链Global Object；函数a执行，scope属性指向自身Activetion Object；通过全局Global Object返回，拿到函数a结果。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">a   defined a.[[scope]] --&gt; 0: GO</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">a   doing   a.[[scope]] --&gt; 0: a AO</span></span>
<span class="line"><span style="color:#e1e4e8;">                        --&gt; 1: GO</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">a   defined a.[[scope]] --&gt; 0: GO</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">a   doing   a.[[scope]] --&gt; 0: a AO</span></span>
<span class="line"><span style="color:#24292e;">                        --&gt; 1: GO</span></span></code></pre></div><p>函数b定义，是在函数a执行结果上定义，同时创建自己的scope；函数b执行，scope属性指向自身Activetion Object，经过函数a的Activetion Object，传递给全局Global Object返回，拿到函数b结果。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// ...省略函数a </span></span>
<span class="line"><span style="color:#e1e4e8;">b   defined b.[[scope]] --&gt; 0: aAO</span></span>
<span class="line"><span style="color:#e1e4e8;">                        --&gt; 1: GO</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">b   doing   b.[[scope]] --&gt; 0: bAO</span></span>
<span class="line"><span style="color:#e1e4e8;">                        --&gt; 1: aAO</span></span>
<span class="line"><span style="color:#e1e4e8;">                        --&gt; 2: GO</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// ...省略函数a </span></span>
<span class="line"><span style="color:#24292e;">b   defined b.[[scope]] --&gt; 0: aAO</span></span>
<span class="line"><span style="color:#24292e;">                        --&gt; 1: GO</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">b   doing   b.[[scope]] --&gt; 0: bAO</span></span>
<span class="line"><span style="color:#24292e;">                        --&gt; 1: aAO</span></span>
<span class="line"><span style="color:#24292e;">                        --&gt; 2: GO</span></span></code></pre></div><p>函数c定义，是在函数b执行结果上定义，同时创建自己的scope；函数c执行，scope属性指向自身Activetion Object，经过函数b的Activetion Object，经过函数a的Activetion Object，通过全局Global Object返回，拿到函数c结果。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// ...省略函数a </span></span>
<span class="line"><span style="color:#e1e4e8;">// ...省略函数b </span></span>
<span class="line"><span style="color:#e1e4e8;">c   defined c.[[scope]] --&gt; 0: bAO</span></span>
<span class="line"><span style="color:#e1e4e8;">                        --&gt; 1: aAO</span></span>
<span class="line"><span style="color:#e1e4e8;">                        --&gt; 2: GO</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">c   doing   c.[[scope]] --&gt; 0: cAO</span></span>
<span class="line"><span style="color:#e1e4e8;">                        --&gt; 1: bAO</span></span>
<span class="line"><span style="color:#e1e4e8;">                        --&gt; 2: aAO    </span></span>
<span class="line"><span style="color:#e1e4e8;">                        --&gt; 3: GO</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// ...省略函数a </span></span>
<span class="line"><span style="color:#24292e;">// ...省略函数b </span></span>
<span class="line"><span style="color:#24292e;">c   defined c.[[scope]] --&gt; 0: bAO</span></span>
<span class="line"><span style="color:#24292e;">                        --&gt; 1: aAO</span></span>
<span class="line"><span style="color:#24292e;">                        --&gt; 2: GO</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">c   doing   c.[[scope]] --&gt; 0: cAO</span></span>
<span class="line"><span style="color:#24292e;">                        --&gt; 1: bAO</span></span>
<span class="line"><span style="color:#24292e;">                        --&gt; 2: aAO    </span></span>
<span class="line"><span style="color:#24292e;">                        --&gt; 3: GO</span></span></code></pre></div><p>通过上述分析可以看到，函数是定义在它父劳动成果上。</p><h3 id="闭包" tabindex="-1">闭包 <a class="header-anchor" href="#闭包" aria-label="Permalink to &quot;闭包&quot;">​</a></h3><p>内部的函数被保存到外部，将生成闭包。闭包会导致原作用域链不释放，造成内存泄露。通俗理解里面的函数比外面的函数活着还长。</p><p>规则：</p><ul><li>一定是嵌套函数</li><li>内层函数一定操作了外层函数的局部变量</li><li>外层函数一定将内层函数返回外部, 并且被全局变量保存</li></ul><p>代码片段：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function fn() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  function bar() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    var y = 2;</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(x);</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  var x = 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">  return bar;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">var f = fn();</span></span>
<span class="line"><span style="color:#e1e4e8;">f();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function fn() {</span></span>
<span class="line"><span style="color:#24292e;">  function bar() {</span></span>
<span class="line"><span style="color:#24292e;">    var y = 2;</span></span>
<span class="line"><span style="color:#24292e;">    console.log(x);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  var x = 1;</span></span>
<span class="line"><span style="color:#24292e;">  return bar;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">var f = fn();</span></span>
<span class="line"><span style="color:#24292e;">f();</span></span></code></pre></div><p>闭包运用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function fn() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  var arr = [];</span></span>
<span class="line"><span style="color:#e1e4e8;">  for(var i=0; i&lt;10; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    arr[i] = function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">      console.log(i) // 输出10次10 </span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  return arr;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">var myArr = fn();</span></span>
<span class="line"><span style="color:#e1e4e8;">for(var j=0; j&lt;10; j++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  myArr[i]();</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function fn() {</span></span>
<span class="line"><span style="color:#24292e;">  var arr = [];</span></span>
<span class="line"><span style="color:#24292e;">  for(var i=0; i&lt;10; i++) {</span></span>
<span class="line"><span style="color:#24292e;">    arr[i] = function() {</span></span>
<span class="line"><span style="color:#24292e;">      console.log(i) // 输出10次10 </span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  return arr;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">var myArr = fn();</span></span>
<span class="line"><span style="color:#24292e;">for(var j=0; j&lt;10; j++) {</span></span>
<span class="line"><span style="color:#24292e;">  myArr[i]();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>打印输出10次10，是因为声明i变量是全局变量。 for语句可以这样</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">for(var i=0; i&lt;10; i++) { </span></span>
<span class="line"><span style="color:#e1e4e8;">  // ...  </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">// 修改下面是等效 </span></span>
<span class="line"><span style="color:#e1e4e8;">var i = 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">for(; i&lt;10; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  // ... </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">for(var i=0; i&lt;10; i++) { </span></span>
<span class="line"><span style="color:#24292e;">  // ...  </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">// 修改下面是等效 </span></span>
<span class="line"><span style="color:#24292e;">var i = 0;</span></span>
<span class="line"><span style="color:#24292e;">for(; i&lt;10; i++) {</span></span>
<span class="line"><span style="color:#24292e;">  // ... </span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>对于上面代码打印0-10，可通过闭包修改，设置局部变量</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function fn() {</span></span>
<span class="line"><span style="color:#e1e4e8;">var arr = [];</span></span>
<span class="line"><span style="color:#e1e4e8;">for(var i=0; i&lt;10; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    (function(j) { // 形参 </span></span>
<span class="line"><span style="color:#e1e4e8;">       arr[j] = function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">          console.log(j) // 输出0-10</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    })(i)</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">return arr;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">var myArr = fn();</span></span>
<span class="line"><span style="color:#e1e4e8;">for(var j=0; j&lt;10; j++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  myArr[i]();</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function fn() {</span></span>
<span class="line"><span style="color:#24292e;">var arr = [];</span></span>
<span class="line"><span style="color:#24292e;">for(var i=0; i&lt;10; i++) {</span></span>
<span class="line"><span style="color:#24292e;">    (function(j) { // 形参 </span></span>
<span class="line"><span style="color:#24292e;">       arr[j] = function() {</span></span>
<span class="line"><span style="color:#24292e;">          console.log(j) // 输出0-10</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    })(i)</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">return arr;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">var myArr = fn();</span></span>
<span class="line"><span style="color:#24292e;">for(var j=0; j&lt;10; j++) {</span></span>
<span class="line"><span style="color:#24292e;">  myArr[i]();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="作用域" tabindex="-1">作用域 <a class="header-anchor" href="#作用域" aria-label="Permalink to &quot;作用域&quot;">​</a></h3><p>ES5中提出全局作用域和函数作用域。</p><p>全局作用域忘记，可以往上翻翻开篇提到的部分；这里补充函数作用域，函数作用域是在函数内部的变量。</p><p>代码片段：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function fn() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  var num = 10;</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(num); // 10 </span></span>
<span class="line"><span style="color:#e1e4e8;">  function bar() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(num) // 10 </span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  bar();</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(num) // 抛出 error </span></span>
<span class="line"><span style="color:#e1e4e8;">fn();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function fn() {</span></span>
<span class="line"><span style="color:#24292e;">  var num = 10;</span></span>
<span class="line"><span style="color:#24292e;">  console.log(num); // 10 </span></span>
<span class="line"><span style="color:#24292e;">  function bar() {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(num) // 10 </span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  bar();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">console.log(num) // 抛出 error </span></span>
<span class="line"><span style="color:#24292e;">fn();</span></span></code></pre></div><p>通过上述结果可以理解，<strong>函数会创建自己的作用域&#39;{}&#39;，并且作用域分层，函数内层域能访问函数外层域，反之不行</strong>。 值得注意的是<strong>在if/for/switch/while语句后面的“{}”，不会创建自己的作用域</strong>，定义的变量保存在已经定义的作用域中。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">if(true) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  var num = 10;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(num) // 10</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">if(true) {</span></span>
<span class="line"><span style="color:#24292e;">  var num = 10;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">console.log(num) // 10</span></span></code></pre></div><p>变量num虽然在&#39;{ }&#39;中，但是if不会创建自己的作用域，变量num相当于定义在全局。</p><h3 id="作用域链" tabindex="-1">作用域链 <a class="header-anchor" href="#作用域链" aria-label="Permalink to &quot;作用域链&quot;">​</a></h3><p>链可以理解为一层一层的向上寻找。在作用域中呢？ 看看相关代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var num = 10;</span></span>
<span class="line"><span style="color:#e1e4e8;">function  fn() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(num);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">fn(); // 输出结果 10</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var num = 10;</span></span>
<span class="line"><span style="color:#24292e;">function  fn() {</span></span>
<span class="line"><span style="color:#24292e;">  console.log(num);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">fn(); // 输出结果 10</span></span></code></pre></div><p>函数fn创建自己的域，在函数内层域中寻找变量num，发现当前域没有定义变量num，继续向函数外层域寻找变量，最后在外层域中找到变量num，输出10。</p><p>目前说明<strong>作用域链是一层一层向上寻找，直到找到所需变量或者最顶层也没找到就停止寻找并返回结果</strong>。</p><p>那么能不能理解成一层一层向函数父域中寻找呢？看下面相关代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var num = 10;</span></span>
<span class="line"><span style="color:#e1e4e8;">function fn() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(num);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function bar() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  var num = 20;</span></span>
<span class="line"><span style="color:#e1e4e8;">  (function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    fn();</span></span>
<span class="line"><span style="color:#e1e4e8;">  })()</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">bar(); // 输出结果10</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var num = 10;</span></span>
<span class="line"><span style="color:#24292e;">function fn() {</span></span>
<span class="line"><span style="color:#24292e;">  console.log(num);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function bar() {</span></span>
<span class="line"><span style="color:#24292e;">  var num = 20;</span></span>
<span class="line"><span style="color:#24292e;">  (function() {</span></span>
<span class="line"><span style="color:#24292e;">    fn();</span></span>
<span class="line"><span style="color:#24292e;">  })()</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">bar(); // 输出结果10</span></span></code></pre></div><p>上述代码输出结果10。通过这个可以分析<strong>函数会在创建函数的这个域中寻找值，不是调用这个函数域</strong>，说向父域中不准确。</p><h3 id="立即执行函数" tabindex="-1">立即执行函数 <a class="header-anchor" href="#立即执行函数" aria-label="Permalink to &quot;立即执行函数&quot;">​</a></h3><p>可以理解成执行完就释放。 代码片段：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">(function(x, y) { // x, y是形参 </span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(x + y);</span></span>
<span class="line"><span style="color:#e1e4e8;">})(1, 2) // 1, 2 是实参</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">(function(x, y) { // x, y是形参 </span></span>
<span class="line"><span style="color:#24292e;">  console.log(x + y);</span></span>
<span class="line"><span style="color:#24292e;">})(1, 2) // 1, 2 是实参</span></span></code></pre></div><p>可以定义一个变量接收。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var num = (function(x, y) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  var z = x + y;</span></span>
<span class="line"><span style="color:#e1e4e8;">  return z;</span></span>
<span class="line"><span style="color:#e1e4e8;">})(1, 2)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(num)  // 3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var num = (function(x, y) {</span></span>
<span class="line"><span style="color:#24292e;">  var z = x + y;</span></span>
<span class="line"><span style="color:#24292e;">  return z;</span></span>
<span class="line"><span style="color:#24292e;">})(1, 2)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">console.log(num)  // 3</span></span></code></pre></div><p>注意：<strong>只有表达式才能被执行符号“( )”执行</strong>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var fn = function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(&#39;hello&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">}()</span></span>
<span class="line"><span style="color:#e1e4e8;">// 首次调用输出 hello  </span></span>
<span class="line"><span style="color:#e1e4e8;">// 再次调用console.log(fn) 输出 undefined</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var fn = function() {</span></span>
<span class="line"><span style="color:#24292e;">  console.log(&#39;hello&#39;);</span></span>
<span class="line"><span style="color:#24292e;">}()</span></span>
<span class="line"><span style="color:#24292e;">// 首次调用输出 hello  </span></span>
<span class="line"><span style="color:#24292e;">// 再次调用console.log(fn) 输出 undefined</span></span></code></pre></div><p>函数调用。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function fn() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(this);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">fn();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function fn() {</span></span>
<span class="line"><span style="color:#24292e;">  console.log(this);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">fn();</span></span></code></pre></div><p>函数使用call方法调用。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function foo() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(this);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">foo.call();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function foo() {</span></span>
<span class="line"><span style="color:#24292e;">  console.log(this);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">foo.call();</span></span></code></pre></div><p>这两个函数打印值是相等。</p><p>函数后面添加运算符&quot;( )&quot;，调用函数什么也不输出。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function fn(x, y) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(x, y); // 无输出  </span></span>
<span class="line"><span style="color:#e1e4e8;">}(1, 2)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function fn(x, y) {</span></span>
<span class="line"><span style="color:#24292e;">  console.log(x, y); // 无输出  </span></span>
<span class="line"><span style="color:#24292e;">}(1, 2)</span></span></code></pre></div><p>函数前面支持正负非符号。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">+|-|! function fn() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(&#39;hello&#39;); // hello  </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">fn();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">+|-|! function fn() {</span></span>
<span class="line"><span style="color:#24292e;">  console.log(&#39;hello&#39;); // hello  </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">fn();</span></span></code></pre></div><p><strong>“( )”运算符。</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var num = (1 - 1, 1 + 1); </span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(num) // 2 计算前面结果，再计算后面运算结果，返回后面结果</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var num = (1 - 1, 1 + 1); </span></span>
<span class="line"><span style="color:#24292e;">console.log(num) // 2 计算前面结果，再计算后面运算结果，返回后面结果</span></span></code></pre></div><p>if语句有函数。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var x = 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">if(function() {}) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  x += typeof f;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(x) // 1undefined 此时函数转成表达式，在执行</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var x = 1;</span></span>
<span class="line"><span style="color:#24292e;">if(function() {}) {</span></span>
<span class="line"><span style="color:#24292e;">  x += typeof f;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">console.log(x) // 1undefined 此时函数转成表达式，在执行</span></span></code></pre></div><h3 id="对象模型" tabindex="-1">对象模型 <a class="header-anchor" href="#对象模型" aria-label="Permalink to &quot;对象模型&quot;">​</a></h3><p>由属性和属性对应值组成。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var obj = {</span></span>
<span class="line"><span style="color:#e1e4e8;"> // 属性：值  </span></span>
<span class="line"><span style="color:#e1e4e8;">  name: &#39;sunny&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  age: 18,</span></span>
<span class="line"><span style="color:#e1e4e8;">  say: function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(&#39;hello&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var obj = {</span></span>
<span class="line"><span style="color:#24292e;"> // 属性：值  </span></span>
<span class="line"><span style="color:#24292e;">  name: &#39;sunny&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  age: 18,</span></span>
<span class="line"><span style="color:#24292e;">  say: function() {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(&#39;hello&#39;)</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>可以操作对象：</p><ul><li>访问属性：obj.name</li><li>删除属性：delete obj.age</li><li>修改属性：obj.age = 28</li><li>添加属性：obj.sex = &#39;male&#39;</li></ul><p><strong>创建对象</strong></p><ul><li>使用字面量创建对象</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var  obj = {}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var  obj = {}</span></span></code></pre></div><ul><li>使用系统自带的构造函数</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var obj = new Object()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var obj = new Object()</span></span></code></pre></div><ul><li>自定义</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function Person(){}</span></span>
<span class="line"><span style="color:#e1e4e8;">var person = new Person();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function Person(){}</span></span>
<span class="line"><span style="color:#24292e;">var person = new Person();</span></span></code></pre></div><p>注意： 构造函数和普通函数结构上没区别，存在new才会返回一个对象。 构造函数命名规则，大驼峰命名</p><h3 id="new关键字" tabindex="-1">new关键字 <a class="header-anchor" href="#new关键字" aria-label="Permalink to &quot;new关键字&quot;">​</a></h3><p>在构造函数前面添加new关键字，执行以下操作：</p><ul><li>在函数体最前面隐式的加上this =</li><li>执行 this.xxx = xxx</li><li>隐式的返回 this 相关代码：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function Student(name, age) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 隐式添加 this = { </span></span>
<span class="line"><span style="color:#e1e4e8;">  // name: name, </span></span>
<span class="line"><span style="color:#e1e4e8;">  // ... </span></span>
<span class="line"><span style="color:#e1e4e8;">  // } </span></span>
<span class="line"><span style="color:#e1e4e8;">  this.name = name;</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.age = age;</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.sex = &#39;male&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 隐式添加 return this </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">var student = new Student(&#39;sunny&#39;, 18);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function Student(name, age) {</span></span>
<span class="line"><span style="color:#24292e;">  // 隐式添加 this = { </span></span>
<span class="line"><span style="color:#24292e;">  // name: name, </span></span>
<span class="line"><span style="color:#24292e;">  // ... </span></span>
<span class="line"><span style="color:#24292e;">  // } </span></span>
<span class="line"><span style="color:#24292e;">  this.name = name;</span></span>
<span class="line"><span style="color:#24292e;">  this.age = age;</span></span>
<span class="line"><span style="color:#24292e;">  this.sex = &#39;male&#39;;</span></span>
<span class="line"><span style="color:#24292e;">  // 隐式添加 return this </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">var student = new Student(&#39;sunny&#39;, 18);</span></span></code></pre></div><p>构造函数显示return空对象或者原始值；输出的结果不一样。</p><p>return对象</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function Student(name, age) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.name = name;</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.age = age;</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.sex = &#39;male&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">  return {}; // 返回一个空对象 </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">var student = new Student(&#39;sunny&#39;, 18);</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(student) // {}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function Student(name, age) {</span></span>
<span class="line"><span style="color:#24292e;">  this.name = name;</span></span>
<span class="line"><span style="color:#24292e;">  this.age = age;</span></span>
<span class="line"><span style="color:#24292e;">  this.sex = &#39;male&#39;;</span></span>
<span class="line"><span style="color:#24292e;">  return {}; // 返回一个空对象 </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">var student = new Student(&#39;sunny&#39;, 18);</span></span>
<span class="line"><span style="color:#24292e;">console.log(student) // {}</span></span></code></pre></div><p>return原始值</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function Student(name, age) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.name = name;</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.age = age;</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.sex = &#39;male&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 或者return 原始值; 相当于return this，返回一个对象 </span></span>
<span class="line"><span style="color:#e1e4e8;">  return 123; </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">var student = new Student(&#39;sunny&#39;, 18);</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(student) // {name: &quot;sunny&quot;, age: 18, sex: &quot;male&quot;}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function Student(name, age) {</span></span>
<span class="line"><span style="color:#24292e;">  this.name = name;</span></span>
<span class="line"><span style="color:#24292e;">  this.age = age;</span></span>
<span class="line"><span style="color:#24292e;">  this.sex = &#39;male&#39;;</span></span>
<span class="line"><span style="color:#24292e;">  // 或者return 原始值; 相当于return this，返回一个对象 </span></span>
<span class="line"><span style="color:#24292e;">  return 123; </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">var student = new Student(&#39;sunny&#39;, 18);</span></span>
<span class="line"><span style="color:#24292e;">console.log(student) // {name: &quot;sunny&quot;, age: 18, sex: &quot;male&quot;}</span></span></code></pre></div><p>自定义对象好处</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function Car(color) { // color参数 </span></span>
<span class="line"><span style="color:#e1e4e8;">    this.color = color;  // color 接受参数</span></span>
<span class="line"><span style="color:#e1e4e8;">    this.health = 100;</span></span>
<span class="line"><span style="color:#e1e4e8;">    this.run = function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">      this.health --;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">// car变量写成Car走预编译环节，进行覆盖</span></span>
<span class="line"><span style="color:#e1e4e8;">var car1 = new Car(&#39;red&#39;); // {color: &quot;red&quot;, health: 100, run: ƒ}</span></span>
<span class="line"><span style="color:#e1e4e8;">var car2 = new Car(&#39;green&#39;);// {color: &quot;green&quot;, health: 100, run: ƒ}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function Car(color) { // color参数 </span></span>
<span class="line"><span style="color:#24292e;">    this.color = color;  // color 接受参数</span></span>
<span class="line"><span style="color:#24292e;">    this.health = 100;</span></span>
<span class="line"><span style="color:#24292e;">    this.run = function() {</span></span>
<span class="line"><span style="color:#24292e;">      this.health --;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">// car变量写成Car走预编译环节，进行覆盖</span></span>
<span class="line"><span style="color:#24292e;">var car1 = new Car(&#39;red&#39;); // {color: &quot;red&quot;, health: 100, run: ƒ}</span></span>
<span class="line"><span style="color:#24292e;">var car2 = new Car(&#39;green&#39;);// {color: &quot;green&quot;, health: 100, run: ƒ}</span></span></code></pre></div><p>通过上述代码结果可以看出car1与car2属性相互各自独立互不影响。</p><h3 id="包装类" tabindex="-1">包装类 <a class="header-anchor" href="#包装类" aria-label="Permalink to &quot;包装类&quot;">​</a></h3><p>原始值没有属性和方法。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// eg </span></span>
<span class="line"><span style="color:#e1e4e8;">var num = 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">var num = new Number(num);</span></span>
<span class="line"><span style="color:#e1e4e8;">num.a = &#39;a&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(num) // Number {1, a: &quot;a&quot;} </span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(num * 2) // 2 能计算，又返回原类型</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// eg </span></span>
<span class="line"><span style="color:#24292e;">var num = 1;</span></span>
<span class="line"><span style="color:#24292e;">var num = new Number(num);</span></span>
<span class="line"><span style="color:#24292e;">num.a = &#39;a&#39;;</span></span>
<span class="line"><span style="color:#24292e;">console.log(num) // Number {1, a: &quot;a&quot;} </span></span>
<span class="line"><span style="color:#24292e;">console.log(num * 2) // 2 能计算，又返回原类型</span></span></code></pre></div><p>String添加属性：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var str = &#39;a&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">var str = new String(str);</span></span>
<span class="line"><span style="color:#e1e4e8;">str.a = &#39;a&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(str.a) // a</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var str = &#39;a&#39;;</span></span>
<span class="line"><span style="color:#24292e;">var str = new String(str);</span></span>
<span class="line"><span style="color:#24292e;">str.a = &#39;a&#39;;</span></span>
<span class="line"><span style="color:#24292e;">console.log(str.a) // a</span></span></code></pre></div><p>Number添加属性：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// eg: </span></span>
<span class="line"><span style="color:#e1e4e8;">var num = 4;</span></span>
<span class="line"><span style="color:#e1e4e8;">num.len = 3;</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(num.len) // undefined</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// eg: </span></span>
<span class="line"><span style="color:#24292e;">var num = 4;</span></span>
<span class="line"><span style="color:#24292e;">num.len = 3;</span></span>
<span class="line"><span style="color:#24292e;">console.log(num.len) // undefined</span></span></code></pre></div><p>执行过程:</p><ul><li>执行num.len时，发生new Number(num).len = 3新建一个数字对象，该对象len赋值为3，然后delete销毁。</li><li>再次访问重新创建数字对象，添加一个len属性，与上一步new Number不同。</li><li>输出结果undefined。</li></ul><p>boolean添加new。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var bol = new Boolean(&#39;true&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// eg </span></span>
<span class="line"><span style="color:#e1e4e8;">var str = &#39;abc&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">str +=1;</span></span>
<span class="line"><span style="color:#e1e4e8;">var test = typeof str;</span></span>
<span class="line"><span style="color:#e1e4e8;">if(test.length == 6) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  test.sign = &#39;typdof返回的结果可能是string&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(test.sign);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var bol = new Boolean(&#39;true&#39;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// eg </span></span>
<span class="line"><span style="color:#24292e;">var str = &#39;abc&#39;;</span></span>
<span class="line"><span style="color:#24292e;">str +=1;</span></span>
<span class="line"><span style="color:#24292e;">var test = typeof str;</span></span>
<span class="line"><span style="color:#24292e;">if(test.length == 6) {</span></span>
<span class="line"><span style="color:#24292e;">  test.sign = &#39;typdof返回的结果可能是string&#39;;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">console.log(test.sign);</span></span></code></pre></div><p>在if里面创建 new String(&#39;test&#39;).sign = &#39;typdof返回的结果可能是string&#39;。 在最外层再次访问，重新创建new String(&#39;test&#39;).sign。 最终输出结果 undefined。</p><p>解析片段：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var str = &#39;abc&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">str +=1;</span></span>
<span class="line"><span style="color:#e1e4e8;">var test = typeof str;</span></span>
<span class="line"><span style="color:#e1e4e8;">if(test.length == 6) {</span></span>
<span class="line"><span style="color:#e1e4e8;">// 创建new String(&#39;test&#39;).sign = &#39;typdof返回的结果可能是string&#39; </span></span>
<span class="line"><span style="color:#e1e4e8;">  test.sign = &#39;typdof返回的结果可能是string&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">// 再次访问重新创建new String(&#39;test&#39;).sign </span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(test.sign);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var str = &#39;abc&#39;;</span></span>
<span class="line"><span style="color:#24292e;">str +=1;</span></span>
<span class="line"><span style="color:#24292e;">var test = typeof str;</span></span>
<span class="line"><span style="color:#24292e;">if(test.length == 6) {</span></span>
<span class="line"><span style="color:#24292e;">// 创建new String(&#39;test&#39;).sign = &#39;typdof返回的结果可能是string&#39; </span></span>
<span class="line"><span style="color:#24292e;">  test.sign = &#39;typdof返回的结果可能是string&#39;;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">// 再次访问重新创建new String(&#39;test&#39;).sign </span></span>
<span class="line"><span style="color:#24292e;">console.log(test.sign);</span></span></code></pre></div><p>注：undefined / null 没有String。</p><h3 id="原型" tabindex="-1">原型 <a class="header-anchor" href="#原型" aria-label="Permalink to &quot;原型&quot;">​</a></h3><p>是function对象的一个属性，它定义了构造函数制造出的对象的公共祖先。通过该构造函数产生的对象，可以继承该原型的属性和方法，原型也是对象。</p><p>相关代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// Person.prototype 看做原型 </span></span>
<span class="line"><span style="color:#e1e4e8;">// Person.prototype = {} 看做祖先 </span></span>
<span class="line"><span style="color:#e1e4e8;">Person.prototype.name = &#39;sunny&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">function Person() {}</span></span>
<span class="line"><span style="color:#e1e4e8;">var p = new Person();</span></span>
<span class="line"><span style="color:#e1e4e8;">// p.__proto__.constructor 指向 functon Person(){} </span></span>
<span class="line"><span style="color:#e1e4e8;">// p.__proto__ === Person.prototype </span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(p.name) // sunny</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// Person.prototype 看做原型 </span></span>
<span class="line"><span style="color:#24292e;">// Person.prototype = {} 看做祖先 </span></span>
<span class="line"><span style="color:#24292e;">Person.prototype.name = &#39;sunny&#39;;</span></span>
<span class="line"><span style="color:#24292e;">function Person() {}</span></span>
<span class="line"><span style="color:#24292e;">var p = new Person();</span></span>
<span class="line"><span style="color:#24292e;">// p.__proto__.constructor 指向 functon Person(){} </span></span>
<span class="line"><span style="color:#24292e;">// p.__proto__ === Person.prototype </span></span>
<span class="line"><span style="color:#24292e;">console.log(p.name) // sunny</span></span></code></pre></div><p>通过constructor更改指向。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function Person() {}</span></span>
<span class="line"><span style="color:#e1e4e8;">function Car() {}</span></span>
<span class="line"><span style="color:#e1e4e8;">Car.prototype = {</span></span>
<span class="line"><span style="color:#e1e4e8;">   // constructor更改了指向 </span></span>
<span class="line"><span style="color:#e1e4e8;">  constructor: Person;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">var car = new Car();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function Person() {}</span></span>
<span class="line"><span style="color:#24292e;">function Car() {}</span></span>
<span class="line"><span style="color:#24292e;">Car.prototype = {</span></span>
<span class="line"><span style="color:#24292e;">   // constructor更改了指向 </span></span>
<span class="line"><span style="color:#24292e;">  constructor: Person;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">var car = new Car();</span></span></code></pre></div><p>new过程构造函数内部做了什么。</p><ul><li>内部隐式添加this对象；</li><li>改变this执向(指向原构造函数原型)；</li><li>返回一个新对象。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// eg </span></span>
<span class="line"><span style="color:#e1e4e8;">Person.prototype.name = &#39;sunny&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">function Person() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  // var this = { </span></span>
<span class="line"><span style="color:#e1e4e8;">  // __proto__: Person.prototype </span></span>
<span class="line"><span style="color:#e1e4e8;">  // } </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">var person = new Person();</span></span>
<span class="line"><span style="color:#e1e4e8;">var obj = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: &#39;cherry&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">person.__proto__  = obj;</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(person.name) // cherry</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// eg </span></span>
<span class="line"><span style="color:#24292e;">Person.prototype.name = &#39;sunny&#39;;</span></span>
<span class="line"><span style="color:#24292e;">function Person() {</span></span>
<span class="line"><span style="color:#24292e;">  // var this = { </span></span>
<span class="line"><span style="color:#24292e;">  // __proto__: Person.prototype </span></span>
<span class="line"><span style="color:#24292e;">  // } </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">var person = new Person();</span></span>
<span class="line"><span style="color:#24292e;">var obj = {</span></span>
<span class="line"><span style="color:#24292e;">  name: &#39;cherry&#39;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">person.__proto__  = obj;</span></span>
<span class="line"><span style="color:#24292e;">console.log(person.name) // cherry</span></span></code></pre></div><p>prototype在<strong>new前</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Person.prototype.name = &#39;sunny&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">function Person() {}</span></span>
<span class="line"><span style="color:#e1e4e8;">Person.prototype.name = &#39;cherry&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">var p = new Person();</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(p.name) // cherry</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Person.prototype.name = &#39;sunny&#39;;</span></span>
<span class="line"><span style="color:#24292e;">function Person() {}</span></span>
<span class="line"><span style="color:#24292e;">Person.prototype.name = &#39;cherry&#39;;</span></span>
<span class="line"><span style="color:#24292e;">var p = new Person();</span></span>
<span class="line"><span style="color:#24292e;">console.log(p.name) // cherry</span></span></code></pre></div><p>通过上述代码看出<strong>prototype有提升作用，后面定义能把之前定义覆盖</strong>。</p><p>prototype在<strong>new后</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Person.prototype.name = &#39;sunny&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">function Person() {}</span></span>
<span class="line"><span style="color:#e1e4e8;">var p = new Person();</span></span>
<span class="line"><span style="color:#e1e4e8;">Person.prototype.name = &#39;cherry&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(p.name) // cherry</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Person.prototype.name = &#39;sunny&#39;;</span></span>
<span class="line"><span style="color:#24292e;">function Person() {}</span></span>
<span class="line"><span style="color:#24292e;">var p = new Person();</span></span>
<span class="line"><span style="color:#24292e;">Person.prototype.name = &#39;cherry&#39;;</span></span>
<span class="line"><span style="color:#24292e;">console.log(p.name) // cherry</span></span></code></pre></div><p>可以看出<strong>prototype定义在new之后，值没有变化</strong>；prototype有提升作用，后面重新定义能把之前定义覆盖。</p><p><strong>prototype对象形式 写法</strong> 在new前</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Person.prototype.name = &#39;sunny&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">function Person() {}</span></span>
<span class="line"><span style="color:#e1e4e8;">Person.prototype = { </span></span>
<span class="line"><span style="color:#e1e4e8;">  name: &#39;cherry&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">var p = new Person();</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(p.name) // cherry</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Person.prototype.name = &#39;sunny&#39;;</span></span>
<span class="line"><span style="color:#24292e;">function Person() {}</span></span>
<span class="line"><span style="color:#24292e;">Person.prototype = { </span></span>
<span class="line"><span style="color:#24292e;">  name: &#39;cherry&#39;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">var p = new Person();</span></span>
<span class="line"><span style="color:#24292e;">console.log(p.name) // cherry</span></span></code></pre></div><p>通过上述看出Person原型给修改了，<strong>没有new生成就改变了</strong>。</p><p>在new之后</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Person.prototype.name = &#39;sunny&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">function Person() {}</span></span>
<span class="line"><span style="color:#e1e4e8;">var p = new Person();</span></span>
<span class="line"><span style="color:#e1e4e8;">person.prototype = { </span></span>
<span class="line"><span style="color:#e1e4e8;">  name: &#39;cherry&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(p.name) // sunny</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Person.prototype.name = &#39;sunny&#39;;</span></span>
<span class="line"><span style="color:#24292e;">function Person() {}</span></span>
<span class="line"><span style="color:#24292e;">var p = new Person();</span></span>
<span class="line"><span style="color:#24292e;">person.prototype = { </span></span>
<span class="line"><span style="color:#24292e;">  name: &#39;cherry&#39;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">console.log(p.name) // sunny</span></span></code></pre></div><p>Person函数里面__proto__没有修改，只是在原基础上修改Person.prototype属性。</p><h3 id="原型链" tabindex="-1">原型链 <a class="header-anchor" href="#原型链" aria-label="Permalink to &quot;原型链&quot;">​</a></h3><p>Object.prototype是所有对象的最终原型。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// eg </span></span>
<span class="line"><span style="color:#e1e4e8;">Person.prototype.__proto__ = Object.prototype </span></span>
<span class="line"><span style="color:#e1e4e8;">function Person() {} </span></span>
<span class="line"><span style="color:#e1e4e8;">Person.prototype.name = &#39;sunny&#39;; </span></span>
<span class="line"><span style="color:#e1e4e8;">var p = new Person()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// eg </span></span>
<span class="line"><span style="color:#24292e;">Person.prototype.__proto__ = Object.prototype </span></span>
<span class="line"><span style="color:#24292e;">function Person() {} </span></span>
<span class="line"><span style="color:#24292e;">Person.prototype.name = &#39;sunny&#39;; </span></span>
<span class="line"><span style="color:#24292e;">var p = new Person()</span></span></code></pre></div><p>引用值可以自己操作自己 (原型链继承模式)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function Father() { </span></span>
<span class="line"><span style="color:#e1e4e8;">  this.name = &#39;sunny&#39;; </span></span>
<span class="line"><span style="color:#e1e4e8;">  this.age = 46; </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">var f = new Father(); </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Son.prototype = f; </span></span>
<span class="line"><span style="color:#e1e4e8;">function Son() {} </span></span>
<span class="line"><span style="color:#e1e4e8;">var s = new Son(); </span></span>
<span class="line"><span style="color:#e1e4e8;">s.age++ </span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(f.age) // 46</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function Father() { </span></span>
<span class="line"><span style="color:#24292e;">  this.name = &#39;sunny&#39;; </span></span>
<span class="line"><span style="color:#24292e;">  this.age = 46; </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">var f = new Father(); </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Son.prototype = f; </span></span>
<span class="line"><span style="color:#24292e;">function Son() {} </span></span>
<span class="line"><span style="color:#24292e;">var s = new Son(); </span></span>
<span class="line"><span style="color:#24292e;">s.age++ </span></span>
<span class="line"><span style="color:#24292e;">console.log(f.age) // 46</span></span></code></pre></div><p>揭秘原型与原型链取值</p><p>相关代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Person.prototype = { </span></span>
<span class="line"><span style="color:#e1e4e8;">  name: &#39;sunny&#39;, </span></span>
<span class="line"><span style="color:#e1e4e8;">  say: function() { </span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(this.name) </span></span>
<span class="line"><span style="color:#e1e4e8;">  } </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">function Person() {} </span></span>
<span class="line"><span style="color:#e1e4e8;">var p = new Person(); </span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(p.say) // sunny</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Person.prototype = { </span></span>
<span class="line"><span style="color:#24292e;">  name: &#39;sunny&#39;, </span></span>
<span class="line"><span style="color:#24292e;">  say: function() { </span></span>
<span class="line"><span style="color:#24292e;">    console.log(this.name) </span></span>
<span class="line"><span style="color:#24292e;">  } </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">function Person() {} </span></span>
<span class="line"><span style="color:#24292e;">var p = new Person(); </span></span>
<span class="line"><span style="color:#24292e;">console.log(p.say) // sunny</span></span></code></pre></div><p>修改上面代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Person.prototype = { </span></span>
<span class="line"><span style="color:#e1e4e8;">  name: &#39;sunny&#39;, </span></span>
<span class="line"><span style="color:#e1e4e8;">  say: function() { </span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(this.name) </span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">function Person() { </span></span>
<span class="line"><span style="color:#e1e4e8;">  this.name = &#39;cherry&#39;; </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">var p = new Person(); </span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(p.name) // cherry</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Person.prototype = { </span></span>
<span class="line"><span style="color:#24292e;">  name: &#39;sunny&#39;, </span></span>
<span class="line"><span style="color:#24292e;">  say: function() { </span></span>
<span class="line"><span style="color:#24292e;">    console.log(this.name) </span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">function Person() { </span></span>
<span class="line"><span style="color:#24292e;">  this.name = &#39;cherry&#39;; </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">var p = new Person(); </span></span>
<span class="line"><span style="color:#24292e;">console.log(p.name) // cherry</span></span></code></pre></div><p>通过上述代码片段发现实例对象<strong>就近取值</strong>，如果没有找到值，沿着原型链继续往上寻找。</p><h3 id="object-create" tabindex="-1">Object.create <a class="header-anchor" href="#object-create" aria-label="Permalink to &quot;Object.create&quot;">​</a></h3><p>语法：Object.create(原型)。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var obj = { </span></span>
<span class="line"><span style="color:#e1e4e8;">  name: &#39;sunny&#39; </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">var obj1 = Object.create(obj);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var obj = { </span></span>
<span class="line"><span style="color:#24292e;">  name: &#39;sunny&#39; </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">var obj1 = Object.create(obj);</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Person.prototype.name = &#39;sunny&#39;; </span></span>
<span class="line"><span style="color:#e1e4e8;">function Person() {} </span></span>
<span class="line"><span style="color:#e1e4e8;">var p = Object.create(Person.prototype);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Person.prototype.name = &#39;sunny&#39;; </span></span>
<span class="line"><span style="color:#24292e;">function Person() {} </span></span>
<span class="line"><span style="color:#24292e;">var p = Object.create(Person.prototype);</span></span></code></pre></div><p>绝大多数对象最终都会继承自Object.create，null除外。</p><h3 id="call-继承" tabindex="-1">call (继承) <a class="header-anchor" href="#call-继承" aria-label="Permalink to &quot;call (继承)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function Person(name, age) { </span></span>
<span class="line"><span style="color:#e1e4e8;">  this.name = name; </span></span>
<span class="line"><span style="color:#e1e4e8;">  this.age = age; </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function Son(name, age, sex) { </span></span>
<span class="line"><span style="color:#e1e4e8;">  Person.call(this, name, age); </span></span>
<span class="line"><span style="color:#e1e4e8;">  this.sex = sex; </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">var son = new Son(&#39;sunny&#39;, 18, &#39;male&#39;); </span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(son) // {name: &quot;sunny&quot;, age: 18, sex: &quot;male&quot;}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function Person(name, age) { </span></span>
<span class="line"><span style="color:#24292e;">  this.name = name; </span></span>
<span class="line"><span style="color:#24292e;">  this.age = age; </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function Son(name, age, sex) { </span></span>
<span class="line"><span style="color:#24292e;">  Person.call(this, name, age); </span></span>
<span class="line"><span style="color:#24292e;">  this.sex = sex; </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">var son = new Son(&#39;sunny&#39;, 18, &#39;male&#39;); </span></span>
<span class="line"><span style="color:#24292e;">console.log(son) // {name: &quot;sunny&quot;, age: 18, sex: &quot;male&quot;}</span></span></code></pre></div><p>上述代码看出：能共用父类属性，支持传参。</p><h3 id="apply-继承" tabindex="-1">apply (继承) <a class="header-anchor" href="#apply-继承" aria-label="Permalink to &quot;apply (继承)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function Person() { </span></span>
<span class="line"><span style="color:#e1e4e8;">  this.name = name; </span></span>
<span class="line"><span style="color:#e1e4e8;">  this.age = age; </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function Son(name, age, sex) { </span></span>
<span class="line"><span style="color:#e1e4e8;">  Person.apply(this, [name, age]); </span></span>
<span class="line"><span style="color:#e1e4e8;">  this.sex = sex; </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">var son = new Son(&#39;sunny&#39;, 18, &#39;male&#39;)  </span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(son) // {name: &quot;sunny&quot;, age: 18, sex:&quot;male&quot;}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function Person() { </span></span>
<span class="line"><span style="color:#24292e;">  this.name = name; </span></span>
<span class="line"><span style="color:#24292e;">  this.age = age; </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function Son(name, age, sex) { </span></span>
<span class="line"><span style="color:#24292e;">  Person.apply(this, [name, age]); </span></span>
<span class="line"><span style="color:#24292e;">  this.sex = sex; </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">var son = new Son(&#39;sunny&#39;, 18, &#39;male&#39;)  </span></span>
<span class="line"><span style="color:#24292e;">console.log(son) // {name: &quot;sunny&quot;, age: 18, sex:&quot;male&quot;}</span></span></code></pre></div><p>上述代码看出：能共用父类属性，支持传参，参数是数组形式。 对比可以总结归纳：<strong>call与apply传参序列不同，都能改变this指向</strong>。 call或者apply 参数为null/undefined时，执行JS全局对象浏览器中的window。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function fn() { </span></span>
<span class="line"><span style="color:#e1e4e8;">  foo.apply(null, arguments); </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function foo() { </span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(arguments) </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">foo(1, 2, 3) // 1, 2, 3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function fn() { </span></span>
<span class="line"><span style="color:#24292e;">  foo.apply(null, arguments); </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function foo() { </span></span>
<span class="line"><span style="color:#24292e;">  console.log(arguments) </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">foo(1, 2, 3) // 1, 2, 3</span></span></code></pre></div><h3 id="继承" tabindex="-1">继承 <a class="header-anchor" href="#继承" aria-label="Permalink to &quot;继承&quot;">​</a></h3><ul><li>原型链继承，结合子类原型与父类实例</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 代码片段 </span></span>
<span class="line"><span style="color:#e1e4e8;">Person.prototype.sleep = function() {} </span></span>
<span class="line"><span style="color:#e1e4e8;">function Person(name, age) { </span></span>
<span class="line"><span style="color:#e1e4e8;">  this.name = name; </span></span>
<span class="line"><span style="color:#e1e4e8;">  this.age = age; </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">function Son(sex) { </span></span>
<span class="line"><span style="color:#e1e4e8;">  this.sex = sex; </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">Son.prototype = new Person(); // 子类的原型为父类实例对象 </span></span>
<span class="line"><span style="color:#e1e4e8;">var son = New Son(&#39;male&#39;); </span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(son)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 代码片段 </span></span>
<span class="line"><span style="color:#24292e;">Person.prototype.sleep = function() {} </span></span>
<span class="line"><span style="color:#24292e;">function Person(name, age) { </span></span>
<span class="line"><span style="color:#24292e;">  this.name = name; </span></span>
<span class="line"><span style="color:#24292e;">  this.age = age; </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">function Son(sex) { </span></span>
<span class="line"><span style="color:#24292e;">  this.sex = sex; </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">Son.prototype = new Person(); // 子类的原型为父类实例对象 </span></span>
<span class="line"><span style="color:#24292e;">var son = New Son(&#39;male&#39;); </span></span>
<span class="line"><span style="color:#24292e;">console.log(son)</span></span></code></pre></div><p>如果在子类原型添加方法，能继承吗？ 修改代码：</p><p>在new Person之前：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Person.prototype.sleep = function() {} </span></span>
<span class="line"><span style="color:#e1e4e8;">function Person(name, age) { </span></span>
<span class="line"><span style="color:#e1e4e8;">  this.name = name;  </span></span>
<span class="line"><span style="color:#e1e4e8;">  this.age = age;  </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">function Son(sex) { </span></span>
<span class="line"><span style="color:#e1e4e8;">  this.sex = sex;  </span></span>
<span class="line"><span style="color:#e1e4e8;">}  </span></span>
<span class="line"><span style="color:#e1e4e8;">Son.prototype.eat = function() {} // 在这里... </span></span>
<span class="line"><span style="color:#e1e4e8;">Son.prototype = new Person(); </span></span>
<span class="line"><span style="color:#e1e4e8;">var son = new Son(&#39;male&#39;); </span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(son)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Person.prototype.sleep = function() {} </span></span>
<span class="line"><span style="color:#24292e;">function Person(name, age) { </span></span>
<span class="line"><span style="color:#24292e;">  this.name = name;  </span></span>
<span class="line"><span style="color:#24292e;">  this.age = age;  </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">function Son(sex) { </span></span>
<span class="line"><span style="color:#24292e;">  this.sex = sex;  </span></span>
<span class="line"><span style="color:#24292e;">}  </span></span>
<span class="line"><span style="color:#24292e;">Son.prototype.eat = function() {} // 在这里... </span></span>
<span class="line"><span style="color:#24292e;">Son.prototype = new Person(); </span></span>
<span class="line"><span style="color:#24292e;">var son = new Son(&#39;male&#39;); </span></span>
<span class="line"><span style="color:#24292e;">console.log(son)</span></span></code></pre></div><p>在new Person()之后：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Person.prototype.sleep = function() {} </span></span>
<span class="line"><span style="color:#e1e4e8;">function Person(name, age) { </span></span>
<span class="line"><span style="color:#e1e4e8;">  this.name = name;  </span></span>
<span class="line"><span style="color:#e1e4e8;">  this.age = age;  </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">function Son(sex) { </span></span>
<span class="line"><span style="color:#e1e4e8;">  this.sex = sex;  </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">Son.prototype = new  Person(); </span></span>
<span class="line"><span style="color:#e1e4e8;">SOn.prototype.eat = function() {}; // 在这里... </span></span>
<span class="line"><span style="color:#e1e4e8;">var son = new Son(&#39;male&#39;);  </span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(son)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Person.prototype.sleep = function() {} </span></span>
<span class="line"><span style="color:#24292e;">function Person(name, age) { </span></span>
<span class="line"><span style="color:#24292e;">  this.name = name;  </span></span>
<span class="line"><span style="color:#24292e;">  this.age = age;  </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">function Son(sex) { </span></span>
<span class="line"><span style="color:#24292e;">  this.sex = sex;  </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">Son.prototype = new  Person(); </span></span>
<span class="line"><span style="color:#24292e;">SOn.prototype.eat = function() {}; // 在这里... </span></span>
<span class="line"><span style="color:#24292e;">var son = new Son(&#39;male&#39;);  </span></span>
<span class="line"><span style="color:#24292e;">console.log(son)</span></span></code></pre></div><p>上述代码<strong>在new Person之前子类原型添加方法失败</strong>，原因是更改了原型的指向。 该继承缺点：无法实现多继承； 在子类原型添加方法和属性，需在Son.prototype=new Person之后。</p><p><strong>call/apply构造函数继承</strong>，如果忘记可以查看上面call/apply介绍。 这里补充父类上原型属性和方法能否被call/apply继承。 相关代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Person.prototype.sleep = function() {} </span></span>
<span class="line"><span style="color:#e1e4e8;">function Person(name, age) { </span></span>
<span class="line"><span style="color:#e1e4e8;">  this.name = name; </span></span>
<span class="line"><span style="color:#e1e4e8;">  this.age = age;  </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Son.prototype.eat = function() {} </span></span>
<span class="line"><span style="color:#e1e4e8;">function Son(name, age, sex) { </span></span>
<span class="line"><span style="color:#e1e4e8;">  Person.call(this, name, age); // ...能不能继承sleep函数 </span></span>
<span class="line"><span style="color:#e1e4e8;">  this.sex = sex; </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">var son = new Son(&#39;sunny&#39;, 18, &#39;male&#39;); </span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(son);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Person.prototype.sleep = function() {} </span></span>
<span class="line"><span style="color:#24292e;">function Person(name, age) { </span></span>
<span class="line"><span style="color:#24292e;">  this.name = name; </span></span>
<span class="line"><span style="color:#24292e;">  this.age = age;  </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Son.prototype.eat = function() {} </span></span>
<span class="line"><span style="color:#24292e;">function Son(name, age, sex) { </span></span>
<span class="line"><span style="color:#24292e;">  Person.call(this, name, age); // ...能不能继承sleep函数 </span></span>
<span class="line"><span style="color:#24292e;">  this.sex = sex; </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">var son = new Son(&#39;sunny&#39;, 18, &#39;male&#39;); </span></span>
<span class="line"><span style="color:#24292e;">console.log(son);</span></span></code></pre></div><p>实例son输出说明，call方法不能继承父类原型上的方法和属性；父类构造函数调用两次：一次在子类构造函数内调用，一次在创建子类原型调用。</p><p><strong>原型链与构造函数组合</strong> 相关代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Person.prototype.sleep = function() {} </span></span>
<span class="line"><span style="color:#e1e4e8;">function Person(name, age) { </span></span>
<span class="line"><span style="color:#e1e4e8;">  this.name = name; </span></span>
<span class="line"><span style="color:#e1e4e8;">  this.age = age; </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function Son(name, age, sex){ </span></span>
<span class="line"><span style="color:#e1e4e8;">  Person.call(this, name, age); </span></span>
<span class="line"><span style="color:#e1e4e8;">  this.sex = sex; </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">Son.prototype = new Person(); // 第一步 </span></span>
<span class="line"><span style="color:#e1e4e8;">Son.prototype.constructor = Son; // 第二步 </span></span>
<span class="line"><span style="color:#e1e4e8;">Son.prototype.eat = function() {}; </span></span>
<span class="line"><span style="color:#e1e4e8;">var son = new Son(&#39;sunny&#39;, 18, &#39;male&#39;); </span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(son)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Person.prototype.sleep = function() {} </span></span>
<span class="line"><span style="color:#24292e;">function Person(name, age) { </span></span>
<span class="line"><span style="color:#24292e;">  this.name = name; </span></span>
<span class="line"><span style="color:#24292e;">  this.age = age; </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function Son(name, age, sex){ </span></span>
<span class="line"><span style="color:#24292e;">  Person.call(this, name, age); </span></span>
<span class="line"><span style="color:#24292e;">  this.sex = sex; </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">Son.prototype = new Person(); // 第一步 </span></span>
<span class="line"><span style="color:#24292e;">Son.prototype.constructor = Son; // 第二步 </span></span>
<span class="line"><span style="color:#24292e;">Son.prototype.eat = function() {}; </span></span>
<span class="line"><span style="color:#24292e;">var son = new Son(&#39;sunny&#39;, 18, &#39;male&#39;); </span></span>
<span class="line"><span style="color:#24292e;">console.log(son)</span></span></code></pre></div><p>实例son输出说明，子类可以继承父类属性以及父类原型属性和方法；缺点父类的构造函数生成两份实例。</p><p><strong>组合继承</strong> 通过子类原型和父类原型指向同一个对象。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Person.prototype.sleep = function() {}</span></span>
<span class="line"><span style="color:#e1e4e8;">function Person(name, age) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.name = name;</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.age = age;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function Son(name, age, sex) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  Person.call(this, name, age);</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.sex = sex;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">Son.prototype = Person.prototype; // ...在这里</span></span>
<span class="line"><span style="color:#e1e4e8;">Son.prototype.eat = function() {};</span></span>
<span class="line"><span style="color:#e1e4e8;">var son = new Son(&#39;sunny&#39;, 18, &#39;male&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(son)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Person.prototype.sleep = function() {}</span></span>
<span class="line"><span style="color:#24292e;">function Person(name, age) {</span></span>
<span class="line"><span style="color:#24292e;">  this.name = name;</span></span>
<span class="line"><span style="color:#24292e;">  this.age = age;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function Son(name, age, sex) {</span></span>
<span class="line"><span style="color:#24292e;">  Person.call(this, name, age);</span></span>
<span class="line"><span style="color:#24292e;">  this.sex = sex;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">Son.prototype = Person.prototype; // ...在这里</span></span>
<span class="line"><span style="color:#24292e;">Son.prototype.eat = function() {};</span></span>
<span class="line"><span style="color:#24292e;">var son = new Son(&#39;sunny&#39;, 18, &#39;male&#39;);</span></span>
<span class="line"><span style="color:#24292e;">console.log(son)</span></span></code></pre></div><p>代码son输出说明，子类可以继承父类原型上方法和属性。</p><p><strong>组合继承优化</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Person.prototype.sleep = function() {} </span></span>
<span class="line"><span style="color:#e1e4e8;">function Person(name, age) { </span></span>
<span class="line"><span style="color:#e1e4e8;">  this.name = name; </span></span>
<span class="line"><span style="color:#e1e4e8;">  this.age = age; </span></span>
<span class="line"><span style="color:#e1e4e8;">} </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function Son(name, age, sex) { </span></span>
<span class="line"><span style="color:#e1e4e8;">  Person.call(this, name, age); </span></span>
<span class="line"><span style="color:#e1e4e8;">  this.sex = sex; </span></span>
<span class="line"><span style="color:#e1e4e8;">} </span></span>
<span class="line"><span style="color:#e1e4e8;">Son.prototype = Object.create(Person.prototype); </span></span>
<span class="line"><span style="color:#e1e4e8;">Son.prototype.constructor = Son; </span></span>
<span class="line"><span style="color:#e1e4e8;">Son.prototype.eat = function() {};</span></span>
<span class="line"><span style="color:#e1e4e8;">var son = new Son(&#39;sunny&#39;, 18, &#39;male&#39;); </span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(son);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Person.prototype.sleep = function() {} </span></span>
<span class="line"><span style="color:#24292e;">function Person(name, age) { </span></span>
<span class="line"><span style="color:#24292e;">  this.name = name; </span></span>
<span class="line"><span style="color:#24292e;">  this.age = age; </span></span>
<span class="line"><span style="color:#24292e;">} </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function Son(name, age, sex) { </span></span>
<span class="line"><span style="color:#24292e;">  Person.call(this, name, age); </span></span>
<span class="line"><span style="color:#24292e;">  this.sex = sex; </span></span>
<span class="line"><span style="color:#24292e;">} </span></span>
<span class="line"><span style="color:#24292e;">Son.prototype = Object.create(Person.prototype); </span></span>
<span class="line"><span style="color:#24292e;">Son.prototype.constructor = Son; </span></span>
<span class="line"><span style="color:#24292e;">Son.prototype.eat = function() {};</span></span>
<span class="line"><span style="color:#24292e;">var son = new Son(&#39;sunny&#39;, 18, &#39;male&#39;); </span></span>
<span class="line"><span style="color:#24292e;">console.log(son);</span></span></code></pre></div><p>实例son继承借助创建对象，子类继承父类所有属性和方法。</p><p><strong>函数共享原型</strong> 对于指向同一个对象继承。 相关代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Person.prototype.name = &#39;sunny&#39;; </span></span>
<span class="line"><span style="color:#e1e4e8;">function Person() {} </span></span>
<span class="line"><span style="color:#e1e4e8;">function Son() {}  </span></span>
<span class="line"><span style="color:#e1e4e8;">Son.prototype = Person.prototype; </span></span>
<span class="line"><span style="color:#e1e4e8;">var son = new Son(); </span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(son.name); // sunny</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Person.prototype.name = &#39;sunny&#39;; </span></span>
<span class="line"><span style="color:#24292e;">function Person() {} </span></span>
<span class="line"><span style="color:#24292e;">function Son() {}  </span></span>
<span class="line"><span style="color:#24292e;">Son.prototype = Person.prototype; </span></span>
<span class="line"><span style="color:#24292e;">var son = new Son(); </span></span>
<span class="line"><span style="color:#24292e;">console.log(son.name); // sunny</span></span></code></pre></div><p>可以将代码整合优化，编写一个公共函数共享原型，一定要在new之前使用。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Person.prototype.name = &#39;sunny&#39;; </span></span>
<span class="line"><span style="color:#e1e4e8;">function Person() {} </span></span>
<span class="line"><span style="color:#e1e4e8;">function Son() {} </span></span>
<span class="line"><span style="color:#e1e4e8;">// 编写inherit函数共享原型 </span></span>
<span class="line"><span style="color:#e1e4e8;">function inherit(target, origin) {  </span></span>
<span class="line"><span style="color:#e1e4e8;">  target.prototype = origin.prototype;   </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">inherit(Son, Person);  // new之前先继承后使用 </span></span>
<span class="line"><span style="color:#e1e4e8;">var son = new Son(); </span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(son.name); // sunny</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Person.prototype.name = &#39;sunny&#39;; </span></span>
<span class="line"><span style="color:#24292e;">function Person() {} </span></span>
<span class="line"><span style="color:#24292e;">function Son() {} </span></span>
<span class="line"><span style="color:#24292e;">// 编写inherit函数共享原型 </span></span>
<span class="line"><span style="color:#24292e;">function inherit(target, origin) {  </span></span>
<span class="line"><span style="color:#24292e;">  target.prototype = origin.prototype;   </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">inherit(Son, Person);  // new之前先继承后使用 </span></span>
<span class="line"><span style="color:#24292e;">var son = new Son(); </span></span>
<span class="line"><span style="color:#24292e;">console.log(son.name); // sunny</span></span></code></pre></div><p>继续对上面代码进行修改，在函数inherit内部使用一个构造函数中转proto指向。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Person.prototype.name = &#39;sunny&#39;; </span></span>
<span class="line"><span style="color:#e1e4e8;">function Person() {} </span></span>
<span class="line"><span style="color:#e1e4e8;">function Son() {}; </span></span>
<span class="line"><span style="color:#e1e4e8;">function inherit(target, origin) {  </span></span>
<span class="line"><span style="color:#e1e4e8;">  function F(){ </span></span>
<span class="line"><span style="color:#e1e4e8;">    F.prototype = origin.prototype; </span></span>
<span class="line"><span style="color:#e1e4e8;">    target.prototype = new F(); </span></span>
<span class="line"><span style="color:#e1e4e8;">    target.prototype.constructor = target; </span></span>
<span class="line"><span style="color:#e1e4e8;">    target.prototype.uber = origin.prototype; </span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">inherit(Son, Person);</span></span>
<span class="line"><span style="color:#e1e4e8;">var person = new Person();</span></span>
<span class="line"><span style="color:#e1e4e8;">var son = new Son();</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(son.name) // undefined </span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(person.name) // sunny </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// Son原型添加属性，不影响原构造函数与原 原型 </span></span>
<span class="line"><span style="color:#e1e4e8;">Son.prototype.sex = &#39;male&#39;; </span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(son.sex) // male </span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(Person.sex) // undefined</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Person.prototype.name = &#39;sunny&#39;; </span></span>
<span class="line"><span style="color:#24292e;">function Person() {} </span></span>
<span class="line"><span style="color:#24292e;">function Son() {}; </span></span>
<span class="line"><span style="color:#24292e;">function inherit(target, origin) {  </span></span>
<span class="line"><span style="color:#24292e;">  function F(){ </span></span>
<span class="line"><span style="color:#24292e;">    F.prototype = origin.prototype; </span></span>
<span class="line"><span style="color:#24292e;">    target.prototype = new F(); </span></span>
<span class="line"><span style="color:#24292e;">    target.prototype.constructor = target; </span></span>
<span class="line"><span style="color:#24292e;">    target.prototype.uber = origin.prototype; </span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">inherit(Son, Person);</span></span>
<span class="line"><span style="color:#24292e;">var person = new Person();</span></span>
<span class="line"><span style="color:#24292e;">var son = new Son();</span></span>
<span class="line"><span style="color:#24292e;">console.log(son.name) // undefined </span></span>
<span class="line"><span style="color:#24292e;">console.log(person.name) // sunny </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// Son原型添加属性，不影响原构造函数与原 原型 </span></span>
<span class="line"><span style="color:#24292e;">Son.prototype.sex = &#39;male&#39;; </span></span>
<span class="line"><span style="color:#24292e;">console.log(son.sex) // male </span></span>
<span class="line"><span style="color:#24292e;">console.log(Person.sex) // undefined</span></span></code></pre></div><p>上述代码块中沿着目标实例son.__proto__找到构造函数F.prototype，指给原构造函数Person.prototype，此方法称为<strong>圣杯模式继承</strong>。</p><p>抽离核心代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var inherit = (function() { </span></span>
<span class="line"><span style="color:#e1e4e8;">  var F = function() {} </span></span>
<span class="line"><span style="color:#e1e4e8;">  return function(target, origin) { </span></span>
<span class="line"><span style="color:#e1e4e8;">    F.prototype = origin.prototype; </span></span>
<span class="line"><span style="color:#e1e4e8;">    target.prototype = new F(); </span></span>
<span class="line"><span style="color:#e1e4e8;">    target.prototype.constructor = target; </span></span>
<span class="line"><span style="color:#e1e4e8;">    target.prototype.uber = origin.prototype; </span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">})()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var inherit = (function() { </span></span>
<span class="line"><span style="color:#24292e;">  var F = function() {} </span></span>
<span class="line"><span style="color:#24292e;">  return function(target, origin) { </span></span>
<span class="line"><span style="color:#24292e;">    F.prototype = origin.prototype; </span></span>
<span class="line"><span style="color:#24292e;">    target.prototype = new F(); </span></span>
<span class="line"><span style="color:#24292e;">    target.prototype.constructor = target; </span></span>
<span class="line"><span style="color:#24292e;">    target.prototype.uber = origin.prototype; </span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">})()</span></span></code></pre></div><h3 id="命名空间" tabindex="-1">命名空间 <a class="header-anchor" href="#命名空间" aria-label="Permalink to &quot;命名空间&quot;">​</a></h3><p>管理变量，防止污染全局，适用于模块化开发。 之前开发中使用对象形式。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var obj = { </span></span>
<span class="line"><span style="color:#e1e4e8;">  name: &#39;sunny&#39;, </span></span>
<span class="line"><span style="color:#e1e4e8;">  sayName: function() { </span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(this.name) </span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">obj.sayName(); // 打印结果: sunny</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var obj = { </span></span>
<span class="line"><span style="color:#24292e;">  name: &#39;sunny&#39;, </span></span>
<span class="line"><span style="color:#24292e;">  sayName: function() { </span></span>
<span class="line"><span style="color:#24292e;">    console.log(this.name) </span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">obj.sayName(); // 打印结果: sunny</span></span></code></pre></div><p>有了立即执行函数结合闭包，演变出以下改进。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var name = &#39;sunny&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">var init = (function(){</span></span>
<span class="line"><span style="color:#e1e4e8;">  var name = &#39;cherry&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">  function sayName() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(name); // cherry</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  return function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    sayName();</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">})()</span></span>
<span class="line"><span style="color:#e1e4e8;">init();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var name = &#39;sunny&#39;;</span></span>
<span class="line"><span style="color:#24292e;">var init = (function(){</span></span>
<span class="line"><span style="color:#24292e;">  var name = &#39;cherry&#39;;</span></span>
<span class="line"><span style="color:#24292e;">  function sayName() {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(name); // cherry</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  return function() {</span></span>
<span class="line"><span style="color:#24292e;">    sayName();</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">})()</span></span>
<span class="line"><span style="color:#24292e;">init();</span></span></code></pre></div><p>上述代码使用闭包形式通过私有属性执行。</p><h3 id="链式调用" tabindex="-1">链式调用 <a class="header-anchor" href="#链式调用" aria-label="Permalink to &quot;链式调用&quot;">​</a></h3><p>模仿jQuery链式调用。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">obj.eat().drink.slee();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">obj.eat().drink.slee();</span></span></code></pre></div><p>浏览器控制台输出函数结果，会默认值返回undefined。利用对象方法中this指向当前对象，模仿jQuery链式调用，默认返回this即可。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var obj = { </span></span>
<span class="line"><span style="color:#e1e4e8;">  eat: function() { </span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(&#39;eat&#39;); </span></span>
<span class="line"><span style="color:#e1e4e8;">    return this; </span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  drink: function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(&#39;drink&#39;); </span></span>
<span class="line"><span style="color:#e1e4e8;">    return this; </span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  sleep: function() { </span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(&#39;sleep&#39;); </span></span>
<span class="line"><span style="color:#e1e4e8;">    return this;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">} </span></span>
<span class="line"><span style="color:#e1e4e8;">obj.eat().drink().sleep();  // eat, drink, sleep</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var obj = { </span></span>
<span class="line"><span style="color:#24292e;">  eat: function() { </span></span>
<span class="line"><span style="color:#24292e;">    console.log(&#39;eat&#39;); </span></span>
<span class="line"><span style="color:#24292e;">    return this; </span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  drink: function() {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(&#39;drink&#39;); </span></span>
<span class="line"><span style="color:#24292e;">    return this; </span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  sleep: function() { </span></span>
<span class="line"><span style="color:#24292e;">    console.log(&#39;sleep&#39;); </span></span>
<span class="line"><span style="color:#24292e;">    return this;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">} </span></span>
<span class="line"><span style="color:#24292e;">obj.eat().drink().sleep();  // eat, drink, sleep</span></span></code></pre></div><h3 id="对象枚举" tabindex="-1">对象枚举 <a class="header-anchor" href="#对象枚举" aria-label="Permalink to &quot;对象枚举&quot;">​</a></h3><p>打印对象属性对应的值一般使用for...in 。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var obj = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: &#39;sunny&#39;, </span></span>
<span class="line"><span style="color:#e1e4e8;">  age: 18 </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">for(var prop in obj) { </span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(obj.prop); // undefined </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var obj = {</span></span>
<span class="line"><span style="color:#24292e;">  name: &#39;sunny&#39;, </span></span>
<span class="line"><span style="color:#24292e;">  age: 18 </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">for(var prop in obj) { </span></span>
<span class="line"><span style="color:#24292e;">  console.log(obj.prop); // undefined </span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>在接收对象值应该写成这样obj[prop]，因为在对象内部会隐式转换成obj.prop。</p><p>hasOwnProperty：检测该属性在该对象中是否存在。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var obj = { </span></span>
<span class="line"><span style="color:#e1e4e8;">  name: &#39;sunny&#39;, </span></span>
<span class="line"><span style="color:#e1e4e8;">  age: 18, </span></span>
<span class="line"><span style="color:#e1e4e8;">  __proto__: { </span></span>
<span class="line"><span style="color:#e1e4e8;">    lastname: &#39;cherry&#39;, </span></span>
<span class="line"><span style="color:#e1e4e8;">    __proto__: Object.prototype </span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">for(var prop in obj) { </span></span>
<span class="line"><span style="color:#e1e4e8;">  if(obj.hasOwnProperty(prop)) { </span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(obj[prop]) // sunny, 18, cherry ... </span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var obj = { </span></span>
<span class="line"><span style="color:#24292e;">  name: &#39;sunny&#39;, </span></span>
<span class="line"><span style="color:#24292e;">  age: 18, </span></span>
<span class="line"><span style="color:#24292e;">  __proto__: { </span></span>
<span class="line"><span style="color:#24292e;">    lastname: &#39;cherry&#39;, </span></span>
<span class="line"><span style="color:#24292e;">    __proto__: Object.prototype </span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">for(var prop in obj) { </span></span>
<span class="line"><span style="color:#24292e;">  if(obj.hasOwnProperty(prop)) { </span></span>
<span class="line"><span style="color:#24292e;">    console.log(obj[prop]) // sunny, 18, cherry ... </span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><ul><li>只有对象能用hasOwnProperty。</li><li>是对象自己的属性返回true，反之false。</li><li>能返回原型及原型链上的属性，一旦延伸到原型链顶端不会找到该属性，返回false(系统自带的返回true，自己设置的返回true)。</li></ul><p>in：能不能访问对象属性，包括原型。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var obj = { </span></span>
<span class="line"><span style="color:#e1e4e8;">  name: &#39;sunny&#39;, </span></span>
<span class="line"><span style="color:#e1e4e8;">  age: 18, </span></span>
<span class="line"><span style="color:#e1e4e8;">  __proto__:{ </span></span>
<span class="line"><span style="color:#e1e4e8;">    lastname: &#39;cherry&#39;, </span></span>
<span class="line"><span style="color:#e1e4e8;">    __proto__: Object.prototype </span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(&#39;name&#39; in obj) // true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var obj = { </span></span>
<span class="line"><span style="color:#24292e;">  name: &#39;sunny&#39;, </span></span>
<span class="line"><span style="color:#24292e;">  age: 18, </span></span>
<span class="line"><span style="color:#24292e;">  __proto__:{ </span></span>
<span class="line"><span style="color:#24292e;">    lastname: &#39;cherry&#39;, </span></span>
<span class="line"><span style="color:#24292e;">    __proto__: Object.prototype </span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">console.log(&#39;name&#39; in obj) // true</span></span></code></pre></div><p>instanceof 官方解释： A instanceof B，A对象是不是B构造函数构造出来的。 个人理解换种说法：A对象的原型上有没有B的原型。 相关代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function Person() {} </span></span>
<span class="line"><span style="color:#e1e4e8;">var person = new Person(); </span></span>
<span class="line"><span style="color:#e1e4e8;">var obj = {}; </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">person instanceof Person   // true </span></span>
<span class="line"><span style="color:#e1e4e8;">person instanceof Object   // true </span></span>
<span class="line"><span style="color:#e1e4e8;">[] instanceof Object       // true </span></span>
<span class="line"><span style="color:#e1e4e8;">[] instanceof Array        // true </span></span>
<span class="line"><span style="color:#e1e4e8;">obj instanceof Person      // false </span></span>
<span class="line"><span style="color:#e1e4e8;">obj instanceof Array       // false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function Person() {} </span></span>
<span class="line"><span style="color:#24292e;">var person = new Person(); </span></span>
<span class="line"><span style="color:#24292e;">var obj = {}; </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">person instanceof Person   // true </span></span>
<span class="line"><span style="color:#24292e;">person instanceof Object   // true </span></span>
<span class="line"><span style="color:#24292e;">[] instanceof Object       // true </span></span>
<span class="line"><span style="color:#24292e;">[] instanceof Array        // true </span></span>
<span class="line"><span style="color:#24292e;">obj instanceof Person      // false </span></span>
<span class="line"><span style="color:#24292e;">obj instanceof Array       // false</span></span></code></pre></div><p>通过上述代码发现数组与对象在instanceof中返回值，可以使用instanceof区分数组与对象。</p><p>数组与对象的区分还可以使用constructor和toString.call()。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var arr = []; </span></span>
<span class="line"><span style="color:#e1e4e8;">var obj = {}; </span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(arr.constructor) // ƒ Array() { [native code] } </span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(obj.constructor) // ƒ Object() { [native code] } </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// toString.call() 在Object原型上属性 </span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(Object.prototype.toString.call(arr)) // [object Array] </span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(Object.prototype.toString.call(obj)) // [object Object]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var arr = []; </span></span>
<span class="line"><span style="color:#24292e;">var obj = {}; </span></span>
<span class="line"><span style="color:#24292e;">console.log(arr.constructor) // ƒ Array() { [native code] } </span></span>
<span class="line"><span style="color:#24292e;">console.log(obj.constructor) // ƒ Object() { [native code] } </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// toString.call() 在Object原型上属性 </span></span>
<span class="line"><span style="color:#24292e;">console.log(Object.prototype.toString.call(arr)) // [object Array] </span></span>
<span class="line"><span style="color:#24292e;">console.log(Object.prototype.toString.call(obj)) // [object Object]</span></span></code></pre></div><p>toString.call()可以实现深度克隆。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var obj = { </span></span>
<span class="line"><span style="color:#e1e4e8;">  name: &#39;sunny&#39;, </span></span>
<span class="line"><span style="color:#e1e4e8;">  age: 18, </span></span>
<span class="line"><span style="color:#e1e4e8;">  car: [&#39;visa&#39;, &#39;BMW&#39;], </span></span>
<span class="line"><span style="color:#e1e4e8;">  wife: { </span></span>
<span class="line"><span style="color:#e1e4e8;">    name: &#39;cherry&#39;, </span></span>
<span class="line"><span style="color:#e1e4e8;">    son: { </span></span>
<span class="line"><span style="color:#e1e4e8;">      name: &#39;s&#39; </span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">var targetObj = {};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var obj = { </span></span>
<span class="line"><span style="color:#24292e;">  name: &#39;sunny&#39;, </span></span>
<span class="line"><span style="color:#24292e;">  age: 18, </span></span>
<span class="line"><span style="color:#24292e;">  car: [&#39;visa&#39;, &#39;BMW&#39;], </span></span>
<span class="line"><span style="color:#24292e;">  wife: { </span></span>
<span class="line"><span style="color:#24292e;">    name: &#39;cherry&#39;, </span></span>
<span class="line"><span style="color:#24292e;">    son: { </span></span>
<span class="line"><span style="color:#24292e;">      name: &#39;s&#39; </span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">var targetObj = {};</span></span></code></pre></div><p>实现targetObj对象拥有对象obj所有属性。 思路：</p><ul><li>首先使用for...in遍历对象。</li><li>判断是否属于原始值，是数组还是对象。</li><li>建立相应数组与对象。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// ...</span></span>
<span class="line"><span style="color:#e1e4e8;">function deepClone(target, origin) { </span></span>
<span class="line"><span style="color:#e1e4e8;">  var target = target || {}; </span></span>
<span class="line"><span style="color:#e1e4e8;">  var toStr = Object.prototype.toString; </span></span>
<span class="line"><span style="color:#e1e4e8;">  var arrStr = &#39;[object Array]&#39;; </span></span>
<span class="line"><span style="color:#e1e4e8;">  </span></span>
<span class="line"><span style="color:#e1e4e8;">  for(var prop in origin) { </span></span>
<span class="line"><span style="color:#e1e4e8;">    if(origin hasOwnProperty(prop)) { </span></span>
<span class="line"><span style="color:#e1e4e8;">      if(origin[prop] != &#39;null&#39; &amp;&amp;  </span></span>
<span class="line"><span style="color:#e1e4e8;">          typeof(origin[prop]) == &#39;object&#39;) { </span></span>
<span class="line"><span style="color:#e1e4e8;">        target[prop] = (toStr.call(origin[prop]) == arrStr) </span></span>
<span class="line"><span style="color:#e1e4e8;">        ? [] </span></span>
<span class="line"><span style="color:#e1e4e8;">        : {}; </span></span>
<span class="line"><span style="color:#e1e4e8;">        deepClone(target[prop], origin[prop]); </span></span>
<span class="line"><span style="color:#e1e4e8;">      }else{ </span></span>
<span class="line"><span style="color:#e1e4e8;">        target[prop] = origin[prop]; </span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  return target;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">deepClone(targetObj, obj);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// ...</span></span>
<span class="line"><span style="color:#24292e;">function deepClone(target, origin) { </span></span>
<span class="line"><span style="color:#24292e;">  var target = target || {}; </span></span>
<span class="line"><span style="color:#24292e;">  var toStr = Object.prototype.toString; </span></span>
<span class="line"><span style="color:#24292e;">  var arrStr = &#39;[object Array]&#39;; </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">  for(var prop in origin) { </span></span>
<span class="line"><span style="color:#24292e;">    if(origin hasOwnProperty(prop)) { </span></span>
<span class="line"><span style="color:#24292e;">      if(origin[prop] != &#39;null&#39; &amp;&amp;  </span></span>
<span class="line"><span style="color:#24292e;">          typeof(origin[prop]) == &#39;object&#39;) { </span></span>
<span class="line"><span style="color:#24292e;">        target[prop] = (toStr.call(origin[prop]) == arrStr) </span></span>
<span class="line"><span style="color:#24292e;">        ? [] </span></span>
<span class="line"><span style="color:#24292e;">        : {}; </span></span>
<span class="line"><span style="color:#24292e;">        deepClone(target[prop], origin[prop]); </span></span>
<span class="line"><span style="color:#24292e;">      }else{ </span></span>
<span class="line"><span style="color:#24292e;">        target[prop] = origin[prop]; </span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  return target;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">deepClone(targetObj, obj);</span></span></code></pre></div><p>相反，对象拥有简单属性类型，可以实现浅度克隆。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var obj = { </span></span>
<span class="line"><span style="color:#e1e4e8;">  name: &#39;sunny&#39;, </span></span>
<span class="line"><span style="color:#e1e4e8;">  age: 18 </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">var targetObj = {}; </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function clone(target, origin) { </span></span>
<span class="line"><span style="color:#e1e4e8;">  var target = target || {}; </span></span>
<span class="line"><span style="color:#e1e4e8;">  for(var prop in origin) { </span></span>
<span class="line"><span style="color:#e1e4e8;">    if(origin.hasOwnProperty(prop)) { </span></span>
<span class="line"><span style="color:#e1e4e8;">      target[prop] = origin[prop] </span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  return target;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">clone(targetObj, obj);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var obj = { </span></span>
<span class="line"><span style="color:#24292e;">  name: &#39;sunny&#39;, </span></span>
<span class="line"><span style="color:#24292e;">  age: 18 </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">var targetObj = {}; </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function clone(target, origin) { </span></span>
<span class="line"><span style="color:#24292e;">  var target = target || {}; </span></span>
<span class="line"><span style="color:#24292e;">  for(var prop in origin) { </span></span>
<span class="line"><span style="color:#24292e;">    if(origin.hasOwnProperty(prop)) { </span></span>
<span class="line"><span style="color:#24292e;">      target[prop] = origin[prop] </span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  return target;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">clone(targetObj, obj);</span></span></code></pre></div><h3 id="this" tabindex="-1">this <a class="header-anchor" href="#this" aria-label="Permalink to &quot;this&quot;">​</a></h3><ul><li>this规则：</li><li>由new调用，绑定到新创建的对象。</li><li>由call/apply调用，绑定到指定的对象。</li><li>由上下文对象调用，绑定到那个上下文对象。</li><li>默认在严格模式下绑定到undefined，否则绑定到全局。</li></ul><p>这里补充this案例</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var name = &#39;sunny&#39;; </span></span>
<span class="line"><span style="color:#e1e4e8;">var obj = { </span></span>
<span class="line"><span style="color:#e1e4e8;">  name: &#39;cherry&#39;, </span></span>
<span class="line"><span style="color:#e1e4e8;">  say: function() { </span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(this.name) </span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">var fn = obj.say; </span></span>
<span class="line"><span style="color:#e1e4e8;">fn(); // sunny </span></span>
<span class="line"><span style="color:#e1e4e8;">obj.say(); // cherry</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var name = &#39;sunny&#39;; </span></span>
<span class="line"><span style="color:#24292e;">var obj = { </span></span>
<span class="line"><span style="color:#24292e;">  name: &#39;cherry&#39;, </span></span>
<span class="line"><span style="color:#24292e;">  say: function() { </span></span>
<span class="line"><span style="color:#24292e;">    console.log(this.name) </span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">var fn = obj.say; </span></span>
<span class="line"><span style="color:#24292e;">fn(); // sunny </span></span>
<span class="line"><span style="color:#24292e;">obj.say(); // cherry</span></span></code></pre></div><p>fn运行过程可以理解下面这样，把对象obj中函数say方法交给函数fn拥有，当前this就指向所在全局window。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// ...变量省略 </span></span>
<span class="line"><span style="color:#e1e4e8;">var fn = say function () { </span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(this.name) </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">// ...输出语句省略</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// ...变量省略 </span></span>
<span class="line"><span style="color:#24292e;">var fn = say function () { </span></span>
<span class="line"><span style="color:#24292e;">  console.log(this.name) </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">// ...输出语句省略</span></span></code></pre></div><p>案例2</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var foo = 123; </span></span>
<span class="line"><span style="color:#e1e4e8;">function print() { </span></span>
<span class="line"><span style="color:#e1e4e8;">  var foo = 456; </span></span>
<span class="line"><span style="color:#e1e4e8;">  this.foo = 789; </span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(foo); </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">print();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var foo = 123; </span></span>
<span class="line"><span style="color:#24292e;">function print() { </span></span>
<span class="line"><span style="color:#24292e;">  var foo = 456; </span></span>
<span class="line"><span style="color:#24292e;">  this.foo = 789; </span></span>
<span class="line"><span style="color:#24292e;">  console.log(foo); </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">print();</span></span></code></pre></div><p>可以使用上述规则④，this绑定到全局，因此运行函数输出 456。</p><p>案例3</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var foo = 123; </span></span>
<span class="line"><span style="color:#e1e4e8;">function Print() { </span></span>
<span class="line"><span style="color:#e1e4e8;">  this.foo = 234; </span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(foo) </span></span>
<span class="line"><span style="color:#e1e4e8;">} </span></span>
<span class="line"><span style="color:#e1e4e8;">new Print();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var foo = 123; </span></span>
<span class="line"><span style="color:#24292e;">function Print() { </span></span>
<span class="line"><span style="color:#24292e;">  this.foo = 234; </span></span>
<span class="line"><span style="color:#24292e;">  console.log(foo) </span></span>
<span class="line"><span style="color:#24292e;">} </span></span>
<span class="line"><span style="color:#24292e;">new Print();</span></span></code></pre></div><p>函数Print运行，使用上述规则④，this绑定到全局，改变了全局foo值，当前构造函数Print没有this，沿着原型链向往寻找，最终在window上找到，因此new print()输出234。</p><p>arguments.callee</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function foo() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(arguments);</span></span>
<span class="line"><span style="color:#e1e4e8;">  //Arguments(2) [1, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ]</span></span>
<span class="line"><span style="color:#e1e4e8;">  </span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(arguments.callee);</span></span>
<span class="line"><span style="color:#e1e4e8;">  // ƒ foo() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  // console.log(arguments.callee)</span></span>
<span class="line"><span style="color:#e1e4e8;">  // }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(arguments.callee == foo) // true</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">foo(1, 2);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function foo() {</span></span>
<span class="line"><span style="color:#24292e;">  console.log(arguments);</span></span>
<span class="line"><span style="color:#24292e;">  //Arguments(2) [1, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ]</span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">  console.log(arguments.callee);</span></span>
<span class="line"><span style="color:#24292e;">  // ƒ foo() {</span></span>
<span class="line"><span style="color:#24292e;">  // console.log(arguments.callee)</span></span>
<span class="line"><span style="color:#24292e;">  // }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  console.log(arguments.callee == foo) // true</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">foo(1, 2);</span></span></code></pre></div><p>上述输出值，arguments.callee指运行时的函数。</p><p>fn.caller</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function foo() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(foo.caller) // foo函数</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">foo();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function foo() {</span></span>
<span class="line"><span style="color:#24292e;">  console.log(foo.caller) // foo函数</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">foo();</span></span></code></pre></div><p>上述代码输出值，fn.caller指函数自身foo。 <strong>callee和caller在es5严格模式下都不能使用</strong>。</p><h3 id="数组" tabindex="-1">数组 <a class="header-anchor" href="#数组" aria-label="Permalink to &quot;数组&quot;">​</a></h3><p>改变原数组</p><ul><li>push() 向数组最后一位添加</li><li>pop() 从最后一位开始剔出去</li><li>shift() 从数组前面删除</li><li>unshift() 在数组前面添加</li><li>reserver() 逆转数组</li><li>sort() 排序</li><li>splice(从第几位开始, 截取长度, 在切口处添加新的数据)</li></ul><p>不改变数组</p><ul><li>concat() //合并数组</li><li>slice(从该位置开始截, 截取到该位)</li><li>split() 返回字符串</li></ul><h3 id="类数组" tabindex="-1">类数组 <a class="header-anchor" href="#类数组" aria-label="Permalink to &quot;类数组&quot;">​</a></h3><p>类数组必须有length属性，能像数组/对象一样使用。 原始类型的值不能拥有属性和方法。</p><p>如何使用： 自动创建(看生命周期)，自动销毁(调用完函数之后)</p><p>典型类数组arguments</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function foo() { </span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(arguments) </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">foo(1, 2, 3);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function foo() { </span></span>
<span class="line"><span style="color:#24292e;">  console.log(arguments) </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">foo(1, 2, 3);</span></span></code></pre></div><p>向类数组push</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var obj = { </span></span>
<span class="line"><span style="color:#e1e4e8;">  &#39;2&#39;: &#39;a&#39;, </span></span>
<span class="line"><span style="color:#e1e4e8;">  &#39;3&#39;: &#39;b&#39;, </span></span>
<span class="line"><span style="color:#e1e4e8;">  &#39;length&#39;: 2, </span></span>
<span class="line"><span style="color:#e1e4e8;">  &#39;push&#39;: Array.prototype.push, </span></span>
<span class="line"><span style="color:#e1e4e8;">  &#39;splice&#39;: Array.prototype.splice </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">obj.push(&#39;d&#39;); </span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(obj) </span></span>
<span class="line"><span style="color:#e1e4e8;">// {2: &quot;d&quot;, 3: &quot;b&quot;, length: 3, push: ƒ} </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">obj.push(&#39;f&#39;); </span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(obj); </span></span>
<span class="line"><span style="color:#e1e4e8;">// {2: &quot;d&quot;, 3: &quot;f&quot;, length: 4, push: ƒ}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var obj = { </span></span>
<span class="line"><span style="color:#24292e;">  &#39;2&#39;: &#39;a&#39;, </span></span>
<span class="line"><span style="color:#24292e;">  &#39;3&#39;: &#39;b&#39;, </span></span>
<span class="line"><span style="color:#24292e;">  &#39;length&#39;: 2, </span></span>
<span class="line"><span style="color:#24292e;">  &#39;push&#39;: Array.prototype.push, </span></span>
<span class="line"><span style="color:#24292e;">  &#39;splice&#39;: Array.prototype.splice </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">obj.push(&#39;d&#39;); </span></span>
<span class="line"><span style="color:#24292e;">console.log(obj) </span></span>
<span class="line"><span style="color:#24292e;">// {2: &quot;d&quot;, 3: &quot;b&quot;, length: 3, push: ƒ} </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">obj.push(&#39;f&#39;); </span></span>
<span class="line"><span style="color:#24292e;">console.log(obj); </span></span>
<span class="line"><span style="color:#24292e;">// {2: &quot;d&quot;, 3: &quot;f&quot;, length: 4, push: ƒ}</span></span></code></pre></div><p>通过输出，push后类对象length递增，类对象属性为索引，索引最大length-1，根据当前length-1取索引值。</p><h3 id="try-catch" tabindex="-1">try...catch <a class="header-anchor" href="#try-catch" aria-label="Permalink to &quot;try...catch&quot;">​</a></h3><p>规则</p><ul><li>try里面发生错误，不会执行错误后try里面的代码。</li><li>如果try里面没有报错，不会执行catch里面代码；反之会执行catch里面代码。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">try{ </span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(&#39;ok&#39;) </span></span>
<span class="line"><span style="color:#e1e4e8;">}catch(e) { </span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(&#39;error&#39;); </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">try{ </span></span>
<span class="line"><span style="color:#24292e;">  console.log(&#39;ok&#39;) </span></span>
<span class="line"><span style="color:#24292e;">}catch(e) { </span></span>
<span class="line"><span style="color:#24292e;">  console.log(&#39;error&#39;); </span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>归纳六种error信息</p><ul><li>EvalError：eval的使用与定义不一致。</li><li>RangeRrror：数值越界。</li><li>ReferenceError：非法或不能识别的引用数组。</li><li>SyntaxError：发生语法解析错误。</li><li>TypeError：操作数据类似错误。</li><li>URIRrror：URI处理函数使用不当。</li></ul><p>ES5严格模式 使用&#39;use strict&#39;(字符串，反之代表是JS语句，JS语句没有规定这种写法)启动严格模式 遵循es5.0模式，不再兼容es3一些不规则语法，推荐局部。</p><p>不支持 with/arguments/callee/caller，变量赋值前必须声明。</p><p>局部this必须被赋值，赋值什么就是什么，拒绝重复属性和参数，不能使用eval()。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var obj = {}; </span></span>
<span class="line"><span style="color:#e1e4e8;">var name = &#39;window&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">function foo() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  var name = &#39;scope&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">  with(obj) { // with改变作用域链</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(name); </span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">foo();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var obj = {}; </span></span>
<span class="line"><span style="color:#24292e;">var name = &#39;window&#39;;</span></span>
<span class="line"><span style="color:#24292e;">function foo() {</span></span>
<span class="line"><span style="color:#24292e;">  var name = &#39;scope&#39;;</span></span>
<span class="line"><span style="color:#24292e;">  with(obj) { // with改变作用域链</span></span>
<span class="line"><span style="color:#24292e;">    console.log(name); </span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">foo();</span></span></code></pre></div><p>es5.0与es3.0规则</p><ul><li>浏览器基于es3.0方法 + es5.0新增方法。</li><li>es3.0与es5.0发生冲突部分，使用es5.0模式，反之使用es3.0模式。</li></ul>`,286),o=[l];function c(t,i,r,y,d,u){return n(),a("div",null,o)}const v=s(p,[["render",c]]);export{h as __pageData,v as default};
