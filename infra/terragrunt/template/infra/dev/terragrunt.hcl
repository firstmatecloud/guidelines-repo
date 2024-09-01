remote_state {
  backend = "azurerm"
  config = {
    storage_account_name = "storage_account_name"
    resource_group_name  = "resource_group_name"
    container_name       = "container_name"
    subscription_id      = "subscription_id"
    tenant_id            = "tenant_id"
    key                  = "${path_relative_to_include()}/terraform.tfstate"
  }
}

terraform {
  extra_arguments "retry_lock" {
    commands  = get_terraform_commands_that_need_locking()
    arguments = ["-lock-timeout=30m"]
  }
}