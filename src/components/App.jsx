import React from "react";
import lingos from "../lingos";
import Card from "./Card";
import Footer from "./Footer";


function createCard(lingo){
return (
  < Card
  key ={lingo.id}
  emoji={lingo.emoji}
  name={lingo.name}
  meaning={lingo.meaning}
/ >);

}

function App(){
  return(<div>
    <h1><span>Indian Emoji meanings</span></h1>
    <div className="container">
       {lingos.map(createCard)}
      </div>
      <Footer />
  </div>);
}

export default App;
