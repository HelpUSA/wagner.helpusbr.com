# wagner.helpusbr.com

Site profissional de apresentação curricular e portfólio executivo de **Wagner** integrado ao ecossistema [HelpUS](https://helpusbr.com).

---

## 🚀 Tecnologias Utilizadas

- **React 19 + TypeScript**: Aplicação rápida, tipada e modular.
- **Vite 6**: Bundler ultrarrápido com Hot Module Replacement (HMR).
- **Tailwind CSS v4**: Estilização moderna e responsiva com sistema de cores elegante (dark mode nativo).
- **Lucide Icons**: Conjunto refinado de ícones corporativos.
- **Print Ready / Exportação PDF**: Estilização específica com `@media print` para salvar currículo executivo limpo direto pelo navegador.

---

## 📁 Estrutura do Projeto

```
wagner.helpusbr.com/
├── src/
│   ├── data/
│   │   └── curriculumData.ts  # Dados estruturados (experiências, projetos, habilidades, contato)
│   ├── App.tsx                # Interface principal rica e responsiva
│   ├── index.css              # Importação Tailwind CSS e estilos de impressão
│   └── main.tsx               # Entry point do React
├── index.html                 # Metadados e fontes Inter / Plus Jakarta Sans
├── vite.config.ts             # Configuração do Vite e plugin Tailwind
└── package.json
```

---

## 🛠️ Como Executar Localmente

1. Entre na pasta do projeto:
   ```bash
   cd wagner.helpusbr.com
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Acesse no navegador: `http://localhost:5173`

---

## 📦 Como Gerar o Build de Produção

```bash
npm run build
```

Os arquivos estáticos prontos para deploy estarão na pasta `dist/`.

---

## ✏️ Personalização dos Dados

Para atualizar informações de contato, experiências, certificações ou projetos, edite o arquivo:
👉 `src/data/curriculumData.ts`
