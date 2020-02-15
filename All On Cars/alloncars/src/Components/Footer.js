import React from "react";

function Footer() {
  return (
    <div class="thead-light container footer fixed-bottom">

      <div className="leftBox" class="float-left">
        <img src="..." alt="Logotipo de All On Cars" />
      </div>

      <div className="rigthBox " class="float-right">
        <table className="table table-borderless">
          <thead class="">
            <tr>
              <th scope="col">Nosotros</th>
              <th scope="col">Facebook</th>
            </tr>
            <tr>
              <th scope="col">Producto</th>
              <th scope="col">Youtube</th>
            </tr>
            <tr>
              <th scope="col">Contacto</th>
              <th scope="col">Instagram</th>
            </tr>
          </thead>
        </table>
      </div>

    </div>
  );
}

export default Footer;
