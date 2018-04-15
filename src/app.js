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

const user = {
    name:"Valentin",
    age:17,
    location:"Zagreb"
};
function getLoc(location) {
    if(location){
        return <p>Location: {user.location}</p>;
    }
    return undefined;
};

const templateTwo = (
<div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age>=18) && <p>Age: {user.age}</p>}
    {getLoc(user.location)}
</div>
);

const appRoot=document.getElementById("app");

ReactDOM.render(template,appRoot);