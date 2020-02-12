import React from 'react';
import { useForm } from "react-hook-form";

const CreateUser = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    console.log(values);
  };
//   name
//   email
//   role -> publisher/user
//   password

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label>Name</label><br/>
            <input
                name="name"
                ref={register({
                required: 'Required',
                })}
            />
            <span>{errors.email && errors.email.message}</span>
        </div>

        <div>
            <label htmlFor="email">Email</label><br/>
            <input
                name="email"
                ref={register({
                required: 'Required',
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "invalid email address"
                }
                })}
            />
            <span>{errors.email && errors.email.message}</span>
        </div>

        <div>
            <label htmlFor="role">Role</label><br/>
            <select name="role" ref={register({ required: true})}>
                <option value="user">User</option>
                <option value="publisher">Publisher</option>
            </select>

            <span>{errors.role && errors.role.message}</span>
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
            <label htmlFor="confirmPassword">Confirm Password</label><br/>
            <input
                type="password"
                name="confirmPassword"
                ref={register({
                required: 'Required'
                })}
            />
            <span>{errors.confirmPassword && errors.confirmPassword.message}</span>
        </div>

        <button type="submit">Submit</button>
    </form>
  );
};

export default CreateUser;