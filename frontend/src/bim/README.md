# BIM Module

This folder contains all Building Information Modeling (BIM) related code for the ELPACA project.

## Goals
- **IP Clarity:** All BIM logic, components, and utilities are isolated here for clear IP boundaries.
- **Modularity:** Each feature (viewer, property panel, tools, etc.) is a separate component or module.
- **Resilience:** BIM features are decoupled from the rest of the app, so issues here don't break the whole UI.

## Structure
- `viewer/` — 3D viewer and scene logic (Three.js, R3F, IFC.js)
- `ui/` — Mantine-based panels, inspectors, toolbars
- `utils/` — BIM-specific helpers (e.g., IFC property parsing)

## Getting Started
- Add new BIM features as subfolders or files here.
- Keep all BIM dependencies and logic inside this folder for easy maintenance and IP review.
