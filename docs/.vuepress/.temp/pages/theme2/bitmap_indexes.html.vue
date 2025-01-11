<template><div><h1 id="bitmap-indexes" tabindex="-1"><a class="header-anchor" href="#bitmap-indexes"><span>Bitmap Indexes</span></a></h1>
<p>Bitmap indexes are highly efficient for queries on columns with low cardinality—columns that have only a few distinct values. By using a bitmap representation, databases can perform logical operations (AND, OR, NOT) on the data with minimal processing overhead.</p>
<hr>
<h2 id="how-it-works" tabindex="-1"><a class="header-anchor" href="#how-it-works"><span>How It Works</span></a></h2>
<ul>
<li><strong>Bitmap Creation</strong>: For each unique value in a column, a bitmap (binary representation) is constructed. Each row in the table corresponds to a bit in the bitmap.</li>
<li><strong>Quick Filtering &amp; Aggregation</strong>: Logical operations on these bitmaps (e.g., AND, OR) can rapidly identify rows that match query predicates.</li>
<li><strong>Low Cardinality Use Cases</strong>: Bitmap indexes shine when the column has very few distinct values, such as gender fields, Boolean flags, or status columns.</li>
</ul>
<p><strong>Example</strong></p>
<ul>
<li><strong>Hardcover Books</strong> could be represented as <code v-pre>1001011</code>.</li>
<li><strong>Paperback Books</strong> could be represented as <code v-pre>0110100</code>.</li>
</ul>
<p>When filtering by book type, the system quickly intersects these bitmaps rather than scanning entire tables.</p>
<hr>
<h2 id="benefits-of-bitmap-indexes" tabindex="-1"><a class="header-anchor" href="#benefits-of-bitmap-indexes"><span>Benefits of Bitmap Indexes</span></a></h2>
<ul>
<li><strong>Space Efficiency</strong>: Often require less storage than traditional indexes for low-cardinality columns.</li>
<li><strong>Faster Query Performance</strong>: Greatly speed up queries involving multiple predicates on low-cardinality columns.</li>
<li><strong>Simplicity</strong>: Logical operations (AND, OR, NOT) on bitmaps are straightforward and computationally efficient.</li>
</ul>
<hr>
<h2 id="when-to-avoid-bitmap-indexes" tabindex="-1"><a class="header-anchor" href="#when-to-avoid-bitmap-indexes"><span>When to Avoid Bitmap Indexes</span></a></h2>
<ul>
<li><strong>High Cardinality</strong>: If the column has many unique values, bitmap indexes may not be efficient.</li>
<li><strong>Frequent Updates</strong>: They can be expensive to maintain in scenarios with numerous row inserts, updates, or deletes.</li>
</ul>
<hr>
<h2 id="glossary" tabindex="-1"><a class="header-anchor" href="#glossary"><span>Glossary</span></a></h2>
<table>
<thead>
<tr>
<th><strong>Term</strong></th>
<th><strong>Definition</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Bitmap Index</strong></td>
<td>An index structure that uses bit arrays to represent values in columns with low cardinality for fast queries</td>
</tr>
<tr>
<td><strong>Cardinality</strong></td>
<td>The number of unique values within a column</td>
</tr>
<tr>
<td><strong>Logical Operations (AND, OR, NOT)</strong></td>
<td>Operations used on bitmaps to quickly filter data sets</td>
</tr>
</tbody>
</table>
</div></template>


