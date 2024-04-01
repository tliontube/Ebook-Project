import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
    // get user from localStorage 
    const user = JSON.parse(localStorage.getItem('users'));

    // navigate 
    const navigate = useNavigate();

    // logout function 
    const logout = () => {
        localStorage.clear('users');
        navigate("/login")
    }


    // navList Data
    const navList = (
        <ul className="flex space-x-7 text-white font-medium text-md px-5 z-10">
            {/* Home */}
            <li>
                <Link to={'/'}>Home</Link>
            </li>

            {/* All Product */}
            <li>
                <Link to={'/questions'}>FAQ</Link>
            </li>

            {/* Signup
            {!user ? <li>
                <Link to={'/signup'}>Signup</Link>
            </li> : ""} */}

            {/* login */}
            {/* {!user ? <li>
                <Link to={'/login'}>Admin-Login</Link>
            </li> : ""} */}


            {/* Admin */}
            {user?.role === "admin" && <li>
                <Link to={'/admin-dashboard'}>Admin</Link>
            </li>}

            {/* logout */}
            {user && <li className=" cursor-pointer" onClick={logout}>
                logout
            </li>}

        </ul>
    )
    return (
        <nav className="bg-pink-600 sticky top-0 z-10">
            {/* main  */}
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
                {/* left  */}
                <div className="left py-3 lg:py-0">
                    <Link to={'/'}>
                        <h2 className=" font-bold text-white text-2xl text-center">PDF My Book</h2>
                    </Link>
                </div>

                {/* right  */}
                <div className="right flex justify-center mb-4 lg:mb-0">
                    {navList}
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
