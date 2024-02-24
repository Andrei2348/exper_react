import React from 'react';
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'


class User extends React.Component {
    render() {
      return (
        <div className='user'>
            <IoCloseCircleSharp className="delete-icon" />
            <IoHammerSharp className="edit-icon" />
            <h3>{this.props.user.firstname} {this.props.user.lastname}</h3>
            <p>{this.props.user.bio}</p>
            <b>{this.props.user.isHappy ? 'Счастлив :)' : 'Не особо :('}</b>
        </div>
      )
    }
  }


  export default User