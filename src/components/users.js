import React from 'react';


class Users extends React.Component {
    users = [
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
    render() {
        if(this.users.length > 0)
            return (
            <div>
                {this.users.map((el) => (
                    <div className='user' key={el.id}>
                        <h3>{el.firstname} {el.lastname}</h3>
                        <p>{el.bio}</p>
                    </div>
                ))}
            </div>
            )
    }
  }


  export default Users