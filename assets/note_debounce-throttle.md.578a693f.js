import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.419948d5.js";const m=JSON.parse('{"title":"JavaScript 节流,防抖","description":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。","frontmatter":{"title":"JavaScript 节流,防抖","editLink":true,"head":[["meta",{"name":"description","content":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。"}],["meta",{"name":"keywords","content":"JavaScript,节流,防抖"}]]},"headers":[],"relativePath":"note/debounce-throttle.md","filePath":"note/debounce-throttle.md"}'),l={name:"note/debounce-throttle.md"},p=e(`<p><strong>前言</strong></p><p>界面供用户频繁操作的地方，如果不加以限制，频繁操作增加服务器压力，服务器响应不及时，后端接口出现异常随之带来就是后端处理逻辑抛出异常。</p><p>有以下情景：</p><ul><li>网站点击按钮，用户疯狂点击(click)；</li><li>界面频繁滚动(scroll)；</li><li>频繁调整窗口(resize);</li><li>网站搜索框输入，下面显示有关内容列表(keyup)；</li><li>用户操作拖拽(drag)；</li></ul><p>遇到以上问题，可以使用网络请求性能 — 节流与防抖来解决。</p><h3 id="节流" tabindex="-1">节流 <a class="header-anchor" href="#节流" aria-label="Permalink to &quot;节流&quot;">​</a></h3><p>理解：预定义一个函数，只有在大于或等于执行周期才能执行，在周期内不执行。</p><p>实现：</p><ul><li>使用时间戳判断是否到达回调函数执行时间，记录上一次时间戳；</li><li>每次触发事件，回调函数判断当前时间戳与上次执行时间戳间隔是否到达指定时间；</li><li>如果是，则执行，并更新上一次执行时间，进行下次循环，如此反复进行。</li></ul><p>相关代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div id=&quot;price&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;button id=&quot;btn&quot;&gt;click me&lt;/button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">var Div = document.getElementById(&#39;price&#39;), </span></span>
<span class="line"><span style="color:#e1e4e8;">    Btn = document.getElementById(&#39;btn&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"> function throttle(handle, wait) {</span></span>
<span class="line"><span style="color:#e1e4e8;">   var lastTime = 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">   var arg = arguments;</span></span>
<span class="line"><span style="color:#e1e4e8;">   return function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">     var nowTime = new Date().getTime();</span></span>
<span class="line"><span style="color:#e1e4e8;">     if(nowTime - lastTime &gt; wait) {</span></span>
<span class="line"><span style="color:#e1e4e8;">       handle.apply(this, arg);</span></span>
<span class="line"><span style="color:#e1e4e8;">       lastTime = nowTime;</span></span>
<span class="line"><span style="color:#e1e4e8;">     }</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;"> }</span></span>
<span class="line"><span style="color:#e1e4e8;"> function pay() {</span></span>
<span class="line"><span style="color:#e1e4e8;">   Div.innerText = parseInt(Div.innerText) + 1;</span></span>
<span class="line"><span style="color:#e1e4e8;"> }</span></span>
<span class="line"><span style="color:#e1e4e8;"> Btn.onclick = throttle(pay, 1000);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div id=&quot;price&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;button id=&quot;btn&quot;&gt;click me&lt;/button&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">var Div = document.getElementById(&#39;price&#39;), </span></span>
<span class="line"><span style="color:#24292e;">    Btn = document.getElementById(&#39;btn&#39;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> function throttle(handle, wait) {</span></span>
<span class="line"><span style="color:#24292e;">   var lastTime = 0;</span></span>
<span class="line"><span style="color:#24292e;">   var arg = arguments;</span></span>
<span class="line"><span style="color:#24292e;">   return function() {</span></span>
<span class="line"><span style="color:#24292e;">     var nowTime = new Date().getTime();</span></span>
<span class="line"><span style="color:#24292e;">     if(nowTime - lastTime &gt; wait) {</span></span>
<span class="line"><span style="color:#24292e;">       handle.apply(this, arg);</span></span>
<span class="line"><span style="color:#24292e;">       lastTime = nowTime;</span></span>
<span class="line"><span style="color:#24292e;">     }</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;"> }</span></span>
<span class="line"><span style="color:#24292e;"> function pay() {</span></span>
<span class="line"><span style="color:#24292e;">   Div.innerText = parseInt(Div.innerText) + 1;</span></span>
<span class="line"><span style="color:#24292e;"> }</span></span>
<span class="line"><span style="color:#24292e;"> Btn.onclick = throttle(pay, 1000);</span></span></code></pre></div><h3 id="防抖" tabindex="-1">防抖 <a class="header-anchor" href="#防抖" aria-label="Permalink to &quot;防抖&quot;">​</a></h3><p>理解：函数频繁触发情况下，只有足够空闲时间，才执行一次。</p><p>实现：</p><ul><li>创建一个定时器，指定时间间隔之后执行回调函数；</li><li>在第二次执行回调函数时，清除前一次的定时器并设置一个新定时器；</li><li>如果前一个定时器执行过了，回调函数就不能执行；</li><li>如果前一个定时器未执行，将替换为一个新的定时器，延迟一定时间再执行。</li></ul><p>相关代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;input type=&quot;text&quot; id=&quot;search&quot; /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">var search = document.getElementById(&#39;search&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">function debounce(handle, wait) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  var timer = null;</span></span>
<span class="line"><span style="color:#e1e4e8;">  var arg = arguments;</span></span>
<span class="line"><span style="color:#e1e4e8;">  return function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    clearTimeout(timer);</span></span>
<span class="line"><span style="color:#e1e4e8;">    timer = setTimeout(function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">      handle.apply(this, arg)</span></span>
<span class="line"><span style="color:#e1e4e8;">    }, wait)</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function ajax(arg) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(arg.target.value);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">search.onkeyup = debounce(ajax, 1000);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;input type=&quot;text&quot; id=&quot;search&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292e;">var search = document.getElementById(&#39;search&#39;);</span></span>
<span class="line"><span style="color:#24292e;">function debounce(handle, wait) {</span></span>
<span class="line"><span style="color:#24292e;">  var timer = null;</span></span>
<span class="line"><span style="color:#24292e;">  var arg = arguments;</span></span>
<span class="line"><span style="color:#24292e;">  return function() {</span></span>
<span class="line"><span style="color:#24292e;">    clearTimeout(timer);</span></span>
<span class="line"><span style="color:#24292e;">    timer = setTimeout(function() {</span></span>
<span class="line"><span style="color:#24292e;">      handle.apply(this, arg)</span></span>
<span class="line"><span style="color:#24292e;">    }, wait)</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function ajax(arg) {</span></span>
<span class="line"><span style="color:#24292e;">  console.log(arg.target.value);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">search.onkeyup = debounce(ajax, 1000);</span></span></code></pre></div>`,17),t=[p];function o(c,i,r,y,u,d){return n(),a("div",null,t)}const g=s(l,[["render",o]]);export{m as __pageData,g as default};
