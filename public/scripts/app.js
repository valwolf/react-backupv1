"use strict";

console.log("App.js is running");

//JSX - JavaScript XML
var app = {
    title: "Indecision",
    subtitle: "Put your life in hands of a computer",
    options: ['One', 'Two']
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "One"
        ),
        React.createElement(
            "li",
            null,
            "Two"
        )
    )
);

var count = 0;
var addOne = function addOne() {
    count++;
    renderCounterApp();
    console.log('plus one');
};
var minusOne = function minusOne() {
    count--;
    renderCounterApp();
    console.log('minus one');
};
var setupReset = function setupReset() {
    count = 0;
    renderCounterApp();
    console.log('reset');
};

var appRoot = document.getElementById("app");

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Count: ",
            count
        ),
        React.createElement(
            "button",
            { onClick: addOne },
            "+1"
        ),
        React.createElement(
            "button",
            { onClick: minusOne },
            "-1"
        ),
        React.createElement(
            "button",
            { onClick: setupReset },
            "Reset"
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
