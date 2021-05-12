import React from 'react';
import FormAgencias from '../FormularioAgencias/FormularioAgencia-Comp';
import FormPlanturistico from '../FormularioPlanturistico/FormularioPlan-Comp';
import ListadoAgencias from '../ListadoAgencias/ListadoAgencias-Comp';
import './ContenedorAgencias-Estilo.css';
 const ContenedorAgencias = (props) =>{


    return (
        <div className='Agen-contenedor'>
           <FormPlanturistico
           onAddPlan={props.onAddPlan}
           />
           <FormAgencias 
            onAddagencia={props.onAddagencia}/>
           <ListadoAgencias 
           PlanesTuristico={props.PlanesTuristico}
           onAddagencia={props.onAddagencia}
           onAddPlan={props.onAddPlan}
           />
        </div>
     );
}

export default ContenedorAgencias;