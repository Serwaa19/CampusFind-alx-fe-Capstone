# 🎓 CampusFind - Lost & Found Application

A modern, mobile-first lost and found application designed for university campuses. Built with React, Vite, and Tailwind CSS, CampusFind helps students reunite with their lost belongings quickly and securely.

![CampusFind Preview](https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80)

## ✨ Features

### Core Functionality
- **Browse Items**: View all lost and found items with advanced filtering options
- **Report Items**: Submit lost or found items with photo uploads and detailed descriptions
- **Item Details**: View comprehensive information including location, category, and finder details
- **User Dashboard**: Track your active posts, claimed items, and activity history
- **Search & Filter**: Quickly find items by name, location, or category
- **Real-time Updates**: Stay informed with activity notifications

### User Experience
- 📱 Mobile-first responsive design
- 🎨 Modern, clean UI with smooth animations
- 🔍 Intuitive search and filtering
- 📸 Image upload support
- 🗺️ Location-based item tracking
- ⭐ Points and gamification system
- ✅ Verified user badges

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Language**: JavaScript (ES6+)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16.0.0 or higher)
- **npm** (v7.0.0 or higher) or **yarn** (v1.22.0 or higher)

Check your versions:
```bash
node --version
npm --version
```

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd CampusFind-alx-fe-Capstone/CampusFind
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the URL shown in your terminal)

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 📁 Project Structure

```
CampusFind/
├── public/                      # Static assets
│   └── vite.svg
├── src/
│   ├── pages/                   # Application screens
│   │   ├── HomeScreen.jsx       # Landing page with hero and categories
│   │   ├── BrowseScreen.jsx     # Browse all items with filters
│   │   ├── ItemDetailScreen.jsx # Detailed item view
│   │   ├── ReportScreen.jsx     # Report lost/found items
│   │   └── DashboardScreen.jsx  # User dashboard and activity
│   ├── assets/                  # Images and media files
│   ├── App.jsx                  # Main application component
│   ├── App.css                  # App-specific styles
│   ├── main.jsx                 # Application entry point
│   └── index.css                # Global styles and Tailwind imports
├── index.html                   # HTML template
├── package.json                 # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── eslint.config.js            # ESLint configuration
└── README.md                    # This file
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#3b82f6` (buttons, links, active states)
- **Success Green**: `#10b981` (found items, success messages)
- **Warning Red**: `#ef4444` (lost items, alerts)
- **Neutral Gray**: `#6b7280` (text, borders)
- **Background**: `#f8f9fa` (page background)

### Typography
- **Font Family**: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto)
- **Font Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Components
- Rounded corners: `rounded-xl` (12px), `rounded-2xl` (16px)
- Shadows: Soft, medium, and strong elevation levels
- Transitions: Smooth 200ms ease-in-out animations

## 📱 Screen Descriptions

### 1. Home Screen
- Hero section with campus image
- Quick action cards (Lost/Found)
- Search bar
- Category browser
- Statistics banner
- Bottom navigation

### 2. Browse Screen
- Search functionality
- Filter tabs (All, Lost, Found, Recently Claimed)
- Item cards with images and details
- Floating action button (FAB)

### 3. Item Detail Screen
- Image carousel with dots navigation
- Item status badge
- Poster information with verification
- Location details with map
- Category and date metadata
- Description section
- Safety tips
- Message finder button

### 4. Report Screen
- Lost/Found toggle
- Photo upload interface
- Form fields:
  - Item name
  - Category dropdown
  - Location dropdown
  - Description textarea
- Submit button with validation

### 5. Dashboard Screen
- User profile header
- Statistics cards (Active, Claimed, Points)
- Recent activity feed
- My posts section with edit/claim actions

## 🔧 Configuration

### Tailwind CSS Customization

Edit `tailwind.config.js` to customize:
- Colors
- Fonts
- Spacing
- Breakpoints
- Shadows

Example:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#your-color',
      },
    },
  },
}
```

### Vite Configuration

Modify `vite.config.js` for:
- Build options
- Server settings
- Plugin configuration

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📦 Build for Production

1. **Create production build**
   ```bash
   npm run build
   ```

2. **Preview production build**
   ```bash
   npm run preview
   ```

3. **Deploy**
   
   The `dist` folder contains your production-ready files. Deploy to:
   - Vercel
   - Netlify
   - GitHub Pages
   - Any static hosting service

### Deployment Example (Vercel)

```bash
npm install -g vercel
vercel --prod
```

## 🐛 Troubleshooting

### Common Issues

**Issue**: `npm install` fails
- **Solution**: Delete `node_modules` and `package-lock.json`, then run `npm install` again

**Issue**: Port 5173 already in use
- **Solution**: Kill the process or change the port in `vite.config.js`:
  ```javascript
  server: {
    port: 3000
  }
  ```

**Issue**: Tailwind styles not loading
- **Solution**: Ensure `@tailwind` directives are in `src/index.css` and the file is imported in `main.jsx`

**Issue**: Images not loading
- **Solution**: Check image URLs and ensure they're accessible. For local images, place them in the `public` folder

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Code Style

- Use functional components with hooks
- Follow ESLint rules
- Use Tailwind utility classes
- Keep components small and focused
- Add comments for complex logic

## 🔐 Security Considerations

- Validate all user inputs
- Sanitize uploaded images
- Implement authentication (future feature)
- Use HTTPS in production
- Follow OWASP security guidelines

## 🚧 Future Enhancements

- [ ] User authentication and authorization
- [ ] Real-time chat between finders and owners
- [ ] Push notifications
- [ ] Email alerts
- [ ] Advanced search with AI
- [ ] QR code generation for items
- [ ] Integration with campus security
- [ ] Multi-language support
- [ ] Dark mode
- [ ] Progressive Web App (PWA)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)
- Design inspiration from modern mobile apps
- Built with [Vite](https://vitejs.dev) and [React](https://react.dev)

## 📞 Support

For support, email your-email@example.com or open an issue in the repository.

## 🔗 Links

- [Live Demo](#) - Add your deployed URL
- [Documentation](#) - Add documentation link
- [Report Bug](#) - Add issue tracker link
- [Request Feature](#) - Add feature request link

---

Made with ❤️ for university students
