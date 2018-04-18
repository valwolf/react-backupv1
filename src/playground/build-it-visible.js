const app = {
    title: 'Visibility toogle'
};

let showDetails = false;
const setButtonState = () => {
    showDetails = !showDetails;
    renderVisApp();
};

const appRoot=document.getElementById("app");

const renderVisApp = () => {
    const template = (
        <div>
        <h1>{app.title}</h1>
        <button onClick={setButtonState}>{showDetails ? 'Hide details' : 'Show details'}</button>
        {showDetails && <p>BlaBlatext</p>}
        </div>
    );
    ReactDOM.render(template,appRoot);
};

renderVisApp();
