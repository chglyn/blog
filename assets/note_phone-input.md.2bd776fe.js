import{_ as t,o as s,c as n,Q as e}from"./chunks/framework.419948d5.js";const h=JSON.parse('{"title":"JavaScript 短信验证码","description":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。","frontmatter":{"title":"JavaScript 短信验证码","editLink":true,"head":[["meta",{"name":"description","content":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。"}],["meta",{"name":"keywords","content":"JavaScript,短信验证码,短信验证码输入框,vue"}]]},"headers":[],"relativePath":"note/phone-input.md","filePath":"note/phone-input.md"}'),a={name:"note/phone-input.md"},p=e(`<h3 id="需求" tabindex="-1">需求 <a class="header-anchor" href="#需求" aria-label="Permalink to &quot;需求&quot;">​</a></h3><p>UI 提供一张设计图，如下：</p><p>输入 6 位数字密码，每个 <code>input</code> 只能输入一个数字，每次输入完当前 <code>input</code> 框后自动跳转到下一个 <code>input</code>，输入完成后提交数据。</p><h3 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h3><p>布局 6 个 <code>input</code> 框，使用 <code>keydown</code> 事件监听删除操作，<code>keyup</code> 事件监听输入时操作，输入完当前 <code>input</code> 是否满足需求， 判断是否跳转到下一个 <code>input</code>。</p><p><code>html</code> 代码部分：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;input-frame mb10 clearfix&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;input @keydown.8=&quot;deleteVal(&#39;input1&#39;, &#39;input1&#39;)&quot; @keyup=&quot;changeVal($event, &#39;input1&#39;, &#39;input2&#39;)&quot; ref=&quot;input1&quot; type=&quot;text&quot; class=&quot;c-fl input-password&quot; maxLength=&quot;1&quot; v-model.trim=&quot;input1&quot; type=&quot;number&quot; autocomplete=&quot;off&quot; /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;input @keydown.8=&quot;deleteVal(&#39;input2&#39;, &#39;input1&#39;)&quot; @keyup=&quot;changeVal($event, &#39;input2&#39;, &#39;input3&#39;)&quot; ref=&quot;input2&quot; type=&quot;text&quot; class=&quot;c-fl input-password&quot; maxLength=&quot;1&quot; v-model.trim=&quot;input2&quot; type=&quot;number&quot; autocomplete=&quot;off&quot; /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;input @keydown.8=&quot;deleteVal(&#39;input3&#39;, &#39;input2&#39;)&quot; @keyup=&quot;changeVal($event, &#39;input3&#39;, &#39;input4&#39;)&quot; ref=&quot;input3&quot; type=&quot;text&quot; class=&quot;c-fl input-password&quot; maxLength=&quot;1&quot; v-model.trim=&quot;input3&quot; type=&quot;number&quot; autocomplete=&quot;off&quot; /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;input @keydown.8=&quot;deleteVal(&#39;input4&#39;, &#39;input3&#39;)&quot; @keyup=&quot;changeVal($event, &#39;input4&#39;, &#39;input5&#39;)&quot; ref=&quot;input4&quot; type=&quot;text&quot; class=&quot;c-fl input-password&quot; maxLength=&quot;1&quot; v-model.trim=&quot;input4&quot; type=&quot;number&quot; autocomplete=&quot;off&quot; /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;input @keydown.8=&quot;deleteVal(&#39;input5&#39;, &#39;input4&#39;)&quot; @keyup=&quot;changeVal($event, &#39;input5&#39;, &#39;input6&#39;)&quot; ref=&quot;input5&quot; type=&quot;text&quot; class=&quot;c-fl input-password&quot; maxLength=&quot;1&quot; v-model.trim=&quot;input5&quot; type=&quot;number&quot; autocomplete=&quot;off&quot; /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;input @keydown.8=&quot;deleteVal(&#39;input6&#39;, &#39;input5&#39;)&quot; @keyup=&quot;changeVal($event, &#39;input6&#39;, &#39;input6&#39;)&quot; ref=&quot;input6&quot; type=&quot;text&quot; class=&quot;c-fl input-password&quot; maxLength=&quot;1&quot; v-model.trim=&quot;input6&quot; type=&quot;number&quot; autocomplete=&quot;off&quot; /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;div class=&quot;tac pt15&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;p class=&quot;p10&quot; style=&quot;color:#FC3D39;&quot;&gt;{{ errMsg }}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;button class=&quot;btn fs16 btn-theme&quot; @click=&quot;saveFreePassword&quot;&gt;确定&lt;/button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;input-frame mb10 clearfix&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;input @keydown.8=&quot;deleteVal(&#39;input1&#39;, &#39;input1&#39;)&quot; @keyup=&quot;changeVal($event, &#39;input1&#39;, &#39;input2&#39;)&quot; ref=&quot;input1&quot; type=&quot;text&quot; class=&quot;c-fl input-password&quot; maxLength=&quot;1&quot; v-model.trim=&quot;input1&quot; type=&quot;number&quot; autocomplete=&quot;off&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;input @keydown.8=&quot;deleteVal(&#39;input2&#39;, &#39;input1&#39;)&quot; @keyup=&quot;changeVal($event, &#39;input2&#39;, &#39;input3&#39;)&quot; ref=&quot;input2&quot; type=&quot;text&quot; class=&quot;c-fl input-password&quot; maxLength=&quot;1&quot; v-model.trim=&quot;input2&quot; type=&quot;number&quot; autocomplete=&quot;off&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;input @keydown.8=&quot;deleteVal(&#39;input3&#39;, &#39;input2&#39;)&quot; @keyup=&quot;changeVal($event, &#39;input3&#39;, &#39;input4&#39;)&quot; ref=&quot;input3&quot; type=&quot;text&quot; class=&quot;c-fl input-password&quot; maxLength=&quot;1&quot; v-model.trim=&quot;input3&quot; type=&quot;number&quot; autocomplete=&quot;off&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;input @keydown.8=&quot;deleteVal(&#39;input4&#39;, &#39;input3&#39;)&quot; @keyup=&quot;changeVal($event, &#39;input4&#39;, &#39;input5&#39;)&quot; ref=&quot;input4&quot; type=&quot;text&quot; class=&quot;c-fl input-password&quot; maxLength=&quot;1&quot; v-model.trim=&quot;input4&quot; type=&quot;number&quot; autocomplete=&quot;off&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;input @keydown.8=&quot;deleteVal(&#39;input5&#39;, &#39;input4&#39;)&quot; @keyup=&quot;changeVal($event, &#39;input5&#39;, &#39;input6&#39;)&quot; ref=&quot;input5&quot; type=&quot;text&quot; class=&quot;c-fl input-password&quot; maxLength=&quot;1&quot; v-model.trim=&quot;input5&quot; type=&quot;number&quot; autocomplete=&quot;off&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;input @keydown.8=&quot;deleteVal(&#39;input6&#39;, &#39;input5&#39;)&quot; @keyup=&quot;changeVal($event, &#39;input6&#39;, &#39;input6&#39;)&quot; ref=&quot;input6&quot; type=&quot;text&quot; class=&quot;c-fl input-password&quot; maxLength=&quot;1&quot; v-model.trim=&quot;input6&quot; type=&quot;number&quot; autocomplete=&quot;off&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;div class=&quot;tac pt15&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;p class=&quot;p10&quot; style=&quot;color:#FC3D39;&quot;&gt;{{ errMsg }}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;button class=&quot;btn fs16 btn-theme&quot; @click=&quot;saveFreePassword&quot;&gt;确定&lt;/button&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;/div&gt;</span></span></code></pre></div><p>删除值时监听当前 <code>input</code> 值，和 上一个 <code>input</code> 值；如果当前 <code>input</code> 值为空，则鼠标光标跳转到上一个 <code>input</code> 框，并清除该 <code>input</code> 值。</p><p>输入值时，监听系统事件，当前 <code>input</code> 值，和下一个 <code>input</code> 值，输入完当前 <code>input</code> 值后，鼠标光标自动跳转到下一个 <code>input</code>。输入正确完整后提交数据到后端。</p><p><code>JS</code> 代码部分：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// ...</span></span>
<span class="line"><span style="color:#e1e4e8;">	data: function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">		return {</span></span>
<span class="line"><span style="color:#e1e4e8;">			errMsg: &#39;&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">			input1: &#39;&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">			input2: &#39;&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">			input3: &#39;&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">			input4: &#39;&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">			input5: &#39;&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">			input6: &#39;&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">		}</span></span>
<span class="line"><span style="color:#e1e4e8;">	},</span></span>
<span class="line"><span style="color:#e1e4e8;">	methods: {</span></span>
<span class="line"><span style="color:#e1e4e8;">		deleteVal: function(inputval, preInputVal) {</span></span>
<span class="line"><span style="color:#e1e4e8;">			if(this[inputval].length &gt; 0) {</span></span>
<span class="line"><span style="color:#e1e4e8;">				this[inputval] = &#39;&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">			}else{ //光标跳转到上一个input</span></span>
<span class="line"><span style="color:#e1e4e8;">				this.$nextTick(function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">					this.$refs[preInputVal].focus();</span></span>
<span class="line"><span style="color:#e1e4e8;">					this[preInputVal] = &#39;&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">					this[inputval] = &#39;&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">				})</span></span>
<span class="line"><span style="color:#e1e4e8;">			}</span></span>
<span class="line"><span style="color:#e1e4e8;">			this.errMsg = &#39;&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">		},</span></span>
<span class="line"><span style="color:#e1e4e8;">		changeVal: function(e, inputVal, nextInputVal) { //当前input，下一个input</span></span>
<span class="line"><span style="color:#e1e4e8;">			this[inputVal] = this[inputVal].replace(/[^\\d]{1}/g, &#39;&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">			if(this[inputVal].length &lt;= 0) return false;</span></span>
<span class="line"><span style="color:#e1e4e8;">			if(e.keyCode != 8) {</span></span>
<span class="line"><span style="color:#e1e4e8;">				this.$nextTick(function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">					this.$refs[nextInputVal].focus();</span></span>
<span class="line"><span style="color:#e1e4e8;">					this[inputVal] = (this[inputVal]).toString().slice(-1);</span></span>
<span class="line"><span style="color:#e1e4e8;">					this.errMsg = &#39;&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">				})</span></span>
<span class="line"><span style="color:#e1e4e8;">			}</span></span>
<span class="line"><span style="color:#e1e4e8;">		},</span></span>
<span class="line"><span style="color:#e1e4e8;">		saveFreePassword: function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">			this.freePassword = this.input1 + this.input2 + this.input3 + this.input4 + this.input5 + this.input6;</span></span>
<span class="line"><span style="color:#e1e4e8;">			this.freePassword = this.freePassword.replace(/[^\\d]/g, &#39;&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;"> 			if(this.freePassword.length != 6) {</span></span>
<span class="line"><span style="color:#e1e4e8;">				this.errMsg = &#39;※ 密码错误，请确认密码后重新输入&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">				return false;</span></span>
<span class="line"><span style="color:#e1e4e8;">			}</span></span>
<span class="line"><span style="color:#e1e4e8;">			this.$root.Bus.$emit(&#39;freeCoursePassword&#39;, { freePassword:  this.freePassword});</span></span>
<span class="line"><span style="color:#e1e4e8;">		}</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// ...</span></span>
<span class="line"><span style="color:#24292e;">	data: function() {</span></span>
<span class="line"><span style="color:#24292e;">		return {</span></span>
<span class="line"><span style="color:#24292e;">			errMsg: &#39;&#39;,</span></span>
<span class="line"><span style="color:#24292e;">			input1: &#39;&#39;,</span></span>
<span class="line"><span style="color:#24292e;">			input2: &#39;&#39;,</span></span>
<span class="line"><span style="color:#24292e;">			input3: &#39;&#39;,</span></span>
<span class="line"><span style="color:#24292e;">			input4: &#39;&#39;,</span></span>
<span class="line"><span style="color:#24292e;">			input5: &#39;&#39;,</span></span>
<span class="line"><span style="color:#24292e;">			input6: &#39;&#39;</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;">	},</span></span>
<span class="line"><span style="color:#24292e;">	methods: {</span></span>
<span class="line"><span style="color:#24292e;">		deleteVal: function(inputval, preInputVal) {</span></span>
<span class="line"><span style="color:#24292e;">			if(this[inputval].length &gt; 0) {</span></span>
<span class="line"><span style="color:#24292e;">				this[inputval] = &#39;&#39;;</span></span>
<span class="line"><span style="color:#24292e;">			}else{ //光标跳转到上一个input</span></span>
<span class="line"><span style="color:#24292e;">				this.$nextTick(function() {</span></span>
<span class="line"><span style="color:#24292e;">					this.$refs[preInputVal].focus();</span></span>
<span class="line"><span style="color:#24292e;">					this[preInputVal] = &#39;&#39;;</span></span>
<span class="line"><span style="color:#24292e;">					this[inputval] = &#39;&#39;;</span></span>
<span class="line"><span style="color:#24292e;">				})</span></span>
<span class="line"><span style="color:#24292e;">			}</span></span>
<span class="line"><span style="color:#24292e;">			this.errMsg = &#39;&#39;;</span></span>
<span class="line"><span style="color:#24292e;">		},</span></span>
<span class="line"><span style="color:#24292e;">		changeVal: function(e, inputVal, nextInputVal) { //当前input，下一个input</span></span>
<span class="line"><span style="color:#24292e;">			this[inputVal] = this[inputVal].replace(/[^\\d]{1}/g, &#39;&#39;);</span></span>
<span class="line"><span style="color:#24292e;">			if(this[inputVal].length &lt;= 0) return false;</span></span>
<span class="line"><span style="color:#24292e;">			if(e.keyCode != 8) {</span></span>
<span class="line"><span style="color:#24292e;">				this.$nextTick(function() {</span></span>
<span class="line"><span style="color:#24292e;">					this.$refs[nextInputVal].focus();</span></span>
<span class="line"><span style="color:#24292e;">					this[inputVal] = (this[inputVal]).toString().slice(-1);</span></span>
<span class="line"><span style="color:#24292e;">					this.errMsg = &#39;&#39;;</span></span>
<span class="line"><span style="color:#24292e;">				})</span></span>
<span class="line"><span style="color:#24292e;">			}</span></span>
<span class="line"><span style="color:#24292e;">		},</span></span>
<span class="line"><span style="color:#24292e;">		saveFreePassword: function() {</span></span>
<span class="line"><span style="color:#24292e;">			this.freePassword = this.input1 + this.input2 + this.input3 + this.input4 + this.input5 + this.input6;</span></span>
<span class="line"><span style="color:#24292e;">			this.freePassword = this.freePassword.replace(/[^\\d]/g, &#39;&#39;);</span></span>
<span class="line"><span style="color:#24292e;"> 			if(this.freePassword.length != 6) {</span></span>
<span class="line"><span style="color:#24292e;">				this.errMsg = &#39;※ 密码错误，请确认密码后重新输入&#39;;</span></span>
<span class="line"><span style="color:#24292e;">				return false;</span></span>
<span class="line"><span style="color:#24292e;">			}</span></span>
<span class="line"><span style="color:#24292e;">			this.$root.Bus.$emit(&#39;freeCoursePassword&#39;, { freePassword:  this.freePassword});</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span></code></pre></div>`,11),o=[p];function l(u,i,c,r,q,y){return s(),n("div",null,o)}const f=t(a,[["render",l]]);export{h as __pageData,f as default};
