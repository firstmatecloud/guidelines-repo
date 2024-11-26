# Python Guidelines

## Rules

### Security

- Secrets are never added in this repo.

### Config

- Maintain a clear separation between configuration and code logic. Use config files (config.yaml, .env) or environment variables for all configurable options.
- For development purposes, the default_env file should exist and contain all necessary environment variables. But secrets should contain a dummy variable.
- the requirements.txt file should contain fixed version numbers for every dependency.

### Code

- Use the logging package to log instead of print statements.
- Follow offial python naming conventions. Classes in CamelCase, functions in snake_case, global vars in UPPER_CASE and modules/folders in lower_case  
- Keep Functions Small and Focused: Each function should perform a single, well-defined task. If a function is too long or performs multiple tasks, consider breaking it down into smaller functions.
- Avoid Deep Nesting: Deeply nested code is hard to read. Refactor such code to reduce nesting.
- Clean Up Resources: Use finally or context managers (with statement) to ensure that resources are cleaned up properly, such as closing files or network connections.
- Use Built-in Functions and Libraries: Python has a rich standard library and many built-in functions. Use them instead of writing custom implementations for common tasks.
- Use type annotations to make your code more readable and maintainable
- Use List Comprehensions and Generators where possible. These are both faster and use less memory than equivalent code written in loops. Don't do this for complex code to keep readability.
