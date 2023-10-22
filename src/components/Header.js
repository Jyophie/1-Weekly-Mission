import React, { useState } from "react";
import "./Header.css";
import logoImg from "../img/logo.png";

const Header = ({ account, userErrorMessage }) => {
  const { name, email, profileImageSource } = account;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });
  return (
    <header>
      <div className="inner">
        <h1>
          <a href="/">
            <img src={logoImg} alt="logo" />
          </a>
        </h1>
        <div className="header-login">
          {!account ? (
            <button type="button">로그인</button>
          ) : (
            <>
              <img
                className="profile_logo"
                src={profileImageSource}
                alt={name}
              />
              {windowWidth > 390 ? (
                <span className="profile_id">{email}</span>
              ) : null}
            </>
          )}
          {userErrorMessage && <span>{userErrorMessage.message}</span>}
        </div>
      </div>
    </header>
  );
};

export default Header;
