import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('')
    const [showPassword, setShowPassword] = useState(false)


    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const termsAccept = e.target.terms.checked;
        console.log(email, password, termsAccept)
        // clear error
        setRegisterError('');
        setSuccess('')

        // password
        if (password.length < 6) {
            setRegisterError('password should be at least 6 characters or longer')
            return;
        }
        // uparcase carecter check
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Please input at least 1 Upparcase carecter')
            return;
        }else if(!termsAccept){
            setRegisterError('Please accept our terms and conditions')
            return;
        }

        // create user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('User successfully Create')
            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message)
            })
    }

    return (
        <div className="w-[40%] mx-auto ">
            <h2 className="text-3xl text-center mb-14">Please register</h2>

            <div className="">
                <form className="" onSubmit={handleRegister}>
                    <input className="w-full rounded-xl py-3 pl-3" type="email" name="email" id="" placeholder="Email Address" required />
                    <br /><br />
                    <div className="relative">
                        <input className="w-full rounded-xl py-3 pl-3"
                            type={showPassword ? "text" : "password"}
                            name="password" id="" placeholder="Password" required />
                        <span className="absolute top-4 right-7" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span>
                    </div>
                    <br /><br />
                    <div className="mb-2">
                        <input className="mr-2" type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms">Accept our Terms and Condition</label>
                    </div>
                    <input className="w-full rounded-xl btn-secondary py-3 mb-10" type="submit" value="REGESTER" />
                </form>
                <p>Already have an account? Please <Link to='/login' className="text-blue-600">Login</Link></p>
                {
                    registerError && <p className="text-red-700 text-2xl">{registerError}</p>
                }
                {
                    success && <p className="text-green-800 text-2xl">{success}</p>
                }
            </div>

        </div>
    );
};

export default Register;