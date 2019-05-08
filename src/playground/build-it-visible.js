let visible = false;

const onToggle = () => {
    visible = !visible;
    render();
    console.log(visible);
}

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>Visibility toggle</h1>
            <button onClick={onToggle}>
                {
                    visible ? 'Hide details' : 'Show details'
                }
            </button>
            {
                visible && (
                    <p>There are some details here!</p>
                )
            }
        </div>
    )
    ReactDOM.render(
        template,
        appRoot
    );
};

render();