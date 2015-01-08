# Follow these instructions
* http://start.jcolemorrison.com/building-an-angular-and-express-app-part-1/

# After Git Clone
* cd /client && npm install
* cd /client && bower install 
* cd /client grunt build --force
* cd /server && npm install
* cd /client && grunt build --force (for at least scss -> css sake)


# Quick start | run server (/app)
* cd /server && npm test

# Build to server/dist
* cd /client && grunt build --force

# Run server at production mode (/server/dist)
* cd /server && npm start

# When SCSS work
* cd /client && grunt watch

# Unit test
* cd /client && grunt unit

# E2e test
* cd /server && npm test
* cd /client && grunt e2e

# Protractor (manual e2e test) 
* cd /server && npm test
* cd client/node_modules/protractor/bin && ./webdriver-manager start
* cd client/node_modules/protractor && protractor conf.js

#Git
* git clone https://github.com/anmatika/me_meanstack.git
* git branch shop
* git checkout shop
* git commit -a
* git push origin shop