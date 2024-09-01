# Guidelines

## Rules

### Security

- Secrets are never added in this repo.

### Config

- For development purposes, the default_env file should exist and contain all necessary environment variables. But secrets should contain a dummy variable.
- the requirements.txt file should contain fixed version numbers for every dependency.

### Code

- Use the logging package to log instead of print statements.
- Use snake_case for methods and objects.
- Keep Functions Small and Focused: Each function should perform a single, well-defined task. If a function is too long or performs multiple tasks, consider breaking it down into smaller functions.
- Avoid Deep Nesting: Deeply nested code is hard to read. Refactor such code to reduce nesting.
- Clean Up Resources: Use finally or context managers (with statement) to ensure that resources are cleaned up properly, such as closing files or network connections.
- Use Built-in Functions and Libraries: Python has a rich standard library and many built-in functions. Use them instead of writing custom implementations for common tasks.
