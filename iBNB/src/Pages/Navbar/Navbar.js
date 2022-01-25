import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

// navbar area for all

const Navbar = ({ fixed }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const handleClose = () => {
    setMenuOpen(false);
  };
  return (
    <>
      <div className="w-full ">
        <div className="w-full ">
          <nav className="flex flex-wrap items-center justify-between">
            <div
              className={
                "flex flex-wrap items-center m-auto justify-between block container" +
                (menuOpen ? " container_border01" : "  container_border02")
              }
            >
              <div className="w-full flex flex-wrap items-center justify-between padding">
                <button
                  className="text-white cursor-pointer block button"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {!menuOpen ? (
                    <svg
                      width="22"
                      height="12"
                      viewBox="0 0 22 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1H21M1 6H21M1 11H21"
                        stroke="#1F1F23"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.26172L16.701 16.5002M1 16.5002L16.701 1"
                        stroke="#1F1F23"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                    </svg>
                  )}
                </button>
                <div className="flex felx-wrap items-center justify-between">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 0C8.05859 0 0 8.05859 0 18C0 27.9408 8.05859 36 18 36C27.9408 36 36 27.9408 36 18C36 8.05859 27.9408 0 18 0Z"
                      fill="#F3B932"
                    />
                    <path
                      d="M6.58398 17.9782L17.9484 29.3421L29.3122 17.9782L17.9484 6.61383L6.58398 17.9782Z"
                      fill="white"
                    />
                    <path
                      d="M11.9961 17.9782L17.981 23.9632L23.9665 17.9782L17.981 11.9933L11.9961 17.9782Z"
                      fill="#FDC338"
                    />
                    <path
                      d="M15.2715 17.9782L17.9986 20.7059L20.7263 17.9782L17.9986 15.2511L15.2715 17.9782Z"
                      fill="white"
                    />
                    <path
                      d="M25.7807 17.9029L22.6562 14.7785C22.6373 14.7601 22.6144 14.7512 22.5876 14.7512C22.5614 14.7517 22.5391 14.7606 22.5201 14.7791L19.4001 17.8985C19.3811 17.9175 19.3717 17.9398 19.3711 17.9666C19.3711 17.9933 19.3806 18.0162 19.3996 18.0352L22.524 21.1596C22.5424 21.1797 22.5653 21.1898 22.5921 21.1892C22.6194 21.1892 22.6417 21.1786 22.6596 21.158L25.779 18.0385C25.7991 18.0201 25.8092 17.9978 25.8092 17.971C25.8097 17.9442 25.8002 17.9214 25.7807 17.9029ZM22.6596 19.6747C22.6401 19.6915 22.6177 19.6998 22.5926 19.6993C22.567 19.6981 22.5452 19.6892 22.5268 19.6714L20.8934 18.038C20.8756 18.0196 20.8661 17.9978 20.8655 17.9721C20.8644 17.9465 20.8728 17.9242 20.8895 17.9046L22.5223 16.2718C22.5419 16.254 22.5647 16.245 22.591 16.245C22.6172 16.245 22.6401 16.254 22.6596 16.2718L24.293 17.9052C24.3108 17.9247 24.3198 17.947 24.3198 17.9738C24.3198 18 24.3108 18.0224 24.2924 18.0419L22.6596 19.6747Z"
                      fill="white"
                    />
                  </svg>
                  <p className="logo-title">iBNB</p>
                </div>
                <button
                  className="text-white cursor-pointer btn leading-4 text-center  block focus:outline-white "
                  type="button"
                >
                  <p className="btn_title">Dashboard</p>
                </button>
              </div>
              <div
                className={
                  "flex flex-grow items-center justify-left" +
                  (menuOpen ? " flex" : " hidden")
                }
                id="example-navbar-info"
              >
                <div className="flex flex-col list-none items-center mg_bottom opacity-95">
                  <div className="menu_spread" onClick={handleClose}>
                    <NavLink to="/home">Home</NavLink>
                  </div>
                  <div className="menu_spread" onClick={handleClose}>
                    <NavLink to="/Roadmap"> Roadmap </NavLink>
                  </div>
                  <div className="menu_spread" onClick={handleClose}>
                    <NavLink to="/Team">Team</NavLink>
                  </div>
                  <div className="menu_spread" onClick={handleClose}>
                    <NavLink to="/Partnerships">Partnerships</NavLink>
                  </div>
                  <div className="menu_spread" onClick={handleClose}>
                    <NavLink to="/FAQ">FAQ</NavLink>
                  </div>
                  <div className="menu_spread">
                    <NavLink to="/Contact" onClick={handleClose}>
                      Contact
                    </NavLink>
                  </div>
                  <div
                    className="menu_spread menu_spread_border"
                    onClick={handleClose}
                  >
                    <NavLink to="/Whitepaper">Whitepaper ></NavLink>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Navbar;
