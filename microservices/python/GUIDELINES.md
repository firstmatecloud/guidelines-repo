# Guidelines

## Rules

### Security

- Secrets are never added in this repo.

### Config

- For development purposes, the default_env file should exist and contain all necessary environment variables. But secrets should contain a dummy variable.
- the requirements.txt file should contain fixed version numbers for every dependency.

### Code

- Use the logging package to log instead of print statements.