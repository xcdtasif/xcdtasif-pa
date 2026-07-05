export const projects = [
  {
    slug: "taskflow",
    name: "TaskFlow",
    summary: "A kanban-style team task manager with real-time updates.",
    image: "/projects/taskflow.png",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "WebSockets"],
    description:
      "TaskFlow lets small teams organize work across drag-and-drop boards, with changes syncing live across every open session.",
    liveUrl: "https://taskflow-demo.example.com",
    githubUrl: "https://github.com/asifrahman/taskflow-client",
    challenges:
      "Keeping drag-and-drop board state consistent across multiple connected clients in real time — solved with optimistic UI updates plus a reconciliation pass on the WebSocket layer.",
    futurePlans: "Offline support with local-first sync, and a lightweight mobile app.",
  },
  {
    slug: "marketpulse",
    name: "MarketPulse",
    summary: "An analytics dashboard for e-commerce sales data.",
    image: "/projects/marketpulse.png",
    stack: ["React", "Node.js", "Express", "Chart.js", "PostgreSQL"],
    description:
      "MarketPulse turns raw order data into readable revenue, retention, and product-performance charts for store owners.",
    liveUrl: "https://marketpulse-demo.example.com",
    githubUrl: "https://github.com/asifrahman/marketpulse-client",
    challenges:
      "Rendering charts smoothly against large historical datasets — moved aggregation server-side instead of computing it in the browser.",
    futurePlans: "Scheduled PDF report exports and multi-store support for agencies.",
  },
  {
    slug: "quickbite",
    name: "QuickBite",
    summary: "A food ordering platform with live order tracking.",
    image: "/projects/quickbite.png",
    stack: ["React", "TypeScript", "Stripe", "Node.js"],
    description:
      "QuickBite lets customers browse a menu, pay with Stripe, and track their order status from kitchen to doorstep.",
    liveUrl: "https://quickbite-demo.example.com",
    githubUrl: "https://github.com/asifrahman/quickbite-client",
    challenges:
      "Keeping cart state correct across page reloads and failed payments took more edge-case handling than expected.",
    futurePlans: "A loyalty points system and push notifications for order status.",
  },
];