console.log('App.js is runnig.');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of computer.',
    options: []
};

const onFromSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const appRoot = document.getElementById('app');

const onRemoveAll = () => {
    app.options = [];
    render();
};

const render = () => {
    const template = (
        <div>
            <h1>{ app.title }</h1> 
            { app.subtitle && <p>{ app.subtitle }</p> }
            <p>{ (app.options.length > 0) ? 'Here are your options' : 'No options' }</p>
            <p>{ app.options.length }</p>
            <button onClick={ onRemoveAll }>Remove All</button>
            <ol>
                <li>item one</li>
                <li>item two</li>
            </ol>
            <form onSubmit={ onFromSubmit }>
                <input type='text' name='option'/>
                <button>Add Option</button>
            </form>
        </div>
        );

        ReactDOM.render(template, appRoot);
};

render();