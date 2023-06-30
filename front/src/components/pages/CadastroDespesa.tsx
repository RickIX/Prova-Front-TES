import axios from "axios";
import { useState } from "react";
import { Despesa } from "../../models/despesa.model";

function CadastroDespesa() {
  const [descricao, setNome] = useState("");
  const [preco, setPreco] = useState("");

  function enviar() {
    //Enviar o produto para a API, através FETCH ou AXIOS
    let despesa: Despesa = new Despesa();
    despesa.descricao = descricao;
    despesa.preco = Number.parseInt(preco);

    axios
      .post("http://localhost:3001", despesa)
      .then((resposta) => {
        console.log(resposta.data.mensagem);
        setNome("");
        setPreco("");
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  return (
    <div>
      <h1> Cadastrar Despesas</h1>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          onChange={(event: any) => setNome(event.target.value)}
        />
      </div>
      <div>
        <label>Preço:</label>
        <input
          type="text"
          onChange={(event: any) => setPreco(event.target.value)}
        />
      </div>
      <div>
        <button onClick={enviar}>
          Cadastrar
        </button>
      </div>
    </div>
  );
}

export default CadastroDespesa;
