import React from 'react';
import Header from './components/header'
import Users from './components/users'
import AddUser from './components/addUser'


class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            users: [
                {
                    id: 1,
                    firstname: 'Bob',
                    lastname: 'Dilan',
                    bio: 'Lorem ipsum',
                    age: 33,
                    isHappy: true
                },
                {
                    id: 2,
                    firstname: 'John',
                    lastname: 'Doe',
                    bio: 'Lorem ipsum',
                    age: 36,
                    isHappy: false
                },
        
            ]

    }
}
  render() {
    return (<div>
      <Header title="Список пользователей"/>
      <main>
        <Users users={this.state.users} />
      </main>
      <aside>
        <AddUser onAdd={this.addUser} />
      </aside>
    </div>)
  }
  addUser(user){
    console.log(user)
  }
}


export default App