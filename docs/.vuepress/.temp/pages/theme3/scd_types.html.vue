<template><div><h1 id="slowly-changing-dimensions-scds" tabindex="-1"><a class="header-anchor" href="#slowly-changing-dimensions-scds"><span>Slowly Changing Dimensions (SCDs)</span></a></h1>
<p>Slowly Changing Dimensions (SCDs) address how to manage changes in dimension attributes over time, preserving history or updating records as needed.</p>
<hr>
<h2 id="scd-types" tabindex="-1"><a class="header-anchor" href="#scd-types"><span>SCD Types</span></a></h2>
<ol>
<li>
<p><strong>Type 0</strong></p>
<ul>
<li><strong>No Changes</strong>: Attribute values remain as originally loaded; no history tracked.</li>
<li><strong>Use Case</strong>: Very stable attributes (e.g., date of birth).</li>
</ul>
</li>
<li>
<p><strong>Type 1</strong></p>
<ul>
<li><strong>Overwrite Changes</strong>: Updates the existing record, losing historical data.</li>
<li><strong>Use Case</strong>: Correcting errors (e.g., fixing a misspelled name).</li>
</ul>
</li>
<li>
<p><strong>Type 2</strong></p>
<ul>
<li><strong>Track Full History</strong>: Inserts a new dimension row with updated attributes, preserving past values.</li>
<li><strong>Use Case</strong>: Maintaining a detailed change history (e.g., tracking customer address changes over time).</li>
</ul>
</li>
<li>
<p><strong>Type 3</strong></p>
<ul>
<li><strong>Limited History</strong>: Adds a new column to track the previous value.</li>
<li><strong>Use Case</strong>: When only the most recent change matters, but immediate previous value is still relevant.</li>
</ul>
</li>
</ol>
<hr>
<h2 id="advanced-scd-types" tabindex="-1"><a class="header-anchor" href="#advanced-scd-types"><span>Advanced SCD Types</span></a></h2>
<ul>
<li><strong>Type 4</strong>: Creates a minidimension for frequently changing attributes, reducing the need to update the main dimension frequently.</li>
<li><strong>Type 5</strong>: Combines a minidimension (Type 4) with Type 1 overwrites to handle changes more efficiently.</li>
</ul>
<p><img src="https://cdn.prod.website-files.com/64ccd6239abfeec743815b28/65e5a6e2a28ee3ede5ba065d_XUCDkp3KjJDEfHS1jfCK3_MUHfUm9o34sYxg1l03i-3Xb0-U-gTXgyp6VCTNZyXZohur3o9vc5NzY0sqFiZphmwsArH9Gh0etFFyOJxxkwehyfQIB2S_UNDge6ASDWoYPgLwsGKi0XI5RKuvQDkaxK0.png" alt="SCD Types Comparison"></p>
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
<td><strong>Slowly Changing Dimension (SCD)</strong></td>
<td>A dimension where attribute values can change over time, often requiring special handling in a data warehouse</td>
</tr>
<tr>
<td><strong>Type 2 SCD</strong></td>
<td>An approach that creates new rows for each change, preserving full historical data</td>
</tr>
<tr>
<td><strong>Minidimension</strong></td>
<td>A smaller dimension holding frequently changing attributes, reducing updates in the main dimension</td>
</tr>
<tr>
<td><strong>Historical Tracking</strong></td>
<td>The ability to maintain and query past attribute values over time</td>
</tr>
</tbody>
</table>
</div></template>


