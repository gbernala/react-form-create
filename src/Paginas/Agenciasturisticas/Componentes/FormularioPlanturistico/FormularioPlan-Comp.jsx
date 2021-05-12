import React, { useState } from 'react';
import './FormularioPlan-Estilo.css';
 const FormPlanturistico = (props) =>{

   const [Agencias,setagencias]= useState ('ag1');
   const [name,setname]= useState ();


   const addPlanturistico = (event)=>{
      event.preventDefault();
      const newPlan= {   
         id: name,
         name: name,
      };

props.onAddPlan(newPlan , Agencias);
}
 
    return (
        <div className='FormularioPlanturistico'>
         <form className = 'form'>
            <h1>
            Plan Turistico
            </h1>
      <br/>
               <span>
               Agencias
               </span>
                
            <br/>
               <select
                value={Agencias}
                onChange={(event)=>{
                   setagencias(event.target.value);
                   
                }
               }
               >

               <option value='age1'>Aviatur</option>
               <option value='age2'>Alcones</option>
               <option value='age3'>Onvacation</option>
            </select>
               
            
            <br/>
            <span>
               Nombre del Planturistico
            </span>

            <br/>

      <input type ='text'
             value={name}
             onChange={(event)=>{
                setname(event.target.value);
                
             }
            }
              
              />


      <br/>
   

      <br/>
      
            
            <br/>
            <button
            onClick={addPlanturistico}
            >Agregar</button>
         </form>
        </div>
     );
         }

export default FormPlanturistico;