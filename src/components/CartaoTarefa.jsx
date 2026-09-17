export default function CartaoTarefa({ tarefa, onConcluir, onExcluir }) {

  return (
    <div>
      <h3>{tarefa.titulo}</h3>

      <button onClick={() => onConcluir(tarefa.id)}>
        {tarefa.concluida ? "Desmarcar" : "Concluir"}
      </button>

      <button onClick={() => onExcluir(tarefa.id)}>
        Excluir
      </button>
    </div >

  )
}