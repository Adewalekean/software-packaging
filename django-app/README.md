# Django Software Packaging Project

## Project Overview

This is the Django part of my software packaging project. The aim is to understand how Python applications are packaged, tested, checked for security issues, and prepared for use in another environment.

I created a simple Django web application that displays:

**Hello! My Django application is running.**

## Tools Used

- Python 3.13
- Django 5.2
- pip and virtual environments
- setuptools, wheel and build
- pip-audit
- Git and GitHub
- macOS Terminal and VS Code

## Setting Up the Application

First, move into the Django project folder:

```bash
cd ~/Desktop/software-packaging/django-app
```

Create and activate a virtual environment:

```bash
python3.13 -m venv .venv
source .venv/bin/activate
```

Install the application dependencies:

```bash
python -m pip install -r requirements.txt
```

## Environment Configuration

I updated the Django settings to read the secret key from an environment variable instead of keeping it directly in the source code.

Generate a new secret key:

```bash
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

In Bash, securely enter and export the generated key:

```bash
read -r -s -p "Enter Django secret key: " DJANGO_SECRET_KEY
echo
export DJANGO_SECRET_KEY
```

For local development, enable debugging:

```bash
export DJANGO_DEBUG=True
```

These environment variables need to be configured again when starting a new terminal session.

## Running the Application

Run the database migrations:

```bash
python manage.py migrate
```

Start the Django server:

```bash
python manage.py runserver
```

Open `http://127.0.0.1:8000/` in a browser.

## Automated Testing

I created two automated tests to check that the homepage returns HTTP status 200 and displays the correct message.

Run the tests:

```bash
python manage.py test
```

Both tests passed successfully.

## Building the Packages

I used Python's build tool to create a wheel package and a source distribution.

```bash
python -m pip install build
python -m build
```

The generated packages are stored in the `dist/` directory:

- `django_packaging_demo-1.0.0-py3-none-any.whl`
- `django_packaging_demo-1.0.0.tar.gz`

The application uses version **1.0.0**.

## SHA-256 Checksum Verification

I generated SHA-256 checksum files to verify the integrity of the packages.

To verify them:

```bash
shasum -a 256 -c dist/django-wheel.sha256
shasum -a 256 -c dist/django-source.sha256
```

Both package checks returned `OK`.

## Staging Testing

I extracted the source package into a separate staging folder and created a fresh virtual environment.

I installed the wheel package and confirmed that its Python modules could be imported from the environment's `site-packages` directory.

I also ran the Django application in staging using port 8001.

The application displayed the expected homepage message.

## Dependency Security Audit

I used `pip-audit` to check the dependencies for known security vulnerabilities.

```bash
python -m pip install pip-audit
python -m pip_audit -r requirements.txt
```

The audit reported **no known vulnerabilities**.

## Security Improvements

I updated the Django settings to use environment variables for the secret key, debug mode and allowed hosts.

I also ran Django's deployment security check. It identified production configuration warnings, including HTTPS and secure cookie settings.

These deployment settings still need further work before the application can be considered production-ready.

## What I Learned

Through this project, I learned how to manage Python dependencies, create automated tests, build Python packages, verify files using SHA-256 checksums, and test an application in a separate environment.

I also learned why security checks and environment-specific configurations are important when preparing applications for deployment.