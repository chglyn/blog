import{_ as s,o as n,c as e,Q as a}from"./chunks/framework.419948d5.js";const m=JSON.parse('{"title":"ElementUi Drawer","description":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。","frontmatter":{"title":"ElementUi Drawer","editLink":true,"head":[["meta",{"name":"description","content":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。"}],["meta",{"name":"keywords","content":"JavaScript,ElementUi,ElementUiPlus,Drawer"}]]},"headers":[],"relativePath":"note/elementUIPlus-drawer.md","filePath":"note/elementUIPlus-drawer.md"}'),l={name:"note/elementUIPlus-drawer.md"},t=a(`<p><code>ElementUI</code> 中的抽屉组件在 <code>safari</code> 浏览器下，动画向上跳出然后再定位在底部呈现抽屉效果。</p><p>官网上出现的动画异常在 <code>2.13.0</code> 版本之后，在这版本之前没有出现动画错误。</p><h3 id="对比版本" tabindex="-1">对比版本 <a class="header-anchor" href="#对比版本" aria-label="Permalink to &quot;对比版本&quot;">​</a></h3><ul><li>2.12.0 版本：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">data() {</span></span>
<span class="line"><span style="color:#e1e4e8;">	    return {</span></span>
<span class="line"><span style="color:#e1e4e8;">	      closed: false,</span></span>
<span class="line"><span style="color:#e1e4e8;">	      prevActiveElement: null</span></span>
<span class="line"><span style="color:#e1e4e8;">	    };</span></span>
<span class="line"><span style="color:#e1e4e8;">  	},</span></span>
<span class="line"><span style="color:#e1e4e8;">  	watch: {</span></span>
<span class="line"><span style="color:#e1e4e8;">	    visible(val) {</span></span>
<span class="line"><span style="color:#e1e4e8;">	      	if (val) {</span></span>
<span class="line"><span style="color:#e1e4e8;">		        this.closed = false;</span></span>
<span class="line"><span style="color:#e1e4e8;">		        this.$emit(&#39;open&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">		        if (this.appendToBody) {</span></span>
<span class="line"><span style="color:#e1e4e8;">		         	document.body.appendChild(this.$el);</span></span>
<span class="line"><span style="color:#e1e4e8;">		        }</span></span>
<span class="line"><span style="color:#e1e4e8;">		        this.prevActiveElement = document.activeElement;</span></span>
<span class="line"><span style="color:#e1e4e8;">		        this.$nextTick(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">		         	Utils.focusFirstDescendant(this.$refs.drawer);</span></span>
<span class="line"><span style="color:#e1e4e8;">		        });</span></span>
<span class="line"><span style="color:#e1e4e8;">	      	} else {</span></span>
<span class="line"><span style="color:#e1e4e8;">		        if (!this.closed) this.$emit(&#39;close&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">		        this.$nextTick(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">		          	if (this.prevActiveElement) {</span></span>
<span class="line"><span style="color:#e1e4e8;">		            	this.prevActiveElement.focus();</span></span>
<span class="line"><span style="color:#e1e4e8;">		          	}</span></span>
<span class="line"><span style="color:#e1e4e8;">		        });</span></span>
<span class="line"><span style="color:#e1e4e8;">	      	}</span></span>
<span class="line"><span style="color:#e1e4e8;">	    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  	}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">data() {</span></span>
<span class="line"><span style="color:#24292e;">	    return {</span></span>
<span class="line"><span style="color:#24292e;">	      closed: false,</span></span>
<span class="line"><span style="color:#24292e;">	      prevActiveElement: null</span></span>
<span class="line"><span style="color:#24292e;">	    };</span></span>
<span class="line"><span style="color:#24292e;">  	},</span></span>
<span class="line"><span style="color:#24292e;">  	watch: {</span></span>
<span class="line"><span style="color:#24292e;">	    visible(val) {</span></span>
<span class="line"><span style="color:#24292e;">	      	if (val) {</span></span>
<span class="line"><span style="color:#24292e;">		        this.closed = false;</span></span>
<span class="line"><span style="color:#24292e;">		        this.$emit(&#39;open&#39;);</span></span>
<span class="line"><span style="color:#24292e;">		        if (this.appendToBody) {</span></span>
<span class="line"><span style="color:#24292e;">		         	document.body.appendChild(this.$el);</span></span>
<span class="line"><span style="color:#24292e;">		        }</span></span>
<span class="line"><span style="color:#24292e;">		        this.prevActiveElement = document.activeElement;</span></span>
<span class="line"><span style="color:#24292e;">		        this.$nextTick(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">		         	Utils.focusFirstDescendant(this.$refs.drawer);</span></span>
<span class="line"><span style="color:#24292e;">		        });</span></span>
<span class="line"><span style="color:#24292e;">	      	} else {</span></span>
<span class="line"><span style="color:#24292e;">		        if (!this.closed) this.$emit(&#39;close&#39;);</span></span>
<span class="line"><span style="color:#24292e;">		        this.$nextTick(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">		          	if (this.prevActiveElement) {</span></span>
<span class="line"><span style="color:#24292e;">		            	this.prevActiveElement.focus();</span></span>
<span class="line"><span style="color:#24292e;">		          	}</span></span>
<span class="line"><span style="color:#24292e;">		        });</span></span>
<span class="line"><span style="color:#24292e;">	      	}</span></span>
<span class="line"><span style="color:#24292e;">	    }</span></span>
<span class="line"><span style="color:#24292e;">  	}</span></span></code></pre></div><ul><li>2.13.1 版本</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">data() {</span></span>
<span class="line"><span style="color:#e1e4e8;">	    return {</span></span>
<span class="line"><span style="color:#e1e4e8;">	      	closed: false,</span></span>
<span class="line"><span style="color:#e1e4e8;">	      	prevActiveElement: null</span></span>
<span class="line"><span style="color:#e1e4e8;">	    };</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">  	watch: {</span></span>
<span class="line"><span style="color:#e1e4e8;">	    visible(val) {</span></span>
<span class="line"><span style="color:#e1e4e8;">	      	if (val) {</span></span>
<span class="line"><span style="color:#e1e4e8;">		        this.closed = false;</span></span>
<span class="line"><span style="color:#e1e4e8;">		        this.$emit(&#39;open&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">		        if (this.appendToBody) {</span></span>
<span class="line"><span style="color:#e1e4e8;">		        	document.body.appendChild(this.$el);</span></span>
<span class="line"><span style="color:#e1e4e8;">		        }</span></span>
<span class="line"><span style="color:#e1e4e8;">		        this.prevActiveElement = document.activeElement;</span></span>
<span class="line"><span style="color:#e1e4e8;">		        /****/</span></span>
<span class="line"><span style="color:#e1e4e8;">		        this.$nextTick(function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">		        	Utils.focusFirstDescendant(this.$refs.drawer);</span></span>
<span class="line"><span style="color:#e1e4e8;">		        })</span></span>
<span class="line"><span style="color:#e1e4e8;">		        /****/</span></span>
<span class="line"><span style="color:#e1e4e8;">	      	} else {</span></span>
<span class="line"><span style="color:#e1e4e8;">	        	if (!this.closed) this.$emit(&#39;close&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">	        	/****/</span></span>
<span class="line"><span style="color:#e1e4e8;">	        	this.$nextTick(function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">	        		if(this.prevActiveElement) {</span></span>
<span class="line"><span style="color:#e1e4e8;">	        			this.prevActiveElement.focus();</span></span>
<span class="line"><span style="color:#e1e4e8;">	        		}</span></span>
<span class="line"><span style="color:#e1e4e8;">	        	})</span></span>
<span class="line"><span style="color:#e1e4e8;">	        	/****/</span></span>
<span class="line"><span style="color:#e1e4e8;">	      	}</span></span>
<span class="line"><span style="color:#e1e4e8;">	    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  	},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">data() {</span></span>
<span class="line"><span style="color:#24292e;">	    return {</span></span>
<span class="line"><span style="color:#24292e;">	      	closed: false,</span></span>
<span class="line"><span style="color:#24292e;">	      	prevActiveElement: null</span></span>
<span class="line"><span style="color:#24292e;">	    };</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">  	watch: {</span></span>
<span class="line"><span style="color:#24292e;">	    visible(val) {</span></span>
<span class="line"><span style="color:#24292e;">	      	if (val) {</span></span>
<span class="line"><span style="color:#24292e;">		        this.closed = false;</span></span>
<span class="line"><span style="color:#24292e;">		        this.$emit(&#39;open&#39;);</span></span>
<span class="line"><span style="color:#24292e;">		        if (this.appendToBody) {</span></span>
<span class="line"><span style="color:#24292e;">		        	document.body.appendChild(this.$el);</span></span>
<span class="line"><span style="color:#24292e;">		        }</span></span>
<span class="line"><span style="color:#24292e;">		        this.prevActiveElement = document.activeElement;</span></span>
<span class="line"><span style="color:#24292e;">		        /****/</span></span>
<span class="line"><span style="color:#24292e;">		        this.$nextTick(function() {</span></span>
<span class="line"><span style="color:#24292e;">		        	Utils.focusFirstDescendant(this.$refs.drawer);</span></span>
<span class="line"><span style="color:#24292e;">		        })</span></span>
<span class="line"><span style="color:#24292e;">		        /****/</span></span>
<span class="line"><span style="color:#24292e;">	      	} else {</span></span>
<span class="line"><span style="color:#24292e;">	        	if (!this.closed) this.$emit(&#39;close&#39;);</span></span>
<span class="line"><span style="color:#24292e;">	        	/****/</span></span>
<span class="line"><span style="color:#24292e;">	        	this.$nextTick(function() {</span></span>
<span class="line"><span style="color:#24292e;">	        		if(this.prevActiveElement) {</span></span>
<span class="line"><span style="color:#24292e;">	        			this.prevActiveElement.focus();</span></span>
<span class="line"><span style="color:#24292e;">	        		}</span></span>
<span class="line"><span style="color:#24292e;">	        	})</span></span>
<span class="line"><span style="color:#24292e;">	        	/****/</span></span>
<span class="line"><span style="color:#24292e;">	      	}</span></span>
<span class="line"><span style="color:#24292e;">	    }</span></span>
<span class="line"><span style="color:#24292e;">  	},</span></span></code></pre></div><p>这段代码是为了触发focus，触发focus 造成动画偏移，在safari浏览器中 如果抽屉组件中唯一可focus的元素是element的按钮组件，则改抽屉出现的动画定位会偏移并且动效不对，如果把该组件的头部隐藏，内容中没有按钮，这样就没有这样的问题！</p><p>这就是出现动画错误的原因。</p><h3 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h3><ul><li><p>删除源码中上面 <code>$nextTick</code> 两段代码块。</p></li><li><p>自己封装抽屉特效。</p></li></ul>`,11),p=[t];function c(o,i,r,y,d,h){return n(),e("div",null,p)}const u=s(l,[["render",c]]);export{m as __pageData,u as default};
