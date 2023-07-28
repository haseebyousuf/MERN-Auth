import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className='py-5'>
      <section className='flex justify-center'>
        <div className='p-5 flex flex-col items-center bg-slate-200 w-4/5 shadow-lg'>
          <h1 className='text-center mb-4 text-3xl font-bold'>
            MERN Authentication
          </h1>
          <p className='text-center mb-4 text-lg'>
            This is a boilerplate for MERN authentication that stores a JWT in
            an HTTP-Only cookie. It also uses Redux Toolkit and the React
            Bootstrap library
          </p>
          <div className='flex gap-4'>
            <Link to='/login'>
              <button className='bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-500'>
                Sign In
              </button>
            </Link>
            <Link to='/register'>
              <button className='bg-slate-600 px-4 py-2 rounded text-white hover:bg-slate-500'>
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
