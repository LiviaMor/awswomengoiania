# AWS Women User Group Goiânia ☁️👩‍💻

Comunidade de mulheres em Goiânia focada em **Amazon Web Services (AWS)** — estudos, carreira, certificações e networking.

## Sobre a comunidade

O **AWS Women User Group Goiânia** é um grupo comunitário que reúne mulheres interessadas em cloud computing e no ecossistema AWS. Nosso objetivo é criar um espaço acolhedor para troca de conhecimento, apoio mútuo e crescimento profissional na área de tecnologia.

### O que fazemos

- **Meetups** — Encontros presenciais e online com palestras, workshops e painéis
- **Grupos de estudo** — Preparação coletiva para certificações AWS
- **Networking** — Conexões profissionais e oportunidades de carreira
- **Mentoria** — Apoio de profissionais experientes para quem está começando

### Nossos números

| Métrica | Valor |
|---------|-------|
| Membras ativas | 200+ |
| Eventos realizados | 15+ |
| Certificações conquistadas | 50+ |
| Anos de comunidade | 2+ |

## Participe

| Canal | Link |
|-------|------|
| Meetup | [AWS Women User Group Goiânia](https://www.meetup.com/aws-women-user-group-goiania/) |
| LinkedIn | [Grupo no LinkedIn](https://www.linkedin.com/groups/18863023/) |
| Instagram | [@awswomengoiania](https://www.instagram.com/awswomengoiania) |
| WhatsApp | [Grupo de estudos](https://chat.whatsapp.com/GKdAMmwNFuP4imsNRTrFra) |

## Sobre este projeto

Este repositório contém o site da comunidade — uma landing page estilo **linktree** que centraliza os links e informações do grupo.

### Por que o formato linktree?

O formato linktree foi escolhido por ser:

- **Objetivo e direto** — o visitante encontra todos os canais da comunidade em segundos, sem precisar navegar por múltiplas páginas
- **Mobile-first** — a maioria dos acessos vem de stories do Instagram e bio de redes sociais, então a experiência precisa ser otimizada para celular
- **Baixa manutenção** — como comunidade voluntária, precisamos de algo simples de atualizar (basta editar links e imagens)
- **Rápido carregamento** — uma única página estática, sem dependências pesadas nem chamadas de API
- **Fácil compartilhamento** — um único link para divulgar em eventos, palestras e redes sociais

### Tech stack

| Tecnologia | Versão | Por quê |
|-----------|--------|---------|
| [Next.js](https://nextjs.org) | 16 (App Router) | SSG (geração estática) com otimização automática de imagens e excelente SEO |
| [React](https://react.dev) | 19 | Componentização e reuso de UI |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Estilização utilitária, rápida e responsiva sem CSS customizado excessivo |
| [TypeScript](https://www.typescriptlang.org) | 5 | Tipagem estática para evitar bugs e facilitar contribuições |
| [Sharp](https://sharp.pixelplumbing.com) | 0.34 | Otimização de imagens em build time para performance |

### Decisões de design

- **Paleta restrita** — fundo escuro (`#0f0f1a`) com laranja AWS (`#ff9900`) como única cor de destaque, garantindo hierarquia visual clara
- **Glassmorphism nos botões** — efeito sutil de vidro fosco que dá profundidade sem poluir
- **Aurora background** — gradientes animados suaves que trazem vida sem distrair do conteúdo
- **Safe areas** — suporte a dispositivos com notch (iPhone) via `env(safe-area-inset-*)`
- **`100dvh`** — viewport dinâmica que respeita a barra de endereço em mobile

### Rodando localmente

```bash
# Instalar dependências
cd aws-women-landing
npm install

# Servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) para visualizar.

### Build de produção

```bash
npm run build
npm start
```

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Consulte o arquivo [LICENSE](LICENSE) para detalhes.
