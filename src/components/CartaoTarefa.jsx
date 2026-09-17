export default function CartaoTarefa({ tarefa, onConcluir }) {

  return (
    <div>
      <h3>{tarefa.titulo}</h3>

   
    <button onClick={() => onConcluir(tarefa.id)}>
      {tarefa.concluida ? "Desmarcar" : "Concluir"}
    </button>
     </div>
  )
}