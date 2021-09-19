# HireByCode-assignment
### Frontend made using ReactJs
### Backend made using Django REST_FRAMEWORK
#### A simple CRUD APP with Token Authentication

# Setup
#### cd to the frontend/frontend folder and run the following commands to start the react server at http://localhost:3000 -
- `npn install`
- `npm start`

#### cd to the backend folder and run the following commands to start the django server at http://localhost:8000 -
- `pip install virtual env`
- `virtualenv env`
- `env\Scripts\activate`
- `pip install -r requirements.txt`
- `cd src`
- `python manage.py makemigrations`
- `python manage.py migrate`
- `python manage.py createsuperuser` - enter username and password after this command. (Email is optional and can be left blank)
- `python manage.py runserver`

# Using the application
- Signup using the signup button and form.
- Login into the application once signed up.
- Click on the insert button to create a task for the logged-in user.
- Update or Delete tasks using dedicated buttons.
- Logout using the Logout button.
- Repeat the above steps for any number of users.

# Backend Usage
- Access the admin panel at http://localhost:8000/admin and log in using the super-user creds.
- Access the api at http://localhost:8000/api .
