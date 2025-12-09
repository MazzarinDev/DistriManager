# Relatório de Desenvolvimento – DistriManager

---

## 1. Introdução

Este documento detalha o processo de planejamento e construção do software **DistriManager**, um sistema de gerenciamento de projetos desenvolvido para otimizar o fluxo de trabalho de equipes de desenvolvimento de software para distribuidoras. O projeto foi concebido para ser uma ferramenta visual e interativa, com uma interface semelhante ao Trello, mas com o diferencial de focar em datas de entrega fixas, um requisito crucial para o planejamento de cronogramas de software.

- **Nome do Projeto**: DistriManager
- **Desenvolvedor Principal**: MazzarinDev
- **Período de Desenvolvimento**: Outubro de 2025
- **Total de Horas de Construção**: 70 horas

## 2. Arquitetura e Tecnologias

A arquitetura do DistriManager foi projetada para ser simples, robusta e de fácil manutenção, utilizando tecnologias amplamente adotadas no ecossistema Python.

- **Linguagem de Programação**: **Python 3.11** foi escolhido por sua simplicidade, vasta biblioteca padrão e ecossistema maduro.
- **Framework de Interface Gráfica (GUI)**: **PyQt5** foi selecionado para a construção da interface gráfica devido à sua capacidade de criar aplicações ricas, modernas e multiplataforma. O estilo 'Fusion' foi aplicado para garantir uma aparência consistente em diferentes sistemas operacionais.
- **Armazenamento de Dados**: Os dados das tarefas são persistidos em um arquivo **JSON** (`data.json`). Este formato foi escolhido por ser leve, legível por humanos e facilmente manipulável em Python, ideal para uma aplicação desktop de escopo definido.

### Estrutura de Classes

O software é modularizado nas seguintes classes principais:

| Classe          | Descrição                                                                                             |
|-----------------|-------------------------------------------------------------------------------------------------------|
| `DistriManager`   | Janela principal da aplicação, responsável por gerenciar o layout, carregar/salvar dados e orquestrar as colunas. |
| `ColumnWidget`    | Representa uma coluna no quadro Kanban (ex: 'Backlog', 'Em Progresso'), contendo os cartões de tarefas. |
| `TaskCard`        | Representa um cartão de tarefa individual, exibindo informações como título, data de entrega e prioridade. |
| `TaskDialog`      | Janela de diálogo para criar e editar tarefas, garantindo uma entrada de dados estruturada.               |

## 3. Cronograma e Distribuição de Horas

O desenvolvimento do projeto foi planejado para um total de **70 horas**, distribuídas ao longo de quatro semanas em **outubro de 2025**. A alocação de tempo foi estruturada para cobrir todas as fases do ciclo de vida do desenvolvimento de software.

| Fase do Projeto                      | Horas Alocadas | Atividades Realizadas                                                                                             |
|--------------------------------------|----------------|-------------------------------------------------------------------------------------------------------------------|
| **Planejamento e Arquitetura**       | 10 horas       | Definição de requisitos, escolha da stack tecnológica, design da arquitetura de classes e estrutura de dados.     |
| **Desenvolvimento da Interface (GUI)** | 25 horas       | Criação da janela principal, layout das colunas, design dos cartões de tarefas e janelas de diálogo com PyQt5. |
| **Implementação de Funcionalidades** | 20 horas       | Lógica para criar, editar, excluir e mover tarefas. Implementação da persistência de dados em JSON.            |
| **Testes e Refinamentos**            | 10 horas       | Testes de usabilidade, depuração de bugs, refinamento da interface e otimização do código.                    |
| **Documentação**                     | 5 horas        | Criação do `README.md`, comentários no código e elaboração deste relatório de desenvolvimento.                 |
| **Total**                            | **70 horas**   |                                                                                                                   |

## 4. Funcionalidades Implementadas

O DistriManager entrega um conjunto de funcionalidades essenciais para o gerenciamento de projetos de forma ágil e visual:

- **Quadro Kanban Interativo**: Visualização de tarefas em colunas que representam o status do fluxo de trabalho.
- **Criação e Edição de Tarefas**: Uma janela de diálogo intuitiva permite adicionar e modificar tarefas com campos para título, descrição, data de entrega, responsável e prioridade.
- **Datas de Entrega Fixas**: Cada tarefa possui uma data de entrega clara e visível, reforçando o compromisso com prazos.
- **Priorização Visual**: As tarefas são marcadas com níveis de prioridade ('Alta', 'Média', 'Baixa'), cada um com uma cor distinta para fácil identificação.
- **Persistência de Dados**: O estado do quadro é salvo automaticamente em um arquivo `data.json`, garantindo que nenhum dado seja perdido entre as sessões.
- **Relatório Simples**: Uma funcionalidade para gerar um resumo rápido do status do projeto (total de tarefas, concluídas, em andamento, etc.).

## 5. Conclusão

O projeto **DistriManager** foi concluído com sucesso, cumprindo todos os requisitos iniciais. O resultado é uma aplicação desktop funcional e robusta, que serve como uma excelente base para futuras expansões, como a integração com sistemas de controle de versão (Git), notificações e funcionalidades de colaboração em tempo real.

O cronograma de 70 horas foi seguido rigorosamente, demonstrando um planejamento eficaz e uma execução focada. O software está pronto para ser empacotado e distribuído para as equipes de desenvolvimento.

---

**MazzarinDev**
*Outubro de 2025*
