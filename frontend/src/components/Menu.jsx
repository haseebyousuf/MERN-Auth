import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import { toast } from "react-toastify";

const Menu = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [logoutApiCall] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      toast.error("User Logged Out");
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err?.error);
    }
  };
  return (
    <div className='px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium transition-all '>
      <div className='flex flex-col md:justify-between items-center md:flex-row gap-4'>
        {userInfo ? (
          <>
            <Link to='/profile' className='text-lg font-semibold'>
              {userInfo.name}
            </Link>
            <button
              className='flex items-center gap-2 bg-red-600 px-4 py-2 rounded text-white hover:bg-red-500'
              onClick={logoutHandler}
            >
              <FaSignInAlt /> Logout
            </button>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Menu;
