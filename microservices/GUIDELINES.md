# Microservice Guidelines

## Rules

### Pipelines

- Every repo should contain Unit tests that are executed on every pull request.
- Every repo should contain Postman tests that are executed on every pull request.

### DockerFiles

- Dockerfiles should build in two phases (multi-stage builds)
- Dockerfiles should never run as root user.

### Config

- Set default logging to info level.

### Helm

- Helm template files should be templated with variables from the values.yaml file.
- Deployments and statefulsets should always have a readinessProbe and livenessProbe configured
- Service should always be of type clusterIp. Other servcices are managed by the infra team.
- Charts should not have dependencies. other tools are managed by the environments charts.
- Default values should be created with production environment in mind and not reference development.
- Deployments may never contain volumeMounts and should be stateless
- Helm charts should never contain kubernetes secrets in the templates. Secrets already exist in the cluster. The deployment.yaml should reference the existing secret with a secret name and key of the secret resulting in an environment variable. The secret name and key should be a variable in the values.yaml and look like this.
```yaml
        env:
          - name: {{ $secretName }}
            valueFrom:
              secretKeyRef:
                name: {{ $secret.secretName }}
                key: {{ $secret.secretKey }}
```

### Code

- When external API services are used, implement retries.
- Function and methods should follow consistent naming patterns
- Data may never be stored to a specific path. We should always use a database or bucket to store data safely.
- Use descriptive variable names
- Use a logging framework that logs in json
- Don't log overly sensitive information. If really needed, only use the debug level.


 
