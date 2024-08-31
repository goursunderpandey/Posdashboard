import React, { useState } from 'react'


const Login = () => {
    const [state, setState] = useState({
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
    
        const { email, password } = state;
        alert(`You are login with email: ${email} and password: ${password}`);
    
        for (const key in state) {
          setState({
            ...state,
            [key]: ""
          });
        }
      };
  return (
    <div className="form-container sign-in-container">
    <form onSubmit={handleOnSubmit}>
      <h1>Sign in</h1>
      
      <input
        type="email"
        placeholder="Email"
        className='form-control m-2 w-4'
        name="email"
        value={state.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        className='form-control m-2 w-4'
        placeholder="Password"
        value={state.password}
        onChange={handleChange}
      />
      
      <button>Sign In</button>
    </form>
  </div>
  )
}

export default Login
