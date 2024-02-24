import React from 'react';
import User from './user';


class Users extends React.Component {
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
        if(this.state.users.length > 0)
            return (
            <div>
                {this.state.users.map((el) => (
                    <User key={el.id} user={el} />
                ))}
            </div>
            )
            else
            return (<div className="user"><h3>Пользователей нет</h3></div>)
    }
}


export default Users