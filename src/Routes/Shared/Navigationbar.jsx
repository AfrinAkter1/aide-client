import { Link } from "react-router-dom";
import { FaListUl, FaSearch, FaShoppingCart, FaUserAlt } from 'react-icons/fa';

const Navigationbar = () => {
    return (
        <div className="mx-20">
          <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <input type="text" placeholder="Search esentials, groceries, more..." className="input input-bordered input-info w-full max-w-xs" />
      <div className="lg:hidden space-y-4">
      <Link className="flex items-center gap-2"><FaShoppingCart className="text-blue-500"></FaShoppingCart> Cart</Link>
   <Link className="flex items-center gap-2"><FaUserAlt className="text-blue-500"></FaUserAlt> Sign up/ Sign In</Link>
   <Link className="flex items-center gap-2"><FaUserAlt className="text-blue-500"></FaUserAlt> Admin</Link>
      </div>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-2xl text-blue-500 font-bold">Freshly</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <FaSearch className="text-xl text-slate-400 relative top-3 left-8"></FaSearch>
    <input type="text" placeholder="Search esentials, groceries, more..." className="input input-bordered input-info w-[490px]  px-12" />
    <FaListUl className="text-xl text-slate-400 relative top-3 right-8"></FaListUl>
    </ul>
  </div>
  <div className="navbar-end space-x-6 hidden lg:flex ms-0">
    <Link className="flex items-center gap-2"><FaShoppingCart className="text-blue-500"></FaShoppingCart> Cart</Link>
   <Link className="flex items-center gap-2 "><FaUserAlt className="text-blue-500 text-3xl"></FaUserAlt> Sign up/ Sign In</Link>
   <div className="divider lg:divider-horizontal"></div> 
   <Link className="flex items-center gap-2"><FaUserAlt className="text-blue-500"></FaUserAlt> Admin</Link>
   <div className="divider lg:divider-horizontal"></div> 
  </div>
</div>
        </div>
    );
};

export default Navigationbar;