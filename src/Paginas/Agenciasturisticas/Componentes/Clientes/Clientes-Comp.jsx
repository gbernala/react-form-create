import React from 'react';
import './Clientes-Estilo.css';
const Clientes = (props) =>{

   return (
     <div className = 'Clientes-contenedor'>
     { props.Clientesnombre }
     {'........'}
     {props.Clientesedad}
     </div>
   );
}

export default Clientes;