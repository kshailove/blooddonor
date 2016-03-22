Prerequisites:-
Node 5.8.0 , mongodb 2.6.10, bower 1.7.7
Ubuntu 15.10
1.	Unzip the folder.
2.	Check config.json file and update the link to mongodb and the server accordingly. Create a db named mean-stack-blood-donor-example and a collection named 'users'
3.	cd to the unzipped folder.
4.	npm install
5.	bower install
6.	create a link to folder bower_components inside ‘app’ folder.
7.	Run command “node server.js”
8.	Run the web app in browser. In my case the url is http://127.0.0.1:3000
9.	You are good to go. If the map successfully gets loaded, click anywhere on the map, it should display a modal form and upon entering all the required fields and saving, you should be able to see a pin on the map. Upon creation of a pin, click on the pin and you should see the info.
10.	To verify live streaming of donors, open the web app in two different browser windows, add a donor on one window and see if that gets reflected on another window.
11.	In case of any issues, feel free to contact me at kshailove@gmail.com



For running tests:-
1. npm install -g mocha.
2. cd to TESTS folder.
3. npm install
4. mocha
