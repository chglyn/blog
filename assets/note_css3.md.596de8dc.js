import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.419948d5.js";const b=JSON.parse('{"title":"探索css3属性","description":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。","frontmatter":{"title":"探索css3属性","editLink":true,"head":[["meta",{"name":"description","content":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。"}],["meta",{"name":"keywords","content":"css3属性,伪元素,css3绘制图形"}]]},"headers":[],"relativePath":"note/css3.md","filePath":"note/css3.md"}'),l={name:"note/css3.md"},p=e(`<h3 id="border-radius" tabindex="-1">border-radius <a class="header-anchor" href="#border-radius" aria-label="Permalink to &quot;border-radius&quot;">​</a></h3><p>在 <code>css3</code> 之前绘制圆形通常使用 <code>UI</code> 给出的设计图作为背景或者 <code>icon</code> 使用。</p><p>比如画一个圆形：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;box&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    .box{ </span></span>
<span class="line"><span style="color:#e1e4e8;">        width:60px;</span></span>
<span class="line"><span style="color:#e1e4e8;">        height:60px;</span></span>
<span class="line"><span style="color:#e1e4e8;">        background:url(&#39;./xxx.png&#39;) no-repeat center center;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/style&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;box&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#24292e;">    .box{ </span></span>
<span class="line"><span style="color:#24292e;">        width:60px;</span></span>
<span class="line"><span style="color:#24292e;">        height:60px;</span></span>
<span class="line"><span style="color:#24292e;">        background:url(&#39;./xxx.png&#39;) no-repeat center center;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">&lt;/style&gt;</span></span></code></pre></div><p><code>css3</code> 问世后，可以使用 <code>border-radius</code> 绘制圆形。</p><p>比如绘制一个圆形：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;box&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    .box{ </span></span>
<span class="line"><span style="color:#e1e4e8;">        width:200px;</span></span>
<span class="line"><span style="color:#e1e4e8;">        height:200px;</span></span>
<span class="line"><span style="color:#e1e4e8;">        border-top-left-radius: 50%;</span></span>
<span class="line"><span style="color:#e1e4e8;">        border-top-right-radius: 50%;</span></span>
<span class="line"><span style="color:#e1e4e8;">        border-bottom-left-radius: 50%;</span></span>
<span class="line"><span style="color:#e1e4e8;">        border-bottom-right-radius: 50%;</span></span>
<span class="line"><span style="color:#e1e4e8;">        background-color:#f00;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/style&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;box&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#24292e;">    .box{ </span></span>
<span class="line"><span style="color:#24292e;">        width:200px;</span></span>
<span class="line"><span style="color:#24292e;">        height:200px;</span></span>
<span class="line"><span style="color:#24292e;">        border-top-left-radius: 50%;</span></span>
<span class="line"><span style="color:#24292e;">        border-top-right-radius: 50%;</span></span>
<span class="line"><span style="color:#24292e;">        border-bottom-left-radius: 50%;</span></span>
<span class="line"><span style="color:#24292e;">        border-bottom-right-radius: 50%;</span></span>
<span class="line"><span style="color:#24292e;">        background-color:#f00;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">&lt;/style&gt;</span></span></code></pre></div><p>样式可以简写成：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.box{ </span></span>
<span class="line"><span style="color:#e1e4e8;">        width:200px;</span></span>
<span class="line"><span style="color:#e1e4e8;">        height:200px;</span></span>
<span class="line"><span style="color:#e1e4e8;">        border-radius: 50%;</span></span>
<span class="line"><span style="color:#e1e4e8;">        background-color:#f00;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.box{ </span></span>
<span class="line"><span style="color:#24292e;">        width:200px;</span></span>
<span class="line"><span style="color:#24292e;">        height:200px;</span></span>
<span class="line"><span style="color:#24292e;">        border-radius: 50%;</span></span>
<span class="line"><span style="color:#24292e;">        background-color:#f00;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h3 id="绘制半圆形" tabindex="-1">绘制半圆形 <a class="header-anchor" href="#绘制半圆形" aria-label="Permalink to &quot;绘制半圆形&quot;">​</a></h3><p>绘制半圆形考虑将长度或宽度减少一半（如：<code>width: 200</code> 那么 <code>height: 100</code>）。</p><p>比如绘制一个半圆形：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;box&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    .box{</span></span>
<span class="line"><span style="color:#e1e4e8;">        width: 100px;</span></span>
<span class="line"><span style="color:#e1e4e8;">        height: 200px;</span></span>
<span class="line"><span style="color:#e1e4e8;">        border-radius: 100px 0 0 100px;</span></span>
<span class="line"><span style="color:#e1e4e8;">        background-color:#f00;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/style&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;box&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#24292e;">    .box{</span></span>
<span class="line"><span style="color:#24292e;">        width: 100px;</span></span>
<span class="line"><span style="color:#24292e;">        height: 200px;</span></span>
<span class="line"><span style="color:#24292e;">        border-radius: 100px 0 0 100px;</span></span>
<span class="line"><span style="color:#24292e;">        background-color:#f00;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">&lt;/style&gt;</span></span></code></pre></div><h3 id="伪元素" tabindex="-1">伪元素 <a class="header-anchor" href="#伪元素" aria-label="Permalink to &quot;伪元素&quot;">​</a></h3><p><code>:first-letter</code>：可以控制文本首个汉字或字母样式。</p><p><code>:first-line</code>：可以控制文本首行样式。</p><p>比如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;p&gt;You can use the x pseudo-element to add a special effect to the first letter of a text!&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">p{ </span></span>
<span class="line"><span style="color:#e1e4e8;">    width:30px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    height:30px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    font-size: 14px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border:1px solid #000;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">p::first-letter{</span></span>
<span class="line"><span style="color:#e1e4e8;">    font-size: 24px;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">p::first-line{</span></span>
<span class="line"><span style="color:#e1e4e8;">    color: #f00;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/style&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;p&gt;You can use the x pseudo-element to add a special effect to the first letter of a text!&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#24292e;">p{ </span></span>
<span class="line"><span style="color:#24292e;">    width:30px;</span></span>
<span class="line"><span style="color:#24292e;">    height:30px;</span></span>
<span class="line"><span style="color:#24292e;">    font-size: 14px;</span></span>
<span class="line"><span style="color:#24292e;">    border:1px solid #000;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">p::first-letter{</span></span>
<span class="line"><span style="color:#24292e;">    font-size: 24px;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">p::first-line{</span></span>
<span class="line"><span style="color:#24292e;">    color: #f00;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">&lt;/style&gt;</span></span></code></pre></div><p><code>before</code> 与 <code>:after</code> 在元素前与元素后插入新内容。注意的是必须使用 <code>content</code> 属性。</p><p>比如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;box&quot;&gt;讲台词&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    .box::before{ </span></span>
<span class="line"><span style="color:#e1e4e8;">        content: &#39;小明&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    .box::after{ </span></span>
<span class="line"><span style="color:#e1e4e8;">        content: &#39;很棒！&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/style&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;box&quot;&gt;讲台词&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#24292e;">    .box::before{ </span></span>
<span class="line"><span style="color:#24292e;">        content: &#39;小明&#39;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    .box::after{ </span></span>
<span class="line"><span style="color:#24292e;">        content: &#39;很棒！&#39;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">&lt;/style&gt;</span></span></code></pre></div><h3 id="css3绘制一个正方形均分的三角形" tabindex="-1">CSS3绘制一个正方形均分的三角形 <a class="header-anchor" href="#css3绘制一个正方形均分的三角形" aria-label="Permalink to &quot;CSS3绘制一个正方形均分的三角形&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;box&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">.box{ </span></span>
<span class="line"><span style="color:#e1e4e8;">    border-top:50px solid #999;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-left: 50px solid #f00;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-bottom: 50px solid #0f0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-right: 50px solid #00f;</span></span>
<span class="line"><span style="color:#e1e4e8;">    width:0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    height:0;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/style&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;box&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#24292e;">.box{ </span></span>
<span class="line"><span style="color:#24292e;">    border-top:50px solid #999;</span></span>
<span class="line"><span style="color:#24292e;">    border-left: 50px solid #f00;</span></span>
<span class="line"><span style="color:#24292e;">    border-bottom: 50px solid #0f0;</span></span>
<span class="line"><span style="color:#24292e;">    border-right: 50px solid #00f;</span></span>
<span class="line"><span style="color:#24292e;">    width:0;</span></span>
<span class="line"><span style="color:#24292e;">    height:0;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">&lt;/style&gt;</span></span></code></pre></div><h3 id="css3绘制三角形" tabindex="-1">CSS3绘制三角形 <a class="header-anchor" href="#css3绘制三角形" aria-label="Permalink to &quot;CSS3绘制三角形&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;box&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">.box{ </span></span>
<span class="line"><span style="color:#e1e4e8;">    border-top:50px solid transparent;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-left: 50px solid #f00;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-bottom: 50px solid transparent;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-right: 0 solid #00f;</span></span>
<span class="line"><span style="color:#e1e4e8;">    width:0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    height:0;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/style&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;box&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#24292e;">.box{ </span></span>
<span class="line"><span style="color:#24292e;">    border-top:50px solid transparent;</span></span>
<span class="line"><span style="color:#24292e;">    border-left: 50px solid #f00;</span></span>
<span class="line"><span style="color:#24292e;">    border-bottom: 50px solid transparent;</span></span>
<span class="line"><span style="color:#24292e;">    border-right: 0 solid #00f;</span></span>
<span class="line"><span style="color:#24292e;">    width:0;</span></span>
<span class="line"><span style="color:#24292e;">    height:0;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">&lt;/style&gt;</span></span></code></pre></div><p><em>绘制单独三角形，将该三角形的反向 <code>border</code> 属性设置为 0，其他方向 <code>border</code> 属性设置为透明 <code>transparent</code></em>。</p><h3 id="css3绘制对话框" tabindex="-1">CSS3绘制对话框 <a class="header-anchor" href="#css3绘制对话框" aria-label="Permalink to &quot;CSS3绘制对话框&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;dialog&quot;&gt;Hello, everyone！&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">.dialog{</span></span>
<span class="line"><span style="color:#e1e4e8;">    width:200px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    height:60px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    background-color:#6a6;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-radius:10px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    position: relative;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">.dialog::before{</span></span>
<span class="line"><span style="color:#e1e4e8;">    content:&#39;&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-top:10px solid transparent;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-bottom: 10px solid transparent;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-left: 0 solid #6a6;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-right: 10px solid #6a6;</span></span>
<span class="line"><span style="color:#e1e4e8;">    position: absolute;</span></span>
<span class="line"><span style="color:#e1e4e8;">    top: 20px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    left: -10px;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/style&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;dialog&quot;&gt;Hello, everyone！&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.dialog{</span></span>
<span class="line"><span style="color:#24292e;">    width:200px;</span></span>
<span class="line"><span style="color:#24292e;">    height:60px;</span></span>
<span class="line"><span style="color:#24292e;">    background-color:#6a6;</span></span>
<span class="line"><span style="color:#24292e;">    border-radius:10px;</span></span>
<span class="line"><span style="color:#24292e;">    position: relative;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.dialog::before{</span></span>
<span class="line"><span style="color:#24292e;">    content:&#39;&#39;;</span></span>
<span class="line"><span style="color:#24292e;">    border-top:10px solid transparent;</span></span>
<span class="line"><span style="color:#24292e;">    border-bottom: 10px solid transparent;</span></span>
<span class="line"><span style="color:#24292e;">    border-left: 0 solid #6a6;</span></span>
<span class="line"><span style="color:#24292e;">    border-right: 10px solid #6a6;</span></span>
<span class="line"><span style="color:#24292e;">    position: absolute;</span></span>
<span class="line"><span style="color:#24292e;">    top: 20px;</span></span>
<span class="line"><span style="color:#24292e;">    left: -10px;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;/style&gt;</span></span></code></pre></div><h3 id="css3绘制菱形" tabindex="-1">CSS3绘制菱形 <a class="header-anchor" href="#css3绘制菱形" aria-label="Permalink to &quot;CSS3绘制菱形&quot;">​</a></h3><p>首先绘制正方形，然后使用 <code>transform</code> 旋转（<code>rotate</code>）属性，旋转一定角度，即变化成菱形。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;diamond&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">.diamond{</span></span>
<span class="line"><span style="color:#e1e4e8;">    width:200px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    height:200px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    background-color:#6a6;</span></span>
<span class="line"><span style="color:#e1e4e8;">    -webkit-transform: rotate(45deg);</span></span>
<span class="line"><span style="color:#e1e4e8;">    -ms-transform: rotate(45deg);</span></span>
<span class="line"><span style="color:#e1e4e8;">    -o-transform: rotate(45deg);</span></span>
<span class="line"><span style="color:#e1e4e8;">    transform: rotate(45deg);   </span></span>
<span class="line"><span style="color:#e1e4e8;">    </span></span>
<span class="line"><span style="color:#e1e4e8;">    margin: 200px;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/style&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;diamond&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.diamond{</span></span>
<span class="line"><span style="color:#24292e;">    width:200px;</span></span>
<span class="line"><span style="color:#24292e;">    height:200px;</span></span>
<span class="line"><span style="color:#24292e;">    background-color:#6a6;</span></span>
<span class="line"><span style="color:#24292e;">    -webkit-transform: rotate(45deg);</span></span>
<span class="line"><span style="color:#24292e;">    -ms-transform: rotate(45deg);</span></span>
<span class="line"><span style="color:#24292e;">    -o-transform: rotate(45deg);</span></span>
<span class="line"><span style="color:#24292e;">    transform: rotate(45deg);   </span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">    margin: 200px;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;/style&gt;</span></span></code></pre></div><h3 id="css3绘制平行四边形" tabindex="-1">CSS3绘制平行四边形 <a class="header-anchor" href="#css3绘制平行四边形" aria-label="Permalink to &quot;CSS3绘制平行四边形&quot;">​</a></h3><p>首先绘制长方形，然后使用 <code>transform</code> 倾斜（<code>skew</code>） 属性，倾斜一定角度，即变化成平行四边形。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;parallel&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">.parallel{</span></span>
<span class="line"><span style="color:#e1e4e8;">    width:200px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    height:100px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    background-color:#6a6;</span></span>
<span class="line"><span style="color:#e1e4e8;">    -webkit-transform: skew(45deg);</span></span>
<span class="line"><span style="color:#e1e4e8;">    -ms-transform: skew(45deg);</span></span>
<span class="line"><span style="color:#e1e4e8;">    -o-transform: skew(45deg);</span></span>
<span class="line"><span style="color:#e1e4e8;">    transform: skew(45deg); </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    margin:200px;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/style&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;parallel&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.parallel{</span></span>
<span class="line"><span style="color:#24292e;">    width:200px;</span></span>
<span class="line"><span style="color:#24292e;">    height:100px;</span></span>
<span class="line"><span style="color:#24292e;">    background-color:#6a6;</span></span>
<span class="line"><span style="color:#24292e;">    -webkit-transform: skew(45deg);</span></span>
<span class="line"><span style="color:#24292e;">    -ms-transform: skew(45deg);</span></span>
<span class="line"><span style="color:#24292e;">    -o-transform: skew(45deg);</span></span>
<span class="line"><span style="color:#24292e;">    transform: skew(45deg); </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    margin:200px;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;/style&gt;</span></span></code></pre></div><p><code>skew</code> 有两个参数： <code>skew(x轴, y轴)</code>。</p><h3 id="css3-绘制五角星" tabindex="-1">CSS3 绘制五角星 <a class="header-anchor" href="#css3-绘制五角星" aria-label="Permalink to &quot;CSS3 绘制五角星&quot;">​</a></h3><p>首先绘制一个钝角三角形，然后旋转正 35 度；使用伪元素绘制一个锐角和一个钝角三角形，分别旋转逆时针 35 度和逆时针 70度。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;star&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">.star{</span></span>
<span class="line"><span style="color:#e1e4e8;">    width:0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    height:0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-top:0px solid #f00;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-bottom:70px solid #f00;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-left:100px solid transparent;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-right:100px solid transparent;</span></span>
<span class="line"><span style="color:#e1e4e8;">    transform: rotate(35deg);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    position: relative;</span></span>
<span class="line"><span style="color:#e1e4e8;">    margin:  200px auto;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">.star::before{</span></span>
<span class="line"><span style="color:#e1e4e8;">    content: &#39;&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-top:0px solid #f00;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-bottom:80px solid #f00;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-left:30px solid transparent;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-right:30px solid transparent;</span></span>
<span class="line"><span style="color:#e1e4e8;">    -webkit-transform: rotate(-35deg);</span></span>
<span class="line"><span style="color:#e1e4e8;">    -ms-transform: rotate(-35deg);</span></span>
<span class="line"><span style="color:#e1e4e8;">    -o-transform: rotate(-35deg);</span></span>
<span class="line"><span style="color:#e1e4e8;">    transform: rotate(-35deg);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    position: absolute;</span></span>
<span class="line"><span style="color:#e1e4e8;">    top: -45px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    left: -62px;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">.star::after{</span></span>
<span class="line"><span style="color:#e1e4e8;">    content: &#39;&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-top:0 solid #f00;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-bottom: 70px solid #f00;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-left:100px solid transparent;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-right:100px solid transparent;</span></span>
<span class="line"><span style="color:#e1e4e8;">    -webkit-transform: rotate(-70deg);</span></span>
<span class="line"><span style="color:#e1e4e8;">    -ms-transform: rotate(-70deg);</span></span>
<span class="line"><span style="color:#e1e4e8;">    -o-transform: rotate(-70deg);</span></span>
<span class="line"><span style="color:#e1e4e8;">    transform: rotate(-70deg);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    position: absolute;</span></span>
<span class="line"><span style="color:#e1e4e8;">    top: 3px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    left: -105px;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/style&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;star&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.star{</span></span>
<span class="line"><span style="color:#24292e;">    width:0;</span></span>
<span class="line"><span style="color:#24292e;">    height:0;</span></span>
<span class="line"><span style="color:#24292e;">    border-top:0px solid #f00;</span></span>
<span class="line"><span style="color:#24292e;">    border-bottom:70px solid #f00;</span></span>
<span class="line"><span style="color:#24292e;">    border-left:100px solid transparent;</span></span>
<span class="line"><span style="color:#24292e;">    border-right:100px solid transparent;</span></span>
<span class="line"><span style="color:#24292e;">    transform: rotate(35deg);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    position: relative;</span></span>
<span class="line"><span style="color:#24292e;">    margin:  200px auto;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.star::before{</span></span>
<span class="line"><span style="color:#24292e;">    content: &#39;&#39;;</span></span>
<span class="line"><span style="color:#24292e;">    border-top:0px solid #f00;</span></span>
<span class="line"><span style="color:#24292e;">    border-bottom:80px solid #f00;</span></span>
<span class="line"><span style="color:#24292e;">    border-left:30px solid transparent;</span></span>
<span class="line"><span style="color:#24292e;">    border-right:30px solid transparent;</span></span>
<span class="line"><span style="color:#24292e;">    -webkit-transform: rotate(-35deg);</span></span>
<span class="line"><span style="color:#24292e;">    -ms-transform: rotate(-35deg);</span></span>
<span class="line"><span style="color:#24292e;">    -o-transform: rotate(-35deg);</span></span>
<span class="line"><span style="color:#24292e;">    transform: rotate(-35deg);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    position: absolute;</span></span>
<span class="line"><span style="color:#24292e;">    top: -45px;</span></span>
<span class="line"><span style="color:#24292e;">    left: -62px;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.star::after{</span></span>
<span class="line"><span style="color:#24292e;">    content: &#39;&#39;;</span></span>
<span class="line"><span style="color:#24292e;">    border-top:0 solid #f00;</span></span>
<span class="line"><span style="color:#24292e;">    border-bottom: 70px solid #f00;</span></span>
<span class="line"><span style="color:#24292e;">    border-left:100px solid transparent;</span></span>
<span class="line"><span style="color:#24292e;">    border-right:100px solid transparent;</span></span>
<span class="line"><span style="color:#24292e;">    -webkit-transform: rotate(-70deg);</span></span>
<span class="line"><span style="color:#24292e;">    -ms-transform: rotate(-70deg);</span></span>
<span class="line"><span style="color:#24292e;">    -o-transform: rotate(-70deg);</span></span>
<span class="line"><span style="color:#24292e;">    transform: rotate(-70deg);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    position: absolute;</span></span>
<span class="line"><span style="color:#24292e;">    top: 3px;</span></span>
<span class="line"><span style="color:#24292e;">    left: -105px;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;/style&gt;</span></span></code></pre></div><h3 id="css3-绘制六角形" tabindex="-1">CSS3 绘制六角形 <a class="header-anchor" href="#css3-绘制六角形" aria-label="Permalink to &quot;CSS3 绘制六角形&quot;">​</a></h3><p>六角形由两个三角形拼在一起绘制成功。</p><p>首先绘制一个锐角三角形，然后使用伪元素绘制一个锐角三角形，使用相对定位结合绝对定位。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;star&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">.star{</span></span>
<span class="line"><span style="color:#e1e4e8;">    width:0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    height:0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-top:0 solid #f00;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-bottom:100px solid #f00;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-left:50px solid transparent;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-right:50px solid transparent;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    margin:  100px auto;</span></span>
<span class="line"><span style="color:#e1e4e8;">    position: relative;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">.star::after{</span></span>
<span class="line"><span style="color:#e1e4e8;">    content:  &#39;&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    width: 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    height: 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-top:100px solid #f00;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-bottom:0 solid #f00;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-left:50px solid transparent;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-right:50px solid transparent;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    position: absolute;</span></span>
<span class="line"><span style="color:#e1e4e8;">    top: 30px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    left: -50px;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/style&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;star&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.star{</span></span>
<span class="line"><span style="color:#24292e;">    width:0;</span></span>
<span class="line"><span style="color:#24292e;">    height:0;</span></span>
<span class="line"><span style="color:#24292e;">    border-top:0 solid #f00;</span></span>
<span class="line"><span style="color:#24292e;">    border-bottom:100px solid #f00;</span></span>
<span class="line"><span style="color:#24292e;">    border-left:50px solid transparent;</span></span>
<span class="line"><span style="color:#24292e;">    border-right:50px solid transparent;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    margin:  100px auto;</span></span>
<span class="line"><span style="color:#24292e;">    position: relative;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.star::after{</span></span>
<span class="line"><span style="color:#24292e;">    content:  &#39;&#39;;</span></span>
<span class="line"><span style="color:#24292e;">    width: 0;</span></span>
<span class="line"><span style="color:#24292e;">    height: 0;</span></span>
<span class="line"><span style="color:#24292e;">    border-top:100px solid #f00;</span></span>
<span class="line"><span style="color:#24292e;">    border-bottom:0 solid #f00;</span></span>
<span class="line"><span style="color:#24292e;">    border-left:50px solid transparent;</span></span>
<span class="line"><span style="color:#24292e;">    border-right:50px solid transparent;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    position: absolute;</span></span>
<span class="line"><span style="color:#24292e;">    top: 30px;</span></span>
<span class="line"><span style="color:#24292e;">    left: -50px;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;/style&gt;</span></span></code></pre></div><h3 id="css3-绘制梯形" tabindex="-1">CSS3 绘制梯形 <a class="header-anchor" href="#css3-绘制梯形" aria-label="Permalink to &quot;CSS3 绘制梯形&quot;">​</a></h3><p>首先绘制一个正方体的梯形。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;zheng&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">.zheng{</span></span>
<span class="line"><span style="color:#e1e4e8;">    width:50px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    height:50px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-top:50px solid #f00;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-bottom:50px solid #0f0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-left:50px solid #00f;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-right:50px solid #ff0;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/style&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;zheng&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#24292e;">.zheng{</span></span>
<span class="line"><span style="color:#24292e;">    width:50px;</span></span>
<span class="line"><span style="color:#24292e;">    height:50px;</span></span>
<span class="line"><span style="color:#24292e;">    border-top:50px solid #f00;</span></span>
<span class="line"><span style="color:#24292e;">    border-bottom:50px solid #0f0;</span></span>
<span class="line"><span style="color:#24292e;">    border-left:50px solid #00f;</span></span>
<span class="line"><span style="color:#24292e;">    border-right:50px solid #ff0;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">&lt;/style&gt;</span></span></code></pre></div><p>由以上绘制梯形，并且左右 <code>border</code> 减小。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;zheng&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">.zheng{</span></span>
<span class="line"><span style="color:#e1e4e8;">    width:50px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    height:0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-top:50px solid #f00;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-bottom:0 solid #0f0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-left:20px solid transparent;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-right:20px solid transparent;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/style&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;zheng&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#24292e;">.zheng{</span></span>
<span class="line"><span style="color:#24292e;">    width:50px;</span></span>
<span class="line"><span style="color:#24292e;">    height:0;</span></span>
<span class="line"><span style="color:#24292e;">    border-top:50px solid #f00;</span></span>
<span class="line"><span style="color:#24292e;">    border-bottom:0 solid #0f0;</span></span>
<span class="line"><span style="color:#24292e;">    border-left:20px solid transparent;</span></span>
<span class="line"><span style="color:#24292e;">    border-right:20px solid transparent;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">&lt;/style&gt;</span></span></code></pre></div><h3 id="css3-绘制五边形" tabindex="-1">CSS3 绘制五边形 <a class="header-anchor" href="#css3-绘制五边形" aria-label="Permalink to &quot;CSS3 绘制五边形&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;wu&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">.wu{</span></span>
<span class="line"><span style="color:#e1e4e8;">    width:50px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    height:0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-top:50px solid #f00;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-bottom:0 solid #0f0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-left:20px solid transparent;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-right:20px solid transparent;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    margin: 100px auto;</span></span>
<span class="line"><span style="color:#e1e4e8;">    position: relative;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">.wu::before{</span></span>
<span class="line"><span style="color:#e1e4e8;">    content:&#39;&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-top:0 solid #f00;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-bottom:45px solid #f00;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-left:45px solid transparent;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-right:45px solid transparent;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    position: absolute;</span></span>
<span class="line"><span style="color:#e1e4e8;">    top: -95px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    left: -20px;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/style&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;wu&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#24292e;">.wu{</span></span>
<span class="line"><span style="color:#24292e;">    width:50px;</span></span>
<span class="line"><span style="color:#24292e;">    height:0;</span></span>
<span class="line"><span style="color:#24292e;">    border-top:50px solid #f00;</span></span>
<span class="line"><span style="color:#24292e;">    border-bottom:0 solid #0f0;</span></span>
<span class="line"><span style="color:#24292e;">    border-left:20px solid transparent;</span></span>
<span class="line"><span style="color:#24292e;">    border-right:20px solid transparent;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    margin: 100px auto;</span></span>
<span class="line"><span style="color:#24292e;">    position: relative;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.wu::before{</span></span>
<span class="line"><span style="color:#24292e;">    content:&#39;&#39;;</span></span>
<span class="line"><span style="color:#24292e;">    border-top:0 solid #f00;</span></span>
<span class="line"><span style="color:#24292e;">    border-bottom:45px solid #f00;</span></span>
<span class="line"><span style="color:#24292e;">    border-left:45px solid transparent;</span></span>
<span class="line"><span style="color:#24292e;">    border-right:45px solid transparent;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    position: absolute;</span></span>
<span class="line"><span style="color:#24292e;">    top: -95px;</span></span>
<span class="line"><span style="color:#24292e;">    left: -20px;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;/style&gt;</span></span></code></pre></div><h3 id="css3-绘制六边形" tabindex="-1">CSS3 绘制六边形 <a class="header-anchor" href="#css3-绘制六边形" aria-label="Permalink to &quot;CSS3 绘制六边形&quot;">​</a></h3><p>六边形由一个长方形和两个三角形拼接结合。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;six&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">.six{</span></span>
<span class="line"><span style="color:#e1e4e8;">    width:200px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    height:100px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    background-color:#f00;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    margin: 200px auto;</span></span>
<span class="line"><span style="color:#e1e4e8;">    position: relative;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">.six::before{</span></span>
<span class="line"><span style="color:#e1e4e8;">    content:  &#39;&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-top: 0 solid #0f0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-bottom: 50px solid #0f0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-left: 100px solid transparent;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-right: 100px solid transparent;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    position: absolute;</span></span>
<span class="line"><span style="color:#e1e4e8;">    top: -50px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    left: 0;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">.six::after{</span></span>
<span class="line"><span style="color:#e1e4e8;">    content:  &#39;&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-top: 50px solid #0f0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-bottom: 0 solid #0f0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-left: 100px solid transparent;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-right: 100px solid transparent;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    position: absolute;</span></span>
<span class="line"><span style="color:#e1e4e8;">    top: 100px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    left: 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/style&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;six&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.six{</span></span>
<span class="line"><span style="color:#24292e;">    width:200px;</span></span>
<span class="line"><span style="color:#24292e;">    height:100px;</span></span>
<span class="line"><span style="color:#24292e;">    background-color:#f00;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    margin: 200px auto;</span></span>
<span class="line"><span style="color:#24292e;">    position: relative;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.six::before{</span></span>
<span class="line"><span style="color:#24292e;">    content:  &#39;&#39;;</span></span>
<span class="line"><span style="color:#24292e;">    border-top: 0 solid #0f0;</span></span>
<span class="line"><span style="color:#24292e;">    border-bottom: 50px solid #0f0;</span></span>
<span class="line"><span style="color:#24292e;">    border-left: 100px solid transparent;</span></span>
<span class="line"><span style="color:#24292e;">    border-right: 100px solid transparent;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    position: absolute;</span></span>
<span class="line"><span style="color:#24292e;">    top: -50px;</span></span>
<span class="line"><span style="color:#24292e;">    left: 0;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.six::after{</span></span>
<span class="line"><span style="color:#24292e;">    content:  &#39;&#39;;</span></span>
<span class="line"><span style="color:#24292e;">    border-top: 50px solid #0f0;</span></span>
<span class="line"><span style="color:#24292e;">    border-bottom: 0 solid #0f0;</span></span>
<span class="line"><span style="color:#24292e;">    border-left: 100px solid transparent;</span></span>
<span class="line"><span style="color:#24292e;">    border-right: 100px solid transparent;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    position: absolute;</span></span>
<span class="line"><span style="color:#24292e;">    top: 100px;</span></span>
<span class="line"><span style="color:#24292e;">    left: 0;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;/style&gt;</span></span></code></pre></div><h3 id="css3-绘制心" tabindex="-1">CSS3 绘制心 <a class="header-anchor" href="#css3-绘制心" aria-label="Permalink to &quot;CSS3 绘制心&quot;">​</a></h3><p>绘制两个长方形，每个长方形各一方使用 <code>border-radius</code> 绘制半圆，使用 <code>transform-origin</code> 旋转焦点属性，两个长方形旋转一定角度拼接结合。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;heart&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">.heart{</span></span>
<span class="line"><span style="color:#e1e4e8;">    width:50px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    height: 80px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    background-color:#f00;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-radius: 30px 30px 0 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    transform-origin: 0 100%;</span></span>
<span class="line"><span style="color:#e1e4e8;">    transform: rotate(-45deg);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    margin: 200px auto;</span></span>
<span class="line"><span style="color:#e1e4e8;">    position: relative;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">.heart::before{</span></span>
<span class="line"><span style="color:#e1e4e8;">    content:  &#39;&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    width:50px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    height: 80px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    background-color:#f00;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-radius: 30px 30px 0 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    transform-origin: 100% 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    transform: rotate(90deg);</span></span>
<span class="line"><span style="color:#e1e4e8;">    position: absolute;</span></span>
<span class="line"><span style="color:#e1e4e8;">    top: 80px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    left: 30px;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/style&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;heart&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.heart{</span></span>
<span class="line"><span style="color:#24292e;">    width:50px;</span></span>
<span class="line"><span style="color:#24292e;">    height: 80px;</span></span>
<span class="line"><span style="color:#24292e;">    background-color:#f00;</span></span>
<span class="line"><span style="color:#24292e;">    border-radius: 30px 30px 0 0;</span></span>
<span class="line"><span style="color:#24292e;">    transform-origin: 0 100%;</span></span>
<span class="line"><span style="color:#24292e;">    transform: rotate(-45deg);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    margin: 200px auto;</span></span>
<span class="line"><span style="color:#24292e;">    position: relative;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.heart::before{</span></span>
<span class="line"><span style="color:#24292e;">    content:  &#39;&#39;;</span></span>
<span class="line"><span style="color:#24292e;">    width:50px;</span></span>
<span class="line"><span style="color:#24292e;">    height: 80px;</span></span>
<span class="line"><span style="color:#24292e;">    background-color:#f00;</span></span>
<span class="line"><span style="color:#24292e;">    border-radius: 30px 30px 0 0;</span></span>
<span class="line"><span style="color:#24292e;">    transform-origin: 100% 0;</span></span>
<span class="line"><span style="color:#24292e;">    transform: rotate(90deg);</span></span>
<span class="line"><span style="color:#24292e;">    position: absolute;</span></span>
<span class="line"><span style="color:#24292e;">    top: 80px;</span></span>
<span class="line"><span style="color:#24292e;">    left: 30px;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;/style&gt;</span></span></code></pre></div><h3 id="css3-绘制蛋形" tabindex="-1">CSS3 绘制蛋形 <a class="header-anchor" href="#css3-绘制蛋形" aria-label="Permalink to &quot;CSS3 绘制蛋形&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;egg&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">.egg{</span></span>
<span class="line"><span style="color:#e1e4e8;">    width: 126px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    height:180px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    background-color:#f00;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    margin: 200px auto;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/style&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;egg&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.egg{</span></span>
<span class="line"><span style="color:#24292e;">    width: 126px;</span></span>
<span class="line"><span style="color:#24292e;">    height:180px;</span></span>
<span class="line"><span style="color:#24292e;">    background-color:#f00;</span></span>
<span class="line"><span style="color:#24292e;">    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    margin: 200px auto;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;/style&gt;</span></span></code></pre></div><h3 id="css3-绘制太极阴阳图" tabindex="-1">CSS3 绘制太极阴阳图 <a class="header-anchor" href="#css3-绘制太极阴阳图" aria-label="Permalink to &quot;CSS3 绘制太极阴阳图&quot;">​</a></h3><p>绘制一个圆形，使用伪元素设置两个小圆，结合相对定位和绝对定位拼接。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;taiji&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">body{</span></span>
<span class="line"><span style="color:#e1e4e8;">    background-color:#ccc;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">.taiji{</span></span>
<span class="line"><span style="color:#e1e4e8;">    width:150px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    height:300px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-radius: 50%;</span></span>
<span class="line"><span style="color:#e1e4e8;">    background-color: #fff;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-left:  150px solid #000;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    margin: 200px auto;</span></span>
<span class="line"><span style="color:#e1e4e8;">    position: relative;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">.taiji::before{</span></span>
<span class="line"><span style="color:#e1e4e8;">    content:  &#39;&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    width: 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    height: 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    padding: 25px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-radius: 50%;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border: 50px solid #000;</span></span>
<span class="line"><span style="color:#e1e4e8;">    background-color: #fff;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    position: absolute;</span></span>
<span class="line"><span style="color:#e1e4e8;">    left: -75px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    top: 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">.taiji::after{</span></span>
<span class="line"><span style="color:#e1e4e8;">    content:  &#39;&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    width: 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    height: 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    padding: 25px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border-radius: 50%;</span></span>
<span class="line"><span style="color:#e1e4e8;">    border: 50px solid #fff;</span></span>
<span class="line"><span style="color:#e1e4e8;">    background-color: #000;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    position: absolute;</span></span>
<span class="line"><span style="color:#e1e4e8;">    top: 150px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    left: -75px;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/style&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;taiji&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">body{</span></span>
<span class="line"><span style="color:#24292e;">    background-color:#ccc;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.taiji{</span></span>
<span class="line"><span style="color:#24292e;">    width:150px;</span></span>
<span class="line"><span style="color:#24292e;">    height:300px;</span></span>
<span class="line"><span style="color:#24292e;">    border-radius: 50%;</span></span>
<span class="line"><span style="color:#24292e;">    background-color: #fff;</span></span>
<span class="line"><span style="color:#24292e;">    border-left:  150px solid #000;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    margin: 200px auto;</span></span>
<span class="line"><span style="color:#24292e;">    position: relative;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.taiji::before{</span></span>
<span class="line"><span style="color:#24292e;">    content:  &#39;&#39;;</span></span>
<span class="line"><span style="color:#24292e;">    width: 0;</span></span>
<span class="line"><span style="color:#24292e;">    height: 0;</span></span>
<span class="line"><span style="color:#24292e;">    padding: 25px;</span></span>
<span class="line"><span style="color:#24292e;">    border-radius: 50%;</span></span>
<span class="line"><span style="color:#24292e;">    border: 50px solid #000;</span></span>
<span class="line"><span style="color:#24292e;">    background-color: #fff;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    position: absolute;</span></span>
<span class="line"><span style="color:#24292e;">    left: -75px;</span></span>
<span class="line"><span style="color:#24292e;">    top: 0;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.taiji::after{</span></span>
<span class="line"><span style="color:#24292e;">    content:  &#39;&#39;;</span></span>
<span class="line"><span style="color:#24292e;">    width: 0;</span></span>
<span class="line"><span style="color:#24292e;">    height: 0;</span></span>
<span class="line"><span style="color:#24292e;">    padding: 25px;</span></span>
<span class="line"><span style="color:#24292e;">    border-radius: 50%;</span></span>
<span class="line"><span style="color:#24292e;">    border: 50px solid #fff;</span></span>
<span class="line"><span style="color:#24292e;">    background-color: #000;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    position: absolute;</span></span>
<span class="line"><span style="color:#24292e;">    top: 150px;</span></span>
<span class="line"><span style="color:#24292e;">    left: -75px;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;/style&gt;</span></span></code></pre></div>`,60),o=[p];function t(c,r,i,y,d,g){return n(),a("div",null,o)}const u=s(l,[["render",t]]);export{b as __pageData,u as default};
