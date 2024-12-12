import React from 'react';
import Text from "./Text";
import Card from "./Card";
import "./style.css"

function App() {
  return (
    <div className='bord'>
      <header>
      
      <h3>Food</h3> 
      <h3>Cleanin</h3> 
      <h3>Accounting</h3> 
      <h3>Car Repair Shops</h3> 
      <h3>Car Shop</h3> 
        
   
      </header>

     <Text />
     <Card/>
     
     
    </div>
  );
}

export default App;