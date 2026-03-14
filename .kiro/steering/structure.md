# Project Structure

## Directory Organization

```
/
├── index.html                    # Homepage
├── about.html                    # About page (template, not customized)
├── contact.html                  # Contact page
├── blog.html                     # Blog page
├── event.html                    # Events page
├── 404.html                      # Error page
├── LICENSE.txt                   # License file
│
├── acerca del dif/              # About DIF section
│   ├── direcciones.html         # Departments/Directions
│   ├── organigrama.html         # Organizational chart
│   └── precidencia.html         # Presidency information
│
├── comunicacion social/         # Social Communication section
│   ├── galeria.html            # Photo galleries
│   └── noticias.html           # News articles
│
├── tramites y servicios/        # Services section (referenced but not in tree)
│   ├── PMPNNA.html             # Child protection services
│   ├── DAAM.html               # Senior services
│   ├── DANF.html               # Nutrition services
│   ├── DAD.html                # Disability services
│   ├── DPAF.html               # Family prevention services
│   └── DSJAIG.html             # Legal services
│
├── trasparencia/                # Transparency section (referenced but not in tree)
│   └── SEAC.html               # Accounting evaluation system
│
├── css/                         # Stylesheets
│   ├── style.css               # Main custom styles
│   ├── bootstrap.min.css       # Bootstrap framework
│   ├── acordeon.css            # Accordion component styles
│   ├── botonarriba.css         # Back-to-top button styles
│   ├── custom-download.css     # Download button styles
│   ├── first-carosel.css       # First carousel styles
│   ├── snippets.css            # Code snippets styles
│   ├── swiper-bundle.min.css   # Swiper carousel styles
│   └── tablas.css              # Table styles
│
├── js/                          # JavaScript files
│   ├── main.js                 # Main JavaScript functionality
│   ├── first-carousel.js       # First carousel implementation
│   └── noprint.js              # Print prevention script
│
├── img/                         # Images and graphics (107 files)
│   ├── favicon-32x32.png       # Site favicon
│   ├── cintillo_superior_creditos.png  # Header banner
│   ├── unidos con amor.png     # Secondary logo
│   ├── logo_principal.png      # Main logo
│   ├── piedepagina.png         # Footer background
│   ├── carousel-*.jpg          # Carousel images
│   ├── galary-*.jpg            # Gallery images
│   ├── programas_*.png         # Program icons
│   └── ...                     # Additional images
│
├── lib/                         # Third-party libraries
│   ├── animate/                # Animation library
│   ├── easing/                 # Easing functions
│   ├── lightbox/               # Lightbox image viewer
│   ├── owlcarousel/            # Owl Carousel plugin
│   ├── waypoints/              # Waypoints scroll library
│   └── wow/                    # WOW.js scroll animations
│
├── PDF SEAC/                    # Government transparency documents
│   └── 2019/                   # Year-based organization
│       ├── CUARTO TRIMESTRE 2019/
│       └── INFORMACION CONTABLE CUARTO TRIMESTRE 2019/
│
├── .git/                        # Git repository
├── .kiro/                       # Kiro configuration
│   └── steering/               # Steering documents
└── .vscode/                     # VS Code settings
```

## File Naming Conventions

### HTML Files
- Root level: lowercase with hyphens (e.g., `contact.html`)
- Subdirectories: lowercase with spaces (Spanish naming, e.g., `acerca del dif/`)
- Service pages: UPPERCASE acronyms (e.g., `PMPNNA.html`, `DAAM.html`)

### CSS Files
- Lowercase with hyphens (e.g., `custom-download.css`)
- Descriptive names indicating purpose (e.g., `botonarriba.css` = "button up")

### JavaScript Files
- Lowercase with hyphens (e.g., `first-carousel.js`)
- `main.js` contains core functionality

### Images
- Lowercase with hyphens or underscores
- Spanish naming common (e.g., `unidos con amor.png`)
- Numbered series for galleries (e.g., `galary-1.jpg`, `galary-2.jpg`)

## Page Structure Pattern

All HTML pages follow a consistent structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags -->
    <!-- Google Fonts -->
    <!-- Icon libraries (Font Awesome, Bootstrap Icons) -->
    <!-- CSS libraries (Animate, Lightbox, Owl Carousel) -->
    <!-- Bootstrap CSS -->
    <!-- Custom CSS -->
    <!-- Inline styles (if needed) -->
