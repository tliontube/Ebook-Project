import { Link } from "react-router-dom";

const Footer = () => {
  // get user from localStorage
  const user = JSON.parse(localStorage.getItem("users"));
  return (
    <div style={{marginTop:"50px"}}>
      {/* footer  */}
      <footer className="text-gray-600 body-font bg-pink-600">
        {/* main  */}
        <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
          {/* logo  */}
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <span className="text-xl font-bold">PDF My Book</span>
          </a>
          {/* para  */}
          <p className="text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 PDF My Book —
            <Link
              to={"/"}
              className="text-gray-100 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @PdfMyBook
            </Link>
          </p>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start flex items-center sm:flex-row flex-col">
            {/* login */}
            {!user ? (
             
                <Link
                  to={"/login"}
                  className=" text-gray-100 cursor-pointer justify-center sm:justify-start"
                >
                  Admin-Login
                </Link>
             
            ) : (
              ""
            )}

            <p className="text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
              Made with Love
            </p>

            <a className="ml-3 text-gray-100 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6s-8 4.5-8 8c0 2.21 1.79 4 4 4s4-1.79 4-4c0 1.105.895 2 2 2s2-.895 2-2c0 2.21 1.79 4 4 4s4-1.79 4-4c0-3.5-8-8-8-8z"
                />
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
