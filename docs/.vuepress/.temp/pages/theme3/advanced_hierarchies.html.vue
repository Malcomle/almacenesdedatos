<template><div><h1 id="advanced-hierarchies" tabindex="-1"><a class="header-anchor" href="#advanced-hierarchies"><span>Advanced Hierarchies</span></a></h1>
<p>Hierarchies are commonly used in dimensional models to organize data into levels for easier drill-down and roll-up operations. However, some hierarchies are irregular or recursive, requiring more complex design techniques.</p>
<hr>
<h2 id="irregular-hierarchies" tabindex="-1"><a class="header-anchor" href="#irregular-hierarchies"><span>Irregular Hierarchies</span></a></h2>
<p>Irregular hierarchies have inconsistent or uneven levels:</p>
<ul>
<li><strong>Example: Address Hierarchy</strong>
<ul>
<li>Some cities fall under states, others might use zones or districts.</li>
<li><strong>Challenge</strong>: Traditional hierarchies assume uniform levels (e.g., Country → State → City).</li>
<li><strong>Solution</strong>: Propagate lower-level values (e.g., zone/district) up the hierarchy or use a generic structure that allows missing levels to be replaced with default or placeholder values.</li>
</ul>
</li>
</ul>
<hr>
<h2 id="recursive-hierarchies" tabindex="-1"><a class="header-anchor" href="#recursive-hierarchies"><span>Recursive Hierarchies</span></a></h2>
<p>Recursive hierarchies describe relationships where an entity can be both a child and a parent.</p>
<ul>
<li><strong>Example: Employee Reporting Structure</strong>
<ul>
<li>An employee can report to another employee, creating multiple levels of reporting within the same dimension.</li>
<li><strong>Solution 1</strong>: Maintain a parent-child table within the same dimension (e.g., <code v-pre>EmployeeID</code> and <code v-pre>ManagerID</code>).</li>
<li><strong>Solution 2</strong>: Introduce an outrigger dimension for recursive attributes, reducing complexity within the main dimension.</li>
</ul>
</li>
</ul>
<hr>
<h2 id="key-considerations" tabindex="-1"><a class="header-anchor" href="#key-considerations"><span>Key Considerations</span></a></h2>
<ul>
<li><strong>Performance</strong>: Recursive and irregular hierarchies can make queries more complex; careful indexing and modeling can mitigate this.</li>
<li><strong>ETL Complexity</strong>: Ensuring the correct propagation of lower-level attributes may require custom logic in ETL processes.</li>
<li><strong>User Experience</strong>: Front-end tools must handle irregular or recursive levels gracefully for reporting and analysis.</li>
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
<td><strong>Hierarchy</strong></td>
<td>An organized structure of related data levels (e.g., Year → Quarter → Month → Day)</td>
</tr>
<tr>
<td><strong>Irregular Hierarchy</strong></td>
<td>A hierarchy with inconsistent levels (some intermediate levels may be missing)</td>
</tr>
<tr>
<td><strong>Recursive Hierarchy</strong></td>
<td>A hierarchy where entities can reference themselves (e.g., an employee is managed by another employee)</td>
</tr>
<tr>
<td><strong>Outrigger Dimension</strong></td>
<td>A supplemental dimension used to handle specialized or recursive attributes</td>
</tr>
</tbody>
</table>
</div></template>


