import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setCredentials } from "../slices/authSlice";
import { useUpdateUserMutation } from "../slices/usersApiSlice";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo.name, userInfo.email]);

  const updateHandler = async (e) => {
    e.preventDefault;
    if (password !== confirmPassword) {
      toast.error("passwords don't match!");
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          name,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        toast.success("Updated");
      } catch (err) {
        toast.error(err?.data?.message || err?.error);
      }
    }
  };

  return (
    <div className='py-5'>
      <section className='flex justify-center '>
        <div className='p-5 m-4 bg-slate-200 w-10/12 md:w-2/6 shadow-lg rounded'>
          <h1 className='mb-4 text-3xl font-bold'>Update Profile</h1>
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
              onClick={(e) => updateHandler(e)}
            >
              {isLoading ? "Updating..." : "Update "}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileScreen;
