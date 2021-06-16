import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//console.log(JSON.stringify(itens));

function CardItem(props) {
  return (
    <div className="card_item">
      <h2>{props.item.nome}</h2>
      <img
        src={"/assets/" + props.item.img}
        alt={props.item.nome}
        width="300"
      />
    </div>
  );
}

class ListarItens extends React.Component {
  //Definir o estado inicial
  constructor(props) {
    super(props);

    this.state = {
      itens: [],
    };
  }

  async componentDidMount() {
    console.log("Componente ListaItens contruído");

    const request = await fetch("https://backend-flexivel.herokuapp.com/", {
      headers: new Headers({
        Authorization: "123456",
      }),
    });
    const json = await request.json();

    // Atualizar o estado
    this.setState({
      itens: json,
    });
    console.log(json);
  }
  render() {
    // Renderiza utilizando a informação que está no estado
    return (
      <div className="lista_itens">
        {this.state.itens.map((item, index) => (
          <CardItem item={item} key={index} />
        ))}
      </div>
    );
  }
}

class ItemView extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;

    this.state = {
      itens: [],
    };
  }
  async componentDidMount() {
    console.log("Componente ListaItens contruído");

    const request = await fetch(
      "https://backend-flexivel.herokuapp.com/" + this.id,
      {
        headers: new Headers({
          Authorization: "123456",
        }),
      }
    );
    const json = await request.json();

    // Atualizar o estado
    this.setState({
      itens: json,
    });
    console.log(json);
  }
  render() {
    return <CardItem item={this.state.itens} />;
  }
}

// function CardItem(props) {
//   return (
//     <div className="card_item">
//       <h2>{props.item.name}</h2>
//       <img alt={props.item.name} width="300" />
//     </div>
//   );
// }

// class ListarItens extends React.Component {
//   //Definir o estado inicial
//   constructor(props) {
//     super(props);

//     this.state = {
//       itens: [],
//       pokemons: [],
//     };
//   }

//   async componentDidMount() {
//     console.log("Componente ListaItens contruído");

//     const request = await fetch("https://pokeapi.co/api/v2/pokemon/");
//     const json = await request.json();

//     for (const item of json.results) {
//       const request2 = await fetch(item.url);
//       const pokemon = await request2.json();
//     }

//     // Atualizar o estado
//     this.setState({
//       itens: json.results,
//     });
//     console.log(json.results);
//   }
//   render() {
//     // Renderiza utilizando a informação que está no estado
//     return (
//       <div className="lista_itens">
//         {this.state.itens.map((item, index) => (
//           <CardItem item={item} key={index} />
//         ))}
//       </div>
//     );
//   }
// }

function App() {
  return (
    <Switch>
      <Route path="/" exact={true} component={ListarItens} />
      <Route path="/view/:id" component={ItemView} />
    </Switch>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
