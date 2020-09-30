import React from 'react';
import './App.css';
import UserList from './components/UserList/UserList'

class App extends React.Component {
  state = {
    usersList: []
  };
  

  componentDidMount() {
      fetch('http://ietilab6.southcentralus.azurecontainer.io:8080/tp/getUsers')
          .then(response => response.json())
          .then(data => {
              let userList = [];
              data.forEach(function (user) {
                  userList.push(user)

              });
            
              this.setState({usersList: userList});
              
          });
  }

  render() {
      return (
          <div>
              
              <UserList usersList={this.state.usersList}/>
          </div>
      );
  }
}

export default App;
