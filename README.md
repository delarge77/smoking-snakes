# 🎸 Band Website

A modern, responsive band website built with React Native Web, featuring beautiful animations, responsive design, and a complete music band experience.

## ✨ Features

- **Responsive Design**: Mobile-first approach that works perfectly on all devices
- **Modern UI/UX**: Beautiful dark theme with cyan accents and smooth animations
- **Complete Pages**: Home, Music, Tour, About, and Contact pages
- **Interactive Elements**: Hover effects, animations, and smooth transitions
- **Music Integration**: Album displays, song lists, and streaming platform links
- **Tour Management**: Upcoming shows, past performances, and ticket information
- **Contact System**: Contact form, social media links, and FAQ section
- **Newsletter**: Email subscription for fans to stay updated

## 🚀 Tech Stack

- **React 18** - Modern React with hooks and functional components
- **React Native Web** - Cross-platform compatibility
- **Styled Components** - CSS-in-JS styling solution
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side routing
- **React Icons** - Beautiful icon library

## 📱 Pages Overview

### 🏠 Home
- Hero section with band introduction
- Featured content showcase
- Latest album release
- Social media integration

### 🎵 Music
- Album gallery with interactive covers
- Complete song listings
- Streaming platform links
- Play/pause functionality

### 🎪 Tour
- Upcoming tour dates
- Venue information and ticket prices
- Past performances
- Newsletter subscription

### 👥 About
- Band story and journey
- Member profiles with instruments
- Timeline of achievements
- Awards and recognition

### 📞 Contact
- Contact form with validation
- Band contact information
- Social media links
- Frequently asked questions

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd band-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📦 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🎨 Customization

### Branding
- Band name is set to "Smoking Snakes"
- Colors updated to black and red theme (using red `#ff0000` accents)
- Customize the hero background image in `Home.js`

### Content
- Update band member information in `About.js`
- Modify tour dates in `Tour.js`
- Add your actual albums and songs in `Music.js`
- Update contact information in `Contact.js` and `Footer.js`

### Social Media
- Replace placeholder social media URLs with your actual profiles
- Update social media handles and platform information

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:
- Responsive grid layouts
- Mobile navigation menu
- Touch-friendly interactions
- Optimized typography for all screen sizes

## 🌟 Performance Features

- Lazy loading animations with Framer Motion
- Optimized images and assets
- Efficient state management
- Smooth scrolling and transitions

## 🔧 Development

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── Header.js       # Navigation header
│   └── Footer.js       # Site footer
├── pages/              # Page components
│   ├── Home.js         # Homepage
│   ├── Music.js        # Music page
│   ├── Tour.js         # Tour dates
│   ├── About.js        # About the band
│   └── Contact.js      # Contact form
├── App.js              # Main app component
└── index.js            # Entry point
```

### Styling
- Uses Styled Components for component-level styling
- CSS Grid and Flexbox for layouts
- CSS custom properties for consistent theming
- Responsive breakpoints for mobile optimization

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use the `gh-pages` package
- **AWS S3**: Upload the `build` folder to an S3 bucket

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the website for your band, please open an issue or contact the development team.

## 🎵 Music Integration

The website is designed to easily integrate with:
- Spotify API for music streaming
- YouTube API for music videos
- Apple Music for iOS users
- Various ticketing platforms for tour dates

## 🔮 Future Enhancements

- **Music Player**: Full-featured audio player
- **Merchandise Store**: E-commerce integration
- **Fan Community**: User accounts and forums
- **Live Streaming**: Concert streaming capabilities
- **Mobile App**: React Native mobile application

---

**Rock on! 🎸** This website is designed to help your band connect with fans and showcase your music in the best possible way.
