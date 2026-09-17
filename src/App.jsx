import { useState } from "react";
import "./App.css";
import Painel from "./components/Painel";
import ListaTarefas from "./components/ListaTarefas";
import { tarefasIniciais } from "./data/tarefas";
/*
  MUTIRÃO DO BAIRRO — ponto de partida.

  Este arquivo está propositalmente quase vazio. Construir a aplicação é a
  atividade. Leia ATIVIDADE.md e docs/01-GUIA-DE-ETAPAS.md antes de escrever
  a primeira linha.

  Ordem sugerida (cada etapa tem critérios de aceite no ATIVIDADE.md):
    E2  componentes, lista com map() e key estável
    E3  props, callback do filho para o pai, children
    E4  useState, atualização imutável, excluir, valor derivado
    E5  formulário controlado, select, validação, filtro
    E6  useEffect, persistência no navegador, limpeza
    E7  contexto, rotas, requisição HTTP com quatro estados

  As pastas já existem para orientar a organização:
    src/components  src/context  src/layouts  src/pages  src/services

  Antes de pedir ajuda, passe pelo docs/04-PROTOCOLO-DE-DEPURACAO.md.
*/

export default function App() {

  const [tarefas, setTarefas] = useState(tarefasIniciais) 
function marcarConcluida(id) {
  setTarefas(
    tarefas.map(tarefa =>
      tarefa.id === id
      ? {...tarefa,concluida: !tarefa.concluida }
      : tarefa
    )
  )
}
  return (
  
    <main className="app">
      <Painel>
        <h1>Mutirão do Bairro</h1>
        <p>ACOMPANHE AS TAREFAS DO NOSSO MUTIRÃO</p>
      </Painel>
      <Painel>
        <ListaTarefas tarefa={tarefas}
        onConcluir={marcarConcluida}
        />
      </Painel>
    </main>
  );
}