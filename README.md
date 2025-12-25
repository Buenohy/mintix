# 📅 Events Management Module

A high-performance Events Management application built with a focus on **fluid UI/UX**, **scalable architecture**, and **strict type safety**.

## 🚀 Project Status (as of Dec 24, 2025)

- **Frontend:** 100% Complete (Listing, Details, Creation, and Editing).
- **Backend:** API routes and Database Schemas are implemented. Integration with **TiDB Cloud** via Drizzle ORM encountered driver-level instabilities (serverless driver connectivity), which prevented full production persistence by the deadline.
- **Bonus (Web3):** In progress.

> [!IMPORTANT]
> **Commitment Note:** Although the submission deadline is today (Dec 24, 2025), I am committed to delivering 100% of the requested features—including a stabilized backend and the Web3/Solana bonus—within the next few days. I am pushing this version now to show my progress, but I will complete the entire task to demonstrate my problem-solving skills and real interest in this role.

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (Strict usage of **Type Aliases**, avoiding interfaces and `any` as requested)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Data Management:** TanStack Query (React Query) v5
- **ORM & Database:** Drizzle ORM + TiDB Cloud (MySQL)
- **Validation:** Zod + React Hook Form

## 📂 Project Architecture

The project follows a **Feature-based folder pattern**, isolating business logic from generic UI components to ensure maintainability:

```text
src/
├── app/                  # App Router: Pages & API Route Handlers
│   ├── api/              # CRUD endpoints for events
│   ├── details/          # Event detail page
│   └── eventspage/       # Main events list page
├── components/
│   ├── features/events/  # Business logic (Cards, List, EventForm)
│   ├── layout/           # Structural components (Nav, Footer)
│   └── ui/               # Base components (Design System/Atomic UI)
├── db/                   # Drizzle configuration and MySQL Schema
├── hooks/                # Custom hooks for data fetching (use-events.ts)
└── providers/            # Context Providers (QueryClient, etc.)
```

## 📋 Data Model (Schema)

The schema was designed to handle the full lifecycle of an event with clear status management:

```typescript
export const events = mysqlTable("events", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  date: timestamp("date").notNull(),
  location: varchar("location", { length: 255 }).notNull(),
  status: mysqlEnum("status", [
    "upcoming",
    "ongoing",
    "cancelled",
    "completed",
  ]),
  createdAt: timestamp("created_at").defaultNow(),
});
```

## ⚙️ Local Setup

1.  **Installation:**
    ```bash
    npm install
    ```
2.  **Environment Variables:**
    Create a `.env.local` file with your MySQL/TiDB credentials:
    ```env
    DATABASE_URL=your_connection_string
    ```
3.  **Run Development Server:**
    ```bash
    npm run dev
    ```

## 🧠 Engineering Decisions & Challenges

- **UI Abstraction:** I separated components into `features/events` to ensure that form logic and list specialized behaviors do not pollute the global component library.
- **Drizzle & TiDB:** I faced handshake issues with the `@tidbcloud/serverless` driver within the Next.js 16 Edge runtime. I prioritized delivering a robust, type-safe frontend while I work on stabilizing the persistence layer.
- **Type Safety:** Per the requirements, I strictly used `type` aliases instead of `interfaces`. All data models are either derived directly from the Drizzle schema or defined via Zod, ensuring 100% type-safety from the database to the UI.
- **State Management:** Used React Query for optimized caching and built-in loading/error states, providing a polished user experience.
