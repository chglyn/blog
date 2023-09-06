import{_ as s,o as e,c as a,Q as n}from"./chunks/framework.419948d5.js";const p="/images/webpack1-1.jpg",l="/images/webpack1-2.jpg",o="/images/webpack1-3.jpg",k=JSON.parse('{"title":"Webpack工具","description":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。","frontmatter":{"title":"Webpack工具","editLink":true,"head":[["meta",{"name":"description","content":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。"}],["meta",{"name":"keywords","content":"JavaScript,webpack,打包,打包工具"}]]},"headers":[],"relativePath":"note/base-webpack.md","filePath":"note/base-webpack.md"}'),c={name:"note/base-webpack.md"},t=n('<h3 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h3><p>前端构建工具 <code>Webpack</code> 最近特火，火到 <code>Vue</code>/<code>React</code> 官方推出的脚手架都是基于 <code>Webpck</code> 打造的。</p><p>为了更了解 <code>Webpack</code>，特意实打实地安装配置 <code>Webpack</code>。对以后进阶学习也能夯实基础，现在一起学习入门级的 <code>Webpack</code> 吧！</p><h3 id="认识-webpack" tabindex="-1">认识 Webpack <a class="header-anchor" href="#认识-webpack" aria-label="Permalink to &quot;认识 Webpack&quot;">​</a></h3><p>先来观察应用 <code>Webpack</code> 能做的事：</p><img src="'+p+`" alt="webpack"><p>从图中得出：<code>Webpack</code> 能打包所有 <code>JS</code> 脚本；能打包所有 <code>style</code> 样式；能打包所有图片；能打包所有预编译语言。通俗的理解就是<strong>能打包前端所有资源</strong>。</p><h3 id="安装-webpack" tabindex="-1">安装 Webpack <a class="header-anchor" href="#安装-webpack" aria-label="Permalink to &quot;安装 Webpack&quot;">​</a></h3><p>首先确保你已经安装了 <code>Node.js</code> 和 <code>Git</code>。找到存放项目的目录，在该目录下初始化项目。在终端执行：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ npm init</span></span>
<span class="line"><span style="color:#e1e4e8;">// 或者</span></span>
<span class="line"><span style="color:#e1e4e8;">$ npm init -y</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ npm init</span></span>
<span class="line"><span style="color:#24292e;">// 或者</span></span>
<span class="line"><span style="color:#24292e;">$ npm init -y</span></span></code></pre></div><p>初始化后生成一个 <code>package.json</code> 文件，大致内容：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;name&quot;: &quot;webpack&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;version&quot;: &quot;1.0.0&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;description&quot;: &quot;study-webpack&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;main&quot;: &quot;index.js&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;test&quot;: &quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;keywords&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;study-webpack&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  ],</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;author&quot;: &quot;yuan&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;license&quot;: &quot;ISC&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;name&quot;: &quot;webpack&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;version&quot;: &quot;1.0.0&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;description&quot;: &quot;study-webpack&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;main&quot;: &quot;index.js&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;test&quot;: &quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  &quot;keywords&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">    &quot;study-webpack&quot;</span></span>
<span class="line"><span style="color:#24292e;">  ],</span></span>
<span class="line"><span style="color:#24292e;">  &quot;author&quot;: &quot;yuan&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;license&quot;: &quot;ISC&quot;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>为了后续快速安装其他依赖，这里使用淘宝镜像。在终端执行：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ npm install -g cnpm --registry=https://registry.npm.taobao.org</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ npm install -g cnpm --registry=https://registry.npm.taobao.org</span></span></code></pre></div><p>接来下安装 <code>Webpack</code>，在 <code>npm</code> 官网查询安装手册。在终端执行：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ cnpm install --save-dev webpack</span></span>
<span class="line"><span style="color:#e1e4e8;">// 或者</span></span>
<span class="line"><span style="color:#e1e4e8;">$ yarn add webpack --dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ cnpm install --save-dev webpack</span></span>
<span class="line"><span style="color:#24292e;">// 或者</span></span>
<span class="line"><span style="color:#24292e;">$ yarn add webpack --dev</span></span></code></pre></div><p>附：使用 <code>yarn</code> 语法安装，确保已经安装 <code>yarn</code>。</p><p>注意：最新版本 <code>Webpack</code> 中 <code>webpack-cli</code> 从中分离了出来需要单独安装。在终端执行：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ cnpm i webpack-cli --save-dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ cnpm i webpack-cli --save-dev</span></span></code></pre></div><p>安装完 <code>Webpack</code> 之后需要其运行起来，得需要一个配置文件，其名称为 <code>webpack.config.js</code>，不能为其他名称。如果是其他名称 <code>Webpack</code> 找不到该配置文件，就抛出错误提示。</p><h3 id="运行-webpack" tabindex="-1">运行 Webpack <a class="header-anchor" href="#运行-webpack" aria-label="Permalink to &quot;运行 Webpack&quot;">​</a></h3><p>查询官网手册后，填写 <code>webpack.config.js</code> 配置。对 <code>entry</code> 属性值和 <code>filename</code> 属性值进行简单修改，<code>webpack.config.js</code> 大致内容如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const path = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  entry: &#39;./src/index.js&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  output: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    path: path.resolve(__dirname, &#39;dist&#39;),</span></span>
<span class="line"><span style="color:#e1e4e8;">    filename: &#39;bundle.js&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const path = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">  entry: &#39;./src/index.js&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  output: {</span></span>
<span class="line"><span style="color:#24292e;">    path: path.resolve(__dirname, &#39;dist&#39;),</span></span>
<span class="line"><span style="color:#24292e;">    filename: &#39;bundle.js&#39;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><p><code>module.exports</code> 导出一个对象，其中：</p><p><code>entry</code> 表示打包资源入口，该字段属性值可以是 <code>String</code> / <code>Array</code> / <code>Object</code>。</p><p><code>output</code> 表示打包资源出口，也就是经打包的资源从该口输出。</p><p><code>dist</code> 是 <code>Webpack</code> 打包完成后存放资源的目录。</p><p>配置完内容后，在根目录下创建目录 <code>src</code>，里面编写一个叫 <code>index.js</code> 脚本：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// index.js</span></span>
<span class="line"><span style="color:#e1e4e8;">document.write(&#39;Hello Webpack!&#39;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// index.js</span></span>
<span class="line"><span style="color:#24292e;">document.write(&#39;Hello Webpack!&#39;);</span></span></code></pre></div><p>为了方便看效果，在根目录下创建一个 <code>index.html</code> 模版，并引入打包后的资源 <code>bundle.js</code>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;meta charset=&quot;utf-8&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;title&gt;入门webpack&lt;/title&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;script src=&quot;./dist/bundle.js&quot;&gt;&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;html&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;meta charset=&quot;utf-8&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;title&gt;入门webpack&lt;/title&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/html&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;script src=&quot;./dist/bundle.js&quot;&gt;&lt;/script&gt;</span></span></code></pre></div><p>使用预定义命令启动 <code>Webpack</code>，可以在 <code>package.json</code> 文件中的 <code>scripts</code> 字段中添加命令。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// ...</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;start&quot;: &quot;webpack&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;test&quot;: &quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  // ...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// ...</span></span>
<span class="line"><span style="color:#24292e;">  &quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;start&quot;: &quot;webpack&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;test&quot;: &quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  // ...</span></span></code></pre></div><p>在终端执行 <code>cnpm start</code> 打包完成后会看到在根目录下生成 <code>dist</code> 目录，里面包含 <code>bundle.js</code> 脚本，在浏览器端运行 <code>index.html</code> 可以看到页面输出 <code>Hello Webpack</code>！。</p><p>到此完成了 <code>Webpack</code> 初步的打包。</p><p>执行 <code>Webpack</code> 打包时，终端执行输出一些信息：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Hash: 9d157b09dd8d37122dad</span></span>
<span class="line"><span style="color:#e1e4e8;">Version: webpack 4.42.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Time: 560ms</span></span>
<span class="line"><span style="color:#e1e4e8;">Built at: 2020-04-19 11:48:36</span></span>
<span class="line"><span style="color:#e1e4e8;">    Asset       Size  Chunks             Chunk Names</span></span>
<span class="line"><span style="color:#e1e4e8;">bundle.js  961 bytes       0  [emitted]  main</span></span>
<span class="line"><span style="color:#e1e4e8;">Entrypoint main = bundle.js</span></span>
<span class="line"><span style="color:#e1e4e8;">[0] ./src/index.js 31 bytes {0} [built]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Hash: 9d157b09dd8d37122dad</span></span>
<span class="line"><span style="color:#24292e;">Version: webpack 4.42.1</span></span>
<span class="line"><span style="color:#24292e;">Time: 560ms</span></span>
<span class="line"><span style="color:#24292e;">Built at: 2020-04-19 11:48:36</span></span>
<span class="line"><span style="color:#24292e;">    Asset       Size  Chunks             Chunk Names</span></span>
<span class="line"><span style="color:#24292e;">bundle.js  961 bytes       0  [emitted]  main</span></span>
<span class="line"><span style="color:#24292e;">Entrypoint main = bundle.js</span></span>
<span class="line"><span style="color:#24292e;">[0] ./src/index.js 31 bytes {0} [built]</span></span></code></pre></div><ul><li><p><code>Hash</code> 表示当前文件打包生成的 <code>hash</code> 值，文件改变，<code>hash</code> 值就会变。</p></li><li><p><code>Version</code> 表示项目当前安装 <code>Webpack</code> 的版本。</p></li><li><p><code>Time</code> 表示项目打包所花费的时间。</p></li><li><p><code>Build</code> 表示项目打包日期，打包生成文件名称和文件大小</p></li><li><p><code>Entrypoint</code> 表示项目打包入口点。</p></li></ul><p>即：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  entry: &#39;./src/index.js&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  // ...</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 等价于</span></span>
<span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  entry: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    main: &#39;./src/index.js&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  // ...</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">  entry: &#39;./src/index.js&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  // ...</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 等价于</span></span>
<span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">  entry: {</span></span>
<span class="line"><span style="color:#24292e;">    main: &#39;./src/index.js&#39;</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  // ...</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><ul><li><p><code>chunks</code>: 打包文件的 <code>id</code>，现在只有一个 <code>bundle.js</code> 打包文件，有多个的时候，会有多个不同的 <code>chunk</code>。</p></li><li><p><code>Chunk Names</code>: 打包文件的名字。</p></li></ul><p>最后一行表示打包生成的文件路径。</p><p>大多数网站中都会使用缓存，减少页面加载时长。</p><p><code>Webpack</code> 打包也可以做到这点，把之前的 <code>bundle.js</code> 改成带有 <code>hash</code> 值。</p><p>修改后的 <code>webpack.config.js</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const path = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  entry: &#39;./src/index.js&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  output: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    path: path.resolve(__dirname, &#39;dist&#39;),</span></span>
<span class="line"><span style="color:#e1e4e8;">    filename: &#39;[hash].js&#39; // hash</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const path = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">  entry: &#39;./src/index.js&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  output: {</span></span>
<span class="line"><span style="color:#24292e;">    path: path.resolve(__dirname, &#39;dist&#39;),</span></span>
<span class="line"><span style="color:#24292e;">    filename: &#39;[hash].js&#39; // hash</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><p>重新运行 <code>cnpm start</code> 打包完成后会看到根目录下生成 <code>dist</code> 目录，里面包含带 <code>hash</code> 值的资源。如果想缩短 <code>hash</code> 值，可以进行截取长度，比如：<code>[hash:6]</code>。</p><p>如果想要优化打包后的资源和想使用 <code>Webpack</code> 强大的功能，请继续往下看。</p><h3 id="认识-plugin" tabindex="-1">认识 Plugin <a class="header-anchor" href="#认识-plugin" aria-label="Permalink to &quot;认识 Plugin&quot;">​</a></h3><p><code>plugin</code> 是 <code>Webpack</code> 的核心，<code>Webpack</code> 自身的多数功能都是用这个插件接口，让 <code>Webpack</code> 打包变得极其灵活。</p><p>经过认识 <code>Webpack</code> 初次打包后，发现每次执行 <code>cnpm start</code> 打包完成后都会在 <code>dist</code> 目录中追加打包生成后的新资源。造成 <code>dist</code> 文件很大。这时 <code>clean-webpack-plugin</code> 就可以登场，帮助我们解决这个问题。</p><p>在 <code>npm</code> 官网搜索该插件，点击名称进入详情查看安装手册，在终端执行：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ cnpm i --save-dev clean-webpack-plugin</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ cnpm i --save-dev clean-webpack-plugin</span></span></code></pre></div><p>在 <code>webpack.config.js</code> 中添加该配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// ...</span></span>
<span class="line"><span style="color:#e1e4e8;">const { CleanWebpackPlugin } =require(&#39;clean-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  plugins: [</span></span>
<span class="line"><span style="color:#e1e4e8;">    new webpack.ProgressPlugin(),</span></span>
<span class="line"><span style="color:#e1e4e8;">    new CleanWebpackPlugin()</span></span>
<span class="line"><span style="color:#e1e4e8;">  ]</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// ...</span></span>
<span class="line"><span style="color:#24292e;">const { CleanWebpackPlugin } =require(&#39;clean-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">  plugins: [</span></span>
<span class="line"><span style="color:#24292e;">    new webpack.ProgressPlugin(),</span></span>
<span class="line"><span style="color:#24292e;">    new CleanWebpackPlugin()</span></span>
<span class="line"><span style="color:#24292e;">  ]</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>在终端执行 <code>cnpm start</code> 会看到上一次打包生成的资源自动删除后，重新创建新的打包资源。</p><p>如果在项目中要引入打包后的资源，并且该资源带有 <code>hash</code> 值时不易方便使用，脚本太多也不易区分，这时可以使用 <code>Webpack</code> 提供的 <code>HTML</code> 模版插件解决问题。</p><p>在 <code>npm</code> 官网搜索该插件，点名称进去查看安装手册，在终端执行：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ cnpm i --save-dev html-webpack-plugin</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ cnpm i --save-dev html-webpack-plugin</span></span></code></pre></div><p>安装成功后，在根目录 <code>package.json</code> 中的 <code>devDependencies</code> 里能看到该插件和该插件的版本。</p><p>在 <code>Webpack</code> 中配置该插件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const path = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  entry: &#39;./src/index.js&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  output: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    path: path.resolve(__dirname, &#39;dist&#39;),</span></span>
<span class="line"><span style="color:#e1e4e8;">    filename: &#39;[hash:6].js&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  plugins: [</span></span>
<span class="line"><span style="color:#e1e4e8;">    new HtmlWebpackPlugin() // htmlPlugin</span></span>
<span class="line"><span style="color:#e1e4e8;">  ]</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const path = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#24292e;">const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">  entry: &#39;./src/index.js&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  output: {</span></span>
<span class="line"><span style="color:#24292e;">    path: path.resolve(__dirname, &#39;dist&#39;),</span></span>
<span class="line"><span style="color:#24292e;">    filename: &#39;[hash:6].js&#39;</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  plugins: [</span></span>
<span class="line"><span style="color:#24292e;">    new HtmlWebpackPlugin() // htmlPlugin</span></span>
<span class="line"><span style="color:#24292e;">  ]</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><p>在终端执行 <code>cnpm start</code> 会看到在根目录下生成 <code>dist</code> 目录，里面包含带 <code>hash</code> 值的资源和压缩过的 <code>index.html</code>。</p><p>如果不想使用压缩过的资源，可以在 <code>webpack.config.js</code> 中进行配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// ...</span></span>
<span class="line"><span style="color:#e1e4e8;">module.exports = { </span></span>
<span class="line"><span style="color:#e1e4e8;">  mode: &quot;development&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">// ...</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// ...</span></span>
<span class="line"><span style="color:#24292e;">module.exports = { </span></span>
<span class="line"><span style="color:#24292e;">  mode: &quot;development&quot;,</span></span>
<span class="line"><span style="color:#24292e;">// ...</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>根据 <code>mode</code> 参数 <code>Webpack</code> 会区分是生产环境还是开发环境。一般生成环境 <code>mode</code> 设置为 <code>production</code>，开发环境设置为 <code>development</code>。</p><p>设置完成后，在终端执行 <code>cnpm start</code> 打包完成后，然后在浏览器上运行 <code>index.html</code> 可以看到输出内容没变化，页面代码没有压缩。</p><p>如果想对 <code>src/index.html</code> 做一些调整，比如：修改 <code>title</code>，创建多个模版文件，多个模版文件引入不同的脚本等等；只需要在 <code>new HtmlWebpackPlugin()</code> 中添加一些配置项就能解决。</p><p>比如修改 <code>title</code>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  // ...</span></span>
<span class="line"><span style="color:#e1e4e8;">     new HtmlWebpackPlugin({</span></span>
<span class="line"><span style="color:#e1e4e8;">        title: &#39;学习webpack&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">     })</span></span>
<span class="line"><span style="color:#e1e4e8;">  // ...</span></span>
<span class="line"><span style="color:#e1e4e8;"> }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">  // ...</span></span>
<span class="line"><span style="color:#24292e;">     new HtmlWebpackPlugin({</span></span>
<span class="line"><span style="color:#24292e;">        title: &#39;学习webpack&#39;</span></span>
<span class="line"><span style="color:#24292e;">     })</span></span>
<span class="line"><span style="color:#24292e;">  // ...</span></span>
<span class="line"><span style="color:#24292e;"> }</span></span></code></pre></div><p>在终端执行 <code>cnpm start</code> 打包完成后，在浏览器上运行 <code>index.html</code> 会看到 <code>title</code> 的变化。</p><p>项目难免会美化页面，那么就得给页面添加一些样式，可以写在单独文件中，可以写在 <code>.html</code> 模版中，这时处理 <code>CSS</code> 可以使用 <code>css-loader</code> 解决问题。</p><h3 id="认识-loader" tabindex="-1">认识 loader <a class="header-anchor" href="#认识-loader" aria-label="Permalink to &quot;认识 loader&quot;">​</a></h3><p><code>loader</code> 用于对模块的源代码进行转换。<code>loader</code> 可以在 <code>import</code> 或&quot;加载&quot;模块时预处理文件。可以将文件从不同的语言（如 <code>TypeScript</code>）转换为 <code>JavaScript</code>，或将内联图像转换为 <code>data URL</code>。<code>loader</code> 甚至允许直接在 <code>JavaScript</code> 模块中 <code>import CSS</code> 文件。</p><p>①、处理 CSS</p><p>首先安装处理 <code>CSS</code> 相应的 <code>loader</code>：<code>css-loader</code> 和 <code>style-loader</code>。</p><p>在 <code>npm</code> 官网搜索该 <code>loader</code>，点击名称进去查看安装手册，在终端执行：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ cnpm i --save-dev css-loader style-loader</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ cnpm i --save-dev css-loader style-loader</span></span></code></pre></div><ul><li><p><code>css-loader</code> 处理以 <code>.css</code> 后缀的文件。</p></li><li><p><code>style-loader</code> 经过 <code>css-loader</code> 处理过的 <code>CSS</code> 插入到 <code>DOM</code> 中。</p></li></ul><p>安装成功后，在根目录 <code>package.json</code> 中的 <code>devDependencies</code> 里能看到该 <code>loader</code> 和该 <code>loader</code> 的版本。</p><p>在 <code>webpack.config.js</code> 中添加处理 <code>CSS</code> 的 <code>loader</code> 配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  // ...</span></span>
<span class="line"><span style="color:#e1e4e8;">  module: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      rules: [</span></span>
<span class="line"><span style="color:#e1e4e8;">        {</span></span>
<span class="line"><span style="color:#e1e4e8;">          test: /\\.css$/,</span></span>
<span class="line"><span style="color:#e1e4e8;">          use: [ </span></span>
<span class="line"><span style="color:#e1e4e8;">            { loader: &quot;style-loader&quot; },  </span></span>
<span class="line"><span style="color:#e1e4e8;">            { loader: &quot;css-loader&quot; } </span></span>
<span class="line"><span style="color:#e1e4e8;">          ]</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">      ]</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  // ...</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">  // ...</span></span>
<span class="line"><span style="color:#24292e;">  module: {</span></span>
<span class="line"><span style="color:#24292e;">      rules: [</span></span>
<span class="line"><span style="color:#24292e;">        {</span></span>
<span class="line"><span style="color:#24292e;">          test: /\\.css$/,</span></span>
<span class="line"><span style="color:#24292e;">          use: [ </span></span>
<span class="line"><span style="color:#24292e;">            { loader: &quot;style-loader&quot; },  </span></span>
<span class="line"><span style="color:#24292e;">            { loader: &quot;css-loader&quot; } </span></span>
<span class="line"><span style="color:#24292e;">          ]</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">      ]</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  // ...</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>注意：<code>use</code> 选项顺序，先使用 <code>css-loader</code> 再使用 <code>style-loader</code>。</p><p>项目中一般都是使用单独文件写入样式，这里使用以 <code>.css</code> 为后缀的文件负责控制页面样式：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">*{ margin:0px;padding:0px;}</span></span>
<span class="line"><span style="color:#e1e4e8;">body{ background: red; }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">*{ margin:0px;padding:0px;}</span></span>
<span class="line"><span style="color:#24292e;">body{ background: red; }</span></span></code></pre></div><p>在根目录 <code>src/index.js</code> 中引入该样式文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">document.write(&#39;hello webpack&#39;) </span></span>
<span class="line"><span style="color:#e1e4e8;">require(&#39;./style.css&#39;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">document.write(&#39;hello webpack&#39;) </span></span>
<span class="line"><span style="color:#24292e;">require(&#39;./style.css&#39;)</span></span></code></pre></div><p>在终端执行 <code>cnpm start</code> 打包完成后，在浏览器上运行 <code>index.html</code>，能看到页面背景色变红色。使用开发者工具也能看到页面插入 <code>style</code> 标签，<code>style</code> 标签里面嵌入刚刚写的样式：</p><img src="`+l+`" alt="webpack"><p>随着项目复杂度的提升，控制页面的样式也很多；如果按照这样写法，页面会有一大段来控制样式，考虑到对后期的性能优化不友好，可以考虑把样式单独打包一个文件。</p><p>②、提取 CSS</p><p>新版本 <code>Webpack4.x</code> 建议使用 <code>mini-css-extract-plugin</code>。</p><p>在 <code>npm</code> 官网搜索该插件，点击名称进去查看安装手册，在终端执行：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ cnpm install --save-dev mini-css-extract-plugin</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ cnpm install --save-dev mini-css-extract-plugin</span></span></code></pre></div><p>安装完该插件后，在根目录 <code>package.json</code> 中的 <code>devDependencies</code> 里能看到该插件和该插件的版本。</p><p>在 <code>webpack.config.js</code> 中的 <code>module</code> 选项和 <code>plugin</code> 选项中配置该插件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// ...</span></span>
<span class="line"><span style="color:#e1e4e8;">const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  // ...</span></span>
<span class="line"><span style="color:#e1e4e8;">    module: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      rules: [</span></span>
<span class="line"><span style="color:#e1e4e8;">        {</span></span>
<span class="line"><span style="color:#e1e4e8;">          test: /\\.css$/,</span></span>
<span class="line"><span style="color:#e1e4e8;">          use: [ </span></span>
<span class="line"><span style="color:#e1e4e8;">            { loader: &quot;style-loader&quot; },  </span></span>
<span class="line"><span style="color:#e1e4e8;">            {</span></span>
<span class="line"><span style="color:#e1e4e8;">                loader: MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#e1e4e8;">                options: {</span></span>
<span class="line"><span style="color:#e1e4e8;">                  esModule: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">                },</span></span>
<span class="line"><span style="color:#e1e4e8;">            },</span></span>
<span class="line"><span style="color:#e1e4e8;">            &#39;css-loader&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">          ]</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">      ]</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  plugins: [</span></span>
<span class="line"><span style="color:#e1e4e8;">      new HtmlWebpackPlugin({</span></span>
<span class="line"><span style="color:#e1e4e8;">        title: &#39;学习webpack&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">      }),</span></span>
<span class="line"><span style="color:#e1e4e8;">      new MiniCssExtractPlugin({ </span></span>
<span class="line"><span style="color:#e1e4e8;">        filename: &#39;style.css&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">      })</span></span>
<span class="line"><span style="color:#e1e4e8;">  ]</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// ...</span></span>
<span class="line"><span style="color:#24292e;">const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">  // ...</span></span>
<span class="line"><span style="color:#24292e;">    module: {</span></span>
<span class="line"><span style="color:#24292e;">      rules: [</span></span>
<span class="line"><span style="color:#24292e;">        {</span></span>
<span class="line"><span style="color:#24292e;">          test: /\\.css$/,</span></span>
<span class="line"><span style="color:#24292e;">          use: [ </span></span>
<span class="line"><span style="color:#24292e;">            { loader: &quot;style-loader&quot; },  </span></span>
<span class="line"><span style="color:#24292e;">            {</span></span>
<span class="line"><span style="color:#24292e;">                loader: MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#24292e;">                options: {</span></span>
<span class="line"><span style="color:#24292e;">                  esModule: true,</span></span>
<span class="line"><span style="color:#24292e;">                },</span></span>
<span class="line"><span style="color:#24292e;">            },</span></span>
<span class="line"><span style="color:#24292e;">            &#39;css-loader&#39;,</span></span>
<span class="line"><span style="color:#24292e;">          ]</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">      ]</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  plugins: [</span></span>
<span class="line"><span style="color:#24292e;">      new HtmlWebpackPlugin({</span></span>
<span class="line"><span style="color:#24292e;">        title: &#39;学习webpack&#39;</span></span>
<span class="line"><span style="color:#24292e;">      }),</span></span>
<span class="line"><span style="color:#24292e;">      new MiniCssExtractPlugin({ </span></span>
<span class="line"><span style="color:#24292e;">        filename: &#39;style.css&#39;</span></span>
<span class="line"><span style="color:#24292e;">      })</span></span>
<span class="line"><span style="color:#24292e;">  ]</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>在终端执行 <code>cnpm start</code> 打包完成后，在浏览器上运行 <code>index.html</code>，可以看到与之前效果一样；使用开发者工具能看到生成的样式文件 <code>style.css</code>，之前嵌套在页面中的样式不见了。</p><p>效果如下：</p><img src="`+o+`" alt="webpack"><p>大型项目中一般会选择应用预编译语言，这里使用 <code>Sass</code> 预编译语言。</p><p>在 <code>nmp</code> 官网搜索该 <code>loader</code>，点击名称进去查看使用安装手册，在终端执行：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ cnpm install --save-dev sass-loader node-sass</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ cnpm install --save-dev sass-loader node-sass</span></span></code></pre></div><p>安装完毕后，在根目录 <code>package.json</code> 中的 <code>devDependencies</code> 里能看到该 <code>loader</code> 和该 <code>loader</code> 的版本。</p><p>在 <code>webpack.config.js</code> 中的 <code>module</code> 选项中配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  // ...</span></span>
<span class="line"><span style="color:#e1e4e8;">  module: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    rules: [</span></span>
<span class="line"><span style="color:#e1e4e8;">      // ...</span></span>
<span class="line"><span style="color:#e1e4e8;">        {</span></span>
<span class="line"><span style="color:#e1e4e8;">            test: /\\.s[ac]ss$/i,</span></span>
<span class="line"><span style="color:#e1e4e8;">            use: [</span></span>
<span class="line"><span style="color:#e1e4e8;">              // Creates \`style\` nodes from JS strings</span></span>
<span class="line"><span style="color:#e1e4e8;">              &#39;style-loader&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">              // Translates CSS into CommonJS</span></span>
<span class="line"><span style="color:#e1e4e8;">              &#39;css-loader&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">              // Compiles Sass to CSS</span></span>
<span class="line"><span style="color:#e1e4e8;">              &#39;sass-loader&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">            ],</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    ]</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  // ...</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">  // ...</span></span>
<span class="line"><span style="color:#24292e;">  module: {</span></span>
<span class="line"><span style="color:#24292e;">    rules: [</span></span>
<span class="line"><span style="color:#24292e;">      // ...</span></span>
<span class="line"><span style="color:#24292e;">        {</span></span>
<span class="line"><span style="color:#24292e;">            test: /\\.s[ac]ss$/i,</span></span>
<span class="line"><span style="color:#24292e;">            use: [</span></span>
<span class="line"><span style="color:#24292e;">              // Creates \`style\` nodes from JS strings</span></span>
<span class="line"><span style="color:#24292e;">              &#39;style-loader&#39;,</span></span>
<span class="line"><span style="color:#24292e;">              // Translates CSS into CommonJS</span></span>
<span class="line"><span style="color:#24292e;">              &#39;css-loader&#39;,</span></span>
<span class="line"><span style="color:#24292e;">              // Compiles Sass to CSS</span></span>
<span class="line"><span style="color:#24292e;">              &#39;sass-loader&#39;,</span></span>
<span class="line"><span style="color:#24292e;">            ],</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    ]</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  // ...</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>同样在根目录 <code>src</code> 下创建一个专门存放 <code>sass</code> 样式文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// index.scss</span></span>
<span class="line"><span style="color:#e1e4e8;">$fontSize: 16px;</span></span>
<span class="line"><span style="color:#e1e4e8;">body{ font-size:$fontSize;}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// index.scss</span></span>
<span class="line"><span style="color:#24292e;">$fontSize: 16px;</span></span>
<span class="line"><span style="color:#24292e;">body{ font-size:$fontSize;}</span></span></code></pre></div><p>在根目录 <code>src/index.js</code> 中引入该 <code>scss</code> 文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">document.write(&#39;hello webpack&#39;) </span></span>
<span class="line"><span style="color:#e1e4e8;">require(&#39;./style.css&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">require(&#39;./index.scss&#39;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">document.write(&#39;hello webpack&#39;) </span></span>
<span class="line"><span style="color:#24292e;">require(&#39;./style.css&#39;)</span></span>
<span class="line"><span style="color:#24292e;">require(&#39;./index.scss&#39;)</span></span></code></pre></div><p>在终端执行 <code>cnpm start</code> 打包完成后，在浏览器上运行 <code>index.html</code>，能看到页面字体变化。</p><p>③、打包图片</p><p>打包处理图片使用 <code>url-loader</code> 和 <code>file-loader</code>。</p><p>在 <code>npm</code> 官网搜索该 <code>loader</code>，点击名称进去查看安装手册，在终端执行：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ cnpm install url-loader file-loader --save-dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ cnpm install url-loader file-loader --save-dev</span></span></code></pre></div><p>安装完该插件后，在根目录 <code>package.json</code> 中的 <code>devDependencies</code> 里能看到该 <code>loader</code> 和该 <code>loader</code> 的版本。</p><p>在 <code>webpack.config.js</code> 中的 <code>module</code> 选项中配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  // ...</span></span>
<span class="line"><span style="color:#e1e4e8;">    module: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      rules: [</span></span>
<span class="line"><span style="color:#e1e4e8;">       // ...</span></span>
<span class="line"><span style="color:#e1e4e8;">        {</span></span>
<span class="line"><span style="color:#e1e4e8;">            test: /\\.(png|jpe?g|gif)$/i,</span></span>
<span class="line"><span style="color:#e1e4e8;">            loader: &#39;file-loader&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">            options: {</span></span>
<span class="line"><span style="color:#e1e4e8;">                outputPath: &#39;images&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                name: &#39;[1]-[name].[ext]&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">            },</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">      ]</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  // ...</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">  // ...</span></span>
<span class="line"><span style="color:#24292e;">    module: {</span></span>
<span class="line"><span style="color:#24292e;">      rules: [</span></span>
<span class="line"><span style="color:#24292e;">       // ...</span></span>
<span class="line"><span style="color:#24292e;">        {</span></span>
<span class="line"><span style="color:#24292e;">            test: /\\.(png|jpe?g|gif)$/i,</span></span>
<span class="line"><span style="color:#24292e;">            loader: &#39;file-loader&#39;,</span></span>
<span class="line"><span style="color:#24292e;">            options: {</span></span>
<span class="line"><span style="color:#24292e;">                outputPath: &#39;images&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                name: &#39;[1]-[name].[ext]&#39;</span></span>
<span class="line"><span style="color:#24292e;">            },</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">      ]</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  // ...</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>在 <code>style.css</code> 样式文件中引入一张图片作为背景图：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">*{ margin:0px;padding:0px;}</span></span>
<span class="line"><span style="color:#e1e4e8;">body{ background-color: red; }</span></span>
<span class="line"><span style="color:#e1e4e8;">body{ background: url(&#39;./webpack1-3.jpg&#39;) repeat-x; }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">*{ margin:0px;padding:0px;}</span></span>
<span class="line"><span style="color:#24292e;">body{ background-color: red; }</span></span>
<span class="line"><span style="color:#24292e;">body{ background: url(&#39;./webpack1-3.jpg&#39;) repeat-x; }</span></span></code></pre></div><p>在终端执行 <code>cnpm start</code> 打包完成后，在浏览器上运行 <code>index.html</code>，能看到之前的背景色被改变了。</p><p>技术不断创新，前端技术领域也是如此。新项目中越来越喜欢使用 <code>ES6</code> 作为处理 <code>JS</code> 页面数据交互，接下来继续打包 <code>ES6</code>。</p><p>④、打包 ES6</p><p>打包处理 <code>ES6</code> 使用 <code>babel-loader</code>、<code>babel-core</code>、<code>babel-preset-env</code>、<code>babel-preset-es2015</code>。</p><p>在 <code>npm</code> 官网搜索该 <code>loader</code>，点击名称金进去查看安装手册，在终端执行：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ cnpm i babel-loader babel-core babel-preset-env babel-preset-es2015 --save-dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ cnpm i babel-loader babel-core babel-preset-env babel-preset-es2015 --save-dev</span></span></code></pre></div><p>附：如果运行出错可以安装：<code>@babel/core</code>，<code>@babel/preset-env</code>；其中<code>babel-loader</code> 转换 <code>js</code> 加载器；<code>@babel/core</code> 为 <code>babel</code> 的核心模块；<code>@babel/preser-env</code> 将 <code>ES6</code> 转为 <code>ES5</code>；<code>babel-preset-es2015</code>将部分 <code>ES6</code> 转化成 <code>ES5</code> 语法。</p><p>安装完该插件后，在根目录 <code>package.json</code> 中的 <code>devDependencies</code> 里能看到该 <code>loader</code> 和该 <code>loader</code> 的版本。</p><p>在 <code>webpack.config.js</code> 中的 <code>module</code> 选项中配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  // ...</span></span>
<span class="line"><span style="color:#e1e4e8;">    module: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      rules: [</span></span>
<span class="line"><span style="color:#e1e4e8;">       // ...</span></span>
<span class="line"><span style="color:#e1e4e8;">        {</span></span>
<span class="line"><span style="color:#e1e4e8;">            test: /\\.m?js$/,</span></span>
<span class="line"><span style="color:#e1e4e8;">            exclude: /(node_modules|bower_components)/,</span></span>
<span class="line"><span style="color:#e1e4e8;">            use: {</span></span>
<span class="line"><span style="color:#e1e4e8;">              loader: &#39;babel-loader&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">              options: {</span></span>
<span class="line"><span style="color:#e1e4e8;">                  presets: [&#39;@babel/preset-env&#39;]</span></span>
<span class="line"><span style="color:#e1e4e8;">              }</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">      ]</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  // ...</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">  // ...</span></span>
<span class="line"><span style="color:#24292e;">    module: {</span></span>
<span class="line"><span style="color:#24292e;">      rules: [</span></span>
<span class="line"><span style="color:#24292e;">       // ...</span></span>
<span class="line"><span style="color:#24292e;">        {</span></span>
<span class="line"><span style="color:#24292e;">            test: /\\.m?js$/,</span></span>
<span class="line"><span style="color:#24292e;">            exclude: /(node_modules|bower_components)/,</span></span>
<span class="line"><span style="color:#24292e;">            use: {</span></span>
<span class="line"><span style="color:#24292e;">              loader: &#39;babel-loader&#39;,</span></span>
<span class="line"><span style="color:#24292e;">              options: {</span></span>
<span class="line"><span style="color:#24292e;">                  presets: [&#39;@babel/preset-env&#39;]</span></span>
<span class="line"><span style="color:#24292e;">              }</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">      ]</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  // ...</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>项目中处理页面数据交互一般都是存放单独脚本文件，因此在根目录下中的 <code>src</code> 目录下创建一个脚本文件 <code>es6.js</code>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">let today = &#39;今天天气很好&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">alert(today);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">let today = &#39;今天天气很好&#39;;</span></span>
<span class="line"><span style="color:#24292e;">alert(today);</span></span></code></pre></div><p>在根目录 <code>src/index.js</code> 中引入该脚本文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">document.write(&#39;hello webpack&#39;) </span></span>
<span class="line"><span style="color:#e1e4e8;">require(&#39;./style.css&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">require(&#39;./es6.js&#39;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">document.write(&#39;hello webpack&#39;) </span></span>
<span class="line"><span style="color:#24292e;">require(&#39;./style.css&#39;)</span></span>
<span class="line"><span style="color:#24292e;">require(&#39;./es6.js&#39;)</span></span></code></pre></div><p>此时运行 <code>cnpm install</code> 肯定会报错，因为需要设置 <code>babel</code>。在根目录下创建 <code>.babelre</code> 大致内容大致如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &#39;presets&#39;:[&#39;env&#39;]</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &#39;presets&#39;:[&#39;env&#39;]</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>这时在终端执行 <code>cnpm start</code> 打包完成后，在浏览器上运行 <code>index.html</code>，能看到页面弹出的语句。</p><p>目前为止打包生成的 <code>index.html</code> 模版每次都得重新刷新页面。为了提高开发效率 <code>Webpack</code> 提供了开启服务热更新替换，不用刷新界面就能实现热更新。下面实现自动开启服务热更新。</p><h3 id="devserver" tabindex="-1">devServer <a class="header-anchor" href="#devserver" aria-label="Permalink to &quot;devServer&quot;">​</a></h3><p>查看 <code>Webpack</code> 手册安装相关模块，在终端执行：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ cnpm i --save-dev webpack-dev-server</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ cnpm i --save-dev webpack-dev-server</span></span></code></pre></div><p>安装成功后，在根目录 <code>package.json</code> 中的 <code>devDependencies</code> 里能看到 <code>dev-server</code> 和 <code>dev-server</code> 的版本</p><p>在 <code>webpack.config.js</code> 中配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// ...</span></span>
<span class="line"><span style="color:#e1e4e8;">  const webpack = require(&#39;webpack&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  module.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">   // ...</span></span>
<span class="line"><span style="color:#e1e4e8;">    devServer: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      contentBase:path.resolve(__dirname, &#39;dist&#39;),</span></span>
<span class="line"><span style="color:#e1e4e8;">      host: &#39;localhost&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      port:8090,</span></span>
<span class="line"><span style="color:#e1e4e8;">      open: true,  // 自动打开浏览器</span></span>
<span class="line"><span style="color:#e1e4e8;">      hot: true  // 热更新</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"> }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// ...</span></span>
<span class="line"><span style="color:#24292e;">  const webpack = require(&#39;webpack&#39;)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">   // ...</span></span>
<span class="line"><span style="color:#24292e;">    devServer: {</span></span>
<span class="line"><span style="color:#24292e;">      contentBase:path.resolve(__dirname, &#39;dist&#39;),</span></span>
<span class="line"><span style="color:#24292e;">      host: &#39;localhost&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      port:8090,</span></span>
<span class="line"><span style="color:#24292e;">      open: true,  // 自动打开浏览器</span></span>
<span class="line"><span style="color:#24292e;">      hot: true  // 热更新</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"> }</span></span></code></pre></div><p>修改 <code>package.json</code> 文件中的 <code>scripts</code> 字段里面的 <code>start</code> 属性对应的属性值：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// ...</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;start&quot;: &quot;webpack-dev-server&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;test&quot;: &quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  // ...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// ...</span></span>
<span class="line"><span style="color:#24292e;">  &quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;start&quot;: &quot;webpack-dev-server&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;test&quot;: &quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  // ...</span></span></code></pre></div><p>也可以添加新的自定义启动 <code>Webpack</code> 命令，如 <code>run</code> 命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// ...</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;start&quot;: &quot;webpack&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;run&quot;: &quot;webpack-dev-server&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;test&quot;: &quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  // ...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// ...</span></span>
<span class="line"><span style="color:#24292e;">  &quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;start&quot;: &quot;webpack&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;run&quot;: &quot;webpack-dev-server&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;test&quot;: &quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  // ...</span></span></code></pre></div><p>在终端执行 <code>cnpm start</code> 或者 <code>cnpm run</code> 会看到浏览器自动打开生成的 <code>index.html</code>。然后在 <code>styl.css</code> 中添加样式，如：<code>font-size:30px</code> 页面会自动更新并显示最新内容。</p><p>项目中或许会用到 <code>jQuery</code> 库或者 <code>Vue</code>，那么如何使用呢？继续往下看。</p><h3 id="快捷导入" tabindex="-1">快捷导入 <a class="header-anchor" href="#快捷导入" aria-label="Permalink to &quot;快捷导入&quot;">​</a></h3><p>首先在 <code>npm</code> 官网查询要安装的包，如 <code>jQuery</code>，在终端执行：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ cnpm install --save-dev jquery</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ cnpm install --save-dev jquery</span></span></code></pre></div><p>安装完毕之后，在根目录 <code>package.json</code> 中的 <code>devDependencies</code> 里能看到 <code>jQuery</code> 和 <code>jQuery</code> 的版本。</p><p>在 <code>webpack.config.js</code> 中的 <code>plugins</code> 选项中配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">modules.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  // ...</span></span>
<span class="line"><span style="color:#e1e4e8;">  plugins: [</span></span>
<span class="line"><span style="color:#e1e4e8;">    // ...</span></span>
<span class="line"><span style="color:#e1e4e8;">      new webpack.ProvidePlugin({</span></span>
<span class="line"><span style="color:#e1e4e8;">      $: &#39;jquery&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    })</span></span>
<span class="line"><span style="color:#e1e4e8;">  ]</span></span>
<span class="line"><span style="color:#e1e4e8;">  // ...</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">modules.exports = {</span></span>
<span class="line"><span style="color:#24292e;">  // ...</span></span>
<span class="line"><span style="color:#24292e;">  plugins: [</span></span>
<span class="line"><span style="color:#24292e;">    // ...</span></span>
<span class="line"><span style="color:#24292e;">      new webpack.ProvidePlugin({</span></span>
<span class="line"><span style="color:#24292e;">      $: &#39;jquery&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;">  ]</span></span>
<span class="line"><span style="color:#24292e;">  // ...</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>为了方便看效果，在根目录下的 <code>src</code> 中创建新的文件，如：<code>es5.js</code>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// es5.js</span></span>
<span class="line"><span style="color:#e1e4e8;">$(&#39;body&#39;).text(&#39;Hello World!!!&#39;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// es5.js</span></span>
<span class="line"><span style="color:#24292e;">$(&#39;body&#39;).text(&#39;Hello World!!!&#39;)</span></span></code></pre></div><p>在根目录 <code>src/index.js</code> 中引入该脚本：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">document.write(&#39;hello webpack&#39;) </span></span>
<span class="line"><span style="color:#e1e4e8;">require(&#39;./style.css&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">require(&#39;./es6.js&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">require(&#39;./es5.js&#39;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">document.write(&#39;hello webpack&#39;) </span></span>
<span class="line"><span style="color:#24292e;">require(&#39;./style.css&#39;)</span></span>
<span class="line"><span style="color:#24292e;">require(&#39;./es6.js&#39;)</span></span>
<span class="line"><span style="color:#24292e;">require(&#39;./es5.js&#39;)</span></span></code></pre></div><p>这时在页面上能看到 <code>Hello World!!!</code> 字样。到此为止一个入门级带有热更新的 <code>Webpack</code> 学习完毕。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>到这里入门级 <code>Webpack</code> 就算结束了。以上内容从认识 <code>Webpack</code> 到使用各种 <code>loader</code> 和各种 <code>plugins</code> 打包生成资源应用在项目中，认识了基本的使用语法和应用各种配置，也为以后进阶的学习夯实基础。</p><p>针对不同的项目，还有更多的 <code>Webpack</code> 打包细节需要调优，如：如何减少搜索文件；如何提高 <code>loader</code> 的打包速度；如何排除项目中无用的打包文件等等。在接下来的时间里，慢慢研究与学习。</p>`,164),i=[t];function d(r,y,u,h,g,b){return e(),a("div",null,i)}const m=s(c,[["render",d]]);export{k as __pageData,m as default};
