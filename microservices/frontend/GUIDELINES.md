# Guidelines

## Rules

### Security

- Secrets may never exist in a frontend project. 
- There may not be any reference to a secret in the helm charts. 

### Config

- Configuration variables should be added in the helm chart values.yaml file under configmap.
- For development purposes, the default_env file should contain all environment variables.

### Code

- There should never be a console.log statement in the code.
- Use the same css config in all projects.
- Use the same logo and pictures as provided in the public folder.