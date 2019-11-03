import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Aside extends Component {
    render() {
        return (
          <aside className="main-sidebar">
            <section className="sidebar">
              <ul className="sidebar-menu">
                <li className="header"></li>

                <li className="treeview">
                  <Link to="#">
                    <i className="fa fa-laptop"></i>
                    <span>Almacén</span>
                    <i className="fa fa-angle-left pull-right"></i>
                  </Link>
                  <ul className="treeview-menu">
                    <li>
                      <Link to="/almacen/articulo">
                        <i className="fa fa-circle-o"></i> Artículos
                      </Link>
                    </li>
                    <li>
                      <Link to="/almacen/categoria">
                        <i className="fa fa-circle-o"></i> Categorías
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="treeview">
                  <Link to="#">
                    <i className="fa fa-th"></i>
                    <span>Compras</span>
                    <i className="fa fa-angle-left pull-right"></i>
                  </Link>
                  <ul className="treeview-menu">
                    <li>
                      <Link to="compras/ingreso">
                        <i className="fa fa-circle-o"></i> Ingresos
                      </Link>
                    </li>
                    <li>
                      <Link to="compras/proveedor">
                        <i className="fa fa-circle-o"></i> Proveedores
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="treeview">
                  <Link to="#">
                    <i className="fa fa-shopping-cart"></i>
                    <span>Ventas</span>
                    <i className="fa fa-angle-left pull-right"></i>
                  </Link>
                  <ul className="treeview-menu">
                    <li>
                      <Link to="ventas/venta">
                        <i className="fa fa-circle-o"></i> Ventas
                      </Link>
                    </li>
                    <li>
                      <Link to="ventas/cliente">
                        <i className="fa fa-circle-o"></i> Clientes
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="treeview">
                  <Link to="#">
                    <i className="fa fa-folder"></i> <span>Acceso</span>
                    <i className="fa fa-angle-left pull-right"></i>
                  </Link>
                  <ul className="treeview-menu">
                    <li>
                      <Link to="/user">
                        <i className="fa fa-circle-o"></i> Usuarios
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-plus-square"></i> <span>Ayuda</span>
                    <small className="label pull-right bg-red">PDF</small>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-info-circle"></i> <span>Acerca De...</span>
                    <small className="label pull-right bg-yellow">IT</small>
                  </Link>
                </li>
              </ul>
            </section>
          </aside>
        );
    }
}
