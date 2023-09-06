import{_ as n,o as e,c as s,Q as a}from"./chunks/framework.419948d5.js";const g=JSON.parse('{"title":"JavaScript clone","description":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。","frontmatter":{"title":"JavaScript clone","editLink":true,"head":[["meta",{"name":"description","content":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。"}],["meta",{"name":"keywords","content":"JavaScript,clone,deepClone"}]]},"headers":[],"relativePath":"note/clone-javaScript.md","filePath":"note/clone-javaScript.md"}'),t={name:"note/clone-javaScript.md"},p=a(`<p><strong>前言：</strong> 在[学习 JavaScript 基础篇]提到深度克隆与浅度克隆，最近在云栖社区看到有另一种深度克隆写法，因此记下笔记。</p><p>实现思路：</p><ul><li><p>利用 ES6 的数组原方法 Array.isArray 判断数据类型。</p></li><li><p>如果是引用数据类型循环递归判断，否则输出。</p></li></ul><p>代码片段：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function deepClone(origin){</span></span>
<span class="line"><span style="color:#e1e4e8;">		var newObj = (Array.isArray(origin)) ? [] : {};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">		for(var key in origin){</span></span>
<span class="line"><span style="color:#e1e4e8;">			newObj[key] = (typeof origin[key] == &#39;object&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">			? deepClone2(origin[key])</span></span>
<span class="line"><span style="color:#e1e4e8;">			: origin[key];</span></span>
<span class="line"><span style="color:#e1e4e8;">		}</span></span>
<span class="line"><span style="color:#e1e4e8;">		return newObj;</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function deepClone(origin){</span></span>
<span class="line"><span style="color:#24292e;">		var newObj = (Array.isArray(origin)) ? [] : {};</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">		for(var key in origin){</span></span>
<span class="line"><span style="color:#24292e;">			newObj[key] = (typeof origin[key] == &#39;object&#39;)</span></span>
<span class="line"><span style="color:#24292e;">			? deepClone2(origin[key])</span></span>
<span class="line"><span style="color:#24292e;">			: origin[key];</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;">		return newObj;</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span></code></pre></div>`,5),l=[p];function o(i,r,c,y,d,_){return e(),s("div",null,l)}const k=n(t,[["render",o]]);export{g as __pageData,k as default};
