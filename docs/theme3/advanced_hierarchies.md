# Advanced Hierarchies

Hierarchies are commonly used in dimensional models to organize data into levels for easier drill-down and roll-up operations. However, some hierarchies are irregular or recursive, requiring more complex design techniques.

---

## Irregular Hierarchies
Irregular hierarchies have inconsistent or uneven levels:

- **Example: Address Hierarchy**  
  - Some cities fall under states, others might use zones or districts.  
  - **Challenge**: Traditional hierarchies assume uniform levels (e.g., Country → State → City).  
  - **Solution**: Propagate lower-level values (e.g., zone/district) up the hierarchy or use a generic structure that allows missing levels to be replaced with default or placeholder values.

---

## Recursive Hierarchies
Recursive hierarchies describe relationships where an entity can be both a child and a parent.

- **Example: Employee Reporting Structure**  
  - An employee can report to another employee, creating multiple levels of reporting within the same dimension.  
  - **Solution 1**: Maintain a parent-child table within the same dimension (e.g., `EmployeeID` and `ManagerID`).  
  - **Solution 2**: Introduce an outrigger dimension for recursive attributes, reducing complexity within the main dimension.

---

## Key Considerations
- **Performance**: Recursive and irregular hierarchies can make queries more complex; careful indexing and modeling can mitigate this.
- **ETL Complexity**: Ensuring the correct propagation of lower-level attributes may require custom logic in ETL processes.
- **User Experience**: Front-end tools must handle irregular or recursive levels gracefully for reporting and analysis.

---

## Glossary

| **Term**              | **Definition**                                                                                 |
|-----------------------|-----------------------------------------------------------------------------------------------|
| **Hierarchy**         | An organized structure of related data levels (e.g., Year → Quarter → Month → Day)           |
| **Irregular Hierarchy** | A hierarchy with inconsistent levels (some intermediate levels may be missing)               |
| **Recursive Hierarchy** | A hierarchy where entities can reference themselves (e.g., an employee is managed by another employee) |
| **Outrigger Dimension** | A supplemental dimension used to handle specialized or recursive attributes                 |