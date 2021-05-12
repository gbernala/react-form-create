import React from 'react';
import './Agencias-Estilo.css';
const Agencias = (props) =>{

   return (
     <div className = 'Agencia-contenedor'>
     { props.Agencianombre }
     </div>
   );
}

export default Agencias;