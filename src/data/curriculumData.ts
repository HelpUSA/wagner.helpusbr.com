export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Contrato' | 'Consultoria';
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  impact: string;
  technologies: string[];
  link?: string;
  github?: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  credentialId?: string;
}

export const curriculumData = {
  personal: {
    name: "Wagner",
    fullName: "Wagner",
    title: "Especialista em Tecnologia & Arquiteto de Software Sênior",
    tagline: "Transformando desafios complexos de negócios em arquiteturas de software escaláveis, seguras e de alto desempenho.",
    status: "Disponível para projetos estratégicos & consultoria",
    email: "wagner@helpusbr.com",
    phone: "+55 (11) 99999-9999",
    location: "São Paulo, Brasil (Remoto / Híbrido)",
    linkedin: "https://www.linkedin.com",
    github: "https://github.com",
    website: "https://wagner.helpusbr.com",
    yearsOfExperience: 10,
    projectsCompleted: 50,
    clientSatisfaction: 99,
  },

  about: {
    summary: `Profissional de tecnologia com mais de uma década de experiência prática no desenho, liderança e implementação de ecossistemas digitais de alta criticidade. Especializado em arquiteturas orientadas a microsserviços, plataformas web modernas, engenharia em nuvem e automação inteligente.`,
    extendedSummary: `Com visão estratégica que conecta objetivos corporativos às melhores práticas de engenharia de software, atuo na concepção de plataformas escaláveis com foco em performance, observabilidade e segurança. Apaixonado por código limpo, mentoria técnica de equipes e entrega contínua de valor tangível.`,
    pillars: [
      {
        title: "Arquitetura & Escalabilidade",
        description: "Desenho de sistemas robustos, desacoplados e prontos para suportar alto volume de tráfego com tolerância a falhas.",
        icon: "Cpu"
      },
      {
        title: "Liderança Técnica & Mentoria",
        description: "Gestão de squads técnicas, facilitação ágil, code reviews criteriosos e elevação contínua do padrão do time.",
        icon: "Users"
      },
      {
        title: "DevOps & Automação",
        description: "Pipelines CI/CD automatizadas, conteinerização com Docker/K8s, infraestrutura ágil e esteiras seguras.",
        icon: "Terminal"
      },
      {
        title: "Foco no Negócio & ROI",
        description: "Tradução de requisitos de negócio em tecnologia produtiva, reduzindo custos operacionais e acelerando time-to-market.",
        icon: "TrendingUp"
      }
    ]
  },

  skillsCategories: [
    {
      title: "Frontend Moderno",
      skills: [
        { name: "React & Next.js", level: 95, highlight: true },
        { name: "TypeScript", level: 95, highlight: true },
        { name: "Tailwind CSS & Design Systems", level: 90, highlight: true },
        { name: "State Management (Zustand / Redux)", level: 90 },
        { name: "Vite & Webpack", level: 85 },
        { name: "UI/UX & Responsividade", level: 90 }
      ]
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Node.js & Express / NestJS", level: 95, highlight: true },
        { name: "C# & .NET Core", level: 88, highlight: true },
        { name: "Python", level: 82 },
        { name: "REST APIs & GraphQL", level: 95, highlight: true },
        { name: "Microserviços & Event-Driven", level: 90, highlight: true },
        { name: "WebSockets & Real-time", level: 88 }
      ]
    },
    {
      title: "Dados & Mensageria",
      skills: [
        { name: "PostgreSQL", level: 92, highlight: true },
        { name: "MySQL / MariaDB", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "Redis & Caching", level: 90, highlight: true },
        { name: "RabbitMQ & Kafka", level: 85 },
        { name: "Modelagem de Dados & Otimização", level: 90 }
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "Docker & Containers", level: 95, highlight: true },
        { name: "AWS Cloud Services", level: 88, highlight: true },
        { name: "CI/CD (GitHub Actions / GitLab)", level: 90, highlight: true },
        { name: "Linux Server Management", level: 90 },
        { name: "NGINX & Reverse Proxy", level: 88 },
        { name: "Observabilidade & Logs (Prometheus/Grafana)", level: 85 }
      ]
    }
  ] as SkillCategory[],

  experiences: [
    {
      id: "exp-1",
      role: "Head de Tecnologia & Arquiteto Chefe",
      company: "HelpUS Soluções Tecnológicas",
      period: "2021 - Presente",
      location: "Brasil (Remoto)",
      type: "Full-time",
      description: "Liderança estratégica da divisão de desenvolvimento, definição de arquiteturas de sistemas distribuídos e coordenação de entregas para clientes enterprise.",
      achievements: [
        "Arquitetou e colocou em produção sistemas corporativos atendendo milhares de requisições por segundo com 99.98% de disponibilidade.",
        "Padronizou esteiras de CI/CD, reduzindo tempo médio de deploy de horas para menos de 10 minutos com testes automatizados.",
        "Liderou a modernização de monólitos legados para serviços modulares conteinerizados, gerando economia de 40% em infraestrutura em nuvem.",
        "Mentoria direta e desenvolvimento de desenvolvedores júniores e plenos na squad técnica."
      ],
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS", "Redis", "Tailwind CSS"]
    },
    {
      id: "exp-2",
      role: "Engenheiro de Software Sênior / Especialista Full Stack",
      company: "Tech Enterprise Solutions",
      period: "2018 - 2021",
      location: "São Paulo, SP",
      type: "Full-time",
      description: "Desenvolvimento de produtos digitais escaláveis, integrações complexas de pagamentos, ERPs e portais analíticos de alta performance.",
      achievements: [
        "Liderou o desenvolvimento da nova interface e microserviços de faturamento que processou mais de R$ 50M em transações anuais.",
        "Implementou cache distribuído com Redis que otimizou tempos de resposta da API de 1.8s para 120ms.",
        "Implementou auditoria contínua de segurança e conformidade LGPD em fluxos críticos de dados."
      ],
      technologies: ["Node.js", ".NET Core", "React", "PostgreSQL", "Docker", "RabbitMQ", "Jest"]
    },
    {
      id: "exp-3",
      role: "Desenvolvedor Full Stack Pleno/Sênior",
      company: "Inovação Digital & Consultoria",
      period: "2015 - 2018",
      location: "São Paulo, SP",
      type: "Full-time",
      description: "Construção de aplicações web sob medida, portais institucionais corporativos, sistemas de CRM e integrações de APIs de terceiros.",
      achievements: [
        "Entregou com sucesso mais de 25 soluções para clientes de diversos nichos como finanças, saúde e comércio eletrônico.",
        "Estruturou biblioteca interna reutilizável de componentes UI que acelerou o início de novos projetos em 50%."
      ],
      technologies: ["JavaScript", "TypeScript", "PHP / Laravel", "Node.js", "MySQL", "Vue.js", "CSS3 / Sass"]
    }
  ] as Experience[],

  projects: [
    {
      id: "proj-1",
      title: "HelpUS Core Platform",
      category: "SaaS Enterprise / Plataforma",
      description: "Plataforma central de gestão e orquestração de serviços tecnológicos, integrando fluxos de atendimento, gestão de acessos e monitoramento operacional.",
      impact: "Redução de 60% em tempo de atendimento operacional e automação completa de tarefas manuais.",
      technologies: ["React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "Docker"],
      featured: true,
      link: "https://helpusbr.com"
    },
    {
      id: "proj-2",
      title: "Engine de Notificações & Mensageria Real-Time",
      category: "Microserviço / Arquitetura",
      description: "Solução distribuída para envio massivo e inteligente de notificações multi-canal (Email, Push, WhatsApp e SMS) com fila assíncrona resiliente.",
      impact: "Capacidade de envio de +100k mensagens/hora sem degradação do core banking do cliente.",
      technologies: ["Node.js", "Redis", "RabbitMQ", "Docker", "AWS SQS", "Prometheus"],
      featured: true
    },
    {
      id: "proj-3",
      title: "Painel Analítico de Telemetria & BI",
      category: "Frontend / Dashboard",
      description: "Dashboard interativo de alta densidade visual com telemetria em tempo real, visualização de logs, métricas financeiras e filtros instantâneos.",
      impact: "Aumento da velocidade de tomada de decisões executivas com dados atualizados a cada segundo.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Recharts", "WebSockets"],
      featured: true
    },
    {
      id: "proj-4",
      title: "Gateway de Integração & Autenticação Segura",
      category: "Segurança & API Gateway",
      description: "Camada central de segurança com autenticação JWT, OAuth2, rate limiting distribuído e firewall de requisições de API.",
      impact: "Zero incidentes de segurança reportados e mitigação automática de ataques de brute-force e DoS.",
      technologies: ["Node.js", "NGINX", "Redis", "TypeScript", "Docker"],
      featured: false
    }
  ] as Project[],

  education: [
    {
      degree: "Bacharelado em Sistemas de Informação / Ciência da Computação",
      institution: "Universidade Tecnológica",
      period: "2011 - 2015",
      details: "Foco em Engenharia de Software, Algoritmos Avançados, Estruturas de Dados e Banco de Dados Relacionais."
    },
    {
      degree: "Pós-Graduação em Arquitetura de Software & Computação em Nuvem",
      institution: "Instituição de Ensino Superior Especializada",
      period: "2017 - 2019",
      details: "Aprofundamento em Microsserviços, Design Patterns (GoF, Enterprise), DevOps e Arquiteturas Serverless."
    }
  ] as Education[],

  certifications: [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      credentialId: "AWS-CSA-VALID"
    },
    {
      name: "Professional Scrum Master (PSM I)",
      issuer: "Scrum.org",
      year: "2022"
    },
    {
      name: "Especialista em Microsserviços & Clean Architecture",
      issuer: "Full Cycle / Tech Academy",
      year: "2021"
    },
    {
      name: "Docker & Kubernetes para Produção",
      issuer: "DevOps Engineering Institute",
      year: "2022"
    }
  ] as Certification[],

  languages: [
    { language: "Português", level: "Nativo / Fluente" },
    { language: "Inglês", level: "Avançado / Profissional (Leitura técnica, escrita e conversação)" },
    { language: "Espanhol", level: "Intermediário" }
  ]
};
