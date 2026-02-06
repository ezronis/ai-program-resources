# Code Reading Guide

## Overview
An interactive React application that teaches users how to read and understand code at three different levels of depth. Built with Vite, React, Tailwind CSS, and lucide-react icons.

## Project Architecture
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Icons**: lucide-react
- **Entry Point**: `index.html` -> `src/main.tsx`
- **Main Component**: `src/CodeReadingGuide.tsx`

## Key Files
- `vite.config.ts` - Vite config (port 5000, all hosts allowed)
- `src/main.tsx` - React app entry point
- `src/CodeReadingGuide.tsx` - Main interactive guide component
- `src/index.css` - Tailwind CSS imports

## Development
- Run: `npm run dev` (starts on port 5000)
- Build: `npm run build` (outputs to `dist/`)

## Deployment
- Static deployment with `dist/` as the public directory
