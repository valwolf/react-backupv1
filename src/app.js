console.log("App.js is running");

//JSX - JavaScript XML
const app = {
    title:"Indecision",
    subtitle:"Put your life in hands of a computer",
    options: []
};
const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderIndecisionApp();
    }
    // console.log(option);
};
const deleteOptions = () => {
    if(app.options.length != 0){
        app.options.length = 0;
        renderIndecisionApp();
    }; 
};

const onMakeDecision = () => {
    const numRan = Math.floor(app.options.length * Math.random());
    const option = app.options[numRan];
    alert(option);
};

const appRoot=document.getElementById("app");

const renderIndecisionApp = () => {
    const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={deleteOptions}>Remove All</button>
        <ol>
        {
            app.options.map((option) => {
                return <li key = {option}>{option}</li>
            })
        }
        </ol> 
        <form onSubmit={onFormSubmit}>
            <input type='text' name='option'></input>
            <button>Add Option</button>
        </form>
    </div>
    );
    ReactDOM.render(template,appRoot);
}

renderIndecisionApp();