import Link from "next/link";
import { useRouter } from "next/router";
import ThemeContext, { themes } from "@/contexts/ThemeContext";
import { useContext } from "react";
import AuthContext from "@/contexts/AuthContext";

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { auth, setAuth, logout } = useContext(AuthContext);

  const router = useRouter();
  const activeStyle = {
    color: "white",
    fontWeight: 800,
    backgroundColor: "blue",
    borderRadius: "10px",
  };
  console.log(router);
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  href="/products"
                  style={
                    router.asPath.indexOf("/products") === 0 ? activeStyle : {}
                  }
                >
                  products
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/">
                  Links
                </a>
              </li>

              <li className="nav-item">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setTheme(
                      theme.name === "light" ? themes.dark : themes.light
                    );
                  }}
                  style={{
                    color: theme.color,
                    backgroundColor: theme.backgroundColor,
                  }}
                >
                  toggle
                </button>
              </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              {auth.id === 0 ? (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    href="/login"
                    style={router.asPath === "/login" ? activeStyle : {}}
                  >
                    登入
                  </Link>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <a className="nav-link">{auth.nickname}</a>
                  </li>
                  <li className="nav-item">
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        logout();
                      }}
                    >
                      登出
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
