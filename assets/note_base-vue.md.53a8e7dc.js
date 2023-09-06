import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.419948d5.js";const v=JSON.parse('{"title":"Vue2笔记","description":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。","frontmatter":{"title":"Vue2笔记","editLink":true,"head":[["meta",{"name":"description","content":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。"}],["meta",{"name":"keywords","content":"JavaScript,Vue,Vue2,Vue3,响应式"}]]},"headers":[],"relativePath":"note/base-vue.md","filePath":"note/base-vue.md"}'),p={name:"note/base-vue.md"},l=e(`<p><strong>前言</strong> Vue是参考mvvm模式设计的一套用于构建用户界面的渐进式框架，可以自底向上逐层应用，采用非侵入性的响应式系统。在修改数据时，视图也会跟着更新，开发过程中只需关注数据。</p><h3 id="开发中的响应式" tabindex="-1">开发中的响应式： <a class="header-anchor" href="#开发中的响应式" aria-label="Permalink to &quot;开发中的响应式：&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;p&gt;数量：{{ num }}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;p&gt;价格：{{ num * price }}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;p&gt;总计：{{ total }}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;button @click=&quot;btn&quot;&gt;点击按钮&lt;/button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/template&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;p&gt;数量：{{ num }}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;p&gt;价格：{{ num * price }}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;p&gt;总计：{{ total }}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;button @click=&quot;btn&quot;&gt;点击按钮&lt;/button&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/template&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">expprt default {</span></span>
<span class="line"><span style="color:#e1e4e8;">  data() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return {</span></span>
<span class="line"><span style="color:#e1e4e8;">      num: 1,</span></span>
<span class="line"><span style="color:#e1e4e8;">      price: 2</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  computed: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    total: function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">      return this.num * this.price;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  methods: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    btn: function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">      this.num = 10;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#24292e;">expprt default {</span></span>
<span class="line"><span style="color:#24292e;">  data() {</span></span>
<span class="line"><span style="color:#24292e;">    return {</span></span>
<span class="line"><span style="color:#24292e;">      num: 1,</span></span>
<span class="line"><span style="color:#24292e;">      price: 2</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  computed: {</span></span>
<span class="line"><span style="color:#24292e;">    total: function() {</span></span>
<span class="line"><span style="color:#24292e;">      return this.num * this.price;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  methods: {</span></span>
<span class="line"><span style="color:#24292e;">    btn: function() {</span></span>
<span class="line"><span style="color:#24292e;">      this.num = 10;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span></code></pre></div><p>页面属性num发生变化时，经历了</p><ul><li>获取属性num</li><li>更新属性num值</li><li>计算total值，更新页面 数据发生变化后，页面会重新更新数据。</li></ul><p>想要完成整个过程，需要：</p><ul><li>侦测数据变化 (简称：数据劫持)</li><li>收集视图依赖数据 (简称：依赖收集)</li><li>数据变化，通知视图需要更新的部分 (简称：发布订阅模式)</li></ul><h3 id="数据劫持" tabindex="-1">数据劫持 <a class="header-anchor" href="#数据劫持" aria-label="Permalink to &quot;数据劫持&quot;">​</a></h3><p>Vue2.x版本中使用Object.defineProperty进行数据劫持。</p><p>Vue通过对象属性getter/setter监听数据变化，通过getter进行依赖收集，每个setter方法就是一个观察者，数据发生变化时通知订阅者更新视图。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var data = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  title: &#39;Vue&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  obj: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    age: 6</span></span>
<span class="line"><span style="color:#e1e4e8;">  }  </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">function observer(data) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  if(data &amp;&amp; typeof data == &#39;object&#39;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    Object.keys(data).forEach(function(key) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      defineReactive(data, key, data[key]);</span></span>
<span class="line"><span style="color:#e1e4e8;">    })</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function defineReactive(data, key, value) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  observer(value); // 劫持每一层数据</span></span>
<span class="line"><span style="color:#e1e4e8;">  Object.defineProperty(data, key, {</span></span>
<span class="line"><span style="color:#e1e4e8;">    enumberable: true, // 可枚举</span></span>
<span class="line"><span style="color:#e1e4e8;">    configurable: true, // 可配置</span></span>
<span class="line"><span style="color:#e1e4e8;">    get: function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">      console.log(&#39;get&#39;, value)</span></span>
<span class="line"><span style="color:#e1e4e8;">      return value;</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">    set: function(newVal) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      console.log(&#39;set&#39;, newVal);</span></span>
<span class="line"><span style="color:#e1e4e8;">      observer(newVal) // 劫持新值</span></span>
<span class="line"><span style="color:#e1e4e8;">      if(newVal !== value) { </span></span>
<span class="line"><span style="color:#e1e4e8;">          value = newVal;      </span></span>
<span class="line"><span style="color:#e1e4e8;">       }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  })</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">observer(data);</span></span>
<span class="line"><span style="color:#e1e4e8;">data.title // get vue</span></span>
<span class="line"><span style="color:#e1e4e8;">data.obj = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  age: 60</span></span>
<span class="line"><span style="color:#e1e4e8;">} // set { age: 60 }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var data = {</span></span>
<span class="line"><span style="color:#24292e;">  title: &#39;Vue&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  obj: {</span></span>
<span class="line"><span style="color:#24292e;">    age: 6</span></span>
<span class="line"><span style="color:#24292e;">  }  </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">function observer(data) {</span></span>
<span class="line"><span style="color:#24292e;">  if(data &amp;&amp; typeof data == &#39;object&#39;) {</span></span>
<span class="line"><span style="color:#24292e;">    Object.keys(data).forEach(function(key) {</span></span>
<span class="line"><span style="color:#24292e;">      defineReactive(data, key, data[key]);</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function defineReactive(data, key, value) {</span></span>
<span class="line"><span style="color:#24292e;">  observer(value); // 劫持每一层数据</span></span>
<span class="line"><span style="color:#24292e;">  Object.defineProperty(data, key, {</span></span>
<span class="line"><span style="color:#24292e;">    enumberable: true, // 可枚举</span></span>
<span class="line"><span style="color:#24292e;">    configurable: true, // 可配置</span></span>
<span class="line"><span style="color:#24292e;">    get: function() {</span></span>
<span class="line"><span style="color:#24292e;">      console.log(&#39;get&#39;, value)</span></span>
<span class="line"><span style="color:#24292e;">      return value;</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">    set: function(newVal) {</span></span>
<span class="line"><span style="color:#24292e;">      console.log(&#39;set&#39;, newVal);</span></span>
<span class="line"><span style="color:#24292e;">      observer(newVal) // 劫持新值</span></span>
<span class="line"><span style="color:#24292e;">      if(newVal !== value) { </span></span>
<span class="line"><span style="color:#24292e;">          value = newVal;      </span></span>
<span class="line"><span style="color:#24292e;">       }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  })</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">observer(data);</span></span>
<span class="line"><span style="color:#24292e;">data.title // get vue</span></span>
<span class="line"><span style="color:#24292e;">data.obj = {</span></span>
<span class="line"><span style="color:#24292e;">  age: 60</span></span>
<span class="line"><span style="color:#24292e;">} // set { age: 60 }</span></span></code></pre></div><p>函数observe传入一个需要被追踪变化的对象data，遍历对象每个属性都使用defineReactive处理，实现侦测对象变化。</p><p>侦测Vue中的data数据。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function Vue(options) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.$el = options.el;</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.$data = options.data;</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.$options = options;</span></span>
<span class="line"><span style="color:#e1e4e8;">  if(this.$el) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    observer(this.$data);</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function Vue(options) {</span></span>
<span class="line"><span style="color:#24292e;">  this.$el = options.el;</span></span>
<span class="line"><span style="color:#24292e;">  this.$data = options.data;</span></span>
<span class="line"><span style="color:#24292e;">  this.$options = options;</span></span>
<span class="line"><span style="color:#24292e;">  if(this.$el) {</span></span>
<span class="line"><span style="color:#24292e;">    observer(this.$data);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>只需要new Vue一个对象，就会将data中数据进行追踪变化。</p><p>需要注意的是Object.defineProperty有以下缺点：</p><ul><li>无法检测对象属性的添加和删除</li></ul><p>因为Vue通过Object.defineProperty将对象的key转化成getter/setter依赖追踪变化，而getter/setter只能追踪数据是否被修改，却无法追踪新增属性和删除属性。</p><p>对于新增属性，使用Vue.set()方法，可以将新增属性添加到Vue响应式系统中；如：在data对象下新增一个size属性，使用Vue.set(data, &#39;size&#39;, &#39;10KB&#39;)，参数依次是：目标对象，目标对象新增属性，目标对象新增属性值。</p><p>也可以给这个对象重新赋值，如：Vue.set(data, &#39;title&#39;, &#39;MVue&#39;) 。</p><p>对于删除属性，使用Vue.delete(目标对象, 删除目标对象属性)；如：Vue.delete(data, &#39;obj&#39;)。</p><ul><li>不能监听数组变化，可以对数组方法进行重写(参考深入浅出Vue.js)</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var arr = [&#39;小社区&#39;, &#39;社区&#39;, &#39;大社区&#39;];</span></span>
<span class="line"><span style="color:#e1e4e8;">// 定义数组方法</span></span>
<span class="line"><span style="color:#e1e4e8;">var arrMethods = [&#39;push&#39;, &#39;shift&#39;, &#39;pop&#39;, &#39;unshift&#39;];</span></span>
<span class="line"><span style="color:#e1e4e8;">// 获取数组原型</span></span>
<span class="line"><span style="color:#e1e4e8;">var arr_proto = Array.prototype;</span></span>
<span class="line"><span style="color:#e1e4e8;">// 创建新原型对象</span></span>
<span class="line"><span style="color:#e1e4e8;">var _proto = Object.create(arr_proto); </span></span>
<span class="line"><span style="color:#e1e4e8;">arrMethods.forEach(function(method) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  _proto[method] = function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">      var res = arr_proto[method].call(this, ...arguments);     </span></span>
<span class="line"><span style="color:#e1e4e8;">      return res;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span>
<span class="line"><span style="color:#e1e4e8;">function observer(data) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  if(Array.isArray(data)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      data.__proto__ = _proto;</span></span>
<span class="line"><span style="color:#e1e4e8;">      return;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  if(data &amp;&amp; typeof data == &#39;object&#39;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    Object.keys(data).forEach(function(key) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      defineReactive(data, key, data[key]);</span></span>
<span class="line"><span style="color:#e1e4e8;">    })</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">} </span></span>
<span class="line"><span style="color:#e1e4e8;">function defineReactive(data, key, value) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  observer(value);</span></span>
<span class="line"><span style="color:#e1e4e8;">  Object.defineProperty(data, key, {</span></span>
<span class="line"><span style="color:#e1e4e8;">    enumberable: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    configurable: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    get: function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">      console.log(&#39;get&#39;, value);</span></span>
<span class="line"><span style="color:#e1e4e8;">      return value;</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">    set: function(newVal) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      console.log(&#39;set&#39;, newVal);</span></span>
<span class="line"><span style="color:#e1e4e8;">      observer(newVal);</span></span>
<span class="line"><span style="color:#e1e4e8;">      if(newVal !== value) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        value = newVal;</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  })</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">//添加属性重新赋值给新的对象</span></span>
<span class="line"><span style="color:#e1e4e8;">function $set(data, key, value) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  defineProperty(data, key, value);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">observer(arr);</span></span>
<span class="line"><span style="color:#e1e4e8;">arr.shift(); // 使用定义数组中方法</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(obj); // [&quot;社区&quot;, &quot;大社区&quot;]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var arr = [&#39;小社区&#39;, &#39;社区&#39;, &#39;大社区&#39;];</span></span>
<span class="line"><span style="color:#24292e;">// 定义数组方法</span></span>
<span class="line"><span style="color:#24292e;">var arrMethods = [&#39;push&#39;, &#39;shift&#39;, &#39;pop&#39;, &#39;unshift&#39;];</span></span>
<span class="line"><span style="color:#24292e;">// 获取数组原型</span></span>
<span class="line"><span style="color:#24292e;">var arr_proto = Array.prototype;</span></span>
<span class="line"><span style="color:#24292e;">// 创建新原型对象</span></span>
<span class="line"><span style="color:#24292e;">var _proto = Object.create(arr_proto); </span></span>
<span class="line"><span style="color:#24292e;">arrMethods.forEach(function(method) {</span></span>
<span class="line"><span style="color:#24292e;">  _proto[method] = function() {</span></span>
<span class="line"><span style="color:#24292e;">      var res = arr_proto[method].call(this, ...arguments);     </span></span>
<span class="line"><span style="color:#24292e;">      return res;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;">function observer(data) {</span></span>
<span class="line"><span style="color:#24292e;">  if(Array.isArray(data)) {</span></span>
<span class="line"><span style="color:#24292e;">      data.__proto__ = _proto;</span></span>
<span class="line"><span style="color:#24292e;">      return;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  if(data &amp;&amp; typeof data == &#39;object&#39;) {</span></span>
<span class="line"><span style="color:#24292e;">    Object.keys(data).forEach(function(key) {</span></span>
<span class="line"><span style="color:#24292e;">      defineReactive(data, key, data[key]);</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">} </span></span>
<span class="line"><span style="color:#24292e;">function defineReactive(data, key, value) {</span></span>
<span class="line"><span style="color:#24292e;">  observer(value);</span></span>
<span class="line"><span style="color:#24292e;">  Object.defineProperty(data, key, {</span></span>
<span class="line"><span style="color:#24292e;">    enumberable: true,</span></span>
<span class="line"><span style="color:#24292e;">    configurable: true,</span></span>
<span class="line"><span style="color:#24292e;">    get: function() {</span></span>
<span class="line"><span style="color:#24292e;">      console.log(&#39;get&#39;, value);</span></span>
<span class="line"><span style="color:#24292e;">      return value;</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">    set: function(newVal) {</span></span>
<span class="line"><span style="color:#24292e;">      console.log(&#39;set&#39;, newVal);</span></span>
<span class="line"><span style="color:#24292e;">      observer(newVal);</span></span>
<span class="line"><span style="color:#24292e;">      if(newVal !== value) {</span></span>
<span class="line"><span style="color:#24292e;">        value = newVal;</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  })</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">//添加属性重新赋值给新的对象</span></span>
<span class="line"><span style="color:#24292e;">function $set(data, key, value) {</span></span>
<span class="line"><span style="color:#24292e;">  defineProperty(data, key, value);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">observer(arr);</span></span>
<span class="line"><span style="color:#24292e;">arr.shift(); // 使用定义数组中方法</span></span>
<span class="line"><span style="color:#24292e;">console.log(obj); // [&quot;社区&quot;, &quot;大社区&quot;]</span></span></code></pre></div><p>上述把数组原自带的方法进行重写，覆盖掉原数组方法；重写后的数组方法需要被拦截，但是Vue对这些重写的方法是拦截不到的，也就不能响应。</p><p>比如：修改上述数组某一项值，无法侦测数组变化。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">arr[1] = &#39;物业&#39;;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">arr[1] = &#39;物业&#39;;</span></span></code></pre></div><p>Vue3.x使用proxy作为实现代理，proxy具有代理、拦截与劫持的特征。</p><p>proxy实现特征：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">let arr = [&#39;小社区&#39;, &#39;社区&#39;， &#39;大社区&#39;];</span></span>
<span class="line"><span style="color:#e1e4e8;">let handler = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  get(data, key) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    if(typeof data[key] == &#39;object&#39; &amp;&amp; </span></span>
<span class="line"><span style="color:#e1e4e8;">    data[key] !== null) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      return new Proxy(data[key], handler);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    return Reflect.get(data, key);</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  set(data, key, value) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    if(key == &#39;length&#39;) return true;</span></span>
<span class="line"><span style="color:#e1e4e8;">    return Reflect.set(data, key, value);</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">let proxy = new Proxy(arr, handler);</span></span>
<span class="line"><span style="color:#e1e4e8;">proxy[0] = &#39;物业&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(proxy); // Proxy {0: &quot;物业&quot;, 1: &quot;社区&quot;, 2: &quot;大社区&quot;}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">let arr = [&#39;小社区&#39;, &#39;社区&#39;， &#39;大社区&#39;];</span></span>
<span class="line"><span style="color:#24292e;">let handler = {</span></span>
<span class="line"><span style="color:#24292e;">  get(data, key) {</span></span>
<span class="line"><span style="color:#24292e;">    if(typeof data[key] == &#39;object&#39; &amp;&amp; </span></span>
<span class="line"><span style="color:#24292e;">    data[key] !== null) {</span></span>
<span class="line"><span style="color:#24292e;">      return new Proxy(data[key], handler);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    return Reflect.get(data, key);</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  set(data, key, value) {</span></span>
<span class="line"><span style="color:#24292e;">    if(key == &#39;length&#39;) return true;</span></span>
<span class="line"><span style="color:#24292e;">    return Reflect.set(data, key, value);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">let proxy = new Proxy(arr, handler);</span></span>
<span class="line"><span style="color:#24292e;">proxy[0] = &#39;物业&#39;;</span></span>
<span class="line"><span style="color:#24292e;">console.log(proxy); // Proxy {0: &quot;物业&quot;, 1: &quot;社区&quot;, 2: &quot;大社区&quot;}</span></span></code></pre></div><p>对比Object.defineProperty与proxy：</p><p>Object.defineProperty必须遍历对象每个属性；无法检测对象属性的新增属性与删除属性；无法监听重写数组方法的变化。</p><p>proxy只需做一层代理就能监听同级结构下所有属性，支持代理数组变化。(深层次的数据结构，还是需要递归)</p><h3 id="收集依赖" tabindex="-1">收集依赖 <a class="header-anchor" href="#收集依赖" aria-label="Permalink to &quot;收集依赖&quot;">​</a></h3><p>观察数据目的是当数据属性发生变化时，可以通知那些使用了该数据的地方。</p><p>比如：开篇用到的数据num，当数据num发生变化时，会通知所有用到数据num的地方。</p><p>如果是多个Vue实例共用一个变量，比如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var str = &#39;Vue&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">var vm1 = new Vue({</span></span>
<span class="line"><span style="color:#e1e4e8;">  data: str,</span></span>
<span class="line"><span style="color:#e1e4e8;">  template: &#39;&lt;div&gt; {{ str }} &lt;/div&gt;&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span>
<span class="line"><span style="color:#e1e4e8;">var vm2 = new Vue({</span></span>
<span class="line"><span style="color:#e1e4e8;">  data: str,</span></span>
<span class="line"><span style="color:#e1e4e8;">  template: &#39;&lt;div&gt; {{ str }} &lt;/div&gt;&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var str = &#39;Vue&#39;;</span></span>
<span class="line"><span style="color:#24292e;">var vm1 = new Vue({</span></span>
<span class="line"><span style="color:#24292e;">  data: str,</span></span>
<span class="line"><span style="color:#24292e;">  template: &#39;&lt;div&gt; {{ str }} &lt;/div&gt;&#39;</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;">var vm2 = new Vue({</span></span>
<span class="line"><span style="color:#24292e;">  data: str,</span></span>
<span class="line"><span style="color:#24292e;">  template: &#39;&lt;div&gt; {{ str }} &lt;/div&gt;&#39;</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><p>此时更改str属性值，这两个实例视图会更新。那么只有通过收集依赖才能知道哪些地方依赖了数据str，以及数据str派发更新数据。</p><p>收集依赖核心思想是事件发布订阅模式，这里有两个角色：订阅者Dep和观察者Watcher。</p><p>收集依赖是为依赖寻找一个存储依赖的地方，因此创建了Dep。使用订阅者Dep用来收集依赖，删除依赖、向依赖发送消息。</p><p>简单实现订阅者Dep：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function Dep() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.subs = []; // 存储Watcher</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">Dep.prototype.addSub = function(sub) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.subs.push(sub); // 添加Watcher</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">Dep.prototype.notify = function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.subs.forEach(function(sub) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    sub.update(); // 通知Watcher更新视图</span></span>
<span class="line"><span style="color:#e1e4e8;">  })</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function Dep() {</span></span>
<span class="line"><span style="color:#24292e;">  this.subs = []; // 存储Watcher</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">Dep.prototype.addSub = function(sub) {</span></span>
<span class="line"><span style="color:#24292e;">  this.subs.push(sub); // 添加Watcher</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">Dep.prototype.notify = function() {</span></span>
<span class="line"><span style="color:#24292e;">  this.subs.forEach(function(sub) {</span></span>
<span class="line"><span style="color:#24292e;">    sub.update(); // 通知Watcher更新视图</span></span>
<span class="line"><span style="color:#24292e;">  })</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>从上面代码订阅者Dep的作用是存储观察者Watcher，可以把观察者Watcher理解成一个中转站，当数据发生变化时通知观察者Watcher，再有观察者Watcher通知其他地方。</p><p>当需要依赖收集时调用函数addSub，当需要派发更新时调用函数notify。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var dep = new Dep();</span></span>
<span class="line"><span style="color:#e1e4e8;">dep.addSub(function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(&#39;add&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span>
<span class="line"><span style="color:#e1e4e8;">dep.notify();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var dep = new Dep();</span></span>
<span class="line"><span style="color:#24292e;">dep.addSub(function() {</span></span>
<span class="line"><span style="color:#24292e;">  console.log(&#39;add&#39;)</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;">dep.notify();</span></span></code></pre></div><p>如何收集依赖：在getter中收集依赖，在setter中触发依赖；就是把用到该数据的地方收集起来，等到属性发生变化时，把之前收集好的依赖循环触发一边。</p><p>具体是当外界通过观察者Watcher读取数据时就会触发getter，将观察者Watcher添加到依赖中。哪个观察者Watcher触发getter就把哪个观察者Watcher收集到Dep中；当数据发生变化时，会循环依赖列表，把所有的观察者Watcher都通知一遍。</p><h3 id="观察者watcher" tabindex="-1">观察者Watcher <a class="header-anchor" href="#观察者watcher" aria-label="Permalink to &quot;观察者Watcher&quot;">​</a></h3><p>Vue官方定义一个Watcher类用来表示观察订阅依赖。其中《深入浅出Vue.js》给出这样的解释：为什么要引入观察者Watcher。</p><p>在属性发生变化后，需要通知用到该数据的地方。而该数据可能被很多地方用到，并且类型还不一样，可能是模版，可能是开发者编写的watch。这时候需要抽象出一个能集中处理这些情况的类，然后在依赖收集阶段只收集这个封装好的类的实例，通知也只通知这个封装好的类的实例，再由这个封装好的类的实例通知到其他。</p><p>依赖收集的目的是将观察者Watcher存放到当前订阅者Dep的subs中。</p><p>简单实现观察者Watcher：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function Watcher(data, key, cb) { // cb -&gt;callback缩写</span></span>
<span class="line"><span style="color:#e1e4e8;">  Dep.target = this;</span></span>
<span class="line"><span style="color:#e1e4e8;">  // Dep.target 指向自己，在触发getter时添加监听</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.data = data;</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.key = key;</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.cb = cb;</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.value = data[key];</span></span>
<span class="line"><span style="color:#e1e4e8;">  Dep.target = null; </span></span>
<span class="line"><span style="color:#e1e4e8;">  // 如果不为null，每次都追加一个Dep</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 比如：第一次是[&#39;Dep&#39;], 第二次是[&#39;Dep&#39;, &#39;Dep&#39;], ...</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">Watcher.prototype.update = function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.value = this.data[this.key];</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.cb(this.value);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function Watcher(data, key, cb) { // cb -&gt;callback缩写</span></span>
<span class="line"><span style="color:#24292e;">  Dep.target = this;</span></span>
<span class="line"><span style="color:#24292e;">  // Dep.target 指向自己，在触发getter时添加监听</span></span>
<span class="line"><span style="color:#24292e;">  this.data = data;</span></span>
<span class="line"><span style="color:#24292e;">  this.key = key;</span></span>
<span class="line"><span style="color:#24292e;">  this.cb = cb;</span></span>
<span class="line"><span style="color:#24292e;">  this.value = data[key];</span></span>
<span class="line"><span style="color:#24292e;">  Dep.target = null; </span></span>
<span class="line"><span style="color:#24292e;">  // 如果不为null，每次都追加一个Dep</span></span>
<span class="line"><span style="color:#24292e;">  // 比如：第一次是[&#39;Dep&#39;], 第二次是[&#39;Dep&#39;, &#39;Dep&#39;], ...</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">Watcher.prototype.update = function() {</span></span>
<span class="line"><span style="color:#24292e;">  this.value = this.data[this.key];</span></span>
<span class="line"><span style="color:#24292e;">  this.cb(this.value);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>执行构造函数把Dep.target指向自身，收集到对应的Watcher，在派发更新时取出对应的观察者Watcher，执行函数update。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>结合以上内容实现一个简单响应式</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var data = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  title: &#39;vue&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  obj: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    age: 6</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">function Dep() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.subs = [];</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">Dep.prototype.addSub = function(sub) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.subs.push(sub);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">Dep.prototype.notify = function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(&#39;Dep notify&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">  // this.subs.forEach(function(sub) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  // sub.update()</span></span>
<span class="line"><span style="color:#e1e4e8;">  // })</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">function render() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(&#39;模版render...&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">function observer(data) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  if(data &amp;&amp; typeof data == &#39;object&#39;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    Object.keys(data).forEach(function(key) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      defineReactive(data, key, data[key]);</span></span>
<span class="line"><span style="color:#e1e4e8;">    })</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">function defineReactive(data, key, value) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  observer(value);</span></span>
<span class="line"><span style="color:#e1e4e8;">  var dep = new Dep();</span></span>
<span class="line"><span style="color:#e1e4e8;">  Object.defineProperty(data, key, {</span></span>
<span class="line"><span style="color:#e1e4e8;">    enumberable: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    configurable: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    get: function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">      console.log(&#39;get：&#39; value);</span></span>
<span class="line"><span style="color:#e1e4e8;">      Dep.target &amp;&amp; dep.addSub(Dep.target);</span></span>
<span class="line"><span style="color:#e1e4e8;">      return value;</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">    set: function (newVal) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      console.log(&#39;set：&#39;, newVal);</span></span>
<span class="line"><span style="color:#e1e4e8;">      if(newVal !== value) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        value = newVal;</span></span>
<span class="line"><span style="color:#e1e4e8;">        dep.notify();</span></span>
<span class="line"><span style="color:#e1e4e8;">        render();</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  })</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">function MVue(options) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.$options = options;</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.$el = options.el;</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.$data = options.data;</span></span>
<span class="line"><span style="color:#e1e4e8;">  if(this.$el) observer(this.$data);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">new MVue({</span></span>
<span class="line"><span style="color:#e1e4e8;">  el: &#39;#app&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  data: data</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span>
<span class="line"><span style="color:#e1e4e8;">data.title; // 首次访问数据</span></span>
<span class="line"><span style="color:#e1e4e8;">data.title = &#39;MVue&#39;; // 修改数据</span></span>
<span class="line"><span style="color:#e1e4e8;">data.title; // 访问修改后的数据</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var data = {</span></span>
<span class="line"><span style="color:#24292e;">  title: &#39;vue&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  obj: {</span></span>
<span class="line"><span style="color:#24292e;">    age: 6</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">function Dep() {</span></span>
<span class="line"><span style="color:#24292e;">  this.subs = [];</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">Dep.prototype.addSub = function(sub) {</span></span>
<span class="line"><span style="color:#24292e;">  this.subs.push(sub);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">Dep.prototype.notify = function() {</span></span>
<span class="line"><span style="color:#24292e;">  console.log(&#39;Dep notify&#39;);</span></span>
<span class="line"><span style="color:#24292e;">  // this.subs.forEach(function(sub) {</span></span>
<span class="line"><span style="color:#24292e;">  // sub.update()</span></span>
<span class="line"><span style="color:#24292e;">  // })</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">function render() {</span></span>
<span class="line"><span style="color:#24292e;">  console.log(&#39;模版render...&#39;);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">function observer(data) {</span></span>
<span class="line"><span style="color:#24292e;">  if(data &amp;&amp; typeof data == &#39;object&#39;) {</span></span>
<span class="line"><span style="color:#24292e;">    Object.keys(data).forEach(function(key) {</span></span>
<span class="line"><span style="color:#24292e;">      defineReactive(data, key, data[key]);</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">function defineReactive(data, key, value) {</span></span>
<span class="line"><span style="color:#24292e;">  observer(value);</span></span>
<span class="line"><span style="color:#24292e;">  var dep = new Dep();</span></span>
<span class="line"><span style="color:#24292e;">  Object.defineProperty(data, key, {</span></span>
<span class="line"><span style="color:#24292e;">    enumberable: true,</span></span>
<span class="line"><span style="color:#24292e;">    configurable: true,</span></span>
<span class="line"><span style="color:#24292e;">    get: function() {</span></span>
<span class="line"><span style="color:#24292e;">      console.log(&#39;get：&#39; value);</span></span>
<span class="line"><span style="color:#24292e;">      Dep.target &amp;&amp; dep.addSub(Dep.target);</span></span>
<span class="line"><span style="color:#24292e;">      return value;</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">    set: function (newVal) {</span></span>
<span class="line"><span style="color:#24292e;">      console.log(&#39;set：&#39;, newVal);</span></span>
<span class="line"><span style="color:#24292e;">      if(newVal !== value) {</span></span>
<span class="line"><span style="color:#24292e;">        value = newVal;</span></span>
<span class="line"><span style="color:#24292e;">        dep.notify();</span></span>
<span class="line"><span style="color:#24292e;">        render();</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  })</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">function MVue(options) {</span></span>
<span class="line"><span style="color:#24292e;">  this.$options = options;</span></span>
<span class="line"><span style="color:#24292e;">  this.$el = options.el;</span></span>
<span class="line"><span style="color:#24292e;">  this.$data = options.data;</span></span>
<span class="line"><span style="color:#24292e;">  if(this.$el) observer(this.$data);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">new MVue({</span></span>
<span class="line"><span style="color:#24292e;">  el: &#39;#app&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  data: data</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;">data.title; // 首次访问数据</span></span>
<span class="line"><span style="color:#24292e;">data.title = &#39;MVue&#39;; // 修改数据</span></span>
<span class="line"><span style="color:#24292e;">data.title; // 访问修改后的数据</span></span></code></pre></div><p>函数render被渲染时，读取所需对象的值，会触发getter方法把当前观察者Watcher收集到函数Dep中；如果需要修改对象的值，会触发setter方法，通知函数Dep中的notify方法，触发所有观察者Watcher对象中的update方法更新对应视图。</p><p>总结Vue响应式原理</p><p>通过数据劫持结合订阅与发布者模式的方式，通过Object.defineProperty劫持各个属性的getter/setter，在数据发生变化时发布消息给订阅者，触发相应的回调函数。</p><p>执行new Vue整个过程发生了：</p><p>new Vue后，Vue会调用函数_init进行初始化。在这个过程data通过函数observer转化成getter/setter追踪数据变化；当被设置的对象被读取时会执行getter方法，当对象被重新赋值时会执行setter方法。</p><p>函数render执行时，会读取所需对象的值，会触发getter方法把观察者Watcher添加到依赖中进行依赖收集。</p><p>修改对象的值时，会触发相应的setter方法；setter方法通知之前依赖收集得到的Dep中每一个观察者Watcher，再有观察者Watcher通知其他，自己的值被更改了需要重新渲染视图；这时观察者Watcher就会调用update方法更新视图。</p>`,65),o=[l];function t(c,r,i,y,d,u){return n(),a("div",null,o)}const g=s(p,[["render",t]]);export{v as __pageData,g as default};
