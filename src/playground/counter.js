let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
    console.log('plus one');
};
const minusOne = () => {
    count--;
    renderCounterApp();
    console.log('minus one')
};
const setupReset = () => {
    count=0;
    renderCounterApp();
    console.log('reset')
};




const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick = {addOne}>+1</button>
            <button onClick = {minusOne}>-1</button>
            <button onClick = {setupReset}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo,appRoot);
}

renderCounterApp();