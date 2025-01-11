# Data Warehouse Principles

A data warehouse is a central repository designed to consolidate, integrate, and analyze organizational data. Two major philosophies—Inmon's enterprise-wide approach and Kimball's bottom-up approach—shape the way data warehouses are structured and built.

---

## Inmon's Data Warehouse Definition

- **Subject-Oriented**: Focuses on key business subjects such as sales, inventory, or finance, making it easier to analyze specific domains.
- **Integrated**: Consolidates disparate data sources (e.g., relational databases, flat files, external feeds) via ETL processes.  
- **Non-Volatile**: Once data is loaded, it is not typically updated or deleted; historical data remains intact for analysis.  
- **Time-Variant**: Contains a historical record of data changes over time, enabling trend and variance analyses.

---

## Kimball's Approach

- **Bottom-Up Development**: Emphasizes building small, department-focused Data Marts first and then integrating them.  
- **Fast Implementation**: Allows quicker wins by delivering localized analytical solutions to specific business units.
- **Key Difference**:  
  - **Inmon**: Focuses on a centralized, enterprise-level Data Warehouse with a top-down design.  
  - **Kimball**: Adopts a decentralized, bottom-up approach, building department-level Data Marts that eventually integrate.

---

## Choosing the Right Approach
- **Enterprise Complexity**: Large, complex organizations often require the enterprise-wide consistency of Inmon’s approach.  
- **Urgency & Flexibility**: Departments with immediate analytical needs may benefit from Kimball’s faster, iterative style.

---

## Glossary

| **Term**               | **Definition**                                                                                     |
|------------------------|---------------------------------------------------------------------------------------------------|
| **Data Warehouse**     | A central repository of integrated data from multiple sources, used primarily for analysis        |
| **Inmon’s Approach**   | A top-down approach focusing on an enterprise-wide Data Warehouse design                           |
| **Kimball’s Approach** | A bottom-up method that starts with departmental Data Marts and integrates them into a warehouse |
| **ETL (Extract, Transform, Load)** | Processes for retrieving, cleaning, and loading data into a Data Warehouse                   |
| **Data Mart**          | A smaller, subject-specific Data Warehouse designed for departmental or localized needs            |