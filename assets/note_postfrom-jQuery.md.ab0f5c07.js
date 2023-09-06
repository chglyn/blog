import{_ as e,o as s,c as t,Q as n}from"./chunks/framework.419948d5.js";const f=JSON.parse('{"title":"JavaScript 模拟form","description":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。","frontmatter":{"title":"JavaScript 模拟form","editLink":true,"head":[["meta",{"name":"description","content":"远美网是一个vite与vitepress搭建的静态站点，记录着工作中有意义的事情，提供技术支持。"}],["meta",{"name":"keywords","content":"JavaScript,form,extend,jQuery"}]]},"headers":[],"relativePath":"note/postfrom-jQuery.md","filePath":"note/postfrom-jQuery.md"}'),a={name:"note/postfrom-jQuery.md"},o=n(`<p>项目需求：</p><p>选课界面，选择多个课程添加到购物车计算总价。添加到购物车的课程，点击“提交结算”跳转到订单确认列表，当前界面要呈现上个界面选择的课程，包括：课程名称，课程价格，课程班级等等。</p><p>解决方式：</p><p>使用 <code>get</code> 方式传参，该方法行不通。因为浏览器 <code>url</code> 承载内容较多况且也有限制大小。所以使用 <code>post</code> 方式提交数据，在下个界面接受上个界面传来的数据列表。</p><p>使用 <code>post</code> 提交，不能使用 <code>jQuery</code> 自带封装好的 <code>post</code> 方式提交数据。既然这样，得自己封装一个 <code>post</code> 提交数据。</p><p>步骤：</p><ul><li><p>使用 <code>extend</code> 封装一个 <code>post</code> 方法。</p></li><li><p>该 <code>post</code> 方法传入 <code>url</code> 参数和 <code>args</code> 参数，其中 <code>url</code> 是要跳转到下个界面的路径；<code>args</code> 是传入的数据，比如这里是添加到购物车的课程。</p></li><li><p>声明 <code>from</code>，<code>input</code> 变量；并且设置 <code>from</code> 的 <code>url</code> 地址。</p></li><li><p>遍历 <code>args</code> 参数，把每一条数据的具体值，绑定到 <code>input</code> 上面并设置 <code>type=&#39;hidden&#39;</code> 不可见。</p></li><li><p>遍历结束，<code>input</code> 追加到 <code>from</code> 上面；<code>from</code> 追加到 <code>body</code> 上面。</p></li><li><p>设置 <code>from</code> 提交，提交成功后，自动销毁。</p></li></ul><p>完整代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$.extend({</span></span>
<span class="line"><span style="color:#e1e4e8;">		StandardPost:function(url, args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">			var form = $(&quot;&lt;form method=&#39;post&#39; style=&#39;display:none&#39;&gt;&lt;/form&gt;&quot;), input;</span></span>
<span class="line"><span style="color:#e1e4e8;">			form.attr({ &quot;action&quot;:url });</span></span>
<span class="line"><span style="color:#e1e4e8;">			$.each(args,function(key2,value2) {</span></span>
<span class="line"><span style="color:#e1e4e8;">				$.each(value2,function(key,value) {</span></span>
<span class="line"><span style="color:#e1e4e8;">					input = $(&quot;&lt;input type=&#39;hidden&#39;&gt;&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">					input.attr({ &quot;name&quot;:&#39;objectArray[&#39;+key2+&#39;][&#39;+key+&#39;]&#39;});</span></span>
<span class="line"><span style="color:#e1e4e8;">					input.val(value);</span></span>
<span class="line"><span style="color:#e1e4e8;">					form.append(input);</span></span>
<span class="line"><span style="color:#e1e4e8;">				});</span></span>
<span class="line"><span style="color:#e1e4e8;">			});</span></span>
<span class="line"><span style="color:#e1e4e8;">			form.appendTo($(&#39;body&#39;));</span></span>
<span class="line"><span style="color:#e1e4e8;">			form.submit();</span></span>
<span class="line"><span style="color:#e1e4e8;">			form.remove();</span></span>
<span class="line"><span style="color:#e1e4e8;">		}</span></span>
<span class="line"><span style="color:#e1e4e8;">	});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$.extend({</span></span>
<span class="line"><span style="color:#24292e;">		StandardPost:function(url, args) {</span></span>
<span class="line"><span style="color:#24292e;">			var form = $(&quot;&lt;form method=&#39;post&#39; style=&#39;display:none&#39;&gt;&lt;/form&gt;&quot;), input;</span></span>
<span class="line"><span style="color:#24292e;">			form.attr({ &quot;action&quot;:url });</span></span>
<span class="line"><span style="color:#24292e;">			$.each(args,function(key2,value2) {</span></span>
<span class="line"><span style="color:#24292e;">				$.each(value2,function(key,value) {</span></span>
<span class="line"><span style="color:#24292e;">					input = $(&quot;&lt;input type=&#39;hidden&#39;&gt;&quot;);</span></span>
<span class="line"><span style="color:#24292e;">					input.attr({ &quot;name&quot;:&#39;objectArray[&#39;+key2+&#39;][&#39;+key+&#39;]&#39;});</span></span>
<span class="line"><span style="color:#24292e;">					input.val(value);</span></span>
<span class="line"><span style="color:#24292e;">					form.append(input);</span></span>
<span class="line"><span style="color:#24292e;">				});</span></span>
<span class="line"><span style="color:#24292e;">			});</span></span>
<span class="line"><span style="color:#24292e;">			form.appendTo($(&#39;body&#39;));</span></span>
<span class="line"><span style="color:#24292e;">			form.submit();</span></span>
<span class="line"><span style="color:#24292e;">			form.remove();</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;">	});</span></span></code></pre></div>`,9),p=[o];function l(c,r,i,d,u,y){return s(),t("div",null,p)}const v=e(a,[["render",l]]);export{f as __pageData,v as default};
