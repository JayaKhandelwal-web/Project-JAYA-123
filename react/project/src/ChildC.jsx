/*import React from 'react';

function ChildC  ({ name })  {
  return (
    <>
       <h1> {name}</h1>
    </>
 
  );
};

export default ChildC;
import { data,data1 } from './App';
import React from 'react';

function ChildC  ()
 {
  return (
    <>
      <data.Consumer> 
        {
          (name)=>{
            return(
              <data1.Consumer>
                {
                  (Gender)=>{
                    return(
                      <>
                      <h1>my name is {name} and gender is {Gender}</h1></>
                    )
                  }
                }
              </data1.Consumer>
          
          
            )
          }
        }
      </data.Consumer>
    </>
 
  );
};

export default ChildC;*/


import React, { useContext } from 'react'
import { NameContext, GenderContext } from './App'

const ChildC = () => {
  const name = useContext(NameContext)
  const gender = useContext(GenderContext)

  return <h1>Hello {name}, Gender: {gender}</h1>
}

export default ChildC