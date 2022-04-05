# jquery Datatable Example

## Setup

1. Navigate to project root
2. Install yarn package manager
3. Run `yarn dev`
4. Install python 3.9 (3.6-3.10 should work)
5. Install pipenv: `pip install -U pipenv`
6. Install django packages: `pipenv install` 
7. Run django server: `python manage.py runserver 8000`
8. Go in your browser to: http://127.0.0.1:8000/

## Problems with "imports-loader" package

1. Change `imports-loader` version to `"*"` in the package.json
2. Install latest package: `yarn`
3. Rebuild webpack package: `yarn dev`
4. Now it breaks :(