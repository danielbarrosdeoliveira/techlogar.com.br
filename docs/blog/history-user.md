# Histórias de Usuário

Nesta seção, traduzimos as funcionalidades em necessidades reais para guiar o desenvolvimento.

1. [EPIC] Experiência de Descoberta (Blog Home)

- US01 - Listagem Visual: Como leitor, quero ver cards de posts com resumo de 3 linhas e tags para identificar rapidamente o conteúdo de acordo com tema, categoria, deve ter autor, data de postagem e imagem principal.
  - Task: Criar componente PostCard.vue integrado ao Nuxt Content.

- US02 - Filtro Inteligente: Como usuário, quero buscar por palavras-chave e filtrar por Categoria/Data no menu lateral para encontrar sermões ou dicas específicas.
  - Task: Implementar lógica de filtragem reativa no AsideFilter.vue.

2. [EPIC] Experiência de Leitura (Post Page)

- US03 - Layout Hero: Como leitor, quero que o título e a descrição apareçam sobre a imagem principal (Hero) para ter uma experiência visual imersiva.
  - Task: Componentizar o PostHero.vue com suporte a overlays dinâmicos.

- US04 - Navegação por Tópicos: Como usuário técnico, quero um menu lateral fixo (sticky) com os subtítulos do post para saltar direto para a solução que preciso.
  - Task: Gerar Table of Contents (ToC) automática via @nuxt/content.

- US05 - Social Share: Como membro da comunidade, quero botões de compartilhamento (WhatsApp, etc.) para enviar estudos e dicas para meus grupos.
  - Task: Criar SocialActions.vue com links de compartilhamento dinâmicos.
