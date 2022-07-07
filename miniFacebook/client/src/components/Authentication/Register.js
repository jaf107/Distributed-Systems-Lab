import React, { useState } from 'react'
import Header from '../Header/Header'
import { useDispatch, useSelector } from "react-redux";
import { register } from '../../actions/userActions';

const Register = () => {
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })
    const { name, email, password } = user;

    const registerSubmit = (e) => {
        e.preventDefault();

        const myForm = new FormData();
        myForm.set("name", name);
        myForm.set("email", email);
        myForm.set("password", password);

        dispatch(register(myForm));
    };
    const registerDataChange = (e) => {

        setUser({ ...user, [e.target.name]: e.target.value });

    };
    return (
        <div >
            <Header />
            <div className='container mt-5'>
                <h4 className='text-center'>Register Page</h4>
                <form>
                    <div class="mb-3">
                        <label class="form-label">Full Name</label>
                        <input
                            type="text"
                            class="form-control"
                            aria-describedby="emailHelp"
                            name="name"
                            value={name} onChange={registerDataChange}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" name="email"
                            value={email} class="form-control" onChange={registerDataChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" name="password"
                            value={password}
                            onChange={registerDataChange} class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={registerSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Register