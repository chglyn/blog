import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.419948d5.js";const g=JSON.parse('{"title":"学习React","description":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。","frontmatter":{"title":"学习React","editLink":true,"head":[["meta",{"name":"description","content":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。"}],["meta",{"name":"keywords","content":"JavaScript,React,JXS"}]]},"headers":[],"relativePath":"note/base-react16.md","filePath":"note/base-react16.md"}'),l={name:"note/base-react16.md"},p=e(`<h3 id="编写-todolist-列表" tabindex="-1">编写 ToDoList 列表 <a class="header-anchor" href="#编写-todolist-列表" aria-label="Permalink to &quot;编写 ToDoList 列表&quot;">​</a></h3><p>根据官网提示自行安装 <code>create-react-app</code> 项目。</p><h3 id="编写-helloword-组件" tabindex="-1">编写 HelloWord 组件 <a class="header-anchor" href="#编写-helloword-组件" aria-label="Permalink to &quot;编写 HelloWord 组件&quot;">​</a></h3><p><code>react</code> 编写组件提供两种方式，一种为 <code>class</code> 组件形式，也叫有状态组件；一种为 <code>function</code> 组件形式，也叫做无状态组件。</p><p>其中，<code>class</code> 组件形式如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React, {Component} from &#39;react&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    class HelloWord extends Component() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        constructor(props) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            super(props)</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        return &lt;div&gt;Hello Word&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React, {Component} from &#39;react&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    class HelloWord extends Component() {</span></span>
<span class="line"><span style="color:#24292e;">        constructor(props) {</span></span>
<span class="line"><span style="color:#24292e;">            super(props)</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        return &lt;div&gt;Hello Word&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><p><code>function</code> 组件形式如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React from &#39;react&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    function HelloWord() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return &lt;div&gt;Hello Word&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React from &#39;react&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    function HelloWord() {</span></span>
<span class="line"><span style="color:#24292e;">        return &lt;div&gt;Hello Word&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><p>如果返回内容为多行，可以在 <code>return</code> 后添加 <code>( ...代码 )</code>，<code>class</code> 组件也是如此， 即：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React from &#39;react&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    function HelloWord() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return (</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;div&gt;Hello Word&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        )</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React from &#39;react&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    function HelloWord() {</span></span>
<span class="line"><span style="color:#24292e;">        return (</span></span>
<span class="line"><span style="color:#24292e;">            &lt;div&gt;Hello Word&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">        )</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h3 id="jxs-语法" tabindex="-1">JXS 语法 <a class="header-anchor" href="#jxs-语法" aria-label="Permalink to &quot;JXS 语法&quot;">​</a></h3><p>在 <code>react</code> 组件中使用 <code>JXS</code> 注释内容有两种方式；</p><ul><li>一种为单行注释</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React from &#39;react&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    function HelloWord() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return (</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 注释</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;div&gt;Hello Word&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        )</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React from &#39;react&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    function HelloWord() {</span></span>
<span class="line"><span style="color:#24292e;">        return (</span></span>
<span class="line"><span style="color:#24292e;">            // 注释</span></span>
<span class="line"><span style="color:#24292e;">            &lt;div&gt;Hello Word&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">        )</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><ul><li>一种为多行注释</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React from &#39;react&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // function 组件</span></span>
<span class="line"><span style="color:#e1e4e8;">    function HelloWord() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return (</span></span>
<span class="line"><span style="color:#e1e4e8;">            {/*</span></span>
<span class="line"><span style="color:#e1e4e8;">                注释</span></span>
<span class="line"><span style="color:#e1e4e8;">            */}</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;div&gt;Hello Word&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        )</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React from &#39;react&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // function 组件</span></span>
<span class="line"><span style="color:#24292e;">    function HelloWord() {</span></span>
<span class="line"><span style="color:#24292e;">        return (</span></span>
<span class="line"><span style="color:#24292e;">            {/*</span></span>
<span class="line"><span style="color:#24292e;">                注释</span></span>
<span class="line"><span style="color:#24292e;">            */}</span></span>
<span class="line"><span style="color:#24292e;">            &lt;div&gt;Hello Word&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">        )</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><p>编写标签，给标签添加类名需要注意使用 <code>className</code>，即</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React from &#39;react&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    function HelloWord() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return (</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;div className=&quot;box&quot;&gt;Hello Word&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        )</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React from &#39;react&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    function HelloWord() {</span></span>
<span class="line"><span style="color:#24292e;">        return (</span></span>
<span class="line"><span style="color:#24292e;">            &lt;div className=&quot;box&quot;&gt;Hello Word&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">        )</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><p>使用 <code>label</code> 时，注意使用 <code>htmlFor</code>，即：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React from &#39;react&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    function HelloWord() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return (</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;label htmlFor=&quot;fename&quot;&gt;&lt;/label&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;input type=&quot;text&quot; name=&quot;name&quot; id=&quot;fename&quot; /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        )</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React from &#39;react&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    function HelloWord() {</span></span>
<span class="line"><span style="color:#24292e;">        return (</span></span>
<span class="line"><span style="color:#24292e;">            &lt;div&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;label htmlFor=&quot;fename&quot;&gt;&lt;/label&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;input type=&quot;text&quot; name=&quot;name&quot; id=&quot;fename&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">        )</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><p>解析 <code>html</code> 标签内容使用 <code>dangerouslySetInnerHTML</code>，即：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React from &#39;react&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    const html = &quot;&lt;h2&gt;标签&lt;/h2&gt;&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    function HelloWord() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return (</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;div dangerouslySetInnerHTML={{_html:html}}&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        )</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React from &#39;react&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    const html = &quot;&lt;h2&gt;标签&lt;/h2&gt;&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    function HelloWord() {</span></span>
<span class="line"><span style="color:#24292e;">        return (</span></span>
<span class="line"><span style="color:#24292e;">            &lt;div dangerouslySetInnerHTML={{_html:html}}&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">        )</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h3 id="编写-todolist-组件" tabindex="-1">编写 <code>ToDoList</code> 组件 <a class="header-anchor" href="#编写-todolist-组件" aria-label="Permalink to &quot;编写 \`ToDoList\` 组件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React, {Component} from &#39;react&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    class ToDoList extends Component{</span></span>
<span class="line"><span style="color:#e1e4e8;">        constructor(props) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            super(props)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        return (</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;li&gt;内容一&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;li&gt;内容二&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        )</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    export default ToDoList</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React, {Component} from &#39;react&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    class ToDoList extends Component{</span></span>
<span class="line"><span style="color:#24292e;">        constructor(props) {</span></span>
<span class="line"><span style="color:#24292e;">            super(props)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        return (</span></span>
<span class="line"><span style="color:#24292e;">            &lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;li&gt;内容一&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;li&gt;内容二&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">        )</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    export default ToDoList</span></span></code></pre></div><p>编写完成，在该项目根目录 <code>index.js</code> 引入该组件后在界面可查看内容。</p><h3 id="删除-todolist" tabindex="-1">删除 ToDoList <a class="header-anchor" href="#删除-todolist" aria-label="Permalink to &quot;删除 ToDoList&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React, {Component} from &#39;react&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    class ToDoList extends Component{</span></span>
<span class="line"><span style="color:#e1e4e8;">        constructor(props) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            super(props)</span></span>
<span class="line"><span style="color:#e1e4e8;">            this.state={</span></span>
<span class="line"><span style="color:#e1e4e8;">                list: [&#39;内容一&#39;, &#39;内容二&#39;]</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        return (</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    this.state.list.map((item, index) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">                        return (</span></span>
<span class="line"><span style="color:#e1e4e8;">                            &lt;li </span></span>
<span class="line"><span style="color:#e1e4e8;">                                key={item+index} </span></span>
<span class="line"><span style="color:#e1e4e8;">                                onClick=&quot;this.deleteItem.bind(this, index)&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                                {item}</span></span>
<span class="line"><span style="color:#e1e4e8;">                            &lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                        )</span></span>
<span class="line"><span style="color:#e1e4e8;">                    })</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        )</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        deleteItem(index) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            let list = this.state.list;</span></span>
<span class="line"><span style="color:#e1e4e8;">            list.splice(1, index);</span></span>
<span class="line"><span style="color:#e1e4e8;">            this.setState({</span></span>
<span class="line"><span style="color:#e1e4e8;">                list: list</span></span>
<span class="line"><span style="color:#e1e4e8;">            })</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    export default ToDoList</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React, {Component} from &#39;react&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    class ToDoList extends Component{</span></span>
<span class="line"><span style="color:#24292e;">        constructor(props) {</span></span>
<span class="line"><span style="color:#24292e;">            super(props)</span></span>
<span class="line"><span style="color:#24292e;">            this.state={</span></span>
<span class="line"><span style="color:#24292e;">                list: [&#39;内容一&#39;, &#39;内容二&#39;]</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        return (</span></span>
<span class="line"><span style="color:#24292e;">            &lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">                {</span></span>
<span class="line"><span style="color:#24292e;">                    this.state.list.map((item, index) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">                        return (</span></span>
<span class="line"><span style="color:#24292e;">                            &lt;li </span></span>
<span class="line"><span style="color:#24292e;">                                key={item+index} </span></span>
<span class="line"><span style="color:#24292e;">                                onClick=&quot;this.deleteItem.bind(this, index)&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                                {item}</span></span>
<span class="line"><span style="color:#24292e;">                            &lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">                        )</span></span>
<span class="line"><span style="color:#24292e;">                    })</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">        )</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        deleteItem(index) {</span></span>
<span class="line"><span style="color:#24292e;">            let list = this.state.list;</span></span>
<span class="line"><span style="color:#24292e;">            list.splice(1, index);</span></span>
<span class="line"><span style="color:#24292e;">            this.setState({</span></span>
<span class="line"><span style="color:#24292e;">                list: list</span></span>
<span class="line"><span style="color:#24292e;">            })</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    export default ToDoList</span></span></code></pre></div><h3 id="添加-todolist-列表内容" tabindex="-1">添加 ToDoList 列表内容 <a class="header-anchor" href="#添加-todolist-列表内容" aria-label="Permalink to &quot;添加 ToDoList 列表内容&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React, {Component} from &#39;react&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    class ToDoList extends Component{</span></span>
<span class="line"><span style="color:#e1e4e8;">        constructor(props) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            super(props)</span></span>
<span class="line"><span style="color:#e1e4e8;">            this.state={</span></span>
<span class="line"><span style="color:#e1e4e8;">                inputVal: &#39;&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                list: [&#39;内容一&#39;, &#39;内容二&#39;]</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        return (</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;input type=&quot;text&quot; </span></span>
<span class="line"><span style="color:#e1e4e8;">                    value={inputVal} </span></span>
<span class="line"><span style="color:#e1e4e8;">                    onChange={this.changeItem.bind(this)} /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;button onClick={this.addItem.bind(this)}&gt;click me&lt;/button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    {</span></span>
<span class="line"><span style="color:#e1e4e8;">                        this.state.list.map((item, index) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">                            return (</span></span>
<span class="line"><span style="color:#e1e4e8;">                                &lt;li </span></span>
<span class="line"><span style="color:#e1e4e8;">                                    key={item+index} </span></span>
<span class="line"><span style="color:#e1e4e8;">                                    onClick=&quot;this.deleteItem.bind(this, index)&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                                    {item}</span></span>
<span class="line"><span style="color:#e1e4e8;">                                &lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                            )</span></span>
<span class="line"><span style="color:#e1e4e8;">                        })</span></span>
<span class="line"><span style="color:#e1e4e8;">                    }</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;/input&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        )</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        changeItem(e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            this.setState({</span></span>
<span class="line"><span style="color:#e1e4e8;">                inputVal: e.target.value</span></span>
<span class="line"><span style="color:#e1e4e8;">            })</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        </span></span>
<span class="line"><span style="color:#e1e4e8;">        addItem() {</span></span>
<span class="line"><span style="color:#e1e4e8;">            this.setState({</span></span>
<span class="line"><span style="color:#e1e4e8;">                list: [...this.state.list, this.state.inputVal],</span></span>
<span class="line"><span style="color:#e1e4e8;">                inputVal: &#39;&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">            })</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        deleteItem(index) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            let list = this.state.list;</span></span>
<span class="line"><span style="color:#e1e4e8;">            list.splice(1, index);</span></span>
<span class="line"><span style="color:#e1e4e8;">            this.setState({</span></span>
<span class="line"><span style="color:#e1e4e8;">                list: list</span></span>
<span class="line"><span style="color:#e1e4e8;">            })</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    export default ToDoList</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React, {Component} from &#39;react&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    class ToDoList extends Component{</span></span>
<span class="line"><span style="color:#24292e;">        constructor(props) {</span></span>
<span class="line"><span style="color:#24292e;">            super(props)</span></span>
<span class="line"><span style="color:#24292e;">            this.state={</span></span>
<span class="line"><span style="color:#24292e;">                inputVal: &#39;&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                list: [&#39;内容一&#39;, &#39;内容二&#39;]</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        return (</span></span>
<span class="line"><span style="color:#24292e;">            &lt;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;input type=&quot;text&quot; </span></span>
<span class="line"><span style="color:#24292e;">                    value={inputVal} </span></span>
<span class="line"><span style="color:#24292e;">                    onChange={this.changeItem.bind(this)} /&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;button onClick={this.addItem.bind(this)}&gt;click me&lt;/button&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">                    {</span></span>
<span class="line"><span style="color:#24292e;">                        this.state.list.map((item, index) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">                            return (</span></span>
<span class="line"><span style="color:#24292e;">                                &lt;li </span></span>
<span class="line"><span style="color:#24292e;">                                    key={item+index} </span></span>
<span class="line"><span style="color:#24292e;">                                    onClick=&quot;this.deleteItem.bind(this, index)&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                                    {item}</span></span>
<span class="line"><span style="color:#24292e;">                                &lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">                            )</span></span>
<span class="line"><span style="color:#24292e;">                        })</span></span>
<span class="line"><span style="color:#24292e;">                    }</span></span>
<span class="line"><span style="color:#24292e;">                &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/input&gt;</span></span>
<span class="line"><span style="color:#24292e;">        )</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        changeItem(e) {</span></span>
<span class="line"><span style="color:#24292e;">            this.setState({</span></span>
<span class="line"><span style="color:#24292e;">                inputVal: e.target.value</span></span>
<span class="line"><span style="color:#24292e;">            })</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        </span></span>
<span class="line"><span style="color:#24292e;">        addItem() {</span></span>
<span class="line"><span style="color:#24292e;">            this.setState({</span></span>
<span class="line"><span style="color:#24292e;">                list: [...this.state.list, this.state.inputVal],</span></span>
<span class="line"><span style="color:#24292e;">                inputVal: &#39;&#39;</span></span>
<span class="line"><span style="color:#24292e;">            })</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        deleteItem(index) {</span></span>
<span class="line"><span style="color:#24292e;">            let list = this.state.list;</span></span>
<span class="line"><span style="color:#24292e;">            list.splice(1, index);</span></span>
<span class="line"><span style="color:#24292e;">            this.setState({</span></span>
<span class="line"><span style="color:#24292e;">                list: list</span></span>
<span class="line"><span style="color:#24292e;">            })</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    export default ToDoList</span></span></code></pre></div><h3 id="父子组件传值" tabindex="-1">父子组件传值 <a class="header-anchor" href="#父子组件传值" aria-label="Permalink to &quot;父子组件传值&quot;">​</a></h3><p>父组件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React, {Component} from &#39;react&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    import ToDoListItem from &#39;ToDoListItem&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    class ToDoList extends Component{</span></span>
<span class="line"><span style="color:#e1e4e8;">        constructor(props) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            super(props)</span></span>
<span class="line"><span style="color:#e1e4e8;">            this.state={</span></span>
<span class="line"><span style="color:#e1e4e8;">                inputVal: &#39;&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                list: [&#39;内容一&#39;, &#39;内容二&#39;]</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        return (</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;input type=&quot;text&quot; </span></span>
<span class="line"><span style="color:#e1e4e8;">                    value={inputVal} </span></span>
<span class="line"><span style="color:#e1e4e8;">                    onChange={this.changeItem.bind(this)} /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;button onClick={this.addItem.bind(this)}&gt;click me&lt;/button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    {</span></span>
<span class="line"><span style="color:#e1e4e8;">                        this.state.list.map((item, index) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">                            return (</span></span>
<span class="line"><span style="color:#e1e4e8;">                                &lt;ToDoListItem </span></span>
<span class="line"><span style="color:#e1e4e8;">                                    index={index}</span></span>
<span class="line"><span style="color:#e1e4e8;">                                    content={item} </span></span>
<span class="line"><span style="color:#e1e4e8;">                                    deleteItem={this.deleteItem.bind(this)}</span></span>
<span class="line"><span style="color:#e1e4e8;">                                    key={item+index} /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                            )</span></span>
<span class="line"><span style="color:#e1e4e8;">                        })</span></span>
<span class="line"><span style="color:#e1e4e8;">                    }</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;/input&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        )</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        changeItem(e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            this.setState({</span></span>
<span class="line"><span style="color:#e1e4e8;">                inputVal: e.target.value</span></span>
<span class="line"><span style="color:#e1e4e8;">            })</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        </span></span>
<span class="line"><span style="color:#e1e4e8;">        addItem() {</span></span>
<span class="line"><span style="color:#e1e4e8;">            this.setState({</span></span>
<span class="line"><span style="color:#e1e4e8;">                list: [...this.state.list, this.state.inputVal],</span></span>
<span class="line"><span style="color:#e1e4e8;">                inputVal: &#39;&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">            })</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        deleteItem(index) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            let list = this.state.list;</span></span>
<span class="line"><span style="color:#e1e4e8;">            list.splice(1, index);</span></span>
<span class="line"><span style="color:#e1e4e8;">            this.setState({</span></span>
<span class="line"><span style="color:#e1e4e8;">                list: list</span></span>
<span class="line"><span style="color:#e1e4e8;">            })</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    export default ToDoList</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React, {Component} from &#39;react&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    import ToDoListItem from &#39;ToDoListItem&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    class ToDoList extends Component{</span></span>
<span class="line"><span style="color:#24292e;">        constructor(props) {</span></span>
<span class="line"><span style="color:#24292e;">            super(props)</span></span>
<span class="line"><span style="color:#24292e;">            this.state={</span></span>
<span class="line"><span style="color:#24292e;">                inputVal: &#39;&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                list: [&#39;内容一&#39;, &#39;内容二&#39;]</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        return (</span></span>
<span class="line"><span style="color:#24292e;">            &lt;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;input type=&quot;text&quot; </span></span>
<span class="line"><span style="color:#24292e;">                    value={inputVal} </span></span>
<span class="line"><span style="color:#24292e;">                    onChange={this.changeItem.bind(this)} /&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;button onClick={this.addItem.bind(this)}&gt;click me&lt;/button&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">                    {</span></span>
<span class="line"><span style="color:#24292e;">                        this.state.list.map((item, index) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">                            return (</span></span>
<span class="line"><span style="color:#24292e;">                                &lt;ToDoListItem </span></span>
<span class="line"><span style="color:#24292e;">                                    index={index}</span></span>
<span class="line"><span style="color:#24292e;">                                    content={item} </span></span>
<span class="line"><span style="color:#24292e;">                                    deleteItem={this.deleteItem.bind(this)}</span></span>
<span class="line"><span style="color:#24292e;">                                    key={item+index} /&gt;</span></span>
<span class="line"><span style="color:#24292e;">                            )</span></span>
<span class="line"><span style="color:#24292e;">                        })</span></span>
<span class="line"><span style="color:#24292e;">                    }</span></span>
<span class="line"><span style="color:#24292e;">                &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/input&gt;</span></span>
<span class="line"><span style="color:#24292e;">        )</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        changeItem(e) {</span></span>
<span class="line"><span style="color:#24292e;">            this.setState({</span></span>
<span class="line"><span style="color:#24292e;">                inputVal: e.target.value</span></span>
<span class="line"><span style="color:#24292e;">            })</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        </span></span>
<span class="line"><span style="color:#24292e;">        addItem() {</span></span>
<span class="line"><span style="color:#24292e;">            this.setState({</span></span>
<span class="line"><span style="color:#24292e;">                list: [...this.state.list, this.state.inputVal],</span></span>
<span class="line"><span style="color:#24292e;">                inputVal: &#39;&#39;</span></span>
<span class="line"><span style="color:#24292e;">            })</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        deleteItem(index) {</span></span>
<span class="line"><span style="color:#24292e;">            let list = this.state.list;</span></span>
<span class="line"><span style="color:#24292e;">            list.splice(1, index);</span></span>
<span class="line"><span style="color:#24292e;">            this.setState({</span></span>
<span class="line"><span style="color:#24292e;">                list: list</span></span>
<span class="line"><span style="color:#24292e;">            })</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    export default ToDoList</span></span></code></pre></div><p>子组件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React, {Component} from &#39;react&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    class TodoListItem extends Component{</span></span>
<span class="line"><span style="color:#e1e4e8;">        constructor(props) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            super(props)</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        shouldComponentUpdate(nextProps, nextState) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            if(this.props.content !== nextState.content) return true</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        return (</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;li onClick={this.deleteItem.bind(this)}&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                {this.props.content}</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        )</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        deleteItem() {</span></span>
<span class="line"><span style="color:#e1e4e8;">            this.props.deleteItem(this.props.index)</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    export default TodoListItem</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React, {Component} from &#39;react&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    class TodoListItem extends Component{</span></span>
<span class="line"><span style="color:#24292e;">        constructor(props) {</span></span>
<span class="line"><span style="color:#24292e;">            super(props)</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        shouldComponentUpdate(nextProps, nextState) {</span></span>
<span class="line"><span style="color:#24292e;">            if(this.props.content !== nextState.content) return true</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        return (</span></span>
<span class="line"><span style="color:#24292e;">            &lt;li onClick={this.deleteItem.bind(this)}&gt;</span></span>
<span class="line"><span style="color:#24292e;">                {this.props.content}</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">        )</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        deleteItem() {</span></span>
<span class="line"><span style="color:#24292e;">            this.props.deleteItem(this.props.index)</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    export default TodoListItem</span></span></code></pre></div><h3 id="propstypes-校验传递的值" tabindex="-1">PropsTypes 校验传递的值 <a class="header-anchor" href="#propstypes-校验传递的值" aria-label="Permalink to &quot;PropsTypes 校验传递的值&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React, {Component} from &#39;react&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    import PropTypes from &#39;prop-types&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    class TodoListItem extends Component{</span></span>
<span class="line"><span style="color:#e1e4e8;">        constructor(props) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            super(props)</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        return (</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;li onClick={this.deleteItem.bind(this)}&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                {this.props.content}</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        )</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        deleteItem() {</span></span>
<span class="line"><span style="color:#e1e4e8;">            this.props.deleteItem(this.props.index)</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    TodoListItem.propTypes = {</span></span>
<span class="line"><span style="color:#e1e4e8;">        content: PropTypes.string</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /*</span></span>
<span class="line"><span style="color:#e1e4e8;">    TodoListItem.defaultProp = {</span></span>
<span class="line"><span style="color:#e1e4e8;">        content: &#39;今天天气很不错~&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    */</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    export default TodoListItem</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React, {Component} from &#39;react&#39;</span></span>
<span class="line"><span style="color:#24292e;">    import PropTypes from &#39;prop-types&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    class TodoListItem extends Component{</span></span>
<span class="line"><span style="color:#24292e;">        constructor(props) {</span></span>
<span class="line"><span style="color:#24292e;">            super(props)</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        return (</span></span>
<span class="line"><span style="color:#24292e;">            &lt;li onClick={this.deleteItem.bind(this)}&gt;</span></span>
<span class="line"><span style="color:#24292e;">                {this.props.content}</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">        )</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        deleteItem() {</span></span>
<span class="line"><span style="color:#24292e;">            this.props.deleteItem(this.props.index)</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    TodoListItem.propTypes = {</span></span>
<span class="line"><span style="color:#24292e;">        content: PropTypes.string</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /*</span></span>
<span class="line"><span style="color:#24292e;">    TodoListItem.defaultProp = {</span></span>
<span class="line"><span style="color:#24292e;">        content: &#39;今天天气很不错~&#39;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    */</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    export default TodoListItem</span></span></code></pre></div><h3 id="ref属性" tabindex="-1">ref属性 <a class="header-anchor" href="#ref属性" aria-label="Permalink to &quot;ref属性&quot;">​</a></h3><p>使用 <code>ref</code> 获取值。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React, {Component} from &#39;react&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    class ToDoList extends Component{</span></span>
<span class="line"><span style="color:#e1e4e8;">        constructor(props) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            super(props)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            this.state={</span></span>
<span class="line"><span style="color:#e1e4e8;">                inputVal: &#39;&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                list: []</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        return (</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;input type=&quot;text&quot; </span></span>
<span class="line"><span style="color:#e1e4e8;">                    value={inputVal} </span></span>
<span class="line"><span style="color:#e1e4e8;">                    ref={(input) =&gt; {this.input=input}}</span></span>
<span class="line"><span style="color:#e1e4e8;">                    onChange={this.changeItem.bind(this)} /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;button onClick={this.addItem.bind(this)}&gt;click me&lt;/button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    {</span></span>
<span class="line"><span style="color:#e1e4e8;">                        this.state.list.map((item, index) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">                            return &lt;li key={index+item}&gt;{item}&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                        })</span></span>
<span class="line"><span style="color:#e1e4e8;">                    }</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;/&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        )</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        changeItem() {</span></span>
<span class="line"><span style="color:#e1e4e8;">            this.setState({</span></span>
<span class="line"><span style="color:#e1e4e8;">                inputVal: this.input.value</span></span>
<span class="line"><span style="color:#e1e4e8;">            }, () =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">                // 回调函数中获取最新list数据 ...</span></span>
<span class="line"><span style="color:#e1e4e8;">            })</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        addItem() {</span></span>
<span class="line"><span style="color:#e1e4e8;">            this.setState({</span></span>
<span class="line"><span style="color:#e1e4e8;">                list: [...this.state.list, this.state.inputVal],</span></span>
<span class="line"><span style="color:#e1e4e8;">                inputVal: &#39;&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">            })</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React, {Component} from &#39;react&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    class ToDoList extends Component{</span></span>
<span class="line"><span style="color:#24292e;">        constructor(props) {</span></span>
<span class="line"><span style="color:#24292e;">            super(props)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            this.state={</span></span>
<span class="line"><span style="color:#24292e;">                inputVal: &#39;&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                list: []</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        return (</span></span>
<span class="line"><span style="color:#24292e;">            &lt;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;input type=&quot;text&quot; </span></span>
<span class="line"><span style="color:#24292e;">                    value={inputVal} </span></span>
<span class="line"><span style="color:#24292e;">                    ref={(input) =&gt; {this.input=input}}</span></span>
<span class="line"><span style="color:#24292e;">                    onChange={this.changeItem.bind(this)} /&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;button onClick={this.addItem.bind(this)}&gt;click me&lt;/button&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">                    {</span></span>
<span class="line"><span style="color:#24292e;">                        this.state.list.map((item, index) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">                            return &lt;li key={index+item}&gt;{item}&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">                        })</span></span>
<span class="line"><span style="color:#24292e;">                    }</span></span>
<span class="line"><span style="color:#24292e;">                &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/&gt;</span></span>
<span class="line"><span style="color:#24292e;">        )</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        changeItem() {</span></span>
<span class="line"><span style="color:#24292e;">            this.setState({</span></span>
<span class="line"><span style="color:#24292e;">                inputVal: this.input.value</span></span>
<span class="line"><span style="color:#24292e;">            }, () =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">                // 回调函数中获取最新list数据 ...</span></span>
<span class="line"><span style="color:#24292e;">            })</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        addItem() {</span></span>
<span class="line"><span style="color:#24292e;">            this.setState({</span></span>
<span class="line"><span style="color:#24292e;">                list: [...this.state.list, this.state.inputVal],</span></span>
<span class="line"><span style="color:#24292e;">                inputVal: &#39;&#39;</span></span>
<span class="line"><span style="color:#24292e;">            })</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h3 id="生命周期函数" tabindex="-1">生命周期函数 <a class="header-anchor" href="#生命周期函数" aria-label="Permalink to &quot;生命周期函数&quot;">​</a></h3><p>生命周期函数就是在某一时刻自动执行的函数。</p><ul><li><p>初始化阶段 （<code>Initialization</code>）</p></li><li><p>挂载阶段（<code>Mounting</code>）</p></li></ul><ul><li><code>componentWillMount</code>：组件即将挂在界面前执行。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">componentWillMount() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        console.log(\`componentWillMount\`)</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">componentWillMount() {</span></span>
<span class="line"><span style="color:#24292e;">        console.log(\`componentWillMount\`)</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><ul><li><code>render</code>：页面 <code>props</code> 或 <code>state</code> 发生变化时执行。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">render() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        console.log(\`render\`)</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">render() {</span></span>
<span class="line"><span style="color:#24292e;">        console.log(\`render\`)</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><ul><li><code>componentDidMount</code>：组件挂在完成时执行。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">componentDidMount() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        console.log(\`componentDidMount\`)</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">componentDidMount() {</span></span>
<span class="line"><span style="color:#24292e;">        console.log(\`componentDidMount\`)</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><ul><li><p>请求接口可以放在该生命周期中。</p></li><li><p>更新阶段 （<code>Updation</code>）</p></li></ul><ul><li>shouldComponentUpdate：在组件更新前自动执行。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">shouldComponentUpdate() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        console.log(\`shouldComponentUpdate\`)</span></span>
<span class="line"><span style="color:#e1e4e8;">        return true</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">shouldComponentUpdate() {</span></span>
<span class="line"><span style="color:#24292e;">        console.log(\`shouldComponentUpdate\`)</span></span>
<span class="line"><span style="color:#24292e;">        return true</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><p>要求必须返回布尔值。</p><ul><li>componentWillUpdate：组件更新时执行。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">componentWillUpdate() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        console.log(\`componentWillUpdate\`)</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">componentWillUpdate() {</span></span>
<span class="line"><span style="color:#24292e;">        console.log(\`componentWillUpdate\`)</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><ul><li>componentDidUpdate：组件更新后执行。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">componentDidUpdate() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        console.log(\`componentDidUpdate\`)</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">componentDidUpdate() {</span></span>
<span class="line"><span style="color:#24292e;">        console.log(\`componentDidUpdate\`)</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><ul><li>componentWillReceiveProps：在子组件中使用，子组件接收 <code>prop</code> 该函数就会执行。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">componentWillReceiveProps() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        console.log(\`componentWillReceiveProps\`)</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">componentWillReceiveProps() {</span></span>
<span class="line"><span style="color:#24292e;">        console.log(\`componentWillReceiveProps\`)</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><ul><li><p>子组件接收到父组件传递过来的参数，父组件render函数重新被执行，这个生命周期就会被执行。</p></li><li><p>也就是说这个组件第一次存在于Dom中，函数是不会被执行的;</p></li><li><p>如果已经存在于Dom中，函数才会被执行。</p></li></ul>`,59),o=[p];function t(c,i,r,y,d,u){return n(),a("div",null,o)}const m=s(l,[["render",t]]);export{g as __pageData,m as default};
