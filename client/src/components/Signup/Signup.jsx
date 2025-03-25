import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Alert,Spinner } from 'flowbite-react';
import OAuth from "../OAuth/OAuth";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields.');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok) {
        navigate('/signin');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };
  return (
    <>
      <section className="flex flex-col md:flex-row mt-6 mb-10 items-center">
        

      <div
          className="bg-white mx-auto rounded-xl w-full md:max-w-md lg:max-w-full md:w-1/2 xl:w-1/3  px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
        >
          <div className="w-full">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              Create  your account
            </h1>

            <form className="mt-6"  onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700">UserName</label>
                <input
                 type='text'
                 placeholder='Username'
                 id='username'
                 onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoFocus
                  // autoComplete
                  required
                />
              </div>
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

              

              <button
                type="submit"  
                disabled={loading}
                className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                  px-4 py-3 mt-6"
              >
                {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign Up'
              )}
              </button>
            </form>

            <hr className="my-6 border-gray-300 w-full" />

            <OAuth/>

            <div className='flex gap-2 text-sm mt-5 mb-10'>
            <span>Have an account?</span>
            <Link to='/signin' className="text-blue-500 hover:text-blue-700 font-semibold"
>
              Sign In
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
    </>
  );
};

export default Signup;
