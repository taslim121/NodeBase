# 🚀 NodeBase

<div align="center">

![NodeBase Banner](public/logo.svg)

**A Modern Workflow Automation Platform**

*Build, automate, and scale your workflows with an intuitive visual interface*

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6.18.0-2D3748?style=flat-square&logo=prisma)](https://www.prisma.io/)
[![License](https://img.shields.io/badge/License-Private-red?style=flat-square)](LICENSE)

</div>

---

## 📖 Overview

**NodeBase** is an enterprise-grade workflow automation SaaS platform that empowers users to design, manage, and execute sophisticated workflows through an intuitive visual node-based editor. Built with cutting-edge web technologies and modern architectural patterns, NodeBase seamlessly merges the flexibility of visual programming with robust, scalable infrastructure.

Whether you're automating business processes, integrating AI models, or orchestrating complex data pipelines, NodeBase provides the tools and infrastructure to bring your automation vision to life.

> ⚠️ **Development Status**: This project is actively under development with new features and improvements being added regularly.

---

## ✨ Features

### 🎨 Visual Workflow Designer

#### Interactive Node-Based Editor
- **Drag-and-Drop Interface**: Powered by React Flow with smooth animations and intuitive controls
- **Real-Time Canvas**: Live updates as you build workflows with automatic validation
- **Connection Management**: Smart edge routing with visual feedback for valid/invalid connections
- **Zoom & Pan Controls**: Navigate complex workflows with ease
- **Mini-Map Navigation**: Bird's-eye view for large workflow architectures
- **Node Search & Filter**: Quickly find and add nodes with intelligent search
- **Auto-Layout Support**: Automatic node arrangement for optimal visualization
- **Undo/Redo History**: Full workflow editing history with state management

#### Advanced Node System
NodeBase supports a comprehensive set of node types for various automation scenarios:

### 🚀 Trigger Nodes

#### Manual Trigger
- **On-Demand Execution**: Start workflows manually with a single click
- **User-Initiated Workflows**: Perfect for testing and controlled automation
- **Real-Time Status**: Instant feedback on workflow execution state

#### Google Form Trigger
- **Form Response Automation**: Automatically trigger workflows when new Google Form responses are submitted
- **Webhook Integration**: Secure webhook endpoint for Google Forms
- **Data Mapping**: Automatic parsing and mapping of form data to workflow variables
- **Response Validation**: Built-in validation for form response data

#### Stripe Trigger
- **Payment Event Automation**: Trigger workflows on Stripe payment events
- **Webhook Support**: Secure Stripe webhook integration with signature verification
- **Event Filtering**: Configure specific Stripe events (payment_intent.succeeded, invoice.paid, etc.)
- **Transaction Data**: Full access to Stripe payment and customer data

### 🤖 AI Integration Nodes

#### OpenAI Node
- **GPT Model Support**: Latest models including GPT-4o, GPT-4o-mini, GPT-4-turbo, and GPT-3.5-turbo
- **Streaming Responses**: Real-time token streaming for dynamic AI interactions
- **Context Management**: Pass data from previous nodes as context
- **Prompt Templates**: Handlebars template support for dynamic prompts
- **Token Control**: Configure max tokens, temperature, and other parameters
- **Credential Security**: Encrypted API key storage and management
- **Variable Output**: Results accessible in downstream nodes via `{{nodeId.text}}`

#### Anthropic (Claude) Node
- **Claude Models**: Support for Claude 3.5 Sonnet, Claude 3 Opus, Claude 3 Sonnet, and Claude 3 Haiku
- **Advanced Reasoning**: Leverage Claude's sophisticated reasoning capabilities
- **Long Context**: Handle extended conversations and document analysis
- **Streaming Support**: Real-time response streaming
- **System Prompts**: Configure system-level instructions
- **Multi-Turn Conversations**: Context-aware dialogue management

#### Google Gemini Node
- **Gemini Model Suite**: Access to Gemini 1.5 Pro, Gemini 1.5 Flash, and Gemini 2.0 Flash
- **Multimodal Capabilities**: Text, image, and vision processing
- **Dynamic Model Selection**: Automatically fetch latest available models
- **Code Generation**: Specialized code understanding and generation
- **Large Context Windows**: Handle extensive inputs with Gemini's large context capabilities
- **Grounded Responses**: Fact-based, reliable AI outputs

### 🔗 Action Nodes

#### HTTP Request Node
- **Full HTTP Support**: GET, POST, PUT, PATCH, DELETE methods
- **Header Management**: Custom headers with template support
- **Body Configuration**: JSON, form-data, and raw body types
- **Query Parameters**: Dynamic query string building
- **Authentication**: Bearer tokens, API keys, and custom auth headers
- **Response Handling**: Automatic JSON parsing and error handling
- **Variable Interpolation**: Use Handlebars syntax to inject workflow data
- **Timeout Control**: Configurable request timeouts
- **Retry Logic**: Automatic retries with exponential backoff

#### Discord Webhook Node
- **Channel Integration**: Send messages to any Discord channel via webhooks
- **Rich Formatting**: Support for embeds, markdown, and custom formatting
- **Dynamic Content**: Use variables from previous nodes
- **Error Handling**: Graceful failure with detailed error messages
- **Webhook URL Storage**: Secure webhook URL management
- **Real-Time Delivery**: Instant message posting to Discord channels

#### Slack Webhook Node
- **Workspace Integration**: Post messages to Slack channels
- **Message Formatting**: Support for Slack's block kit and markdown
- **Variable Content**: Dynamic message composition with workflow data
- **Channel Routing**: Send to specific channels or users
- **Attachment Support**: Rich message attachments and formatting
- **Secure Configuration**: Encrypted webhook URL storage
- **Delivery Confirmation**: Real-time message delivery status

### 💾 Data & State Management

#### Workflow Persistence
- **Auto-Save**: Automatic workflow saving with optimistic updates
- **Version Control**: Track workflow changes over time
- **Draft Support**: Work on workflows without affecting production
- **Export/Import**: Share workflows as JSON configurations
- **Template System**: Save and reuse workflow templates

#### Variable System
- **Node Variables**: Each node outputs data in a structured format
- **Variable References**: Access node outputs using `{{nodeName.property}}` syntax
- **Data Types**: Support for strings, numbers, objects, and arrays
- **Template Engine**: Handlebars-powered template processing
- **Validation**: Type checking and validation for variable usage
- **Context Passing**: Thread data through complex workflow paths

### 🔐 Security & Authentication

#### User Authentication
- **Better Auth Integration**: Modern, secure authentication system
- **OAuth Providers**: GitHub and Google OAuth support
- **Session Management**: Secure session handling with automatic refresh
- **Magic Link Support**: Passwordless authentication option
- **Account Linking**: Connect multiple OAuth providers to one account
- **Security Best Practices**: CSRF protection, secure cookies, and encrypted sessions

#### Credential Management
- **Encrypted Storage**: AES-256 encryption for API keys and secrets
- **Credential Types**: Support for OpenAI, Anthropic, and Google Gemini credentials
- **Scoped Access**: Credentials are user-specific and securely isolated
- **Easy Management**: Intuitive UI for adding and managing credentials
- **Automatic Injection**: Credentials automatically injected into node configurations
- **Validation**: Pre-flight credential validation before workflow execution

### 📊 Execution & Monitoring

#### Workflow Execution Engine
- **Background Processing**: Powered by Inngest for reliable job execution
- **Topological Sorting**: Intelligent node execution order based on dependencies
- **Parallel Execution**: Run independent nodes concurrently for better performance
- **Error Handling**: Comprehensive error catching and reporting
- **Execution Context**: Full execution state tracking throughout workflow
- **Real-Time Updates**: Live execution status via Inngest channels
- **Timeout Management**: Configurable execution timeouts

#### Execution History
- **Detailed Logs**: Complete execution history with timestamps
- **Status Tracking**: Running, Success, and Failed states
- **Error Stack Traces**: Full error details with stack traces for debugging
- **Output Inspection**: View output data from each node execution
- **Duration Metrics**: Execution time tracking for performance analysis
- **Filtering & Search**: Find executions by status, date, or workflow
- **Pagination**: Efficient browsing of execution history

#### Real-Time Monitoring
- **Live Status Updates**: Watch workflow execution in real-time
- **Node-Level Visibility**: See which nodes are currently executing
- **Progress Indicators**: Visual feedback for long-running operations
- **Execution Timeline**: Chronological view of node execution order
- **Resource Metrics**: Monitor execution resource usage

### 💎 Premium Features

#### Pro Subscription
- **Polar Integration**: Seamless subscription management powered by Polar
- **Recurring Billing**: Automated monthly/annual billing cycles
- **Customer Portal**: Self-service subscription management
- **Feature Gating**: Automatic access control based on subscription status
- **Usage Analytics**: Track your workflow executions and usage
- **Priority Support**: Enhanced support for Pro subscribers

#### Advanced Capabilities
- **Unlimited Workflows**: No restrictions on workflow creation
- **Extended Execution Time**: Longer timeouts for complex workflows
- **Priority Queue**: Faster execution for Pro users
- **Advanced Nodes**: Access to all premium node types
- **Custom Integrations**: Request custom node implementations
- **Team Collaboration**: Share workflows with team members *(Coming Soon)*

### 🎨 User Experience

#### Modern Interface
- **Dark/Light Mode**: Auto-sync with system preferences or manual toggle
- **Responsive Design**: Fully functional on desktop and tablet devices
- **Keyboard Shortcuts**: Power-user keyboard navigation
- **Accessibility**: WCAG-compliant UI components
- **Loading States**: Smooth transitions and loading indicators
- **Error Boundaries**: Graceful error handling with user-friendly messages
- **Toast Notifications**: Non-intrusive success and error notifications

#### Theme Support
- **System Theme Detection**: Automatically match OS theme preferences
- **Manual Override**: Choose your preferred theme independently
- **Consistent Styling**: Semantic color tokens for light/dark compatibility
- **shadcn/ui Components**: Beautiful, accessible component library
- **Tailwind CSS v4**: Modern utility-first styling with CSS variables

---

## 🛠️ Technology Stack

### Frontend Architecture

#### Core Framework
- **[Next.js 15.5.4](https://nextjs.org/)** - React framework with App Router
  - Server Components for optimal performance
  - Turbopack for lightning-fast development builds
  - Streaming SSR for progressive page loading
  - Automatic code splitting and optimization
  - Built-in Image and Font optimization

- **[React 19.1.0](https://react.dev/)** - UI library with latest features
  - Server Components architecture
  - Concurrent rendering
  - Automatic batching
  - Suspense and Error Boundaries
  - React Compiler optimizations

#### Styling & UI Components
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
  - CSS variable-based theming
  - JIT (Just-In-Time) compiler
  - Custom design system
  - Responsive utilities
  - Dark mode support

- **[shadcn/ui](https://ui.shadcn.com/)** - High-quality component library
  - Radix UI primitives for accessibility
  - Fully customizable components
  - Copy-paste component model
  - TypeScript-first design
  - Comprehensive component suite (40+ components)

- **[Lucide Icons](https://lucide.dev/)** - Beautiful, consistent icon set
  - 1000+ icons
  - Tree-shakeable imports
  - Customizable stroke width and size

#### State Management & Data Fetching
- **[tRPC 11.7.1](https://trpc.io/)** - End-to-end typesafe APIs
  - Full TypeScript inference from server to client
  - No code generation required
  - Request batching for optimal performance
  - Automatic serialization/deserialization
  - Built-in error handling

- **[TanStack Query (React Query)](https://tanstack.com/query)** - Powerful async state management
  - Automatic caching and background refetching
  - Optimistic updates
  - Request deduplication
  - Infinite scroll support
  - Suspense integration

#### Form Management
- **[React Hook Form](https://react-hook-form.com/)** - Performant form library
  - Minimal re-renders
  - Built-in validation
  - TypeScript support
  - Flexible error handling
  - Easy integration with UI libraries

- **[Zod](https://zod.dev/)** - TypeScript-first schema validation
  - Runtime type validation
  - Comprehensive validation rules
  - Error message customization
  - Schema composition and transformation
  - Integration with React Hook Form via @hookform/resolvers

#### Visual Workflow Editor
- **[xyflow/react 12.9.3](https://reactflow.dev/)** - Advanced flow chart library
  - Customizable nodes and edges
  - Built-in controls (zoom, pan, minimap)
  - Connection validation
  - Automatic edge routing
  - Performance optimized for large graphs
  - TypeScript support with strict typing

### Backend Infrastructure

#### API Layer
- **[tRPC 11.7.1](https://trpc.io/)** - Type-safe API development
  - Direct function calls between server and client
  - Middleware support for authentication and logging
  - Input validation with Zod schemas
  - Automatic error serialization
  - Request batching and deduplication

#### Database
- **[PostgreSQL](https://www.postgresql.org/)** - Advanced relational database
  - ACID compliance
  - Complex queries and joins
  - JSON/JSONB support for flexible data
  - Full-text search capabilities
  - Robust indexing and performance

- **[Prisma 6.18.0](https://www.prisma.io/)** - Next-generation ORM
  - Type-safe database access
  - Automatic migrations
  - Introspection capabilities
  - Query optimization
  - Connection pooling
  - Prisma Studio for database management
  - Generated TypeScript types

#### Authentication & Authorization
- **[Better Auth 1.3](https://www.better-auth.com/)** - Modern auth library
  - Multiple OAuth providers (GitHub, Google)
  - Session management with secure cookies
  - CSRF protection
  - Password hashing with bcrypt
  - Rate limiting
  - Account linking support

- **[@polar-sh/better-auth](https://polar.sh/)** - Polar subscription integration
  - Subscription status verification
  - Webhook handling for subscription events
  - Customer portal integration
  - Feature gating middleware

#### Background Job Processing
- **[Inngest 3.44.5](https://www.inngest.com/)** - Serverless queue platform
  - Durable workflow execution
  - Automatic retries with exponential backoff
  - Step-based execution with checkpoints
  - Real-time event streaming via channels
  - Execution monitoring and debugging
  - Local development server
  - Zero infrastructure management

#### AI & Machine Learning
- **[@ai-sdk/google](https://sdk.vercel.ai/)** - Google Gemini integration
  - Gemini 1.5 Pro, Flash, and 2.0 Flash models
  - Streaming responses
  - Multimodal support

- **[@ai-sdk/openai](https://sdk.vercel.ai/)** - OpenAI integration
  - GPT-4o, GPT-4-turbo, GPT-3.5-turbo models
  - Chat completion API
  - Token usage tracking

- **[@ai-sdk/anthropic](https://sdk.vercel.ai/)** - Anthropic Claude integration
  - Claude 3.5 Sonnet, Opus, Sonnet, and Haiku models
  - Long context support
  - System prompts

#### Monitoring & Error Tracking
- **[Sentry](https://sentry.io/)** - Application monitoring platform
  - Real-time error tracking
  - Performance monitoring
  - Release tracking
  - Source map support
  - User feedback collection
  - Custom error boundaries
  - Breadcrumb logging

### Developer Experience

#### Language & Type Safety
- **[TypeScript 5](https://www.typescriptlang.org/)** - Typed JavaScript
  - Strict type checking
  - Advanced type inference
  - Branded types for domain modeling
  - Discriminated unions
  - Utility types for transformation

#### Code Quality Tools
- **[Biome 2.3.7](https://biomejs.dev/)** - Fast linter and formatter
  - 100x faster than ESLint + Prettier
  - Single tool for linting and formatting
  - Zero configuration
  - Automatic code fixes
  - Consistent code style enforcement
  - Import sorting

#### Development Tools
- **[mprocs](https://github.com/pvolok/mprocs)** - Process manager
  - Run multiple development servers
  - TUI for process monitoring
  - YAML-based configuration
  - Automatic restart on failure
  - Log aggregation

- **[Turbopack](https://turbo.build/pack)** - Next-generation bundler
  - 700x faster than Webpack
  - Incremental compilation
  - Built-in HMR (Hot Module Replacement)
  - Optimized for development speed

#### Utilities & Helpers
- **[date-fns](https://date-fns.org/)** - Modern date utility library
- **[ky](https://github.com/sindresorhus/ky)** - Elegant HTTP client
- **[handlebars](https://handlebarsjs.com/)** - Template engine for variable interpolation
- **[toposort](https://www.npmjs.com/package/toposort)** - Dependency graph sorting
- **[@paralleldrive/cuid2](https://github.com/paralleldrive/cuid2)** - Collision-resistant unique IDs
- **[html-entities](https://www.npmjs.com/package/html-entities)** - HTML entity encoding/decoding

### Infrastructure & Deployment

#### Build & Runtime
- **Node.js 20+** - JavaScript runtime
- **npm** - Package management
- **Turbopack** - Production-ready bundling

#### Database Hosting
- **PostgreSQL** - Production database
  - Managed hosting (Supabase, Neon, Railway)
  - Connection pooling
  - Automated backups

#### Deployment Platforms
- **Vercel** *(Recommended)* - Next.js optimized hosting
  - Edge network deployment
  - Automatic CI/CD
  - Preview deployments
  - Analytics and monitoring

---

## 📦 Installation & Setup

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js 20.x or higher** ([Download](https://nodejs.org/))
- **PostgreSQL database** (Local or hosted via [Supabase](https://supabase.com/), [Neon](https://neon.tech/), or [Railway](https://railway.app/))
- **npm** or **yarn** package manager
- **Git** for version control

### Quick Start Guide

#### 1. Clone the Repository

```bash
git clone https://github.com/taslim121/NodeBase.git
cd NodeBase/nodebase
```

#### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including Next.js, React, Prisma, and other dependencies.

#### 3. Environment Configuration

Create a `.env` file in the root directory with the following variables:

```env
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Database Configuration
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# PostgreSQL connection string
# Format: postgresql://USER:PASSWORD@HOST:PORT/DATABASE
DATABASE_URL="postgresql://user:password@localhost:5432/nodebase"

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Better Auth Configuration
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Generate a random secret: openssl rand -base64 32
BETTER_AUTH_SECRET="your-secret-key-min-32-characters"

# Your application URL (change in production)
BETTER_AUTH_URL="http://localhost:3000"

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# OAuth Providers
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# GitHub OAuth (https://github.com/settings/developers)
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"

# Google OAuth (https://console.cloud.google.com/)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Polar Subscription Management
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Get your access token from https://polar.sh/
POLAR_ACCESS_TOKEN="your-polar-access-token"

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Inngest Background Jobs
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Get keys from https://www.inngest.com/
INNGEST_SIGNING_KEY="signkey-prod-..."
INNGEST_EVENT_KEY="your-inngest-event-key"

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Sentry Error Monitoring (Optional)
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Get DSN from https://sentry.io/
SENTRY_DSN="your-sentry-dsn"
SENTRY_ORG="your-organization"
SENTRY_PROJECT="your-project"
SENTRY_AUTH_TOKEN="your-auth-token"

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Encryption (Auto-generated on first run if not set)
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ENCRYPTION_KEY="auto-generated-encryption-key"
```

#### 4. Database Setup

Initialize the database with Prisma:

```bash
# Run migrations to create tables
npx prisma migrate dev

# Generate Prisma Client
npx prisma generate
```

To view and manage your database visually:

```bash
npx prisma studio
```

This opens Prisma Studio at `http://localhost:5555`

#### 5. Start Development Server

Run all services (Next.js + Inngest) with a single command:

```bash
npm run dev:all
```

Or run services individually:

```bash
# Terminal 1: Next.js development server
npm run dev

# Terminal 2: Inngest development server
npm run inngest:dev
```

#### 6. Access the Application

Open your browser and navigate to:

- **Main Application**: [http://localhost:3000](http://localhost:3000)
- **Inngest Dev Server**: [http://localhost:8288](http://localhost:8288)
- **Prisma Studio**: [http://localhost:5555](http://localhost:5555) (when running)

---

## 🚀 Development Workflow

### Available Scripts

```bash
# Development
npm run dev              # Start Next.js with Turbopack
npm run dev:all          # Start all services (Next.js + Inngest)
npm run inngest:dev      # Start Inngest development server

# Build & Production
npm run build            # Build for production with Turbopack
npm start                # Start production server

# Code Quality
npm run lint             # Lint with Biome
npm run format           # Format code with Biome

# Database
npx prisma migrate dev   # Create and apply migrations
npx prisma generate      # Generate Prisma Client
npx prisma studio        # Open database GUI
npx prisma db push       # Push schema changes without migrations

# Utilities
npm run ngrok:dev        # Expose local server with ngrok
```

### Project Structure

```
nodebase/
├── prisma/                      # Database layer
│   ├── schema.prisma           # Prisma schema definition
│   └── migrations/             # Database migrations
│       ├── migration_lock.toml
│       └── [timestamp]_[name]/ # Individual migrations
│
├── public/                      # Static assets
│   ├── logo.svg
│   └── [other-assets]
│
├── src/                         # Application source code
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Authentication routes
│   │   │   ├── layout.tsx     # Auth layout wrapper
│   │   │   ├── login/         # Login page
│   │   │   └── signup/        # Signup page
│   │   │
│   │   ├── (dashboard)/       # Main application routes
│   │   │   ├── layout.tsx     # Dashboard layout with sidebar
│   │   │   ├── (editor)/      # Workflow editor
│   │   │   │   └── workflows/[id]/
│   │   │   └── (rest)/        # Other dashboard pages
│   │   │       ├── credentials/
│   │   │       ├── executions/
│   │   │       └── workflows/
│   │   │
│   │   ├── api/               # API routes
│   │   │   ├── auth/          # Better Auth endpoints
│   │   │   ├── inngest/       # Inngest webhook endpoint
│   │   │   ├── sentry-example-api/
│   │   │   └── trpc/[trpc]/   # tRPC handler
│   │   │
│   │   ├── layout.tsx         # Root layout
│   │   ├── globals.css        # Global styles
│   │   └── global-error.tsx   # Global error boundary
│   │
│   ├── components/             # Reusable components
│   │   ├── ui/                # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── input.tsx
│   │   │   └── [40+ components]
│   │   │
│   │   ├── app-header.tsx     # Application header
│   │   ├── app-sidebar.tsx    # Navigation sidebar
│   │   ├── theme-provider.tsx # Theme context
│   │   ├── theme-toggle.tsx   # Dark/light mode toggle
│   │   ├── upgrade-modal.tsx  # Pro upgrade modal
│   │   ├── entity-components.tsx # Reusable entity UI
│   │   ├── initial-node.tsx   # Initial workflow node
│   │   ├── node-selector.tsx  # Node palette
│   │   ├── workflow-node.tsx  # Base workflow node
│   │   └── react-flow/        # React Flow customizations
│   │
│   ├── feature/                # Feature modules
│   │   ├── auth/              # Authentication
│   │   │   ├── component/
│   │   │   │   ├── login-form.tsx
│   │   │   │   └── signup-form.tsx
│   │   │   └── lib/
│   │   │
│   │   ├── credentials/        # Credential management
│   │   │   ├── components/
│   │   │   │   ├── credentials.tsx
│   │   │   │   ├── credential-form.tsx
│   │   │   │   └── credential-dialog.tsx
│   │   │   ├── hooks/
│   │   │   └── schemas/
│   │   │
│   │   ├── editor/            # Workflow editor
│   │   │   ├── components/
│   │   │   │   ├── editor.tsx
│   │   │   │   ├── canvas.tsx
│   │   │   │   └── toolbar.tsx
│   │   │   └── hooks/
│   │   │
│   │   ├── executions/        # Execution nodes & history
│   │   │   ├── components/
│   │   │   │   ├── executions.tsx
│   │   │   │   ├── execution.tsx
│   │   │   │   ├── anthropic/ # Claude node
│   │   │   │   ├── gemini/    # Gemini node
│   │   │   │   ├── openai/    # OpenAI node
│   │   │   │   ├── discord/   # Discord webhook
│   │   │   │   ├── slack/     # Slack webhook
│   │   │   │   └── http-requests/ # HTTP node
│   │   │   └── hooks/
│   │   │
│   │   ├── triggers/          # Trigger nodes
│   │   │   └── components/
│   │   │       ├── manual-trigger/
│   │   │       ├── google-form-trigger/
│   │   │       └── stripe-trigger/
│   │   │
│   │   ├── workflows/         # Workflow management
│   │   │   ├── components/
│   │   │   │   ├── workflows.tsx
│   │   │   │   └── workflow-form.tsx
│   │   │   ├── hooks/
│   │   │   └── schemas/
│   │   │
│   │   └── subscription/      # Pro subscription
│   │       ├── components/
│   │       ├── hooks/
│   │       └── lib/
│   │
│   ├── generated/              # Generated code
│   │   └── prisma/            # Prisma Client
│   │       ├── client.ts      # Prisma Client (server-only)
│   │       ├── enums.ts       # Enum types
│   │       ├── models.ts      # Model type exports
│   │       └── models/        # Individual model types
│   │
│   ├── config/                 # Configuration
│   │   ├── constants.ts       # App constants
│   │   └── node-components.ts # Node type registry
│   │
│   ├── hooks/                  # Global hooks
│   │   ├── use-entity-search.tsx
│   │   ├── use-mobile.ts
│   │   └── use-upgrade-modal.tsx
│   │
│   ├── inngest/                # Background jobs
│   │   ├── client.ts          # Inngest client
│   │   ├── functions.ts       # Job definitions
│   │   ├── utils.ts           # Topological sort
│   │   └── channels/          # Streaming channels
│   │       ├── anthropic.ts
│   │       ├── gemini.ts
│   │       └── openai.ts
│   │
│   ├── lib/                    # Utility libraries
│   │   ├── auth.ts            # Better Auth config
│   │   ├── auth-client.ts     # Client-side auth
│   │   ├── auth-utils.ts      # Auth helpers
│   │   ├── db.ts              # Prisma Client singleton
│   │   ├── encryption.ts      # AES-256 encryption
│   │   ├── polar.ts           # Polar SDK
│   │   └── utils.ts           # General utilities
│   │
│   ├── trpc/                   # tRPC configuration
│   │   ├── init.ts            # tRPC instance
│   │   ├── client.tsx         # Client-side provider
│   │   ├── server.tsx         # Server-side caller
│   │   ├── query-client.ts    # React Query config
│   │   └── routers/           # API routers
│   │       ├── index.ts       # Root router
│   │       ├── credentials.ts
│   │       ├── executions.ts
│   │       └── workflows.ts
│   │
│   ├── instrumentation.ts      # Node instrumentation
│   └── instrumentation-client.ts # Browser instrumentation
│
├── components.json             # shadcn/ui config
├── biome.json                  # Biome configuration
├── mprocs.yaml                 # Multi-process config
├── next.config.ts              # Next.js configuration
├── postcss.config.mjs          # PostCSS config
├── prisma.config.ts            # Prisma config
├── tsconfig.json               # TypeScript config
├── package.json                # Dependencies
├── .env                        # Environment variables
└── README.md                   # This file
```

---

## 📝 Database Schema

NodeBase uses **PostgreSQL** with **Prisma ORM** for type-safe database access. The schema is designed to support complex workflow automation with proper relationships and data integrity.

### Core Models Overview

#### User Model
The foundation of the application, storing user account information:
- Unique identifier and email for authentication
- Profile information (name, image, email verification status)
- OAuth account links through Better Auth
- Relationships to workflows, credentials, and execution history
- Timestamp tracking for account creation and updates

#### Workflow Model
Represents a complete automation workflow:
- User-owned workflows with unique names
- Contains collections of nodes and their connections
- Tracks all execution history for the workflow
- Maintains creation and modification timestamps
- Serves as the parent container for the workflow graph

#### Node Model
Individual building blocks within a workflow:
- Strongly typed nodes (triggers, AI models, actions)
- Stores node-specific configuration as flexible JSON
- Canvas position data for visual editor persistence
- Optional credential association for authenticated nodes
- Bidirectional connections (input and output relationships)
- Supports 10 node types: Initial, Manual Trigger, HTTP Request, Google Form Trigger, Stripe Trigger, Anthropic, Gemini, OpenAI, Discord, and Slack

#### Connection Model
Defines the data flow between nodes:
- Links source node (fromNode) to destination node (toNode)
- Belongs to a specific workflow for isolation
- Used to build the execution dependency graph
- Enables topological sorting for correct execution order
- Timestamp tracking for connection creation

#### Credential Model
Secure storage for API keys and authentication tokens:
- User-scoped credentials for privacy and security
- Type-specific credentials (OpenAI, Anthropic, Gemini)
- Encrypted data storage using AES-256 encryption
- Named credentials for easy identification
- Can be associated with multiple nodes
- Supports credential reuse across workflows

#### Execution Model
Historical record of workflow runs:
- Tracks execution status (Running, Success, Failed)
- Records start time and optional completion time
- Stores output data from successful executions
- Captures error messages and stack traces for debugging
- Links to Inngest event for distributed job tracking
- User and workflow association for access control
- Duration calculation for performance monitoring

### Database Management Tools

NodeBase provides comprehensive database management through Prisma CLI:

- **Visual Database Explorer**: Launch Prisma Studio with `npx prisma studio` to browse and edit data through an intuitive GUI at `http://localhost:5555`

- **Schema Migrations**: Use `npx prisma migrate dev --name description` to create versioned migrations when modifying the schema, ensuring safe database evolution

- **Database Reset**: Execute `npx prisma migrate reset` to completely reset the database (useful for development, but be cautious as it deletes all data)

- **Direct Schema Push**: Run `npx prisma db push` to quickly push schema changes without creating migrations (ideal for prototyping)

- **Schema Introspection**: Use `npx prisma db pull` to generate a Prisma schema from an existing database structure

- **Type Generation**: Execute `npx prisma generate` to regenerate TypeScript types after schema changes, ensuring type safety throughout the application

---

## 🔐 Authentication & Authorization

### Better Auth Configuration

NodeBase uses **Better Auth** with custom **Polar integration** for seamless subscription management and authentication:

**Key Authentication Features:**
- **OAuth Providers**: Supports GitHub and Google OAuth for passwordless authentication
- **Session Management**: Secure, HTTP-only cookie-based sessions with 7-day expiration
- **CSRF Protection**: Built-in protection against cross-site request forgery
- **Account Linking**: Users can connect multiple OAuth providers to a single account
- **Polar Plugin**: Deep integration with Polar for subscription status verification

**Session Configuration:**
- Sessions expire after 7 days of inactivity
- Automatic session refresh every 24 hours for active users
- Secure cookie settings with SameSite protection
- Server-side session validation on every request

### OAuth Provider Setup

#### GitHub OAuth Configuration
To enable GitHub authentication:
1. Navigate to **GitHub Settings** → **Developer Settings** → **OAuth Apps**
2. Click **"New OAuth App"** to create a new application
3. Set **Application name** to your app name (e.g., "NodeBase")
4. Set **Homepage URL** to `http://localhost:3000` (or your production URL)
5. Set **Authorization callback URL** to `http://localhost:3000/api/auth/callback/github`
6. Click **"Register application"**
7. Copy the **Client ID** and generate a new **Client Secret**
8. Add both values to your `.env` file as `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET`

#### Google OAuth Configuration
To enable Google authentication:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to **APIs & Services** → **Credentials**
4. Click **"Create Credentials"** → **"OAuth client ID"**
5. Configure the OAuth consent screen if prompted
6. Select **"Web application"** as the application type
7. Add **Authorized JavaScript origins**: `http://localhost:3000`
8. Add **Authorized redirect URIs**: `http://localhost:3000/api/auth/callback/google`
9. Copy the **Client ID** and **Client Secret**
10. Add both values to your `.env` file as `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`

### Session Management in Components

**Client-Side Session Hook:**
Use the `useSession` hook in any client component to access user session data:

```typescript
import { useSession } from '@/lib/auth-client';

function MyComponent() {
  const { data: session, isPending } = useSession();
  
  if (isPending) return <LoadingSpinner />;
  if (!session) return <LoginPrompt />;
  
  return <div>Welcome, {session.user.name}</div>;
}
```

**Server-Side Session Access:**
Access session data in Server Components and API routes:

```typescript
import { auth } from '@/lib/auth';

async function ServerComponent() {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  
  if (!session) {
    redirect('/login');
  }
  
  return <div>Hello, {session.user.name}</div>;
}
```

### Protected Routes

Routes are automatically protected using Next.js middleware:

**Middleware Configuration:**
- **Public Routes**: Login, signup, and marketing pages are accessible without authentication
- **Protected Routes**: All dashboard routes require active session
- **Automatic Redirects**: Unauthenticated users are redirected to `/login`
- **Subscription Checks**: Pro routes verify active Polar subscription

The middleware runs before every request, ensuring secure access control across the entire application.

---

## 💳 Subscription Management with Polar

### Polar Integration Overview

NodeBase integrates with **[Polar](https://polar.sh/)** for comprehensive subscription billing and management:

**Subscription Features:**
- **Recurring Billing**: Automated monthly or annual subscription cycles
- **Pro Plan Access**: Unlock advanced nodes and features with Pro subscription
- **Customer Portal**: Self-service subscription management for users
- **Webhook Integration**: Real-time subscription status updates
- **Feature Gating**: Automatic access control based on subscription status
- **Trial Support**: Optional trial periods for new subscribers

**Polar SDK Configuration:**
The Polar SDK is initialized with your access token and provides type-safe methods for:
- Checking subscription status
- Listing customer subscriptions
- Creating customer portal sessions
- Managing products and pricing
- Handling subscription webhooks

### Subscription Status Verification

**Server-Side Subscription Check:**
Use the `hasActiveSubscription` helper to verify Pro status:

```typescript
// In tRPC procedures or API routes
const isPro = await hasActiveSubscription(userId);

if (!isPro) {
  throw new TRPCError({
    code: 'FORBIDDEN',
    message: 'This feature requires a Pro subscription'
  });
}
```

**Subscription-Based Feature Gating:**
Features are automatically gated based on subscription status:
- **Free Tier**: Manual triggers, basic AI nodes (limited)
- **Pro Tier**: All node types, unlimited executions, advanced features

The middleware automatically checks subscription status and enforces access control.

### Customer Portal Access

**Generate Portal Session:**
Users can manage their subscriptions through the integrated customer portal:

1. User clicks "Manage Subscription" in account settings
2. Backend generates a secure portal session URL
3. User is redirected to Polar's customer portal
4. Portal allows subscription updates, payment method changes, and invoice access
5. User returns to NodeBase after making changes

**Portal Features:**
- Update payment methods
- Change subscription plans
- View billing history
- Download invoices
- Cancel subscription

### Webhook Handling

NodeBase listens for Polar webhooks to handle subscription events:

**Supported Events:**
- `subscription.created` - New subscription started
- `subscription.updated` - Subscription modified
- `subscription.cancelled` - Subscription cancelled
- `subscription.renewed` - Subscription renewed
- `payment.succeeded` - Successful payment
- `payment.failed` - Failed payment

Webhooks ensure real-time synchronization between Polar and NodeBase, automatically updating user access when subscriptions change.

---

## 🔄 Workflow Execution

### Execution Flow Overview

NodeBase workflows execute through a sophisticated background job system powered by Inngest:

**Complete Execution Lifecycle:**

1. **Trigger Activation**: Workflow starts via manual trigger, webhook, or scheduled event
2. **Job Creation**: Inngest event created with workflow ID and user context
3. **Node Resolution**: All workflow nodes and connections loaded from database
4. **Dependency Analysis**: Topological sort determines optimal execution order
5. **Sequential Processing**: Nodes execute one-by-one based on dependency graph
6. **Context Threading**: Each node's output becomes available to downstream nodes
7. **Real-Time Updates**: Execution status streamed via Inngest channels
8. **Error Handling**: Failures captured with full stack traces for debugging
9. **Completion**: Final status (SUCCESS/FAILED) recorded with execution duration

**Execution Features:**
- Parallel execution of independent node branches
- Automatic retry with exponential backoff for transient failures
- Timeout protection to prevent infinite loops
- Comprehensive logging at each execution step
- Real-time progress monitoring through UI

### Execution Context System

**Variable Passing Between Nodes:**
Each node outputs data that becomes accessible to downstream nodes through a templated variable system:

**Context Structure:**
Every node produces an output object with a standard format:
- `text` property for primary text output (used by AI nodes)
- Custom properties for structured data (HTTP responses, form data, etc.)
- Accessible via Handlebars template syntax: `{{nodeName.propertyName}}`

**Example Context Flow:**
1. HTTP Request node named "getUser" returns user data
2. Output: `{ text: '{"name": "John"}', statusCode: 200 }`
3. Gemini node can reference: `Analyze this user: {{getUser.text}}`
4. Discord node can use: `User fetched with status {{getUser.statusCode}}`

**Template Processing:**
- Handlebars engine compiles templates before node execution
- Variables automatically replaced with actual values
- Invalid references result in empty strings (graceful degradation)
- Supports nested property access and iteration

### Topological Sorting

**Dependency-Based Execution Order:**
NodeBase uses topological sorting to determine the correct execution sequence:

**Algorithm Steps:**
1. Build a directed graph from node connections
2. Identify nodes with no incoming connections (entry points)
3. Sort nodes ensuring dependencies execute before dependents
4. Detect and reject cycles (circular dependencies)
5. Filter disconnected nodes (not part of main execution path)

**Benefits:**
- Guarantees correct data flow through workflow
- Enables parallel execution of independent branches
- Prevents deadlocks from circular dependencies
- Optimizes execution time by identifying parallelizable nodes

**Error Scenarios:**
- Circular dependencies detected at execution start
- Disconnected nodes excluded from execution
- Invalid connections caught during validation

### Real-Time Streaming

**AI Node Streaming:**
AI nodes (OpenAI, Anthropic, Gemini) support real-time token streaming:

**Streaming Architecture:**
- Inngest channels provide bidirectional communication
- Frontend subscribes to execution channel
- Backend sends token chunks as they're generated
- UI updates in real-time showing AI response

**Streaming Benefits:**
- Improved perceived performance (users see responses immediately)
- Better UX for long-running AI generations
- Ability to show progress for time-consuming operations
- Token-by-token display mimics ChatGPT experience

**Channel Implementation:**
Each AI provider has a dedicated Inngest channel:
- `openai-stream` for OpenAI GPT models
- `anthropic-stream` for Claude models
- `gemini-stream` for Google Gemini models

Channels handle connection management, reconnection, and error recovery automatically.

### Comprehensive Error Handling

**Multi-Layer Error Capture:**

**Node-Level Errors:**
- Try-catch blocks around each node execution
- Specific error messages for different failure types
- Validation errors for missing or invalid configuration
- API errors from external services with retry logic

**Execution-Level Errors:**
- Workflow-wide error state tracking
- Automatic execution marking as FAILED
- Full error stack trace preservation
- Error context including node ID and configuration

**Database Persistence:**
All errors are recorded in the Execution model:
- `error` field stores user-friendly error message
- `errorStack` field stores complete stack trace for debugging
- `status` field set to FAILED
- `completedAt` timestamp recorded

**User-Facing Error Display:**
- Collapsible stack trace viewer in execution details
- Color-coded error messages (theme-aware)
- Actionable error messages with potential fixes
- Link to relevant documentation when available

**Error Recovery:**
- Manual retry option for failed executions
- Automatic retry with exponential backoff for transient errors
- Partial execution state preserved for debugging
- Ability to edit workflow and retry from failed node

---

## 🔒 Security Best Practices

NodeBase implements enterprise-grade security measures to protect user data, API credentials, and workflow execution:

### Credential Encryption

**AES-256 Encryption:**
All API keys, tokens, and sensitive credentials are encrypted before storage in the database:
- Uses industry-standard AES-256-CBC encryption algorithm
- Unique initialization vector (IV) for each encrypted value
- Encryption key stored securely in environment variables
- Automatic encryption when credentials are created or updated
- Automatic decryption only during node execution
- Encrypted data is never exposed through API responses

**Key Management:**
- Encryption key generated automatically on first run if not provided
- 256-bit key strength for maximum security
- Key rotation support for enhanced security compliance
- Separate keys recommended for development and production environments

### Environment Variable Security

**Sensitive Data Protection:**
Never commit sensitive data to version control:
- All `.env` files are git-ignored by default
- Separate environment files for different environments
- Use environment-specific variables for API keys and secrets
- Vercel/deployment platform environment variable management
- Regular rotation of API keys and secrets

**Production Configuration:**
- Use strong, randomly generated secrets
- Enable environment variable encryption on deployment platforms
- Implement secret management services for enterprise deployments
- Regular security audits of environment configurations

### CSRF Protection

**Built-in Protection:**
Better Auth provides comprehensive CSRF protection:
- **Secure Cookies**: All authentication cookies are httpOnly and secure
- **SameSite Attribute**: Prevents CSRF attacks through strict SameSite policies
- **CSRF Tokens**: State-changing operations require valid CSRF tokens
- **Origin Validation**: Request origins are validated against allowed domains
- **Double Submit Cookies**: Additional CSRF protection layer

### Rate Limiting

**API Protection:**
Implement rate limiting to prevent abuse and DDoS attacks:
- Configurable rate limits per endpoint
- IP-based and user-based rate limiting
- Sliding window algorithm for accurate limiting
- Automatic blocking of excessive requests
- Graceful error responses when limits are exceeded

**Recommended Limits:**
- Authentication endpoints: 5 requests per minute
- API endpoints: 100 requests per minute
- Workflow execution: 10 concurrent executions per user
- Webhook endpoints: 1000 requests per hour

### Additional Security Measures

**Input Validation:**
- Zod schema validation for all user inputs
- SQL injection prevention through Prisma parameterized queries
- XSS protection through automatic escaping in React
- Content Security Policy (CSP) headers
- Strict TypeScript type checking

**Access Control:**
- User-scoped data isolation in database
- Middleware-based route protection
- Subscription-based feature access control
- Role-based permissions (planned for team features)

**Audit Logging:**
- Track workflow executions with user IDs
- Log authentication events
- Record credential access
- Monitor suspicious activity patterns

---

## 🐛 Debugging & Monitoring

NodeBase provides comprehensive debugging and monitoring tools to ensure reliability and quick issue resolution:

### Sentry Integration

**Real-Time Error Tracking:**
Sentry integration provides enterprise-grade error monitoring:
- **Automatic Error Capture**: All unhandled errors automatically reported
- **Source Maps**: Production errors mapped to original source code
- **Stack Traces**: Full stack traces with local variables
- **User Context**: Errors tagged with user IDs for investigation
- **Environment Tagging**: Separate error tracking for dev/staging/production
- **Release Tracking**: Track errors by deployment version
- **Performance Monitoring**: Identify slow database queries and API calls

**Error Boundaries:**
React error boundaries catch and report UI errors:
- Global error boundary for app-wide crashes
- Component-specific error boundaries for graceful degradation
- User-friendly error messages with retry options
- Automatic error reporting to Sentry

**Performance Monitoring:**
- Track slow database queries
- Monitor API response times
- Identify bottlenecks in workflow execution
- Track resource usage and memory leaks

### Logging Best Practices

**Structured Logging:**
All logs follow a consistent structured format:
- JSON-formatted logs for easy parsing
- Log levels: debug, info, warn, error
- Contextual information (user ID, workflow ID, etc.)
- Timestamps in ISO 8601 format
- Request IDs for tracing requests across services

**Log Categories:**
- **Authentication**: Login attempts, session creation, OAuth flows
- **Workflow Execution**: Node execution, context passing, completion status
- **Database Operations**: Queries, mutations, connection issues
- **External API Calls**: Request/response logs for debugging integrations
- **Performance**: Execution times, resource usage, bottlenecks

// Error logging
try {
  await executeWorkflow();
} catch (error) {
  console.error({
    level: 'error',
    message: 'Workflow execution failed',
    error: error.message,
    stack: error.stack,
    workflowId: workflow.id,
  });
  
  Sentry.captureException(error, {
    tags: { workflowId: workflow.id },
  });
}
```

### Inngest Dev Server

Monitor background jobs locally:

```bash
npm run inngest:dev
```

Access the dev server at [http://localhost:8288](http://localhost:8288) to:
- View function runs in real-time
- Inspect execution logs
- Replay failed jobs
- Test events manually

### Prisma Studio

Visual database explorer:

```bash
npx prisma studio
```

Features:
- Browse all tables and relationships
- Edit records inline
- Run queries
- View schema diagram

---

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Push to GitHub**
```bash
git push origin main
```

2. **Import to Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "Import Project"
- Select your NodeBase repository

3. **Configure Environment Variables**
Add all `.env` variables in Vercel dashboard

4. **Configure Build Settings**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install"
}
```

5. **Deploy**
Vercel automatically deploys on every push to main

### Environment Configuration

For production, update:

```env
BETTER_AUTH_URL="https://your-domain.com"
DATABASE_URL="your-production-database-url"
NODE_ENV="production"
```

### Database Hosting Options

#### Supabase
- Free tier available
- Built-in connection pooling
- Automatic backups
- [supabase.com](https://supabase.com)

#### Neon
- Serverless Postgres
- Generous free tier
- Branch databases
- [neon.tech](https://neon.tech)

#### Railway
- Simple deployment
- Automatic backups
- Monitoring included
- [railway.app](https://railway.app)

### Post-Deployment Checklist

- [ ] Run database migrations
- [ ] Verify OAuth callback URLs
- [ ] Test webhook endpoints
- [ ] Configure Inngest production keys
- [ ] Set up Sentry alerts
- [ ] Enable Polar webhooks
- [ ] Test payment flow
- [ ] Monitor initial deployments

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

### Development Workflow

1. **Fork the repository**
```bash
git clone https://github.com/your-username/NodeBase.git
```

2. **Create a feature branch**
```bash
git checkout -b feature/amazing-feature
```

3. **Make your changes**
- Follow existing code style
- Add tests if applicable
- Update documentation

4. **Commit with clear messages**
```bash
git commit -m "feat: add amazing feature"
```

5. **Push to your fork**
```bash
git push origin feature/amazing-feature
```

6. **Open a Pull Request**
- Describe your changes
- Link related issues
- Add screenshots for UI changes

### Code Style

- **TypeScript**: Strict mode enabled
- **Formatting**: Biome (run `npm run format`)
- **Linting**: Biome (run `npm run lint`)
- **Naming**: camelCase for variables, PascalCase for components
- **Components**: One component per file
- **Imports**: Group by type (React, external, internal, types)

### Commit Conventions

Follow conventional commits:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

---

## 📚 Additional Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [tRPC Documentation](https://trpc.io/docs)
- [Inngest Documentation](https://www.inngest.com/docs)
- [Better Auth Documentation](https://www.better-auth.com/docs)
- [React Flow Documentation](https://reactflow.dev/learn)

### Community & Support
- [GitHub Issues](https://github.com/taslim121/NodeBase/issues)
- [GitHub Discussions](https://github.com/taslim121/NodeBase/discussions)

### Related Projects
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Polar](https://polar.sh/) - Subscription management
- [Inngest](https://www.inngest.com/) - Background jobs

---

## 📄 License

This project is currently **private** and not licensed for public use. All rights reserved.

For licensing inquiries, please contact the repository owner.

---

## 🙏 Acknowledgments

NodeBase is built on the shoulders of giants. Special thanks to:

- **[Vercel](https://vercel.com/)** - Next.js and hosting platform
- **[Prisma](https://www.prisma.io/)** - Database toolkit
- **[shadcn](https://twitter.com/shadcn)** - UI component library
- **[xyflow](https://reactflow.dev/)** - React Flow library
- **[Inngest](https://www.inngest.com/)** - Background job infrastructure
- **[Better Auth](https://www.better-auth.com/)** - Authentication library
- **[Polar](https://polar.sh/)** - Subscription management
- **[Biome](https://biomejs.dev/)** - Toolchain for web projects

And the entire open-source community for making projects like this possible.

---

## 📧 Contact & Support

**Developer**: Taslim  
**GitHub**: [@taslim121](https://github.com/taslim121)  
**Project**: [NodeBase Repository](https://github.com/taslim121/NodeBase)

For bug reports and feature requests, please use [GitHub Issues](https://github.com/taslim121/NodeBase/issues).

---

<div align="center">

### 🌟 Star this repository if you find it helpful!

**Built with ❤️ using Next.js, React, TypeScript, and Prisma**

*Making workflow automation accessible to everyone*

[Report Bug](https://github.com/taslim121/NodeBase/issues) · [Request Feature](https://github.com/taslim121/NodeBase/issues) · [Documentation](https://github.com/taslim121/NodeBase/wiki)

</div>
