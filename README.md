# weather-app
Weather app with basic search functionality. Most of the logic is inside the Context file, the following notes explain how the web app works and what function in what file is being used.

# Search for a City

(Instructions)    
Click on the menu icon on the top left side, type in the name of the city inside the input and hit enter or click the search icon. A modal should now pop up, with some information about the searched city with a close button and a add button

(Code)  
Inside the "MainContent" component, there is an icon element which runs the setter function of state "opened" when clicked and changes it to the opposite value. The onClick event handler toggles the sidebar to open and close. Inside the "Sidebar" component there is an input which has an onChange handler which runs the "handleChange" function. This function, just like most of the state variables and functions, is located in the "Context" file, the "handleChange" functions saves the input value to state "input" with help of the setter function. After clicking the search icon, the onClick handler runs the asynchronous "getWeatherData" function, which is located in the "Context" file. The function first checks wether the state "input" is not empty, if it's not empty, a try-catch block gets run, where a GET request to the OpenWeatherMap API, with the state "input" as a query string, gets made 
