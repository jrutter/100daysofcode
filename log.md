# 100 Days Of Code - Log

* Useful Cheatsheet - https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code

### Day 001: December 30, 2017

**Today's Progress**: Intro to Vue.js

**Thoughts:** I've been hearing about vue.js and wanted to have a play with it. I ran through the basics of how vue.js works, it feels similar to both react and angularjs. Almost a mix of both.

**Resources Used:**  [Vue.js Intro Guide](https://vuejs.org/v2/guide/)

**Link to Work:** [Example of Codepen.io] (https://codepen.io/jakerutter/pen/KZmyrq)


### Day 002: December 31, 2017

**Today's Progress**: New app setup using vue.js

**Thoughts:** After doing the intial tutorial yesterday, I thought I would take it a step further to learn a bit more about vue.js and use the cli tool to setup an app. It comes with a fully setup dev environment, very impressed with the CLI. Setup basic view with todo items, tomorrow I will take this a step further.

`npm run dev` - Starts the webpack app for dev mode
`npm run build` - Builds for production

**Resources Used:**  [Vue.js 2 Quickstart Tutorial 2017](https://medium.com/codingthesmartway-com-blog/vue-js-2-quickstart-tutorial-2017-246195cfbdd2)

### Day 003: January 1, 2018

**Today's Progress**: Setup CSS Grid

**Thoughts:** I used the CLI to setup another app and this time, Im going to play around with CSS Grids. It's pretty simple to get it started and I'm amazed at how powerful it seems. Although, a bit worried about support for IE11<. I also setup SASS in the webpack config using the tutorial below, pretty simple!

`npm run dev` - Starts the webpack app for dev mode
`npm run build` - Builds for production

**Resources Used:**
* [Complete CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
* [Using SASS/SCSS in Vue.js](https://medium.com/@mahesh.ks/using-sass-scss-in-vue-js-2-d472af0facf9)
* [Getting Started with CSS Grids](https://scotch.io/tutorials/getting-started-with-css-grid-layout)

### Day 004: January 2, 2018

**Today's Progress**: Continue working with CSS Grid

**Thoughts:** I copied over the previous day 003 and started from their on building a UI. I want to build a simple web app for stashing your shows and setlists, so I thought a simple form with css grids would be a good start. I want to get more comfortable with the css grids. It's starting to click and I can see the power of them. I like where this is going though, although I think I need to do early morning coding instead of after work.

`npm run dev` - Starts the webpack app for dev mode
`npm run build` - Builds for production

**Resources Used:**
* [Complete CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
* [Using SASS/SCSS in Vue.js](https://medium.com/@mahesh.ks/using-sass-scss-in-vue-js-2-d472af0facf9)
* [Getting Started with CSS Grids](https://scotch.io/tutorials/getting-started-with-css-grid-layout)

### Day 005: January 3, 2018

**Today's Progress**: Added Event Handler in Vuejs

**Thoughts:** I'm getting into a groove now, but I definitely have to try get this done in the morning instead of the evening. I'm getting home too late and it's cutting into my me time.

* `npm run dev` - Starts the webpack app for dev mode
* `npm run build` - Builds for production

**Resources Used:**
* [Vuejs Event Guide](https://vuejs.org/v2/guide/events.html)
* [Vue Syntax Highlighting](https://atom.io/packages/language-vue)
* [Vue Input Forms](https://vuejs.org/v2/guide/forms.html)

### Day 006: January 4, 2018

**Today's Progress**: Having fun with Airtable and Vuejs

**Thoughts:** Up in the morning today, it's a snow blizzard outside, so doing a little coding before I start my day of work from home. I've decided to pivot and instead of building an app to track setlists, etc. I found this new product called Airtable.com and am going to build a daily status app. I was able to setup a basic table and use vue.js to bring in the statuses. There is more work I need to do on this, but pretty excited.

* `npm run dev` - Starts the webpack app for dev mode
* `npm run build` - Builds for production

**Resources Used:**
* [Cool Resource for creating fake data](http://jsonplaceholder.typicode.com/)
* [Airtable](https://airtable.com)
* [Working with Vue.js and Airtable](https://medium.com/row-and-table/an-basic-intro-to-the-airtable-api-9ef978bb0729)

### Day 007: January 5, 2018

**Today's Progress**: Moving onto MongoDB Stitch

**Thoughts:** Up in the morning early again, yesterday was a snow blizzard and today it's -15 wind chill. Getting a bit of code in before I have to shovel! Did some more research last night and found that although Airtable is pretty sweet, it has it's limitations and is not meant for Production Customer Facing Web Applications. Found something called MongoDB Stitch, going to try setting the app up in that. It has a lot of nice features including authentication built in and a nice query language. I spent most of the time today learning about that and setup the NPM module and connected it to my app. Tomorrow I will spend more time setting up the basic CRUD operations

* `npm run dev` - Starts the webpack app for dev mode
* `npm run build` - Builds for production

**Resources Used:**
* [MongoDB Stitch NPM](https://www.npmjs.com/package/mongodb-stitch)
* [MongoDB Stitch](https://www.mongodb.com/cloud/stitch)


### Day 008: January 6
**Today's Progress**: Setup Basic form with Stitch to add statuses

**Thoughts:** I made a ton of progress today, I was able to get MongoDB stitch up and running with my app. I really like how easy it was to add a database, I created a form to enter your daily status and a log page to see all of the statuses. Tomorrow, I need to figure out how to clean up some of the collection and only show the latest statuses. Lots to do, but excited!!

* `npm run dev` - Starts the webpack app for dev mode
* `npm run build` - Builds for production

**Resources Used:**
* [MongoDB Stitch NPM](https://www.npmjs.com/package/mongodb-stitch)
* [MongoDB Stitch](https://www.mongodb.com/cloud/stitch)
* [Vue JS Login Modal](https://lukevers.com/2015/08/17/crafting-a-login-modal-with-vuejs)
* [Getting started with a ToDo App](https://docs.mongodb.com/stitch/getting-started/todo-web/)

### Day 009: January 7
**Today's Progress**: Added a Register View and cleaned up CSS

**Thoughts:** I'm starting to build out the different views in the application, I added a Register view today and cleaned up some of the css. I would like to add the Auth next, I want to figure out how to delete records on MongoDB stitch. There seems to be no way to do it using an online console. I need to figure out if they have a shell.

* `npm run dev` - Starts the webpack app for dev mode
* `npm run build` - Builds for production

**Resources Used:**
* [MongoDB Stitch NPM](https://www.npmjs.com/package/mongodb-stitch)
* [MongoDB Stitch](https://www.mongodb.com/cloud/stitch)
* [MongoDB Stitch Intro](https://www.slideshare.net/mongodb/mongodb-stitch-introduction)

### Day 010: January 8
**Today's Progress**: Learning more about vue.js router and components

**Thoughts:** I'd like to move the updating of the nav from every file, to one common file that gets pulled in. I should be able to do this by pulling the array from the routes file and looping through it. Going to give it a shot, I got up early this morning to work on this. I think this is the key time to do this type of thing.

* `npm run dev` - Starts the webpack app for dev mode
* `npm run build` - Builds for production

**Resources Used:**
* [VueJS Component Templates](https://vuejsdevelopers.com/2017/03/24/vue-js-component-templates/)
* [MongoDB Stitch Intro](https://www.slideshare.net/mongodb/mongodb-stitch-introduction)

### Day 011: January 9
**Today's Progress**: Setup a Single File Based Component

**Thoughts:** It took me a day to figure out, but I was able to setup a single file based import using vuejs. Took me a while, but I figured it out. I think I was using  a reserved word for the import name. I have successfully split apart the navigation into it's own include, tomorrow I will work on making it dynamic. I also got up at 6am today, that makes a difference! Twitter: 1475 followers

* `npm run dev` - Starts the webpack app for dev mode
* `npm run build` - Builds for production

**Resources Used:**
* [VueJS Component Templates](https://jeremenichelli.io/2016/06/building-component-based-app-vue/)

### Day 011: January 10
**Today's Progress**: Making Navigation Dynamic Continued

**Thoughts:** Got up early today, it was tough getting up, but glad I did it. I was able to move the routes into a named array, then can pull that array into the Navigation view. This makes it one less thing to update if the links/paths change. Twitter: 1475 followers

* `npm run dev` - Starts the webpack app for dev mode
* `npm run build` - Builds for production

**Resources Used:**
* [VueJS Component Templates](https://jeremenichelli.io/2016/06/building-component-based-app-vue/)

### Day 012: January 11
**Today's Progress**: Finished Making Navigation Dynamic

**Thoughts:** I got up early again today, it helped because I went to bed at 9:45pm. I finished the dynamic navigation, going to work on a medium post for this one as I couldn't find anyone doing anything like it. It took 3 days, but I did it with some help from stackoverflow. Now I can move onto other things. Twitter: 1474 followers

* `npm run dev` - Starts the webpack app for dev mode
* `npm run build` - Builds for production

**Resources Used:**
* [StackOverflow Question](https://stackoverflow.com/questions/48206254/can-i-use-vuejs-router-routes-array-to-dynamically-create-a-nav)
* [Vue Router Docs](https://router.vuejs.org/en/)

### Day 013: January 12
**Today's Progress**: Cleaned up Navigation, Added Font-awesome, Logged into DB via Shell

**Thoughts:** Up at 6:00am today, will be tired tonight - but it's worth it for a little coding. Making some good progress now, finished up the navigation, cleaned up routes. I added font-awesome and was able to finally log into the DB shell to clean up the records. I will start the authentication module next, that should be fun!

Twitter: 1476 followers +1

**Resources Used:**
* None today

### Day 014: January 13
**Today's Progress**: Started email/password Authentication

**Thoughts:** Up at 6:00am today, started working on email/password authentication through Mongodb stitch. I'm setting up 2 new views for forgot password and email verification. I like how the Stitch service handles registration. I have managed to setup the email / password form and have received a verification email. Setup a confirmation view too. Great progress!

Great progress today! I was able to get the email/password signup page done, was sent an email with a confirmation link, then setup the confirmation page. Just need to figure out where the user is getting stored as I don't see it on the table in Stitch. Otherwise, great work Jake!!

Twitter: 1477 followers +1

**Resources Used:**
* https://router.vuejs.org/en/essentials/dynamic-matching.html
* https://docs.mongodb.com/stitch/auth/email-auth/
* https://stackoverflow.com/questions/35914069/vue-js-query-parameters
* https://router.vuejs.org/en/essentials/history-mode.html
* https://router.vuejs.org/en/api/options.html

### Day 015: January 14
**Today's Progress**: Setup Password Reset Views

**Thoughts:** I setup the Password Reset views, I just can't figure out where the users are being setup and saved in. I logged into the Admin and can see the requests coming in. My app is telling me I'm logged in, but I dont see any users being created in the app. Maybe it's because I'm not in production? I cant figure it out.

Twitter: 1483 followers +6 followers since yesterday!

### Day 016: January 15
**Today's Progress**: Working on user session mgmt

**Thoughts:** I got up early today, it was tough to get out of bed. My back is hurting from Sunday, but I could feel a migraine coming on so I took something. I worked for a bit today on the authentication. I'm not sure if I'm a fan of how Stitch does it. It seems easy, but some things aren't very clear. I'm not sure if I should keep going or stop here and switch to something else. Their documentation is simple, but I'm stuck at one part.

Twitter: 1481 followers.

### Day 017: January 16
**Today's Progress**: Pivot to using a different mongodb - mLab

**Thoughts:** I missed getting up early today, so doing some coding at night after running at the gym. My back is finally improving, so back at it. Going to explore using mLab over Stitch. I don't love stitch and want to learn to integrate with the heroku ecosystem. Exploring using mLab over Stitch, got a basic collection up and running using the Data API. Going to move forward with using this over Stitch.

Twitter: 1487 followers - moving up!

* http://docs.mlab.com/data-api/

### Day 018: January 17
**Today's Progress**: Got Auth0 basic authentication service up and running

**Thoughts:** Doing after work coding again, spent a solid hour today - but could spend all night. Made great progress on getting Auth0 setup and running. It's very slick, much better than the Stitch app I was looking at. Tomorrow going to get up early and do more with this! Excited!

Twitter: 1491 followers... almost at 1500!

* http://docs.mlab.com/data-api/
* https://manage.auth0.com/#/clients/tP81ULArF3ft31S3tYEJQvbOodIggGz9/quickstart

### Day 019: January 18
**Today's Progress**: Continued work on Auth0 integration

**Thoughts:** Up early today, I started work on the user profile using the Auth0 integration. I really like this service, the docs are amazing. I just need to get my head wrapped around it. I setup the authenticated routes, etc. I used some code samples from Auth0, which helped too.

Twitter: 1494 followers... almost at 1500!

* http://docs.mlab.com/data-api/
* https://manage.auth0.com/#/clients/tP81ULArF3ft31S3tYEJQvbOodIggGz9/quickstart
* https://auth0.com/docs/api/authentication?javascript#get-user-info
* https://github.com/auth0-samples/auth0-javascript-samples/tree/master/02-User-Profile
* https://community.auth0.com/questions/11957/authentication-api-userinfo-missing-the-user-id

### Day 020: January 19
**Today's Progress**: Continued work on Auth0 integration

**Thoughts:** Up early today, I finished off the User Profile and was able to get the add view all setup with the user going into the database. This is awesome progress. I need to slap an actual UI on this and then can maybe get it up on a domain as an early beta.

Twitter: 1499 followers... almost at 1500!

* https://manage.auth0.com/#/clients/tP81ULArF3ft31S3tYEJQvbOodIggGz9/quickstart
* https://auth0.com/docs/api/authentication?javascript#get-user-info
* https://github.com/auth0-samples/auth0-javascript-samples/tree/master/02-User-Profile
* https://community.auth0.com/questions/11957/authentication-api-userinfo-missing-the-user-id

### Day 020: January 19
**Today's Progress**: Did a slight pivot and was going to rebuild this in React, so I did some basic setup in reactjs.

**Thoughts:** Saturday. So I spent sometime messing around with react. I think I will continue with VueJS for now. At the end of where I have gotten with this, I will then attempt a rewrite of this in react if necessary. So far they are pretty similar. The whole point of this was to learn something new, so I'm going to stay on that track.

Twitter: 1506 followers

* https://vuejs.org/v2/guide/comparison.html
* https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
* https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel
