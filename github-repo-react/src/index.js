import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// function SearchResult(props) {
//     if (props.error) {
//         return <p className="errorMsg">{props.error}</p>
//     } else if (!props.isLoaded){
//         return <p className="errorMsg">Loading</p>
//     } else {
//         return <div className="reposListDiv">
//             <ul>
//                 {props.repos.map(repo => {
//                     return <li key={repo.id}>
//                         {repo.name}
//                     </li>
//                 })}
//             </ul>
//         </div>
//     }
// }

class MainComponent extends React.Component {
    // renderResult() {
    //     return (
    //     <SearchResult error={this.error} isLoaded={this.isLoaded} repos={this.repos}  />
    //     )
    // }

    constructor(props) {
        super(props);
        // this.renderResult = this.renderResult.bind(this);
        this.state = {
            username: null,
            error: null,
            isLoaded: false,
            avatar: null,
            repos: [],
        };
    }

    handleChange = event => {
        this.setState({ username: event.target.value });
    }

    handleSearch = (event) => {
        fetch(`https://api.github.com/users/${this.state.username}/repos`)
        .then(res => res.json())
        .then(
            (result) => {
                if (result.message === "Not Found"){
                    this.setState({
                        isLoaded: true,
                        error: result.message
                    })
                } else{
                    this.setState({
                        isLoaded: true,
                        repos: result,
                        avatar: result[0].owner.avatar_url
                    });
                }
            },
        )
        .catch(
            (error) => {
                this.setState({
                    isLoaded:true,
                    error: error.message
                })
            }
        )
        event.preventDefault();
    }

    render() {
        const {username, repos, avatar, error, isLoaded} = this.state
        // const renderResult = this.renderResult();
        return (
            <div className="search">
            <form onSubmit={this.handleSearch}>
                <label for="username">Username: </label><br />
                <input type="text" placeholder="Github Username" onChange={this.handleChange} value={username} className="inputUsername" /><br />
                <input type="submit" value="Submit" /><br />
            </form>
            <p className='redText'>{ error }</p>
            {
                repos.length > 0 &&
                
                <div className="reposListDiv">
                <div className="userInfo">
                    <img src={ avatar } />
                    <h3>{username}</h3>
                </div>
                <ul>
                    {repos.map(repo => {
                        return<a href={ repo.html_url } target="_blank"><li key={repo.id} className="repoList">
                            {repo.name}
                            <p className="smallText">{ repo.private ? 'Private' : 'Public' }</p>
                        </li>
                        </a> 
                    })}
                </ul>
            </div>
            }
        </div>
        )
    }
}

ReactDOM.render(
    <MainComponent />,
    document.getElementById('root')
)