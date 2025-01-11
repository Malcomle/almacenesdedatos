<template><div><h1 id="setting-up-adventureworks-databases" tabindex="-1"><a class="header-anchor" href="#setting-up-adventureworks-databases"><span>Setting Up AdventureWorks Databases</span></a></h1>
<p>To follow along with the examples, ensure you have the following databases configured:</p>
<hr>
<h2 id="required-databases" tabindex="-1"><a class="header-anchor" href="#required-databases"><span>Required Databases</span></a></h2>
<ol>
<li><strong>AdventureWorksDW2019</strong>: A sample data warehouse database.</li>
<li><strong>AdventureWorks2019</strong>: An operational database.</li>
</ol>
<hr>
<h2 id="setup-guide" tabindex="-1"><a class="header-anchor" href="#setup-guide"><span>Setup Guide</span></a></h2>
<p>Follow the <a href="https://ualmtorres.github.io/Asignatura-Almacenes-De-Datos/Docs/Labs/00-ConfiguracionEntorno/index.html" target="_blank" rel="noopener noreferrer">tutorial</a> for detailed setup instructions.</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># Example setup command (SQL Server)</span></span>
<span class="line">RESTORE DATABASE AdventureWorksDW2019</span>
<span class="line">FROM DISK <span class="token operator">=</span> <span class="token string">'path_to_backup_file.bak'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


