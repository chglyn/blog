import{_ as s,o as n,c as e,Q as a}from"./chunks/framework.419948d5.js";const h=JSON.parse('{"title":"学习React Hooks","description":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。","frontmatter":{"title":"学习React Hooks","editLink":true,"head":[["meta",{"name":"description","content":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。"}],["meta",{"name":"keywords","content":"JavaScript,React,React Hooks,Hooks"}]]},"headers":[],"relativePath":"note/base-reactHooks.md","filePath":"note/base-reactHooks.md"}'),l={name:"note/base-reactHooks.md"},p=a(`<h3 id="usestate" tabindex="-1">useState <a class="header-anchor" href="#usestate" aria-label="Permalink to &quot;useState&quot;">​</a></h3><p>使用 <code>useState</code> 代替 <code>state</code> 声明值。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React, {useState} from &#39;react&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    function UserStateExample() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        const [count, setCount] = useState(0)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        return (</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;p&gt;当前值为：{count}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;button onClick={()=&gt;setState(count+1)}&gt; </span></span>
<span class="line"><span style="color:#e1e4e8;">                    clike me</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;/button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        )</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    export example UserStateExample</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React, {useState} from &#39;react&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    function UserStateExample() {</span></span>
<span class="line"><span style="color:#24292e;">        const [count, setCount] = useState(0)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        return (</span></span>
<span class="line"><span style="color:#24292e;">            &lt;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;p&gt;当前值为：{count}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;button onClick={()=&gt;setState(count+1)}&gt; </span></span>
<span class="line"><span style="color:#24292e;">                    clike me</span></span>
<span class="line"><span style="color:#24292e;">                &lt;/button&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">        )</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    export example UserStateExample</span></span></code></pre></div><h3 id="useeffect" tabindex="-1">useEffect <a class="header-anchor" href="#useeffect" aria-label="Permalink to &quot;useEffect&quot;">​</a></h3><p>在 <code>class</code> 组件中使用生命周期函数做些事情（如：接口请求数据）。然而在 <code>ReactHooks</code> 中也可以用 <code>useEffect</code> 做到。</p><p>可以代替 <code>class</code> 组件生命周期函数 <code>componentWillMount</code> 和 <code>componentDidMount</code>。</p><p>如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React, {useEffect} from &#39;react&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    function HelloUseEffect() {</span></span>
<span class="line"><span style="color:#e1e4e8;">       const [count, setCount] = useState(0)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">            console.log(\`点击次数\${count}次\`)</span></span>
<span class="line"><span style="color:#e1e4e8;">        })</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        return (</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;p&gt;当前值为：{count}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;button onClick={()=&gt;setState(count+1)}&gt; </span></span>
<span class="line"><span style="color:#e1e4e8;">                    clike me</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;/button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        )</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    export default HelloUseEffect</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React, {useEffect} from &#39;react&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    function HelloUseEffect() {</span></span>
<span class="line"><span style="color:#24292e;">       const [count, setCount] = useState(0)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">            console.log(\`点击次数\${count}次\`)</span></span>
<span class="line"><span style="color:#24292e;">        })</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        return (</span></span>
<span class="line"><span style="color:#24292e;">            &lt;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;p&gt;当前值为：{count}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;button onClick={()=&gt;setState(count+1)}&gt; </span></span>
<span class="line"><span style="color:#24292e;">                    clike me</span></span>
<span class="line"><span style="color:#24292e;">                &lt;/button&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">        )</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    export default HelloUseEffect</span></span></code></pre></div><p>可以发现浏览器第一次渲染和组件更新都会执行该函数重新渲染数据。</p><p><code>userEffect</code> 定义的函数不会阻止浏览器渲染更新视图，可以理解这些函数是异步的。</p><h3 id="useeffect-实现-componentwillunmount" tabindex="-1"><code>useEffect</code> 实现 <code>componentWillUnmount</code> <a class="header-anchor" href="#useeffect-实现-componentwillunmount" aria-label="Permalink to &quot;\`useEffect\` 实现 \`componentWillUnmount\`&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React, {useEffect} from &#39;react&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    function HelloUseEffect() {</span></span>
<span class="line"><span style="color:#e1e4e8;">       const [count, setCount] = useState(0)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">            console.log(\`点击次数\${count}次\`)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            return ()=&gt;{ //解绑函数</span></span>
<span class="line"><span style="color:#e1e4e8;">                console.log(\`==================\`)</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        }, [count])</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        return (</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;p&gt;当前值为：{count}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;button onClick={()=&gt;setState(count+1)}&gt; </span></span>
<span class="line"><span style="color:#e1e4e8;">                    clike me</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;/button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        )</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    export default HelloUseEffect</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React, {useEffect} from &#39;react&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    function HelloUseEffect() {</span></span>
<span class="line"><span style="color:#24292e;">       const [count, setCount] = useState(0)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">            console.log(\`点击次数\${count}次\`)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            return ()=&gt;{ //解绑函数</span></span>
<span class="line"><span style="color:#24292e;">                console.log(\`==================\`)</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        }, [count])</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        return (</span></span>
<span class="line"><span style="color:#24292e;">            &lt;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;p&gt;当前值为：{count}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;button onClick={()=&gt;setState(count+1)}&gt; </span></span>
<span class="line"><span style="color:#24292e;">                    clike me</span></span>
<span class="line"><span style="color:#24292e;">                &lt;/button&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">        )</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    export default HelloUseEffect</span></span></code></pre></div><p><code>useEffect</code> 函数支持返回一个函数，即解绑函数；并加上第二个参数为空数组或者是定义的值。</p><p>只要有状态变化，解绑函数都会执行。</p><h3 id="usecontext" tabindex="-1">useContext <a class="header-anchor" href="#usecontext" aria-label="Permalink to &quot;useContext&quot;">​</a></h3><p>例子如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React, {useState, createContext, useContext} from &#39;react&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    const countContext = createContext()</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    function ChildExample() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        let count </span></span>
<span class="line"><span style="color:#e1e4e8;">        return (</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                Child中的值为：{count}</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;/&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        )</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    function UseContentExample() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        const [count, setCount] = useState(0)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        return (</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;p&gt;当前值为{count}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;button onClick={()=&gt;setState(count)}&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    click me</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;/button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;countContext.Provider value={count}&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    &lt;ChildExample /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;/countContext.Provider&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        )</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    export default UseContentExample</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React, {useState, createContext, useContext} from &#39;react&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    const countContext = createContext()</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    function ChildExample() {</span></span>
<span class="line"><span style="color:#24292e;">        let count </span></span>
<span class="line"><span style="color:#24292e;">        return (</span></span>
<span class="line"><span style="color:#24292e;">            &lt;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                Child中的值为：{count}</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/&gt;</span></span>
<span class="line"><span style="color:#24292e;">        )</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    function UseContentExample() {</span></span>
<span class="line"><span style="color:#24292e;">        const [count, setCount] = useState(0)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        return (</span></span>
<span class="line"><span style="color:#24292e;">            &lt;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;p&gt;当前值为{count}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;button onClick={()=&gt;setState(count)}&gt;</span></span>
<span class="line"><span style="color:#24292e;">                    click me</span></span>
<span class="line"><span style="color:#24292e;">                &lt;/button&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">                &lt;countContext.Provider value={count}&gt;</span></span>
<span class="line"><span style="color:#24292e;">                    &lt;ChildExample /&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;/countContext.Provider&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">        )</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    export default UseContentExample</span></span></code></pre></div><p><code>useContext</code> 全局状态管理相当于模拟 <code>Redux</code> 中 <code>state</code>。</p><h3 id="usereducer" tabindex="-1">useReducer <a class="header-anchor" href="#usereducer" aria-label="Permalink to &quot;useReducer&quot;">​</a></h3><p>例子如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React,{useState, useReducer} from &#39;react&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    function UseReducerExample() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        const [count, dispatch] = useReducer((state, action) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">            switch(action) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                case &#39;add&#39;:</span></span>
<span class="line"><span style="color:#e1e4e8;">                    return state + 1</span></span>
<span class="line"><span style="color:#e1e4e8;">                case &#39;sub&#39;:</span></span>
<span class="line"><span style="color:#e1e4e8;">                    return state - 1</span></span>
<span class="line"><span style="color:#e1e4e8;">                default:</span></span>
<span class="line"><span style="color:#e1e4e8;">                    return state</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }, 0)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        return (</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;button onClick={()=&gt;{dispatch(&#39;add&#39;)}}&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    加数</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;/button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;button onClick={()=&gt;{dispatch(&#39;sub&#39;)}}&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    减数</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;/button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;/&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        )</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    export default UseReducerExample;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React,{useState, useReducer} from &#39;react&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    function UseReducerExample() {</span></span>
<span class="line"><span style="color:#24292e;">        const [count, dispatch] = useReducer((state, action) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">            switch(action) {</span></span>
<span class="line"><span style="color:#24292e;">                case &#39;add&#39;:</span></span>
<span class="line"><span style="color:#24292e;">                    return state + 1</span></span>
<span class="line"><span style="color:#24292e;">                case &#39;sub&#39;:</span></span>
<span class="line"><span style="color:#24292e;">                    return state - 1</span></span>
<span class="line"><span style="color:#24292e;">                default:</span></span>
<span class="line"><span style="color:#24292e;">                    return state</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }, 0)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        return (</span></span>
<span class="line"><span style="color:#24292e;">            &lt;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;button onClick={()=&gt;{dispatch(&#39;add&#39;)}}&gt;</span></span>
<span class="line"><span style="color:#24292e;">                    加数</span></span>
<span class="line"><span style="color:#24292e;">                &lt;/button&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;button onClick={()=&gt;{dispatch(&#39;sub&#39;)}}&gt;</span></span>
<span class="line"><span style="color:#24292e;">                    减数</span></span>
<span class="line"><span style="color:#24292e;">                &lt;/button&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/&gt;</span></span>
<span class="line"><span style="color:#24292e;">        )</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    export default UseReducerExample;</span></span></code></pre></div><p><code>action</code> 更新逻辑，相当于 <code>redux</code> 中的 <code>reducer</code>。</p><h3 id="usememo" tabindex="-1">useMemo <a class="header-anchor" href="#usememo" aria-label="Permalink to &quot;useMemo&quot;">​</a></h3><p><code>useMemo</code> 可以解决组件重复渲染。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React, { useState, useMemo } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    function UseMemoExample() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        const [xiaohong, setXiaohong] = useState(&#39;xiaohong&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">        const [zhiling, setZhiling] = useState(&#39;zhiling&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">        return (</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;button </span></span>
<span class="line"><span style="color:#e1e4e8;">                    onClick={()=&gt;{setXiaohong(new Date().getTime())}}&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                        小红</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;/button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;button </span></span>
<span class="line"><span style="color:#e1e4e8;">                    onClick={()=&gt;{setZhiling(new Date().getTime()+&#39;志玲来了&#39;)}}&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                        志玲</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;/button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;ChildComponent name={xiaohong}&gt;{ zhiling }&lt;/ChildComponent&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;/&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        )</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    function ChildComponent({name, children}) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        function changeXiaohong() {</span></span>
<span class="line"><span style="color:#e1e4e8;">            console.log(\`xiaohong来了\`);</span></span>
<span class="line"><span style="color:#e1e4e8;">            return name+\`，xiaohong来了\`</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        //const actionXiaohong = changeXiaohong(name)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        const actionXiaohong = useMemo(()=&gt;changeXiaohong(name), [name])</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        return (</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;div&gt;{ actionXiaohong }&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;div&gt;{ children }&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;/&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        )</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    export default UseMemoExample</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React, { useState, useMemo } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    function UseMemoExample() {</span></span>
<span class="line"><span style="color:#24292e;">        const [xiaohong, setXiaohong] = useState(&#39;xiaohong&#39;)</span></span>
<span class="line"><span style="color:#24292e;">        const [zhiling, setZhiling] = useState(&#39;zhiling&#39;)</span></span>
<span class="line"><span style="color:#24292e;">        return (</span></span>
<span class="line"><span style="color:#24292e;">            &lt;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;button </span></span>
<span class="line"><span style="color:#24292e;">                    onClick={()=&gt;{setXiaohong(new Date().getTime())}}&gt;</span></span>
<span class="line"><span style="color:#24292e;">                        小红</span></span>
<span class="line"><span style="color:#24292e;">                &lt;/button&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;button </span></span>
<span class="line"><span style="color:#24292e;">                    onClick={()=&gt;{setZhiling(new Date().getTime()+&#39;志玲来了&#39;)}}&gt;</span></span>
<span class="line"><span style="color:#24292e;">                        志玲</span></span>
<span class="line"><span style="color:#24292e;">                &lt;/button&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;ChildComponent name={xiaohong}&gt;{ zhiling }&lt;/ChildComponent&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/&gt;</span></span>
<span class="line"><span style="color:#24292e;">        )</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    function ChildComponent({name, children}) {</span></span>
<span class="line"><span style="color:#24292e;">        function changeXiaohong() {</span></span>
<span class="line"><span style="color:#24292e;">            console.log(\`xiaohong来了\`);</span></span>
<span class="line"><span style="color:#24292e;">            return name+\`，xiaohong来了\`</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        //const actionXiaohong = changeXiaohong(name)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        const actionXiaohong = useMemo(()=&gt;changeXiaohong(name), [name])</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        return (</span></span>
<span class="line"><span style="color:#24292e;">            &lt;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;div&gt;{ actionXiaohong }&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;div&gt;{ children }&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/&gt;</span></span>
<span class="line"><span style="color:#24292e;">        )</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    export default UseMemoExample</span></span></code></pre></div><h3 id="useref" tabindex="-1">useRef <a class="header-anchor" href="#useref" aria-label="Permalink to &quot;useRef&quot;">​</a></h3><p><code>useRef</code> 获取元素和一些值。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React, { useRef, useState, useEffect } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    function UseRefExample() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        const input = useRef(null)</span></span>
<span class="line"><span style="color:#e1e4e8;">        const handlerBtn = ()=&gt;{</span></span>
<span class="line"><span style="color:#e1e4e8;">            input.current.value = &#39;hello&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">            console.log(input)</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        const [text, setText] = useState(&#39;word&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">        const textRef = useRef()</span></span>
<span class="line"><span style="color:#e1e4e8;">        </span></span>
<span class="line"><span style="color:#e1e4e8;">        useEffect(()=&gt;{</span></span>
<span class="line"><span style="color:#e1e4e8;">            textRef.current = text</span></span>
<span class="line"><span style="color:#e1e4e8;">            console.log(\`textRef.current：\`,textRef.current)</span></span>
<span class="line"><span style="color:#e1e4e8;">        })</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        return (</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;input ref={input} tpey=&quot;text&quot; /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;button onClick={handlerBtn}&gt;click me&lt;/button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;br /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;input </span></span>
<span class="line"><span style="color:#e1e4e8;">                    value={text} </span></span>
<span class="line"><span style="color:#e1e4e8;">                    onChange={(e)=&gt;{setText(e.target.value)}} /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;/&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        )</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    export default UseRefExample</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React, { useRef, useState, useEffect } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    function UseRefExample() {</span></span>
<span class="line"><span style="color:#24292e;">        const input = useRef(null)</span></span>
<span class="line"><span style="color:#24292e;">        const handlerBtn = ()=&gt;{</span></span>
<span class="line"><span style="color:#24292e;">            input.current.value = &#39;hello&#39;</span></span>
<span class="line"><span style="color:#24292e;">            console.log(input)</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        const [text, setText] = useState(&#39;word&#39;)</span></span>
<span class="line"><span style="color:#24292e;">        const textRef = useRef()</span></span>
<span class="line"><span style="color:#24292e;">        </span></span>
<span class="line"><span style="color:#24292e;">        useEffect(()=&gt;{</span></span>
<span class="line"><span style="color:#24292e;">            textRef.current = text</span></span>
<span class="line"><span style="color:#24292e;">            console.log(\`textRef.current：\`,textRef.current)</span></span>
<span class="line"><span style="color:#24292e;">        })</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        return (</span></span>
<span class="line"><span style="color:#24292e;">            &lt;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;input ref={input} tpey=&quot;text&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;button onClick={handlerBtn}&gt;click me&lt;/button&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;br /&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;input </span></span>
<span class="line"><span style="color:#24292e;">                    value={text} </span></span>
<span class="line"><span style="color:#24292e;">                    onChange={(e)=&gt;{setText(e.target.value)}} /&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/&gt;</span></span>
<span class="line"><span style="color:#24292e;">        )</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    export default UseRefExample</span></span></code></pre></div><h3 id="自定义-hooks" tabindex="-1">自定义 Hooks <a class="header-anchor" href="#自定义-hooks" aria-label="Permalink to &quot;自定义 Hooks&quot;">​</a></h3><p>自定义 <code>Hooks</code> 必须使用以 <code>use</code> 开头。</p><p>自定义计算视图窗口大小例子。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import React, { useState, useEffect, useCallback } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    function UseWinSize() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        const [size, setSize] = useState({</span></span>
<span class="line"><span style="color:#e1e4e8;">            width: document.documentElement.clientWidth,</span></span>
<span class="line"><span style="color:#e1e4e8;">            height: document.documentElement.clientHeight</span></span>
<span class="line"><span style="color:#e1e4e8;">        })</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        const onResize = useCallback(()=&gt;{</span></span>
<span class="line"><span style="color:#e1e4e8;">            setSize({</span></span>
<span class="line"><span style="color:#e1e4e8;">                width: document.documentElement.clientWidth,</span></span>
<span class="line"><span style="color:#e1e4e8;">                height: document.documentElement.clientHeight</span></span>
<span class="line"><span style="color:#e1e4e8;">            })</span></span>
<span class="line"><span style="color:#e1e4e8;">        }, [])</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">            window.addEventListener(&#39;resize&#39;, onResize)</span></span>
<span class="line"><span style="color:#e1e4e8;">            return () =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">                window.removeEventListener(&#39;resize&#39;, onResize)</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        })</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        return size</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    function CustomHooks() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        const size = UseWinSize()</span></span>
<span class="line"><span style="color:#e1e4e8;">        return (</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;div&gt;页面Size：{ size.width } * {size.height }&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;/&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        )</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    export default CustomHooks</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import React, { useState, useEffect, useCallback } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    function UseWinSize() {</span></span>
<span class="line"><span style="color:#24292e;">        const [size, setSize] = useState({</span></span>
<span class="line"><span style="color:#24292e;">            width: document.documentElement.clientWidth,</span></span>
<span class="line"><span style="color:#24292e;">            height: document.documentElement.clientHeight</span></span>
<span class="line"><span style="color:#24292e;">        })</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        const onResize = useCallback(()=&gt;{</span></span>
<span class="line"><span style="color:#24292e;">            setSize({</span></span>
<span class="line"><span style="color:#24292e;">                width: document.documentElement.clientWidth,</span></span>
<span class="line"><span style="color:#24292e;">                height: document.documentElement.clientHeight</span></span>
<span class="line"><span style="color:#24292e;">            })</span></span>
<span class="line"><span style="color:#24292e;">        }, [])</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">            window.addEventListener(&#39;resize&#39;, onResize)</span></span>
<span class="line"><span style="color:#24292e;">            return () =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">                window.removeEventListener(&#39;resize&#39;, onResize)</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        })</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        return size</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    function CustomHooks() {</span></span>
<span class="line"><span style="color:#24292e;">        const size = UseWinSize()</span></span>
<span class="line"><span style="color:#24292e;">        return (</span></span>
<span class="line"><span style="color:#24292e;">            &lt;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;div&gt;页面Size：{ size.width } * {size.height }&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/&gt;</span></span>
<span class="line"><span style="color:#24292e;">        )</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    export default CustomHooks</span></span></code></pre></div>`,32),t=[p];function o(c,i,r,y,u,d){return n(),e("div",null,t)}const m=s(l,[["render",o]]);export{h as __pageData,m as default};
