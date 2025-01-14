# Introduction to Data Warehousing

Data Warehousing is a set of principles and techniques used to build storage systems that are optimized for data analysis and decision-making. It forms the foundation of Business Intelligence (BI) systems.

---

## Topics Covered

1. **What is Data Warehousing?**  
   The art of consolidating disparate data (operational, external, historical) to extract value through analysis.

2. **Distinction Between Operational Systems (OLTP) and BI Systems (DW/BI)**  
   - **OLTP**: Primarily handles day-to-day transactions (e.g., order processing, updates to customer accounts).  
   - **DW/BI**: Provides a historical and analytical view of the data, useful for strategic decision-making.

3. **How Data Warehousing Addresses Modern Data Management Challenges**  
   - Exponential growth in data volume.  
   - Heterogeneous sources (APIs, logs, sensors, various databases).  
   - Need for powerful reporting and visualization tools (BI suites, dashboards, etc.).

![Data Warehousing Overview](https://blog.bismart.com/hubfs/La%20arquitectura%20y%20funcionamiento%20de%20un%20data%20warehouse.jpg)

---

## Role of ETL (Extract, Transform, Load)
- **Extract**: Pulling data from multiple sources.  
- **Transform**: Cleaning, normalizing, and aggregating data to conform to warehouse rules.  
- **Load**: Ingesting the transformed data into the warehouse (daily, weekly, or near real-time schedules).

---

## Common Architectures
- **Monolithic**: A single, massive warehouse gathering all enterprise data.  
- **Hub-and-Spoke**: A central Data Warehouse linked to multiple specialized Data Marts for specific needs.  
- **Lakehouse**: A modern approach that combines a Data Lake (raw data storage) and a Data Warehouse (structured for analysis) in one ecosystem.

---

## Key Benefits
- **Reliability**: Clean, consistent data ready for reporting and analysis.  
- **Performance**: Architecture tuned for heavy analytical queries.  
- **Decision Support**: Facilitates the creation of dashboards and Key Performance Indicators (KPIs).

---

## Glossary

| **Term**       | **Definition**                                                                                      |
|----------------|------------------------------------------------------------------------------------------------------|
| **Data Warehouse (DW)** | A centralized repository storing integrated, historical data for analytical purposes                |
| **ETL**         | Extract, Transform, Load, a process that moves and refines data for loading into a Data Warehouse         |
| **Data Lake**   | A storage system that keeps data in raw format until it is needed for processing or analysis               |
| **Hub-and-Spoke** | A DW architecture featuring one central warehouse and multiple specialized data marts                   |
| **Lakehouse**   | A hybrid approach combining the best of Data Lakes and Data Warehouses in a unified environment            |
| **Key Performance Indicator (KPI)** | A measurable value that demonstrates how effectively an organization is achieving its key objectives |