<template><div><h1 id="bitmap-indexes" tabindex="-1"><a class="header-anchor" href="#bitmap-indexes"><span>Bitmap Indexes</span></a></h1>
<p>Bitmap indexes are efficient for queries on columns with low cardinality (few unique values).</p>
<hr>
<h2 id="how-it-works" tabindex="-1"><a class="header-anchor" href="#how-it-works"><span>How It Works</span></a></h2>
<ul>
<li>Creates a bitmap (binary representation) for each unique value.</li>
<li>Allows quick filtering and aggregation using logical operations.</li>
</ul>
<p><strong>Example:</strong></p>
<ul>
<li><strong>Hardcover Books:</strong> <code v-pre>1001011</code></li>
<li><strong>Paperback Books:</strong> <code v-pre>0110100</code></li>
</ul>
<hr>
</div></template>


