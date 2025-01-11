# Advanced Use Cases in Dimensional Design

Dimensional modeling can be adapted to address complex real-world challenges such as multi-currency handling, varying granularities, and dynamic band creation for data segmentation.

---

## Multi-Currency Systems

- **Problem**: Fact tables may contain transactions recorded in different currencies, complicating comparisons.  
- **Solution**:  
  1. **Dual Storage**: Store transaction amounts both in local currency and a standardized (base) currency.  
  2. **Currency Dimension**: Include a dedicated dimension to capture exchange rates and currency details for analytic purposes.

---

## Handling Granularities

- **Problem**: Fact tables may have data captured at different levels of detail (e.g., daily vs. weekly vs. monthly).  
- **Solution**:  
  1. **Separate Fact Tables**: Maintain one fact table per granularity.  
  2. **Uniform Aggregation**: If multiple granularities must coexist in one table, ensure consistent methods for rolling up data (e.g., daily data aggregated to weekly or monthly totals).

---

## Dynamic Band Creation

- **Scenario**: Categorizing customer spending into predefined bands (e.g., high, medium, low).  
- **Solution**:  
  - **SQL Views or Custom Measures**: Dynamically group data based on thresholds, allowing updates to band definitions without altering the underlying schema.

---

## Glossary

| **Term**                  | **Definition**                                                                                           |
|---------------------------|---------------------------------------------------------------------------------------------------------|
| **Granularity**           | The level of detail at which facts are recorded (e.g., daily, weekly, transactional)                    |
| **Currency Dimension**    | A dimension table holding currency-related data (e.g., currency code, exchange rate)                   |
| **Dynamic Band**          | A flexible classification (e.g., high, medium, low) determined at query time based on metric thresholds |
| **Base Currency**         | A standardized currency used to facilitate global comparisons (e.g., USD, EUR)                          |