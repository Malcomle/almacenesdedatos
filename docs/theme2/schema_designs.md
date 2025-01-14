# Schema Designs

Schema designs define how data is structured in a relational database for analytical purposes. Two popular models—Star Schema and Snowflake Schema—are widely used in data warehousing.

---

## Star Schema

- **Definition**: A central fact table surrounded by one or more denormalized dimension tables.
- **Query Performance**: Simplified structure leads to fewer joins, accelerating queries.
- **Acceptable Redundancy**: In analytical contexts, some redundancy in dimension tables is tolerated for speed.

**Advantages**:
1. **Simple Structure**: Easy to understand and navigate.  
2. **Fast Query Performance**: Minimal joins enhance performance in high-volume data scenarios.

---
![star](https://media.geeksforgeeks.org/wp-content/uploads/Untitled-drawing-3-2.png)


## Snowflake Schema

- **Definition**: A variant of the star schema in which dimension tables are normalized into multiple related tables.
- **Reduces Redundancy**: Dimension data is split, lowering duplication.  
- **More Joins**: May lead to slower performance compared to star schemas due to increased complexity.

**Advantages**:
1. **Less Data Redundancy**: Saves storage and reduces inconsistencies.  
2. **Suitable for Complex Datasets**: More flexible with highly detailed dimension attributes.

---
![snowlfake](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Snowflake-schema.png/1200px-Snowflake-schema.png)


## Choosing a Schema
- **Star Schema**: Ideal when query speed and simplicity are top priorities.  
- **Snowflake Schema**: Chosen when data normalization and reduced storage redundancy outweigh the cost of extra joins.

---

## Glossary

| **Term**          | **Definition**                                                                                 |
|-------------------|-----------------------------------------------------------------------------------------------|
| **Schema**        | The logical organization of database tables and relationships for a data warehouse            |
| **Star Schema**   | A schema design with one central fact table and denormalized dimension tables                 |
| **Snowflake Schema** | A schema design where dimension tables are further normalized, resulting in more tables but less redundancy |
| **Denormalized**  | A database design technique where data redundancy is used to simplify queries                 |
| **Normalized**    | A technique to reduce data redundancy by splitting tables and enforcing relationships         |