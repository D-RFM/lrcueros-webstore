import React, { Component } from 'react'

export default class CategoriasList extends Component {
    render() {
        return (
            <div className="content-wrapper">
            <section className="content">
              <div className="row">
                <div className="col-md-12">
                  <div className="box">
                    <div className="box-header with-border">
                      <h3 className="box-title">Sistema de Ventas</h3>
                      <div className="box-tools pull-right">
                        <button className="btn btn-box-tool" data-widget="collapse">
                          <i className="fa fa-minus"></i>
                        </button>

                        <button className="btn btn-box-tool" data-widget="remove">
                          <i className="fa fa-times"></i>
                        </button>
                      </div>
                    </div>

                    <div className="box-body">
                      <div className="row">
                        <div className="col-md-12">

                            <h3>Categorias</h3>   
                              

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )
    }
}
