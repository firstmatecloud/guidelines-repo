# Helm Guidelines

## Security

- Plain secrets are never added in this repo. Always refer to a kubernetes secret. 


## Config

- In Prd environments, it is strictly forbidden to update the log level to debug or lower. Always log on info level in production. 

