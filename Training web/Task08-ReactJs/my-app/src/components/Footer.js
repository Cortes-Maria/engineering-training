import React from 'react'
import '../styles/Footer.scss'
function Footer(props) {
    return (
        <div className="footer">
            <div className="footer__description">
                <p className="footer__text">Desarrollado por Akurey.com </p>
                <p className="footer__text">Todos los derechos reservados</p>
            </div>
            <p className="footer__terms">Términos y Condiciones</p>
        </div>
    );
}

export default Footer 