# Modern Student Portfolio Website

A professional, high-performance portfolio website designed for Computer Science and Software Engineering students. Built with React 19, Tailwind CSS 4, and Framer Motion.

## 🚀 Features

- **Fully Responsive**: Optimized for mobile, tablet, and desktop.
- **Dark/Light Mode**: Seamless theme toggling with persistent state.
- **Smooth Animations**: Powered by Framer Motion for a premium feel.
- **Modern UI**: Clean design with Inter typography and curated color palettes.
- **SEO Optimized**: Meta tags and semantic HTML included.

## 🛠️ Tech Stack

- **Framework**: React 19 (Vite)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Scrolling**: React Scroll

## 📁 Folder Structure

```text
src/
├── components/       # UI Components for each section
├── hooks/            # Custom React hooks (theme management)
├── assets/           # Images and static assets
├── App.jsx           # Main application shell
├── index.css         # Tailwind 4 configuration and global styles
└── main.jsx          # React entry point
```

## 💻 Local Development

1. **Clone the repository** (if applicable) or enter the project directory.
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   ```
4. **Build for production**:
   ```bash
   npm run build
   ```

## 🌐 Deployment

### Vercel
1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import your repository.
4. Vercel will automatically detect Vite and configure the build settings.
5. Click **Deploy**.

### Netlify
1. Go to [Netlify](https://netlify.com) and click **Add new site**.
2. Connect your Git provider.
3. Choose the repository and set the Build command to `npm run build` and Publish directory to `dist`.
4. Click **Deploy site**.

## 📝 Customization

- **Personal Info**: Update names, descriptions, and links in the respective component files in `src/components/`.
- **Profile Image**: Replace the placeholder in `About.jsx` with your own image URL or local asset.
- **Resume**: Replace `public/resume.pdf` with your actual CV.
- **Projects**: Edit the `projects` array in `src/components/Projects.jsx`.

---

Built with ❤️ by Antigravity AI
