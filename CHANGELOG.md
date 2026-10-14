# Changelog

This file keeps track of the changes made to the Software Packaging in Popular Frameworks project.

## [Unreleased]

### Planned
- Add dependency management and automated testing for Django.
- Add Maven packaging and automated testing for Spring Boot.
- Generate distributable application artifacts.
- Add SHA-256 checksums to verify packaged files.
- Test applications in development and staging environments.
- Run dependency security audits.

## [1.0.0] - 2026-10-13

### Security
- Ran npm audit and found 19 moderate vulnerabilities in development dependencies.
- Removed Jest and Supertest and replaced them with Node.js built-in testing tools.
- Ran the automated tests again and confirmed both tests passed.
- Ran npm audit again and confirmed 0 vulnerabilities.

### Packaging
- Rebuilt the Node.js package after removing unnecessary dependencies.
- Generated a new SHA-256 checksum and verified the package successfully.

### Added
- Created the Node.js application using Express.
- Configured application dependencies using `package.json`.
- Generated `package-lock.json` to lock dependency versions.
- Added automated testing using Jest and Supertest.
- Successfully executed two automated tests.
- Configured the Node.js application version as `1.0.0`.