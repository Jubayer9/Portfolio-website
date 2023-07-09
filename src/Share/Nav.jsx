import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar bg-base-100 Skills">
      <div className="flex-1">
        <Link to='/' className="btn  Jubayer btn-ghost normal-case hover:bg-cyan-400 hover:text-black text-xl">Jubayer Portfolio</Link>
      </div>
      <div className="flex-none ">
        <ul className="menu md:menu-horizontal px-1">
          <li><Link to='/' >Home</Link></li>
          <li><Link to='/about'> About</Link></li>
          <li><Link to='/skills' > Skills</Link></li>
          <li><Link to='/projects' >Projects</Link></li>
          <li><Link to='/contact' >Contact</Link></li>

        </ul>
      </div>
    </div>
  );
};

export default Nav;