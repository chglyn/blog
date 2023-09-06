import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.419948d5.js";const m=JSON.parse('{"title":"学习React Router","description":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。","frontmatter":{"title":"学习React Router","editLink":true,"head":[["meta",{"name":"description","content":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。"}],["meta",{"name":"keywords","content":"JavaScript,React,React Router,Router"}]]},"headers":[],"relativePath":"note/base-reactRouter.md","filePath":"note/base-reactRouter.md"}'),l={name:"note/base-reactRouter.md"},p=e(`<h3 id="reactrouter-配置" tabindex="-1">ReactRouter 配置 <a class="header-anchor" href="#reactrouter-配置" aria-label="Permalink to &quot;ReactRouter 配置&quot;">​</a></h3><p>首先安装 <code>react</code> 和 <code>react-router-dom</code>。</p><ul><li>路由配置</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">//AppRouter</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">import React from &#39;react&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">import { BrowserRouter as Router, Route, Link } from &#39;react-router-dom&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function Index() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return (</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;h2&gt;首页&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    )</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function List() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return (</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;h2&gt;列表页&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    )</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function AppRouter() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return (</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;Router&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &lt;Link to=&quot;/&quot;&gt;首页&lt;/Link&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &lt;Link to=&#39;/list/&#39;&gt;列表&lt;/Link&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;Route path=&quot;/&quot; exact component={Index} /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;Route path=&quot;/list/&quot; component={List} /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;/Router&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    )</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">export default AppRouter;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//AppRouter</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">import React from &#39;react&#39;</span></span>
<span class="line"><span style="color:#24292e;">import { BrowserRouter as Router, Route, Link } from &#39;react-router-dom&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function Index() {</span></span>
<span class="line"><span style="color:#24292e;">    return (</span></span>
<span class="line"><span style="color:#24292e;">        &lt;h2&gt;首页&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#24292e;">    )</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function List() {</span></span>
<span class="line"><span style="color:#24292e;">    return (</span></span>
<span class="line"><span style="color:#24292e;">        &lt;h2&gt;列表页&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#24292e;">    )</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function AppRouter() {</span></span>
<span class="line"><span style="color:#24292e;">    return (</span></span>
<span class="line"><span style="color:#24292e;">        &lt;Router&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;li&gt;</span></span>
<span class="line"><span style="color:#24292e;">                    &lt;Link to=&quot;/&quot;&gt;首页&lt;/Link&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;li&gt;</span></span>
<span class="line"><span style="color:#24292e;">                    &lt;Link to=&#39;/list/&#39;&gt;列表&lt;/Link&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;Route path=&quot;/&quot; exact component={Index} /&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;Route path=&quot;/list/&quot; component={List} /&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/Router&gt;</span></span>
<span class="line"><span style="color:#24292e;">    )</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">export default AppRouter;</span></span></code></pre></div><p><em>exact</em>：表示精确匹配。</p><h3 id="reactrouter-拆分" tabindex="-1">ReactRouter 拆分 <a class="header-anchor" href="#reactrouter-拆分" aria-label="Permalink to &quot;ReactRouter 拆分&quot;">​</a></h3><p>模拟真实项目，每个菜单是一个单独的路由文件。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">//AppRouter</span></span>
<span class="line"><span style="color:#e1e4e8;">    import React from &#39;react&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    import { BrowserRouter as Router, Route, Link } from &#39;react-router-dom&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    import Index from &#39;./pages/index&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    import List from &#39;./pages/list&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    function AppRouter() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return (</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;Router&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &lt;li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                        &lt;Link to=&quot;/&quot;&gt;首页&lt;/Link&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &lt;li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                        &lt;Link to=&#39;/list/&#39;&gt;列表&lt;/Link&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;Route path=&quot;/&quot; exact component={Index} /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;Route path=&quot;/list/&quot; component={List} /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;/Router&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        )</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    export default AppRouter</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//AppRouter</span></span>
<span class="line"><span style="color:#24292e;">    import React from &#39;react&#39;</span></span>
<span class="line"><span style="color:#24292e;">    import { BrowserRouter as Router, Route, Link } from &#39;react-router-dom&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    import Index from &#39;./pages/index&#39;</span></span>
<span class="line"><span style="color:#24292e;">    import List from &#39;./pages/list&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    function AppRouter() {</span></span>
<span class="line"><span style="color:#24292e;">        return (</span></span>
<span class="line"><span style="color:#24292e;">            &lt;Router&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">                    &lt;li&gt;</span></span>
<span class="line"><span style="color:#24292e;">                        &lt;Link to=&quot;/&quot;&gt;首页&lt;/Link&gt;</span></span>
<span class="line"><span style="color:#24292e;">                    &lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">                    &lt;li&gt;</span></span>
<span class="line"><span style="color:#24292e;">                        &lt;Link to=&#39;/list/&#39;&gt;列表&lt;/Link&gt;</span></span>
<span class="line"><span style="color:#24292e;">                    &lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;Route path=&quot;/&quot; exact component={Index} /&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;Route path=&quot;/list/&quot; component={List} /&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/Router&gt;</span></span>
<span class="line"><span style="color:#24292e;">        )</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    export default AppRouter</span></span></code></pre></div><h3 id="reactrouter-接收路由参数" tabindex="-1">ReactRouter 接收路由参数 <a class="header-anchor" href="#reactrouter-接收路由参数" aria-label="Permalink to &quot;ReactRouter 接收路由参数&quot;">​</a></h3><p>设置路由动态传值规则：</p><ul><li><p>第一步：传递值</p></li><li><p>第二步：接收值</p></li><li><p>第三步：显示内容</p></li></ul><p>在 <code>list</code> 路由配置路由参数：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React from &#39;react&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    import { BrowserRouter as Router, Route, Link } from &#39;react-router-dom&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    import Index from &#39;./pages/index&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    import List from &#39;./list/index&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    function AppRouter() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return (</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;Router&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &lt;li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                        &lt;Link to=&quot;/&quot;&gt;首页&lt;/Link&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &lt;li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                        &lt;Link to=&#39;/list/&#39;&gt;列表&lt;/Link&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;Route path=&quot;/&quot; exact component={Index} /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                {/* 设置路由参数 */}</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;Route path=&quot;/list/:id&quot; component={List} /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;/Router&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        )</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    export default AppRouter</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React from &#39;react&#39;</span></span>
<span class="line"><span style="color:#24292e;">    import { BrowserRouter as Router, Route, Link } from &#39;react-router-dom&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    import Index from &#39;./pages/index&#39;</span></span>
<span class="line"><span style="color:#24292e;">    import List from &#39;./list/index&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    function AppRouter() {</span></span>
<span class="line"><span style="color:#24292e;">        return (</span></span>
<span class="line"><span style="color:#24292e;">            &lt;Router&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">                    &lt;li&gt;</span></span>
<span class="line"><span style="color:#24292e;">                        &lt;Link to=&quot;/&quot;&gt;首页&lt;/Link&gt;</span></span>
<span class="line"><span style="color:#24292e;">                    &lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">                    &lt;li&gt;</span></span>
<span class="line"><span style="color:#24292e;">                        &lt;Link to=&#39;/list/&#39;&gt;列表&lt;/Link&gt;</span></span>
<span class="line"><span style="color:#24292e;">                    &lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;Route path=&quot;/&quot; exact component={Index} /&gt;</span></span>
<span class="line"><span style="color:#24292e;">                {/* 设置路由参数 */}</span></span>
<span class="line"><span style="color:#24292e;">                &lt;Route path=&quot;/list/:id&quot; component={List} /&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/Router&gt;</span></span>
<span class="line"><span style="color:#24292e;">        )</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    export default AppRouter</span></span></code></pre></div><p>子组件 <code>List</code> 接收路由参数：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React, {Component} from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    import {Link} from &#39;react-router-dom&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    class List extends Component {</span></span>
<span class="line"><span style="color:#e1e4e8;">        constructor(props) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            super(props)</span></span>
<span class="line"><span style="color:#e1e4e8;">            this.state = {}</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        render() { </span></span>
<span class="line"><span style="color:#e1e4e8;">            return ( </span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;h2&gt;页面分离-列表页 ---url传递的值是： {this.state.id}&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">             );</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        componentDidMount() {</span></span>
<span class="line"><span style="color:#e1e4e8;">            console.log(this.props)</span></span>
<span class="line"><span style="color:#e1e4e8;">            let id = this.props.match.params.id</span></span>
<span class="line"><span style="color:#e1e4e8;">            this.setState({id: id})</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    export default List;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React, {Component} from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#24292e;">    import {Link} from &#39;react-router-dom&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    class List extends Component {</span></span>
<span class="line"><span style="color:#24292e;">        constructor(props) {</span></span>
<span class="line"><span style="color:#24292e;">            super(props)</span></span>
<span class="line"><span style="color:#24292e;">            this.state = {}</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        render() { </span></span>
<span class="line"><span style="color:#24292e;">            return ( </span></span>
<span class="line"><span style="color:#24292e;">                &lt;h2&gt;页面分离-列表页 ---url传递的值是： {this.state.id}&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#24292e;">             );</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        componentDidMount() {</span></span>
<span class="line"><span style="color:#24292e;">            console.log(this.props)</span></span>
<span class="line"><span style="color:#24292e;">            let id = this.props.match.params.id</span></span>
<span class="line"><span style="color:#24292e;">            this.setState({id: id})</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    export default List;</span></span></code></pre></div><h3 id="reactrouter-动态传值和重定向" tabindex="-1">ReactRouter 动态传值和重定向 <a class="header-anchor" href="#reactrouter-动态传值和重定向" aria-label="Permalink to &quot;ReactRouter 动态传值和重定向&quot;">​</a></h3><p>在 <code>react</code> 中路由重定向有两种方式，一种是标签式，一种是编程式。</p><p>配置列表详情界面组件，并将该组件添加到 <code>AppRouter.js</code> 文件中。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React from &#39;react&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    function ListDetail() {</span></span>
<span class="line"><span style="color:#e1e4e8;">     return {</span></span>
<span class="line"><span style="color:#e1e4e8;">         &lt;h2&gt;详情页&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">     }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    export default ListDetail;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React from &#39;react&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    function ListDetail() {</span></span>
<span class="line"><span style="color:#24292e;">     return {</span></span>
<span class="line"><span style="color:#24292e;">         &lt;h2&gt;详情页&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#24292e;">     }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    export default ListDetail;</span></span></code></pre></div><ul><li>设置路由动态传值</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React, {Component} from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    import {Link} from &#39;react-router-dom&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    class List Component{</span></span>
<span class="line"><span style="color:#e1e4e8;">        constructor(props) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            super(props)</span></span>
<span class="line"><span style="color:#e1e4e8;">            this.state = {</span></span>
<span class="line"><span style="color:#e1e4e8;">                list: [</span></span>
<span class="line"><span style="color:#e1e4e8;">                    {cid: 126, title: &#39;个人博客1&#39;},</span></span>
<span class="line"><span style="color:#e1e4e8;">                    {cid: 666, title: &#39;个人博客2&#39;}</span></span>
<span class="line"><span style="color:#e1e4e8;">                ]</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        render() { </span></span>
<span class="line"><span style="color:#e1e4e8;">            return ( </span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &lt;h2&gt;页面分离-列表页&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                        &lt;li&gt;url动态传值&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                        {</span></span>
<span class="line"><span style="color:#e1e4e8;">                            this.state.list.map((item, index) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">                                return (</span></span>
<span class="line"><span style="color:#e1e4e8;">                                    &lt;li key={index}&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                                        &lt;Link to={&#39;/Listdetail/&#39;+item.cid}&gt;{item.title}&lt;/Link&gt; </span></span>
<span class="line"><span style="color:#e1e4e8;">                                    &lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                                )</span></span>
<span class="line"><span style="color:#e1e4e8;">                            })</span></span>
<span class="line"><span style="color:#e1e4e8;">                        }</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;/&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">             );</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    export default List</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React, {Component} from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#24292e;">    import {Link} from &#39;react-router-dom&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    class List Component{</span></span>
<span class="line"><span style="color:#24292e;">        constructor(props) {</span></span>
<span class="line"><span style="color:#24292e;">            super(props)</span></span>
<span class="line"><span style="color:#24292e;">            this.state = {</span></span>
<span class="line"><span style="color:#24292e;">                list: [</span></span>
<span class="line"><span style="color:#24292e;">                    {cid: 126, title: &#39;个人博客1&#39;},</span></span>
<span class="line"><span style="color:#24292e;">                    {cid: 666, title: &#39;个人博客2&#39;}</span></span>
<span class="line"><span style="color:#24292e;">                ]</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        render() { </span></span>
<span class="line"><span style="color:#24292e;">            return ( </span></span>
<span class="line"><span style="color:#24292e;">                &lt;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                    &lt;h2&gt;页面分离-列表页&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#24292e;">                    &lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">                        &lt;li&gt;url动态传值&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">                        {</span></span>
<span class="line"><span style="color:#24292e;">                            this.state.list.map((item, index) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">                                return (</span></span>
<span class="line"><span style="color:#24292e;">                                    &lt;li key={index}&gt;</span></span>
<span class="line"><span style="color:#24292e;">                                        &lt;Link to={&#39;/Listdetail/&#39;+item.cid}&gt;{item.title}&lt;/Link&gt; </span></span>
<span class="line"><span style="color:#24292e;">                                    &lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">                                )</span></span>
<span class="line"><span style="color:#24292e;">                            })</span></span>
<span class="line"><span style="color:#24292e;">                        }</span></span>
<span class="line"><span style="color:#24292e;">                    &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;/&gt;</span></span>
<span class="line"><span style="color:#24292e;">             );</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    export default List</span></span></code></pre></div><p>配置重定向界面 <code>home.js</code> 文件，并将该组件添加到 <code>AppRouter.js</code> 文件中。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React from &#39;react&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    function Home() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return (</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;h2&gt;重定向界面&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        )</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    export default Home;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React from &#39;react&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    function Home() {</span></span>
<span class="line"><span style="color:#24292e;">        return (</span></span>
<span class="line"><span style="color:#24292e;">            &lt;h2&gt;重定向界面&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#24292e;">        )</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    export default Home;</span></span></code></pre></div><ul><li>标签式设置重定向</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React, {Component} from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    import {Link, Redirect} from &#39;react-router-dom&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    class List Component{</span></span>
<span class="line"><span style="color:#e1e4e8;">        constructor(props) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            super(props)</span></span>
<span class="line"><span style="color:#e1e4e8;">            this.state = {</span></span>
<span class="line"><span style="color:#e1e4e8;">                list: [</span></span>
<span class="line"><span style="color:#e1e4e8;">                    {cid: 126, title: &#39;个人博客1&#39;},</span></span>
<span class="line"><span style="color:#e1e4e8;">                    {cid: 666, title: &#39;个人博客2&#39;}</span></span>
<span class="line"><span style="color:#e1e4e8;">                ]</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        render() { </span></span>
<span class="line"><span style="color:#e1e4e8;">            return ( </span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    {/* 标签式 Redirect 重定向路径  */}</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &lt;Redirect to=&quot;/home/&quot; /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">                    &lt;h2&gt;页面分离-列表页&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                        &lt;li&gt;url动态传值&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                        {</span></span>
<span class="line"><span style="color:#e1e4e8;">                            this.state.list.map((item, index) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">                                return (</span></span>
<span class="line"><span style="color:#e1e4e8;">                                    &lt;li key={index}&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                                        &lt;Link to={&#39;/Listdetail/&#39;+item.cid}&gt;{item.title}&lt;/Link&gt; </span></span>
<span class="line"><span style="color:#e1e4e8;">                                    &lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                                )</span></span>
<span class="line"><span style="color:#e1e4e8;">                            })</span></span>
<span class="line"><span style="color:#e1e4e8;">                        }</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;/&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">             );</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    export default List</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React, {Component} from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#24292e;">    import {Link, Redirect} from &#39;react-router-dom&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    class List Component{</span></span>
<span class="line"><span style="color:#24292e;">        constructor(props) {</span></span>
<span class="line"><span style="color:#24292e;">            super(props)</span></span>
<span class="line"><span style="color:#24292e;">            this.state = {</span></span>
<span class="line"><span style="color:#24292e;">                list: [</span></span>
<span class="line"><span style="color:#24292e;">                    {cid: 126, title: &#39;个人博客1&#39;},</span></span>
<span class="line"><span style="color:#24292e;">                    {cid: 666, title: &#39;个人博客2&#39;}</span></span>
<span class="line"><span style="color:#24292e;">                ]</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        render() { </span></span>
<span class="line"><span style="color:#24292e;">            return ( </span></span>
<span class="line"><span style="color:#24292e;">                &lt;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                    {/* 标签式 Redirect 重定向路径  */}</span></span>
<span class="line"><span style="color:#24292e;">                    &lt;Redirect to=&quot;/home/&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">                    &lt;h2&gt;页面分离-列表页&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#24292e;">                    &lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">                        &lt;li&gt;url动态传值&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">                        {</span></span>
<span class="line"><span style="color:#24292e;">                            this.state.list.map((item, index) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">                                return (</span></span>
<span class="line"><span style="color:#24292e;">                                    &lt;li key={index}&gt;</span></span>
<span class="line"><span style="color:#24292e;">                                        &lt;Link to={&#39;/Listdetail/&#39;+item.cid}&gt;{item.title}&lt;/Link&gt; </span></span>
<span class="line"><span style="color:#24292e;">                                    &lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">                                )</span></span>
<span class="line"><span style="color:#24292e;">                            })</span></span>
<span class="line"><span style="color:#24292e;">                        }</span></span>
<span class="line"><span style="color:#24292e;">                    &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;/&gt;</span></span>
<span class="line"><span style="color:#24292e;">             );</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    export default List</span></span></code></pre></div><ul><li>编程式设置重定向</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React, {Component} from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    import {Link, Redirect} from &#39;react-router-dom&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    class List Component{</span></span>
<span class="line"><span style="color:#e1e4e8;">        constructor(props) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            super(props)</span></span>
<span class="line"><span style="color:#e1e4e8;">            this.state = {</span></span>
<span class="line"><span style="color:#e1e4e8;">                list: [</span></span>
<span class="line"><span style="color:#e1e4e8;">                    {cid: 126, title: &#39;个人博客1&#39;},</span></span>
<span class="line"><span style="color:#e1e4e8;">                    {cid: 666, title: &#39;个人博客2&#39;}</span></span>
<span class="line"><span style="color:#e1e4e8;">                ]</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            //编程式重定向</span></span>
<span class="line"><span style="color:#e1e4e8;">            this.props.history.push(&#39;/home/&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        render() { </span></span>
<span class="line"><span style="color:#e1e4e8;">            return ( </span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &lt;h2&gt;页面分离-列表页&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                        &lt;li&gt;url动态传值&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                        {</span></span>
<span class="line"><span style="color:#e1e4e8;">                            this.state.list.map((item, index) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">                                return (</span></span>
<span class="line"><span style="color:#e1e4e8;">                                    &lt;li key={index}&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                                        &lt;Link to={&#39;/Listdetail/&#39;+item.cid}&gt;{item.title}&lt;/Link&gt; </span></span>
<span class="line"><span style="color:#e1e4e8;">                                    &lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                                )</span></span>
<span class="line"><span style="color:#e1e4e8;">                            })</span></span>
<span class="line"><span style="color:#e1e4e8;">                        }</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;/&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">             );</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    export default List</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React, {Component} from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#24292e;">    import {Link, Redirect} from &#39;react-router-dom&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    class List Component{</span></span>
<span class="line"><span style="color:#24292e;">        constructor(props) {</span></span>
<span class="line"><span style="color:#24292e;">            super(props)</span></span>
<span class="line"><span style="color:#24292e;">            this.state = {</span></span>
<span class="line"><span style="color:#24292e;">                list: [</span></span>
<span class="line"><span style="color:#24292e;">                    {cid: 126, title: &#39;个人博客1&#39;},</span></span>
<span class="line"><span style="color:#24292e;">                    {cid: 666, title: &#39;个人博客2&#39;}</span></span>
<span class="line"><span style="color:#24292e;">                ]</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            //编程式重定向</span></span>
<span class="line"><span style="color:#24292e;">            this.props.history.push(&#39;/home/&#39;)</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        render() { </span></span>
<span class="line"><span style="color:#24292e;">            return ( </span></span>
<span class="line"><span style="color:#24292e;">                &lt;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                    &lt;h2&gt;页面分离-列表页&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#24292e;">                    &lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">                        &lt;li&gt;url动态传值&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">                        {</span></span>
<span class="line"><span style="color:#24292e;">                            this.state.list.map((item, index) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">                                return (</span></span>
<span class="line"><span style="color:#24292e;">                                    &lt;li key={index}&gt;</span></span>
<span class="line"><span style="color:#24292e;">                                        &lt;Link to={&#39;/Listdetail/&#39;+item.cid}&gt;{item.title}&lt;/Link&gt; </span></span>
<span class="line"><span style="color:#24292e;">                                    &lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">                                )</span></span>
<span class="line"><span style="color:#24292e;">                            })</span></span>
<span class="line"><span style="color:#24292e;">                        }</span></span>
<span class="line"><span style="color:#24292e;">                    &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;/&gt;</span></span>
<span class="line"><span style="color:#24292e;">             );</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    export default List</span></span></code></pre></div><h3 id="reactrouter-路由嵌套" tabindex="-1">ReactRouter 路由嵌套 <a class="header-anchor" href="#reactrouter-路由嵌套" aria-label="Permalink to &quot;ReactRouter 路由嵌套&quot;">​</a></h3><p>模拟真实项目选择左侧列表内容，呈现出该列表相关内容信息。</p><p>配置 <code>AppRouter.js</code> 路由文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React from &#39;react&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    import { BrowserRouter as Router, Route, Link } from &#39;react-router-dom&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    import List from &#39;./pages/list&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    function AppRouter() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return (</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;Router&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &lt;li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                        &lt;Link to=&quot;/&quot;&gt;首页&lt;/Link&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &lt;li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                        &lt;Link to=&quot;/list&quot;&gt;列表&lt;/Link&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;Route path=&quot;/&quot; exact /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;Route path=&quot;/list&quot; component={List} /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;/Router&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        )</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    export default AppRouter</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React from &#39;react&#39;</span></span>
<span class="line"><span style="color:#24292e;">    import { BrowserRouter as Router, Route, Link } from &#39;react-router-dom&#39;</span></span>
<span class="line"><span style="color:#24292e;">    import List from &#39;./pages/list&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    function AppRouter() {</span></span>
<span class="line"><span style="color:#24292e;">        return (</span></span>
<span class="line"><span style="color:#24292e;">            &lt;Router&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">                    &lt;li&gt;</span></span>
<span class="line"><span style="color:#24292e;">                        &lt;Link to=&quot;/&quot;&gt;首页&lt;/Link&gt;</span></span>
<span class="line"><span style="color:#24292e;">                    &lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">                    &lt;li&gt;</span></span>
<span class="line"><span style="color:#24292e;">                        &lt;Link to=&quot;/list&quot;&gt;列表&lt;/Link&gt;</span></span>
<span class="line"><span style="color:#24292e;">                    &lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;Route path=&quot;/&quot; exact /&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;Route path=&quot;/list&quot; component={List} /&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/Router&gt;</span></span>
<span class="line"><span style="color:#24292e;">        )</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    export default AppRouter</span></span></code></pre></div><p>配置 <code>List</code> 组件并布局样式</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React, { Component } from &#39;react&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    import &#39;./index.css&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    class List Component {</span></span>
<span class="line"><span style="color:#e1e4e8;">        constructor(props) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            super(props)</span></span>
<span class="line"><span style="color:#e1e4e8;">            this.state ={</span></span>
<span class="line"><span style="color:#e1e4e8;">                routerConfig: [</span></span>
<span class="line"><span style="color:#e1e4e8;">                    {id: 1, title: &#39;视频页面&#39;, path: &#39;/video/&#39;, exact: false, component: Video}</span></span>
<span class="line"><span style="color:#e1e4e8;">                ]</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        return (</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;h2&gt;列表页&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;div className=&quot;box&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &lt;div className=&quot;left&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                        &lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                            {</span></span>
<span class="line"><span style="color:#e1e4e8;">                                this.state.routerConfig.map((item, index) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">                                    return(</span></span>
<span class="line"><span style="color:#e1e4e8;">                                        &lt;li key={item.id}&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                                            &lt;Link to={item.path}&gt;{item.title}&lt;/Link&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                                        &lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                                    )</span></span>
<span class="line"><span style="color:#e1e4e8;">                                })</span></span>
<span class="line"><span style="color:#e1e4e8;">                            }</span></span>
<span class="line"><span style="color:#e1e4e8;">                        &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &lt;div className=&quot;right&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                        点击右侧列表呈现相关内容</span></span>
<span class="line"><span style="color:#e1e4e8;">                        {</span></span>
<span class="line"><span style="color:#e1e4e8;">                            this.state.routerConfig.map((item, index) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">                                return(&lt;Route path={item.path} component={item.component} /&gt;)</span></span>
<span class="line"><span style="color:#e1e4e8;">                            })</span></span>
<span class="line"><span style="color:#e1e4e8;">                        }</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        )</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">export default List</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React, { Component } from &#39;react&#39;</span></span>
<span class="line"><span style="color:#24292e;">    import &#39;./index.css&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    class List Component {</span></span>
<span class="line"><span style="color:#24292e;">        constructor(props) {</span></span>
<span class="line"><span style="color:#24292e;">            super(props)</span></span>
<span class="line"><span style="color:#24292e;">            this.state ={</span></span>
<span class="line"><span style="color:#24292e;">                routerConfig: [</span></span>
<span class="line"><span style="color:#24292e;">                    {id: 1, title: &#39;视频页面&#39;, path: &#39;/video/&#39;, exact: false, component: Video}</span></span>
<span class="line"><span style="color:#24292e;">                ]</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        return (</span></span>
<span class="line"><span style="color:#24292e;">            &lt;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;h2&gt;列表页&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;div className=&quot;box&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                    &lt;div className=&quot;left&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                        &lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">                            {</span></span>
<span class="line"><span style="color:#24292e;">                                this.state.routerConfig.map((item, index) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">                                    return(</span></span>
<span class="line"><span style="color:#24292e;">                                        &lt;li key={item.id}&gt;</span></span>
<span class="line"><span style="color:#24292e;">                                            &lt;Link to={item.path}&gt;{item.title}&lt;/Link&gt;</span></span>
<span class="line"><span style="color:#24292e;">                                        &lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">                                    )</span></span>
<span class="line"><span style="color:#24292e;">                                })</span></span>
<span class="line"><span style="color:#24292e;">                            }</span></span>
<span class="line"><span style="color:#24292e;">                        &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">                    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">                    &lt;div className=&quot;right&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                        点击右侧列表呈现相关内容</span></span>
<span class="line"><span style="color:#24292e;">                        {</span></span>
<span class="line"><span style="color:#24292e;">                            this.state.routerConfig.map((item, index) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">                                return(&lt;Route path={item.path} component={item.component} /&gt;)</span></span>
<span class="line"><span style="color:#24292e;">                            })</span></span>
<span class="line"><span style="color:#24292e;">                        }</span></span>
<span class="line"><span style="color:#24292e;">                    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">        )</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">export default List</span></span></code></pre></div><p>布局样式</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">...</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    .box{ display: flex }</span></span>
<span class="line"><span style="color:#e1e4e8;">    .left{ width:120px;}</span></span>
<span class="line"><span style="color:#e1e4e8;">    .right{ flex:1 }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">...</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    .box{ display: flex }</span></span>
<span class="line"><span style="color:#24292e;">    .left{ width:120px;}</span></span>
<span class="line"><span style="color:#24292e;">    .right{ flex:1 }</span></span></code></pre></div><p>配置 <code>Video</code> 组件内容</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    import { Route, Link} from &#39;react-router-dom&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    import Vue from &#39;./vue&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    function Video() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return ( </span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;h2&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    video页面</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;/h2&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &lt;li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                        &lt;Link to=&quot;/video/Vue/&quot;&gt;Vue教程&lt;/Link&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &lt;Route path=&quot;/video/vue&quot; component={Vue} /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;/&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        );</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    </span></span>
<span class="line"><span style="color:#e1e4e8;">    export default Video;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#24292e;">    import { Route, Link} from &#39;react-router-dom&#39;</span></span>
<span class="line"><span style="color:#24292e;">    import Vue from &#39;./vue&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    function Video() {</span></span>
<span class="line"><span style="color:#24292e;">        return ( </span></span>
<span class="line"><span style="color:#24292e;">            &lt;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;h2&gt;</span></span>
<span class="line"><span style="color:#24292e;">                    video页面</span></span>
<span class="line"><span style="color:#24292e;">                &lt;/h2&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">                    &lt;li&gt;</span></span>
<span class="line"><span style="color:#24292e;">                        &lt;Link to=&quot;/video/Vue/&quot;&gt;Vue教程&lt;/Link&gt;</span></span>
<span class="line"><span style="color:#24292e;">                    &lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;div&gt;</span></span>
<span class="line"><span style="color:#24292e;">                    &lt;Route path=&quot;/video/vue&quot; component={Vue} /&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/&gt;</span></span>
<span class="line"><span style="color:#24292e;">        );</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">    export default Video;</span></span></code></pre></div><p>配置 <code>Vue</code> 组件内容</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React from &#39;react&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    function Vue() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return (</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;h2&gt;Vue教程开始啦~&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        )</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    export default Vue;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React from &#39;react&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    function Vue() {</span></span>
<span class="line"><span style="color:#24292e;">        return (</span></span>
<span class="line"><span style="color:#24292e;">            &lt;h2&gt;Vue教程开始啦~&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#24292e;">        )</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    export default Vue;</span></span></code></pre></div>`,39),t=[p];function o(c,i,r,y,u,d){return n(),a("div",null,t)}const h=s(l,[["render",o]]);export{m as __pageData,h as default};
