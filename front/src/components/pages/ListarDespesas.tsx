import axios from "axios";
import { useEffect, useState } from "react";

function ListarDespesas() {
  const [despesas, setDespesas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((resposta) => {
        console.log(resposta.data);
        setDespesas(resposta.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <div>
      <h1>Listagem de Despesas</h1>
      <table>
        <thead>
          <tr>
            <th>Despesa</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {despesas.map((despesa: any) => (
            <tr>
              <td>{despesa.descricao}</td>
              <td>R${despesa.preco},00</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarDespesas;
