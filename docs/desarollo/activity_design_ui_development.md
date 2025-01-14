# Activity Design in User Interface Development

Activity design defines how users accomplish tasks within a system, focusing on user-centered and methodological approaches.

---

## 1. Motivation for UI Design

- After gathering requirements, determine **how** to implement functionalities.  
- Example: Web application for searching establishments:
  - Single page or multiple pages?
  - How does the user access and view results?

---

## 2. User-Centered Design

- **Activity Design**: Analyzing the tasks and interactions.  
- **Information Design**: Deciding how information is presented.

---

## 3. Approaches to UI Design

- **Empirical Approach**: Designer expertise, guidelines, best practices.  
- **Methodological Approach**: Theoretical foundations, structured steps (focus of this unit).

---

## 4. Methodological Approach Steps

1. **Analyze Human Factors**: Understand how users perceive and act.  
2. **User-Centered Design**: Keep user goals in focus.  
3. **Task Analysis**: Represent tasks (HTA, CTT, UML).  
4. **Dialogue Modeling**: Represent system-user communication.  
5. **Information Design Strategies**: Plan how data is shown and organized.

---

## 5. Mental Model vs. Conceptual Model

- **Mental Model**: User’s internal, often incomplete, representation of how a system works.  
- **Conceptual Model**: Developer’s formal design, ideally aligned with the user’s mental model.

---

## 6. Activities in Activity Design

- **Task Analysis**: Outlines steps users take.  
- **Dialogue Modeling**: Shows states and transitions in the system.

### UML Activity Diagram Elements
- **Action**: Atomic task.  
- **Activity**: Group of tasks/actions.  
- **Decision Node**, **Fork Node**, **Join Node**, **Synchronization Node**.

---

## 7. Task Analysis Example

- Gmail login process:  
  - Enter email → Validate → Enter password → Validate → Access or return to previous step if invalid.

---

## 8. Dialogue Modeling

- **States**: System statuses.  
- **Transitions**: Moves triggered by events or conditions.  
- **Initial/Final Nodes**: Start/end of flow.

---

## Glossary

| **Term**              | **Definition**                                                                                   |
|-----------------------|-------------------------------------------------------------------------------------------------|
| **Activity Design**   | Defining tasks and interactions within a user interface                                         |
| **Mental Model**      | The user’s internal understanding of a system’s operation                                       |
| **Conceptual Model**  | The formal, external representation of how a system is designed to work                         |
| **UML Activity Diagram** | A diagram type in UML that models workflows and processes (actions, decisions, merges, etc.) |
| **Dialogue Modeling** | Visualizing system-user communication via states, transitions, events, and conditions          |