# Bitmap Indexes

Bitmap indexes are highly efficient for queries on columns with low cardinality—columns that have only a few distinct values. By using a bitmap representation, databases can perform logical operations (AND, OR, NOT) on the data with minimal processing overhead.

---

## How It Works

- **Bitmap Creation**: For each unique value in a column, a bitmap (binary representation) is constructed. Each row in the table corresponds to a bit in the bitmap.
- **Quick Filtering & Aggregation**: Logical operations on these bitmaps (e.g., AND, OR) can rapidly identify rows that match query predicates.
- **Low Cardinality Use Cases**: Bitmap indexes shine when the column has very few distinct values, such as gender fields, Boolean flags, or status columns.

**Example**  
- **Hardcover Books** could be represented as `1001011`.  
- **Paperback Books** could be represented as `0110100`.

When filtering by book type, the system quickly intersects these bitmaps rather than scanning entire tables.

---

## Benefits of Bitmap Indexes
- **Space Efficiency**: Often require less storage than traditional indexes for low-cardinality columns.  
- **Faster Query Performance**: Greatly speed up queries involving multiple predicates on low-cardinality columns.  
- **Simplicity**: Logical operations (AND, OR, NOT) on bitmaps are straightforward and computationally efficient.

---

## When to Avoid Bitmap Indexes
- **High Cardinality**: If the column has many unique values, bitmap indexes may not be efficient.  
- **Frequent Updates**: They can be expensive to maintain in scenarios with numerous row inserts, updates, or deletes.

---

## Glossary

| **Term**             | **Definition**                                                                                               |
|----------------------|-------------------------------------------------------------------------------------------------------------|
| **Bitmap Index**     | An index structure that uses bit arrays to represent values in columns with low cardinality for fast queries |
| **Cardinality**      | The number of unique values within a column                                                                 |
| **Logical Operations (AND, OR, NOT)** | Operations used on bitmaps to quickly filter data sets                                       |