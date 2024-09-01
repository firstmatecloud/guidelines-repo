# Guidelines

## Rules

### Security

- Routes should always check permissions with the grantAccessByPermissionMiddleware function

### Secret handling

- Helm charts should never contain secrets in the template. Secrets should already exist in the cluster and translated to the deployment as an environment variable. Even the values.yaml should not contain the secret value, only the reference to the kubernetes secret name and key.


### Config

- Environment variables in the code should be added in the helm chart values.yaml file under configmap for non secret environment variables.
- Environment variables should be listed in the default_env file for developer purposes.

### Code

- Never throw errors, always throw the custom ApplicationErrors 
- There should never be a console.log statement in the code.
- Use the logger in the utils to log information.
- Never log business data on info level. Debug logging business data is fine.
- No harcoded configuration or secrets.
- Prefer const over let: Using const means that once a variable is assigned, it cannot be reassigned. Preferring const will help you to not be tempted to use the same variable for different uses, and make your code clearer. If a variable needs to be reassigned, in a for loop, for example, use let to declare it. Another important aspect of let is that a variable declared using it is only available in the block scope in which it was defined. var is function scoped, not block-scoped, and shouldn't be used in ES6 now that you have const and let at your disposal
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

- Every service function, should have dedicated unit tests.
