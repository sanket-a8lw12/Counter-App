import './App.css';
import { useState } from 'react';

function App() {

  let dataSet = [
    { id: 1, count: "Zero" },
    { id: 2, count: "Zero" },
    { id: 3, count: "Zero" },
    { id: 4, count: "Zero" }
  ]

  // ...data bcoz if if delete the item it should not delete from main array

  const [arrElement, setArrElement] = useState([...dataSet]) 
  const [cartCount, setCartCount] = useState(0);

  function increaseCartCount(){
    let countCart = arrElement.filter((item)=>{
      return item.count > 0
    })
    setCartCount(countCart.length);
  }



  function increment(event){
    setArrElement(arrElement.map((value)=>{
      if(value.id === event.id){
        if(value.count === "Zero"){
          value.count = 0;
        }
        value.count += 1;
      }
      return value;
    }))
    increaseCartCount();
  }

  function decrement(event){
    setArrElement(arrElement.map((value)=>{
      if(value.id === event.id){
        if(value.count !== "Zero"){
          value.count -= 1;
        }
        if(value.count === 0){
          value.count = "Zero";
          setCartCount(cartCount - 1);
        }
      }
      return value;
    }))
  }


  function deleteItem(event){
    setArrElement(arrElement.filter((value)=>{
        return value.id !== event.id;
    }))
    setCartCount(cartCount - 1); // if deleted then cart count should also decrease
  }

  function refresh(){  // took arrElement as it has current data taking dataSet will refresh everything
    let updatedDataSet = arrElement.map((value)=>{
      value.count = "Zero";
      return value;
    })
    setArrElement(updatedDataSet);
  }

  return (
    <>
      <div className='container'>
        <div className='header'>
          <i className="fa-solid fa-cart-shopping"></i>
          <span>{cartCount}</span>
          <div>Items</div>
        </div>
        <div className='refreshButton'>
        <button type="button" onClick={() => refresh() } className="buttonSize">
        <i className="fa-solid fa-arrows-rotate" style={{color: "#1bb61e"}}></i>
                </button>
                <button type="button" onClick={() => decrement} className="buttonSize">
                <i class="fa-solid fa-recycle" style={{color: "#4dd1cf"}}></i>
                </button>
        
        
        </div>

        <div className='data'>
          {arrElement.map((item)=>{
            return(
              <div id='card'>
                <span>{item.count}</span>
                 
                 
                <button type="button" onClick={() => increment(item)} className="buttonSize">
                <i class="fa-solid fa-circle-plus" style={{color: "#fbfcfe"}}></i>
                </button>
                <button type="button" onClick={() => decrement(item)} className="buttonSize">
                <i class="fa-solid fa-circle-minus" style={{color: "#f5f5f5"}}></i>
                </button>
                <button type="button" onClick={() => deleteItem(item)} className="buttonSize">
                <i class="fa-solid fa-trash-can" style={{color: "#ebe6e6"}}></i>
                </button>
              </div>
            )
          })}
        </div>


        


      </div>
    </>
  );
}

export default App;
