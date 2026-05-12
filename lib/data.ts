export const person = {
  name: 'Isaac Duwe Rodrigues',
  firstName: 'Isaac',
  title: 'Desenvolvedor Web & Builder',
  tagline: 'Crio produtos reais. Com 16 anos.',
  bio: [
    'Tenho 16 anos e já construo produtos de verdade — não só exercícios de aula. Aprendo tecnologia na prática, transformando ideias em código que funciona.',
    'Atualmente cursando Técnico em Desenvolvimento de Sistemas na ETEC Guaianases, onde combino fundamentos sólidos com projetos que resolvem problemas reais.',
  ],
  location: 'Guaianases, São Paulo — SP',
  email: 'zakduwe@gmail.com',
  phone: '(11) 98161-5938',
  github: 'https://github.com/zakduwe',
  linkedin: '',
  stats: [
    { label: 'Projetos reais', value: '2', suffix: '+' },
    { label: 'Idiomas', value: '2', suffix: '' },
    { label: 'Anos de estudo', value: '2', suffix: '+' },
    { label: 'Anos de idade', value: '16', suffix: '' },
  ],
}

export const projects = [
  {
    slug: 'cashup',
    name: 'CashUp',
    tagline: 'Pedidos pelo WhatsApp para confeitarias',
    description:
      'Landing page e cardápio digital para confeitarias — clientes escolhem produtos e a mensagem chega pronta no WhatsApp do vendedor. Sem taxas por pedido, sem app de delivery.',
    year: '2025',
    stack: ['React', 'Vite', 'Supabase', 'HTML', 'CSS', 'JavaScript'],
    color: '#F97316',
    accent: '#FED7AA',
    category: 'Produto',
    link: '',
    highlights: [
      'Cardápio digital com pedido em 1 clique',
      'Integração com banco de dados via Supabase',
      'Design mobile-first com identidade artesanal',
    ],
  },
  {
    slug: 'a-tarde-chama',
    name: 'A Tarde Chama',
    tagline: 'App de treino gamificado — calistenia RPG',
    description:
      'App mobile de acompanhamento de treinos transformado em RPG — XP, níveis, bosses, quests diárias e semanais. Feito para tornar a consistência nos treinos de calistenia inevitável.',
    year: '2025',
    stack: ['React Native', 'TypeScript', 'Design', 'Gamificação'],
    color: '#8B5CF6',
    accent: '#C4B5FD',
    category: 'App',
    link: '',
    highlights: [
      'Sistema de XP, níveis e conquistas',
      'Quests diárias e desafios semanais',
      'Construtor de treino personalizado',
    ],
  },
]

export const skills = [
  { name: 'HTML & CSS', level: 'sólido', group: 'Frontend' },
  { name: 'JavaScript', level: 'sólido', group: 'Frontend' },
  { name: 'React', level: 'aprendendo', group: 'Frontend' },
  { name: 'Vite', level: 'aprendendo', group: 'Frontend' },
  { name: 'TypeScript', level: 'aprendendo', group: 'Frontend' },
  { name: 'Java', level: 'básico', group: 'Backend' },
  { name: 'Supabase', level: 'aprendendo', group: 'Backend' },
  { name: 'Canva', level: 'sólido', group: 'Design' },
  { name: 'Git', level: 'aprendendo', group: 'Tools' },
  { name: 'Figma', level: 'aprendendo', group: 'Design' },
]

export const education = [
  {
    institution: 'ETEC Guaianases',
    course: 'Técnico em Desenvolvimento de Sistemas',
    note: 'Integrado ao Ensino Médio',
    period: '2024 – 2026',
    status: 'cursando',
    location: 'São Paulo, SP',
  },
]

export const languages = [
  { name: 'Português', level: 'Nativo' },
  { name: 'Inglês', level: 'Avançado' },
]
