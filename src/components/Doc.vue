<template>
  <div class="mume markdown-preview">
    <h2
      class="mume-header"
      id="%E4%B8%80-flex-%E5%B8%83%E5%B1%80%E6%98%AF%E4%BB%80%E4%B9%88"
    >&#x4E00;&#x3001;Flex &#x5E03;&#x5C40;&#x662F;&#x4EC0;&#x4E48;&#xFF1F;</h2>

    <p>Flex &#x662F; Flexible Box &#x7684;&#x7F29;&#x5199;&#xFF0C;&#x610F;&#x4E3A;&quot;&#x5F39;&#x6027;&#x5E03;&#x5C40;&quot;&#xFF0C;&#x7528;&#x6765;&#x4E3A;&#x76D2;&#x72B6;&#x6A21;&#x578B;&#x63D0;&#x4F9B;&#x6700;&#x5927;&#x7684;&#x7075;&#x6D3B;&#x6027;&#x3002;</p>
    <p>&#x4EFB;&#x4F55;&#x4E00;&#x4E2A;&#x5BB9;&#x5668;&#x90FD;&#x53EF;&#x4EE5;&#x6307;&#x5B9A;&#x4E3A; Flex &#x5E03;&#x5C40;&#x3002;</p>
    <pre data-role="codeBlock" data-info="css" class="language-css"><span class="token selector"><span class="token class">.box</span></span><span
  class="token punctuation"
