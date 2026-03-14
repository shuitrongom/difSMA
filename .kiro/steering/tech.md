# Technology Stack

## Core Technologies

- **HTML5**: Semantic markup for all pages
- **CSS3**: Custom styling with Bootstrap framework
- **JavaScript**: jQuery-based interactions and plugins
- **Bootstrap 5**: Responsive grid system and components

## Frontend Libraries & Frameworks

### CSS Libraries
- **Bootstrap 5.0.0**: Main CSS framework (`css/bootstrap.min.css`)
- **Animate.css**: Animation library (`lib/animate/animate.min.css`)
- **Owl Carousel**: Carousel component styles (`lib/owlcarousel/assets/owl.carousel.min.css`)
- **Lightbox**: Image gallery lightbox (`lib/lightbox/css/lightbox.min.css`)
- **Swiper**: Modern slider/carousel (`css/swiper-bundle.min.css`)
- **Font Awesome 5.15.4**: Icon library
- **Bootstrap Icons 1.4.1**: Additional icon set

### JavaScript Libraries
- **jQuery 3.6.4**: Core JavaScript library
- **Bootstrap 5.0.0**: Bootstrap JavaScript bundle
- **WOW.js**: Scroll animation library (`lib/wow/wow.min.js`)
- **Easing**: Animation easing functions (`lib/easing/easing.min.js`)
- **Waypoints**: Scroll-triggered events (`lib/waypoints/waypoints.min.js`)
- **Lightbox**: Image gallery functionality (`lib/lightbox/js/lightbox.min.js`)
- **Owl Carousel**: Carousel/slider functionality (`lib/owlcarousel/owl.carousel.min.js`)

### Fonts
- **Google Fonts**: Fredoka (600, 700) and Montserrat (200, 400, 600)

## Project Structure

This is a static website with no build process or package manager. All dependencies are loaded via CDN or included as library files in the `lib/` directory.

## File Organization

- `/` - Root HTML pages (index.html, about.html, contact.html, etc.)
- `/css/` - Custom stylesheets
- `/js/` - Custom JavaScript files
- `/lib/` - Third-party libraries
- `/img/` - Images and graphics
- `/PDF SEAC/` - Government transparency documents
- `/acerca del dif/` - About section pages
- `/comunicacion social/` - News and gallery pages
- `/tramites y servicios/` - Services pages (not visible in current structure)

## Development Workflow

### No Build Process
This project does not use:
- npm/yarn package managers
- Build tools (webpack, gulp, grunt)
- Preprocessors (Sass, Less)
- Module bundlers
- Transpilers

### Direct Development
- Edit HTML, CSS, and JavaScript files directly
- Refresh browser to see changes
- No compilation or build step required

## Common Tasks

### Local Development
```bash
# Serve the site using any static file server
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if http-server is installed globally)
npx http-server -p 8000

# PHP
php -S localhost:8000
```

### Testing
- Manual browser testing (no automated tests)
- Test responsive design using browser DevTools
- Cross-browser compatibility testing

### Deployment
- Upload files directly to web server via FTP/SFTP
- No build artifacts to generate
- All files are production-ready as-is

## Browser Compatibility

The site uses modern web standards but maintains compatibility with:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## External Services

- **Google Fonts API**: Font delivery
- **Font Awesome CDN**: Icon delivery
- **Bootstrap CDN**: Framework delivery
- **Google Maps**: Embedded map on contact page
- **YouTube**: Embedded video player
