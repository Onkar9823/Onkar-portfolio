# Onkar Wakchaure — Data Science & Analytics Portfolio

A responsive single-page portfolio built with **React, Vite and Tailwind CSS**.
It features my internship, skills and three projects (HR Analytics Dashboard, Customer Churn Prediction Model, Sales Performance Analysis Dashboard).

- No backend, no environment variables, no API keys, and no visitor data is collected.
- Dark theme by default with a light/dark toggle.
- Content lives in `src/config/`, so you can update it without touching components.
- Every **Download Resume** button opens a small popup; the PDF downloads when the visitor clicks **OK**.

## Tech stack

| Tool | Version |
| --- | --- |
| React / React DOM | 18.3.1 |
| Vite | 5.4.11 |
| @vitejs/plugin-react | 4.3.4 |
| Tailwind CSS | 3.4.17 (with PostCSS 8.4.49, Autoprefixer 10.4.20) |
| lucide-react | 0.469.0 |

## 1. Prerequisites

- **Node.js 18.18 or newer** (Node 20 LTS recommended). Check with `node -v`.
- **npm** (installed with Node.js). Check with `npm -v`.
- **Git** and a free **GitHub** account.
- A free **Netlify** account.

## 2. Install and run locally

```bash
npm install
npm run dev
```

Open the address printed in the terminal (usually http://localhost:5173).

## 3. Build for production

```bash
npm run build      # creates the production site in the dist/ folder
npm run preview    # optional: preview the built site locally
```

## 4. Project structure

```
.
├── index.html                 # Page title, meta description, fonts, theme bootstrap
├── netlify.toml               # Netlify build + SPA fallback + headers
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── images/                # <-- put your profile photo here (onkar-profile.jpg)
│   └── resume/                # <-- put your resume PDF here
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css              # Theme colors + shared styles
    ├── config/
    │   ├── site.js            # Name, email, GitHub, LinkedIn, photo, resume path, nav
    │   ├── projects.js        # The three projects (edit repo / demo URLs here)
    │   ├── skills.js          # Skill groups
    │   └── experience.js      # Internship
    ├── context/ResumeDownloadContext.jsx  # Opens the ONE shared resume popup
    ├── lib/resume.js                      # Checks the PDF exists + starts the download
    ├── hooks/                             # useTheme
    └── components/            # Navbar, Hero, Avatar, ResumeDownloadModal, ResumeButton, ...
```

## 5. Add your resume PDF

1. Export your resume as a PDF. For a public website, **remove the "Personal Details" section** (date of birth, gender, marital status) first.
2. Name it exactly `Onkar_Wakchaure_Resume.pdf`.
3. Put it in the `public/resume/` folder, so the final path is:

```
public/resume/Onkar_Wakchaure_Resume.pdf
```

4. Commit and push (see below).

How the download works: **Download Resume** → popup "Resume download triggered on Onkar's Portfolio." → the visitor clicks **OK** → the popup closes and the PDF downloads. Escape or clicking outside the popup closes it **without** downloading.

If the PDF is missing, clicking OK does not start a broken download. The popup instead says the resume isn't available yet and shows the path above, so you know where to put the file.

To use a different file name, change `resume.path` and `resume.downloadName` in `src/config/site.js`.

## 6. Add your profile photo

1. Choose a real, recent, well-lit photo of yourself (head and shoulders, face centred). Do not use stock or AI-generated images.
2. Crop it square, about **600 × 600 px**, and compress it to roughly **150 KB or less** (for example at [squoosh.app](https://squoosh.app)).
3. Save it as:

```
public/images/onkar-profile.jpg
```

It then appears in the **hero** (large, circular, with a gradient ring) and the **navigation bar** (small avatar). Until the file exists, a neutral placeholder with your initials (`public/images/profile-placeholder.svg`) is shown, so there is never a broken image.

- **Different file name or format (`.png`, `.webp`):** change `profile.photo.src` in `src/config/site.js`.
- **Alt text:** `profile.photo.alt` in the same file.
- **Replace the photo later:** overwrite the file, commit and push. If visitors still see the old one, rename the file and update `profile.photo.src`.

### Browser tab icon (favicon) from your photo (optional)

The favicon is a clean text-based "OW" icon (`public/favicon.svg`). To use your photo instead, generate icons at [realfavicongenerator.net](https://realfavicongenerator.net), copy `favicon.ico` and `favicon-32x32.png` into `public/`, and in `index.html` replace the line `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />` with:

```html
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" href="/favicon.ico" />
```

## 7. Upload to GitHub

1. On GitHub, click **New repository**. Name it, e.g. `portfolio`. Do **not** add a README, .gitignore or license (they already exist here). Click **Create repository**.
2. In the project folder, run:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Onkar9823/portfolio.git
git push -u origin main
```

Replace the URL with the one GitHub shows for your repository.

## 8. Deploy on Netlify

1. Log in to Netlify → **Add new site** → **Import an existing project**.
2. Choose **GitHub**, authorize it, then select your repository.
3. Confirm these settings (they are already in `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy site**. After a minute you get a `*.netlify.app` URL.
5. Optional: **Site configuration → Change site name** for a cleaner URL.

No environment variables are needed. Every future `git push` to `main` redeploys the site automatically.

## 9. Updating the portfolio later

| I want to change... | Edit this |
| --- | --- |
| Name, intro, About text, email, location | `src/config/site.js` |
| GitHub / LinkedIn URLs | `social` in `src/config/site.js` |
| Resume file | Replace the PDF in `public/resume/` (or change `resume.path`) |
| Profile photo | Replace `public/images/onkar-profile.jpg` |
| Project text, status, tech tags | `src/config/projects.js` |
| **Project GitHub / live demo links** | `links.code` and `links.demo` for that project in `src/config/projects.js` |
| Skills | `src/config/skills.js` |
| Internship / new experience | `src/config/experience.js` |

After editing, publish with:

```bash
git add .
git commit -m "Update portfolio"
git push
```

### Project links

`links.code` and `links.demo` are empty on purpose. While empty, the site shows "coming soon". Paste a real URL (starting with `https://`) and the button appears automatically. Never paste a placeholder repository.

### Updating the Churn Prediction project honestly

The churn project is labeled **In Progress**. In `src/config/projects.js`:

- When a stage is finished, change its `status` in `diagram.steps` (`'planned'` → `'progress'` → `'done'`) and move the matching item between the `sections`.
- When the project is complete, set `status: null`.
- Add accuracy, precision, recall, F1-score or ROC-AUC **only** after you have actually computed them. Remove the `note` line at that point.

## 10. Troubleshooting

| Problem | What to check |
| --- | --- |
| Popup says the resume isn't available | The PDF is missing or misnamed. It must be `public/resume/Onkar_Wakchaure_Resume.pdf` (names are case-sensitive on Netlify). Restart `npm run dev`, or push the file and redeploy. |
| Photo shows initials instead of my face | `public/images/onkar-profile.jpg` is missing or misnamed. |
| Netlify build fails | Open the deploy log. Check that the build command is `npm run build` and the publish directory is `dist`. |
| Old version still showing | Hard refresh (Ctrl/Cmd + Shift + R) and check that the latest deploy is "Published". |

## Accessibility and performance

Semantic HTML, a skip link, keyboard-friendly navigation and dialogs (focus is trapped in popups, Escape closes them), visible focus styles, `aria` labels on icon buttons, reduced-motion support, and no heavy libraries. The profile photo uses `object-fit: cover`, explicit dimensions, and high priority loading in the hero.
