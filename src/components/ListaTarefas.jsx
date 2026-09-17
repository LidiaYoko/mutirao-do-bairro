
import CartaoTarefa from "./CartaoTarefa";

export default function ListaTarefas({ tarefas, onConcluir, onExcluir }) {


  if (tarefas.length === 0) {
    return <p>Nenhuma tarefa cadastrada</p>
  }

  return (
    <>
      {tarefas.map((tarefa) => (
        <CartaoTarefa
          key={tarefa.id}
          tarefa={tarefa}
          onConcluir={onConcluir}
          onExcluir={onExcluir}
        />
      ))}
    </>
  );
}