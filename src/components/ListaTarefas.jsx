
import { tarefasIniciais } from "../data/tarefas";
import CartaoTarefa from "./CartaoTarefa";

export default function ListaTarefas() {


  if (tarefasIniciais.length === 0) {
    return <p>Nenhuma tarefa cadastrada</p>
  }

  return (
    tarefasIniciais.map((tarefa) => (
      <CartaoTarefa key={tarefa.id} dados={tarefa} />

    ))
  );
}