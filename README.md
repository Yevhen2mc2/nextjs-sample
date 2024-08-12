This is a [Next.js](https://nextjs.org/) project with [tailwind](https://tailwindcss.com/).

## Getting Started

Run the development server:

```bash
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

Build production:

```bash
yarn build
```

---

## Run Bundle Analyzer

```bash
ANALYZE=true yarn build
```

Or manually set in the file ```.env.local``` value `ANALYZE=true` and do:
```bash
yarn build
```

The report will open three new tabs in your browser, which you can inspect.
