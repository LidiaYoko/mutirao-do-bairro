
import { tarefasIniciais } from "../data/tarefas";
import CartaoTarefa from "./CartaoTarefa";

export default function ListaTarefas({ tarefas, onConcluir }) {


  if (tarefasIniciais.length === 0) {
    return <p>Nenhuma tarefa cadastrada</p>
  }

  return (
    <>
      {tarefasIniciais.map((tarefa) => (
        <CartaoTarefa
          key={tarefa.id}
          tarefa={tarefa}
          onConcluir={onConcluir}
        />
      ))}
    </>
  )
}