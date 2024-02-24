import React from 'react';
import Header from './components/header'
import Users from './components/users'
import AddUser from './components/addUser'


class App extends React.Component {
  render() {
    return (<div>
      <Header title="Список пользователей"/>
      <main>
        <Users />
      </main>
      <aside>
        <AddUser />
      </aside>
    </div>)
  }
}


export default App