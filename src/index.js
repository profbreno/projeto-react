import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function CardItem(props) {
  return (
    <div>
      <h2>{props.nome}</h2>
      <img src={props.img} alt={props.nome} width="300" />
    </div>
  );
}

function ListarItens() {
  return (
    <div>
      <CardItem
        nome="Golum"
        img="https://img.olhardigital.com.br/wp-content/uploads/2019/11/20191119040151-860x450.jpg"
      />
      <CardItem
        nome="Frodo"
        img="https://rollingstone.uol.com.br/media/_versions/senhor-dos-aneis-frodo-assassino-divulgacao-netflix_widelg.jpg"
      />
    </div>
  );
}

function App() {
  return <ListarItens />;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
