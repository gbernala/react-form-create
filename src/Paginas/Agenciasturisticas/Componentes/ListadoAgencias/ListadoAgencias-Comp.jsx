import React from 'react';
import Agencias from '../Agencias/Agencias-Comp';
import Clientes from '../Clientes/Clientes-Comp';
import PlanTuristico from '../PlanTuristico/PlanTuristico-Comp';
import './ListadoAgencias-Estilo.css';
 const ListadoAgencias = (props) =>{
     //console.log({props.PlanesTuristico});
     
    return (
        <div className='ListadoAgencias'>
           {props.PlanesTuristico.map((agencias,index)=>{
               return (
               <React.Fragment key={agencias.id}>
               <Agencias Agencianombre= {agencias.name}/>
               {agencias.planturistico.map((planturistico, indexplanturistico)=>{
                   return (
                       <React.Fragment key={ planturistico.id}>
                        <PlanTuristico 
                        PlanTuristiconombre= {planturistico.name}/>

                    { planturistico.clientes.map((clientes,indexclientes)=>{
                             return (

                              <Clientes key={clientes.id} 
                              Clientesnombre={clientes.name}
                              Clientesedad={clientes.edad}
                        
                              /> 
                             );
                    })
                           
                        }
                       </React.Fragment>

                    
                   );
               })}
               </React.Fragment>);
           })}

        </div>
     );
}

export default ListadoAgencias;