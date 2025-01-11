# Special Cases in Dimensional Modeling

While standard dimensional modeling addresses most scenarios, certain edge cases require additional techniques to handle complex data or unusual measurement methods.

---

## Degenerate Dimensions
- **Definition**: Dimensions that exist logically but have no descriptive attributes—only an identifier (e.g., an order number).  
- **Use Case**: The key is kept in the fact table, but a separate dimension table is not needed.

---

## Factless Fact Tables
- **Definition**: Fact tables with no numeric measures, used to record the occurrence of events or conditions.  
- **Example**: Tracking which products are on promotion, even if zero units are sold.  
- **Benefit**: Helps analyze events that do not necessarily carry a numeric measurement but are still significant for business analysis.

---

## Handling Granularity Variations
- **Problem**: Facts captured at different granularities (e.g., daily vs. monthly).  
- **Solution**:  
  1. **Separate Fact Tables** for each granularity level.  
  2. **Consistent ETL Policies** to ensure data is aggregated or disaggregated appropriately.

---

## Glossary

| **Term**                | **Definition**                                                                                      |
|-------------------------|----------------------------------------------------------------------------------------------------|
| **Degenerate Dimension**| A dimension that does not have its own table, often containing only a key or identifier            |
| **Factless Fact Table** | A fact table without traditional numeric metrics, tracking events or conditions                    |
| **Granularity Variation**| The presence of facts recorded at different levels of detail (daily, monthly, etc.)               |
| **Promotion Tracking**  | Using a factless fact table to record items under promotion, even if no sales occurred             |