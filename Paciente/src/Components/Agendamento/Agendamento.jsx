import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Agendamento() {
  const [usuario, setUsuario] = useState([]);
  const [nomeUsuario, setNomeUsuario] = useState("");

  const [dados, setDados] = useState({ nome: "", email: "", telfone: "" });
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("usuarios")) || [];
    setUsuario(storedUsers);
  }, []);

  const [data, setData] = useState("");

  const [hora, setHora] = useState("");

  const [medico, setMedico] = useState("");

  const [especialidade, setEspecialidades] = useState("");

  const [estado, setEstado] = useState("");

  const [cidade, setCidade] = useState("");

  const estados = ["SP", "RJ", "MG", "RS", "SC"];

  const cidadesPorEstado = {
    SP: ["São Paulo", "Campinas", "Osasco"],
    RJ: ["Rio de Janeiro", "Duque de Caxias", "Petrópolis"],
    MG: ["Belo Horizonte", "Uberlândia", "Juiz de Fora"],
    RS: ["Porto Alegre", "Caxias do Sul", "Gramado"],
    SC: ["Blumenau", "Joinville", "Lages"],
  };

  const especialidades = ["Cardiologista", "Ginecologista", "Dermatologista"];
  const medicos = ["Dr. João", "Dr. Maria", "Dr. Pedro"];

  const handleSubmit = (event) => {
    event.preventDefault();
    let agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];

    const agendamento = {
      usuario: nomeUsuario,
      data: data,
      especialidade: especialidade,
    };

    agendamentos.push(agendamento);

    localStorage.setItem("agendamentos", JSON.stringify(agendamentos));
  };

  return (
    <div className="agendamento-consulta">
      <h2>Agendar Consulta</h2>
      <form onSubmit={handleSubmit}>
        <label>Agendando consulta de: {nomeUsuario}</label>
        <br />
        <label>Data:</label>
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <label>Hora:</label>
        <input
          type="hora"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
        />
        <label>Medico:</label>
        <input
          type="medico"
          value={medico}
          onChange={(e) => setMedico(e.target.value)}
        />
        <label>Especialidade:</label>
        <input
          type="text"
          value={especialidades}
          onChange={(e) => setEspecialidades(e.target.value)}
        />
        <label>Estado</label>
        <input
          type="text"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        />
        <label>Cidade</label>
        <input
          type="text"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />

        <button type="submit">Agendar</button>

        <button>
          <Link to="/AtualizarDados">Editar</Link>
        </button>
      </form>
    </div>
  );
}

export default Agendamento;
