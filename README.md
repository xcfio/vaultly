# Vaultly 🔐

[![Code Test](https://github.com/xcfio/vaultly/actions/workflows/test.yaml/badge.svg)](https://github.com/xcfio/vaultly/actions/workflows/test.yaml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/6d444867-9521-4f20-a2b7-62ee7ab534e0/deploy-status)](https://app.netlify.com/projects/vaultly-xcfio/deploys)
[![Node.js Version](https://img.shields.io/badge/node-24.x-brightgreen.svg)](https://nodejs.org/)
[![License](https://img.shields.io/github/license/xcfio/vaultly)](https://opensource.org/license/apache-2-0)
[![Fastify](https://img.shields.io/badge/Fastify-5.x-202020?logo=fastify)](https://www.fastify.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Package Manager](https://img.shields.io/badge/pnpm-latest-orange?logo=pnpm)](https://pnpm.io/)
[![Support on Patreon](https://img.shields.io/badge/Sponsor-Patreon-red?logo=patreon)](https://www.patreon.com/xcfio)
[![Time](https://wakatime.com/badge/user/80f5dbf4-7bff-4748-82c6-2a8a3f3ec1c0/project/e01f3446-dd28-474e-be06-b985c7620c70.svg)](https://wakatime.com/badge/user/80f5dbf4-7bff-4748-82c6-2a8a3f3ec1c0/project/e01f3446-dd28-474e-be06-b985c7620c70)

**Secure Message Storage & Retrieval System**

A modern, encrypted messaging service that allows users to securely store and share sensitive information with advanced security features.

## 🌐 Live Demo

**[https://vaultly-xcfio.netlify.app/](https://vaultly-xcfio.netlify.app/)**

## ✨ Features

-   **🔒 End-to-End Encryption** - Messages are encrypted with user-defined keys
-   **⏰ Expiration Control** - Set automatic message expiration dates
-   **🔥 One-Time Access** - Self-destructing messages after single retrieval
-   **🌙 Dark/Light Theme** - Beautiful UI with theme switching
-   **📱 Responsive Design** - Works seamlessly across all devices
-   **🎨 Modern Interface** - Animated background with Comfortaa typography

## 🚀 Quick Start

1. **Create Message**: Enter your encryption key and message content
2. **Set Options**: Configure expiration time and one-time access
3. **Share ID**: Send the generated message ID to your recipient
4. **Retrieve**: Recipient uses ID and decryption key to access the message

## 🛠️ Tech Stack

-   **Frontend**: HTML5, CSS3, JavaScript (ES6+)
-   **Backend**: Fastify.js with Netlify Functions
-   **Database**: PostgreSQL with Drizzle ORM
-   **Deployment**: Netlify
-   **Styling**: Custom CSS with animations and gradients
-   **Typography**: Comfortaa font family
-   **Security**: Client-side encryption with custom key management

## 📦 Dependencies

-   **`@fastify/rate-limit`** - Provides rate limiting functionality to prevent API abuse and protect against spam
-   **`@netlify/functions`** - Enables deployment of serverless functions on Netlify platform
-   **`drizzle-orm`** - Type-safe database toolkit with SQL-like syntax for PostgreSQL operations
-   **`fastify`** - High-performance web framework for building REST APIs with excellent TypeScript support
-   **`postgres`** - Lightweight PostgreSQL client with modern async/await support
-   **`serverless-http`** - Wrapper that allows Express/Fastify apps to run as serverless functions
-   **`uuid`** - Generates unique identifiers for message storage and retrieval
-   **`@types/node`** - TypeScript type definitions for Node.js built-in modules
-   **`@types/uuid`** - TypeScript type definitions for UUID library
-   **`drizzle-kit`** - CLI tool for database schema migrations and code generation

## 📁 Project Structure

```
vaultly/
├── .github/
│   └── workflows/
│       └── test.yml                 # GitHub Actions CI/CD workflow
├── netlify/
│   └── functions/
│       └── api.ts                   # Main API handler
├── src/
│   ├── database/
│   │   ├── index.ts                 # Database connection and schema
│   │   └── message.ts               # Message model definitions
│   ├── function/
│   │   ├── crypto.ts                # Encryption/decryption utilities
│   │   ├── html.ts                  # HTML template rendering
│   │   └── index.ts                 # Utility functions
│   ├── routes/
│   │   ├── index.ts                 # Route definitions
│   │   ├── post-message.ts          # POST endpoint for storing messages
│   │   └── put-message.ts           # PUT endpoint for retrieving messages
│   ├── index.ts                     # Main entry point for the application
│   └── types.ts                     # TypeScript type definitions
├── .env.example                     # Environment variables template
├── .gitignore                       # Git ignore patterns
├── .prettierignore                  # Prettier ignore patterns
├── .prettierrc                      # Prettier configuration
├── drizzle.config.ts                # Drizzle ORM configuration
├── LICENSE                          # MIT License
├── netlify.toml                     # Netlify deployment configuration
├── package.json                     # Project dependencies and scripts
├── README.md                        # Project documentation
└── tsconfig.json                    # TypeScript configuration
```

## 📄 File Explanations

### Core Application Files

-   **`netlify/functions/`** - Serverless functions directory for Netlify deployment
-   **`database/index.ts`** - Database schema definition using Drizzle ORM, handles PostgreSQL connection
-   **`routes/index.ts`** - Main API route handler that processes HTTP requests
-   **`post-message.ts`** - API endpoint for storing new encrypted messages with expiration settings
-   **`put-message.ts`** - API endpoint for retrieving messages, handles one-time access logic
-   **`crypto.ts`** - Client-side encryption utilities for message security
-   **`html.ts`** - HTML template generation for the web interface

### Configuration Files

-   **`drizzle.config.ts`** - Database ORM configuration for schema management
-   **`netlify.toml`** - Netlify deployment settings and build configuration
-   **`tsconfig.json`** - TypeScript compiler configuration
-   **`package.json`** - Project metadata, dependencies, and npm scripts

### Development Files

-   **`.github/workflows/test.yml`** - Automated testing and deployment pipeline
-   **`.prettierrc`** - Code formatting rules for consistent styling
-   **`.gitignore`** - Specifies files to exclude from version control
-   **`env.example`** - Template for required environment variables

### Documentation

-   **`README.md`** - Comprehensive project documentation (this file)
-   **`LICENSE`** - MIT license for open-source usage

## 🔧 Installation & Setup

1. **Clone the repository**

    ```bash
    git clone https://github.com/xcfio/vaultly.git
    cd vaultly
    ```

2. **Install dependencies**

    ```bash
    pnpm install
    ```

3. **Set up environment variables**

    ```bash
    cp env.example .env
    # Edit .env with your database credentials
    ```

4. **Start development server**
    ```bash
    node --run dev
    ```

## 🎯 Use Cases

-   Sharing passwords and API keys
-   Sending confidential business information
-   Temporary secure communication
-   One-time sensitive data transmission

## 🚀 Deployment

This project is configured for automatic deployment on Netlify. Simply connect your GitHub repository to Netlify, and it will automatically deploy on every push to the main branch.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
