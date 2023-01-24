# ToDoApp with JS

Small website to keep track of ToDos

Hello! In this README I will give a description of the project and explain how to use it.

## **Section 1. Description**

This project has been done using HTML, CSS and JavaScript. It allows a user to sign up or sign in, and then manage their ToDos on a website.
To create the project, debug and edit files VSCode application was used.
This website is a frontend to my other project, ToDoApp (https://github.com/Samcolserra/ToDoApp), which is a backend that exposes a series of REST API calls. The frontend will not work without it.

The website consists of 2 pages:
  1. Authentication page
  2. ToDo list page

## **Section 2. Setup**

Before using the website, it needs to be set up.

Step 1.
Download all project files archive from github.

Step 2. 
Extract the todo-js folder and open it using VSCode.

Step 3.
Make sure the "Live Server" extension is installed in VSCode.
![3](https://user-images.githubusercontent.com/92231063/214374933-0081bb02-c7d3-420d-aed3-8fdf900c4f56.png)

Step 4.
Press "Go live" button on the bottom-right to start the website. It should open a page in your browser.
![4](https://user-images.githubusercontent.com/92231063/214374963-7fd1b19b-560c-41b4-98e1-167e512fe810.png)

## **Section 3. Using the website**

The first page is the authentication page.
![1](https://user-images.githubusercontent.com/92231063/214375031-2e87ab43-368c-4c28-9190-5eb73b4e403a.png)

It is possible to sign up and sign in.
Sign up by clicking the relevant button. This will open a form. Enter a valid email and a password.
After submitting a sign up, you will be automatically logged in and redirected to the ToDo List page.
![2](https://user-images.githubusercontent.com/92231063/214375004-c244a39a-5374-47c2-a66f-76f2aafd6cea.png)

Similarly, it is possible to sign in to an existing account.
![5](https://user-images.githubusercontent.com/92231063/214375047-fa5dcccd-8b8e-480c-9290-dafe69f68bef.png)

Redirection after authentication leads to ToDo List page. 
For a new user, it will be empty:
![7](https://user-images.githubusercontent.com/92231063/214380123-de70132f-8b9e-4c33-a3f5-140b0576c1c0.png)

An existing user who already has some ToDos created will see all their ToDos:
![6](https://user-images.githubusercontent.com/92231063/214380135-d402f010-ec1d-4734-8e4e-ea1250fc8921.png)

New ToDos can be created by pressing "plus" button. This will bring two prompts to enter a name and, optionally, a description for a ToDo. The status for the ToDo is automatically set to "Not started".
![8](https://user-images.githubusercontent.com/92231063/214380188-a382099f-6470-4606-8eba-402db3ce6cb6.png)
![9](https://user-images.githubusercontent.com/92231063/214380201-c088c41e-cbd5-463c-855b-a1c352abfd8b.png)

Existing ToDos can be edited(1) or deleted(2). Editing button allows to change the name and description.
![10](https://user-images.githubusercontent.com/92231063/214382015-f174cac3-c398-4bba-9c70-5abaa59cb57e.png)

The status can be edited by pressing the status text directly. There are 3 statuses: "Not started", "In progress" and "Completed". By pressing the button it's possible to cycle through these statuses.
![11](https://user-images.githubusercontent.com/92231063/214382226-4cd75560-4a39-4a2a-aaad-294e507dfe66.png)

Once the user is done with the session, they can logout, which will redirect to the authentication page and reset the JWToken and username.
![12](https://user-images.githubusercontent.com/92231063/214382829-8f22d7d1-f458-49fb-88ed-1430410769c4.png)

## **Section 4. Additional information**

In this section I will write some more about the project.

The project structure is the following:
  1. SVGs folder: contains svg images that are used on the page.
  2. auth.html and index.html: authentication and ToDo List pages respectively.
  3. styles.css: styles that are used in the html files.
  4. auth.js and script.js: JavaScript files that are used to handle logic in authentication and ToDo List pages respectively.
  5. api-handler-methods.js: file with methods that contact the backend and make API calls.
  6. click-handler-methods.js: file with methods that handle various buttons logic.
  7. status-helper.js: class to handle changes to status of a ToDo.
