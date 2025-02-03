🚀 TNT Template (Tauri + Next + Turbo)

A blazing-fast monorepo template combining Tauri, Next.js, and Turborepo for building modern cross-platform applications. Built with performance and developer experience in mind.

✨ Features

- 🏗️ Monorepo Setup powered by Turborepo
- ⚡ Tauri for native desktop applications
- 🎯 Next.js for web applications
- 🎨 Tailwind CSS for styling
- 🧩 shadcn/ui for beautiful, accessible components
- 📦 Shared UI component library
- 🔧 Consistent ESLint configuration
- 📝 Unified TypeScript configuration
- 🔄 Fast refresh and HMR
- 🛠️ Type-safe development

📁 Project Structure

tnt-template/
├── apps/
│ ├── desktop/ # Tauri desktop application
│ └── web/ # Next.js web application
├── packages/
│ ├── eslint-config/ # Shared ESLint configurations
│ ├── typescript-config/ # Shared TypeScript configurations
│ └── ui/ # Shared UI component library
├── .gitignore
├── package.json
└── turbo.json

🚀 Getting Started

Prerequisites

- Node.js 18 or later
- pnpm 8 or later
- Rust toolchain (for Tauri)
  - Windows: Microsoft Visual Studio C++ Build Tools
  - macOS: Xcode Command Line Tools
  - Linux: build-essential package

Installation

1. Clone the repository:
   git clone https://github.com/imfunniee/tnt-template
   cd tnt-template

2. Install dependencies:
   pnpm install

3. Start development:

# For web application

pnpm web:dev

# For desktop application

pnpm desktop:dev

Available Scripts

# Development

pnpm web:dev # Start Next.js development server
pnpm desktop:dev # Start Tauri development

# Building

pnpm web:build # Build web application
pnpm desktop:build # Build desktop application

# Utilities

pnpm clean-compile # Clean all build outputs using Turbo
pnpm format # Format code with Prettier
pnpm sort:package # Sort package.json files
pnpm spellcheck # Run spellcheck on TypeScript files

🛠️ Tech Stack

- Framework: Next.js 14 (https://nextjs.org/)
- Desktop: Tauri 2.0 (https://tauri.app/)
- Monorepo: Turborepo (https://turbo.build/repo)
- Styling: Tailwind CSS (https://tailwindcss.com/)
- UI Components: shadcn/ui (https://ui.shadcn.com/)
- Language: TypeScript (https://www.typescriptlang.org/)

📝 Development Guide

Working with Workspaces

Adding Dependencies:

# Add to specific workspace

pnpm add package-name --filter workspace-name

# Add to all workspaces

pnpm add package-name -w

# Add shared dependency to specific workspace

pnpm add @repo/ui --filter web

Shared Packages

- @repo/ui: Shared UI component library
- @repo/eslint-config: Base ESLint configuration
- @repo/typescript-config: Shared TypeScript configuration

Desktop Development (Tauri)

The desktop application is configured in apps/desktop/src-tauri/. Key files:

- tauri.conf.json - Tauri configuration
- src/main.rs - Rust entry point
- src/lib.rs - Rust functions

Web Development

The web application in apps/web/ follows Next.js 14 conventions:

- app/ - App router pages and layouts
- components/ - React components
- public/ - Static assets

Quality Checks

The template includes several quality-of-life improvements:

- Automatic package.json sorting (pnpm sort:package)
- Spellchecking for TypeScript files (pnpm spellcheck)
- Code formatting with Prettier (pnpm format)

🤝 Contributing

1. Fork the repository
2. Create your feature branch: git checkout -b feature/amazing-feature
3. Commit your changes: git commit -m 'feat: add amazing feature'
4. Push to the branch: git push origin feature/amazing-feature
5. Open a pull request

📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

⭐ Support

If you found this template helpful, please give it a ⭐️!

🙏 Acknowledgments

- Tauri (https://tauri.app/)
- Next.js (https://nextjs.org/)
- Turborepo (https://turbo.build/repo)
- shadcn/ui (https://ui.shadcn.com/)
