console.log("App.js is running");

//JSX - JavaScript XML
const app = {
    title:"Indecision",
    subtitle:"Put your life in hands of a computer",
    options: ['One', 'Two']
};

const template = (
<div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
        <li>One</li>
        <li>Two</li>
    </ol> 
</div>
);

let count = 0;
const addOne = () => console.log('plus one');
const minusOne = () => console.log('minus one');
const setupReset = () => console.log('reset');

const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick = {addOne}>+1</button>
        <button onClick = {minusOne}>-1</button>
        <button onClick = {setupReset}>Reset</button>
    </div>
);

const appRoot=document.getElementById("app");

ReactDOM.render(templateTwo,appRoot);