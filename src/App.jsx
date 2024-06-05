import { useEffect, useState } from 'react'

import './App.css'
//https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new



const getRandomNumberFromApi = async() => {
  const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new');
  const numberString = await res.text();
  return +numberString;
}

export const App =()=> {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    getRandomNumberFromApi().then(number => setNumber(number));
  },[]);


  return (
    
      <div className="App App-header">
        <h2>Número aleatorio: {number}</h2>
      </div>
    
  )
}


