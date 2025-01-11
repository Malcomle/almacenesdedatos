import{_ as e,c as a,f as r,o}from"./app-BIV266AN.js";const s={};function n(i,t){return o(),a("div",null,t[0]||(t[0]=[r('<h1 id="introduction-to-data-warehousing" tabindex="-1"><a class="header-anchor" href="#introduction-to-data-warehousing"><span>Introduction to Data Warehousing</span></a></h1><p>Data Warehousing is a set of principles and techniques used to build storage systems that are optimized for data analysis and decision-making. It forms the foundation of Business Intelligence (BI) systems.</p><hr><h2 id="topics-covered" tabindex="-1"><a class="header-anchor" href="#topics-covered"><span>Topics Covered</span></a></h2><ol><li><p><strong>What is Data Warehousing?</strong><br> The art of consolidating disparate data (operational, external, historical) to extract value through analysis.</p></li><li><p><strong>Distinction Between Operational Systems (OLTP) and BI Systems (DW/BI)</strong></p><ul><li><strong>OLTP</strong>: Primarily handles day-to-day transactions (e.g., order processing, updates to customer accounts).</li><li><strong>DW/BI</strong>: Provides a historical and analytical view of the data, useful for strategic decision-making.</li></ul></li><li><p><strong>How Data Warehousing Addresses Modern Data Management Challenges</strong></p><ul><li>Exponential growth in data volume.</li><li>Heterogeneous sources (APIs, logs, sensors, various databases).</li><li>Need for powerful reporting and visualization tools (BI suites, dashboards, etc.).</li></ul></li></ol><p><img src="https://example.com/data_warehousing_overview.png" alt="Data Warehousing Overview"></p><hr><h2 id="role-of-etl-extract-transform-load" tabindex="-1"><a class="header-anchor" href="#role-of-etl-extract-transform-load"><span>Role of ETL (Extract, Transform, Load)</span></a></h2><ul><li><strong>Extract</strong>: Pulling data from multiple sources.</li><li><strong>Transform</strong>: Cleaning, normalizing, and aggregating data to conform to warehouse rules.</li><li><strong>Load</strong>: Ingesting the transformed data into the warehouse (daily, weekly, or near real-time schedules).</li></ul><hr><h2 id="common-architectures" tabindex="-1"><a class="header-anchor" href="#common-architectures"><span>Common Architectures</span></a></h2><ul><li><strong>Monolithic</strong>: A single, massive warehouse gathering all enterprise data.</li><li><strong>Hub-and-Spoke</strong>: A central Data Warehouse linked to multiple specialized Data Marts for specific needs.</li><li><strong>Lakehouse</strong>: A modern approach that combines a Data Lake (raw data storage) and a Data Warehouse (structured for analysis) in one ecosystem.</li></ul><hr><h2 id="key-benefits" tabindex="-1"><a class="header-anchor" href="#key-benefits"><span>Key Benefits</span></a></h2><ul><li><strong>Reliability</strong>: Clean, consistent data ready for reporting and analysis.</li><li><strong>Performance</strong>: Architecture tuned for heavy analytical queries.</li><li><strong>Decision Support</strong>: Facilitates the creation of dashboards and Key Performance Indicators (KPIs).</li></ul><hr><h2 id="glossary" tabindex="-1"><a class="header-anchor" href="#glossary"><span>Glossary</span></a></h2><table><thead><tr><th><strong>Term</strong></th><th><strong>Definition</strong></th></tr></thead><tbody><tr><td><strong>Data Warehouse (DW)</strong></td><td>A centralized repository storing integrated, historical data for analytical purposes</td></tr><tr><td><strong>ETL</strong></td><td>Extract, Transform, Load, a process that moves and refines data for loading into a Data Warehouse</td></tr><tr><td><strong>Data Lake</strong></td><td>A storage system that keeps data in raw format until it is needed for processing or analysis</td></tr><tr><td><strong>Hub-and-Spoke</strong></td><td>A DW architecture featuring one central warehouse and multiple specialized data marts</td></tr><tr><td><strong>Lakehouse</strong></td><td>A hybrid approach combining the best of Data Lakes and Data Warehouses in a unified environment</td></tr><tr><td><strong>Key Performance Indicator (KPI)</strong></td><td>A measurable value that demonstrates how effectively an organization is achieving its key objectives</td></tr></tbody></table>',18)]))}const d=e(s,[["render",n],["__file","introduction.html.vue"]]),c=JSON.parse('{"path":"/guide/introduction.html","title":"Introduction to Data Warehousing","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Topics Covered","slug":"topics-covered","link":"#topics-covered","children":[]},{"level":2,"title":"Role of ETL (Extract, Transform, Load)","slug":"role-of-etl-extract-transform-load","link":"#role-of-etl-extract-transform-load","children":[]},{"level":2,"title":"Common Architectures","slug":"common-architectures","link":"#common-architectures","children":[]},{"level":2,"title":"Key Benefits","slug":"key-benefits","link":"#key-benefits","children":[]},{"level":2,"title":"Glossary","slug":"glossary","link":"#glossary","children":[]}],"git":{"updatedTime":1736613220000,"contributors":[{"name":"Malcom Morel","username":"Malcom Morel","email":"malcom.morel@gmail.com","commits":1,"url":"https://github.com/Malcom Morel"}]},"filePathRelative":"guide/introduction.md"}');export{d as comp,c as data};
