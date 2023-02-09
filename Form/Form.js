import React, { Component } from 'react'

 class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'',
         description:'',
         hobbies:'',
         gender:'',
         agecat:'',
         food:'',
         names:'React'
        }
        this.foodie = this.foodie.bind(this)
        this.onValueChange = this.onValueChange.bind(this)
    }

    userName = e => {
        this.setState({
            name: e.target.value
        })
    }

    userdescription = e => {
        this.setState({
            description : e.target.value
        })
    }

    userHobbie = e =>{
        this.setState({
            hobbies : e.target.value
        })
    }

    foodie = e=>{
       this.setState({
        food:e.target.value
      })
    }

    gender = e =>{
      this.setState({
        names:e.target.value
      })
    }
     
      
    submit = e =>{
        e.preventDefault()
        alert(`Thank you ${this.state.name} for filling the form`)
    }

    onValueChange=e=> {
      this.setState({
        selectedOption: e.target.value
      })
    }

  


  render() {
    
    return (
      <form onSubmit={this.submit}>
      <h1><center><u>Registration Form</u></center></h1>
      <div>
        <br/><label><h3>Username:</h3></label>
       <input type = 'text' value = {this.state.name} onChange = {this.userName} placeholder='Enter username'/>
      </div>

      <div>
        <label><h3>Description:</h3></label>
       <textarea value = {this.state. description} onChange = {this.userdescription} placeholder='Enter about yourself'/>
      </div>

      <div>
        <label><h3>Hobbies:</h3></label>
       <select value = {this.state.hobbies} onChange = {this.userHobbie}>
       <option>Reading</option>
       <option>Writing</option>
       <option>Drawing</option>
       <option>Dancing</option>
       </select>
      </div>

      <div>
        <label><h3>Favorite Food:</h3></label>
        Biriyani  <input type ="checkbox"  value={this.state.food}   onChange={this.foodie} /> 
        Noodles   <input type ="checkbox"  value={this.state.food}   onChange={this.foodie} />
        Fried Rice<input type ="checkbox"  value={this.state.food}   onChange={this.foodie} />
      </div>

      <div className="radio">
      <label><h3>Select Gender:</h3></label>
      <label>
       <input type="radio" value="Male" checked={this.state.selectedOption === "Male"} onChange={this.onValueChange}
            />
            Male </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Female"
              checked={this.state.selectedOption === "Female"}
              onChange={this.onValueChange}
            />
            Female
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Other"
              checked={this.state.selectedOption === "Other"}
              onChange={this.onValueChange}
            />
            Other
          </label>
        </div>


      <br/>
      <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form