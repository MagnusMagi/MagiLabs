# Contributing to MagiLabs

Thank you for your interest in contributing to MagiLabs! This document provides guidelines and information for contributors.

## 🎯 Proje Hakkında / About the Project

MagiLabs, Estonya merkezli bir dijital ürün stüdyosu için Framer tarzında CMS ve Admin Panel sistemi geliştiren bir projedir. Proje, modern web teknolojileri kullanılarak tamamen modüler, responsive ve component-driven yaklaşımla inşa edilmektedir.

**English**: MagiLabs is a project developing a Framer-inspired CMS and Admin Panel system for an Estonia-based digital product studio. The project is built using modern web technologies with a fully modular, responsive, and component-driven approach.

## 🚀 Başlarken / Getting Started

### Gereksinimler / Prerequisites
- Node.js 18+ 
- npm veya yarn
- Git
- Modern web browser
- Code editor (VS Code recommended)

### Kurulum / Setup
```bash
# Repository'yi fork edin
git clone https://github.com/YOUR_USERNAME/MagiLabs.git
cd MagiLabs

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

### Geliştirme Ortamı / Development Environment
- **Port**: http://localhost:3000
- **Hot Reload**: Otomatik sayfa yenileme
- **TypeScript**: Strict mode aktif
- **ESLint**: Kod kalitesi kontrolü
- **Prettier**: Kod formatlaması

## 🔧 Geliştirme Süreci / Development Process

### 1. Issue Oluşturma / Creating Issues
- Bug report veya feature request için issue oluşturun
- Template'leri kullanarak detaylı bilgi verin
- Screenshot veya video ekleyin (gerekirse)
- Reproduction steps belirtin

### 2. Branch Oluşturma / Creating Branches
```bash
# Main branch'ten güncel kodu alın
git checkout main
git pull origin main

# Feature branch oluşturun
git checkout -b feature/your-feature-name
# veya
git checkout -b fix/your-bug-fix
```

### 3. Geliştirme / Development
- Kod standartlarına uyun
- TypeScript interface'leri tanımlayın
- Component'leri test edin
- Responsive tasarımı kontrol edin
- Accessibility standartlarını karşılayın

### 4. Commit Mesajları / Commit Messages
Semantic commit convention kullanın:

```
feat: add new feature
fix: bug fix
docs: documentation changes
style: formatting changes
refactor: code refactoring
test: adding tests
chore: maintenance tasks
```

Örnekler / Examples:
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
- Branch'inizi push edin
- GitHub'da Pull Request oluşturun
- Template'i doldurun
- Review'ları bekleyin
- Gerekli değişiklikleri yapın

## 📋 Kod Standartları / Code Standards

### TypeScript
- Strict mode kullanın
- Interface'leri export edin
- Type annotation'ları ekleyin
- Generic'leri uygun şekilde kullanın

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
- Functional components kullanın
- Props destructuring yapın
- Memoization'ı uygun şekilde kullanın
- Error boundaries ekleyin

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
- Utility-first yaklaşımı kullanın
- Custom CSS'den kaçının
- Responsive design için breakpoint'leri kullanın
- Dark mode için CSS variables kullanın

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
- PascalCase: Component dosyaları
- camelCase: Utility dosyaları
- kebab-case: CSS dosyaları
- Uzantıları belirtin: `.tsx`, `.ts`, `.css`

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

## 🧪 Test / Testing

### Test Türleri / Test Types
- **Unit Tests**: Component'lerin bağımsız testleri
- **Integration Tests**: Component'ler arası etkileşim
- **E2E Tests**: Kullanıcı senaryoları
- **Visual Tests**: UI görünüm kontrolü

### Test Yazma / Writing Tests
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

## 📚 Dokümantasyon / Documentation

### Component Documentation
- Props interface'lerini belirtin
- Usage örnekleri ekleyin
- Accessibility bilgilerini ekleyin
- Screenshot'lar ekleyin

### Code Comments
- Karmaşık logic'i açıklayın
- Business logic'i belirtin
- TODO'ları ekleyin
- Deprecated kodları işaretleyin

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

## 🔍 Code Review / Code Review

### Review Checklist
- [ ] Kod standartlarına uygun mu?
- [ ] TypeScript hataları var mı?
- [ ] Test'ler yazılmış mı?
- [ ] Responsive design kontrol edildi mi?
- [ ] Accessibility standartları karşılanıyor mu?
- [ ] Performance impact değerlendirildi mi?
- [ ] Security riskleri var mı?

### Review Process
1. **Initial Review**: Kod kalitesi ve standartlar
2. **Technical Review**: Architecture ve performance
3. **Design Review**: UI/UX ve accessibility
4. **Final Review**: Son kontrol ve onay

## 🚀 Deployment / Deployment

### Development
- `npm run dev`: Geliştirme sunucusu
- `npm run build`: Production build
- `npm run start`: Production sunucusu
- `npm run lint`: Kod kalitesi kontrolü

### Production
- Vercel deployment (otomatik)
- Environment variables kontrol edin
- Build optimizasyonları
- Performance monitoring

## 📞 İletişim / Communication

### Geliştirici Topluluğu / Developer Community
- **GitHub Issues**: Bug reports ve feature requests
- **GitHub Discussions**: Genel tartışmalar
- **Pull Requests**: Code contributions
- **Releases**: Yeni sürüm duyuruları

### Etiketler / Labels
- `good first issue`: Yeni başlayanlar için
- `bug`: Hata düzeltmeleri
- `enhancement`: Yeni özellikler
- `documentation`: Dokümantasyon güncellemeleri
- `help wanted`: Yardım gereken konular

## 🎉 Recognition / Recognition

### Contributors
- Tüm contributors GitHub'da listelenir
- Significant contributions için special mention
- Contributor hall of fame
- Regular contributor rewards

### Contribution Types
- **Code**: Feature development ve bug fixes
- **Documentation**: README, docs, tutorials
- **Design**: UI/UX improvements
- **Testing**: Test coverage ve quality
- **Community**: Help, mentoring, support

## 📋 Checklist / Checklist

### Yeni Feature Geliştirirken / When Developing New Features
- [ ] Issue oluşturuldu mu?
- [ ] Branch oluşturuldu mu?
- [ ] Kod standartlarına uyuldu mu?
- [ ] Test'ler yazıldı mı?
- [ ] Documentation güncellendi mi?
- [ ] Responsive design kontrol edildi mi?
- [ ] Accessibility test edildi mi?
- [ ] Performance impact değerlendirildi mi?

### Bug Fix Geliştirirken / When Developing Bug Fixes
- [ ] Bug reproduce edilebiliyor mu?
- [ ] Root cause bulundu mu?
- [ ] Fix test edildi mi?
- [ ] Regression test yapıldı mı?
- [ ] Documentation güncellendi mi?

---

## 🤝 Teşekkürler / Thank You

MagiLabs projesine katkıda bulunduğunuz için teşekkür ederiz! Her contribution, projeyi daha iyi hale getirmemize yardımcı oluyor.

**English**: Thank you for contributing to the MagiLabs project! Every contribution helps us make the project better.

---

*Bu dokümantasyon MagiLabs development team tarafından güncellenmektedir.*
