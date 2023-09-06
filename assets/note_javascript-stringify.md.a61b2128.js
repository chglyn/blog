import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.419948d5.js";const h=JSON.parse('{"title":"JavaScript stringify的应用","description":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。","frontmatter":{"title":"JavaScript stringify的应用","editLink":true,"head":[["meta",{"name":"description","content":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。"}],["meta",{"name":"keywords","content":"javaScript,javascript stringify,localStorage"}]]},"headers":[],"relativePath":"note/javascript-stringify.md","filePath":"note/javascript-stringify.md"}'),l={name:"note/javascript-stringify.md"},p=e(`<h3 id="调试对象" tabindex="-1">调试对象 <a class="header-anchor" href="#调试对象" aria-label="Permalink to &quot;调试对象&quot;">​</a></h3><p>比如，如下代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var user = {</span></span>
<span class="line"><span style="color:#e1e4e8;">	name: &#39;hello word&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	age: 18</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(user)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var user = {</span></span>
<span class="line"><span style="color:#24292e;">	name: &#39;hello word&#39;,</span></span>
<span class="line"><span style="color:#24292e;">	age: 18</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">console.log(user)</span></span></code></pre></div><p>打印输出 <code>[object Object]</code>，因为从对象到字符串的默认转换是 <code>[object Object]</code>。因此，使用 <code>JSON.stringify</code> 先将对象转化字符串，然后把结果输出控制台。如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var user = {</span></span>
<span class="line"><span style="color:#e1e4e8;">	name: &#39;hello word&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	age: 18</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(JSON.stringify(user))</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// {name:&quot;hello word&quot;, age:18}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var user = {</span></span>
<span class="line"><span style="color:#24292e;">	name: &#39;hello word&#39;,</span></span>
<span class="line"><span style="color:#24292e;">	age: 18</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">console.log(JSON.stringify(user))</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// {name:&quot;hello word&quot;, age:18}</span></span></code></pre></div><h4 id="存储-localstorage-对象" tabindex="-1">存储 localStorage 对象 <a class="header-anchor" href="#存储-localstorage-对象" aria-label="Permalink to &quot;存储 localStorage 对象&quot;">​</a></h4><p>有时想存储创建的对象，并且在浏览器被关闭后让能恢复该对象。如下所示：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var course = {</span></span>
<span class="line"><span style="color:#e1e4e8;">	name: &#39;三年级语文&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	price: 18</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">localStorage.setItem(&#39;course&#39;, JSON.stringify(course));</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">var getLocalCourse = JSON.parse(localStorage.getItem(&#39;course&#39;));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var course = {</span></span>
<span class="line"><span style="color:#24292e;">	name: &#39;三年级语文&#39;,</span></span>
<span class="line"><span style="color:#24292e;">	price: 18</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">localStorage.setItem(&#39;course&#39;, JSON.stringify(course));</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">var getLocalCourse = JSON.parse(localStorage.getItem(&#39;course&#39;));</span></span></code></pre></div><h4 id="数组去重" tabindex="-1">数组去重 <a class="header-anchor" href="#数组去重" aria-label="Permalink to &quot;数组去重&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function unique(arr) {</span></span>
<span class="line"><span style="color:#e1e4e8;">	var obj = {};</span></span>
<span class="line"><span style="color:#e1e4e8;">	arr.forEach(function(item) {</span></span>
<span class="line"><span style="color:#e1e4e8;">		var newData = {};</span></span>
<span class="line"><span style="color:#e1e4e8;">		Object.keys(item).sort().map(function(key) {</span></span>
<span class="line"><span style="color:#e1e4e8;">			newData[key] = item[key];</span></span>
<span class="line"><span style="color:#e1e4e8;">		})</span></span>
<span class="line"><span style="color:#e1e4e8;">		obj[JSON.stringify(newData)] = item; // 键名不会重复</span></span>
<span class="line"><span style="color:#e1e4e8;">	})</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	arr = Object.keys(obj).map(function(val) {</span></span>
<span class="line"><span style="color:#e1e4e8;">		return JSON.parse(val);</span></span>
<span class="line"><span style="color:#e1e4e8;">	})</span></span>
<span class="line"><span style="color:#e1e4e8;">	return arr;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function unique(arr) {</span></span>
<span class="line"><span style="color:#24292e;">	var obj = {};</span></span>
<span class="line"><span style="color:#24292e;">	arr.forEach(function(item) {</span></span>
<span class="line"><span style="color:#24292e;">		var newData = {};</span></span>
<span class="line"><span style="color:#24292e;">		Object.keys(item).sort().map(function(key) {</span></span>
<span class="line"><span style="color:#24292e;">			newData[key] = item[key];</span></span>
<span class="line"><span style="color:#24292e;">		})</span></span>
<span class="line"><span style="color:#24292e;">		obj[JSON.stringify(newData)] = item; // 键名不会重复</span></span>
<span class="line"><span style="color:#24292e;">	})</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	arr = Object.keys(obj).map(function(val) {</span></span>
<span class="line"><span style="color:#24292e;">		return JSON.parse(val);</span></span>
<span class="line"><span style="color:#24292e;">	})</span></span>
<span class="line"><span style="color:#24292e;">	return arr;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><code>JSON.stringify</code> 第二个参数可以决定筛选出来的内容，还有第三个参数，可以参考 <code>MDN</code>。</p><h4 id="实现深拷贝" tabindex="-1">实现深拷贝 <a class="header-anchor" href="#实现深拷贝" aria-label="Permalink to &quot;实现深拷贝&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function deepClone(data) {</span></span>
<span class="line"><span style="color:#e1e4e8;">	var _data = JSON.stringify(data);</span></span>
<span class="line"><span style="color:#e1e4e8;">	var newData = JSON.parse(_data);</span></span>
<span class="line"><span style="color:#e1e4e8;">	return newData;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function deepClone(data) {</span></span>
<span class="line"><span style="color:#24292e;">	var _data = JSON.stringify(data);</span></span>
<span class="line"><span style="color:#24292e;">	var newData = JSON.parse(_data);</span></span>
<span class="line"><span style="color:#24292e;">	return newData;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h4 id="判断数组是否包含对象-或者对象是否相等" tabindex="-1">判断数组是否包含对象，或者对象是否相等 <a class="header-anchor" href="#判断数组是否包含对象-或者对象是否相等" aria-label="Permalink to &quot;判断数组是否包含对象，或者对象是否相等&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">/* 判断数组是否包含某对象 */ </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">var data1 = [</span></span>
<span class="line"><span style="color:#e1e4e8;">	{ name: &#39;cherry&#39; },</span></span>
<span class="line"><span style="color:#e1e4e8;">	{ name: &#39;sunny&#39; }</span></span>
<span class="line"><span style="color:#e1e4e8;">];</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">var data2 = { name: &#39;sunny&#39; };</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(JSON.stringify(data1).indexOf(JSON.stringify(data2)) != -1)</span></span>
<span class="line"><span style="color:#e1e4e8;">// true</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">/* 判断数组或对象是否相等 */</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">var a = [1, 2, 3];</span></span>
<span class="line"><span style="color:#e1e4e8;">var b = [1, 2, 3];</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(JSON.stringify(a) == JSON.stringify(b)) </span></span>
<span class="line"><span style="color:#e1e4e8;">// true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/* 判断数组是否包含某对象 */ </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">var data1 = [</span></span>
<span class="line"><span style="color:#24292e;">	{ name: &#39;cherry&#39; },</span></span>
<span class="line"><span style="color:#24292e;">	{ name: &#39;sunny&#39; }</span></span>
<span class="line"><span style="color:#24292e;">];</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">var data2 = { name: &#39;sunny&#39; };</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">console.log(JSON.stringify(data1).indexOf(JSON.stringify(data2)) != -1)</span></span>
<span class="line"><span style="color:#24292e;">// true</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">/* 判断数组或对象是否相等 */</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">var a = [1, 2, 3];</span></span>
<span class="line"><span style="color:#24292e;">var b = [1, 2, 3];</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">console.log(JSON.stringify(a) == JSON.stringify(b)) </span></span>
<span class="line"><span style="color:#24292e;">// true</span></span></code></pre></div>`,15),o=[p];function t(c,r,i,y,d,u){return a(),n("div",null,o)}const v=s(l,[["render",t]]);export{h as __pageData,v as default};
