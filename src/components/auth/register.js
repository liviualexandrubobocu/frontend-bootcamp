import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

const Register = () => {
  const { handleSubmit, register, errors } = useForm();
  
  const history = useHistory();
  
  const onSubmit = values => {
    console.log(values);
    const isRegistered = true;
    if(isRegistered){
        history.push('/login');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label htmlFor="email">Email</label><br/>
            <input
                name="email"
                ref={register({
                required: 'Required',
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Please enter a valid email address"
                }
                })}
            />
            <span>{errors.email && errors.email.message}</span>
        </div>

        <div>
            <label htmlFor="password">Password</label><br/>
            <input
                type="password"
                name="password"
                ref={register({
                required: 'Required'
                })}
            />
            <span>{errors.password && errors.password.message}</span>
        </div>

        <div>
            <label htmlFor="password">Confirm Password</label><br/>
            <input
                type="password"
                name="confirm_password"
                ref={register({
                required: 'Required'
                })}
            />
            <span>{errors.confirm_password && errors.confirm_password.message}</span>
        </div>


        <button type="submit">Submit</button>
    </form>
  );
};

export default Register;