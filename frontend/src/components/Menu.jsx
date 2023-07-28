import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className='px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium '>
      <div className='flex flex-col md:justify-between md:flex-row gap-4'>
        <Link to='/login'>
          <button className='flex items-center gap-2 bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-500'>
            <FaSignInAlt /> Sign In
          </button>
        </Link>
        <Link to='/register'>
          <button className='flex items-center gap-2 bg-slate-600 px-4 py-2 rounded text-white hover:bg-slate-500'>
            <FaSignOutAlt /> Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
