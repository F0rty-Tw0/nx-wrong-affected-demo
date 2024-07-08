# Project Monorepo: NX version <= 19.4.1

This monorepo contains the following projects:

- App-1
- App-2
- App-3

## Issue: Incorrect Affected Projects Detection on macOS/Linux Systems

### Problem Statement

We have observed a discrepancy in the behavior of the `npx nx show projects --affected` command between Windows environment execution and macOS/Linux systems. Specifically, when changes are made to any of the projects, macOS/Linux systems incorrectly identify all projects (App-1, App-2, and App-3) as affected. This issue does not occur on Windows, where the affected projects are correctly identified.

### Debugging Steps

1. **Windows Environment**

   - Running `npx nx show projects --affected` in the Windows environment displays the correct project as affected, as expected.
   - The dependency graph correctly shows which files affect each project.

2. **macOS/Linux Systems**

   - On macOS/Linux systems, running the same `npx nx show projects --affected` command.
   - Extensive debugging has revealed:
     - Any changes in any projects affect all other projects (App-1, App-2, and App-3).
   - Steps taken on macOS/Linux systems:
     1. Run `npm ci`.
     2. Print `git diff` to check affected files.
     3. Run `npx nx show projects --affected`.

### Identified Issue

We have projects (App-1, App-2, and App-3), each with its own `tsconfig.json`. In each configuration, we have the following `compilerOptions.paths`:

```json
{
  "compilerOptions": {
    "paths": {
      "@app/*": ["..."]
    }
  }
}
```

For some reason, NX was unable to correctly understand that @app belongs to the specific project, resulting in incorrect dependencies being marked in other projects. This issue was only occurring on macOS and Linux systems. Everything is working fine on Windows.

### Next Steps

We need to further investigate why macOS/Linux systems are behaving differently for App-1, App-2, and App-3 compared to the Windows environment execution.

### Conclusion

The current behavior on macOS/Linux causes App-1, App-2, and App-3 to incorrectly mark projects as affected. This README section serves as a documentation of the issue and the steps taken to debug it. We are committed to finding a resolution to ensure the macOS/Linux environment accurately reflects the affected projects.
