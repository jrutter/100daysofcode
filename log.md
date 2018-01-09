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

**Thoughts:** It took me a day to figure out, but I was able to setup a single file based import using vuejs. Took me a while, but I figured it out. I think I was using  a reserved word for the import name. I have successfully split apart the navigation into it's own include, tomorrow I will work on making it dynamic. I also got up at 6am today, that makes a difference!

* `npm run dev` - Starts the webpack app for dev mode
* `npm run build` - Builds for production

**Resources Used:**
* [VueJS Component Templates](https://jeremenichelli.io/2016/06/building-component-based-app-vue/)
