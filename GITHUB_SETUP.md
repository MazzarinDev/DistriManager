# Instruções para Publicação no GitHub

## Passo 1: Criar o Repositório no GitHub

1. Acesse [GitHub](https://github.com) e faça login
2. Clique no botão **"+"** no canto superior direito e selecione **"New repository"**
3. Configure o repositório:
   - **Repository name**: `distrimanager`
   - **Description**: "Sistema de Planejamento de Construção para Distribuidoras - Interface Kanban com datas fixas"
   - **Visibility**: Public ou Private (conforme sua preferência)
   - **NÃO** marque "Initialize this repository with a README" (já temos um README)
4. Clique em **"Create repository"**

## Passo 2: Configurar o Token de Acesso Pessoal (PAT)

Se você ainda não tem um token de acesso pessoal:

1. Vá para **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
2. Clique em **"Generate new token"** → **"Generate new token (classic)"**
3. Configure:
   - **Note**: "DistriManager Deploy"
   - **Expiration**: Escolha o período desejado
   - **Scopes**: Marque `repo` (acesso completo aos repositórios)
4. Clique em **"Generate token"**
5. **IMPORTANTE**: Copie o token imediatamente (você não poderá vê-lo novamente)

## Passo 3: Conectar o Repositório Local ao GitHub

Execute os seguintes comandos no terminal (substitua `SEU_USUARIO` pelo seu nome de usuário do GitHub):

```bash
cd /home/ubuntu/distrimanager

# Renomear a branch para 'main' (padrão moderno do GitHub)
git branch -M main

# Adicionar o repositório remoto
git remote add origin https://github.com/SEU_USUARIO/distrimanager.git

# Verificar se o remote foi adicionado corretamente
git remote -v
```

## Passo 4: Fazer o Push para o GitHub

Quando estiver pronto para enviar o código:

```bash
cd /home/ubuntu/distrimanager

# Fazer o push (você será solicitado a inserir credenciais)
git push -u origin main
```

**Quando solicitado**:
- **Username**: Seu nome de usuário do GitHub
- **Password**: Cole o **Token de Acesso Pessoal** (PAT) que você gerou no Passo 2

## Passo 5: Verificar o Repositório

Após o push bem-sucedido:

1. Acesse `https://github.com/SEU_USUARIO/distrimanager`
2. Verifique se todos os arquivos foram enviados corretamente
3. O README.md será exibido automaticamente na página principal do repositório

## Comandos Úteis para Futuras Atualizações

```bash
# Verificar status do repositório
git status

# Adicionar mudanças
git add .

# Fazer commit
git commit -m "Descrição das mudanças"

# Enviar para o GitHub
git push origin main

# Ver histórico de commits
git log --oneline
```

## Estrutura Atual do Repositório

```
distrimanager/
├── .gitignore                    # Arquivos ignorados pelo Git
├── README.md                     # Documentação principal
├── RELATORIO_DESENVOLVIMENTO.md  # Relatório de 70 horas
├── distrimanager.py              # Código-fonte principal
├── requirements.txt              # Dependências Python
└── GITHUB_SETUP.md              # Este arquivo
```

## Notas Importantes

- ✅ O repositório Git já está inicializado
- ✅ O primeiro commit já foi feito
- ✅ Todos os arquivos estão prontos para o push
- ⚠️ Não compartilhe seu Token de Acesso Pessoal publicamente
- ⚠️ O arquivo `data.json` está no `.gitignore` e não será versionado (dados locais)

---

**Desenvolvido por MazzarinDev - Outubro 2025**
