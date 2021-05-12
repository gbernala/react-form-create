import React, { useState } from 'react';
import ContenedorAgencias from './Componentes/ContenedorAgencias/ContenedorAgencias-Comp';


 const Paginaprin = () =>{

let agencias=[
         
        {   id:'ag1',
            name :'Aviatur',
            planturistico:[
              {   id:'pl1',
                  name: 'guajira', 
                  clientes:[{ id:'cl1',
                            name: 'geraldy',
                            edad: 22,
                        },
                        {   id:'cl2',
                            name: 'Antonio',
                            edad: 20,
                        },
                        {   id:'cl3',
                            name: 'Karol',
                            edad: 19,
                        },
                    ]
              }
            ]
    
        },

         {  id:'ag2',
            name :'Alcones',
            planturistico:[
              {   id:'pl2',
                  name: 'manizales', 
                  clientes:[{ 
                      id:'cl4',
                      name: 'Andrea',
                      edad: 30,
                  },
                  { id:'cl5',
                    name: 'Lina',
                    edad: 18,
                },
                {   id:'cl6',
                    name: 'Pablo',
                    edad: 30,
                },
                ]
              }
            ]
         },

         {  id:'ag3',
            name :'Onvacation',
            planturistico:[
              {   id:'pl3',
                  name: 'Medellin', 
                  clientes:[{ 
                      id:'cl7',
                      name: 'Jose',
                      edad: 15,
                  },
                  { id:'cl8',
                    name: 'Sandra',
                    edad: 18,
                },
                {   id:'cl9',
                    name: 'Manuel',
                    edad: 23 ,
                },
                ]
              }
            ]
         },
    ];

    const [clientes,setclientes]= useState(agencias);

    return (
      <div>
        <ContenedorAgencias
         PlanesTuristico={clientes}
         onAddagencia={(newagenciaobj, planId, ageId)=>{  
            const NuevoCliente = [];
            const planturistico = [] ;
            for(let i=0; i<clientes.length; i++){
               for(let j=0; j<clientes[i].planturistico.length; j++){
                  if(clientes[i].planturistico[j].id !== planId ){
                    NuevoCliente.push(clientes[i]);
                    }

                  else{


                    planturistico.push({
                          ...clientes[i].planturistico[j],
                          clientes :[...clientes[i].planturistico[j].clientes,newagenciaobj]
                       })
                       NuevoCliente.push(
                           {...clientes[i],
                            planturistico,
                             
                           }
                           );
                     }
               } 
            }
            console.log(NuevoCliente);
            setclientes(NuevoCliente);
         }}

        PlanesTuristico={clientes}
        onAddPlan={(newplanObj, ageId)=>{  
            const NuevoPlan = [];
            for(let i=0; i<clientes.length; i++){
                  if(clientes[i].id !== ageId ){
                    NuevoPlan.push(clientes[i]);
                    }

                  else{
                    NuevoPlan.push(
                           {...clientes[i],
                            planturistico :[...clientes[i].planturistico,newplanObj],
                             
                           }
                           );
                     }
               
            }
            console.log(NuevoPlan);
         }}
          
       />

      </div>  
    );
}

export default Paginaprin;