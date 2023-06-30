import axios from "axios";
import { useEffect, useState } from "react";

function MediaETotal() {
  const [despesas, setDespesas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/somaEMedia")
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
      <h1>Tota e média das despesas</h1>
      {/* <table>
        <thead>
          <tr>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {despesas.map((despesa, index) => (
            <tr>
              <td>{despesa.media}</td>
              <td>R${despesa.preco},00</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
}

export default MediaETotal;