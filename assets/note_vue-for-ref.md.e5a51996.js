import{_ as t,o as s,c as e,Q as n}from"./chunks/framework.419948d5.js";const v=JSON.parse('{"title":"Vue中的ref","description":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。","frontmatter":{"title":"Vue中的ref","editLink":true,"head":[["meta",{"name":"description","content":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。"}],["meta",{"name":"keywords","content":"JavaScript,Vue,Vue2,Vue3,ref"}]]},"headers":[],"relativePath":"note/vue-for-ref.md","filePath":"note/vue-for-ref.md"}'),a={name:"note/vue-for-ref.md"},l=n(`<p>项目需求：</p><p>循环渲染笔记列表，修改当前笔记时，隐藏当前笔记在当前笔记原位置呈现文本框，保存按钮和取消按钮。当前笔记修改成功更新笔记列表；取消修改，隐藏当前文本框，保存按钮和取消按钮，呈现原有笔记。</p><p>循环渲染模版文件：</p><p>在 <code>ref</code> 上动态绑定数据，格式为：字符串 + 索引。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;li class=&quot;fs14 list-line pt10 pb5&quot; v-for=&quot;(item, index) in noteList&quot; :key=&quot;item.id&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;div v-show=&quot;index == item.open&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">			&lt;p class=&quot;ellipsis mb5 fs16 lGray&quot;&gt;{{ item.content }}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;div v-show=&quot;index == curr&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">			&lt;textarea :value=&quot;item.content&quot; :ref=&quot;\\&#39;note\\&#39;+index&quot;&gt;&lt;/textarea&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">			&lt;p class=&quot;tar&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">				&lt;span class=&quot;mr10&quot; @click=&quot;updateNote(item, index)&quot;&gt;确定&lt;/span&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">				&lt;span @click=&quot;handleCancelUpdate(item, index)&quot;&gt;取消&lt;/span&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">			&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;/li&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;li class=&quot;fs14 list-line pt10 pb5&quot; v-for=&quot;(item, index) in noteList&quot; :key=&quot;item.id&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;div v-show=&quot;index == item.open&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">			&lt;p class=&quot;ellipsis mb5 fs16 lGray&quot;&gt;{{ item.content }}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;div v-show=&quot;index == curr&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">			&lt;textarea :value=&quot;item.content&quot; :ref=&quot;\\&#39;note\\&#39;+index&quot;&gt;&lt;/textarea&gt;</span></span>
<span class="line"><span style="color:#24292e;">			&lt;p class=&quot;tar&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">				&lt;span class=&quot;mr10&quot; @click=&quot;updateNote(item, index)&quot;&gt;确定&lt;/span&gt;</span></span>
<span class="line"><span style="color:#24292e;">				&lt;span @click=&quot;handleCancelUpdate(item, index)&quot;&gt;取消&lt;/span&gt;</span></span>
<span class="line"><span style="color:#24292e;">			&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;/li&gt;</span></span></code></pre></div><p>根据 <code>ref</code> 获取当期的 <code>textarea</code> 值；打印输出 <code>ref</code> 是一个数组，根据数组特性输出每一个 <code>textarea</code>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">methods: {</span></span>
<span class="line"><span style="color:#e1e4e8;">		updateNote: function(item, index) {</span></span>
<span class="line"><span style="color:#e1e4e8;">			var content = this.$refs[&#39;note&#39;+index][0].value;</span></span>
<span class="line"><span style="color:#e1e4e8;">		}</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">methods: {</span></span>
<span class="line"><span style="color:#24292e;">		updateNote: function(item, index) {</span></span>
<span class="line"><span style="color:#24292e;">			var content = this.$refs[&#39;note&#39;+index][0].value;</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span></code></pre></div>`,7),p=[l];function o(c,i,r,d,u,q){return s(),e("div",null,p)}const y=t(a,[["render",o]]);export{v as __pageData,y as default};
