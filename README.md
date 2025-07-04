## MY Approach-

**Gathered mock data from BookMyShow, including images and other relevant details, and structured it into an array of objects**
**Implemented a search bar with case-insensitive filtering to enhance user experience.**
**Added a toggle button to switch between dark and light modes on click.**
**Ensured the UI is fully responsive across different screen sizes.**
**Deployed the project on Vercel for seamless access and sharing.**

- **Next.js** is used for server-side rendering, routing, and SEO.
- **Tailwind CSS** provides utility-first, responsive, and modern styling.
- **Lucide React** supplies accessible, beautiful icons.
- **MockData** is used as the event data source for demonstration.
- **Accessibility**: Semantic HTML, keyboard navigation, and ARIA attributes are used throughout.
- **SEO**: Each page uses `<Head>` for meta tags and titles.
- **Dark/Light Mode**: Toggle button for theme switching.
- **Search**: Case-insensitive, exact-match search for event locations.

## Folder Structure

```EVENTDASH/
├── .next/
├── node_modules/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── EventCard.tsx
│   │   └── EventFilter.tsx
│   ├── constant/
│   │   └── MockData.tsx
│   ├── pages/
│   │   ├── api/
│   │   │   └── hello.ts
│   │   ├── events/
│   │   │   └── [id].tsx
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   └── index.tsx
│   ├── styles/
│   │   └── globals.css
│   └── types/
│       └── event.ts
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## Instructions to Run the App

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   npm run dev

3.**Open your browser and visit:**
http://localhost:3000

## Improvement Possible

**I can add authenctication**
**Add pagination or infinite scroll for large Images**
**Enhance beautiful UI**
**Addtion of gemini/GPT to check upcoming event through search**
