# Design System Definition

# 1. General

- Todas as cores que você vai precisar são as que estão abaixo.
- Todas as tipografias estarão abaixo.
- Usaremos o Tailwind como framework, portanto as variáveis devem ser definidas em assets/css/main.css

# 2. Colors

--text: oklch(24.14% 0.017 42.89);
--background: oklch(96.85% 0.017 84.59);
--primary: oklch(57.99% 0.207 17.34);
--secondary: oklch(50.29% 0.074 246.41);
--accent: oklch(85.24% 0.031 81.74);

# 3. Typography

- Para Títulos: h1, h2, h3, h4, h5 usar a Poltawski Nowy do Google Fonts
- Para corpo, textos de paragrafos, span, botões, links usar a Outfit do Google Fonts

# 4. Spacing

- Use os tamanhos do TailwindCSS.

# 5. Components

- Button
  -- base
  -- outline
  -- primary
  -- secondary
  -- variantes:  
  --- loading
  --- invert
  --- Todos os botões tem que ter um efeito de sombra embaixo dele.
  -- Deve ter cursor-pointer
  -- Os links que serão usados como botões, devem seguir as mesmas regras do Botão
  -- Sempre use caixa alta para os textos dos botões.

# 6. Reponsive

- Todo projeto é Mobile First, e para atingir esse objetivo temos o TailwindCSS.
- Para menu da ladingpage e do blog, sempre use menu hambuguer, pois é o que os usuários estão acostumados.

Evite a todo custo, colocar cores, tamanhos em harded code, sempre use variáveis do Tailwind.
