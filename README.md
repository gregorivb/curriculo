# Currículo — Grégori Vallim Braga

Aplicação web (HTML + CSS + JS) para apresentar currículo profissional e exportar em PDF, com estrutura semântica voltada para leitura por ATS e mecanismos de busca.

## Estrutura do projeto

```text
curriculo/
├── index.html          # Estrutura e conteúdo do currículo
├── style.css           # Estilos de tela (layout, cores, responsividade, animações)
├── print.css           # Estilos dedicados à impressão/PDF
├── script.js           # Interações (impressão e cópia do telefone)
├── README.md           # Documentação do projeto
├── font/               # Família Raleway (arquivos TTF locais)
├── icons/              # Ícones SVG (contato e favicon)
└── images/             # Imagens do currículo (ex.: foto de perfil)
```

## Como usar localmente

1. Abra `index.html` no navegador (Chrome, Edge, Firefox).
2. Atualize os dados pessoais, experiências e seções conforme necessário em `index.html`.
3. Clique em **🖨️ Baixar / Imprimir PDF** e escolha **Salvar como PDF** no destino da impressora.

## Deploy no GitHub Pages

1. Crie um repositório no GitHub (ex.: `curriculo`).
2. Envie os arquivos necessários ao funcionamento da página, incluindo:
   - `index.html`, `style.css`, `print.css`, `script.js`
   - pastas `font/`, `icons/` e `images/`
3. No GitHub, vá em **Settings → Pages**.
4. Em **Source**, selecione **Deploy from a branch** → `main` → `/ (root)`.
5. Salve e aguarde a publicação.
6. Acesse a URL gerada (ex.: `https://seuusuario.github.io/curriculo/`).

> Se usar outro caminho/domínio, atualize também `canonical`, Open Graph, Twitter Card e JSON-LD em `index.html`.

## Funcionalidades

- Estrutura semântica com `<header>`, `<main>`, `<section>`, `<article>`, `<aside>` e listas
- Metadados SEO, Open Graph, Twitter Card e dados estruturados (JSON-LD)
- Layout responsivo para visualização em tela e adaptação para A4 na impressão
- Estilos de impressão separados em `print.css`
- Fonte Raleway local (sem dependência externa)
- Ícones SVG inline para contato e favicon SVG
- Interações acessíveis: botão de impressão e cópia do telefone com feedback (com fallback)

## Tecnologias

- HTML5
- CSS3 (Flexbox, animações, media queries, impressão)
- JavaScript (DOM e Clipboard API com fallback)

## Notas de manutenção

- Ajuste cores e estilos principais em `style.css` (variáveis CSS em `:root`).
- Regras específicas de PDF/impressão devem ser mantidas preferencialmente em `print.css`.
- O currículo já está preenchido com dados atuais; edite `index.html` para futuras atualizações de conteúdo.
