import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import Wrapper from "../styles/Navbar";
import GoogleAuth from "./GoogleAuth";
import { AppsIcon, HamburgerIcon, LogoIcon, SettingsIcon } from "./Icons";
import Search from "./Search";
import UploadVideo from "./UploadVideo";
import UserDropdown from "./UserDropdown";

function Navbar({ toggleSidebarOpen }) {
  const user = useAuth();

  return (
    <Wrapper>
      <div className="logo flex-row">
        <HamburgerIcon
          onClick={toggleSidebarOpen}
          className="toggle-navhandler"
        />
        <span>
          <NavLink to="/">
            <LogoIcon
              style={{
                width: 80,
                height: 24,
              }}
            />
          </NavLink>
        </span>
      </div>

      <Search />

      <ul>
        <li>{user ? <UploadVideo /> : <AppsIcon />}</li>
        <li>{user ? <AppsIcon /> : <SettingsIcon />}</li>
        <li>{user ? <UserDropdown user={user} /> : <GoogleAuth />}</li>
      </ul>
    </Wrapper>
  );
}

export default Navbar;
