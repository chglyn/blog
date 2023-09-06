import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.419948d5.js";const h=JSON.parse('{"title":"JavaScript url参数转化为对象","description":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。","frontmatter":{"title":"JavaScript url参数转化为对象","editLink":true,"head":[["meta",{"name":"description","content":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。"}],["meta",{"name":"keywords","content":"JavaScript,indexOf,location,window,url"}]]},"headers":[],"relativePath":"note/url-json.md","filePath":"note/url-json.md"}'),l={name:"note/url-json.md"},p=e(`<p>项目需求：</p><p>教师端，题库列表界面需要传入 <code>n</code> 个参数，后续还有可能新增参数。由于是旧项目后端在 <code>url</code> 路由设置参数，后续开发也不方便。因此，由前端自定义传参接收参数。</p><p>使用一般方式获取浏览器路有参数，比如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var search = window.location.search;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">if(search.indexOf(&#39;?&#39;) != -1) {</span></span>
<span class="line"><span style="color:#e1e4e8;">	var val = search.split(&#39;?&#39;)[1];</span></span>
<span class="line"><span style="color:#e1e4e8;">	val = val.split(&#39;&amp;&#39;).slice(-1)[0];</span></span>
<span class="line"><span style="color:#e1e4e8;">	val = val.split(&#39;=&#39;)[1];</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var search = window.location.search;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">if(search.indexOf(&#39;?&#39;) != -1) {</span></span>
<span class="line"><span style="color:#24292e;">	var val = search.split(&#39;?&#39;)[1];</span></span>
<span class="line"><span style="color:#24292e;">	val = val.split(&#39;&amp;&#39;).slice(-1)[0];</span></span>
<span class="line"><span style="color:#24292e;">	val = val.split(&#39;=&#39;)[1];</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>上述方式单独获取具体参数可以使用，如果获取多个参数就得考虑使用正则或者封装公共方法。</p><p>如何获取多个浏览器 <code>url</code> 参数？</p><p>下面是自己编写的方法，把浏览器参数存入对象中，以键值对的方式存在对象中。</p><p>步骤：</p><ul><li><p>获取浏览器参数，使用 <code>window.location.search</code>。</p></li><li><p>使用 <code>split</code> 切割参数取下标为 1 的数据。</p></li><li><p>声明一个全局对象，保存参数数据。</p></li><li><p>使用 <code>split</code> 切割 <code>&amp;</code> 符号。</p></li><li><p>循环遍历上一步骤的数组，使用 <code>split</code> 切割数组每项中的数据，以 <code>=</code> 为切割点。</p></li><li><p>设置每项的数据下标 <code>0</code> 为对象的键名，<code>1</code> 为对象的键值。</p></li><li><p>循环结束后，返回该对象。</p></li></ul><p>完整代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function getUrlParams(url) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        let obj ={}</span></span>
<span class="line"><span style="color:#e1e4e8;">        if(url.indexOf(&#39;?&#39;) != -1) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            url = url.split(&#39;?&#39;)[1]</span></span>
<span class="line"><span style="color:#e1e4e8;">            url = url.split(&#39;&amp;&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">            for(let i=0; i&lt;url.length; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                let v = url[i].split(&#39;=&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">                obj[v[0]] = v[1]</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    	return obj;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function getUrlParams(url) {</span></span>
<span class="line"><span style="color:#24292e;">        let obj ={}</span></span>
<span class="line"><span style="color:#24292e;">        if(url.indexOf(&#39;?&#39;) != -1) {</span></span>
<span class="line"><span style="color:#24292e;">            url = url.split(&#39;?&#39;)[1]</span></span>
<span class="line"><span style="color:#24292e;">            url = url.split(&#39;&amp;&#39;)</span></span>
<span class="line"><span style="color:#24292e;">            for(let i=0; i&lt;url.length; i++) {</span></span>
<span class="line"><span style="color:#24292e;">                let v = url[i].split(&#39;=&#39;)</span></span>
<span class="line"><span style="color:#24292e;">                obj[v[0]] = v[1]</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    	return obj;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div>`,11),o=[p];function c(t,i,r,d,u,y){return n(),a("div",null,o)}const _=s(l,[["render",c]]);export{h as __pageData,_ as default};
