import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../slices/usersApiSlice";
import { toast } from "react-toastify";
import { setCredentials } from "../slices/authSlice";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [register, { isLoading }] = useRegisterMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/profile");
    }
  }, [navigate, userInfo]);

  const registerHandler = async (e) => {
    e.preventDefault;
    if (password !== confirmPassword) {
      toast.error("passwords don't match!");
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        toast.success("Registered Successfully");
        navigate("/");
      } catch (err) {
        toast.error(err?.data?.message || err?.error);
      }
    }
  };

  return (
    <div className='py-5'>
      <section className='flex justify-center '>
        <div className='p-5 m-4 bg-slate-200 w-10/12 md:w-2/6 shadow-lg rounded'>
          <h1 className='mb-4 text-3xl font-bold'>Register</h1>
          <div className='flex flex-col gap-4'>
            <input
              className='w-full p-3 rounded outline-blue-600'
              placeholder='Name'
              value={name}
              required
              type='text'
              onChange={(e) => setName(e.target.value)}
            />
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
            <input
              type='password'
              className='w-full p-3 rounded outline-blue-600'
              placeholder='Confirm Password'
              value={confirmPassword}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              className='bg-blue-600 px-4 py-3 rounded text-white hover:bg-blue-500'
              onClick={(e) => registerHandler(e)}
            >
              {isLoading ? "Working..." : "Sign Up"}
            </button>
            <Link className='text-blue-600' to='/login'>
              Already Registered? Sign In
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterScreen;
