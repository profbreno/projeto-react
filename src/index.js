import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ListarItens, ItemView } from "./pages/Itens";
import Formulario from "./pages/Form";
import "bootstrap/dist/css/bootstrap.min.css";

//console.log(JSON.stringify(itens));

// function CardItem(props) {
//   return (
//     <div className="card_item">
//       <h2>{props.item.nome}</h2>
//       <img
//         src={"/assets/" + props.item.img}
//         alt={props.item.nome}
//         width="300"
//       />
//     </div>
//   );
// }

// class ListarItens extends React.Component {
//   //Definir o estado inicial
//   constructor(props) {
//     super(props);

//     this.state = {
//       itens: [],
//     };
//   }

//   async componentDidMount() {
//     console.log("Componente ListaItens contruído");

//     const request = await fetch("https://backend-flexivel.herokuapp.com/", {
//       headers: new Headers({
//         Authorization: "123456",
//       }),
//     });
//     const json = await request.json();

//     // Atualizar o estado
//     this.setState({
//       itens: json,
//     });
//     console.log(json);
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

// class ItemView extends React.Component {
//   constructor(props) {
//     super(props);
//     this.id = this.props.match.params.id;

//     this.state = {
//       itens: [],
//     };
//   }
//   async componentDidMount() {
//     console.log("Componente ListaItens contruído");

//     const request = await fetch(
//       "https://backend-flexivel.herokuapp.com/" + this.id,
//       {
//         headers: new Headers({
//           Authorization: "123456",
//         }),
//       }
//     );
//     const json = await request.json();

//     // Atualizar o estado
//     this.setState({
//       itens: json,
//     });
//     console.log(json);
//   }
//   render() {
//     return <CardItem item={this.state.itens} />;
//   }
// }

function App() {
  return (
    <Switch>
      <Route path="/" exact={true} component={ListarItens} />
      <Route path="/view/:id" component={ItemView} />
      <Route path="/p/:pag" component={ListarItens} />
      <Route path="/cadastro" component={Formulario} />
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
