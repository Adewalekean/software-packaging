# Software Packaging in Popular Frameworks

## Project Overview

This project is about learning how to package applications in different programming frameworks so they can be tested and run in different environments.

I am working with Node.js, Django and Spring Boot to understand how dependencies, application versions, testing and security checks work.

## Project Structure

- `nodejs-app/` - Node.js application
- `django-app/` - Django application
- `springboot-app/` - Spring Boot application
- `staging/` - Temporary staging environment
- `CHANGELOG.md` - Record of project changes

## Node.js Application

I started by creating a simple Node.js application using Express.

The application displays a message when someone visits the homepage.

### Dependencies

I used npm to install Express and manage the application's dependencies.

I initially used Jest and Supertest for testing, but later replaced them with Node.js's built-in testing tools.

### Testing

I created two automated tests to check that:

1. The homepage returns HTTP status 200.
2. The homepage displays the correct message.

Both tests passed.

To run the tests:

```bash
cd nodejs-app
npm install
npm test
```

### Packaging

I set the application version to `1.0.0` and created an npm package using:

```bash
npm pack
```

This generated `nodejs-app-1.0.0.tgz`.

I also generated a SHA-256 checksum to check the integrity of the package.

To verify it:

```bash
shasum -a 256 -c nodejs-app-1.0.0.tgz.sha256
```

The checksum verification returned `OK`.

### Staging

I extracted the packaged application into a separate staging folder, installed the production dependencies and ran it using port 3001.

The application ran successfully in the staging environment.

### Security Audit

I ran `npm audit` to check for vulnerabilities.

The first audit reported 19 moderate vulnerabilities linked to development dependencies used by Jest.

I investigated the dependency chain and tried a compatible update, but the vulnerabilities remained.

Instead of forcing a potentially breaking downgrade, I replaced Jest and Supertest with Node.js's built-in testing tools.

After removing the unnecessary dependencies, I ran the tests and security audit again.

**Final results:**
- 2 automated tests passed.
- 0 vulnerabilities reported by npm audit.
- Updated package rebuilt successfully.
- SHA-256 checksum verified successfully.

## Django Application

To be completed.

## Spring Boot Application

To be completed.

## What I Learned

So far, this project has helped me understand how to manage application dependencies, create packages, run automated tests and investigate security vulnerabilities.

I also learned that removing unnecessary dependencies can reduce security risks and make an application easier to maintain.