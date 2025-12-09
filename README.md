# DistriManager

## Sistema de Planejamento de Construção para Distribuidoras

**DistriManager** é um software de gerenciamento de projetos com interface gráfica intuitiva, desenvolvido especificamente para equipes de desenvolvimento que trabalham em sistemas de distribuidoras.

### 📋 Características Principais

- **Interface Visual Estilo Trello**: Organização visual de tarefas em colunas (Backlog, Em Progresso, Em Revisão, Concluído)
- **Datas Fixas de Entrega**: Cada tarefa possui data de entrega definida para melhor controle de prazos
- **Sistema de Prioridades**: Classificação de tarefas por prioridade (Alta, Média, Baixa) com cores distintas
- **Gestão de Responsáveis**: Atribuição de tarefas a desenvolvedores específicos
- **Persistência de Dados**: Salvamento automático em formato JSON
- **Interface Intuitiva**: Design moderno e responsivo para facilitar o uso diário

### 🚀 Tecnologias Utilizadas

- **Python 3.11**: Linguagem de programação principal
- **PyQt5**: Framework para interface gráfica
- **JSON**: Formato de armazenamento de dados

### 📦 Instalação

#### Pré-requisitos

- Python 3.11 ou superior
- pip (gerenciador de pacotes Python)

#### Passos para Instalação

```bash
# Clone o repositório
git clone https://github.com/MazzarinDev/distrimanager.git

# Entre no diretório do projeto
cd distrimanager

# Instale as dependências
pip install -r requirements.txt
```

### 🎯 Como Usar

#### Executar o Aplicativo

```bash
python3 distrimanager.py
```

#### Funcionalidades Principais

1. **Adicionar Nova Tarefa**
   - Clique no botão "+ Adicionar Tarefa" em qualquer coluna
   - Preencha os campos: título, descrição, data de entrega, responsável, prioridade e status
   - Clique em "Salvar"

2. **Editar Tarefa**
   - Clique no botão "✏️ Editar" no cartão da tarefa
   - Modifique os campos desejados
   - Clique em "Salvar"

3. **Excluir Tarefa**
   - Clique no botão "🗑️" no cartão da tarefa
   - Confirme a exclusão

4. **Gerar Relatório**
   - Clique no botão "📈 Gerar Relatório" no topo da tela
   - Visualize estatísticas do projeto

### 📊 Estrutura do Projeto

```
distrimanager/
├── distrimanager.py      # Arquivo principal da aplicação
├── requirements.txt      # Dependências do projeto
├── data.json            # Arquivo de dados (gerado automaticamente)
└── README.md            # Este arquivo
```

### 🎨 Interface

O DistriManager possui uma interface visual inspirada no Trello, com as seguintes características:

- **Colunas de Status**: Organização visual do fluxo de trabalho
- **Cartões de Tarefas**: Informações completas de cada tarefa
- **Cores de Prioridade**: Identificação rápida da urgência
- **Datas Fixas**: Controle rigoroso de prazos

### 👨‍💻 Desenvolvimento

**Desenvolvedor**: MazzarinDev  
**Período de Desenvolvimento**: Outubro de 2025  
**Horas Totais de Desenvolvimento**: 70 horas

#### Distribuição de Horas

- Planejamento e Arquitetura: 10 horas
- Desenvolvimento da Interface: 25 horas
- Implementação de Funcionalidades: 20 horas
- Testes e Refinamentos: 10 horas
- Documentação: 5 horas

### 📝 Licença

Este projeto foi desenvolvido para fins de gerenciamento interno de projetos de distribuidoras.

### 🤝 Contribuições

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

### 📞 Suporte

Para questões ou suporte, entre em contato com MazzarinDev.

---

**DistriManager** - Gerenciamento de Projetos Simplificado para Equipes de Desenvolvimento
