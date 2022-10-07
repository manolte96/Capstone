import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography  } from "@mui/material"
import cookie from "cookie"
import Login from './Login'

const Navigation = () => {
    const navigate = useNavigate();
  
    return (
      <AppBar position="relative">
        <Toolbar>
           <Typography variant="h6" style={{ flexGrow: "1" }}>
            ./jiuJitsu
         </Typography>
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/">Home</Link>
            </li>
            <li
              className="nav-list-item"
              onClick={() => {
                document.cookie = cookie.serialize("loggedIn", null, {
                  maxAge: 0,
                });
                navigate("./Login");
              }}
            >
              Logout
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Navigation;
  