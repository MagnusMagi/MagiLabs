# Contributing to MagiLabs

Thank you for your interest in contributing to MagiLabs! This document provides guidelines and information for contributors.

## 🎯 About the Project / Projekti Kohta

MagiLabs is a project developing a Framer-inspired CMS and Admin Panel system for an Estonia-based digital product studio. The project is built using modern web technologies with a fully modular, responsive, and component-driven approach.

**Eesti keel**: MagiLabs on projekt, mis arendab Framer-inspireeritud CMS ja Admin Paneeli süsteemi Eestis asuva digitaalse toote stuudio jaoks. Projekt on ehitatud kasutades kaasaegseid veebitehnoloogiaid täielikult modulaarse, responsiivse ja komponentidele põhineva lähenemisviisiga.

## 🚀 Getting Started / Alustamine

### Prerequisites / Eeltingimused
- Node.js 18+ 
- npm or yarn
- Git
- Modern web browser
- Code editor (VS Code recommended)

### Setup / Seadistamine
```bash
# Fork the repository
git clone https://github.com/YOUR_USERNAME/MagiLabs.git
cd MagiLabs

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Environment / Arenduskeskkond
- **Port**: http://localhost:3000
- **Hot Reload**: Automatic page refresh
- **TypeScript**: Strict mode enabled
- **ESLint**: Code quality control
- **Prettier**: Code formatting

## 🔧 Development Process / Arenduse Protsess

### 1. Creating Issues / Probleemide Loomine
- Create issues for bug reports or feature requests
- Provide detailed information using templates
- Add screenshots or videos if needed
- Specify reproduction steps

### 2. Creating Branches / Harude Loomine
```bash
# Get latest code from main branch
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### 3. Development / Arendamine
- Follow code standards
- Define TypeScript interfaces
- Test components
- Check responsive design
- Meet accessibility standards

### 4. Commit Messages / Commit Sõnumid
Use semantic commit convention:

```
feat: add new feature
fix: bug fix
docs: documentation changes
style: formatting changes
refactor: code refactoring
test: adding tests
chore: maintenance tasks
```

Examples / Näited:
```bash
feat: add dark mode toggle component
fix: resolve header navigation overflow issue
docs: update README with new features
style: format code with prettier
refactor: optimize theme provider performance
test: add unit tests for button component
chore: update dependencies
```

### 5. Pull Request / Pull Request
- Push your branch
- Create Pull Request on GitHub
- Fill out the template
- Wait for reviews
- Make necessary changes

## 📋 Code Standards / Koodi Standardid

### TypeScript
- Use strict mode
- Export interfaces
- Add type annotations
- Use generics appropriately

```typescript
// ✅ Good
interface ButtonProps {
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

// ❌ Avoid
const Button = (props: any) => {
  // ...
}
```

### React Components
- Use functional components
- Use props destructuring
- Use memoization appropriately
- Add error boundaries

```typescript
// ✅ Good
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  ...props
}) => {
  // ...
}

// ❌ Avoid
export function Button(props) {
  // ...
}
```

### CSS/Tailwind
- Use utility-first approach
- Avoid custom CSS
- Use breakpoints for responsive design
- Use CSS variables for dark mode

```tsx
// ✅ Good
<div className="flex flex-col md:flex-row lg:space-x-4 p-4 md:p-6 lg:p-8">
  <div className="w-full md:w-1/2 lg:w-1/3">
    {/* Content */}
  </div>
</div>

// ❌ Avoid
<div style={{ display: 'flex', padding: '16px' }}>
  {/* Content */}
</div>
```

### File Naming
- PascalCase: Component files
- camelCase: Utility files
- kebab-case: CSS files
- Specify extensions: `.tsx`, `.ts`, `.css`

```
✅ Good:
- Button.tsx
- useTheme.ts
- globals.css
- utils.ts

❌ Avoid:
- button.tsx
- use-theme.ts
- globals.ts
- Utils.ts
```

## 🧪 Testing / Testimine

### Test Types / Testide Tüübid
- **Unit Tests**: Independent tests of components
- **Integration Tests**: Interaction between components
- **E2E Tests**: User scenarios
- **Visual Tests**: UI appearance control

### Writing Tests / Testide Kirjutamine
```typescript
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    screen.getByText('Click me').click()
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

## 📚 Documentation / Dokumentatsioon

### Component Documentation / Komponentide Dokumentatsioon
- Specify props interfaces
- Add usage examples
- Add accessibility information
- Add screenshots

### Code Comments / Koodi Kommentaarid
- Explain complex logic
- Specify business logic
- Add TODOs
- Mark deprecated code

```typescript
/**
 * Theme toggle component that switches between light and dark modes
 * @param className - Additional CSS classes
 * @param size - Size variant of the toggle
 */
export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className,
  size = 'md'
}) => {
  // TODO: Add animation when switching themes
  // FIXME: Theme persistence not working in Safari
  
  // ... component logic
}
```

## 🔍 Code Review / Koodi Ülevaatus

### Review Checklist / Ülevaatuse Kontrollnimekiri
- [ ] Does code follow standards?
- [ ] Are there TypeScript errors?
- [ ] Are tests written?
- [ ] Is responsive design checked?
- [ ] Are accessibility standards met?
- [ ] Is performance impact evaluated?
- [ ] Are there security risks?

### Review Process / Ülevaatuse Protsess
1. **Initial Review**: Code quality and standards
2. **Technical Review**: Architecture and performance
3. **Design Review**: UI/UX and accessibility
4. **Final Review**: Final check and approval

## 🚀 Deployment / Juurutamine

### Development / Arendamine
- `npm run dev`: Development server
- `npm run build`: Production build
- `npm run start`: Production server
- `npm run lint`: Code quality check

### Production / Tootmine
- Vercel deployment (automatic)
- Check environment variables
- Build optimizations
- Performance monitoring

## 📞 Communication / Kommunikatsioon

### Developer Community / Arendajate Kogukond
- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: General discussions
- **Pull Requests**: Code contributions
- **Releases**: New version announcements

### Labels / Sildid
- `good first issue`: For beginners
- `bug`: Bug fixes
- `enhancement`: New features
- `documentation`: Documentation updates
- `help wanted`: Topics needing help

## 🎉 Recognition / Tunnustamine

### Contributors / Kaasaaitajad
- All contributors are listed on GitHub
- Special mention for significant contributions
- Contributor hall of fame
- Regular contributor rewards

### Contribution Types / Kaasaaitamise Tüübid
- **Code**: Feature development and bug fixes
- **Documentation**: README, docs, tutorials
- **Design**: UI/UX improvements
- **Testing**: Test coverage and quality
- **Community**: Help, mentoring, support

## 📋 Checklist / Kontrollnimekiri

### When Developing New Features / Uute Funktsioonide Arendamisel
- [ ] Is issue created?
- [ ] Is branch created?
- [ ] Are code standards followed?
- [ ] Are tests written?
- [ ] Is documentation updated?
- [ ] Is responsive design checked?
- [ ] Is accessibility tested?
- [ ] Is performance impact evaluated?

### When Developing Bug Fixes / Bugide Parandamisel
- [ ] Can bug be reproduced?
- [ ] Is root cause found?
- [ ] Is fix tested?
- [ ] Is regression test done?
- [ ] Is documentation updated?

---

## 🤝 Thank You / Tänan

Thank you for contributing to the MagiLabs project! Every contribution helps us make the project better.

**Eesti keel**: Täname, et aitasite kaasa MagiLabs projekti! Iga kaasaaitamine aitab meil projekti paremaks teha.

---

*This documentation is maintained by the MagiLabs development team.*
