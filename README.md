# 🚀 NodeBase

**NodeBase** is a powerful workflow automation SaaS platform that enables users to create, manage, and execute complex workflows with a visual node-based editor. Built with modern web technologies, NodeBase combines the flexibility of visual programming with enterprise-grade infrastructure.

![NodeBase Banner](public/logo.svg)

> ⚠️ **Status**: This project is currently in active development. Some features are still being implemented.

## ✨ Features

### Core Functionality
- 🔄 **Visual Workflow Editor** - Drag-and-drop interface powered by React Flow
- 🎯 **Multiple Trigger Types** - Manual triggers, HTTP requests, and more
- 🔗 **Node-Based Architecture** - Connect and configure workflow nodes visually
- 💾 **Persistent Workflows** - Save and manage unlimited workflows
- 🎨 **Dark/Light Mode** - Auto-syncs with system theme or manual override
- 📊 **Workflow Execution** - Background job processing with Inngest
- 🔐 **Secure Authentication** - OAuth with GitHub/Google via Better Auth

### Premium Features
- ⭐ **Pro Subscription** - Powered by Polar for recurring payments
- 🚀 **Advanced Node Types** - HTTP requests, API integrations
- 📈 **Execution History** - Track and monitor workflow runs
- 🔑 **Credential Management** - Secure storage for API keys

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 15.5.4](https://nextjs.org/) (App Router, Turbopack)
- **UI Library**: React 19.1.0
- **Styling**: Tailwind CSS v4 + shadcn/ui components
- **State Management**: TRPC + React Query
- **Forms**: React Hook Form + Zod validation
- **Flow Editor**: [xyflow/react](https://reactflow.dev/) v12.9.3

### Backend
- **API Layer**: [tRPC 11.7.1](https://trpc.io/)
- **Database**: PostgreSQL with [Prisma 6.18.0](https://www.prisma.io/)
- **Authentication**: [Better Auth 1.3](https://www.better-auth.com/) + Polar integration
- **Background Jobs**: [Inngest 3.44.5](https://www.inngest.com/)
- **Monitoring**: Sentry for error tracking

### Developer Experience
- **Language**: TypeScript 5
- **Linting/Formatting**: Biome 2.3.7
- **Process Manager**: mprocs for multi-service dev
- **Package Manager**: npm

## 📦 Installation

### Prerequisites
- Node.js 20+ (recommended)
- PostgreSQL database
- npm or yarn

### Setup Steps

1. **Clone the repository**
```bash
git clone https://github.com/taslim121/NodeBase.git
cd NodeBase/nodebase
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/nodebase"

# Better Auth
BETTER_AUTH_SECRET="your-secret-key"
BETTER_AUTH_URL="http://localhost:3000"

# OAuth Providers
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Polar (Subscriptions)
POLAR_ACCESS_TOKEN="your-polar-access-token"

# Inngest
INNGEST_SIGNING_KEY="your-inngest-key"
INNGEST_EVENT_KEY="your-event-key"

# Sentry (Optional)
SENTRY_DSN="your-sentry-dsn"
```

4. **Set up the database**
```bash
npx prisma migrate dev
npx prisma generate
```

5. **Run the development server**
```bash
npm run dev:all
```

This starts both the Next.js dev server and Inngest dev server using mprocs.

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Development

### Available Scripts

```bash
# Start Next.js dev server with Turbopack
npm run dev

# Start all services (Next.js + Inngest)
npm run dev:all

# Build for production
npm run build

# Start production server
npm start

# Lint code with Biome
npm run lint

# Format code with Biome
npm run format

# Run Inngest dev server
npm run inngest:dev
```

### Project Structure

```
nodebase/
├── prisma/              # Database schema and migrations
│   ├── schema.prisma
│   └── migrations/
├── public/              # Static assets
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── (auth)/     # Authentication pages
│   │   ├── (dashboard)/# Main app pages
│   │   └── api/        # API routes (TRPC, Inngest)
│   ├── components/     # Reusable UI components
│   │   └── ui/         # shadcn/ui components
│   ├── feature/        # Feature-specific modules
│   │   ├── auth/       # Authentication logic
│   │   ├── editor/     # Workflow editor
│   │   ├── executions/ # Execution nodes
│   │   ├── triggers/   # Trigger nodes
│   │   ├── workflows/  # Workflow management
│   │   └── subscription/
│   ├── lib/            # Utility functions
│   │   ├── auth.ts     # Auth configuration
│   │   ├── db.ts       # Prisma client
│   │   └── polar.ts    # Polar SDK
│   ├── trpc/           # TRPC setup and routers
│   ├── inngest/        # Background job functions
│   └── generated/      # Prisma generated types
├── mprocs.yaml         # Multi-process configuration
└── package.json
```

## 🎨 Key Features in Development

### Workflow Editor
- Visual node-based editor with real-time updates
- Support for multiple node types (triggers, actions, conditions)
- Connection validation and error handling
- Auto-save functionality

### Node Types

#### Triggers
- **Manual Trigger**: Start workflows manually via button click
- **HTTP Webhook** *(Coming Soon)*: Trigger via HTTP requests
- **Schedule** *(Coming Soon)*: Run workflows on a schedule

#### Actions
- **HTTP Request**: Make API calls to external services
- **Conditional Logic** *(Coming Soon)*: Branch workflows based on conditions
- **Data Transform** *(Coming Soon)*: Modify data between nodes

## 📝 Database Schema

The application uses Prisma with PostgreSQL. Key models include:

- **User**: User accounts with OAuth support
- **Session**: Authentication sessions
- **Workflow**: Workflow definitions
- **Node**: Individual workflow nodes
- **Connection**: Connections between nodes
- **Account**: OAuth provider accounts

Run `npx prisma studio` to explore the database visually.

## 🔐 Authentication

NodeBase uses Better Auth with Polar integration for:
- GitHub OAuth
- Google OAuth
- Session management
- Subscription verification
- Billing portal access

## 💳 Subscriptions

Premium features are managed through [Polar](https://polar.sh/):
- Recurring subscription billing
- Pro plan with advanced features
- Customer portal for subscription management
- Automatic feature gating via middleware

## 🐛 Error Monitoring

Integrated with Sentry for:
- Real-time error tracking
- Performance monitoring
- Release tracking
- Source maps for better debugging

## 🤝 Contributing

This is a personal project currently in development. Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and not yet licensed for public use.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Flow editor by [React Flow](https://reactflow.dev/)
- Authentication by [Better Auth](https://www.better-auth.com/)
- Icons by [Lucide](https://lucide.dev/)

## 📧 Contact

**Taslim** - [@taslim121](https://github.com/taslim121)

Project Link: [https://github.com/taslim121/NodeBase](https://github.com/taslim121/NodeBase)

---

<div align="center">
  <sub>Built with ❤️ using Next.js, React, and TypeScript</sub>
</div>
