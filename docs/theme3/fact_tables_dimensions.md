# Fact Tables and Dimensions

Fact tables and dimension tables form the core of dimensional modeling. Fact tables store measurable, numeric data, while dimensions provide the descriptive context needed to analyze that data.

---

## Fact Tables

- **Definition**: Central tables containing numeric metrics or measurements (facts) for analysis.  
- **Types**:  
  1. **Additive**: Fully aggregable (e.g., total sales).  
  2. **Semi-Additive**: Only aggregable across certain dimensions (e.g., inventory levels can’t always be summed over time).  
  3. **Non-Additive**: Ratios or percentages that cannot be meaningfully summed (e.g., conversion rate).

---

## Dimensions

- **Role**: Provide descriptive context to facts (who, what, when, where).  
- **Hierarchies**: Allow drilling up or down (e.g., Year → Quarter → Month → Day).  
- **Design Tips**:  
  - Keep dimensions denormalized to simplify queries.  
  - Use surrogate keys to ensure consistent dimension references in fact tables.

**Examples**  
- **Product Dimension**: Category → Subcategory → SKU  
- **Time Dimension**: Year → Quarter → Month → Day  
- **Customer Dimension**: Demographics, Region, Segment

![Star Schema](https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Esquema_en_estrella.png/450px-Esquema_en_estrella.png)

---

## Glossary

| **Term**                  | **Definition**                                                                                                 |
|---------------------------|-----------------------------------------------------------------------------------------------------------------|
| **Fact Table**            | A central table that stores numeric, quantitative data (facts) used for analysis                                |
| **Dimension Table**       | A table that provides descriptive attributes (who, what, when, where) about the facts                          |
| **Surrogate Key**         | A synthetic, unique key (often numeric) used to uniquely identify dimension rows                                 |
| **Additive Fact**         | A metric that can be summed across all dimensions (e.g., sales)                                                 |
| **Semi-Additive Fact**    | A metric that can be summed only across certain dimensions (e.g., inventory levels that can’t be summed over time) |
| **Non-Additive Fact**     | A metric that can’t be summed (e.g., percentages, ratios)                                                       |