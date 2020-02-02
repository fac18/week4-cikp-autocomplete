# WTF: Where's the food?
### By Titanium  
(Jamie, Kin, Reda and Roshan)

---

![](https://i.imgur.com/Gepi1Fr.jpg)

---

### Goals this week:
* Make a website that enables users to quickly find and select words from a list of suggestions, as they type ✅
* The list is dynamically generated from a pre-populated list of values, leveraging searching and filtering ✅
* A large data file is required to search through -  (we chose an object of country: dish pairs) ✅
* Consider how implementation affects user experience and web performance ✅

---

### Stretch goals this week:
* Submit button returns the national dish related to the country searched ✅
* Highlight untyped parts of the suggestions in list
* Further functionality (link to google or recipe search on the dish found)
* Utilise good UI practice from this week's design burst - eg colour li on hover ✅
* Add randomiser
* Return to Home upon h1 click ✅

---

### To run our site:

[Heroku link](https://wtf-wheres-the-food.herokuapp.com/)
Otherwise:
* Clone the Github repo
* navigate to repo folder
* run npm install
* run npm start
* visit localhost:3000 in browser

---

### WTF is WTF?

An autocomplete widget site where you search for a country and discover its national dish.

![](https://media0.giphy.com/media/3oz8xB06mHyoGE7ZoQ/giphy.gif?cid=790b76116c7dfddd80e4dd38370afc80de28fe6ce40e672a&rid=giphy.gif)

![](https://i.imgur.com/HBKw8sV.png)

---

### The Start 

* After a little team deliberation we decided to use countries as a data set - it is small enough to quickly create the key value object ourselves and avoid making api calls to a live database.

* We got to designing the architecture and file structure...

---

### Design

Desktop wireframe

![](https://i.imgur.com/qpH1apy.jpg)

---

Mobile wireframe

![](https://i.imgur.com/T7RYFgk.jpg)

---

### A11y

![](https://i.imgur.com/Ku8xcMx.png)

---

### Architecture - Outline
![](https://i.imgur.com/Y6PU5uH.jpg)

---

### Architecture - Final
![](https://i.imgur.com/jM8jzhZ.png)

---

### Get the server going

* Basic functionality using node and accounting for linked files
* Modular file structure - server.js, router.js, handler.js

---

### Work out what the API should actually do!

![](https://i.imgur.com/9nxRrPP.png)

* Be called on each keypress for the input field
* Send the search URL through the server to our data file and bring back array of filtered data
* Call a function to append the autofill suggestions to the DOM



---

### Handling the search

![](https://i.imgur.com/1X41iX4.png)

* Passing the endpoint through the router
* ```decodeURI``` to correct the JSON string (spaces as ```%20```)
* ```toLowerCase``` to homogenise cases
* ```filter``` to find results and append to an array
* ```stringify``` the array and send back to API

---

### Getting the dish

* We created a separate API request and handler function to get the name of the selected country's dish
    * learnt that we have to ```JSON.stringify``` a string to pass it back to API

---

### killAllChildren()

![](https://i.imgur.com/HytH5B8.png)

* Function to refresh the suggestions list on every input to search field
* Tried everything, from selecting suggestions ```<ul>``` by ```className```, selecting by ```tagName```, ```for``` loop, ```forEach```
* From 20 lines of code to this
* HTML Collections and NodeLists

---

### Testing

* Given more time we would have liked to create tests and refactor some code
* We had planned to separately write pure functions (such as ```filter``` for searching)

---

* Can't test pure functions if you don't have pure functions

![](https://media.giphy.com/media/d3mlE7uhX8KFgEmY/giphy.gif)

---

# Thank you!
