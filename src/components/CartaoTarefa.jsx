export default function CartaoTarefa({ dados }) {
  
  return (
    <article className={dados.concluida ? "concluida" : "pendente"}>
      {dados.titulo}
    </article>
  );
}