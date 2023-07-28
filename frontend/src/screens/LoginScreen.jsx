import { useState } from "react";

const LoginScreen = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
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
            <button className='bg-blue-600 px-4 py-3 rounded text-white hover:bg-blue-500'>
              Sign In
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginScreen;
