import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { useEffect } from "react";
const LoginScreen = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/profile");
    }
  }, [navigate, userInfo]);
  const handleLogin = async (e) => {
    e.preventDefault;
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success("User Logged In");
      navigate("/profile");
    } catch (err) {
      toast.error(err?.data?.message || err?.error);
    }
  };
  return (
    <div className='py-5'>
      <section className='flex justify-center '>
        <div className='p-5 m-4 bg-slate-200 w-10/12 md:w-2/6 shadow-lg rounded'>
          <h1 className='mb-4 text-3xl font-bold'>Login</h1>
          <div className='flex flex-col gap-4'>
            <input
              className='w-full p-3 rounded outline-blue-600'
              placeholder='Email'
              value={email}
              required
              type='email'
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              className='w-full p-3 rounded outline-blue-600'
              placeholder='Password'
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className='bg-blue-600 px-4 py-3 rounded text-white hover:bg-blue-500'
              onClick={(e) => handleLogin(e)}
            >
              {isLoading ? "Working..." : "Sign In"}
            </button>
            <Link className='text-blue-600' to='/register'>
              New User? Sign Up
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginScreen;
