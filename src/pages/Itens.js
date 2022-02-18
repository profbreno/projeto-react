import React from "react";
import "../index.css";
import Header from "../Header";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <div className="card_item">
      <h2>{props.item.name}</h2>
      <Link to={"view/" + props.item.id}>
        <img src={props.item.img} alt={props.item.name} width="300" />
      </Link>
    </div>
  );
}

class ListarItens extends React.Component {
  //Definir o estado inicial
  constructor(props) {
    super(props);
    this.pag = this.props.match.params.pag;

    this.state = {
      itens: [],
    };
  }

  async componentDidMount() {
    console.log("Componente ListaItens contruído");
    const request = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=20" +
        (this.pag ? "&offset=" + parseInt(this.pag - 1) * 20 : "")
    );

    const json = await request.json();
    let i = 0;
    for (const item of json.results) {
      const request2 = await fetch(item.url);
      const pokemon = await request2.json();
      json.results[i].img = pokemon.sprites.other.dream_world.front_default;
      json.results[i].id = pokemon.id;
      i++;
    }
    console.log(json.results);
    // Atualizar o estado
    this.setState({
      itens: json.results,
    });
  }
  render() {
    // Renderiza utilizando a informação que está no estado
    return (
      <div className="App">
        <Header title="Minha Pokedex 10" />
        <Link to="/cadastro">Acessar cadastro</Link>
        <div className="lista_itens">
          {this.state.itens.map((item, index) => (
            <CardItem item={item} key={index} />
          ))}
        </div>
        <div className="pagination">
          {this.state.itens.length >= 20 ? (
            <Link
              to={"/p/" + (parseInt(this.pag ? this.pag : 1) + 1)}
              className="next"
            >
              Próxima
            </Link>
          ) : null}
          {this.state.itens.length >= 20 || this.pag ? (
            <Link
              to={
                "/p/" +
                (parseInt(
                  this.pag ? (parseInt(this.pag) === 1 ? 2 : this.pag) : 2
                ) -
                  1)
              }
              className="prev"
            >
              Anterior
            </Link>
          ) : null}
        </div>
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

    const request = await fetch("https://pokeapi.co/api/v2/pokemon/" + this.id);
    console.log(this.id);
    const json = await request.json();
    json.img = json.sprites.other.dream_world.front_default;

    // Atualizar o estado
    this.setState({
      itens: json,
    });
  }
  render() {
    return <CardItem item={this.state.itens} />;
  }
}

export { ListarItens, ItemView };
