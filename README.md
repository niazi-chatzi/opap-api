# OPAP API Project
## About the project
This is a  Java Spring Boot project that fecthes data from the API of OPAP (https://www.opap.gr),
specifically it fetches the data of the game KINO. These data then are collected in a 
Database and are shown in the front-end. The application processes the numbers that were
drawn in the games and sums them with the corresponding numbers in the Database. At the
Homepage of the Web Application (http://localhost:8081/ - root endpoint) each number is
being displayed along with the number of times it had been drawn. There iss an "Update"
labeled button at the bottom of the page to update the numbers using the OPAP's API .

## API Info
The API used in this project return a JSON file. The data contains an array of 100 objects
representing 99 games. The 0 indexed element (1st element in the list) is shown twice
because the first element always shows the most-recent (active) game.

## Usage
Each time a user open the site and clicks the
button "Update", the sie triggers an alert box that shows the appropriate message based
on the result of the action. After the user closes the alert box, the site refreshes displaying
the updated values.

###### Notes
The app will not allow multiple Update operations in quick successions.
The reason for this behavior is that the 99 games that are returned
from the API will be present until two (2) days pass. Basically user can
use the "Update" button every two (2) days.

## How to Run
1. Remove the '.sample' keyword from the file 'application.sample.properties'. The final 
name should be 'application.properties'..
2. Update the application.properties to match your database and credentials.
3. Create Database tables that match the Entities sof this project.
4. Run the /src/main/java/Application.java and navigate to http://localhost:8081 (note 1).

###### Notes
1. If you've changed the port number in application.properties, please use the corresponding
port of your choice.
