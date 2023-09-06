import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.419948d5.js";const v=JSON.parse('{"title":"Vue3笔记","description":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。","frontmatter":{"title":"Vue3笔记","editLink":true,"head":[["meta",{"name":"description","content":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。"}],["meta",{"name":"keywords","content":"JavaScript,Vue,Vue2,Vue3,diff算法,"}]]},"headers":[],"relativePath":"note/base-vue3.md","filePath":"note/base-vue3.md"}'),l={name:"note/base-vue3.md"},p=e(`<h3 id="vue3-0-六大亮点" tabindex="-1"><code>Vue3.0</code> 六大亮点： <a class="header-anchor" href="#vue3-0-六大亮点" aria-label="Permalink to &quot;\`Vue3.0\` 六大亮点：&quot;">​</a></h3><ul><li><p><code>Performance</code>：性能比 <code>Vue2.x</code> 快 2.2 倍。</p></li><li><p><code>Tree shaking support</code>：按需编译，体积比 <code>Vue2.x</code> 更小。</p></li><li><p><code>Composition API</code>：组合 <code>API</code> （类似 <code>React Hooks</code>）。</p></li><li><p><code>Better TypeScript support</code>：更好的 <code>TS</code> 支持。</p></li><li><p><code>Custom Renderer API</code>：暴露了自定义渲染 <code>API</code>。</p></li><li><p><code>Fragment，Teleport(Protal)，Suspense</code>：更先进的组件。</p></li></ul><h3 id="vue3-0-是如何变快的。" tabindex="-1"><code>Vue3.0</code> 是如何变快的。 <a class="header-anchor" href="#vue3-0-是如何变快的。" aria-label="Permalink to &quot;\`Vue3.0\` 是如何变快的。&quot;">​</a></h3><p><strong><code>diff</code> 方法优化</strong>：</p><ul><li><p><code>Vue2.x</code> 中虚拟 <code>dom</code> 是进行全量的对比。</p></li><li><p><code>Vue3.0</code> 新增了静态标记（<code>PatchFlag</code>）。</p><p>在与上次虚拟节点进行对比时候，只对比带有 <code>patch flag</code> 的节点。</p><p>并且可以通过 <code>flag</code> 的信息得知当前节点要对比的具体内容。</p></li></ul><p><strong><code>hoistStatic</code> 静态提升</strong>：</p><ul><li><p><code>Vue2.x</code> 中无论元素是否参与更新，每次都会重新创建。</p></li><li><p><code>Vue3.0</code> 中对于不参与更新的元素，只会被创建一次，之后会在每次渲染的时候被不停的复用。</p></li></ul><p><strong><code>cacheHandlers</code> 事件侦听器缓存</strong></p><ul><li>默认情况下 <code>onClick</code> 会被视为动态绑定，所以每次都会去追踪它的变化。但是因为是同一个函数，所以没有追踪变化，直接缓存起来复用即可。</li></ul><p><strong><code>SSR</code> 渲染</strong></p><ul><li><p>当有大量静态内容的时候，这些内容会被当做纯字符串推进一个 <code>buffer</code> 里面，即使存在动态的绑定，会通过模板插值嵌入进去。这样比虚拟 <code>dom</code> 来渲染的快上很多。</p></li><li><p>当静态内容达到一定量级时候，会用 <code>_createStaticVNode</code> 方法在客户端生成一个 <code>static node</code>，这些静态 <code>node</code>，会被直接 <code>innerHTML</code>，就不需要创建对象，然后根据对象渲染。</p></li></ul><p><strong>组合 API</strong></p><ul><li><code>setup</code> 函数是组合 <code>API</code> 入口函数。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    setup() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        let count = ref(0)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        function fn() {</span></span>
<span class="line"><span style="color:#e1e4e8;">            console.log(count)</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        return { count, fn };</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    setup() {</span></span>
<span class="line"><span style="color:#24292e;">        let count = ref(0)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        function fn() {</span></span>
<span class="line"><span style="color:#24292e;">            console.log(count)</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        return { count, fn };</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><p>组合 <code>API</code> 中定义变量或者函数必须 <code>return</code> 暴露给外界；定义方法不必定义到 <code>methods</code>中， 直接在组合 <code>API</code> 中定义即可。</p><p><code>Ref</code> 只能监听简单类型的变化，不建议监听复杂类型（数组/对象等）的变化。</p><p><code>Reactive</code> 可以监听复杂类型的变化。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">setup() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    let list = reactive({</span></span>
<span class="line"><span style="color:#e1e4e8;">        lists: [{id: 1, name: &#39;zs&#39;}]</span></span>
<span class="line"><span style="color:#e1e4e8;">    })</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    return {list}</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">setup() {</span></span>
<span class="line"><span style="color:#24292e;">    let list = reactive({</span></span>
<span class="line"><span style="color:#24292e;">        lists: [{id: 1, name: &#39;zs&#39;}]</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    return {list}</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="组合-api-本质" tabindex="-1">组合 <code>API</code> 本质： <a class="header-anchor" href="#组合-api-本质" aria-label="Permalink to &quot;组合 \`API\` 本质：&quot;">​</a></h3><p>在 <code>setup</code> 中注册的变量或函数，会自动注册到 <code>vue2.x</code> 中的 <code>data</code> 或 <code>methods</code> 中。</p><p>注意点：</p><ul><li><p>执行<code>setup</code> 函数，是在 <code>beforeCreate</code> 钩子之前完成的。</p></li><li><p>在 <code>setup</code> 函数中，无法使用 <code>data</code> 和 <code>methods</code>。</p></li><li><p>在 <code>setup</code> 函数中，<code>this</code> 指向 <code>undefined</code>。</p></li><li><p><code>setup</code> 函数只能是同步的不能是异步的。</p></li></ul><h3 id="reactive" tabindex="-1">Reactive <a class="header-anchor" href="#reactive" aria-label="Permalink to &quot;Reactive&quot;">​</a></h3><p>什么是 <code>Reactive</code>。</p><ul><li><p><code>Reactive</code> 是 <code>Vue3.0</code> 中提供的实现响应式数据的方法。</p></li><li><p>在 <code>Vue2.0</code> 中响应式数据是通过 <code>defineProperty</code> 实现，在 <code>Vue3.0</code> 中响应式数据通过 <code>ES6</code> 的 <code>Propxy</code> 实现。</p></li></ul><p><code>Reactive</code> 注意点：</p><ul><li><p><code>Reactive</code> 函数是对象(<code>json</code> 或 <code>arr</code>)。</p></li><li><p>在创建响应式数据时，传递的不是对象，则无法更新视图。</p></li><li><p>如果给 <code>Reactive</code> 传递<strong>其他对象</strong>：</p><ul><li><p>默认情况下修改对象，界面不会自动更新。</p></li><li><p>如果想更新，可以通过重新赋值的方式。</p></li></ul></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">setup() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    let state = reactive({</span></span>
<span class="line"><span style="color:#e1e4e8;">        time: new Date()</span></span>
<span class="line"><span style="color:#e1e4e8;">    })</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    function fn() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        const newTime = new Date(state.time.getTime())</span></span>
<span class="line"><span style="color:#e1e4e8;">        newTime.setDate(state.time.getDate() + 1)</span></span>
<span class="line"><span style="color:#e1e4e8;">        state.time = newTime</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    return { state, fn}</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">setup() {</span></span>
<span class="line"><span style="color:#24292e;">    let state = reactive({</span></span>
<span class="line"><span style="color:#24292e;">        time: new Date()</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    function fn() {</span></span>
<span class="line"><span style="color:#24292e;">        const newTime = new Date(state.time.getTime())</span></span>
<span class="line"><span style="color:#24292e;">        newTime.setDate(state.time.getDate() + 1)</span></span>
<span class="line"><span style="color:#24292e;">        state.time = newTime</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    return { state, fn}</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="ref" tabindex="-1">Ref <a class="header-anchor" href="#ref" aria-label="Permalink to &quot;Ref&quot;">​</a></h3><p>什么是 <code>Ref</code>。</p><ul><li><p><code>Ref</code> 是用来实现响应式数据的方法。</p></li><li><p>由于 <code>Reactive</code> 传入一个对象，导致在开发中如果只想让某个变量实现响应式时会比较麻烦，因此 <code>Vue3.0</code> 提供了 <code>Ref</code> 方法，实现对简单值的监听。</p></li></ul><p><code>Ref</code> 本质：</p><ul><li><code>Ref</code> 底层的本质还是 <code>Reactive</code>。</li></ul><p>系统会自动根据给 <code>Ref</code> 传入的值将它转化为 <code>ref(xx)</code> --&gt; <code>reactive({value: xx})</code></p><p><code>ref</code> 注意点：</p><ul><li><p>在 <code>Vue</code> 中使用 <code>Ref</code> 的值，不用通过 <code>value</code> 获取。</p></li><li><p>在 <code>JS</code> 中使用 <code>Ref</code> 的值必须通过 <code>value</code> 获取。</p></li></ul><h3 id="ref-与-reactive-区别" tabindex="-1"><code>ref</code> 与 <code>reactive</code> 区别 <a class="header-anchor" href="#ref-与-reactive-区别" aria-label="Permalink to &quot;\`ref\` 与 \`reactive\` 区别&quot;">​</a></h3><ul><li><p>如果在 <code>template</code> 中使用 <code>Ref</code> 类型的数据，<code>Vue</code> 会自动帮我们添加 <code>.value</code>。</p></li><li><p>如果在 <code>template</code> 中使用 <code>Reactive</code> 类型的数据，<code>Vue</code> 不会自动帮我们添加 <code>.value</code>。</p></li></ul><p><strong>如何决定是否需要自动添加 <code>.vlue</code></strong></p><ul><li><code>Vue</code> 解析数据之前，会自动判断这个数据是否是 <code>Ref</code> 类型的；如果是，就自动添加 <code>.value</code>，如果不是就不自动添加 <code>.value</code>。</li></ul><p><strong>如何判断当前的数据是否是 <code>Ref</code> 类型</strong></p><ul><li>通过当前数据的 <code>__v_ref</code> 来判断的。如果有这个私有属性，并且取值为 <code>true</code>，就代表是一个 <code>Ref</code> 类型的数据。</li></ul><p><strong>如何自行判断是 <code>Ref</code>，还是 <code>Reactive</code></strong></p><ul><li>通过 <code>isRef</code> 和 <code>isReactive</code>。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import {ref, isRef, isReactive} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        setup() {</span></span>
<span class="line"><span style="color:#e1e4e8;">            let count = ref(18)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            console.log(isRef(count))</span></span>
<span class="line"><span style="color:#e1e4e8;">            console.log(isReactive(count))</span></span>
<span class="line"><span style="color:#e1e4e8;">            return {count}</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import {ref, isRef, isReactive} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        setup() {</span></span>
<span class="line"><span style="color:#24292e;">            let count = ref(18)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            console.log(isRef(count))</span></span>
<span class="line"><span style="color:#24292e;">            console.log(isReactive(count))</span></span>
<span class="line"><span style="color:#24292e;">            return {count}</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span></code></pre></div><h3 id="递归监听" tabindex="-1">递归监听 <a class="header-anchor" href="#递归监听" aria-label="Permalink to &quot;递归监听&quot;">​</a></h3><p>默认情况下，无论是通过 <code>Ref</code> 还是 <code>Reactive</code> 都是递归监听。</p><p>递归监听存在的问题：</p><ul><li>如果数据量较大时，非常消耗性能。</li></ul><p>创建递归监听，如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;p&gt;{{state.a}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    import {reactive} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">        setup() {</span></span>
<span class="line"><span style="color:#e1e4e8;">            let state = reactive({</span></span>
<span class="line"><span style="color:#e1e4e8;">                a: &#39;a&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                gf: {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    b: &#39;b&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                    f: {</span></span>
<span class="line"><span style="color:#e1e4e8;">                        c: &#39;c&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                        s: {</span></span>
<span class="line"><span style="color:#e1e4e8;">                            d: &#39;d&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">                        }</span></span>
<span class="line"><span style="color:#e1e4e8;">                    }</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">            })</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            state.a = 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">            state.gf.b = 2</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            console.log(state.a, state, state.gf.b, state.gf)</span></span>
<span class="line"><span style="color:#e1e4e8;">            return {state}</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;p&gt;{{state.a}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    import {reactive} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    export default {</span></span>
<span class="line"><span style="color:#24292e;">        setup() {</span></span>
<span class="line"><span style="color:#24292e;">            let state = reactive({</span></span>
<span class="line"><span style="color:#24292e;">                a: &#39;a&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                gf: {</span></span>
<span class="line"><span style="color:#24292e;">                    b: &#39;b&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                    f: {</span></span>
<span class="line"><span style="color:#24292e;">                        c: &#39;c&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                        s: {</span></span>
<span class="line"><span style="color:#24292e;">                            d: &#39;d&#39;</span></span>
<span class="line"><span style="color:#24292e;">                        }</span></span>
<span class="line"><span style="color:#24292e;">                    }</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">            })</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            state.a = 1;</span></span>
<span class="line"><span style="color:#24292e;">            state.gf.b = 2</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            console.log(state.a, state, state.gf.b, state.gf)</span></span>
<span class="line"><span style="color:#24292e;">            return {state}</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><p>监听到每一层数据变化， 界面 <code>UI</code> 更新数据。</p><h3 id="非递归监听" tabindex="-1">非递归监听 <a class="header-anchor" href="#非递归监听" aria-label="Permalink to &quot;非递归监听&quot;">​</a></h3><p>非递归监听：只能监听第一层， 不能监听其他层；即只有第一层包装成 <code>proxy</code>。</p><p>创建非递归监听，使用 <code>shallowReactive</code> 和 <code>shallowRef</code>。</p><p><strong>注意点：</strong></p><ul><li><p>如果是通过 <code>shallowReactive</code> 创建数据，只要第一层数据变化，就会更新界面 <code>UI</code> 第二层，第三层等等数据；如果第一层数据不更新，界面 <code>UI</code> 不会更新。</p></li><li><p>如果是通过 <code>shallowRef</code> 创建数据，<code>Vue</code> 监听的是 <code>.value</code> 的变化，并不是第一层数据的变化。</p></li><li><p>如果是通过 <code>shallowRef</code> 创建数据，想监听第 <code>n</code> 层数据，并主动更新 <code>UI</code> 界面，这时使用 <code>triggerRef</code>方法。</p></li><li><p><code>Vue3.0</code> 只提供了 <code>triggerRef</code> 方法，没有提供 <code>triggerReactive</code> 方法；因此如果使用 <code>triggerReactive</code> 类型的数据，无法主动触发更新界面。</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;p&gt;{{ state.a }}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;p&gt;{{ state.gf.b }}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    import {reactive} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">        setup() {</span></span>
<span class="line"><span style="color:#e1e4e8;">            let state = shallowReactive({</span></span>
<span class="line"><span style="color:#e1e4e8;">                a: &#39;a&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                gf: {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    b: &#39;b&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                    f: {</span></span>
<span class="line"><span style="color:#e1e4e8;">                        c: &#39;c&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                        s: {</span></span>
<span class="line"><span style="color:#e1e4e8;">                            d: &#39;d&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">                        }</span></span>
<span class="line"><span style="color:#e1e4e8;">                    }</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">            })</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            /*</span></span>
<span class="line"><span style="color:#e1e4e8;">            let state = shallowRef({</span></span>
<span class="line"><span style="color:#e1e4e8;">                a: &#39;a&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                gf: {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    b: &#39;b&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                    f: {</span></span>
<span class="line"><span style="color:#e1e4e8;">                        c: &#39;c&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                        s: {</span></span>
<span class="line"><span style="color:#e1e4e8;">                            d: &#39;d&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">                        }</span></span>
<span class="line"><span style="color:#e1e4e8;">                    }</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">            })</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">           // state.a.value = 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">           // state.gf.b.value = 2</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            state.gf.f.s.d.value = 4;</span></span>
<span class="line"><span style="color:#e1e4e8;">            triggerRef(state)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            */</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            state.a = 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">            state.gf.b = 2</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            console.log(state.a, state, state.gf.b, state.gf)</span></span>
<span class="line"><span style="color:#e1e4e8;">            return {state}</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;p&gt;{{ state.a }}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;p&gt;{{ state.gf.b }}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    import {reactive} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    export default {</span></span>
<span class="line"><span style="color:#24292e;">        setup() {</span></span>
<span class="line"><span style="color:#24292e;">            let state = shallowReactive({</span></span>
<span class="line"><span style="color:#24292e;">                a: &#39;a&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                gf: {</span></span>
<span class="line"><span style="color:#24292e;">                    b: &#39;b&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                    f: {</span></span>
<span class="line"><span style="color:#24292e;">                        c: &#39;c&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                        s: {</span></span>
<span class="line"><span style="color:#24292e;">                            d: &#39;d&#39;</span></span>
<span class="line"><span style="color:#24292e;">                        }</span></span>
<span class="line"><span style="color:#24292e;">                    }</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">            })</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            /*</span></span>
<span class="line"><span style="color:#24292e;">            let state = shallowRef({</span></span>
<span class="line"><span style="color:#24292e;">                a: &#39;a&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                gf: {</span></span>
<span class="line"><span style="color:#24292e;">                    b: &#39;b&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                    f: {</span></span>
<span class="line"><span style="color:#24292e;">                        c: &#39;c&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                        s: {</span></span>
<span class="line"><span style="color:#24292e;">                            d: &#39;d&#39;</span></span>
<span class="line"><span style="color:#24292e;">                        }</span></span>
<span class="line"><span style="color:#24292e;">                    }</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">            })</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">           // state.a.value = 1;</span></span>
<span class="line"><span style="color:#24292e;">           // state.gf.b.value = 2</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            state.gf.f.s.d.value = 4;</span></span>
<span class="line"><span style="color:#24292e;">            triggerRef(state)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            */</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            state.a = 1;</span></span>
<span class="line"><span style="color:#24292e;">            state.gf.b = 2</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            console.log(state.a, state, state.gf.b, state.gf)</span></span>
<span class="line"><span style="color:#24292e;">            return {state}</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h3 id="shallowref-的本质" tabindex="-1"><code>shallowRef</code> 的本质 <a class="header-anchor" href="#shallowref-的本质" aria-label="Permalink to &quot;\`shallowRef\` 的本质&quot;">​</a></h3><p><code>shallowRef</code> 底层调用 <code>shallowReactive</code>，即： <code>shallowRef(18) --&gt; shallowReactive({value: 18})</code>。</p><p>如果是通过 shallowRef 创建的数据，它监听的是 .value 的变化。因为底层本质上 .value 才是第一层。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import {reactive} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">        setup() {</span></span>
<span class="line"><span style="color:#e1e4e8;">            let state = shallowReactive({</span></span>
<span class="line"><span style="color:#e1e4e8;">                value: {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    a: &#39;a&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                    gf: {</span></span>
<span class="line"><span style="color:#e1e4e8;">                        b: &#39;b&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                        f: {</span></span>
<span class="line"><span style="color:#e1e4e8;">                            c: &#39;c&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                            s: {</span></span>
<span class="line"><span style="color:#e1e4e8;">                                d: &#39;d&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">                            }</span></span>
<span class="line"><span style="color:#e1e4e8;">                        }</span></span>
<span class="line"><span style="color:#e1e4e8;">                    }</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">            })</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            /*</span></span>
<span class="line"><span style="color:#e1e4e8;">            let state = shallowRef({</span></span>
<span class="line"><span style="color:#e1e4e8;">                a: &#39;a&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                gf: {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    b: &#39;b&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                    f: {</span></span>
<span class="line"><span style="color:#e1e4e8;">                        c: &#39;c&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                        s: {</span></span>
<span class="line"><span style="color:#e1e4e8;">                            d: &#39;d&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">                        }</span></span>
<span class="line"><span style="color:#e1e4e8;">                    }</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">            })</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            state.a.value = 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">            state.gf.b.value = 2</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            */</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            state.a = 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">            state.gf.b = 2</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            console.log(state.a, state, state.gf.b, state.gf)</span></span>
<span class="line"><span style="color:#e1e4e8;">            return {state}</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import {reactive} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    export default {</span></span>
<span class="line"><span style="color:#24292e;">        setup() {</span></span>
<span class="line"><span style="color:#24292e;">            let state = shallowReactive({</span></span>
<span class="line"><span style="color:#24292e;">                value: {</span></span>
<span class="line"><span style="color:#24292e;">                    a: &#39;a&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                    gf: {</span></span>
<span class="line"><span style="color:#24292e;">                        b: &#39;b&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                        f: {</span></span>
<span class="line"><span style="color:#24292e;">                            c: &#39;c&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                            s: {</span></span>
<span class="line"><span style="color:#24292e;">                                d: &#39;d&#39;</span></span>
<span class="line"><span style="color:#24292e;">                            }</span></span>
<span class="line"><span style="color:#24292e;">                        }</span></span>
<span class="line"><span style="color:#24292e;">                    }</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">            })</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            /*</span></span>
<span class="line"><span style="color:#24292e;">            let state = shallowRef({</span></span>
<span class="line"><span style="color:#24292e;">                a: &#39;a&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                gf: {</span></span>
<span class="line"><span style="color:#24292e;">                    b: &#39;b&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                    f: {</span></span>
<span class="line"><span style="color:#24292e;">                        c: &#39;c&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                        s: {</span></span>
<span class="line"><span style="color:#24292e;">                            d: &#39;d&#39;</span></span>
<span class="line"><span style="color:#24292e;">                        }</span></span>
<span class="line"><span style="color:#24292e;">                    }</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">            })</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            state.a.value = 1;</span></span>
<span class="line"><span style="color:#24292e;">            state.gf.b.value = 2</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            */</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            state.a = 1;</span></span>
<span class="line"><span style="color:#24292e;">            state.gf.b = 2</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            console.log(state.a, state, state.gf.b, state.gf)</span></span>
<span class="line"><span style="color:#24292e;">            return {state}</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h3 id="toraw" tabindex="-1">toRaw <a class="header-anchor" href="#toraw" aria-label="Permalink to &quot;toRaw&quot;">​</a></h3><p>例子：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;p&gt;{{obj.name}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">        setup() {</span></span>
<span class="line"><span style="color:#e1e4e8;">            let obj = { name: &#39;zs&#39;, age: 18 }</span></span>
<span class="line"><span style="color:#e1e4e8;">            obj.name = &#39;ming&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            return {obj}</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;p&gt;{{obj.name}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    export default {</span></span>
<span class="line"><span style="color:#24292e;">        setup() {</span></span>
<span class="line"><span style="color:#24292e;">            let obj = { name: &#39;zs&#39;, age: 18 }</span></span>
<span class="line"><span style="color:#24292e;">            obj.name = &#39;ming&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            return {obj}</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><p>修改名字数据发生改变，<code>UI</code> 没有更新，即不是响应式数据。如果先变成响应式使用 Ref 或者 Reactive。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;p&gt;{{state.name}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    import {reactive} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">        setup() {</span></span>
<span class="line"><span style="color:#e1e4e8;">            let obj = { name: &#39;zs&#39;, age: 18 }</span></span>
<span class="line"><span style="color:#e1e4e8;">            //obj.name = &#39;ming&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            let state = reactive(obj);</span></span>
<span class="line"><span style="color:#e1e4e8;">            state.name = &#39;ming&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            console.log(obj == state) // false</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            return {state}</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;p&gt;{{state.name}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    import {reactive} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    export default {</span></span>
<span class="line"><span style="color:#24292e;">        setup() {</span></span>
<span class="line"><span style="color:#24292e;">            let obj = { name: &#39;zs&#39;, age: 18 }</span></span>
<span class="line"><span style="color:#24292e;">            //obj.name = &#39;ming&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            let state = reactive(obj);</span></span>
<span class="line"><span style="color:#24292e;">            state.name = &#39;ming&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            console.log(obj == state) // false</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            return {state}</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><p>从上述得知，state 与 obj 是引用关系，state 引用了 obj。</p><p>如果直接修改 obj，是无法触发界面更新。</p><p>只有通过包装之后的对象修改，才会触发界面更新。</p><p><strong>从 Reactive 中获取原始数据</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;p&gt;{{state.name}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    import {reactive, toRaw} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">        setup() {</span></span>
<span class="line"><span style="color:#e1e4e8;">            let obj = { name: &#39;zs&#39;, age: 18 }</span></span>
<span class="line"><span style="color:#e1e4e8;">            let state = reactive(obj);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            state.name = &#39;ming&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            let obj2 = toRaw(state)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            console.log(obj2, obj == obj2)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            return {state}</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;p&gt;{{state.name}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    import {reactive, toRaw} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    export default {</span></span>
<span class="line"><span style="color:#24292e;">        setup() {</span></span>
<span class="line"><span style="color:#24292e;">            let obj = { name: &#39;zs&#39;, age: 18 }</span></span>
<span class="line"><span style="color:#24292e;">            let state = reactive(obj);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            state.name = &#39;ming&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            let obj2 = toRaw(state)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            console.log(obj2, obj == obj2)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            return {state}</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><p>Ref 或 Reactive 数据类型，每次修改都会被追踪，UI 界面都会被更新，这样非常消耗性能。如果有一些不需要追踪，不需要更新 UI 界面，这时就可以通过 toRaw 方法拿到原始数据，对原始数据进行修改，就不会被追踪，不会更新 UI 界面，性能提高。</p><p><strong>从 Ref 中获取原始数据</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;p&gt;{{state.name}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    import {ref, toRaw} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">        setup() {</span></span>
<span class="line"><span style="color:#e1e4e8;">            let obj = { name: &#39;zs&#39;, age: 18 }</span></span>
<span class="line"><span style="color:#e1e4e8;">            let state = ref(obj);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            state.name = &#39;ming&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            let obj2 = toRaw(state.value)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            console.log(obj2, obj == obj2)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            return {state}</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;p&gt;{{state.name}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    import {ref, toRaw} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    export default {</span></span>
<span class="line"><span style="color:#24292e;">        setup() {</span></span>
<span class="line"><span style="color:#24292e;">            let obj = { name: &#39;zs&#39;, age: 18 }</span></span>
<span class="line"><span style="color:#24292e;">            let state = ref(obj);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            state.name = &#39;ming&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            let obj2 = toRaw(state.value)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            console.log(obj2, obj == obj2)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            return {state}</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><p>从 Ref 中获取原始数据必须添加 .value，因为 Ref 底层是使用 Reactive。</p><h3 id="markraw" tabindex="-1">markRaw <a class="header-anchor" href="#markraw" aria-label="Permalink to &quot;markRaw&quot;">​</a></h3><p>如果原始值永远不想被追踪变化，使用 markRaw。</p><p>例子：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;p&gt;{{state}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;/teamplate&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	import {reactive, markRaw} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	export default{</span></span>
<span class="line"><span style="color:#e1e4e8;">		setup() {</span></span>
<span class="line"><span style="color:#e1e4e8;">			let obj = {name: &#39;zs&#39;, age: 18}</span></span>
<span class="line"><span style="color:#e1e4e8;">			obj = markRaw(obj)</span></span>
<span class="line"><span style="color:#e1e4e8;">			let state = reactive(obj)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">			state.name = &#39;cherry&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">			return {state}</span></span>
<span class="line"><span style="color:#e1e4e8;">		}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;p&gt;{{state}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;/teamplate&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	import {reactive, markRaw} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	export default{</span></span>
<span class="line"><span style="color:#24292e;">		setup() {</span></span>
<span class="line"><span style="color:#24292e;">			let obj = {name: &#39;zs&#39;, age: 18}</span></span>
<span class="line"><span style="color:#24292e;">			obj = markRaw(obj)</span></span>
<span class="line"><span style="color:#24292e;">			let state = reactive(obj)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">			state.name = &#39;cherry&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">			return {state}</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	}</span></span></code></pre></div><h3 id="toref" tabindex="-1">toRef <a class="header-anchor" href="#toref" aria-label="Permalink to &quot;toRef&quot;">​</a></h3><p>和 Ref 一样，都是创建响应式数据。</p><p>使用 Ref 打印输出值：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;p&gt;{{state}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;/teamplate&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	import {reactive, ref} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	export default{</span></span>
<span class="line"><span style="color:#e1e4e8;">		setup() {</span></span>
<span class="line"><span style="color:#e1e4e8;">			let obj = {name: &#39;zs&#39;, age: 18}</span></span>
<span class="line"><span style="color:#e1e4e8;">			let state = ref(obj.name)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">			state.value = &#39;cherry&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">			console.log(obj, state)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">			return {state}</span></span>
<span class="line"><span style="color:#e1e4e8;">		}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;p&gt;{{state}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;/teamplate&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	import {reactive, ref} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	export default{</span></span>
<span class="line"><span style="color:#24292e;">		setup() {</span></span>
<span class="line"><span style="color:#24292e;">			let obj = {name: &#39;zs&#39;, age: 18}</span></span>
<span class="line"><span style="color:#24292e;">			let state = ref(obj.name)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">			state.value = &#39;cherry&#39;</span></span>
<span class="line"><span style="color:#24292e;">			console.log(obj, state)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">			return {state}</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	}</span></span></code></pre></div><p><strong>结论：</strong></p><ul><li><p>如果使用 Ref 将某一个对象中的属性变成响应式的数据，修改响应式数据是不会影响到原始数据。</p></li><li><p>如果响应式数据通过 Ref 创建，修改了数据并会触发 UI 界面更新。</p></li><li><p>相当于 Ref 是复制一份原始值。</p></li></ul><p>使用 roRef 打印输出值：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;p&gt;{{state}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;/teamplate&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	import {reactive, toRef} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	export default{</span></span>
<span class="line"><span style="color:#e1e4e8;">		setup() {</span></span>
<span class="line"><span style="color:#e1e4e8;">			let obj = {name: &#39;zs&#39;, age: 18}</span></span>
<span class="line"><span style="color:#e1e4e8;">			let state = toRef(obj, &#39;name&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">			console.log(state)</span></span>
<span class="line"><span style="color:#e1e4e8;">			state.value = &#39;cherry&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">			console.log(obj, state)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">			return {state}</span></span>
<span class="line"><span style="color:#e1e4e8;">		}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;p&gt;{{state}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;/teamplate&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	import {reactive, toRef} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	export default{</span></span>
<span class="line"><span style="color:#24292e;">		setup() {</span></span>
<span class="line"><span style="color:#24292e;">			let obj = {name: &#39;zs&#39;, age: 18}</span></span>
<span class="line"><span style="color:#24292e;">			let state = toRef(obj, &#39;name&#39;)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">			console.log(state)</span></span>
<span class="line"><span style="color:#24292e;">			state.value = &#39;cherry&#39;</span></span>
<span class="line"><span style="color:#24292e;">			console.log(obj, state)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">			return {state}</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	}</span></span></code></pre></div><p><strong>结论：</strong></p><ul><li><p>如果使用 toRef 将某一个对象中的属性变成响应式的数据，修改响应式数据会影响到原始数据。</p></li><li><p>如果响应式数据通过 toRef 创建，修改了数据并不会触发 UI 界面更新。</p></li><li><p>toRef 的本质是引用原始值。</p></li></ul><p><strong>应用场景：</strong></p><ul><li>如果让响应式数据和以前的数据关联起来，并且更新响应式数据之后并不想更新 UI 界面，就可以使用 toRef。</li></ul><h3 id="rorefs" tabindex="-1">roRefs <a class="header-anchor" href="#rorefs" aria-label="Permalink to &quot;roRefs&quot;">​</a></h3><p>如果数据是多个字段，使用 toRef 就必须写多个字段重新赋值：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;p&gt;{{state}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;/teamplate&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	import {reactive, toRef} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	export default{</span></span>
<span class="line"><span style="color:#e1e4e8;">		setup() {</span></span>
<span class="line"><span style="color:#e1e4e8;">			let obj = {name: &#39;zs&#39;, age: 18}</span></span>
<span class="line"><span style="color:#e1e4e8;">			let state = toRef(obj, &#39;name&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">			let age = toRef(obj, &#39;age&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">			state.value = &#39;cherry&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">			age.value = 20</span></span>
<span class="line"><span style="color:#e1e4e8;">			console.log(obj, state)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">			return {state}</span></span>
<span class="line"><span style="color:#e1e4e8;">		}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;p&gt;{{state}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;/teamplate&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	import {reactive, toRef} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	export default{</span></span>
<span class="line"><span style="color:#24292e;">		setup() {</span></span>
<span class="line"><span style="color:#24292e;">			let obj = {name: &#39;zs&#39;, age: 18}</span></span>
<span class="line"><span style="color:#24292e;">			let state = toRef(obj, &#39;name&#39;)</span></span>
<span class="line"><span style="color:#24292e;">			let age = toRef(obj, &#39;age&#39;)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">			state.value = &#39;cherry&#39;</span></span>
<span class="line"><span style="color:#24292e;">			age.value = 20</span></span>
<span class="line"><span style="color:#24292e;">			console.log(obj, state)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">			return {state}</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	}</span></span></code></pre></div><p>上述可以通过 toRefs 简化，底层逻辑还是通过 toRef 实现。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;p&gt;{{state}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;/teamplate&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	import {reactive, toRefs} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	export default{</span></span>
<span class="line"><span style="color:#e1e4e8;">		setup() {</span></span>
<span class="line"><span style="color:#e1e4e8;">			let obj = {name: &#39;zs&#39;, age: 18}</span></span>
<span class="line"><span style="color:#e1e4e8;">			let state = toRefs(obj)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">			console.log(obj, state)</span></span>
<span class="line"><span style="color:#e1e4e8;">			state.name.value = &#39;cherry&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">			state.age.value = 20</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">			return {state}</span></span>
<span class="line"><span style="color:#e1e4e8;">		}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;p&gt;{{state}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;/teamplate&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	import {reactive, toRefs} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	export default{</span></span>
<span class="line"><span style="color:#24292e;">		setup() {</span></span>
<span class="line"><span style="color:#24292e;">			let obj = {name: &#39;zs&#39;, age: 18}</span></span>
<span class="line"><span style="color:#24292e;">			let state = toRefs(obj)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">			console.log(obj, state)</span></span>
<span class="line"><span style="color:#24292e;">			state.name.value = &#39;cherry&#39;</span></span>
<span class="line"><span style="color:#24292e;">			state.age.value = 20</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">			return {state}</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	}</span></span></code></pre></div><h3 id="customref" tabindex="-1">customRef <a class="header-anchor" href="#customref" aria-label="Permalink to &quot;customRef&quot;">​</a></h3><p>理解为自定义 Ref。</p><p>返回一个 Ref 对象，可以显式的控制以来追踪和触发相应。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;p&gt;{{state}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;/teamplate&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	import {ref, customRef} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	export default{</span></span>
<span class="line"><span style="color:#e1e4e8;">		setup() {</span></span>
<span class="line"><span style="color:#e1e4e8;">			let state = myRef(18)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">			state.value = 20;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">			return {state}</span></span>
<span class="line"><span style="color:#e1e4e8;">		}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	function myRef(value) {</span></span>
<span class="line"><span style="color:#e1e4e8;">		return customRef((track, trigger) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">			//track -&gt; 追踪</span></span>
<span class="line"><span style="color:#e1e4e8;">			//trigger -&gt; 触发</span></span>
<span class="line"><span style="color:#e1e4e8;">			return {</span></span>
<span class="line"><span style="color:#e1e4e8;">				get(){</span></span>
<span class="line"><span style="color:#e1e4e8;">					track() //告诉Vue 这个数据是需要追踪变化</span></span>
<span class="line"><span style="color:#e1e4e8;">					return value</span></span>
<span class="line"><span style="color:#e1e4e8;">				},</span></span>
<span class="line"><span style="color:#e1e4e8;">				set(newVal) {</span></span>
<span class="line"><span style="color:#e1e4e8;">					value = newVal</span></span>
<span class="line"><span style="color:#e1e4e8;">					trigger() // 告诉Vue触发界面更新</span></span>
<span class="line"><span style="color:#e1e4e8;">				}</span></span>
<span class="line"><span style="color:#e1e4e8;">			}</span></span>
<span class="line"><span style="color:#e1e4e8;">		})</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;p&gt;{{state}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;/teamplate&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	import {ref, customRef} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	export default{</span></span>
<span class="line"><span style="color:#24292e;">		setup() {</span></span>
<span class="line"><span style="color:#24292e;">			let state = myRef(18)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">			state.value = 20;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">			return {state}</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	function myRef(value) {</span></span>
<span class="line"><span style="color:#24292e;">		return customRef((track, trigger) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">			//track -&gt; 追踪</span></span>
<span class="line"><span style="color:#24292e;">			//trigger -&gt; 触发</span></span>
<span class="line"><span style="color:#24292e;">			return {</span></span>
<span class="line"><span style="color:#24292e;">				get(){</span></span>
<span class="line"><span style="color:#24292e;">					track() //告诉Vue 这个数据是需要追踪变化</span></span>
<span class="line"><span style="color:#24292e;">					return value</span></span>
<span class="line"><span style="color:#24292e;">				},</span></span>
<span class="line"><span style="color:#24292e;">				set(newVal) {</span></span>
<span class="line"><span style="color:#24292e;">					value = newVal</span></span>
<span class="line"><span style="color:#24292e;">					trigger() // 告诉Vue触发界面更新</span></span>
<span class="line"><span style="color:#24292e;">				}</span></span>
<span class="line"><span style="color:#24292e;">			}</span></span>
<span class="line"><span style="color:#24292e;">		})</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span></code></pre></div><p>具体查看 <a href="https://v3.cn.vuejs.org/api/refs-api.html#customref" target="_blank" rel="noreferrer">Vue3.0 官方文档 API</a>。</p><h3 id="ref-获取元素" tabindex="-1">Ref 获取元素 <a class="header-anchor" href="#ref-获取元素" aria-label="Permalink to &quot;Ref 获取元素&quot;">​</a></h3><p>在 Vue2.x 中，可以通过给元素添加 ref=&#39;xxx&#39;，然后在代码中通过 refs.xxx 方式获取元素。</p><p>在 Vue3.0 中，也可以通过 ref 获取元素，使用写法不同：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;div ref=&quot;box&quot;&gt;box&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;/template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	import {ref, onMounted} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">		setup() {</span></span>
<span class="line"><span style="color:#e1e4e8;">			let box = ref(null)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">			onMounted(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">				console.log(box.value) // ②</span></span>
<span class="line"><span style="color:#e1e4e8;">			})</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">			console.log(box.value) // ①</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">			return {box}</span></span>
<span class="line"><span style="color:#e1e4e8;">		}</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;div ref=&quot;box&quot;&gt;box&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	import {ref, onMounted} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	export default {</span></span>
<span class="line"><span style="color:#24292e;">		setup() {</span></span>
<span class="line"><span style="color:#24292e;">			let box = ref(null)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">			onMounted(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">				console.log(box.value) // ②</span></span>
<span class="line"><span style="color:#24292e;">			})</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">			console.log(box.value) // ①</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">			return {box}</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span></code></pre></div><h3 id="readonly-家族" tabindex="-1">readonly 家族 <a class="header-anchor" href="#readonly-家族" aria-label="Permalink to &quot;readonly 家族&quot;">​</a></h3><ul><li>readonly：用于创建一个只读的数据，并且是递归只读。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;div&gt;{{ state }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;/template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	import {readonly} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">		setup() {</span></span>
<span class="line"><span style="color:#e1e4e8;">			const value = {name: &#39;ls&#39;, age: 26}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">			let state = readonly({</span></span>
<span class="line"><span style="color:#e1e4e8;">				name: &#39;zs&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">				attr{</span></span>
<span class="line"><span style="color:#e1e4e8;">					age: 18,</span></span>
<span class="line"><span style="color:#e1e4e8;">					height: 1.88</span></span>
<span class="line"><span style="color:#e1e4e8;">				}</span></span>
<span class="line"><span style="color:#e1e4e8;">			})</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">			state.name = &#39;cherry&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">			state.attr.age = 20</span></span>
<span class="line"><span style="color:#e1e4e8;">			state.attr.height = 1.77</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">			value.name = &#39;xing&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">			value.age = 66</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">			console.log(value)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">			return {state}</span></span>
<span class="line"><span style="color:#e1e4e8;">		}</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;div&gt;{{ state }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	import {readonly} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	export default {</span></span>
<span class="line"><span style="color:#24292e;">		setup() {</span></span>
<span class="line"><span style="color:#24292e;">			const value = {name: &#39;ls&#39;, age: 26}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">			let state = readonly({</span></span>
<span class="line"><span style="color:#24292e;">				name: &#39;zs&#39;,</span></span>
<span class="line"><span style="color:#24292e;">				attr{</span></span>
<span class="line"><span style="color:#24292e;">					age: 18,</span></span>
<span class="line"><span style="color:#24292e;">					height: 1.88</span></span>
<span class="line"><span style="color:#24292e;">				}</span></span>
<span class="line"><span style="color:#24292e;">			})</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">			state.name = &#39;cherry&#39;</span></span>
<span class="line"><span style="color:#24292e;">			state.attr.age = 20</span></span>
<span class="line"><span style="color:#24292e;">			state.attr.height = 1.77</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">			value.name = &#39;xing&#39;</span></span>
<span class="line"><span style="color:#24292e;">			value.age = 66</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">			console.log(value)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">			return {state}</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span></code></pre></div><p><strong>结论：</strong></p><ul><li>修改响应式数据，修改后的数据没变化，UI 界面数据没变化。</li></ul><p><strong>const 和 readonly 区别：</strong></p><ul><li><p>const：赋值保护，不能给变量重新赋值</p></li><li><p>readonly：属性保护，不能给属性重新赋值</p></li></ul><p><strong>shallowReadonly</strong>：用于创建一个第一层只读的数据。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;div&gt;{{ state }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;/template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	import {shallowReadonly} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">		setup() {</span></span>
<span class="line"><span style="color:#e1e4e8;">			let state = shallowReadonly({</span></span>
<span class="line"><span style="color:#e1e4e8;">				name: &#39;zs&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">				attr{</span></span>
<span class="line"><span style="color:#e1e4e8;">					age: 18,</span></span>
<span class="line"><span style="color:#e1e4e8;">					height: 1.88</span></span>
<span class="line"><span style="color:#e1e4e8;">				}</span></span>
<span class="line"><span style="color:#e1e4e8;">			})</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">			state.name = &#39;cherry&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">			state.attr.age = 20</span></span>
<span class="line"><span style="color:#e1e4e8;">			state.attr.height = 1.77</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">			return {state}</span></span>
<span class="line"><span style="color:#e1e4e8;">		}</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;div&gt;{{ state }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	import {shallowReadonly} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	export default {</span></span>
<span class="line"><span style="color:#24292e;">		setup() {</span></span>
<span class="line"><span style="color:#24292e;">			let state = shallowReadonly({</span></span>
<span class="line"><span style="color:#24292e;">				name: &#39;zs&#39;,</span></span>
<span class="line"><span style="color:#24292e;">				attr{</span></span>
<span class="line"><span style="color:#24292e;">					age: 18,</span></span>
<span class="line"><span style="color:#24292e;">					height: 1.88</span></span>
<span class="line"><span style="color:#24292e;">				}</span></span>
<span class="line"><span style="color:#24292e;">			})</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">			state.name = &#39;cherry&#39;</span></span>
<span class="line"><span style="color:#24292e;">			state.attr.age = 20</span></span>
<span class="line"><span style="color:#24292e;">			state.attr.height = 1.77</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">			return {state}</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span></code></pre></div><p><strong>结论：</strong></p><p>修改响应式数据，修改后的数据第一层没发生变化，第二层数据发生变化，并且 UI 界面没更新。</p><p><strong>isReadonly</strong>：用于判断是否是 Readonly。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;div&gt;{{ state }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;/template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	import {isReadonly,shallowReadonly} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">		setup() {</span></span>
<span class="line"><span style="color:#e1e4e8;">			let state = shallowReadonly({</span></span>
<span class="line"><span style="color:#e1e4e8;">				name: &#39;zs&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">				attr{</span></span>
<span class="line"><span style="color:#e1e4e8;">					age: 18,</span></span>
<span class="line"><span style="color:#e1e4e8;">					height: 1.88</span></span>
<span class="line"><span style="color:#e1e4e8;">				}</span></span>
<span class="line"><span style="color:#e1e4e8;">			})</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">			state.name = &#39;cherry&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">			state.attr.age = 20</span></span>
<span class="line"><span style="color:#e1e4e8;">			state.attr.height = 1.77</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">			console.log(isReadonly(state))</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">			return {state}</span></span>
<span class="line"><span style="color:#e1e4e8;">		}</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;div&gt;{{ state }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	import {isReadonly,shallowReadonly} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	export default {</span></span>
<span class="line"><span style="color:#24292e;">		setup() {</span></span>
<span class="line"><span style="color:#24292e;">			let state = shallowReadonly({</span></span>
<span class="line"><span style="color:#24292e;">				name: &#39;zs&#39;,</span></span>
<span class="line"><span style="color:#24292e;">				attr{</span></span>
<span class="line"><span style="color:#24292e;">					age: 18,</span></span>
<span class="line"><span style="color:#24292e;">					height: 1.88</span></span>
<span class="line"><span style="color:#24292e;">				}</span></span>
<span class="line"><span style="color:#24292e;">			})</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">			state.name = &#39;cherry&#39;</span></span>
<span class="line"><span style="color:#24292e;">			state.attr.age = 20</span></span>
<span class="line"><span style="color:#24292e;">			state.attr.height = 1.77</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">			console.log(isReadonly(state))</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">			return {state}</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span></code></pre></div><h3 id="vue3-响应式数据本质" tabindex="-1">Vue3 响应式数据本质 <a class="header-anchor" href="#vue3-响应式数据本质" aria-label="Permalink to &quot;Vue3 响应式数据本质&quot;">​</a></h3><ul><li><p>Vue2.x 是通过 defineProperty 实现响应式数据。</p></li><li><p>Vue3.0 是通过 Proxy 实现响应式数据。</p></li></ul><p>模拟：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">let obj = { name: &#39;zs&#39;, age: 18 }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	let state = new Proxy(obj, {</span></span>
<span class="line"><span style="color:#e1e4e8;">		get(obj, key) {</span></span>
<span class="line"><span style="color:#e1e4e8;">			return obj[key]</span></span>
<span class="line"><span style="color:#e1e4e8;">		},</span></span>
<span class="line"><span style="color:#e1e4e8;">		set(obj, key, newVal) {</span></span>
<span class="line"><span style="color:#e1e4e8;">			obj[key] = newVal</span></span>
<span class="line"><span style="color:#e1e4e8;">			return true</span></span>
<span class="line"><span style="color:#e1e4e8;">		}</span></span>
<span class="line"><span style="color:#e1e4e8;">	})</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	state.name = &#39;cherry&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	console.log(state)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">let obj = { name: &#39;zs&#39;, age: 18 }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	let state = new Proxy(obj, {</span></span>
<span class="line"><span style="color:#24292e;">		get(obj, key) {</span></span>
<span class="line"><span style="color:#24292e;">			return obj[key]</span></span>
<span class="line"><span style="color:#24292e;">		},</span></span>
<span class="line"><span style="color:#24292e;">		set(obj, key, newVal) {</span></span>
<span class="line"><span style="color:#24292e;">			obj[key] = newVal</span></span>
<span class="line"><span style="color:#24292e;">			return true</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;">	})</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	state.name = &#39;cherry&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	console.log(state)</span></span></code></pre></div><h3 id="实现-shallowreactive" tabindex="-1">实现 shallowReactive <a class="header-anchor" href="#实现-shallowreactive" aria-label="Permalink to &quot;实现 shallowReactive&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function shallowReactive(obj) {</span></span>
<span class="line"><span style="color:#e1e4e8;">		return new Proxy(obj, {</span></span>
<span class="line"><span style="color:#e1e4e8;">			get() {</span></span>
<span class="line"><span style="color:#e1e4e8;">				return obj[key]</span></span>
<span class="line"><span style="color:#e1e4e8;">			},</span></span>
<span class="line"><span style="color:#e1e4e8;">			set(obj, key, newVal) {</span></span>
<span class="line"><span style="color:#e1e4e8;">				obj[key] = newVal</span></span>
<span class="line"><span style="color:#e1e4e8;">				return true</span></span>
<span class="line"><span style="color:#e1e4e8;">			}</span></span>
<span class="line"><span style="color:#e1e4e8;">		})</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	let obj = {</span></span>
<span class="line"><span style="color:#e1e4e8;">		a: &#39;a&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">		gf: {</span></span>
<span class="line"><span style="color:#e1e4e8;">			b: &#39;b&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">			f: {</span></span>
<span class="line"><span style="color:#e1e4e8;">				c: &#39;c&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">			}</span></span>
<span class="line"><span style="color:#e1e4e8;">		}</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	let state = shallowReactive(obj)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	state.a = 1</span></span>
<span class="line"><span style="color:#e1e4e8;">	state.gf.b = 2</span></span>
<span class="line"><span style="color:#e1e4e8;">	state.gf.f.c = 3</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	console.log(state)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function shallowReactive(obj) {</span></span>
<span class="line"><span style="color:#24292e;">		return new Proxy(obj, {</span></span>
<span class="line"><span style="color:#24292e;">			get() {</span></span>
<span class="line"><span style="color:#24292e;">				return obj[key]</span></span>
<span class="line"><span style="color:#24292e;">			},</span></span>
<span class="line"><span style="color:#24292e;">			set(obj, key, newVal) {</span></span>
<span class="line"><span style="color:#24292e;">				obj[key] = newVal</span></span>
<span class="line"><span style="color:#24292e;">				return true</span></span>
<span class="line"><span style="color:#24292e;">			}</span></span>
<span class="line"><span style="color:#24292e;">		})</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	let obj = {</span></span>
<span class="line"><span style="color:#24292e;">		a: &#39;a&#39;,</span></span>
<span class="line"><span style="color:#24292e;">		gf: {</span></span>
<span class="line"><span style="color:#24292e;">			b: &#39;b&#39;,</span></span>
<span class="line"><span style="color:#24292e;">			f: {</span></span>
<span class="line"><span style="color:#24292e;">				c: &#39;c&#39;</span></span>
<span class="line"><span style="color:#24292e;">			}</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	let state = shallowReactive(obj)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	state.a = 1</span></span>
<span class="line"><span style="color:#24292e;">	state.gf.b = 2</span></span>
<span class="line"><span style="color:#24292e;">	state.gf.f.c = 3</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	console.log(state)</span></span></code></pre></div><h3 id="实现-shallowref" tabindex="-1">实现 shallowRef <a class="header-anchor" href="#实现-shallowref" aria-label="Permalink to &quot;实现 shallowRef&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function shallowRef(val) {</span></span>
<span class="line"><span style="color:#e1e4e8;">		return shallowReactive(obj: {value: val})</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	let state = shallowRef(obj)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	state.value.a = 1</span></span>
<span class="line"><span style="color:#e1e4e8;">	state.value.gf.b = 2</span></span>
<span class="line"><span style="color:#e1e4e8;">	state.value.gf.f.c = 3</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	console.log(state)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function shallowRef(val) {</span></span>
<span class="line"><span style="color:#24292e;">		return shallowReactive(obj: {value: val})</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	let state = shallowRef(obj)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	state.value.a = 1</span></span>
<span class="line"><span style="color:#24292e;">	state.value.gf.b = 2</span></span>
<span class="line"><span style="color:#24292e;">	state.value.gf.f.c = 3</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	console.log(state)</span></span></code></pre></div><h3 id="实现-reactive" tabindex="-1">实现 Reactive <a class="header-anchor" href="#实现-reactive" aria-label="Permalink to &quot;实现 Reactive&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function Reactive(obj) {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">		if(typeof obj === &#39;object&#39;) {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">			if(obj instanceof Array) {</span></span>
<span class="line"><span style="color:#e1e4e8;">				// 如果是一个数组，那取出数组中的每一个元素</span></span>
<span class="line"><span style="color:#e1e4e8;">				// 判断每一个元素是否又是一个对象，如果又是一个对象，那么也需要包装Proxy</span></span>
<span class="line"><span style="color:#e1e4e8;">				obj.forEach((item, index) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">					if(typeof item === &#39;object&#39;) obj[index] = Reactive(item)</span></span>
<span class="line"><span style="color:#e1e4e8;">				})</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">			}else{</span></span>
<span class="line"><span style="color:#e1e4e8;">				// 如果是一个对象，那么取出对象属性的取值</span></span>
<span class="line"><span style="color:#e1e4e8;">				// 判断对象属性的取值是否又是一个对象，如果是一个对象，那么也需要包装成 Proxy</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">				for(let key in obj) {</span></span>
<span class="line"><span style="color:#e1e4e8;">					let item = obj[key]</span></span>
<span class="line"><span style="color:#e1e4e8;">					if(typeof item === &#39;object&#39;) obj[key] = Reactive(item)</span></span>
<span class="line"><span style="color:#e1e4e8;">				}</span></span>
<span class="line"><span style="color:#e1e4e8;">			}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">			return new Proxy(obj, {</span></span>
<span class="line"><span style="color:#e1e4e8;">				get() {</span></span>
<span class="line"><span style="color:#e1e4e8;">					return obj[key]</span></span>
<span class="line"><span style="color:#e1e4e8;">				},</span></span>
<span class="line"><span style="color:#e1e4e8;">				set(obj, key, newVal) {</span></span>
<span class="line"><span style="color:#e1e4e8;">					obj[key] = newVal</span></span>
<span class="line"><span style="color:#e1e4e8;">					return true</span></span>
<span class="line"><span style="color:#e1e4e8;">				}</span></span>
<span class="line"><span style="color:#e1e4e8;">			})</span></span>
<span class="line"><span style="color:#e1e4e8;">		}else{</span></span>
<span class="line"><span style="color:#e1e4e8;">			console.log(\`\${obj} is not object\`)</span></span>
<span class="line"><span style="color:#e1e4e8;">		}</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	let obj = {</span></span>
<span class="line"><span style="color:#e1e4e8;">		a: &#39;a&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">		gf: {</span></span>
<span class="line"><span style="color:#e1e4e8;">			b: &#39;b&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">			f: {</span></span>
<span class="line"><span style="color:#e1e4e8;">				c: &#39;c&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">			}</span></span>
<span class="line"><span style="color:#e1e4e8;">		}</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	let state = Reactive(obj)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	state.a = 1</span></span>
<span class="line"><span style="color:#e1e4e8;">	state.gf.b = 2</span></span>
<span class="line"><span style="color:#e1e4e8;">	state.gf.f.c = 3</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	console.log(state)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function Reactive(obj) {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">		if(typeof obj === &#39;object&#39;) {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">			if(obj instanceof Array) {</span></span>
<span class="line"><span style="color:#24292e;">				// 如果是一个数组，那取出数组中的每一个元素</span></span>
<span class="line"><span style="color:#24292e;">				// 判断每一个元素是否又是一个对象，如果又是一个对象，那么也需要包装Proxy</span></span>
<span class="line"><span style="color:#24292e;">				obj.forEach((item, index) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">					if(typeof item === &#39;object&#39;) obj[index] = Reactive(item)</span></span>
<span class="line"><span style="color:#24292e;">				})</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">			}else{</span></span>
<span class="line"><span style="color:#24292e;">				// 如果是一个对象，那么取出对象属性的取值</span></span>
<span class="line"><span style="color:#24292e;">				// 判断对象属性的取值是否又是一个对象，如果是一个对象，那么也需要包装成 Proxy</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">				for(let key in obj) {</span></span>
<span class="line"><span style="color:#24292e;">					let item = obj[key]</span></span>
<span class="line"><span style="color:#24292e;">					if(typeof item === &#39;object&#39;) obj[key] = Reactive(item)</span></span>
<span class="line"><span style="color:#24292e;">				}</span></span>
<span class="line"><span style="color:#24292e;">			}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">			return new Proxy(obj, {</span></span>
<span class="line"><span style="color:#24292e;">				get() {</span></span>
<span class="line"><span style="color:#24292e;">					return obj[key]</span></span>
<span class="line"><span style="color:#24292e;">				},</span></span>
<span class="line"><span style="color:#24292e;">				set(obj, key, newVal) {</span></span>
<span class="line"><span style="color:#24292e;">					obj[key] = newVal</span></span>
<span class="line"><span style="color:#24292e;">					return true</span></span>
<span class="line"><span style="color:#24292e;">				}</span></span>
<span class="line"><span style="color:#24292e;">			})</span></span>
<span class="line"><span style="color:#24292e;">		}else{</span></span>
<span class="line"><span style="color:#24292e;">			console.log(\`\${obj} is not object\`)</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	let obj = {</span></span>
<span class="line"><span style="color:#24292e;">		a: &#39;a&#39;,</span></span>
<span class="line"><span style="color:#24292e;">		gf: {</span></span>
<span class="line"><span style="color:#24292e;">			b: &#39;b&#39;,</span></span>
<span class="line"><span style="color:#24292e;">			f: {</span></span>
<span class="line"><span style="color:#24292e;">				c: &#39;c&#39;</span></span>
<span class="line"><span style="color:#24292e;">			}</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	let state = Reactive(obj)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	state.a = 1</span></span>
<span class="line"><span style="color:#24292e;">	state.gf.b = 2</span></span>
<span class="line"><span style="color:#24292e;">	state.gf.f.c = 3</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	console.log(state)</span></span></code></pre></div><h3 id="实现-ref" tabindex="-1">实现 Ref <a class="header-anchor" href="#实现-ref" aria-label="Permalink to &quot;实现 Ref&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function Ref(val) {</span></span>
<span class="line"><span style="color:#e1e4e8;">		return Reactive(obj: {value: val})</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function Ref(val) {</span></span>
<span class="line"><span style="color:#24292e;">		return Reactive(obj: {value: val})</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span></code></pre></div>`,131),t=[p];function o(c,r,i,y,d,u){return n(),a("div",null,t)}const h=s(l,[["render",o]]);export{v as __pageData,h as default};
