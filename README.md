# 🚀 Next.js + FiveM Boilerplate

This boilerplate is designed for quick integration of a **Next.js frontend application** into a **FiveM resource** using NUI.  
It allows you to leverage a modern web stack (React, TypeScript, Tailwind, etc.) and easily connect it to Lua client/server logic.

---

## 📂 Project Structure
web/ # Next.js frontend (NUI)
app/ # Next.js App Router pages and logic
context/ # React context (global state)
lib/ # Helper functions
public/ # Static files (images, icons, fonts)
out/ # Exported build files (for FiveM)
client.lua # FiveM client-side script
fxmanifest.lua # Resource manifest


---

## 🛠️ Development (hot-reload)

For live development, run the Next.js server:

```bash
# Install dependencies
npm install

# Start dev server (with hot reload)
npm run dev

In next.config.ts, keep:
assetPrefix: '',
basePath: '',
The frontend will run on http://localhost:3000 and communicate with FiveM through NUI.


📦 Build for FiveM (production)

To use in a FiveM resource (without dev server):

1. Update next.config.ts:

assetPrefix: './', // uncomment
basePath: '',      // uncomment

2. Build:

npm run build

Integration with FiveM

client.lua contains logic for opening/controlling the NUI.

fxmanifest.lua declares the resource and loads the built files from out/.


⚡ Commands
npm run dev       # Development (Next.js server)
npm run build     # Build the application


✅ Summary

Development: run npm run dev and test via localhost.
Production (FiveM): run build.
Config: adjust assetPrefix and basePath in next.config.ts depending on environment.