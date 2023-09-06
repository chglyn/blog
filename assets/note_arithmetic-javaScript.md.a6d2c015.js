import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.419948d5.js";const v=JSON.parse('{"title":"JavaScript Array","description":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。","frontmatter":{"title":"JavaScript Array","editLink":true,"head":[["meta",{"name":"description","content":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。"}],["meta",{"name":"keywords","content":"javaScript,数组去重,splice,indexOf,斐波那契数列,阶乘"}]]},"headers":[],"relativePath":"note/arithmetic-javaScript.md","filePath":"note/arithmetic-javaScript.md"}'),l={name:"note/arithmetic-javaScript.md"},p=e(`<p>本篇基本算法针对常用方法，无论在任何地方都有可能使用到。在这里做下笔记，偶尔拿来看看。^-^</p><h3 id="数组去重" tabindex="-1">数组去重 <a class="header-anchor" href="#数组去重" aria-label="Permalink to &quot;数组去重&quot;">​</a></h3><ul><li>利用对象属性不可重复特征</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function sort(arr) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  var obj = {};</span></span>
<span class="line"><span style="color:#e1e4e8;">  var newArr = [];</span></span>
<span class="line"><span style="color:#e1e4e8;">  for(var i=0; i&lt;arr.length; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    if(!obj[arr[i]]) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      newArr.push(arr[i]);</span></span>
<span class="line"><span style="color:#e1e4e8;">      obj[arr[i]] = 1; // 随意赋值</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  return newArr;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function sort(arr) {</span></span>
<span class="line"><span style="color:#24292e;">  var obj = {};</span></span>
<span class="line"><span style="color:#24292e;">  var newArr = [];</span></span>
<span class="line"><span style="color:#24292e;">  for(var i=0; i&lt;arr.length; i++) {</span></span>
<span class="line"><span style="color:#24292e;">    if(!obj[arr[i]]) {</span></span>
<span class="line"><span style="color:#24292e;">      newArr.push(arr[i]);</span></span>
<span class="line"><span style="color:#24292e;">      obj[arr[i]] = 1; // 随意赋值</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  return newArr;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><ul><li>利用数组splice方法</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function sort(arr) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  for(var i=0; i&lt;arr.length; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    for(var j=i+1; j&lt;arr.length; j++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      if(arrr[i] == arr[j]) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        arr.splice(j, 1)</span></span>
<span class="line"><span style="color:#e1e4e8;">        j--;</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  return arr;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function sort(arr) {</span></span>
<span class="line"><span style="color:#24292e;">  for(var i=0; i&lt;arr.length; i++) {</span></span>
<span class="line"><span style="color:#24292e;">    for(var j=i+1; j&lt;arr.length; j++) {</span></span>
<span class="line"><span style="color:#24292e;">      if(arrr[i] == arr[j]) {</span></span>
<span class="line"><span style="color:#24292e;">        arr.splice(j, 1)</span></span>
<span class="line"><span style="color:#24292e;">        j--;</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  return arr;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><ul><li>利用数组indexOf方法</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function sort(arr) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  var newArr = [];</span></span>
<span class="line"><span style="color:#e1e4e8;">  for(var i=0; i&lt;arr.length; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    if(newArr.indexOf(arr[i]) == -1) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      newArr.push(arr[i])</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  return newArr;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function sort(arr) {</span></span>
<span class="line"><span style="color:#24292e;">  var newArr = [];</span></span>
<span class="line"><span style="color:#24292e;">  for(var i=0; i&lt;arr.length; i++) {</span></span>
<span class="line"><span style="color:#24292e;">    if(newArr.indexOf(arr[i]) == -1) {</span></span>
<span class="line"><span style="color:#24292e;">      newArr.push(arr[i])</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  return newArr;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function sort(arr) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  var newArr = [];</span></span>
<span class="line"><span style="color:#e1e4e8;">  for(var i=0; i&lt;arr.length; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    if(arr.indexOf(arr[i]) == i) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      newArr.push(arr[i])</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  return newArr;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function sort(arr) {</span></span>
<span class="line"><span style="color:#24292e;">  var newArr = [];</span></span>
<span class="line"><span style="color:#24292e;">  for(var i=0; i&lt;arr.length; i++) {</span></span>
<span class="line"><span style="color:#24292e;">    if(arr.indexOf(arr[i]) == i) {</span></span>
<span class="line"><span style="color:#24292e;">      newArr.push(arr[i])</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  return newArr;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><ul><li>使用ES6特征</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[... new Set([1, 1, 2, 2])]</span></span>
<span class="line"><span style="color:#e1e4e8;">// or</span></span>
<span class="line"><span style="color:#e1e4e8;">Array.from(new Set([1, 1, 2, 2]))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[... new Set([1, 1, 2, 2])]</span></span>
<span class="line"><span style="color:#24292e;">// or</span></span>
<span class="line"><span style="color:#24292e;">Array.from(new Set([1, 1, 2, 2]))</span></span></code></pre></div><h3 id="闭包运用" tabindex="-1">闭包运用 <a class="header-anchor" href="#闭包运用" aria-label="Permalink to &quot;闭包运用&quot;">​</a></h3><p>输入sum(1)(2)与sum(1, 2)值相等</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function sum() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  var x = arguments[0];</span></span>
<span class="line"><span style="color:#e1e4e8;">  if(arguments.length == 1) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return function(y) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      return x + y;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }else{</span></span>
<span class="line"><span style="color:#e1e4e8;">    var x = 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    for(var i=0; i&lt;arguments.length; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      x = x + arguments[i];</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    return x;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function sum() {</span></span>
<span class="line"><span style="color:#24292e;">  var x = arguments[0];</span></span>
<span class="line"><span style="color:#24292e;">  if(arguments.length == 1) {</span></span>
<span class="line"><span style="color:#24292e;">    return function(y) {</span></span>
<span class="line"><span style="color:#24292e;">      return x + y;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }else{</span></span>
<span class="line"><span style="color:#24292e;">    var x = 0;</span></span>
<span class="line"><span style="color:#24292e;">    for(var i=0; i&lt;arguments.length; i++) {</span></span>
<span class="line"><span style="color:#24292e;">      x = x + arguments[i];</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    return x;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="冒泡排序" tabindex="-1">冒泡排序 <a class="header-anchor" href="#冒泡排序" aria-label="Permalink to &quot;冒泡排序&quot;">​</a></h3><p>冒泡排序是最简单的排序算法。它重复走访过要排序的数列，一次比较两个元素，如果它们的顺序错误就把它们交换过来。走访数列的工作是重复地进行直到没有再需要交换，即该数列已经排序完成。 思路：</p><ul><li>比较相邻的元素，如果第一个比第二个大，就交换它们。</li><li>对每一个相邻元素做同样的工作，从开始第一对到结尾的最后一对，这一轮结束在最后的元素应该会是最大的数。</li><li>对所有的元素重复以上步骤，除了最后一个。</li><li>重复以上步骤，直到排序完成。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function sort(arr) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  var temp = &#39;&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">  if(arr.length &lt;= 1) return arr;</span></span>
<span class="line"><span style="color:#e1e4e8;">  for(var i=0; i&lt;arr.length-1; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    for(var j=0; j&lt;arr.length-1-i; j++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      if(arr[j] &gt; arr[j+1]) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        temp = arr[j+1];</span></span>
<span class="line"><span style="color:#e1e4e8;">        arr[j+1] = arr[j];</span></span>
<span class="line"><span style="color:#e1e4e8;">        arr[j] = temp;</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  return arr;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function sort(arr) {</span></span>
<span class="line"><span style="color:#24292e;">  var temp = &#39;&#39;;</span></span>
<span class="line"><span style="color:#24292e;">  if(arr.length &lt;= 1) return arr;</span></span>
<span class="line"><span style="color:#24292e;">  for(var i=0; i&lt;arr.length-1; i++) {</span></span>
<span class="line"><span style="color:#24292e;">    for(var j=0; j&lt;arr.length-1-i; j++) {</span></span>
<span class="line"><span style="color:#24292e;">      if(arr[j] &gt; arr[j+1]) {</span></span>
<span class="line"><span style="color:#24292e;">        temp = arr[j+1];</span></span>
<span class="line"><span style="color:#24292e;">        arr[j+1] = arr[j];</span></span>
<span class="line"><span style="color:#24292e;">        arr[j] = temp;</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  return arr;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>冒泡排序特征：如果数据足够大运行效率低，也比较耗时。</p><h3 id="快速排序" tabindex="-1">快速排序 <a class="header-anchor" href="#快速排序" aria-label="Permalink to &quot;快速排序&quot;">​</a></h3><p>基本思想：通过一趟排序将待排记录分割成独立的两部分，其中一部分记录的关键字均比另一部分关键字小，则可分别对这两部分记录继续进行排序，达到整个序列有序。</p><p>思路：</p><ul><li>从数列中找出一个基准元素。</li><li>重新排序数列，所有元素比基准元素小的排在基准元素前面，所有元素比基准元素大的排在基准元素后面(相同的数可以到任意一边)，该基准元素就处于数列的中间位置。</li><li>递归的把小于基准元素的子数列和大于基准元素的子数列排序。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function sort(arr) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  if(arr.length &lt;= 1) return arr;</span></span>
<span class="line"><span style="color:#e1e4e8;">  var minIndex = Math.floor(arr.length/2);</span></span>
<span class="line"><span style="color:#e1e4e8;">  var minVal = arr.splice(minIndex, 1);</span></span>
<span class="line"><span style="color:#e1e4e8;">  var left = [];</span></span>
<span class="line"><span style="color:#e1e4e8;">  var right = [];</span></span>
<span class="line"><span style="color:#e1e4e8;">  for(var i=0; i&lt;arr.length; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    if(arr[i] &lt; minVal) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      left.push(arr[i])</span></span>
<span class="line"><span style="color:#e1e4e8;">    }else{</span></span>
<span class="line"><span style="color:#e1e4e8;">      right.push(arr[i])</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  return sort(left).concat(minVal, sort(right));</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function sort(arr) {</span></span>
<span class="line"><span style="color:#24292e;">  if(arr.length &lt;= 1) return arr;</span></span>
<span class="line"><span style="color:#24292e;">  var minIndex = Math.floor(arr.length/2);</span></span>
<span class="line"><span style="color:#24292e;">  var minVal = arr.splice(minIndex, 1);</span></span>
<span class="line"><span style="color:#24292e;">  var left = [];</span></span>
<span class="line"><span style="color:#24292e;">  var right = [];</span></span>
<span class="line"><span style="color:#24292e;">  for(var i=0; i&lt;arr.length; i++) {</span></span>
<span class="line"><span style="color:#24292e;">    if(arr[i] &lt; minVal) {</span></span>
<span class="line"><span style="color:#24292e;">      left.push(arr[i])</span></span>
<span class="line"><span style="color:#24292e;">    }else{</span></span>
<span class="line"><span style="color:#24292e;">      right.push(arr[i])</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  return sort(left).concat(minVal, sort(right));</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>快速排序特征：声明两个数组，占用内存</p><h3 id="查找字符串重复数" tabindex="-1">查找字符串重复数 <a class="header-anchor" href="#查找字符串重复数" aria-label="Permalink to &quot;查找字符串重复数&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function filter(str) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  var obj = {};</span></span>
<span class="line"><span style="color:#e1e4e8;">  return (function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    for(var i=0; i&lt;str.length; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      var val = str.charAt(i);</span></span>
<span class="line"><span style="color:#e1e4e8;">      if(obj[val] &amp;&amp; obj[val].value == val) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        obj[val].count = ++obj[val].count;</span></span>
<span class="line"><span style="color:#e1e4e8;">      }else{</span></span>
<span class="line"><span style="color:#e1e4e8;">        obj[val] = {};</span></span>
<span class="line"><span style="color:#e1e4e8;">        obj[val].count = 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">        obj[val].value = val;</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    return obj;</span></span>
<span class="line"><span style="color:#e1e4e8;">  })()</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">// var str = &#39;aabccddd&#39;;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function filter(str) {</span></span>
<span class="line"><span style="color:#24292e;">  var obj = {};</span></span>
<span class="line"><span style="color:#24292e;">  return (function() {</span></span>
<span class="line"><span style="color:#24292e;">    for(var i=0; i&lt;str.length; i++) {</span></span>
<span class="line"><span style="color:#24292e;">      var val = str.charAt(i);</span></span>
<span class="line"><span style="color:#24292e;">      if(obj[val] &amp;&amp; obj[val].value == val) {</span></span>
<span class="line"><span style="color:#24292e;">        obj[val].count = ++obj[val].count;</span></span>
<span class="line"><span style="color:#24292e;">      }else{</span></span>
<span class="line"><span style="color:#24292e;">        obj[val] = {};</span></span>
<span class="line"><span style="color:#24292e;">        obj[val].count = 1;</span></span>
<span class="line"><span style="color:#24292e;">        obj[val].value = val;</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    return obj;</span></span>
<span class="line"><span style="color:#24292e;">  })()</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">// var str = &#39;aabccddd&#39;;</span></span></code></pre></div><h3 id="阶乘" tabindex="-1">阶乘 <a class="header-anchor" href="#阶乘" aria-label="Permalink to &quot;阶乘&quot;">​</a></h3><p>需要计算n的阶乘，最多需要保存n个调用记录，复杂度O(n)。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function factorial(x) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  if(x === 1) return 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">   return x * fectorial(x - 1);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">factorial(3) // 6</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function factorial(x) {</span></span>
<span class="line"><span style="color:#24292e;">  if(x === 1) return 1;</span></span>
<span class="line"><span style="color:#24292e;">   return x * fectorial(x - 1);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">factorial(3) // 6</span></span></code></pre></div><p>改写成尾递归(ES6函数尾调用优化部分) 只保留一个调用记录，复杂度O(1)。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function factorial(x, total) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  if(x === 1) return total;</span></span>
<span class="line"><span style="color:#e1e4e8;">  return factorial(x-1, x * total);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">factorial(3, 1) // 6</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function factorial(x, total) {</span></span>
<span class="line"><span style="color:#24292e;">  if(x === 1) return total;</span></span>
<span class="line"><span style="color:#24292e;">  return factorial(x-1, x * total);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">factorial(3, 1) // 6</span></span></code></pre></div><h3 id="斐波那契数列" tabindex="-1">斐波那契数列 <a class="header-anchor" href="#斐波那契数列" aria-label="Permalink to &quot;斐波那契数列&quot;">​</a></h3><p>非递归实现</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function fibonacci(x) {</span></span>
<span class="line"><span style="color:#e1e4e8;">   if(x &lt;= 1) return 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">    return fibonacci(x - 1) + fibonacci(x - 2);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">fibonacci(3) // 3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function fibonacci(x) {</span></span>
<span class="line"><span style="color:#24292e;">   if(x &lt;= 1) return 1;</span></span>
<span class="line"><span style="color:#24292e;">    return fibonacci(x - 1) + fibonacci(x - 2);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">fibonacci(3) // 3</span></span></code></pre></div><p>改写成尾递归(ES6函数尾调用优化部分)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function fibonacci(x, y=1, z=1) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  if(x &lt;= 1) return z;</span></span>
<span class="line"><span style="color:#e1e4e8;">  return fibonacci(x-1, z, y+z);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">fibonacci(3) // 3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function fibonacci(x, y=1, z=1) {</span></span>
<span class="line"><span style="color:#24292e;">  if(x &lt;= 1) return z;</span></span>
<span class="line"><span style="color:#24292e;">  return fibonacci(x-1, z, y+z);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">fibonacci(3) // 3</span></span></code></pre></div><h3 id="字符串可以相减" tabindex="-1">字符串可以相减 <a class="header-anchor" href="#字符串可以相减" aria-label="Permalink to &quot;字符串可以相减&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var start = &#39;2018-07-10 10:30:33&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">var end = &#39;2018-07-10 18:50:45&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">function testTime(start, end) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  var now = new Date();</span></span>
<span class="line"><span style="color:#e1e4e8;">  start = new Date(start.replace(/-/g, &#39;-&#39;));</span></span>
<span class="line"><span style="color:#e1e4e8;">  end = new Date(end.replace(/-/g, &#39;-&#39;));</span></span>
<span class="line"><span style="color:#e1e4e8;">  if(start - now &gt; 0 &amp;&amp; now - end &lt; 0) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return &#39;before&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }else{</span></span>
<span class="line"><span style="color:#e1e4e8;">    return &#39;after&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var start = &#39;2018-07-10 10:30:33&#39;;</span></span>
<span class="line"><span style="color:#24292e;">var end = &#39;2018-07-10 18:50:45&#39;;</span></span>
<span class="line"><span style="color:#24292e;">function testTime(start, end) {</span></span>
<span class="line"><span style="color:#24292e;">  var now = new Date();</span></span>
<span class="line"><span style="color:#24292e;">  start = new Date(start.replace(/-/g, &#39;-&#39;));</span></span>
<span class="line"><span style="color:#24292e;">  end = new Date(end.replace(/-/g, &#39;-&#39;));</span></span>
<span class="line"><span style="color:#24292e;">  if(start - now &gt; 0 &amp;&amp; now - end &lt; 0) {</span></span>
<span class="line"><span style="color:#24292e;">    return &#39;before&#39;;</span></span>
<span class="line"><span style="color:#24292e;">  }else{</span></span>
<span class="line"><span style="color:#24292e;">    return &#39;after&#39;;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div>`,39),o=[p];function r(c,t,i,y,d,u){return n(),a("div",null,o)}const g=s(l,[["render",r]]);export{v as __pageData,g as default};
