class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            visible: false
        }
    }
    handleToggle() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggle}>
                    {
                        this.state.visible ? 'Hide details' : 'Show details'
                    }
                </button>
                {
                    this.state.visible && <p>There are some details here!</p>
                }
            </div>
        );
    };
}

ReactDOM.render(<Visibility />, document.getElementById('app'));