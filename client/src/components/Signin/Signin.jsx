import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Alert,Spinner } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../../redux/user/userSlice';
import OAuth from "../OAuth/OAuth";
import TechCanvas from "../canvas/Tech";
const Signin = () => {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure('Please fill all the fields'));
    }
    try {
      dispatch(signInStart());

      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }
      
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className="flex lg:flex-row lg:ml-4 ">
    <div className=" lg:w-1/2 hidden lg:pl-32 lg:block"><TechCanvas/></div>
      <section className="flex flex-col md:flex-row lg:mb-48 mb-10 items-center lg:w-1/3 w-3/4 pt-4 mx-auto lg:mx-0 ">
        <div
          className="bg-white mx-auto rounded-xl w-full md:max-w-md lg:max-w-full md:w-3/4 xl:w-11/12  px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
        >
          <div className="w-full ">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              Sign in to your account
            </h1>

            <form className="mt-6"  onSubmit={handleSubmit}>
            <div>
                <label className="block text-gray-700 mt-1">Email Address</label>
                <input
                  type='email'
                  placeholder='name@company.com'
                  id='email'
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoFocus
                  // autoComplete
                  required
                />
              </div>


              <div className="mt-3">
                <label className="block text-gray-700">Password</label>
                <input
                   type='password'
                   placeholder='Password'
                   id='password'
                   onChange={handleChange}
                  minLength="6"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                    focus:bg-white focus:outline-none"
                  required
                />
              </div>


              {/* <div className="text-right mt-2">
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                >
                  Forgot Password?
                </a>
              </div> */}

              <button
                type="submit"
                disabled={loading}
                className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                  px-4 py-3 mt-6"
              >
                {loading ? (
                  <>
                    <Spinner size="sm" />
                    <span className="pl-3">Loading...</span>
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            <hr className="my-6 border-gray-300 w-full" />

            <OAuth/>

            <div className="mt-8 mb-10">
              Create an account
              <Link
                to="/signup"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Sign up
              </Link>
            </div>
            {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signin;
