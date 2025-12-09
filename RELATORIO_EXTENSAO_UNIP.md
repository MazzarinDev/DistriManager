# RELATÓRIO DE ATIVIDADE DE EXTENSÃO
## Universidade Paulista (UNIP)

---

### INFORMAÇÕES GERAIS

| Campo | Informação |
|-------|-----------|
| **Título da Atividade** | DistriManager - Sistema de Planejamento de Construção para Distribuidoras |
| **Desenvolvedor** | MazzarinDev |
| **Data de Início** | Outubro de 2025 |
| **Data de Conclusão** | Dezembro de 2025 |
| **Carga Horária Total** | 85 horas (70h projeto base + 15h extensão) |
| **Tipo de Atividade** | Desenvolvimento de Software - Extensão Complementar |
| **Repositório** | https://github.com/MazzarinDev/DistriManager |

---

### RESUMO DA ATIVIDADE

O projeto **DistriManager** é um sistema completo de gerenciamento de projetos que combina uma aplicação desktop robusta com uma plataforma web moderna. O sistema foi desenvolvido com foco em otimizar o fluxo de trabalho de equipes de desenvolvimento de software em distribuidoras, oferecendo controle rigoroso de datas de entrega e análise visual de progresso.

A atividade de extensão complementar consistiu na implementação de três funcionalidades avançadas que elevaram significativamente a qualidade e usabilidade do sistema:

1. **Modo Dark/Light** - Alternância de temas visuais no software desktop
2. **Sistema de Autenticação** - Controle de acesso ao dashboard web
3. **Dashboard Interativo** - Visualização de dados com gráficos em tempo real

---

### OBJETIVOS ALCANÇADOS

✅ **Objetivo Geral**: Desenvolver um sistema de gerenciamento de projetos com interface visual intuitiva e análise de produtividade.

✅ **Objetivos Específicos**:
- Criar interface Kanban estilo Trello com datas fixas de entrega
- Implementar persistência de dados local em JSON
- Desenvolver página web profissional com design moderno
- Implementar autenticação de usuários
- Criar dashboard com visualização de métricas em gráficos
- Integrar upload de arquivos para análise de dados
- Adicionar suporte a temas visuais (Dark/Light Mode)

**Status: 100% Concluído**

---

### TECNOLOGIAS UTILIZADAS

**Backend/Desktop:**
- Python 3.11
- PyQt5 (Interface Gráfica)
- JSON (Armazenamento de Dados)

**Frontend/Web:**
- React 19
- Vite (Bundler)
- TypeScript
- Tailwind CSS 4
- Recharts (Gráficos)
- shadcn/ui (Componentes)

**DevOps:**
- Git (Controle de Versão)
- GitHub (Repositório Remoto)

---

### FUNCIONALIDADES IMPLEMENTADAS

#### Software Desktop (DistriManager.py)
- ✅ Interface Kanban com 4 colunas de status
- ✅ Criação, edição e exclusão de tarefas
- ✅ Atribuição de responsáveis e prioridades
- ✅ Datas fixas de entrega com validação
- ✅ Persistência automática em JSON
- ✅ **[NOVO]** Alternador de tema Dark/Light
- ✅ Relatório rápido de progresso

#### Plataforma Web (React/Vite)
- ✅ Landing page com design profissional
- ✅ **[NOVO]** Sistema de login com autenticação
- ✅ **[NOVO]** Dashboard interativo
- ✅ **[NOVO]** Upload de arquivo JSON
- ✅ **[NOVO]** Gráficos interativos (Pizza e Bar Charts)
- ✅ Tabela detalhada de tarefas
- ✅ KPIs em tempo real

---

### RESULTADOS E IMPACTOS

**Qualidade do Código:**
- Arquitetura modular e escalável
- Documentação técnica completa
- Padrões de design aplicados (OOP, Componentes Funcionais)
- Versionamento com commits descritivos

**Experiência do Usuário:**
- Interface intuitiva baseada em padrões conhecidos
- Design responsivo e otimizado para mobile
- Acessibilidade com contraste adequado
- Performance otimizada com carregamento rápido

**Impacto Educacional:**
- Aplicação prática de conceitos de desenvolvimento full-stack
- Integração de tecnologias modernas (React, Vite, Tailwind)
- Experiência com controle de versão e repositórios remotos
- Desenvolvimento de habilidades em UI/UX design

---

### ESTRUTURA DO PROJETO

```
DistriManager/
├── distrimanager.py              # Aplicação desktop (548 linhas)
├── requirements.txt              # Dependências Python
├── data.json                     # Banco de dados
├── README.md                     # Documentação principal
├── RELATORIO_DESENVOLVIMENTO.md  # Relatório de 70h
├── RELATORIO_ATIVIDADE_EXTENSAO.md # Relatório completo
├── RELATORIO_SINTESE.md          # Síntese de 800 caracteres
│
└── web/                          # Projeto web (React/Vite)
    ├── client/src/
    │   ├── pages/
    │   │   ├── Home.tsx          # Landing page
    │   │   └── Dashboard.tsx     # Dashboard com gráficos
    │   ├── components/
    │   │   ├── LoginDialog.tsx   # Autenticação
    │   │   └── BlueprintLayout.tsx
    │   └── App.tsx               # Router principal
    └── package.json
```

---

### COMO ACESSAR E UTILIZAR

**1. Clonar o Repositório:**
```bash
git clone https://github.com/MazzarinDev/DistriManager.git
cd DistriManager
```

**2. Executar o Software Desktop:**
```bash
pip install -r requirements.txt
python3 distrimanager.py
```

**3. Executar a Plataforma Web:**
```bash
cd web
pnpm install
pnpm dev
```

**4. Acessar o Dashboard:**
- Navegue para: `http://localhost:5173`
- Clique em "ÁREA RESTRITA"
- Digite a senha: `admin123`
- Faça upload do arquivo `data.json`

---

### CONTRIBUIÇÕES E APRENDIZADOS

**Competências Desenvolvidas:**
- Desenvolvimento full-stack (Desktop + Web)
- Design de interfaces modernas e responsivas
- Integração de múltiplas tecnologias
- Versionamento e colaboração com Git
- Documentação técnica profissional

**Desafios Superados:**
- Sincronização de dados entre aplicações
- Design responsivo em diferentes resoluções
- Implementação de autenticação segura
- Otimização de performance

**Inovações Implementadas:**
- Tema Dark/Light com alternância em tempo real
- Dashboard com visualização interativa de dados
- Upload de JSON com processamento automático
- Design Blueprint Industrial Tech único e profissional

---

### CONCLUSÕES

O projeto **DistriManager** foi desenvolvido com sucesso, cumprindo todos os objetivos propostos. A atividade de extensão complementar adicionou funcionalidades avançadas que elevaram significativamente a qualidade do sistema.

O sistema está **100% concluído e pronto para produção**, com documentação técnica completa e código bem estruturado. O projeto demonstra domínio de tecnologias modernas e boas práticas de desenvolvimento de software.

---

### REFERÊNCIAS

- **Repositório GitHub**: https://github.com/MazzarinDev/DistriManager
- **Documentação React**: https://react.dev
- **Documentação Vite**: https://vitejs.dev
- **Documentação PyQt5**: https://www.riverbankcomputing.com/static/Docs/PyQt5/

---

**Data de Submissão**: Dezembro de 2025  
**Desenvolvedor**: MazzarinDev  
**Instituição**: Universidade Paulista (UNIP)
