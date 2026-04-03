#### US06 - Menu de Navegação Inteligente (Scroll Spy)

- **História:** Como leitor, quero identificar em qual seção da Landing Page estou através do destaque visual no menu superior.
- **Critérios de Aceitação:**
  - O efeito deve ser ativado tanto pelo scroll manual quanto pelo clique no link (âncora).
  - Performance: Utilizar `Intersection Observer` para evitar múltiplos listeners de scroll que pesam no processamento.
