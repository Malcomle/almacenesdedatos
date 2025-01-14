<template><div><h1 id="kimball-s-4-step-methodology" tabindex="-1"><a class="header-anchor" href="#kimball-s-4-step-methodology"><span>Kimball's 4-Step Methodology</span></a></h1>
<p>Ralph Kimball's methodology is a systematic approach to designing dimensional models. It simplifies the process of identifying business processes, defining granularity, selecting dimensions, and clarifying facts.</p>
<hr>
<p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_K9dREEY8L_xfHW0Udayf9rK5A5cWvxcIhg&amp;s" alt="kimball"></p>
<h2 id="step-1-select-the-process" tabindex="-1"><a class="header-anchor" href="#step-1-select-the-process"><span>Step 1: Select the Process</span></a></h2>
<ul>
<li><strong>Goal</strong>: Identify the core business activity to model (e.g., sales, shipping, inventory).</li>
<li><strong>Examples</strong>:
<ul>
<li>An online retailer might choose “orders and shipments.”</li>
<li>A university might choose “student enrollment.”</li>
</ul>
</li>
</ul>
<hr>
<h2 id="step-2-determine-granularity" tabindex="-1"><a class="header-anchor" href="#step-2-determine-granularity"><span>Step 2: Determine Granularity</span></a></h2>
<ul>
<li><strong>Definition</strong>: Decide what a single row in the fact table represents (line item, daily summary, etc.).</li>
<li><strong>Examples</strong>:
<ul>
<li><strong>Order Line Granularity</strong>: Each row is a specific line item of a sales order.</li>
<li><strong>Daily Inventory Granularity</strong>: Each row is the quantity on hand per product, per location, per day.</li>
</ul>
</li>
</ul>
<hr>
<h2 id="step-3-identify-dimensions" tabindex="-1"><a class="header-anchor" href="#step-3-identify-dimensions"><span>Step 3: Identify Dimensions</span></a></h2>
<ul>
<li><strong>Role</strong>: Dimensions describe the context around the facts—who, what, where, when, why.</li>
<li><strong>Examples</strong>:
<ul>
<li><strong>Time</strong>: Day, Month, Year.</li>
<li><strong>Customer</strong>: Demographics, Region.</li>
<li><strong>Product</strong>: Category, Brand.</li>
</ul>
</li>
</ul>
<hr>
<h2 id="step-4-identify-facts" tabindex="-1"><a class="header-anchor" href="#step-4-identify-facts"><span>Step 4: Identify Facts</span></a></h2>
<ul>
<li><strong>Definition</strong>: The numeric measures used for analysis (e.g., revenue, count, cost).</li>
<li><strong>Examples</strong>:
<ul>
<li><strong>Retail</strong>: Units sold, total price, discount amount.</li>
<li><strong>Education</strong>: Number of applicants, number of enrollments.</li>
</ul>
</li>
</ul>
<p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Jx3SZAMLbGjwB3Io01BlYLQkpRL9Sz0qmQ&amp;s" alt="Kimball’s Methodology"></p>
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
<td><strong>Granularity</strong></td>
<td>The level of detail in a fact table (e.g., transaction-level, day-level, month-level)</td>
</tr>
<tr>
<td><strong>Dimension (Kimball)</strong></td>
<td>Descriptive context of a fact; Kimball emphasizes business-friendly attributes (customer, product)</td>
</tr>
<tr>
<td><strong>Fact (Kimball)</strong></td>
<td>Quantitative measure to be analyzed in a data warehouse</td>
</tr>
<tr>
<td><strong>Line Item</strong></td>
<td>A single entry in an order or transaction representing a product/service purchase</td>
</tr>
<tr>
<td><strong>Methodology</strong></td>
<td>A structured process for designing a data warehouse or dimensional model</td>
</tr>
</tbody>
</table>
</div></template>