</head>
<body>
    <!-- Spinner (loading indicator) -->
    <!-- Logo Principal (header banner) -->
    <!-- Logo secundario (secondary logo) -->
    <!-- Navbar (navigation menu) -->
    <!-- Page content -->
    <!-- Footer -->
    <!-- Copyright -->
    <!-- Back to top button -->
    <!-- JavaScript libraries (jQuery, Bootstrap, plugins) -->
    <!-- Custom JavaScript -->
</body>
</html>
```

## Navigation Structure

### Main Menu Items
1. **Inicio** (Home) - `index.html`
2. **Acerca del DIF** (About DIF) - Dropdown
   - Presidencia (Presidency)
   - Direcciones (Departments)
   - Organigrama (Org Chart)
3. **Servicios/Tramites y Servicios** (Services) - Dropdown
   - 6 service department pages
4. **Comunicación Social** (Social Communication) - Dropdown
   - Noticias (News)
   - Galerías (Galleries)
5. **Transparencia** (Transparency) - Dropdown
   - External links (IPOMEX, SAIMEX, etc.)
   - SEAC (internal)
6. **Voluntariado** (Volunteer) - Link
7. **Contacto** (Contact) - `contact.html`

## Component Patterns

### Header Search Bar
- Located in the "Logo secundario" section, between the main banner and navbar
- Layout: three-column flex row — empty spacer (left), secondary logo centered, search form (right) for visual balance
- Uses Bootstrap `input-group` with a `btn-dark` submit button and Font Awesome search icon
- IDs: `siteSearchInput` (input), form uses `role="search"`
- `doSearch()` is defined in an IIFE at the bottom of `index.html` (before `</body>`) and implements full highlight-and-navigate in-page search:
  - Walks the DOM text nodes and wraps matches in `<mark class="search-highlight">` elements
  - The active match gets class `search-highlight-active` and is scrolled into view smoothly
  - Repeated submissions with the same query cycle through matches; a new query clears and re-highlights
  - Clearing the input removes all highlights
  - Highlight styles (yellow background for matches, orange for active) are injected dynamically via a `<style>` tag
  - CSS classes: `search-highlight` (all matches), `search-highlight-active` (current match)
  - Skips `SCRIPT`, `STYLE`, `NOSCRIPT`, `INPUT`, and `TEXTAREA` nodes during traversal

### Carousels
- Multiple carousel implementations (Owl Carousel, Swiper, custom)
- Located in main content areas
- Configured in `main.js` and inline scripts

### News Carousel (Últimas Noticias)
- Uses Swiper (`swiper notice-swiper`) for the news section
- Custom prev/next navigation buttons with class `notice-btn` (`.notice-swiper-prev`, `.notice-swiper-next`)
- Images use class `notice-img` with `object-fit: contain`, `width: 100%`, and `height: auto` (responsive, no fixed height)
- Images follow naming pattern `img/noticias_N.png`

### Modals
- Search modal (navbar)
- Video modal (about page)
- Image modal (galleries)

### Dropdowns
- Navigation menus
- Program accordions
- Nested content sections
- Dropdown hover/focus state: white text (`#ffffff`) on dark gray background (`#555555`) — overridden directly in `css/bootstrap.min.css` to match the site's dark navbar theme (Bootstrap default was dark text on light gray `#e9ecef`)

## Asset Organization

### Images
- Organized by purpose (carousel, gallery, programs, logos)
- No subdirectories within `/img/`
- Mix of PNG and JPG formats

### PDFs
- Organized by year and quarter
- Government transparency documents
- Accounting and financial reports

## Code Organization

### CSS
- Bootstrap provides base styles
- `style.css` contains all custom styles
- Additional CSS files for specific components
- Inline styles used for page-specific customizations

### JavaScript
- jQuery-based architecture
- Plugin initialization in `main.js`
- Event handlers and custom functions in `main.js`
- Separate files for complex components (carousels)

## Conventions

### Language
- Primary language: Spanish
- HTML lang attribute: "en" (should be "es")
- Content entirely in Spanish

### Responsive Design
- Bootstrap grid system (12-column)
- Mobile-first approach
- Custom breakpoints in CSS

### Color Scheme
- Primary: Blue/Purple tones
- Secondary: Various accent colors
- Navigation items: Color-coded (green, red, yellow, pink, purple, blue)

### Typography
- Headings: Montserrat (200, 600, 700 weights)
- Body: Montserrat (200, 400, 600 weights)
- Display text: Fredoka (600, 700 weights)
