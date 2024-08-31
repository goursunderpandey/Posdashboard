import React from 'react';

const Signup = () => {
    const [state, setState] = React.useState({
        name: "",
        email: "",
        password: ""
      });
      const handleChange = evt => {
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
      };
    
      const handleOnSubmit = evt => {
        evt.preventDefault();
    
        const { name, email, password } = state;
        alert(
          `You are sign up with name: ${name} email: ${email} and password: ${password}`
        );
    
        for (const key in state) {
          setState({
            ...state,
            [key]: ""
          });
        }
      };
  return (
    <div className="form-container sign-up-container">
    <form onSubmit={handleOnSubmit}>
      <h1>Create Account</h1>
     
      <input
        type="text"
        name="name"
        className='form-control m-2 w-4'
        value={state.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        className='form-control m-2 w-4'
        value={state.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        className='form-control m-2 w-4'
        value={state.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button>Sign Up</button>
    </form>
  </div>
  )
}

export default Signup
