import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.419948d5.js";const h=JSON.parse('{"title":"自适应布局","description":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。","frontmatter":{"title":"自适应布局","editLink":true,"head":[["meta",{"name":"description","content":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。"}],["meta",{"name":"keywords","content":"自适应布局,两栏自适应布局,三栏布局,三栏自适应布局,css,flex,gride"}]]},"headers":[],"relativePath":"note/base-css-layout.md","filePath":"note/base-css-layout.md"}'),l={name:"note/base-css-layout.md"},p=e(`<h3 id="单栏布局" tabindex="-1">单栏布局 <a class="header-anchor" href="#单栏布局" aria-label="Permalink to &quot;单栏布局&quot;">​</a></h3><p>常见单栏布局有以下情况：</p><ul><li>header/content/footer等宽单栏布局</li><li>header/footer等宽，content略窄单栏布局</li></ul><p><strong>第一种情况：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;header&quot;&gt; header &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;content&quot;&gt; content &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;footer&quot;&gt; footer &lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;header&quot;&gt; header &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div class=&quot;content&quot;&gt; content &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div class=&quot;footer&quot;&gt; footer &lt;/div&gt;</span></span></code></pre></div><p>css部分</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.header{ </span></span>
<span class="line"><span style="color:#e1e4e8;">    width:100%; // ①</span></span>
<span class="line"><span style="color:#e1e4e8;">    background:#c0c0c0; </span></span>
<span class="line"><span style="color:#e1e4e8;"> }</span></span>
<span class="line"><span style="color:#e1e4e8;">.content{ </span></span>
<span class="line"><span style="color:#e1e4e8;">    width:100%; // ①</span></span>
<span class="line"><span style="color:#e1e4e8;">    background:#f1f1f1;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  .footer{</span></span>
<span class="line"><span style="color:#e1e4e8;">    width:100%; //①</span></span>
<span class="line"><span style="color:#e1e4e8;">    background:#000</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.header{ </span></span>
<span class="line"><span style="color:#24292e;">    width:100%; // ①</span></span>
<span class="line"><span style="color:#24292e;">    background:#c0c0c0; </span></span>
<span class="line"><span style="color:#24292e;"> }</span></span>
<span class="line"><span style="color:#24292e;">.content{ </span></span>
<span class="line"><span style="color:#24292e;">    width:100%; // ①</span></span>
<span class="line"><span style="color:#24292e;">    background:#f1f1f1;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  .footer{</span></span>
<span class="line"><span style="color:#24292e;">    width:100%; //①</span></span>
<span class="line"><span style="color:#24292e;">    background:#000</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span></code></pre></div><p>上述设置的width自适应充满屏幕。 如果设置width为固定值或者设置最大宽度(max-width)，当屏幕小于当前设置固定宽度(width)时，会出现滚动条； 而设置的最大宽度(max-width)，则不会出现滚动条。</p><p>如果实现居中，解决办法是添加居中属性(margin: 0 auto)即可。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.header{</span></span>
<span class="line"><span style="color:#e1e4e8;">  max-width:800px;</span></span>
<span class="line"><span style="color:#e1e4e8;">  background:#c0c0c0;</span></span>
<span class="line"><span style="color:#e1e4e8;">  margin: 0 auto; // ①</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">// content, footer添加margin: 0 auto;属性</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.header{</span></span>
<span class="line"><span style="color:#24292e;">  max-width:800px;</span></span>
<span class="line"><span style="color:#24292e;">  background:#c0c0c0;</span></span>
<span class="line"><span style="color:#24292e;">  margin: 0 auto; // ①</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">// content, footer添加margin: 0 auto;属性</span></span></code></pre></div><p><strong>第二种情况：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;header&quot;&gt; header &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;content&quot;&gt; content &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;footer&quot;&gt; footer &lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;header&quot;&gt; header &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div class=&quot;content&quot;&gt; content &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div class=&quot;footer&quot;&gt; footer &lt;/div&gt;</span></span></code></pre></div><p>css部分</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.header{</span></span>
<span class="line"><span style="color:#e1e4e8;">  max-width: 800px;</span></span>
<span class="line"><span style="color:#e1e4e8;">  background: #c0c0c0;</span></span>
<span class="line"><span style="color:#e1e4e8;">  margin: 0 auto; // ①</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">.content{</span></span>
<span class="line"><span style="color:#e1e4e8;">  max-width: 700px;</span></span>
<span class="line"><span style="color:#e1e4e8;">  background:#f1f1f1;</span></span>
<span class="line"><span style="color:#e1e4e8;">  margin: 0 auto; // ①</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">.footer{</span></span>
<span class="line"><span style="color:#e1e4e8;">  max-width: 800px;</span></span>
<span class="line"><span style="color:#e1e4e8;">  background:#000;</span></span>
<span class="line"><span style="color:#e1e4e8;">  margin: 0 auto; // ①</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.header{</span></span>
<span class="line"><span style="color:#24292e;">  max-width: 800px;</span></span>
<span class="line"><span style="color:#24292e;">  background: #c0c0c0;</span></span>
<span class="line"><span style="color:#24292e;">  margin: 0 auto; // ①</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">.content{</span></span>
<span class="line"><span style="color:#24292e;">  max-width: 700px;</span></span>
<span class="line"><span style="color:#24292e;">  background:#f1f1f1;</span></span>
<span class="line"><span style="color:#24292e;">  margin: 0 auto; // ①</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">.footer{</span></span>
<span class="line"><span style="color:#24292e;">  max-width: 800px;</span></span>
<span class="line"><span style="color:#24292e;">  background:#000;</span></span>
<span class="line"><span style="color:#24292e;">  margin: 0 auto; // ①</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>注意：</p><p>如果header/footer内容宽度不设置，块级元素会充满整个屏幕； 如果header/content/footer内容区域中有设置同一个宽度，通过<strong>margin:0 auto</strong>居中。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;header&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;div class=&quot;container&quot;&gt; container &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;content&quot;&gt; content &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;footer&quot;&gt; footer &lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;header&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;div class=&quot;container&quot;&gt; container &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div class=&quot;content&quot;&gt; content &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div class=&quot;footer&quot;&gt; footer &lt;/div&gt;</span></span></code></pre></div><p>css部分</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.header{</span></span>
<span class="line"><span style="color:#e1e4e8;">  max-width: 800px;</span></span>
<span class="line"><span style="color:#e1e4e8;">  background:#c0c0c0;</span></span>
<span class="line"><span style="color:#e1e4e8;">  margin: 0 auto; // ①</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">.container{</span></span>
<span class="line"><span style="color:#e1e4e8;">  max-width:600px; //宽度</span></span>
<span class="line"><span style="color:#e1e4e8;">  background:#fff;</span></span>
<span class="line"><span style="color:#e1e4e8;">  margin: 0 auto; // ①</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">.content{</span></span>
<span class="line"><span style="color:#e1e4e8;">  max-width:600px;  // 宽度</span></span>
<span class="line"><span style="color:#e1e4e8;">  background:#f1f1f1;</span></span>
<span class="line"><span style="color:#e1e4e8;">  margin: 0 auto;  // ①</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">.footer{</span></span>
<span class="line"><span style="color:#e1e4e8;">  max-width:800px;</span></span>
<span class="line"><span style="color:#e1e4e8;">  background:#000; </span></span>
<span class="line"><span style="color:#e1e4e8;">  margin: 0 auto; // ①</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.header{</span></span>
<span class="line"><span style="color:#24292e;">  max-width: 800px;</span></span>
<span class="line"><span style="color:#24292e;">  background:#c0c0c0;</span></span>
<span class="line"><span style="color:#24292e;">  margin: 0 auto; // ①</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">.container{</span></span>
<span class="line"><span style="color:#24292e;">  max-width:600px; //宽度</span></span>
<span class="line"><span style="color:#24292e;">  background:#fff;</span></span>
<span class="line"><span style="color:#24292e;">  margin: 0 auto; // ①</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">.content{</span></span>
<span class="line"><span style="color:#24292e;">  max-width:600px;  // 宽度</span></span>
<span class="line"><span style="color:#24292e;">  background:#f1f1f1;</span></span>
<span class="line"><span style="color:#24292e;">  margin: 0 auto;  // ①</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">.footer{</span></span>
<span class="line"><span style="color:#24292e;">  max-width:800px;</span></span>
<span class="line"><span style="color:#24292e;">  background:#000; </span></span>
<span class="line"><span style="color:#24292e;">  margin: 0 auto; // ①</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="两栏布局" tabindex="-1">两栏布局 <a class="header-anchor" href="#两栏布局" aria-label="Permalink to &quot;两栏布局&quot;">​</a></h3><p>指一边栏固定宽度，另一边栏充满剩余宽度。 常见两栏布局有以下情况：</p><ul><li>左栏固定宽度，右栏自适应</li><li>左栏自适应，右栏固定宽度</li></ul><p><strong>第一种情况</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;left&quot;&gt; left &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;right&quot;&gt; right &lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;left&quot;&gt; left &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div class=&quot;right&quot;&gt; right &lt;/div&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.left{</span></span>
<span class="line"><span style="color:#e1e4e8;">  width:200px; //①</span></span>
<span class="line"><span style="color:#e1e4e8;">  float:left; // ①</span></span>
<span class="line"><span style="color:#e1e4e8;">  background:red;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">.right{</span></span>
<span class="line"><span style="color:#e1e4e8;">  background:blue;</span></span>
<span class="line"><span style="color:#e1e4e8;">  margin-left:200px; // ②</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.left{</span></span>
<span class="line"><span style="color:#24292e;">  width:200px; //①</span></span>
<span class="line"><span style="color:#24292e;">  float:left; // ①</span></span>
<span class="line"><span style="color:#24292e;">  background:red;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">.right{</span></span>
<span class="line"><span style="color:#24292e;">  background:blue;</span></span>
<span class="line"><span style="color:#24292e;">  margin-left:200px; // ②</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>使用flex</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;left&quot;&gt; left &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;right&quot;&gt; right &lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;left&quot;&gt; left &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div class=&quot;right&quot;&gt; right &lt;/div&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.body{</span></span>
<span class="line"><span style="color:#e1e4e8;">  display:flex; // ①</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">.left{</span></span>
<span class="line"><span style="color:#e1e4e8;">  width:200px; // ②</span></span>
<span class="line"><span style="color:#e1e4e8;">  background:red;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">.right{</span></span>
<span class="line"><span style="color:#e1e4e8;">  flex:1; // ③</span></span>
<span class="line"><span style="color:#e1e4e8;">  background:blue;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.body{</span></span>
<span class="line"><span style="color:#24292e;">  display:flex; // ①</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">.left{</span></span>
<span class="line"><span style="color:#24292e;">  width:200px; // ②</span></span>
<span class="line"><span style="color:#24292e;">  background:red;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">.right{</span></span>
<span class="line"><span style="color:#24292e;">  flex:1; // ③</span></span>
<span class="line"><span style="color:#24292e;">  background:blue;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><strong>第二种情况：(注意DOM布局顺序)</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;right&quot;&gt; right &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;left&quot;&gt; left &lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;right&quot;&gt; right &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div class=&quot;left&quot;&gt; left &lt;/div&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.right{</span></span>
<span class="line"><span style="color:#e1e4e8;">  width:200px; // ①</span></span>
<span class="line"><span style="color:#e1e4e8;">  background:red;</span></span>
<span class="line"><span style="color:#e1e4e8;">  position:absolute; // ①</span></span>
<span class="line"><span style="color:#e1e4e8;">  top:0; // ①</span></span>
<span class="line"><span style="color:#e1e4e8;">  right:0; // ①</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">.left{</span></span>
<span class="line"><span style="color:#e1e4e8;">  background:blue;</span></span>
<span class="line"><span style="color:#e1e4e8;">  margin-right:200px; // ② </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.right{</span></span>
<span class="line"><span style="color:#24292e;">  width:200px; // ①</span></span>
<span class="line"><span style="color:#24292e;">  background:red;</span></span>
<span class="line"><span style="color:#24292e;">  position:absolute; // ①</span></span>
<span class="line"><span style="color:#24292e;">  top:0; // ①</span></span>
<span class="line"><span style="color:#24292e;">  right:0; // ①</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">.left{</span></span>
<span class="line"><span style="color:#24292e;">  background:blue;</span></span>
<span class="line"><span style="color:#24292e;">  margin-right:200px; // ② </span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>使用margin-right属性留出重叠区域。</p><p>使用flex</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;left&quot;&gt; left &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;right&quot;&gt; right &lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;left&quot;&gt; left &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div class=&quot;right&quot;&gt; right &lt;/div&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.body{</span></span>
<span class="line"><span style="color:#e1e4e8;">  display: flex; // ①</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">.left{</span></span>
<span class="line"><span style="color:#e1e4e8;">  flex:1; // ②</span></span>
<span class="line"><span style="color:#e1e4e8;">  background:red;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">.right{</span></span>
<span class="line"><span style="color:#e1e4e8;">  width:200px; // ③</span></span>
<span class="line"><span style="color:#e1e4e8;">  background:blue;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.body{</span></span>
<span class="line"><span style="color:#24292e;">  display: flex; // ①</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">.left{</span></span>
<span class="line"><span style="color:#24292e;">  flex:1; // ②</span></span>
<span class="line"><span style="color:#24292e;">  background:red;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">.right{</span></span>
<span class="line"><span style="color:#24292e;">  width:200px; // ③</span></span>
<span class="line"><span style="color:#24292e;">  background:blue;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>如果是<strong>自适应两栏布局使用float + overflow</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;content&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;div class=&quot;left&quot;&gt; left &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;div class=&quot;right&quot;&gt; right &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;content&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;div class=&quot;left&quot;&gt; left &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;div class=&quot;right&quot;&gt; right &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/div&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.content{</span></span>
<span class="line"><span style="color:#e1e4e8;">  overflow: hidden;</span></span>
<span class="line"><span style="color:#e1e4e8;">  zoom: 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">.left{</span></span>
<span class="line"><span style="color:#e1e4e8;">  float: left;</span></span>
<span class="line"><span style="color:#e1e4e8;">  background:red;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">.right{</span></span>
<span class="line"><span style="color:#e1e4e8;">  overflow: hidden;</span></span>
<span class="line"><span style="color:#e1e4e8;">  zoom: 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">  background:blue;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.content{</span></span>
<span class="line"><span style="color:#24292e;">  overflow: hidden;</span></span>
<span class="line"><span style="color:#24292e;">  zoom: 1;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">.left{</span></span>
<span class="line"><span style="color:#24292e;">  float: left;</span></span>
<span class="line"><span style="color:#24292e;">  background:red;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">.right{</span></span>
<span class="line"><span style="color:#24292e;">  overflow: hidden;</span></span>
<span class="line"><span style="color:#24292e;">  zoom: 1;</span></span>
<span class="line"><span style="color:#24292e;">  background:blue;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>这种方式通过overflow触发BFC，这时zoom:1兼容IE6浏览器；如果侧边栏在右侧注意渲染顺序。</p><h3 id="三栏布局" tabindex="-1">三栏布局 <a class="header-anchor" href="#三栏布局" aria-label="Permalink to &quot;三栏布局&quot;">​</a></h3><p>指两边栏固定宽度，中间栏自适应布局。</p><p><strong>第一种圣杯</strong> 实现原理：</p><ul><li><p>三栏都设置左浮动，设置中间栏宽度为100%；</p></li><li><p>这时左右两栏会掉下来，设置margin-left为负值，添加相对定位并设置left属性与right属性，与中间栏同一行；</p></li><li><p>设置padding留出间距。</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;middle&quot;&gt; middle &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;left&quot;&gt; left &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;right&quot;&gt; right &lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;middle&quot;&gt; middle &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div class=&quot;left&quot;&gt; left &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div class=&quot;right&quot;&gt; right &lt;/div&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.middle{</span></span>
<span class="line"><span style="color:#e1e4e8;">  float:left; // ①</span></span>
<span class="line"><span style="color:#e1e4e8;">  width:100%; // ① 充满屏幕</span></span>
<span class="line"><span style="color:#e1e4e8;">  background:red;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">.left{</span></span>
<span class="line"><span style="color:#e1e4e8;">  width:200px; // ② 设置一个宽度</span></span>
<span class="line"><span style="color:#e1e4e8;">  margin-left:-100%; // ② 添加float, 与middle同一行</span></span>
<span class="line"><span style="color:#e1e4e8;">  float：left; // ②</span></span>
<span class="line"><span style="color:#e1e4e8;">  position: relative; // ② 添加相对定位移并到左边</span></span>
<span class="line"><span style="color:#e1e4e8;">  left: -200px; // ②</span></span>
<span class="line"><span style="color:#e1e4e8;">  background:blue;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">.right{</span></span>
<span class="line"><span style="color:#e1e4e8;">  width: 200px; // ③</span></span>
<span class="line"><span style="color:#e1e4e8;">  margin-left: -200px; // ③ 添加float, 与minddle同行</span></span>
<span class="line"><span style="color:#e1e4e8;">  float: left; // ③</span></span>
<span class="line"><span style="color:#e1e4e8;">  position: relative; // ③ 添加相对定位 并移到右边</span></span>
<span class="line"><span style="color:#e1e4e8;">  right:-200px; // ③</span></span>
<span class="line"><span style="color:#e1e4e8;">  background:yellow; </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">.body{</span></span>
<span class="line"><span style="color:#e1e4e8;">  padding: 0 200px; // ④ 左右两边留出间隙</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.middle{</span></span>
<span class="line"><span style="color:#24292e;">  float:left; // ①</span></span>
<span class="line"><span style="color:#24292e;">  width:100%; // ① 充满屏幕</span></span>
<span class="line"><span style="color:#24292e;">  background:red;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">.left{</span></span>
<span class="line"><span style="color:#24292e;">  width:200px; // ② 设置一个宽度</span></span>
<span class="line"><span style="color:#24292e;">  margin-left:-100%; // ② 添加float, 与middle同一行</span></span>
<span class="line"><span style="color:#24292e;">  float：left; // ②</span></span>
<span class="line"><span style="color:#24292e;">  position: relative; // ② 添加相对定位移并到左边</span></span>
<span class="line"><span style="color:#24292e;">  left: -200px; // ②</span></span>
<span class="line"><span style="color:#24292e;">  background:blue;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">.right{</span></span>
<span class="line"><span style="color:#24292e;">  width: 200px; // ③</span></span>
<span class="line"><span style="color:#24292e;">  margin-left: -200px; // ③ 添加float, 与minddle同行</span></span>
<span class="line"><span style="color:#24292e;">  float: left; // ③</span></span>
<span class="line"><span style="color:#24292e;">  position: relative; // ③ 添加相对定位 并移到右边</span></span>
<span class="line"><span style="color:#24292e;">  right:-200px; // ③</span></span>
<span class="line"><span style="color:#24292e;">  background:yellow; </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">.body{</span></span>
<span class="line"><span style="color:#24292e;">  padding: 0 200px; // ④ 左右两边留出间隙</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><strong>第二种双飞翼</strong> 实现原理：</p><ul><li><p>三栏左浮动，设置中间栏宽度为100%；</p></li><li><p>这时左右两栏会掉下来，设置margin-left为负值并设置left属性与right属性，与中间栏同一行；</p></li><li><p>在中间栏增加一个div，设置margin留出左右间距。</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;middle&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;div class=&quot;container&quot;&gt; container &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;left&quot;&gt; left &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;right&quot;&gt; right &lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;middle&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;div class=&quot;container&quot;&gt; container &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div class=&quot;left&quot;&gt; left &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div class=&quot;right&quot;&gt; right &lt;/div&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.middle{</span></span>
<span class="line"><span style="color:#e1e4e8;">  float:left; // ①</span></span>
<span class="line"><span style="color:#e1e4e8;">  width: 100%; // ①</span></span>
<span class="line"><span style="color:#e1e4e8;">  background: red;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">.left{</span></span>
<span class="line"><span style="color:#e1e4e8;">  width: 200px; // ②</span></span>
<span class="line"><span style="color:#e1e4e8;">  margin-left: -100%; // ②</span></span>
<span class="line"><span style="color:#e1e4e8;">  background:blue;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">.right {</span></span>
<span class="line"><span style="color:#e1e4e8;">  width:200px; // ③</span></span>
<span class="line"><span style="color:#e1e4e8;">  margin-left: -200px; // ③</span></span>
<span class="line"><span style="color:#e1e4e8;">  background: yellow;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">.container{</span></span>
<span class="line"><span style="color:#e1e4e8;">  margin: 0 200px; // ④</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.middle{</span></span>
<span class="line"><span style="color:#24292e;">  float:left; // ①</span></span>
<span class="line"><span style="color:#24292e;">  width: 100%; // ①</span></span>
<span class="line"><span style="color:#24292e;">  background: red;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">.left{</span></span>
<span class="line"><span style="color:#24292e;">  width: 200px; // ②</span></span>
<span class="line"><span style="color:#24292e;">  margin-left: -100%; // ②</span></span>
<span class="line"><span style="color:#24292e;">  background:blue;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">.right {</span></span>
<span class="line"><span style="color:#24292e;">  width:200px; // ③</span></span>
<span class="line"><span style="color:#24292e;">  margin-left: -200px; // ③</span></span>
<span class="line"><span style="color:#24292e;">  background: yellow;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">.container{</span></span>
<span class="line"><span style="color:#24292e;">  margin: 0 200px; // ④</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>圣杯布局与双飞翼布局对比：</p><ul><li><p>圣杯布局是在父容器的左/右内边距配合两个从列相对定位。</p></li><li><p>双飞翼布局是把主列嵌套在一个父级块中配合主列左/右外边距。</p></li></ul><p><strong>第三种flex</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;left&quot;&gt; left &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;middle&quot;&gt; middle &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;right&quot;&gt; right &lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;left&quot;&gt; left &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div class=&quot;middle&quot;&gt; middle &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div class=&quot;right&quot;&gt; right &lt;/div&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">body{</span></span>
<span class="line"><span style="color:#e1e4e8;">  display: flex; // ①</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">.left {</span></span>
<span class="line"><span style="color:#e1e4e8;">  width:200px;</span></span>
<span class="line"><span style="color:#e1e4e8;">  background:red;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">.middle {</span></span>
<span class="line"><span style="color:#e1e4e8;">  flex:1; // ②</span></span>
<span class="line"><span style="color:#e1e4e8;">  background:blue;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">.right{</span></span>
<span class="line"><span style="color:#e1e4e8;">  width:200px;</span></span>
<span class="line"><span style="color:#e1e4e8;">  background:yellow;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">body{</span></span>
<span class="line"><span style="color:#24292e;">  display: flex; // ①</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">.left {</span></span>
<span class="line"><span style="color:#24292e;">  width:200px;</span></span>
<span class="line"><span style="color:#24292e;">  background:red;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">.middle {</span></span>
<span class="line"><span style="color:#24292e;">  flex:1; // ②</span></span>
<span class="line"><span style="color:#24292e;">  background:blue;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">.right{</span></span>
<span class="line"><span style="color:#24292e;">  width:200px;</span></span>
<span class="line"><span style="color:#24292e;">  background:yellow;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><strong>补充flex:1</strong></p><p>flex是flex-grow，flex-shrink, flex-basis的缩写；默认值：0 1 auto。后两者属性可选。</p><p>flex-grow：属性定义了该空间的放大比例，默认值0；表示如果存在剩余空间，也不放大。</p><p>flex-skrink：属性定义了该空间的缩小比例，默认值1；表示如果空间不足，该空间将缩小。</p><p>flex-basis：属性定义在分配多余空间之前，占据的主轴空间。浏览器根据这个属性，计算主轴是否有剩余空间，默认值auto，表示该空间本来的大小。</p><p>flex:属性由两个值：auto(1 1 auto) 和 none(0 0 auto)。</p>`,60),o=[p];function t(c,i,r,d,y,g){return n(),a("div",null,o)}const v=s(l,[["render",t]]);export{h as __pageData,v as default};
