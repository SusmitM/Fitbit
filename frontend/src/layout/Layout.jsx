import '../App.css';

import Sidebar from '../components/Sidebar';
const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-1 bg-red-400">{children}</div>
    </div>
  );
};

export default Layout;
