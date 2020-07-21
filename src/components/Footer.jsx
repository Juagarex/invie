import React, { PureComponent } from 'react'


export default class Footer extends PureComponent {
    render() {
        return (
            <footer className="footer">
      <div className="contenedor">
        <div className="contacto">
          <img data-src="images/invie-white.png|images/invie-white2x.png" alt="logotipo blanco"/>
          <a href="tel:+573024456678"><strong>Telefono</strong> <span>3024456678</span></a>
          <a href="mailto:contacto@invie.com"><strong>E-mail</strong> <span>contacto@invie.com</span></a>
        </div>
        <form className="formulario">
          <div className="col1">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" required id="nombre" className="nombre"/>
            <label htmlFor="email">E-mail</label>
            <input type="email" required id="email" className="email"/>
            <div className="sexo">
              <label htmlFor="mujer">
                <input type="radio" id="mujer" defaultChecked className="sexo" value="mujer"/> mujer
              </label>
              <label htmlFor="hombre">
                <input type="radio" id="hombre" className="sexo" value="hombre"/> hombre
              </label>
            </div>
            <div className="intereses">
              <label htmlFor="cotizacion">
                <input type="checkbox" defaultChecked id="cotizacion" className="intereses" value="cotizacion"/> Cotización
              </label>
              <label htmlFor="reclamos">
                <input type="checkbox" id="reclamos" className="intereses" value="reclamos"/> Reclamos
              </label>
              <label htmlFor="comentarios">
                <input type="checkbox" id="comentarios" className="intereses" value="comantarios"/> Comentarios
              </label>
              <label htmlFor="otros">
                <input type="checkbox" id="otros" className="intereses" value="otros"/> Otros
              </label>
            </div>
          </div>
          <div className="col2">
            <label htmlFor="comentarios">Comentarios</label>
            <textarea className="comantarios" id="comentarios" cols="30" rows="7"></textarea>
            <input type="submit" value="Enviar" className="button"/>
          </div>
        </form>
      </div>
    </footer>
        )
    }
}
