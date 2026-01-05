import { useRef, useState } from 'react';
import Header from './Header';
import CheckValidData from '../utils/Validation';
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage]=useState(null);
  const email=useRef(null)
  const password=useRef(null)

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    };
    
    const handlebuttonclick = () => {
       console.log(email.current.value);
        console.log(password.current.value);
      const message=  CheckValidData(email.current.value,password.current.value);
      setErrorMessage(message);
       
  };

  return (
    <div>
      <Header />
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      </div>

      <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute p-12 bg-black/80 my-36 mx-auto right-0 left-0 text-white rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
        ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
        ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <p className='text-red-500'>{errorMessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handlebuttonclick}>
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? 'New to FilimGPT? Sign Up Now'
            : 'Already registered? Sign In Now'}
        </p>
      </form>
    </div>
  );
};
export default Login;
