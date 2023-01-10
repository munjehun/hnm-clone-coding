import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Navbar({ authenticate, setAuthenticate }) {
  const navigate = useNavigate();

  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  return (
    <div>
      <div className="login-button">
        <FontAwesomeIcon icon={faUser} />
        {authenticate ? (
          <span onClick={() => setAuthenticate(false)}>로그아웃</span>
        ) : (
          <span onClick={() => navigate("/login")}> 로그인</span>
        )}
      </div>
      <div className="nav-logo">
        <img
          onClick={() => navigate("/")}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png"
          alt="H&M logo"
        />
      </div>
      <div className="nav-menu">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
        <div className="nav-search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" placeholder="제품검색" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
