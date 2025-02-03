# 🚀 TNT Template (Tauri + Next + Turbo)

A blazing-fast monorepo template combining Tauri, Next.js, and Turborepo for building modern cross-platform applications. Built with performance and developer experience in mind.

## ✨ Features

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

## 📁 Project Structure

```shell
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
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or later
- pnpm 8 or later
- Rust toolchain (for Tauri)
  - Windows: Microsoft Visual Studio C++ Build Tools
  - macOS: Xcode Command Line Tools
  - Linux: build-essential package

### Installation

1. Clone the repository:
   git clone https://github.com/imfunniee/tnt-template xyz
   cd xyz

2. Install dependencies:
   pnpm install

3. Start development:

### Development

```shell
pnpm web:dev # Start Next.js development server
pnpm desktop:dev # Start Tauri development
```

### Building

```shell
pnpm web:build # Build web application
pnpm desktop:build # Build desktop application
```

### Utilities

```shell
pnpm clean-compile # Clean all build outputs using Turbo
pnpm format # Format code with Prettier
pnpm sort:package # Sort package.json files
pnpm spellcheck # Run spellcheck on TypeScript files
```

## 🛠️ Tech Stack

- Framework: Next.js 14 (https://nextjs.org/)
- Desktop: Tauri 2.0 (https://tauri.app/)
- Monorepo: Turborepo (https://turbo.build/repo)
- Styling: Tailwind CSS (https://tailwindcss.com/)
- UI Components: shadcn/ui (https://ui.shadcn.com/)
- Language: TypeScript (https://www.typescriptlang.org/)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
