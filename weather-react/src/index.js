import React from 'react';
import ReactDOM from 'react-dom'
import MainBody from './mainBody';

class App extends React.Component {
    render() {
        return (
                <div className="App" style={{margin:0}}>
                    <MainBody />
                </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));