# Slowly Changing Dimensions (SCDs)

Slowly Changing Dimensions (SCDs) address how to manage changes in dimension attributes over time, preserving history or updating records as needed.

---

## SCD Types

1. **Type 0**  
   - **No Changes**: Attribute values remain as originally loaded; no history tracked.  
   - **Use Case**: Very stable attributes (e.g., date of birth).

2. **Type 1**  
   - **Overwrite Changes**: Updates the existing record, losing historical data.  
   - **Use Case**: Correcting errors (e.g., fixing a misspelled name).

3. **Type 2**  
   - **Track Full History**: Inserts a new dimension row with updated attributes, preserving past values.  
   - **Use Case**: Maintaining a detailed change history (e.g., tracking customer address changes over time).

4. **Type 3**  
   - **Limited History**: Adds a new column to track the previous value.  
   - **Use Case**: When only the most recent change matters, but immediate previous value is still relevant.

---

## Advanced SCD Types

- **Type 4**: Creates a minidimension for frequently changing attributes, reducing the need to update the main dimension frequently.  
- **Type 5**: Combines a minidimension (Type 4) with Type 1 overwrites to handle changes more efficiently.

![SCD Types Comparison](https://cdn.prod.website-files.com/64ccd6239abfeec743815b28/65e5a6e2a28ee3ede5ba065d_XUCDkp3KjJDEfHS1jfCK3_MUHfUm9o34sYxg1l03i-3Xb0-U-gTXgyp6VCTNZyXZohur3o9vc5NzY0sqFiZphmwsArH9Gh0etFFyOJxxkwehyfQIB2S_UNDge6ASDWoYPgLwsGKi0XI5RKuvQDkaxK0.png)

---

## Glossary

| **Term**                  | **Definition**                                                                                             |
|---------------------------|-----------------------------------------------------------------------------------------------------------|
| **Slowly Changing Dimension (SCD)** | A dimension where attribute values can change over time, often requiring special handling in a data warehouse |
| **Type 2 SCD**            | An approach that creates new rows for each change, preserving full historical data                        |
| **Minidimension**         | A smaller dimension holding frequently changing attributes, reducing updates in the main dimension         |
| **Historical Tracking**    | The ability to maintain and query past attribute values over time                                        |