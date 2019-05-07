console.log('app.js is running');

//JSX
var titleObj = {
    title: 'Titleeee',
    subtitle: 'Subtitleee',
    options: ['one', 'two']
};
var template = (
    <div>
        <h1>{titleObj.title}</h1>
        {titleObj.subtitle && <p>{titleObj.subtitle}</p>}
        <p>{titleObj.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>item one</li>
            <li>item two</li>
        </ol>
    </div>
);
var user = {
    name: 'Bob',
    age: 18,
    location: 'Texas'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(
    template,
    appRoot
);