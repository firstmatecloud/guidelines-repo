# General Guidelines

## Rules

### Structure

- Terraform modules should be defined in the modules repo, so they can be configured with terragrunt files.
- The infra repo contains all the terragrunt configuration per environment.
- Every kubernetes tool, should be added under the aks folder for terragrunt and terraform modules.


### Terraform limitations

- a change of directories should raise a warning about the terraform state.
