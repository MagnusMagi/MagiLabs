# MagiLabs - Digital Innovation Studio

A modern, responsive corporate website for MagiLabs ÖÜ, an Estonia-based digital innovation studio specializing in AI-powered SaaS applications.

## 🎯 Project Goal / Projekti Eesmärk

The goal of this project is to build a Framer-inspired CMS and Admin Panel system for Magi Labs, an Estonia-based digital product studio managing multiple AI-powered applications like MagiNews, Trainerly, and AstroApp. The system will be fully modular, responsive, and built with a component-driven approach using Cursor AI.

**Eesti keel**: Selle projekti eesmärk on ehitada Framer-inspireeritud CMS ja Admin Paneeli süsteem Magi Labs jaoks, mis on Eestis asuv digitaalne toote stuudio, mis haldab mitmeid AI-põhiseid rakendusi nagu MagiNews, Trainerly ja AstroApp. Süsteem on täielikult modulaarne, responsive ja ehitatud component-driven lähenemisviisiga kasutades Cursor AI-d.

## 🚀 Features / Funktsioonid

### 🎨 Design / Disain
- **Modern Design**: Framer-inspired UI with Nordic color palette
- **Responsive Layout**: Mobile-first design that works on all devices
- **Dark/Light Theme**: Automatic theme switching with system preference detection
- **Nordic Aesthetics**: Design inspired by Estonia's natural beauty

### 🌐 Multilingual Support / Mitmekeelne Tugi
- **EN**: English (default)
- **EE**: Estonian (Eesti keel)
- **Language Switching**: Framework ready for seamless language transitions

### 🧩 Component-Driven Architecture / Komponentidele Põhinev Arhitektuur
- **Modular Components**: Each component is independent and reusable
- **Reusable UI**: Consistent design with shadcn/ui components
- **Scalable Structure**: Structure suitable for growing project needs

### ⚡ Performance & Optimization / Jõudlus ja Optimeerimine
- **Next.js 14**: Optimal performance with App Router
- **TypeScript**: Type safety and developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **Optimized Build**: Production-ready optimizations

## 🛠️ Tech Stack / Tehnoloogia Stack

### Frontend Framework / Frontend Raamistik
- **Next.js 14**: React framework with App Router
- **React 18**: Modern React with concurrent features
- **TypeScript**: Type-safe JavaScript development

### Styling & UI / Stiil ja Kasutajaliides
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality React components
- **Radix UI**: Accessible component primitives
- **Lucide React**: Beautiful icon library

### State Management & Theming / Oleku Haldamine ja Teemad
- **React Context**: Lightweight state management
- **next-themes**: Theme switching and persistence
- **CSS Variables**: Dynamic theming support

### Development Tools / Arendusvahendid
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## 📁 Project Structure / Projekti Struktuur

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Homepage with all sections
├── components/             # Reusable UI components
│   ├── ui/                # shadcn/ui base components
│   │   └── button.tsx     # Custom button component
│   ├── header.tsx         # Navigation header with language selector
│   ├── hero.tsx           # Hero section with call-to-action
│   ├── product-showcase.tsx # Product cards and descriptions
│   ├── about-section.tsx  # Company information and values
│   ├── tech-stack.tsx     # Technology overview and expertise
│   ├── contact-section.tsx # Contact form and information
│   ├── footer.tsx         # Site footer with links
│   ├── language-selector.tsx # Language switching component
│   ├── theme-toggle.tsx   # Dark/light theme switcher
│   └── theme-provider.tsx # Theme context provider
└── lib/                   # Utility functions and helpers
    └── utils.ts           # Common utilities and helpers
```

## 🎨 Design System / Disaini Süsteem

### Color Palette / Värvipalett
- **Nordic Blue**: #3B82F6 (Primary - Põhivärv)
- **Soft Blue**: #93C5FD (Secondary - Sekundaarne värv)
- **Charcoal**: #1F2937 (Text - Tekst)
- **White**: #FFFFFF (Background - Taust)
- **Gray**: #F3F4F6 (Muted - Summutatud)
- **Accent**: #10B981 (Success - Edu)

### Typography / Tüpograafia
- **Primary**: Inter (Sans-serif) - Modern and readable
- **Monospace**: For technical content
- **Font Weights**: 300, 400, 500, 600, 700
- **Line Heights**: Optimized for readability

### Spacing & Layout / Vahed ja Paigutus
- **Base Unit**: 4px (0.25rem)
- **Container**: Max-width 1200px
- **Grid**: 12-column responsive grid
- **Breakpoints**: Mobile-first approach

## 🚀 Getting Started / Alustamine

### Prerequisites / Eeltingimused
- Node.js 18+ 
- npm or yarn
- Git

### Installation / Paigaldamine
```bash
# Clone the repository
git clone https://github.com/MagnusMagi/MagiLabs.git
cd MagiLabs

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build & Deploy / Ehitamine ja Juurutamine
```bash
# Build for production
npm run build

# Start production server
npm start

# Code quality check
npm run lint
```

## 🌐 Internationalization Details / Rahvusvahelise Kujundamise Detailid

The project is prepared for multilingual support:
- **Language Files**: Will be organized in `/locales` folder
- **Context API**: Language management with React Context
- **Dynamic Routing**: URL-based language switching
- **SEO Optimization**: Meta tags for each language

