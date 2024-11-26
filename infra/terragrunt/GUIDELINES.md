# Terragrunt Guidelines

## Rules

### State 
- Always use shared remote state from the configured azure storage account 
- Never save TF state files in git, they can contain sensitive information in plain text format;
- Renaming directories would require manual changes to the state.

### Structure
- Separate environments in different directories under the infra folder.
- Terraform modules should be defined in the modules directory. The terragrunt files in the infra folder will configure and deploy the modules.
- Modules who setup kubernetes tools, should be added under the kubernetes directory.


### Terraform limitations
- Always create an output file that returns at least the resource id and name
- Use for_each instead of count when possible
- Use a variable with a default value over hardcoded static resource configuration.
