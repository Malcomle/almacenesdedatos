# Setting Up AdventureWorks Databases

To follow along with the examples, ensure you have the following databases configured:

---

## Required Databases
1. **AdventureWorksDW2019**: A sample data warehouse database.
2. **AdventureWorks2019**: An operational database.

---

## Setup Guide
Follow the [tutorial](https://ualmtorres.github.io/Asignatura-Almacenes-De-Datos/Docs/Labs/00-ConfiguracionEntorno/index.html) for detailed setup instructions.

```bash
# Example setup command (SQL Server)
RESTORE DATABASE AdventureWorksDW2019
FROM DISK = 'path_to_backup_file.bak'