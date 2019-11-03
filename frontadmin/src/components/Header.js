import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class header extends Component {
  render() {
    return (
      <header className="main-header">
        <Link className="logo" to="/">
          <span className="logo-mini">
            <b>AD</b>V
          </span>

          <span className="logo-lg">
            <b>ADVentas</b>
          </span>
        </Link>

        <nav className="navbar navbar-static-top" role="navigation">
          <Link
            to="#"
            className="sidebar-toggle"
            data-toggle="offcanvas"
            role="button"
          >
            <span className="sr-only">Navegación</span>
          </Link>

          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              <li className="dropdown user user-menu">
                <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                  <small className="bg-red">Online</small>
                  <span className="hidden-xs">Juan Carlos Arcila Díaz</span>
                </Link>
                <ul className="dropdown-menu">
                  <li className="user-header">
                    <p>
                      www.incanatoit.com - Desarrollando Software
                      <small>www.youtube.com/jcarlosad7</small>
                    </p>
                  </li>

                  <li className="user-footer">
                    <div className="pull-right">
                      <Link to="#" className="btn btn-default btn-flat">
                        Cerrar
                      </Link>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>


    );
  }
}
