# Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS, showcasing my experience as a Senior Software Engineer. This portfolio serves as both a professional showcase and a demonstration of modern web development practices.

## ✨ Features

- 🎨 Modern, responsive design with smooth animations
- 🌙 Dark mode support with system preference detection
- 📱 Mobile-first approach with optimized layouts
- ⚡ Fast performance with Next.js static generation
- 🎯 SEO optimized with metadata and sitemap
- 🔍 Accessible following WCAG guidelines
- 📊 Analytics integration
- 🔄 Automatic deployment with GitHub Actions
- 📝 Blog section for sharing insights
- 🔗 Social media integration

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions
- **Analytics**: Vercel Analytics
- **Content**: MDX for blog posts
- **Testing**: Jest & React Testing Library
- **Linting**: ESLint & Prettier

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or later
- pnpm 10.x (`corepack enable` picks up the version pinned in `package.json`)
- Git

### Development

1. Clone the repository:
```bash
git clone https://github.com/riyadyahya/riyadyahya.github.io.git
cd riyadyahya.github.io
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
pnpm build
```

The static site is exported to `out/`.

## 📦 Project Structure

```
portfolio/
├── app/                 # Next.js app directory
│   ├── blog/           # Blog posts and pages
│   ├── components/     # Reusable React components
│   ├── styles/        # Global styles and Tailwind config
│   └── utils/         # Utility functions and helpers
├── public/            # Static assets
├── content/           # MDX content for blog
└── tests/            # Test files
```

## 🚀 Deployment

This portfolio is automatically deployed to GitHub Pages using GitHub Actions. The deployment process is triggered on every push to the main branch.

### Automatic Deployment
1. Push your changes to the main branch
2. GitHub Actions will automatically:
   - Build the Next.js application
   - Generate static files
   - Deploy to GitHub Pages
3. Your site will be available at `https://riyadyahya.github.io`

### Manual Deployment
If needed, you can manually trigger the deployment:
1. Go to the Actions tab in your GitHub repository
2. Select the "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📫 Contact

- GitHub: [@riyadyahya](https://github.com/riyadyahya)
- LinkedIn: [Riyad Yahya](https://linkedin.com/in/riyadyahya)
- Portfolio: [riyadyahya.github.io](https://riyadyahya.github.io)
