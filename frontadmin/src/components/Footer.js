import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Footer extends Component {
    render() {
        return (
          <footer className="main-footer">
            <div className="pull-right hidden-xs">
              <b>Version</b> 2.3.0
            </div>
            <strong>
              Copyright &copy; 2015-2020{" "}
              <Link to="www.incanatoit.com">IncanatoIT</Link>.
            </strong>{" "}
            All rights reserved.
          </footer>
        );
    }
}
