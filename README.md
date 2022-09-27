# My-first-single-page-web-application
I am learning to build a Single Page Application with JavaScript (No Frameworks) 

Single Page Web is basically just web pages or an application on the web which has a simple html file and all of the content and components and the views, they're all loaded dynamically using javascript through ajax or fetch requests to the server side to retrieve data, essentially it is supposed to act like a native application - quite importantly no page refreshes.

About this application :
It is a very basic application
- If you navigate to any section say , the About section , you have to see on the right ,the view will change, so we have 3 sections to learn about Sphelele namely they re Dashboard, About and Picture.
-The client side routing for forward slash (section)-- /Pictures.

Using VSCode editor:
firtly I will create a new directory, for the front side and inside I will have ofcourse the html .css and javascript
Make an index.html file - this is where I will write the actual web server using express,and every single route is gonna go back to the single index.html file - this helps the single web page app nature of this project.

Create a script inside of the html- script with the source of a type of "module" because I will take advantage of es6 imports export syntax ,primarilly due to the fact each one of each of the separate views(Dashboard,,etc) they're all gonna have their own javascript class , That's why I will use es6 import export syntac with modules (src= type="modules" and the source is static/js/index.js - frontend client-side javascript entry point.

Within the body tags, Write some navigations..just a nav with a class nav and few links inside:
Indivitual classes that has links themselves, more importantly , I need to have href's for each one of separate routes (/Dash..). Whats also importand it the data dash link (data attribute . done using the history Api , essintially any achor tag with an data- link ,should use the Api. the push state method to navigate to that particular resource to avoid page refreshes

Create CSS to make the page look nice
Working on the real server it's self.

open a command-line for this directory and create a new node.js projects for npm init -y and once it's done I include express (npm i express), then I create the server.js file 

Inside the server.js file , I include few dependencies....express and path
Create the express app - (const app = express().
SEE ON THE CODE!

After that important stage , I app.listen, start a server on process.emb.PORTS or default to 5050 then say anything to the listerner.
Then start the server with command : node server.js
Go to the browser and go to localhost:port5050

