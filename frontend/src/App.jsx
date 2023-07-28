import { Outlet } from "react-router-dom";
import Header from "./components/Header";
const App = () => {
  return (
    <>
      <Header />
      <div className='my-4'>
        <Outlet />
      </div>
    </>
  );
};

export default App;
