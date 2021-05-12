import React from 'react';
import './PlanTuristico-Estilo.css';
const PlanTuristico = (props) =>{

   return (
     <div className = 'PlanTuristico-contenedor'>
     { props.PlanTuristiconombre }
     </div>
   );
}

export default PlanTuristico;