### Supported Languages / Toetatud Keeled
- **EN**: English (Default)
- **EE**: Estonian (Eesti keel)

## 📱 Responsive Design / Responsiivne Disain

### Breakpoint System / Murdepunktide Süsteem
- **Mobile**: 320px - 768px (Mobile-first)
- **Tablet**: 768px - 1024px (Tablet compatible)
- **Desktop**: 1024px+ (Desktop optimized)

### Responsive Features / Responsiivsed Funktsioonid
- **Mobile-First**: Design starting from mobile devices
- **Flexible Grid**: Flexible layout with CSS Grid and Flexbox
- **Touch-Friendly**: Optimized for touch devices
- **Performance**: Optimized for every screen size

## 🔧 Development Guide / Arenduse Juhend

### Component Development / Komponentide Arendamine
- Use shadcn/ui components as base
- Follow Tailwind CSS utility-first approach
- Maintain consistent spacing and typography
- Test on multiple screen sizes

### Code Style / Koodi Stiil
- TypeScript strict mode enabled
- ESLint Next.js configuration
- Prettier code formatting
- Semantic commit messages

### Best Practices / Parimad Tavad
- **Component Composition**: Create complex UI by combining components
- **Props Interface**: Define TypeScript interface for each component
- **Error Boundaries**: Use error boundaries for error handling
- **Performance**: Prevent unnecessary renders with React.memo and useMemo

## 🚀 Future Enhancements / Tulevased Täiustused

### Phase 1 - Core Features / Põhifunktsioonid
- [x] Responsive website structure
- [x] Theme switching system
- [x] Language selector framework
- [x] Component library setup

### Phase 2 - CMS Integration / CMS Integreerimine
- [ ] MDX/TipTap editor integration
- [ ] Content management system
- [ ] Dynamic page generation
- [ ] SEO optimization tools

### Phase 3 - Advanced Features / Täiustatud Funktsioonid
- [ ] Blog section with AI-generated content
- [ ] Job application system
- [ ] Product-specific landing pages
- [ ] Analytics integration (PostHog/Vercel)

### Phase 4 - Enterprise Features / Ettevõtte Funktsioonid
- [ ] User authentication system
- [ ] Role-based access control
- [ ] Performance monitoring
- [ ] Advanced analytics dashboard

## 📊 Performance Targets / Jõudluse Eesmärgid

### Lighthouse Metrics / Lighthouse Meetrikad
- **Performance Score**: 95+
- **Accessibility Score**: 95+
- **Best Practices Score**: 95+
- **SEO Score**: 95+

### Core Web Vitals / Veebi Põhilised Näitajad
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

### Optimization Strategies / Optimeerimise Strateegiad
- **Code Splitting**: Route-based code splitting
- **Image Optimization**: Next.js Image component
- **Font Loading**: Optimized font loading strategy
- **Bundle Analysis**: Regular bundle size monitoring

## 🤝 Contributing / Kaasaaitamine

### Developer Setup / Arendaja Seadistamine
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test and pass lint checks
5. Write commit messages semantically
6. Submit a pull request

### Commit Convention / Commit Konventsioon
```
feat: add new feature
fix: bug fix
docs: documentation changes
style: formatting changes
refactor: code refactoring
test: adding tests
chore: maintenance tasks
```

### Code Review Process / Koodi Ülevaatamise Protsess
- At least one review required for each PR
- Test coverage should be 80%+
- Performance impact should be evaluated
- Accessibility standards should be met

## 📄 License / Litsents

This project is proprietary software owned by MagiLabs ÖÜ. All rights reserved.

**Eesti keel**: See projekt on MagiLabs ÖÜ omanduses olev omanduslik tarkvara. Kõik õigused on kaitstud.

## 📞 Contact / Kontakt

### Company Information / Ettevõtte Info
- **Company**: MagiLabs ÖÜ
- **Location**: Tallinn, Estonia
- **Industry**: Digital Product Studio
- **Specialization**: AI-powered SaaS Applications

### Contact Details / Kontaktandmed
- **Email**: [Contact via website]
- **Website**: [Coming soon]
- **LinkedIn**: [Company profile]
- **GitHub**: [https://github.com/MagnusMagi/MagiLabs](https://github.com/MagnusMagi/MagiLabs)

### Office Location / Kontori Asukoht
- **Address**: Tallinn, Estonia
- **Timezone**: EET (UTC+2) / EEST (UTC+3)
- **Business Hours**: Monday - Friday, 9:00 AM - 6:00 PM

## 🌟 Key Highlights / Põhilised Eristumised

### Innovation Focus / Innovatsiooni Fookus
- **AI Integration**: AI-powered features
- **Modern Tech Stack**: Latest technologies
- **Scalable Architecture**: Architecture suitable for growing needs
- **Performance First**: Speed and performance-focused development

### Estonian Excellence / Eesti Tipptase
- **Nordic Design**: Scandinavian design aesthetics
- **Digital Innovation**: Estonia's digital leadership
- **Quality Standards**: High quality standards
- **Global Reach**: Open to international markets

---

**Built with ❤️ by MagiLabs ÖÜ in Tallinn, Estonia**

*"Innovating the future, one line of code at a time"*
