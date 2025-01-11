# Kimball's 4-Step Methodology

Ralph Kimball's methodology is a systematic approach to designing dimensional models. It simplifies the process of identifying business processes, defining granularity, selecting dimensions, and clarifying facts.

---

## Step 1: Select the Process

- **Goal**: Identify the core business activity to model (e.g., sales, shipping, inventory).  
- **Examples**:  
  - An online retailer might choose “orders and shipments.”  
  - A university might choose “student enrollment.”

---

## Step 2: Determine Granularity

- **Definition**: Decide what a single row in the fact table represents (line item, daily summary, etc.).  
- **Examples**:  
  - **Order Line Granularity**: Each row is a specific line item of a sales order.  
  - **Daily Inventory Granularity**: Each row is the quantity on hand per product, per location, per day.

---

## Step 3: Identify Dimensions

- **Role**: Dimensions describe the context around the facts—who, what, where, when, why.  
- **Examples**:  
  - **Time**: Day, Month, Year.  
  - **Customer**: Demographics, Region.  
  - **Product**: Category, Brand.

---

## Step 4: Identify Facts

- **Definition**: The numeric measures used for analysis (e.g., revenue, count, cost).  
- **Examples**:  
  - **Retail**: Units sold, total price, discount amount.  
  - **Education**: Number of applicants, number of enrollments.

![Kimball’s Methodology](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Jx3SZAMLbGjwB3Io01BlYLQkpRL9Sz0qmQ&s)

---

## Glossary

| **Term**                   | **Definition**                                                                                       |
|----------------------------|-----------------------------------------------------------------------------------------------------|
| **Granularity**            | The level of detail in a fact table (e.g., transaction-level, day-level, month-level)               |
| **Dimension (Kimball)**    | Descriptive context of a fact; Kimball emphasizes business-friendly attributes (customer, product)  |
| **Fact (Kimball)**         | Quantitative measure to be analyzed in a data warehouse                                            |
| **Line Item**              | A single entry in an order or transaction representing a product/service purchase                   |
| **Methodology**            | A structured process for designing a data warehouse or dimensional model                           |