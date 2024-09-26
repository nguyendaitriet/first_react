import { useState } from "react";

function App() {
  // const [counter, setCounter] = useState(1);
  // const increaseNumber = () => {
  //   setCounter(counter + 1);
  // }

  // const gifts = ["Racket", "Ball", "Toy", "Book", "Pen"];
  // const [gift, setGift] = useState()
  // const handleGetGift = () => {
  //   const randomIndex = Math.floor(Math.random() * gifts.length);
  //   setGift(gifts[randomIndex]);
  // }

  // const vehicles = [
  //   {
  //     id: 1,
  //     name: 'bus'
  //   },
  //   {
  //     id: 2,
  //     name: 'plane'
  //   },
  //   {
  //     id: 3,
  //     name: 'train'
  //   },
  //   {
  //     id: 4,
  //     name: 'bike'
  //   },
  //   {
  //     id: 5,
  //     name: 'boat'
  //   }
  // ];

  // const [checked, setChecked] = useState(3);

  // const nations = [
  //   {
  //     id: 1,
  //     name: 'Vietnam'
  //   },
  //   {
  //     id: 2,
  //     name: 'Germany'
  //   },
  //   {
  //     id: 3,
  //     name: 'Canada'
  //   }
  // ];

  // const [nationChecked, setNationChecked] = useState([]);
  // const handleNationChecked = (id) => {
  //   setNationChecked(prev => {
  //     const isNationChecked = nationChecked.includes(id);
  //     if (isNationChecked)
  //       return nationChecked.filter(item => item != id);
  //     return [...prev, id];
  //   });
  // }

  const [input, setInput] = useState();
  const [inputList, setInputList] = useState([]);
  const handleSubmit = () => {
    setInputList(prev => [...prev, input]);
    setInput('')
  }
  
  return (
    <div className="App">
      {/* <div>
        <h1>{counter}</h1>
        <button onClick={increaseNumber}>Plus</button>
      </div>

      <div style={{ "margin-top": "20px" }}>
        <h1>{gift || "No gift" }</h1>
        <button onClick={handleGetGift}>Get random gift</button>
      </div>

      <div style={{ "margin-top": "20px" }}>
        {vehicles.map(vehicle => 
          <div key={vehicle.id} >
            <input 
              type="radio"
              checked={vehicle.id == checked}
              onChange={() => setChecked(vehicle.id)}
            />
            {vehicle.name}
          </div>
        )}
        <button>Submit</button>
      </div> 

      <div style={{ "margin-top": "20px" }}>
        {nations.map(nation => 
          <div key={nation.id} >
            <input 
              type="checkbox"
              checked={nationChecked.includes(nation.id)}
              onChange={() => handleNationChecked(nation.id)}
            />
            {nation.name}
          </div>
        )}
        <button>Submit</button>
      </div> */}

      <div style={{ "margin-top": "20px" }}>
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSubmit}>Add</button>
        <ul>
          {inputList.map((input, index) => <li key={index}>{input}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
