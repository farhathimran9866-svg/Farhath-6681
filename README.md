# Semantic HTML5 Accessibility Portfolio

A fully compliant semantic HTML5 portfolio website built to **WCAG 2.1 Level AA** standards.

## 📁 Project Structure

```
├── index.html              # Homepage
├── projects.html           # Projects showcase
├── about.html             # About page
├── contact.html           # Contact form
├── accessibility.html     # Accessibility statement
├── styles.css             # WCAG-compliant CSS
├── script.js              # Accessible JavaScript
└── README.md             # Documentation
```

## ✨ Key Features

### Semantic HTML5
- ✅ `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- ✅ Proper heading hierarchy
- ✅ Semantic form elements

### ARIA Implementation
- ✅ `aria-label` on interactive elements
- ✅ `aria-labelledby` for section headings
- ✅ `aria-describedby` for form help text
- ✅ `aria-current="page"` for active nav
- ✅ `role` attributes for landmark regions
- ✅ `aria-live` regions for dynamic updates
- ✅ `aria-expanded` for mobile menu

### Keyboard Navigation
- ✅ Full Tab key support
- ✅ Visible focus indicators
- ✅ Skip-to-content link
- ✅ Escape key closes menu
- ✅ Form validation

### SEO Optimization
- ✅ Semantic meta tags
- ✅ Canonical URLs
- ✅ Descriptive titles
- ✅ Open Graph tags
- ✅ Twitter Card support
- ✅ Robots meta tags

### Accessibility
- ✅ 4.5:1 color contrast (WCAG AA)
- ✅ Responsive design
- ✅ Dark mode support
- ✅ Reduced motion support
- ✅ 200% zoom support
- ✅ Touch targets ≥ 44x44px

## 🎨 CSS Architecture

- CSS Custom Properties for maintainability
- Mobile-first responsive design
- Flexbox & CSS Grid layouts
- Print styles for accessibility
- Dark mode support

## 📱 Responsive Breakpoints

- Mobile: < 480px
- Tablet: 480px - 768px
- Desktop: > 768px

## 🧪 Testing Checklist

### Accessibility
- [ ] Lighthouse audit: 100 on Accessibility
- [ ] Keyboard-only navigation
- [ ] Screen reader testing (NVDA/JAWS)
- [ ] Color contrast verification
- [ ] 200% zoom test
- [ ] Mobile menu focus
- [ ] Form validation messages

### SEO
- [ ] Lighthouse audit: 100 on SEO
- [ ] Meta descriptions in search results
- [ ] Canonical URLs verified
- [ ] Mobile responsiveness
- [ ] Structured data (schema.org)
- [ ] Page load performance

## 🚀 Performance Targets

- Lighthouse Accessibility: **100**
- Lighthouse SEO: **100**
- Lighthouse Performance: **90+**
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s

## 📝 Usage

1. Open `index.html` in a browser
2. Test keyboard navigation with Tab key
3. Test with screen reader (NVDA, JAWS, VoiceOver)
4. Run Chrome DevTools Lighthouse audit
5. Verify all pages load correctly

## 🛠️ Customization

### Update Colors
Edit CSS custom properties in `styles.css`:
```css
:root {
    --color-primary: #2c3e50;
    --color-secondary: #3498db;
}
```

### Update Content
- Replace text in HTML files
- Update contact info in `contact.html`
- Add project details to `projects.html`
- Update bio in `about.html`

## 📚 Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [ARIA Practices](https://www.w3.org/WAI/ARIA/apg/)

## 📄 License

Free to use for personal and educational purposes.

---

**Built with ❤️ for accessibility and semantic web standards**
