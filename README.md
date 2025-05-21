# Admin Dashboard

A modern, responsive admin dashboard built with Next.js, Tailwind CSS, and shadcn/ui components. This dashboard includes user management, content moderation, and supplier/event approval workflows with dark mode support.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Form Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://github.com/colinhacks/zod)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Theme Switching**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

\`\`\`bash
git clone https://github.com/longtran29/SEO-PROJECT.git
cd seo-project
\`\`\`

2. Install dependencies:

\`\`\`bash
npm install
# or
yarn
# or
pnpm install
\`\`\`

3. Start the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

\`\`\`
admin-dashboard/
├── app/                    # Next.js app directory
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Dashboard page
│   └── register/           # Registration page
├── components/             # React components
│   ├── dashboard.tsx       # Main dashboard component
│   ├── dashboard-header.tsx # Dashboard header
│   ├── dashboard-shell.tsx # Dashboard layout wrapper
│   ├── mode-toggle.tsx     # Dark mode toggle
│   ├── pending-events.tsx  # Events approval component
│   ├── pending-suppliers.tsx # Suppliers approval component
│   ├── register-form.tsx   # Registration form
│   ├── reported-posts.tsx  # Content moderation component
│   ├── sidebar.tsx         # Dashboard sidebar
│   ├── stats-cards.tsx     # Statistics cards
│   ├── theme-provider.tsx  # Theme provider wrapper
│   └── ui/                 # shadcn/ui components
├── hooks/                  # Custom React hooks
│   └── use-toast.ts        # Toast notifications hook
├── lib/                    # Utility functions and libraries
│   ├── schema.ts           # Zod validation schemas
│   ├── store.ts            # Zustand store
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── .gitignore
├── next.config.js
├── package.json
├── README.md
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
\`\`\`

## Usage

### Dashboard

The main dashboard displays key metrics and provides access to different sections:

- **Stats Cards**: Shows important numbers like total users, submissions, etc.
- **Pending Suppliers**: Review and approve supplier applications
- **Pending Events**: Review and approve/reject event submissions
- **Reported Posts**: Moderate reported content with view and action options

### User Registration

The registration page includes:

- Form with validation for name, email, and password
- Password strength requirements
- State persistence using Zustand
- Success/error notifications

### Theme Switching

Toggle between light and dark modes using the theme switcher in the top-right corner.

## Customization

### Styling

This project uses Tailwind CSS for styling. You can customize the appearance by modifying:

- `tailwind.config.ts` - For theme colors and other Tailwind settings
- `app/globals.css` - For global styles and CSS variables

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vercel](https://vercel.com/) for hosting and deployment
