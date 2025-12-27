# 🎟️ Mintix™ - Full-Stack Events Management Platform

A high-performance Event Management System built with the latest **Next.js 16 (Canary)** and **React 19** features. This project integrates a robust **MySQL (TiDB Cloud)** backend via **Drizzle ORM** and a modern **Solana Web3** layer using the **Metaplex Core** standard.

## 🔗 Project Links

- **Live Demo:** [Insert Vercel Link Here]
- **Repository:** [https://github.com/Buenohy/mintix]

---

## 🛠️ Tech Stack (Bleeding Edge)

### **Frontend & UI**

- **Framework:** Next.js 16.1.0 (App Router)
- **Library:** React 19.2.3
- **Styling:** **Tailwind CSS v4.0** (Next-gen engine with CSS-first configuration)
- **Animations:** Framer Motion 12 & Motion
- **State & Fetching:** TanStack Query v5 (React Query)
- **Forms:** React Hook Form + Zod Resolver

### **Backend & Database**

- **ORM:** Drizzle ORM
- **Database:** **TiDB Cloud (Serverless)** - MySQL compatible, distributed database.
- **Validation:** Zod (Strict schema validation for API and Forms)

### **Web3 (Solana Integration)**

- **Standard:** **Metaplex Core** (The newest, most efficient NFT standard on Solana)
- **Framework:** Metaplex Umi + `@metaplex-foundation/mpl-core`
- **Wallet Support:** `@solana/wallet-adapter` (Multi-wallet support for Devnet)

---

## 🚀 Key Features Implemented

### **1. Advanced Events CRUD**

- **Dashboard:** Dynamic overview showing event stats (Total, Upcoming, Ongoing, Cancelled).
- **Management Flow:** Fully functional Create, Read, Update, and Delete operations.
- **Form Handling:** Complex forms managed by `react-hook-form` with real-time Zod validation and descriptive error states.
- **Optimistic Updates:** Utilizing React Query for smooth UI transitions and efficient cache invalidation.

### **2. Modern Web3 Ticketing**

- **Metaplex Core Integration:** Leverages the 2024 Metaplex standard to handle event tickets as lightweight, low-cost assets.
- **Asset Gallery:** Real-time fetching of "Your Event Tickets (NFTs)" from the Solana Devnet.
- **Type Safety:** Zero `any` policy. Every blockchain interaction is strictly typed using Type Aliases.

### **3. Performance & UX**

- **Tailwind 4:** Utilizing the new Oxide engine for lightning-fast styling and reduced CSS bundle size.
- **Smooth Interactions:** Framer Motion implemented for page transitions, modal overlays, and staggered list animations.
- **Responsive Design:** Mobile-first approach, fully optimized for all screen sizes.

---

## 🏗️ Folder Structure

```text
src/
├── app/              # Next.js 16 App Router (Pages & API routes)
├── components/       # UI Components (using tailwind-merge and clsx)
├── hooks/            # Custom hooks (e.g., useUserNfts for Web3 logic)
├── lib/              # Configuration (Drizzle, Umi, TiDB Client)
├── db/               # Database Schema (Drizzle definitions)
└── types/            # Strict Type Aliases (No interfaces, as per task requirements)
```

---

## ⚙️ Local Setup

1. **Clone & Install:**

   ```bash
   git clone <repo-url>
   cd mintix
   npm install
   ```

2. **Environment Variables:**
   Create a `.env` file in the root:

   ```env
   # Database connection (TiDB Cloud / MySQL)
   DATABASE_URL=mysql://user:password@host:port/dbname?ssl={"rejectUnauthorized":true}

   # Web3
   NEXT_PUBLIC_SOLANA_RPC_URL=https://api.devnet.solana.com
   ```

3. **Database Setup:**

   ```bash
   npx drizzle-kit push # Push schema to TiDB
   ```

4. **Run Development:**
   ```bash
   npm run dev
   ```

---

## 📝 Engineering Decisions & Notes

- **TiDB Cloud:** Chosen for its serverless MySQL capabilities, providing high scalability and seamless integration with Drizzle.
- **Next.js 16 + React 19:** Decided to use the latest versions to leverage the best performance improvements in Server Components and Action handling.
- **Metaplex Core over Legacy:** I opted for the **Core** standard as it is significantly cheaper to mint and easier to query than the legacy Metaplex Token Metadata program.
- **Type Safety:** Following the task requirements, I used **Type Aliases** exclusively to define data structures, ensuring a robust and predictable codebase.
