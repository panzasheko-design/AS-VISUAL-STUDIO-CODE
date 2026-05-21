# AS Studio Web

VS Code Web inspired editor built for the web with Monaco Editor.

Built with ❤️ using configuration and inspiration from ADAM STUDIO.

Portfolio: https://adam-studio-platform.wasmer.app

Features:
- Monaco editor with tabs-ready layout
- Gemini API key support via Settings (localStorage)
- Fast Vite-based dev server

To run locally:

```bash
cd AS-STUDIO-WEB
npm install
npm run dev
```

Note: The app is configured to call a secure serverless proxy at `/.netlify/functions/gemini`.
Set the real Gemini API key in environment variables when deploying.

Deployment:

- GitHub Pages preview is enabled (static). For a working Gemini proxy use Netlify Functions (recommended).
- To enable Netlify deployment and functions, add the following repository secrets in GitHub:
	- `GEMINI_API_KEY` — your Gemini API key
	- `NETLIFY_AUTH_TOKEN` — token for Netlify deploy
	- `NETLIFY_SITE_ID` — your Netlify site id

Then push to `main` — the workflow will build and deploy to Netlify automatically.

---

## 📞 التواصل

للأسئلة والاقتراحات:
- 📧 Email: support@ascode.dev
- 🐦 Twitter: @ASCodeEditor
- 💬 Discord: [رابط السيرفر]

---

**صُنع بـ ❤️ لمجتمع المطورين العربي من قبل ADAM STUDIO**

### 🌟 ADAM STUDIO
**استوديو متخصص في تطوير أدوات برمجية عصرية وعالية الأداء**

📱 **زيارة البورتفوليو**: [adam-studio-platform.wasmer.app](https://adam-studio-platform.wasmer.app)

