import React from 'react'
import '../styles/Footer.scss'
function Footer(props) {
    return (
        <div className="footer" id="footer">
            <div className="footer__description">
                <p className="footer__description--line1">Desarrollado por Akurey.com </p>
                <p className="footer__description--line2">Todos los derechos reservados</p>
            </div>
            <p className="footer__terms">Términos y Condiciones</p>
        </div>
    );
}

export default Footer 