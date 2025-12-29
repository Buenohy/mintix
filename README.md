Here is your updated and polished **README.md**. I have translated all remaining parts to English, added the **Web3 Testing Guide** section, and highlighted the requirement for a Solana wallet (like Phantom).

---

# 🎟️ Mintix™ - Full-Stack Events Management Platform

A high-performance Event Management System built with the latest **Next.js 16 (Canary)** and **React 19** features. This project integrates a robust **MySQL (TiDB Cloud)** backend via **Drizzle ORM** and a modern **Solana Web3** layer using the **Metaplex Core** standard.

## 🔗 Project Links

- **Live Demo:** [https://mintix-six.vercel.app/](https://mintix-six.vercel.app/)
- **Repository:** [https://github.com/Buenohy/mintix](https://github.com/Buenohy/mintix)

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

- **Dashboard:** Dynamic overview showing real-time event stats (Total, Upcoming, Ongoing, Cancelled).
- **Management Flow:** Fully functional Create, Read, Update, and Delete operations.
- **Form Handling:** Complex forms managed by `react-hook-form` with strict Zod validation and descriptive error states.
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

## 🌐 Web3 Testing Guide (How to see your NFTs)

To test the NFT Gallery on the `/web3` page, you need a Solana wallet and a Metaplex Core asset on the **Devnet**.

### **1. Install a Solana Wallet**

You must use a Solana-compatible wallet browser extension.

- **Recommendation:** [Phantom Wallet](https://phantom.app/) or [Solflare](https://solflare.com/).

### **2. Get Devnet SOL (Faucet)**

1. Switch your wallet network to **Devnet**.
2. Visit the [Solana Faucet](https://faucet.solana.com/).
3. Paste your wallet address and request some test SOL.

### **3. Mint a Test NFT (Metaplex Core)**

Since this app uses the latest **Core** standard, you can mint a test asset easily:

1. Go to the [Metaplex Core Portal](https://core.metaplex.com/?network=devnet).
2. Connect your wallet and ensure the network is set to **Devnet**.
3. Click **"Create"** or **"Mint"**.
4. Fill in the details (Name, Symbol, and a Metadata URI).
   - _Example URI:_ `https://arweave.net/5x9_3S4Z8Z7_0O9p1S8fS8E6_z8G7v8w9x0y1z2a3b4`
5. Confirm the transaction.

### **4. View in Mintix**

Once minted, go to the [Mintix Web3 Page](https://mintix-six.vercel.app/web3), connect your wallet, and your NFT ticket will appear automatically!

---

## 🏗️ Folder Structure

```text
src/
├── app/              # Next.js 16 App Router (Pages & API routes)
├── components/       # UI Components (using tailwind-merge and clsx)
├── hooks/            # Custom hooks (e.g., useUserNfts for Web3 logic)
├── lib/              # Configuration (Drizzle, Umi, TiDB Client, Validations)
├── db/               # Database Schema and Drizzle configurations
└── types/            # Strict Type Aliases (No interfaces, as per requirements)
```

---

## ⚙️ Local Setup

1. **Clone & Install:**

   ```bash
   git clone https://github.com/Buenohy/mintix
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
   npx drizzle-kit push # Sync schema to TiDB Cloud
   ```

4. **Run Development Server:**
   ```bash
   npm run dev
   ```

---

## 📝 Engineering Decisions & Notes

- **TiDB Cloud:** Chosen for its serverless MySQL capabilities, providing high scalability and seamless integration with Drizzle ORM.
- **Next.js 16 + React 19:** Leveraged the latest experimental features for improved performance in Server Components and streamlined Action handling.
- **Metaplex Core over Legacy:** I opted for the **Metaplex Core** standard as it is significantly more cost-effective and provides a better developer experience (single-account model) compared to the legacy Token Metadata program.
- **Strict Type Safety:** Following the task requirements, I used **Type Aliases** exclusively. No `any` types were used, ensuring that all data flowing from the API and Blockchain is predictable and safe.
