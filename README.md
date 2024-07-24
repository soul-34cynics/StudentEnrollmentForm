# StudentEnrollmentForm
#Overview
This project is a Student Enrollment Form application that allows users to enter and manage student data in a database. The application is built using HTML, JavaScript, and Bootstrap for the front-end, and Express.js with Axios for the back-end. The database interaction is handled through a JPDB API.

#Features
Form Fields: Roll No, Full Name, Class, Birth Date, Address, Enrollment Date
Buttons: Save, Change, Reset
Data Management: Add and update student records in the database
Installation
Prerequisites
Node.js
npm (Node Package Manager)
#Setup

Install Dependencies


npm install
Run the Server


node index.js
The server will start and listen on http://localhost:3000.

Open the Application

Open your browser and navigate to http://localhost:3000 to access the Student Enrollment Form.

#API Endpoints

1. Add new student data to the database.
Request Body: JSON object with student details.
Response: Success or error message.


2. Retrieve student data based on Roll No.
Response: JSON object with student details.


3. Update existing student data based on Roll No.
Request Body: JSON object with updated student details.
Response: Success or error message.


4. Reset the form.

#Troubleshooting
Data Not Being Saved: Ensure the JPDB API details (jpdbBaseUrl, jpdbIML, connectionToken) are correctly configured.
API Errors: Check the server logs and network requests for any error messages.
#Contributing
Fork the repository.
Create a new branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature/YourFeature).
Create a new Pull Request.
#License
This project is licensed under the MIT License. See the LICENSE file for details.

#Acknowledgements
Bootstrap for styling
Express.js and Axios for server and HTTP requests

#Benefits of Using JSON Power DB (JPDB)
NoSQL Database: JSON Power DB is a NoSQL database designed to handle JSON data formats directly, making it efficient for applications that deal with JSON-based data.

Real-time Data Handling: Provides real-time data access and manipulation with minimal latency, which is ideal for applications requiring quick and responsive data interactions.

Simple Integration: Offers straightforward API endpoints for CRUD operations, which simplifies integration with front-end applications and backend services.

Scalability: Designed to handle large datasets efficiently, making it suitable for growing applications with increasing data needs.

Flexibility: Allows for flexible schema design, accommodating changes in data structures without complex migrations.

Ease of Use: The API provides a user-friendly approach to interact with the database, reducing the complexity of database management and operations.

Cost-Effective: Often more cost-effective compared to traditional relational databases due to its lightweight nature and reduced overhead for managing schemas and transactions.

Efficient Data Retrieval: Optimized for quick data retrieval and manipulation, which can enhance the performance of data-driven applications.
