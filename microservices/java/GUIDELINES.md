# Java Guidelines

## Security

- Use Method-Level Security Annotations in controller classes that define an api.
  ```
      # Example to show a Get request that should be authorized with a specific authority.
      @GetMapping("/{id}")
      @PreAuthorize("hasAuthority('READ_PRIVILEGE')")
      public ResponseEntity<String> getResource(@PathVariable Long id) {
          return ResponseEntity.ok("Resource with ID: " + id);
      }
  ```

## Config

- Config variables should be added in the application.yaml file under the resource folder. In the code you can get these configuration with the @Value annotations.
```java
    @Value("${app.name}")
    private String appName;
```
- No hardcoded configuration or secrets.

## Code

- Never throw default exceptions, always throw the custom ApplicationException for improved exception handling.
```
public class ApplicationException extends Exception {
    public CustomCheckedException(String message, Throwable cause) {
        super(message, cause);
    }
}
```
- Always use the logger framework.
- Never log business data on info level. Debug logging business data is fine.
- Use the java naming conventions and make sure the names are descriptive. 
  - Classnames -> PascalCase (ClassName)
  - Interface -> PascalCase (Interface)
  - Methods -> camelCase (methodName)
  - Variable -> camelCase (variableName)
  - Constant -> UPPER_SNAKE_CASE (CONSTANT_NAME)
  - Package -> lowercase with dots (com.firstmate.package)
  - Enum -> PascalCase for the enum name (EnumName)
  - Enum value -> UPPER_SNAKE_CASE (ENUM_VALUE)
  - Generic Type Parameters -> Single uppercase letter (T)
  - Annotation -> PascalCase (AnnotationName)
  - Boolean -> camelCase with prefixes like is, has, can, or should (isBoolean)
  - Test Classes -> PascalCase followed by Test (ClassNameTest)

## FinOps

- Optimize SQL Queries. 
  - Use indexes
  - Avoid Overusing JOINs, When the logic is really needed, you can propose to create an SQL stored procedure.
  - Use Pagination for Large Result Sets. Return a Page instead of a List of objects in jpa
  ```yaml
    Page<User> users = userRepository.findAll(PageRequest.of(page, size));
  ```
  - Use EXISTS instead of IN
  - Use UNION instead of OR
  - 
  - Avoid Overloading the Database. Offload calculations to the application layer if they’re too resource-intensive. 
