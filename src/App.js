import React from "react";
import Lang from "./Lang";
import ReactDOM from "react-dom";
import "./App.css";
import LangForm from "./LangForm";

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

class App extends React.Component {
  /* langageInput = React.createRef(); */

  state = {
    langage: [
      { id: 1, nom: "PHP" },
      { id: 2, nom: "Java" },
      { id: 3, nom: "Phyton" }
    ]
  };
  /* handleClick = () => {
    this.setState({ compteur: this.state.compteur + 1 });
     const langage = this.state.langage.slice(); 
    console.log(this.state); 
   const l = this.state.langage.slice();
   l.push({id: 4, nom: "C#"});
   this.setState({ langage :l})
  }*/

  handleDelete = id => {
    const l = [...this.state.langage];
    const index = l.findIndex(langage => {
      return langage.id === id;
    });
    l.splice(index, 1);
    this.setState({ langage: l });
  };

handleAdd = lang => {
  const langage = [...this.state.langage];
      langage.push(lang);
      this.setState({ langage });
}

  render() {
    const title = "Liste des langages appris ";
    return (
      <div>
        <h2>{title}</h2>
        {/*   {this.state.compteur}
       <button onClick={this.handleClick}>Ckick me</button> */}
        <ul>
          {this.state.langage.map(langage => (
            <Lang key={langage.id} details={langage} onDelete={this.handleDelete} />
          ))}
        </ul>
        <LangForm onLangAdd={this.handleAdd}/>
      </div>
    );
  }
}

export default App;
