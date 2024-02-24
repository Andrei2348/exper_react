import React from 'react';


class AddUser extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            bio: "",
            age: 1,
            isHappy: false
        }
    }
    render() {
      return (
        <form>
            <input placeholder='Имя' onChange={(e) => this.setState({ firstname: e.target.value })}/>
            <input placeholder='Фамилия' />
            <textarea placeholder='Биография'></textarea>
            <input placeholder='Возраст' />
            <label htmlFor='isHappy'>Счастлив?</label>
            <input type="checkbox" id='isHappy' />
            <button type='button'>Добавить</button>
        </form>
      )
    }
  }


  export default AddUser