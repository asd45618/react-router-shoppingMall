import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
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
  const goToLogin = () => {
    navigate("/login");
  };
  const search = (event) => {
    if (event.key === "Enter") {
      //입력한 검색어를 읽어와서 url을 바꿔준다.
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      <div>
        <div className="loginButton">
          <FontAwesomeIcon icon={faUser} />
          <div className="navBarLogin" onClick={goToLogin}>
            로그인
          </div>
        </div>
      </div>
      <div className="navSection">
        <img
          className="navBarImg"
          width="100px"
          onClick={() => {
            navigate("/");
          }}
          src="data:image/png;base64,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"
        />
      </div>
      <div className="menuArea">
        <div className="menuList">
          {menuList.map((menu) => (
            <div>{menu}</div>
          ))}
        </div>
        <div className="navSearch">
          <FontAwesomeIcon icon={faSearch} />
          <input
            className="navInput"
            placeholder="제품 검색"
            type="text"
            onKeyPress={(evnet) => search(evnet)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
