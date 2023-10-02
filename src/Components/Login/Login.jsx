import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    const [loginError, setLoginError] = useState('')
    const [successLogin, setSuccessLogin] = useState('')


    const handleClick = e => {
        
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        setLoginError('');
        setSuccessLogin('');

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setSuccessLogin('Successfully login')
            })
            .catch(error => {
                setLoginError('Check your mail or password')
            })

    }

    const handleForgetPassword = e =>{
        console.log('send reset email')
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleClick}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p>New to the website Please <Link to='/register' className="text-blue-600">Register</Link></p>
                        {
                            successLogin && <p className="text-xl text-green-700 text-center">{successLogin}</p>
                        }
                        {
                            loginError && <p className="text-red-700 text-center text-xl">{loginError}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;