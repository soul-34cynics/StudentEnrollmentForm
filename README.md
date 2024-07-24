# StudentEnrollmentForm
Overview
This project is a Student Enrollment Form application that allows users to enter and manage student data in a database. The application is built using HTML, JavaScript, and Bootstrap for the front-end, and Express.js with Axios for the back-end. The database interaction is handled through a JPDB API.

Features
Form Fields: Roll No, Full Name, Class, Birth Date, Address, Enrollment Date
Buttons: Save, Change, Reset
Data Management: Add and update student records in the database
Installation
Prerequisites
Node.js
npm (Node Package Manager)
Setup

Install Dependencies


npm install
Run the Server


node index.js
The server will start and listen on http://localhost:3000.

Open the Application

Open your browser and navigate to http://localhost:3000 to access the Student Enrollment Form.

API Endpoints
POST /data

Description: Add new student data to the database.
Request Body: JSON object with student details.
Response: Success or error message.
GET /data/

Description: Retrieve student data based on Roll No.
Response: JSON object with student details.
PUT /data/

Description: Update existing student data based on Roll No.
Request Body: JSON object with updated student details.
Response: Success or error message.
POST /reset

Description: Reset the form.
Troubleshooting
Data Not Being Saved: Ensure the JPDB API details (jpdbBaseUrl, jpdbIML, connectionToken) are correctly configured.
API Errors: Check the server logs and network requests for any error messages.
Contributing
Fork the repository.
Create a new branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature/YourFeature).
Create a new Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
Bootstrap for styling
Express.js and Axios for server and HTTP requests
