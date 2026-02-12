# Shaik Nawaz Ahmed - React Portfolio (Vite + Tailwind)

Modern single-page portfolio for an OSCP-certified offensive security professional, built with React, Vite, and Tailwind CSS.

## Tech Stack
- Vite + React
- Tailwind CSS
- Modular component architecture

## Component Structure
- `Navbar`
- `Hero`
- `Impact`
- `Experience`
- `Skills`
- `Projects`
- `Certifications`
- `ToolsTicker`
- `Contact`
- `Footer`
- `ParticleGrid` (hero background animation)

## Run Locally
```bash
npm install
npm run dev
```

Open: `http://localhost:5173`

## Production Build
```bash
npm run build
npm run preview
```

## Deploy to Vercel
1. Push this repo to GitHub.
2. In Vercel, click **New Project** and import the repository.
3. Use defaults:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy.

## Notes
- Replace hero image placeholder in `src/components/Hero.jsx` with a real professional profile photo.
- Replace `public/Resume-KSA.txt` with a final PDF resume if available.
