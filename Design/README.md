# Pasta Design — referências visuais (obrigatória por proposta)

Coloque aqui **tudo o que define o visual** da proposta. O Cursor usa esta pasta para **não inventar design** — só adaptar copy e conteúdo dentro do sistema existente.

## Estrutura sugerida

```
Design/
├── README.md                 ← este ficheiro
├── brand/
│   ├── cores.md              ← hex/hsl da marca (produto + cliente se aplicável)
│   ├── logo-produto.png      ← ex.: Factorial
│   └── logo-cliente.png      ← opcional
├── screenshots/
│   ├── 01-dashboard.png      ← vão para src/assets/reports/ após aprovação
│   └── ...
├── referencias/
│   └── links.md              ← URLs de demo, vídeo YouTube, docs
└── notas-visuais.md          ← “manter vermelho Factorial”, “não mudar tipografia”, etc.
```

## O que colocar em cada ficheiro

| Ficheiro | Conteúdo |
|----------|----------|
| `brand/cores.md` | Primária, secundária, acentos (HSL preferido, igual `src/index.css`) |
| `screenshots/*.png` | Capturas do produto para a galeria de relatórios |
| `referencias/links.md` | Demo URL, login, senha, vídeo de fecho |
| `notas-visuais.md` | Restrições explícitas (ex.: “sidebar sempre fundo hsl(347,80%,12%)”) |

## Regra

Se um asset não existir aqui, o Cursor **não deve** mudar layout nem criar estilos novos — usar placeholder `[SCREENSHOT A DEFINIR]` no slide.
