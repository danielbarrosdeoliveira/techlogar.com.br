# Estrutura do Projeto Techlogar

```
.
├── app/                    # Camada de Código (O que o Nuxt renderiza)
│   ├── components/         # Componentes Atômicos/Shared
│   │   └── base/           # Botões, Inputs (Design System puro)
│   ├── features/           # Camada de Negócio (Onde a mágica acontece)
│   │   ├── blog/           # Tudo do Blog (Components, Composables, Types)
│   │   │   ├── components/ # BlogCard.vue, HeaderBlog.vue, RecentPosts.vue
│   │   │   └── constants/  # categorias.ts, temas.ts
│   │   └── landing/        # Tudo da Landing Page
│   │       ├── components/ # HeroSection, AboutSection
│   │       └── data/       # index.ts (Mock data da landing)
│   ├── layouts/            # Templates de página
│   └── pages/              # Roteamento (Apenas chama os componentes das features)
├── content/                # Camada de Dados (Markdown)
│   └── blog/               # Posts organizados
├── docs/                   # Camada de Planejamento (Sua SDD e Planos)
│   ├── architecture/       # design-system.md, general.md
│   ├── blog/               # general-definition.md, history-user.md
│   └── landing-page/       # general.md
├── nuxt.config.ts
├── package.json
└── tsconfig.json
```

## Descrição dos Diretórios

- **app/**: Código principal da aplicação Nuxt
  - **components/base/**: Componentes base (Button, Header)
  - **features/blog/**: Componentes específicos do blog
  - **features/landing/**: Componentes da landing page
  - **layouts/**: Layouts (blog, default)
  - **pages/**: Páginas da aplicação
- **content/blog/**: Arquivos de conteúdo Markdown do Nuxt Content
- **docs/**: Documentação de planejamento
