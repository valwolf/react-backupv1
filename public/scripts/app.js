'use strict';

var app = {
    title: 'Visibility toogle'
};

var showDetails = false;
var setButtonState = function setButtonState() {
    showDetails = !showDetails;
    renderVisApp();
};

var appRoot = document.getElementById("app");

var renderVisApp = function renderVisApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { onClick: setButtonState },
            showDetails ? 'Hide details' : 'Show details'
        ),
        showDetails && React.createElement(
            'p',
            null,
            'BlaBlatext'
        )
    );
    ReactDOM.render(template, appRoot);
};

renderVisApp();