>{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</pre>
    <p>&#x884C;&#x5185;&#x5143;&#x7D20;&#x4E5F;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; Flex &#x5E03;&#x5C40;&#x3002;</p>
    <pre data-role="codeBlock" data-info="css" class="language-css"><span class="token selector"><span class="token class">.box</span></span><span
  class="token punctuation"
>{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</pre>
    <p>
      Webkit &#x5185;&#x6838;&#x7684;&#x6D4F;&#x89C8;&#x5668;&#xFF0C;&#x5FC5;&#x987B;&#x52A0;&#x4E0A;
      <strong>-webkit</strong> &#x524D;&#x7F00;&#x3002;
    </p>
    <pre data-role="codeBlock" data-info="css" class="language-css"><span class="token selector"><span class="token class">.box</span></span><span
  class="token punctuation"
>{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-flex<span class="token punctuation">;</span> <span class="token comment">/* Safari */</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</pre>
    <p>&#x6CE8;&#x610F;&#xFF0C;&#x8BBE;&#x4E3A; Flex &#x5E03;&#x5C40;&#x4EE5;&#x540E;&#xFF0C;&#x5B50;&#x5143;&#x7D20;&#x7684;float&#x3001;clear&#x548C;vertical-align&#x5C5E;&#x6027;&#x5C06;&#x5931;&#x6548;&#x3002;</p>
    <h2
      class="mume-header"
      id="%E4%BA%8C-%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5"
    >&#x4E8C;&#x3001;&#x57FA;&#x672C;&#x6982;&#x5FF5;</h2>

    <p>&#x91C7;&#x7528; Flex &#x5E03;&#x5C40;&#x7684;&#x5143;&#x7D20;&#xFF0C;&#x79F0;&#x4E3A; Flex &#x5BB9;&#x5668;&#xFF08;flex container&#xFF09;&#xFF0C;&#x7B80;&#x79F0;&quot;&#x5BB9;&#x5668;&quot;&#x3002;&#x5B83;&#x7684;&#x6240;&#x6709;&#x5B50;&#x5143;&#x7D20;&#x81EA;&#x52A8;&#x6210;&#x4E3A;&#x5BB9;&#x5668;&#x6210;&#x5458;&#xFF0C;&#x79F0;&#x4E3A; Flex &#x9879;&#x76EE;&#xFF08;flex item&#xFF09;&#xFF0C;&#x7B80;&#x79F0;&quot;&#x9879;&#x76EE;&quot;&#x3002;</p>
    <p>
      <img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png" alt="flex-container">
    </p>
    <p>
      &#x5BB9;&#x5668;&#x9ED8;&#x8BA4;&#x5B58;&#x5728;&#x4E24;&#x6839;&#x8F74;&#xFF1A;&#x6C34;&#x5E73;&#x7684;&#x4E3B;&#x8F74;&#xFF08;main axis&#xFF09;&#x548C;&#x5782;&#x76F4;&#x7684;&#x4EA4;&#x53C9;&#x8F74;&#xFF08;cross axis&#xFF09;&#x3002;&#x4E3B;&#x8F74;&#x7684;&#x5F00;&#x59CB;&#x4F4D;&#x7F6E;&#xFF08;&#x4E0E;&#x8FB9;&#x6846;&#x7684;&#x4EA4;&#x53C9;&#x70B9;&#xFF09;&#x53EB;&#x505A;
      <strong>main start</strong>&#xFF0C;&#x7ED3;&#x675F;&#x4F4D;&#x7F6E;&#x53EB;&#x505A;
      <strong>main end</strong>&#xFF1B;&#x4EA4;&#x53C9;&#x8F74;&#x7684;&#x5F00;&#x59CB;&#x4F4D;&#x7F6E;&#x53EB;&#x505A;
      <strong>cross start</strong>&#xFF0C;&#x7ED3;&#x675F;&#x4F4D;&#x7F6E;&#x53EB;&#x505A;
      <strong>cross end</strong>&#x3002;
    </p>
    <p>
      &#x9879;&#x76EE;&#x9ED8;&#x8BA4;&#x6CBF;&#x4E3B;&#x8F74;&#x6392;&#x5217;&#x3002;&#x5355;&#x4E2A;&#x9879;&#x76EE;&#x5360;&#x636E;&#x7684;&#x4E3B;&#x8F74;&#x7A7A;&#x95F4;&#x53EB;&#x505A;
      <strong>main size</strong>&#xFF0C;&#x5360;&#x636E;&#x7684;&#x4EA4;&#x53C9;&#x8F74;&#x7A7A;&#x95F4;&#x53EB;&#x505A;
      <strong>cross size</strong>&#x3002;
    </p>
    <h2
      class="mume-header"
      id="%E4%B8%89-%E5%AE%B9%E5%99%A8%E7%9A%84%E5%B1%9E%E6%80%A7"
    >&#x4E09;&#x3001;&#x5BB9;&#x5668;&#x7684;&#x5C5E;&#x6027;</h2>

    <p>&#x4EE5;&#x4E0B;6&#x4E2A;&#x5C5E;&#x6027;&#x8BBE;&#x7F6E;&#x5728;&#x5BB9;&#x5668;&#x4E0A;&#x3002;</p>
    <blockquote>
      <ul>
        <li>flex-direction</li>
        <li>flex-wrap</li>
        <li>flex-flow</li>
        <li>justify-content</li>
        <li>align-items</li>
        <li>align-content</li>
      </ul>
    </blockquote>
    <h3
      class="mume-header"
      id="31-flex-direction%E5%B1%9E%E6%80%A7"
    >3.1 flex-direction&#x5C5E;&#x6027;</h3>

    <p>
      <strong>flex-direction</strong>&#x5C5E;&#x6027;&#x51B3;&#x5B9A;&#x4E3B;&#x8F74;&#x7684;&#x65B9;&#x5411;&#xFF08;&#x5373;&#x9879;&#x76EE;&#x7684;&#x6392;&#x5217;&#x65B9;&#x5411;&#xFF09;&#x3002;
    </p>
    <pre data-role="codeBlock" data-info="css" class="language-css"><span class="token selector"><span class="token class">.box</span></span> <span class="token punctuation">{</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> row | row-reverse | column | column-reverse<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</pre>
    <p>
      <img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071005.png" alt="flex-direction">
    </p>
    <p>&#x5B83;&#x53EF;&#x80FD;&#x6709;4&#x4E2A;&#x503C;&#x3002;</p>
    <blockquote>
      <p>
        row&#xFF08;&#x9ED8;&#x8BA4;&#x503C;&#xFF09;&#xFF1A;&#x4E3B;&#x8F74;&#x4E3A;&#x6C34;&#x5E73;&#x65B9;&#x5411;&#xFF0C;&#x8D77;&#x70B9;&#x5728;&#x5DE6;&#x7AEF;&#x3002;
        <br>row-reverse&#xFF1A;&#x4E3B;&#x8F74;&#x4E3A;&#x6C34;&#x5E73;&#x65B9;&#x5411;&#xFF0C;&#x8D77;&#x70B9;&#x5728;&#x53F3;&#x7AEF;&#x3002;
        <br>column&#xFF1A;&#x4E3B;&#x8F74;&#x4E3A;&#x5782;&#x76F4;&#x65B9;&#x5411;&#xFF0C;&#x8D77;&#x70B9;&#x5728;&#x4E0A;&#x6CBF;&#x3002;
        <br>column-reverse&#xFF1A;&#x4E3B;&#x8F74;&#x4E3A;&#x5782;&#x76F4;&#x65B9;&#x5411;&#xFF0C;&#x8D77;&#x70B9;&#x5728;&#x4E0B;&#x6CBF;&#x3002;
      </p>
    </blockquote>
    <h3 class="mume-header" id="32-flex-wrap%E5%B1%9E%E6%80%A7">3.2 flex-wrap&#x5C5E;&#x6027;</h3>

    <p>
      &#x9ED8;&#x8BA4;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x9879;&#x76EE;&#x90FD;&#x6392;&#x5728;&#x4E00;&#x6761;&#x7EBF;&#xFF08;&#x53C8;&#x79F0;&quot;&#x8F74;&#x7EBF;&quot;&#xFF09;&#x4E0A;&#x3002;
      <strong>flex-wrap</strong>&#x5C5E;&#x6027;&#x5B9A;&#x4E49;&#xFF0C;&#x5982;&#x679C;&#x4E00;&#x6761;&#x8F74;&#x7EBF;&#x6392;&#x4E0D;&#x4E0B;&#xFF0C;&#x5982;&#x4F55;&#x6362;&#x884C;&#x3002;
    </p>
    <p>
      <img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071006.png" alt="flex-wrap">
    </p>
    <pre data-role="codeBlock" data-info="css" class="language-css"><span class="token selector"><span class="token class">.box</span></span><span
  class="token punctuation"
>{</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> nowrap | wrap | wrap-reverse<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</pre>
    <p>&#x5B83;&#x53EF;&#x80FD;&#x53D6;&#x4E09;&#x4E2A;&#x503C;&#x3002;</p>
    <blockquote>
      <ol>
        <li>
          <strong>nowrap</strong>&#xFF08;&#x9ED8;&#x8BA4;&#xFF09;&#xFF1A;&#x4E0D;&#x6362;&#x884C;&#x3002;
        </li>
      </ol>
    </blockquote>
    <p>
      <img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071007.png" alt="nowrap">
    </p>
    <blockquote>
      <ol start="2">
        <li>
          <strong>wrap</strong>&#xFF1A;&#x6362;&#x884C;&#xFF0C;&#x7B2C;&#x4E00;&#x884C;&#x5728;&#x4E0A;&#x65B9;&#x3002;
        </li>
      </ol>
    </blockquote>
    <p>
      <img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071008.jpg" alt="wrap">
    </p>
    <blockquote>
      <ol start="3">
        <li>
          <strong>wrap-reverse</strong>&#xFF1A;&#x6362;&#x884C;&#xFF0C;&#x7B2C;&#x4E00;&#x884C;&#x5728;&#x4E0B;&#x65B9;&#x3002;
        </li>
      </ol>
    </blockquote>
    <p>
      <img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071009.jpg" alt="wrap-reverse">
    </p>
    <h3 class="mume-header" id="33-flex-flow">3.3 flex-flow</h3>

    <p>
      <strong>flex-flow</strong>&#x5C5E;&#x6027;&#x662F;
      <strong>flex-direction</strong>&#x5C5E;&#x6027;&#x548C;
      <strong>flex-wrap</strong>&#x5C5E;&#x6027;&#x7684;&#x7B80;&#x5199;&#x5F62;&#x5F0F;&#xFF0C;&#x9ED8;&#x8BA4;&#x503C;&#x4E3A;
      <strong>row nowrap</strong>&#x3002;
    </p>
    <pre data-role="codeBlock" data-info="css" class="language-css"><span class="token selector"><span class="token class">.box</span></span> <span class="token punctuation">{</span>
  <span class="token property">flex-flow</span><span class="token punctuation">:</span> &lt;flex-direction&gt; || &lt;flex-wrap&gt;<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</pre>
    <h3
      class="mume-header"
      id="34-justify-content%E5%B1%9E%E6%80%A7"
    >3.4 justify-content&#x5C5E;&#x6027;</h3>

    <p>
      <strong>justify-content</strong>&#x5C5E;&#x6027;&#x5B9A;&#x4E49;&#x4E86;&#x9879;&#x76EE;&#x5728;&#x4E3B;&#x8F74;&#x4E0A;&#x7684;&#x5BF9;&#x9F50;&#x65B9;&#x5F0F;&#x3002;
    </p>
    <pre data-role="codeBlock" data-info="css" class="language-css"><span class="token selector"><span class="token class">.box</span></span> <span class="token punctuation">{</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-start | flex-end | center | space-between | space-around<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</pre>
    <p>
      <img
        src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png"
        alt="justify-content"
      >
    </p>
    <p>&#x5B83;&#x53EF;&#x80FD;&#x53D6;5&#x4E2A;&#x503C;&#xFF0C;&#x5177;&#x4F53;&#x5BF9;&#x9F50;&#x65B9;&#x5F0F;&#x4E0E;&#x8F74;&#x7684;&#x65B9;&#x5411;&#x6709;&#x5173;&#x3002;&#x4E0B;&#x9762;&#x5047;&#x8BBE;&#x4E3B;&#x8F74;&#x4E3A;&#x4ECE;&#x5DE6;&#x5230;&#x53F3;&#x3002;</p>
    <blockquote>
      <ul>
        <li>flex-start&#xFF08;&#x9ED8;&#x8BA4;&#x503C;&#xFF09;&#xFF1A;&#x5DE6;&#x5BF9;&#x9F50;</li>
        <li>flex-end&#xFF1A;&#x53F3;&#x5BF9;&#x9F50;</li>
        <li>center&#xFF1A; &#x5C45;&#x4E2D;</li>
        <li>space-between&#xFF1A;&#x4E24;&#x7AEF;&#x5BF9;&#x9F50;&#xFF0C;&#x9879;&#x76EE;&#x4E4B;&#x95F4;&#x7684;&#x95F4;&#x9694;&#x90FD;&#x76F8;&#x7B49;&#x3002;</li>
        <li>space-around&#xFF1A;&#x6BCF;&#x4E2A;&#x9879;&#x76EE;&#x4E24;&#x4FA7;&#x7684;&#x95F4;&#x9694;&#x76F8;&#x7B49;&#x3002;&#x6240;&#x4EE5;&#xFF0C;&#x9879;&#x76EE;&#x4E4B;&#x95F4;&#x7684;&#x95F4;&#x9694;&#x6BD4;&#x9879;&#x76EE;&#x4E0E;&#x8FB9;&#x6846;&#x7684;&#x95F4;&#x9694;&#x5927;&#x4E00;&#x500D;&#x3002;</li>
      </ul>
    </blockquote>
    <h3 class="mume-header" id="35-align-items%E5%B1%9E%E6%80%A7">3.5 align-items&#x5C5E;&#x6027;</h3>

    <p>
      <strong>align-items</strong>&#x5C5E;&#x6027;&#x5B9A;&#x4E49;&#x9879;&#x76EE;&#x5728;&#x4EA4;&#x53C9;&#x8F74;&#x4E0A;&#x5982;&#x4F55;&#x5BF9;&#x9F50;&#x3002;
    </p>
    <pre data-role="codeBlock" data-info="css" class="language-css"><span class="token selector"><span class="token class">.box</span></span> <span class="token punctuation">{</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> flex-start | flex-end | center | baseline | stretch<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</pre>
    <p>
      <img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png" alt="align-items">
    </p>
    <p>&#x5B83;&#x53EF;&#x80FD;&#x53D6;5&#x4E2A;&#x503C;&#x3002;&#x5177;&#x4F53;&#x7684;&#x5BF9;&#x9F50;&#x65B9;&#x5F0F;&#x4E0E;&#x4EA4;&#x53C9;&#x8F74;&#x7684;&#x65B9;&#x5411;&#x6709;&#x5173;&#xFF0C;&#x4E0B;&#x9762;&#x5047;&#x8BBE;&#x4EA4;&#x53C9;&#x8F74;&#x4ECE;&#x4E0A;&#x5230;&#x4E0B;&#x3002;</p>
    <blockquote>
      <ul>
        <li>flex-start&#xFF1A;&#x4EA4;&#x53C9;&#x8F74;&#x7684;&#x8D77;&#x70B9;&#x5BF9;&#x9F50;&#x3002;</li>
        <li>flex-end&#xFF1A;&#x4EA4;&#x53C9;&#x8F74;&#x7684;&#x7EC8;&#x70B9;&#x5BF9;&#x9F50;&#x3002;</li>
        <li>center&#xFF1A;&#x4EA4;&#x53C9;&#x8F74;&#x7684;&#x4E2D;&#x70B9;&#x5BF9;&#x9F50;&#x3002;</li>
        <li>baseline: &#x9879;&#x76EE;&#x7684;&#x7B2C;&#x4E00;&#x884C;&#x6587;&#x5B57;&#x7684;&#x57FA;&#x7EBF;&#x5BF9;&#x9F50;&#x3002;</li>
        <li>stretch&#xFF08;&#x9ED8;&#x8BA4;&#x503C;&#xFF09;&#xFF1A;&#x5982;&#x679C;&#x9879;&#x76EE;&#x672A;&#x8BBE;&#x7F6E;&#x9AD8;&#x5EA6;&#x6216;&#x8BBE;&#x4E3A;auto&#xFF0C;&#x5C06;&#x5360;&#x6EE1;&#x6574;&#x4E2A;&#x5BB9;&#x5668;&#x7684;&#x9AD8;&#x5EA6;&#x3002;</li>
      </ul>
    </blockquote>
    <h3
      class="mume-header"
      id="36-align-content%E5%B1%9E%E6%80%A7"
    >3.6 align-content&#x5C5E;&#x6027;</h3>

    <p>
      <strong>align-content</strong>&#x5C5E;&#x6027;&#x5B9A;&#x4E49;&#x4E86;&#x591A;&#x6839;&#x8F74;&#x7EBF;&#x7684;&#x5BF9;&#x9F50;&#x65B9;&#x5F0F;&#x3002;&#x5982;&#x679C;&#x9879;&#x76EE;&#x53EA;&#x6709;&#x4E00;&#x6839;&#x8F74;&#x7EBF;&#xFF0C;&#x8BE5;&#x5C5E;&#x6027;&#x4E0D;&#x8D77;&#x4F5C;&#x7528;&#x3002;
    </p>
    <pre data-role="codeBlock" data-info="css" class="language-css"><span class="token selector"><span class="token class">.box</span></span> <span class="token punctuation">{</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span> flex-start | flex-end | center | space-between | space-around | stretch<span
  class="token punctuation"
>;</span>
<span class="token punctuation">}</span>
</pre>
    <p>
      <img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071012.png" alt="align-content">
    </p>
    <p>&#x8BE5;&#x5C5E;&#x6027;&#x53EF;&#x80FD;&#x53D6;6&#x4E2A;&#x503C;&#x3002;</p>
    <blockquote>
      <ul>
        <li>flex-start&#xFF1A;&#x4E0E;&#x4EA4;&#x53C9;&#x8F74;&#x7684;&#x8D77;&#x70B9;&#x5BF9;&#x9F50;&#x3002;</li>
        <li>flex-end&#xFF1A;&#x4E0E;&#x4EA4;&#x53C9;&#x8F74;&#x7684;&#x7EC8;&#x70B9;&#x5BF9;&#x9F50;&#x3002;</li>
        <li>center&#xFF1A;&#x4E0E;&#x4EA4;&#x53C9;&#x8F74;&#x7684;&#x4E2D;&#x70B9;&#x5BF9;&#x9F50;&#x3002;</li>
        <li>space-between&#xFF1A;&#x4E0E;&#x4EA4;&#x53C9;&#x8F74;&#x4E24;&#x7AEF;&#x5BF9;&#x9F50;&#xFF0C;&#x8F74;&#x7EBF;&#x4E4B;&#x95F4;&#x7684;&#x95F4;&#x9694;&#x5E73;&#x5747;&#x5206;&#x5E03;&#x3002;</li>
        <li>space-around&#xFF1A;&#x6BCF;&#x6839;&#x8F74;&#x7EBF;&#x4E24;&#x4FA7;&#x7684;&#x95F4;&#x9694;&#x90FD;&#x76F8;&#x7B49;&#x3002;&#x6240;&#x4EE5;&#xFF0C;&#x8F74;&#x7EBF;&#x4E4B;&#x95F4;&#x7684;&#x95F4;&#x9694;&#x6BD4;&#x8F74;&#x7EBF;&#x4E0E;&#x8FB9;&#x6846;&#x7684;&#x95F4;&#x9694;&#x5927;&#x4E00;&#x500D;&#x3002;</li>
        <li>stretch&#xFF08;&#x9ED8;&#x8BA4;&#x503C;&#xFF09;&#xFF1A;&#x8F74;&#x7EBF;&#x5360;&#x6EE1;&#x6574;&#x4E2A;&#x4EA4;&#x53C9;&#x8F74;&#x3002;</li>
      </ul>
    </blockquote>
    <h2
      class="mume-header"
      id="%E5%9B%9B-%E9%A1%B9%E7%9B%AE%E7%9A%84%E5%B1%9E%E6%80%A7"
    >&#x56DB;&#x3001;&#x9879;&#x76EE;&#x7684;&#x5C5E;&#x6027;</h2>

    <p>&#x4EE5;&#x4E0B;6&#x4E2A;&#x5C5E;&#x6027;&#x8BBE;&#x7F6E;&#x5728;&#x9879;&#x76EE;&#x4E0A;&#x3002;</p>
    <blockquote>
      <ul>
        <li>order</li>
        <li>flex-grow</li>
        <li>flex-shrink</li>
        <li>flex-basis</li>
        <li>flex</li>
        <li>align-self</li>
      </ul>
    </blockquote>
    <h3 class="mume-header" id="41-order%E5%B1%9E%E6%80%A7">4.1 order&#x5C5E;&#x6027;</h3>

    <p>
      <strong>order</strong>&#x5C5E;&#x6027;&#x5B9A;&#x4E49;&#x9879;&#x76EE;&#x7684;&#x6392;&#x5217;&#x987A;&#x5E8F;&#x3002;&#x6570;&#x503C;&#x8D8A;&#x5C0F;&#xFF0C;&#x6392;&#x5217;&#x8D8A;&#x9760;&#x524D;&#xFF0C;&#x9ED8;&#x8BA4;&#x4E3A;0&#x3002;
    </p>
    <pre data-role="codeBlock" data-info="css" class="language-css"><span class="token selector"><span class="token class">.item</span></span> <span class="token punctuation">{</span>
  <span class="token property">order</span><span class="token punctuation">:</span> &lt;integer&gt;<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</pre>
    <p>
      <img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071013.png" alt="order">
    </p>
    <h3 class="mume-header" id="42-flex-grow%E5%B1%9E%E6%80%A7">4.2 flex-grow&#x5C5E;&#x6027;</h3>

    <p>
      <strong>flex-grow</strong>&#x5C5E;&#x6027;&#x5B9A;&#x4E49;&#x9879;&#x76EE;&#x7684;&#x653E;&#x5927;&#x6BD4;&#x4F8B;&#xFF0C;&#x9ED8;&#x8BA4;&#x4E3A;0&#xFF0C;&#x5373;&#x5982;&#x679C;&#x5B58;&#x5728;&#x5269;&#x4F59;&#x7A7A;&#x95F4;&#xFF0C;&#x4E5F;&#x4E0D;&#x653E;&#x5927;&#x3002;
    </p>
    <pre data-role="codeBlock" data-info="css" class="language-css"><span class="token selector"><span class="token class">.item</span></span> <span class="token punctuation">{</span>
  <span class="token property">flex-grow</span><span class="token punctuation">:</span> &lt;number&gt;<span class="token punctuation">;</span> <span class="token comment">/* default 0 */</span>
<span class="token punctuation">}</span>
</pre>
    <p>
      <img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071014.png" alt="flex-grow">
    </p>
    <p>
      &#x5982;&#x679C;&#x6240;&#x6709;&#x9879;&#x76EE;&#x7684;
      <strong>flex-grow</strong>&#x5C5E;&#x6027;&#x90FD;&#x4E3A;1&#xFF0C;&#x5219;&#x5B83;&#x4EEC;&#x5C06;&#x7B49;&#x5206;&#x5269;&#x4F59;&#x7A7A;&#x95F4;&#xFF08;&#x5982;&#x679C;&#x6709;&#x7684;&#x8BDD;&#xFF09;&#x3002;&#x5982;&#x679C;&#x4E00;&#x4E2A;&#x9879;&#x76EE;&#x7684;
      <strong>flex-grow</strong>&#x5C5E;&#x6027;&#x4E3A;2&#xFF0C;&#x5176;&#x4ED6;&#x9879;&#x76EE;&#x90FD;&#x4E3A;1&#xFF0C;&#x5219;&#x524D;&#x8005;&#x5360;&#x636E;&#x7684;&#x5269;&#x4F59;&#x7A7A;&#x95F4;&#x5C06;&#x6BD4;&#x5176;&#x4ED6;&#x9879;&#x591A;&#x4E00;&#x500D;&#x3002;
    </p>
    <h3 class="mume-header" id="43-flex-shrink%E5%B1%9E%E6%80%A7">4.3 flex-shrink&#x5C5E;&#x6027;</h3>

    <p>
      <strong>flex-shrink</strong>&#x5C5E;&#x6027;&#x5B9A;&#x4E49;&#x4E86;&#x9879;&#x76EE;&#x7684;&#x7F29;&#x5C0F;&#x6BD4;&#x4F8B;&#xFF0C;&#x9ED8;&#x8BA4;&#x4E3A;1&#xFF0C;&#x5373;&#x5982;&#x679C;&#x7A7A;&#x95F4;&#x4E0D;&#x8DB3;&#xFF0C;&#x8BE5;&#x9879;&#x76EE;&#x5C06;&#x7F29;&#x5C0F;&#x3002;
    </p>
    <pre data-role="codeBlock" data-info="css" class="language-css"><span class="token selector"><span class="token class">.item</span></span> <span class="token punctuation">{</span>
  <span class="token property">flex-shrink</span><span class="token punctuation">:</span> &lt;number&gt;<span class="token punctuation">;</span> <span class="token comment">/* default 1 */</span>
<span class="token punctuation">}</span>
</pre>
    <p>
      <img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071015.jpg" alt="flex-shrink">
    </p>
    <p>
      &#x5982;&#x679C;&#x6240;&#x6709;&#x9879;&#x76EE;&#x7684;
      <strong>flex-shrink</strong>&#x5C5E;&#x6027;&#x90FD;&#x4E3A;1&#xFF0C;&#x5F53;&#x7A7A;&#x95F4;&#x4E0D;&#x8DB3;&#x65F6;&#xFF0C;&#x90FD;&#x5C06;&#x7B49;&#x6BD4;&#x4F8B;&#x7F29;&#x5C0F;&#x3002;&#x5982;&#x679C;&#x4E00;&#x4E2A;&#x9879;&#x76EE;&#x7684;
      <strong>flex-shrink</strong>&#x5C5E;&#x6027;&#x4E3A;0&#xFF0C;&#x5176;&#x4ED6;&#x9879;&#x76EE;&#x90FD;&#x4E3A;1&#xFF0C;&#x5219;&#x7A7A;&#x95F4;&#x4E0D;&#x8DB3;&#x65F6;&#xFF0C;&#x524D;&#x8005;&#x4E0D;&#x7F29;&#x5C0F;&#x3002;
    </p>
    <p>&#x8D1F;&#x503C;&#x5BF9;&#x8BE5;&#x5C5E;&#x6027;&#x65E0;&#x6548;&#x3002;</p>
    <h3 class="mume-header" id="44-flex-basis%E5%B1%9E%E6%80%A7">4.4 flex-basis&#x5C5E;&#x6027;</h3>

    <p>
      <strong>flex-basis</strong>&#x5C5E;&#x6027;&#x5B9A;&#x4E49;&#x4E86;&#x5728;&#x5206;&#x914D;&#x591A;&#x4F59;&#x7A7A;&#x95F4;&#x4E4B;&#x524D;&#xFF0C;&#x9879;&#x76EE;&#x5360;&#x636E;&#x7684;&#x4E3B;&#x8F74;&#x7A7A;&#x95F4;&#xFF08;main size&#xFF09;&#x3002;&#x6D4F;&#x89C8;&#x5668;&#x6839;&#x636E;&#x8FD9;&#x4E2A;&#x5C5E;&#x6027;&#xFF0C;&#x8BA1;&#x7B97;&#x4E3B;&#x8F74;&#x662F;&#x5426;&#x6709;&#x591A;&#x4F59;&#x7A7A;&#x95F4;&#x3002;&#x5B83;&#x7684;&#x9ED8;&#x8BA4;&#x503C;&#x4E3A;
      <strong>auto</strong>&#xFF0C;&#x5373;&#x9879;&#x76EE;&#x7684;&#x672C;&#x6765;&#x5927;&#x5C0F;&#x3002;
    </p>
    <pre data-role="codeBlock" data-info="css" class="language-css"><span class="token selector"><span class="token class">.item</span></span> <span class="token punctuation">{</span>
  <span class="token property">flex-basis</span><span class="token punctuation">:</span> &lt;length&gt; | auto<span class="token punctuation">;</span> <span class="token comment">/* default auto */</span>
<span class="token punctuation">}</span>
</pre>
    <p>
      &#x5B83;&#x53EF;&#x4EE5;&#x8BBE;&#x4E3A;&#x8DDF;
      <strong>width</strong>&#x6216;
      <strong>height</strong>&#x5C5E;&#x6027;&#x4E00;&#x6837;&#x7684;&#x503C;&#xFF08;&#x6BD4;&#x5982;350px&#xFF09;&#xFF0C;&#x5219;&#x9879;&#x76EE;&#x5C06;&#x5360;&#x636E;&#x56FA;&#x5B9A;&#x7A7A;&#x95F4;&#x3002;
    </p>
    <h3 class="mume-header" id="45-flex%E5%B1%9E%E6%80%A7">4.5 flex&#x5C5E;&#x6027;</h3>

    <p>
      <strong>flex</strong>&#x5C5E;&#x6027;&#x662F;
      <strong>flex-grow</strong>,
      <strong>flex-shrink</strong> &#x548C;
      <strong>flex-basis</strong>&#x7684;&#x7B80;&#x5199;&#xFF0C;&#x9ED8;&#x8BA4;&#x503C;&#x4E3A;
      <strong>0 1 auto</strong>&#x3002;&#x540E;&#x4E24;&#x4E2A;&#x5C5E;&#x6027;&#x53EF;&#x9009;&#x3002;
    </p>
    <pre data-role="codeBlock" data-info="css" class="language-css"><span class="token selector"><span class="token class">.item</span></span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> none | [ &lt;<span class="token string">&apos;flex-grow&apos;</span>&gt; &lt;<span class="token string">&apos;flex-shrink&apos;</span>&gt;? || &lt;<span class="token string">&apos;flex-basis&apos;</span>&gt; ]
<span class="token punctuation">}</span>
</pre>
    <p>
      &#x8BE5;&#x5C5E;&#x6027;&#x6709;&#x4E24;&#x4E2A;&#x5FEB;&#x6377;&#x503C;&#xFF1A;
      <strong>auto</strong> (1 1 auto) &#x548C;
      <strong>none</strong> (0 0 auto)&#x3002;
    </p>
    <p>&#x5EFA;&#x8BAE;&#x4F18;&#x5148;&#x4F7F;&#x7528;&#x8FD9;&#x4E2A;&#x5C5E;&#x6027;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x5355;&#x72EC;&#x5199;&#x4E09;&#x4E2A;&#x5206;&#x79BB;&#x7684;&#x5C5E;&#x6027;&#xFF0C;&#x56E0;&#x4E3A;&#x6D4F;&#x89C8;&#x5668;&#x4F1A;&#x63A8;&#x7B97;&#x76F8;&#x5173;&#x503C;&#x3002;</p>
    <h3 class="mume-header" id="46-align-self%E5%B1%9E%E6%80%A7">4.6 align-self&#x5C5E;&#x6027;</h3>

    <p>
      <strong>align-self</strong>&#x5C5E;&#x6027;&#x5141;&#x8BB8;&#x5355;&#x4E2A;&#x9879;&#x76EE;&#x6709;&#x4E0E;&#x5176;&#x4ED6;&#x9879;&#x76EE;&#x4E0D;&#x4E00;&#x6837;&#x7684;&#x5BF9;&#x9F50;&#x65B9;&#x5F0F;&#xFF0C;&#x53EF;&#x8986;&#x76D6;
      <strong>align-items</strong>&#x5C5E;&#x6027;&#x3002;&#x9ED8;&#x8BA4;&#x503C;&#x4E3A;
      <strong>auto</strong>&#xFF0C;&#x8868;&#x793A;&#x7EE7;&#x627F;&#x7236;&#x5143;&#x7D20;&#x7684;
      <strong>align-items</strong>&#x5C5E;&#x6027;&#xFF0C;&#x5982;&#x679C;&#x6CA1;&#x6709;&#x7236;&#x5143;&#x7D20;&#xFF0C;&#x5219;&#x7B49;&#x540C;&#x4E8E;
      <strong>stretch</strong>&#x3002;
    </p>
    <pre data-role="codeBlock" data-info="css" class="language-css"><span class="token selector"><span class="token class">.item</span></span> <span class="token punctuation">{</span>
  <span class="token property">align-self</span><span class="token punctuation">:</span> auto | flex-start | flex-end | center | baseline | stretch<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</pre>
    <p>
      <img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071016.png" alt="align-self">
    </p>
    <p>&#x8BE5;&#x5C5E;&#x6027;&#x53EF;&#x80FD;&#x53D6;6&#x4E2A;&#x503C;&#xFF0C;&#x9664;&#x4E86;auto&#xFF0C;&#x5176;&#x4ED6;&#x90FD;&#x4E0E;align-items&#x5C5E;&#x6027;&#x5B8C;&#x5168;&#x4E00;&#x81F4;&#x3002;</p>
  </div>
</template>

<script>
export default {
  name: "doc",
  data() {
    return {};
  }
};
</script>

<style scoped>
/* my */
strong {
  background: pink;
  padding: 0 12px;
  border-radius: 6px;
  font-weight: normal;
  /* color: #fff !important; */
}
p > img {
  border-radius: 8px;
}

/* default */
code[class*="language-"],
pre[class*="language-"] {
  color: #333;
  background: none;
  font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.4;

  -moz-tab-size: 8;
  -o-tab-size: 8;
  tab-size: 8;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
  padding: 0.8em;
  overflow: auto;
  /* border: 1px solid #ddd; */
  border-radius: 3px;
  /* background: #fff; */
  background: #f5f5f5;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  padding: 0.1em;
  border-radius: 0.3em;
  white-space: normal;
  background: #f5f5f5;
}

.token.comment,
.token.blockquote {
  color: #969896;
}

.token.cdata {
  color: #183691;
}

.token.doctype,
.token.punctuation,
.token.variable,
.token.macro.property {
  color: #333;
}

.token.operator,
.token.important,
.token.keyword,
.token.rule,
.token.builtin {
  color: #a71d5d;
}

.token.string,
.token.url,
.token.regex,
.token.attr-value {
  color: #183691;
}

.token.property,
.token.number,
.token.boolean,
.token.entity,
.token.atrule,
.token.constant,
.token.symbol,
.token.command,
.token.code {
  color: #0086b3;
}

.token.tag,
.token.selector,
.token.prolog {
  color: #63a35c;
}

.token.function,
.token.namespace,
.token.pseudo-element,
.token.class,
.token.class-name,
.token.pseudo-class,
.token.id,
.token.url-reference .token.variable,
.token.attr-name {
  color: #795da3;
}

.token.entity {
  cursor: help;
}

.token.title,
.token.title .token.punctuation {
  font-weight: bold;
  color: #1d3e81;
}

.token.list {
  color: #ed6a43;
}

.token.inserted {
  background-color: #eaffea;
  color: #55a532;
}

.token.deleted {
  background-color: #ffecec;
  color: #bd2c00;
}

.token.bold {
  font-weight: bold;
}

.token.italic {
  font-style: italic;
}

/* JSON */
.language-json .token.property {
  color: #183691;
}

.language-markup .token.tag .token.punctuation {
  color: #333;
}

/* CSS */
code.language-css,
.language-css .token.function {
  color: #0086b3;
}

/* YAML */
.language-yaml .token.atrule {
  color: #63a35c;
}

code.language-yaml {
  color: #183691;
}

/* Ruby */
.language-ruby .token.function {
  color: #333;
}

/* Markdown */
.language-markdown .token.url {
  color: #795da3;
}

/* Makefile */
.language-makefile .token.symbol {
  color: #795da3;
}

.language-makefile .token.variable {
  color: #183691;
}

.language-makefile .token.builtin {
  color: #0086b3;
}

/* Bash */
.language-bash .token.keyword {
  color: #0086b3;
}

/* highlight */
pre[data-line] {
  position: relative;
  padding: 1em 0 1em 3em;
}
pre[data-line] .line-highlight-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  display: block;
  width: 100%;
}

pre[data-line] .line-highlight {
  position: absolute;
  left: 0;
  right: 0;
  padding: inherit 0;
  margin-top: 1em;
  background: hsla(24, 20%, 50%, 0.08);
  background: linear-gradient(
    to right,
    hsla(24, 20%, 50%, 0.1) 70%,
    hsla(24, 20%, 50%, 0)
  );
  pointer-events: none;
  line-height: inherit;
  white-space: pre;
}

pre[data-line] .line-highlight:before,
pre[data-line] .line-highlight[data-end]:after {
  content: attr(data-start);
  position: absolute;
  top: 0.4em;
  left: 0.6em;
  min-width: 1em;
  padding: 0 0.5em;
  background-color: hsla(24, 20%, 50%, 0.4);
  color: hsl(24, 20%, 95%);
  font: bold 65%/1.5 sans-serif;
  text-align: center;
  vertical-align: 0.3em;
  border-radius: 999px;
  text-shadow: none;
  box-shadow: 0 1px white;
}

pre[data-line] .line-highlight[data-end]:after {
  content: attr(data-end);
  top: auto;
  bottom: 0.4em;
}
html body {
  font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans,
    sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  background-color: #fff;
  overflow: initial;
  box-sizing: border-box;
  word-wrap: break-word;
}
html body > :first-child {
  margin-top: 0;
}
html body h1,
html body h2,
html body h3,
html body h4,
html body h5,
html body h6 {
  line-height: 1.2;
  margin-top: 1em;
  margin-bottom: 16px;
  color: #000;
}
html body h1 {
  font-size: 2.25em;
  font-weight: 300;
  padding-bottom: 0.3em;
}
html body h2 {
  font-size: 1.75em;
  font-weight: 400;
  padding-bottom: 0.3em;
}
html body h3 {
  font-size: 1.5em;
  font-weight: 500;
}
html body h4 {
  font-size: 1.25em;
  font-weight: 600;
}
html body h5 {
  font-size: 1.1em;
  font-weight: 600;
}
html body h6 {
  font-size: 1em;
  font-weight: 600;
}
html body h1,
html body h2,
html body h3,
html body h4,
html body h5 {
  font-weight: 600;
}
html body h5 {
  font-size: 1em;
}
html body h6 {
  color: #5c5c5c;
}
html body strong {
  color: #000;
}
html body del {
  color: #5c5c5c;
}
html body a:not([href]) {
  color: inherit;
  text-decoration: none;
}
html body a {
  color: #08c;
  text-decoration: none;
}
html body a:hover {
  color: #00a3f5;
  text-decoration: none;
}
html body img {
  max-width: 100%;
}
html body > p {
  margin-top: 0;
  margin-bottom: 16px;
  word-wrap: break-word;
}
html body > ul,
html body > ol {
  margin-bottom: 16px;
}
html body ul,
html body ol {
  padding-left: 2em;
}
html body ul.no-list,
html body ol.no-list {
  padding: 0;
  list-style-type: none;
}
html body ul ul,
html body ul ol,
html body ol ol,
html body ol ul {
  margin-top: 0;
  margin-bottom: 0;
}
html body li {
  margin-bottom: 0;
}
html body li.task-list-item {
  list-style: none;
}
html body li > p {
  margin-top: 0;
  margin-bottom: 0;
}
html body .task-list-item-checkbox {
  margin: 0 0.2em 0.25em -1.8em;
  vertical-align: middle;
}
html body .task-list-item-checkbox:hover {
  cursor: pointer;
}
html body blockquote {
  margin: 16px 0;
  font-size: inherit;
  padding: 0 15px;
  color: #5c5c5c;
  border-left: 4px solid #d6d6d6;
}
html body blockquote > :first-child {
  margin-top: 0;
}
html body blockquote > :last-child {
  margin-bottom: 0;
}
html body hr {
  height: 4px;
  margin: 32px 0;
  background-color: #d6d6d6;
  border: 0 none;
}
html body table {
  margin: 10px 0 15px 0;
  border-collapse: collapse;
  border-spacing: 0;
  display: block;
  width: 100%;
  overflow: auto;
  word-break: normal;
  word-break: keep-all;
}
html body table th {
  font-weight: bold;
  color: #000;
}
html body table td,
html body table th {
  border: 1px solid #d6d6d6;
  padding: 6px 13px;
}
html body dl {
  padding: 0;
}
html body dl dt {
  padding: 0;
  margin-top: 16px;
  font-size: 1em;
  font-style: italic;
  font-weight: bold;
}
html body dl dd {
  padding: 0 16px;
  margin-bottom: 16px;
}
html body code {
  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
  font-size: 0.85em !important;
  color: #000;
  background-color: #f0f0f0;
  border-radius: 3px;
  padding: 0.2em 0;
}
html body code::before,
html body code::after {
  letter-spacing: -0.2em;
  content: "\00a0";
}
html body pre > code {
  padding: 0;
  margin: 0;
  font-size: 0.85em !important;
  word-break: normal;
  white-space: pre;
  background: transparent;
  border: 0;
}
html body .highlight {
  margin-bottom: 16px;
}
html body .highlight pre,
html body pre {
  padding: 1em;
  overflow: auto;
  font-size: 0.85em !important;
  line-height: 1.45;
  border: #d6d6d6;
  border-radius: 3px;
}
html body .highlight pre {
  margin-bottom: 0;
  word-break: normal;
}
html body pre code,
html body pre tt {
  display: inline;
  max-width: initial;
  padding: 0;
  margin: 0;
  overflow: initial;
  line-height: inherit;
  word-wrap: normal;
  background-color: transparent;
  border: 0;
}
html body pre code:before,
html body pre tt:before,
html body pre code:after,
html body pre tt:after {
  content: normal;
}
html body p,
html body blockquote,
html body ul,
html body ol,
html body dl,
html body pre {
  margin-top: 0;
  margin-bottom: 16px;
}
html body kbd {
  color: #000;
  border: 1px solid #d6d6d6;
  border-bottom: 2px solid #c7c7c7;
  padding: 2px 4px;
  background-color: #f0f0f0;
  border-radius: 3px;
}
@media print {
  html body {
    background-color: #fff;
  }
  html body h1,
  html body h2,
  html body h3,
  html body h4,
  html body h5,
  html body h6 {
    color: #000;
    page-break-after: avoid;
  }
  html body blockquote {
    color: #5c5c5c;
  }
  html body pre {
    page-break-inside: avoid;
  }
  html body table {
    display: table;
  }
  html body img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
  html body pre,
  html body code {
    word-wrap: break-word;
    white-space: pre;
  }
}
.markdown-preview {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.markdown-preview .pagebreak,
.markdown-preview .newpage {
  page-break-before: always;
}
.markdown-preview pre.line-numbers {
  position: relative;
  padding-left: 3.8em;
  counter-reset: linenumber;
}
.markdown-preview pre.line-numbers > code {
  position: relative;
}
.markdown-preview pre.line-numbers .line-numbers-rows {
  position: absolute;
  pointer-events: none;
  top: 1em;
  font-size: 100%;
  left: 0;
  width: 3em;
  letter-spacing: -1px;
  border-right: 1px solid #999;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.markdown-preview pre.line-numbers .line-numbers-rows > span {
  pointer-events: none;
  display: block;
  counter-increment: linenumber;
}
.markdown-preview pre.line-numbers .line-numbers-rows > span:before {
  content: counter(linenumber);
  color: #999;
  display: block;
  padding-right: 0.8em;
  text-align: right;
}
.markdown-preview .mathjax-exps .MathJax_Display {
  text-align: center !important;
}
.markdown-preview:not([for="preview"]) .code-chunk .btn-group {
  display: none;
}
.markdown-preview:not([for="preview"]) .code-chunk .status {
  display: none;
}
.markdown-preview:not([for="preview"]) .code-chunk .output-div {
  margin-bottom: 16px;
}
.scrollbar-style::-webkit-scrollbar {
  width: 8px;
}
.scrollbar-style::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: transparent;
}
.scrollbar-style::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: rgba(150, 150, 150, 0.66);
  border: 4px solid rgba(150, 150, 150, 0.66);
  background-clip: content-box;
}
html body:not([data-presentation-mode]) {
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  overflow: auto;
}
html body:not([data-presentation-mode]) .markdown-preview {
  position: relative;
  top: 0;
}
@media screen and (min-width: 914px) {
  html body:not([data-presentation-mode]) .markdown-preview {
    padding: 2em calc(50% - 457px);
  }
}
@media screen and (max-width: 914px) {
  html body:not([data-presentation-mode]) .markdown-preview {
    padding: 2em;
  }
}
@media screen and (max-width: 450px) {
  html body:not([data-presentation-mode]) .markdown-preview {
    font-size: 14px !important;
    padding: 1em;
  }
}
@media print {
  html body:not([data-presentation-mode]) #sidebar-toc-btn {
    display: none;
  }
}
html body:not([data-presentation-mode]) #sidebar-toc-btn {
  position: fixed;
  bottom: 8px;
  left: 8px;
  font-size: 28px;
  cursor: pointer;
  color: inherit;
  z-index: 99;
  width: 32px;
  text-align: center;
  opacity: 0.4;
}
html
  body:not([data-presentation-mode])[html-show-sidebar-toc]
  #sidebar-toc-btn {
  opacity: 1;
}
html
  body:not([data-presentation-mode])[html-show-sidebar-toc]
  .md-sidebar-toc {
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  padding: 32px 0 48px 0;
  font-size: 14px;
  box-shadow: 0 0 4px rgba(150, 150, 150, 0.33);
  box-sizing: border-box;
  overflow: auto;
  background-color: inherit;
}
html
  body:not([data-presentation-mode])[html-show-sidebar-toc]
  .md-sidebar-toc::-webkit-scrollbar {
  width: 8px;
}
html
  body:not([data-presentation-mode])[html-show-sidebar-toc]
  .md-sidebar-toc::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: transparent;
}
html
  body:not([data-presentation-mode])[html-show-sidebar-toc]
  .md-sidebar-toc::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: rgba(150, 150, 150, 0.66);
  border: 4px solid rgba(150, 150, 150, 0.66);
  background-clip: content-box;
}
html
  body:not([data-presentation-mode])[html-show-sidebar-toc]
  .md-sidebar-toc
  a {
  text-decoration: none;
}
html
  body:not([data-presentation-mode])[html-show-sidebar-toc]
  .md-sidebar-toc
  ul {
  padding: 0 1.6em;
  margin-top: 0.8em;
}
html
  body:not([data-presentation-mode])[html-show-sidebar-toc]
  .md-sidebar-toc
  li {
  margin-bottom: 0.8em;
}
html
  body:not([data-presentation-mode])[html-show-sidebar-toc]
  .md-sidebar-toc
  ul {
  list-style-type: none;
}
html
  body:not([data-presentation-mode])[html-show-sidebar-toc]
  .markdown-preview {
  left: 300px;
  width: calc(100% - 300px);
  padding: 2em calc(50% - 457px - 150px);
  margin: 0;
  box-sizing: border-box;
}
@media screen and (max-width: 1274px) {
  html
    body:not([data-presentation-mode])[html-show-sidebar-toc]
    .markdown-preview {
    padding: 2em;
  }
}
@media screen and (max-width: 450px) {
  html
    body:not([data-presentation-mode])[html-show-sidebar-toc]
    .markdown-preview {
    width: 100%;
  }
}
html
  body:not([data-presentation-mode]):not([html-show-sidebar-toc])
  .markdown-preview {
  left: 50%;
  transform: translateX(-50%);
}
html
  body:not([data-presentation-mode]):not([html-show-sidebar-toc])
  .md-sidebar-toc {
  display: none;
}
/* Please visit the URL below for more information: */
/*   https://shd101wyy.github.io/markdown-preview-enhanced/#/customize-css */
</style>

