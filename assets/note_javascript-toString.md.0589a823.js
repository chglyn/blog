import{_ as t,o as e,c as s,Q as a}from"./chunks/framework.419948d5.js";const D=JSON.parse('{"title":"JavaScript toSting的应用","description":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。","frontmatter":{"title":"JavaScript toSting的应用","editLink":true,"head":[["meta",{"name":"description","content":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。"}],["meta",{"name":"keywords","content":"javaScript,toSting"}]]},"headers":[],"relativePath":"note/javascript-toString.md","filePath":"note/javascript-toString.md"}'),n={name:"note/javascript-toString.md"},p=a(`<p>项目需求：</p><p>根据现有日期，计算前几天日期或后几天的日期。</p><p>解决方式：</p><p>顺便编写一个公共方法，方便后续使用。使用 <code>setDate</code> 计算已知日期加上固定天数；日期转化成字符串使用 <code>padStart</code> 不足两位的补全 0。</p><p>完整代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">export default{</span></span>
<span class="line"><span style="color:#e1e4e8;">	methods: {</span></span>
<span class="line"><span style="color:#e1e4e8;">		initDate(day) {</span></span>
<span class="line"><span style="color:#e1e4e8;">			let timeDate,Y,M,D,h,m,s;</span></span>
<span class="line"><span style="color:#e1e4e8;">			timeDate = new Date();</span></span>
<span class="line"><span style="color:#e1e4e8;">			timeDate.setDate(timeDate.getDate() + day);</span></span>
<span class="line"><span style="color:#e1e4e8;">			Y = timeDate.getFullYear();</span></span>
<span class="line"><span style="color:#e1e4e8;">			M = (timeDate.getMonth() + 1).toString().padStart(2, &#39;0&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">			D = timeDate.getDate().toString().padStart(2, &#39;0&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">			h = timeDate.getHours().toString().padStart(2, &#39;0&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">			m = timeDate.getMinutes().toString().padStart(2, &#39;0&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">			s = timeDate.getSeconds().toString().padStart(2, &#39;0&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">			return \`\${Y}-\${M}-\${D} \${h}:\${m}:\${s}\`;</span></span>
<span class="line"><span style="color:#e1e4e8;">		}</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">export default{</span></span>
<span class="line"><span style="color:#24292e;">	methods: {</span></span>
<span class="line"><span style="color:#24292e;">		initDate(day) {</span></span>
<span class="line"><span style="color:#24292e;">			let timeDate,Y,M,D,h,m,s;</span></span>
<span class="line"><span style="color:#24292e;">			timeDate = new Date();</span></span>
<span class="line"><span style="color:#24292e;">			timeDate.setDate(timeDate.getDate() + day);</span></span>
<span class="line"><span style="color:#24292e;">			Y = timeDate.getFullYear();</span></span>
<span class="line"><span style="color:#24292e;">			M = (timeDate.getMonth() + 1).toString().padStart(2, &#39;0&#39;);</span></span>
<span class="line"><span style="color:#24292e;">			D = timeDate.getDate().toString().padStart(2, &#39;0&#39;);</span></span>
<span class="line"><span style="color:#24292e;">			h = timeDate.getHours().toString().padStart(2, &#39;0&#39;);</span></span>
<span class="line"><span style="color:#24292e;">			m = timeDate.getMinutes().toString().padStart(2, &#39;0&#39;);</span></span>
<span class="line"><span style="color:#24292e;">			s = timeDate.getSeconds().toString().padStart(2, &#39;0&#39;);</span></span>
<span class="line"><span style="color:#24292e;">			return \`\${Y}-\${M}-\${D} \${h}:\${m}:\${s}\`;</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div>`,6),l=[p];function o(i,c,r,d,m,g){return e(),s("div",null,l)}const S=t(n,[["render",o]]);export{D as __pageData,S as default};
