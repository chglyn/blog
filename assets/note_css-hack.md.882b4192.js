import{_ as t,o as e,c as o,Q as n}from"./chunks/framework.419948d5.js";const m=JSON.parse('{"title":"探索css hack","description":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。","frontmatter":{"title":"探索css hack","editLink":true,"head":[["meta",{"name":"description","content":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。"}],["meta",{"name":"keywords","content":"hack,浏览器前缀,前端性能优化"}]]},"headers":[],"relativePath":"note/css-hack.md","filePath":"note/css-hack.md"}'),a={name:"note/css-hack.md"},c=n(`<p>有关css hack与各浏览器前缀，前端性能优化之旅</p><h3 id="css-hack" tabindex="-1">css hack <a class="header-anchor" href="#css-hack" aria-label="Permalink to &quot;css hack&quot;">​</a></h3><hr><p>IE6浏览器下 css hack： 属性明前加下划线， 如： <code>_color:#666</code></p><p>IE7浏览器下 css hack： 属性名前加 <code>*</code>，如： <code>*clolor:#666</code></p><p>IE8浏览器下(最新的opera浏览器也支持) css hack： 属性名前加 \\0，如： <code>clolor:#666\\0</code></p><p>IE9浏览器下 css hack： 属性名前加 \\9，如：<code> clolor:#666\\9</code></p><p>总结：<code>firefox</code>写在最前面，<code>IE7</code>写在中间，IE6写在最后；<code>IE6</code>能识别 <code>*</code>，不能识别！important；<code>IE7</code>能识别 <code>*</code>和<code>！important</code>，<code>FF</code>能识别<code>！important</code>和 <code>_</code>, 不能识别 <code>*</code>。</p><h3 id="浏览器前缀" tabindex="-1">浏览器前缀 <a class="header-anchor" href="#浏览器前缀" aria-label="Permalink to &quot;浏览器前缀&quot;">​</a></h3><ul><li>IE浏览器：属性名前添加-ms-，如： -ms-tranform:rotate(10deg)</li><li>Firefox浏览器：属性名前加 -moz-，如： -moz-tranform:rotate(10deg)</li><li>safari和chrome浏览器： 属性名前加 -webkit-，如： -webkit-tranform:rotate(10deg)</li><li>opera浏览器：属性名前加 -o-，如： -o-tranform:rotate(10deg)</li></ul><h3 id="前端性能优化之旅" tabindex="-1">前端性能优化之旅 <a class="header-anchor" href="#前端性能优化之旅" aria-label="Permalink to &quot;前端性能优化之旅&quot;">​</a></h3><pre><code>● 1.缓存
	○ 1.1本地储存（cookie, localStorage, sessionStorage, indexedDB）
	○ 1.2内存缓存
	○ 1.3 Cache API
	○ 1.4 HTTP缓存（强缓存：Expires/Cache-Control, 协商缓存： Last-Modified/If-Modified-Since/Etag/If-None-Match）
	○ 1.5 Push Cache
● 2.发送请求：
	○ 2.1避免不必要的重定向（301、302）
	○ 2.2 DNS预解析
	○ 2.3预先建立连接
	○ 2.4使用CDN
● 3.服务端响应
	○ 3.1使用流（保存/撤销）
	○ 3.2业务接口内部聚合
	○ 3.3避免代码问题
● 4.页面解析与处理
	○ 4.1资源位置顺序
	○ 4.2合理使用defer/async脚本
	○ 4.3关键渲染路径
● 5.页面静态资源
	○ 5.1 Javascript
		● 5.1.1减少不必要的请求 （code split/代码合并）
		● 5.1.2减少包体大小（代码压缩，Tree Shaking，合理使用polyfill）
		● 5.1.3加快解析与执行（初始加载，删除不必要代码；避免long task；考虑是否需要框架；针对代码的编译优化）
		● 5.1.4打包导致的缓存失效（hash module id； runtime chunk split； 使用records）
	○ 5.2 CSS
		● 5.2.1使用关键CSS（内联；骨架屏）
		● 5.2.2优化资源请求（按需加载；合并文件；请求的优先级排序；慎用@import；谨慎对待Javascript脚本的位置）
		● 5.2.3减少包体积（压缩；选择合适的兼容性polyfill支持）
		● 5.2.4加快解析与渲染树构建（简化选择器；避免使用昂贵的属性；使用先进的布局方式）
		● 5.2.5利用缓存 webpack MiniCssExtractPlugin
	○ 5.3图片
		● 5.3.1优化请求（雪碧图；懒加载；base64内联）
		● 5.3.2减少图片大小（使用合适的图片格式,使用gpj,webP,SVG,video代替gif；适当降低图片质量；删除图片沉余信息）
		● 5.3.3利用缓存
	○ 5.4字体
		● 5.4.1使用font-display实现fout
		● 5.4.2内联字体
		● 5.4.3使用css font loging API
		● 5.4.4FoFT(flash of Faux Text)
	○ 5.5视频
		● 5.5.1使用合适的视频格式
		● 5.5.2进行视频压缩
		● 5.5.3移除不必要的音轨信息
		● 5.5.4使用“流”
		● 5.5.5移除页面中不必要的视频
● 6.运行时
	○ 6.1注意强制同步布局（避免代码出现在不合适的位置；批量化操作）
	○ 6.2长列表优化（实现Vir tual List机制；原生Virtual Scroller）
	○ 6.3避免Javascript运行占用时间过长（任务分解；延迟执行；并行计算）
	○ 6.4善用composite机制
	○ 6.5滚动的性能优化
	○ 6.6Passive event listeners
● 7.预加载
	○ 7.1预加载技术（Resource Hints: prefetch/prerender/preload；基于JS实现预加载）
	○ 7.2视频预加载技术（preload属性；link preload；自定义buffer）
	○ 7.3预加载策略（quicklink；guess.js）
</code></pre>`,12),s=[c];function r(i,d,l,p,h,f){return e(),o("div",null,s)}const _=t(a,[["render",r]]);export{m as __pageData,_ as default};
