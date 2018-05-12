# San Francisco distance between busses
## Description
This project is a web based visualization of the distance between buses on all the bus routes from San Francisco. To made this small project it was necessary to use this tools:
* [NextBus API :](https://gist.github.com/grantland/7cf4097dd9cdf0dfed14) To get the real time data from the buses.
* [Meteor.js:](https://www.meteor.com/) To work as a backend and create the server of the application.
* [React.js:](https://www.reactjs.org) To make the user interface.
* [D3.js:](https://d3js.org) To Make the visualization from the [NextBus](https://gist.github.com/grantland/7cf4097dd9cdf0dfed14) data.

## Motivation
Based on [John Guerra's](https://twitter.com/duto_guerra?) stack [visualization](https://beta.observablehq.com/@john-guerra/d3-stack-with-d3-nest) of the distance between two buses from the same route in San Francisco. The final exam of [webdevelopment class](https://twitter.com/duto_guerra?) on the university of [_Los Andes_](https://beta.observablehq.com/@john-guerra/d3-stack-with-d3-nest) was conceived.

The idea of the exam is to implement the visualization mentioned before on a website using the tools learned from the semester. There are some requirements like fetching the data the applications needs from [NextBus](https://gist.github.com/grantland/7cf4097dd9cdf0dfed14) every 10 seconds, adding the option to make comments and allow user to login and create accounts, and also [deploy on heroku](https://buses-distance.herokuapp.com/).

There are some changes from the original code of the visualization made by John. One of wich is a small fix to make the visualization more [useful and organized](https://github.com/cawolfkreo/sanfrancisco-distance-buses/commit/b952c3bd616707d3aecbc055b75a3a26830d0b94#diff-aafc747ecfc5982788bdfab3222c02fb). One can say that such a small change could be the fix to a potential bug in the original D3 code from John Guerra :100: .

## Getting Started
If you want to see this project in action you can do so by going [here.](https://buses-distance.herokuapp.com/) But, if you want to deploy and test it yourself you will need to install [Meteor.js](https://www.meteor.com/) first. There are different ways to do it and they are all explained on [Meteor.js website.](https://www.meteor.com/install)

Once you have installed Meteor on your machine download this repo on a folder. I suggest using [git](https://git-scm.com) for that. 

## Deployment
Now that you have Meteor and this project, the next step is to download some other files necessary for the project before you can deploy. To do this you will need to open a console on the folder where ou have downloaded this repo and then type:  
```$ meteor npm install```  
That way npm download and install all of the needed files for you. The next step is finally deploy the application. Use your terminal again and run:  
```$ meteor```  
This final part can take a few minutes to complete but after is done you will se a message like this:  
`=> App running at: http://localhost:3000/`  
At this point you can just open your Web Browser and type that url, hit enter and the application will load.

## Authors
* [__Camilo Zambrano Votto__](https://github.com/cawolfkreo)

## Contributing
If anyone wants to give me any help or ideas, you can by making new [Issues](https://github.com/cawolfkreo/sanfrancisco-distance-buses/issues) or [Pull requests](https://github.com/cawolfkreo/sanfrancisco-distance-buses/pulls).

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This repository has the standard MIT license. You can find it [here.](https://github.com/cawolfkreo/sanfrancisco-distance-buses/blob/master/LICENSE)
