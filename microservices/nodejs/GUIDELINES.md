# Guidelines

## Rules

### Security

- Routes should always check permissions with the grantAccessByPermissionMiddleware function. 
  ```
      # Example to show how to use grantAccessByPermissionMiddleware function
      router.route("/path/to/endpoint")
        .get(grantAccessByPermissionMiddleware([API_PERMISSIONS.PUBLIC_ENDPOINT, ...]),controller.function)
  ```

### Secret handling

- Helm charts should never contain secrets in the template. Secrets should already exist in the cluster and translated to the deployment as an environment variable. Even the values.yaml should not contain the secret value, only the reference to the kubernetes secret name and key.


### Config

- Environment variables in the code should be added in the helm chart values.yaml file under configmap for non secret environment variables.
- Environment variables should be listed in the default_env file for developer purposes.

### Code

- Never throw default errors, always throw the custom ApplicationError. This class is defined in utils/ApplicationError.js. It is allowed to propagate errors with the express next() function.
```
export class ApplicationError extends Error {
    constructor(errorCode){
        super(errorCode.message)
        this.code = errorCode.code
    }
}
    
```
  
- There should never be a console.log statement in the code.
- Use the logger in the utils to log information.
- Never log business data on info level. Debug logging business data is fine.
- No harcoded configuration or secrets.
- Prefer const over let: Using const means that once a variable is assigned, it cannot be reassigned. Preferring const will help you to not be tempted to use the same variable for different uses.
- Use Async Await, avoid callback hell
It's better to do
```
    var foo = async (function() {
      var resultA = await (firstAsyncCall());
      var resultB = await (secondAsyncCallUsing(resultA));
      var resultC = await (thirdAsyncCallUsing(resultB));
      return doSomethingWith(resultC);});
  ```
instead of
```
  function foo2(callback) {
    firstAsyncCall(function (err, resultA) {
        if (err) { callback(err); return; }
        secondAsyncCallUsing(resultA, function (err, resultB) {
            if (err) { callback(err); return; }
            thirdAsyncCallUsing(resultB, function (err, resultC) {
                if (err) {
                    callback(err);
                } else {
                    callback(null, doSomethingWith(resultC));
                }
            });

        });
    });
}
```
- Use CamelCase for methods and objects names and Pascal case for class definitions


### Tests

- Functions defined in services (services are located in the services folder in the repo) should always have implemented unit tests. These tests are implemented in the test folder.
