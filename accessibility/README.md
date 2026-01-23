# Accessibility Project

## Description
This project focuses on implementing web accessibility best practices to make websites usable by everyone, including people with disabilities. It covers various accessibility techniques including keyboard navigation, skip links, and fixing common accessibility issues.

## Project Structure

### 1. Keyboard Navigation (`keyboard/`)
Making the "Works" card focus visible for keyboard users.

**Files:**
- `01-index.html` - Homepage with keyboard-accessible work cards
- `01-styles.css` - Styles with focus states for keyboard navigation

**Key Changes:**
- Removed `opacity: 0` from `.card-work .card-title`
- Added `opacity: 0` to `.card-work .card-title a`
- Added focus states: `.card-work .card-title a:focus` and `.card-work:hover .card-title a`
- Cards now display with dark background and visible title when focused with keyboard (TAB key)

---

### 2. Skip Links (`skip-links/`)
Adding skip navigation links to help users jump directly to main content or navigation.

**Files:**
- `01-index.html` - Homepage with skip links
- `01-article.html` - Article page with skip links
- `01-styles.css` - Styles for skip links

**Key Features:**
- Skip links navigation after `<body>` tag with `aria-label="Skip links"`
- Two skip links:
  - "Skip to primary navigation" (`#a11y-primary-nav`)
  - "Skip to main content" (`#a11y-main-content`)
- Links are hidden by default but appear on focus
- Added IDs and `tabindex="-1"` to navigation and main elements

**CSS Classes:**
- `.off-screen` - Positions skip links off-screen
- `.skip-link` - Styles for skip links (fixed position, initially hidden)
- `.skip-link:focus` - Makes skip links visible when focused

---

### 3. Accessibility Fixes (`fix-a11y/`)
Progressive fixes for common accessibility issues, from basic color contrast to semantic HTML.

#### **01-index.html** - Color Contrast
- **Issue:** Poor color contrast (gray text on blue background)
- **Fix:** Removed body styles to use browser defaults (black text on white background)

#### **02-index.html** - Document Title
- **Issue:** Missing page title
- **Fix:** Added `<title>Homepage - A fake website</title>`

#### **03-index.html** - Language Attribute
- **Issue:** Missing language declaration
- **Fix:** Added `lang="en"` to `<html>` tag

#### **04-index.html** - Image Alt Text
- **Issue:** Images without alternative text
- **Fix:**
  - Logo: `alt="Name of the logo"`
  - Hero image: `alt=""` (decorative image)

#### **05-index.html** - Form Labels
- **Issue:** Form input without label
- **Fix:**
  - Added `<label class="visually-hidden" for="email">Email</label>`
  - Changed input type from `text` to `email`
  - Added `id="email"`, `autocomplete="email"`, `required`, `aria-required="true"`
  - Changed submit link to `<button>`
  - Removed placeholder

#### **06-index.html** - Link Text
- **Issue:** Icon-only links without discernible text
- **Fix:**
  - Facebook link: `aria-label="Facebook"`
  - Twitter link: `aria-label="Twitter"`

#### **07-index.html** - Zoom and Scaling
- **Issue:** User scaling disabled
- **Fix:** Removed `user-scalable=no` from viewport meta tag

#### **08-index.html** - Heading Hierarchy
- **Issue:** Improper heading structure and missing main heading
- **Fix:**
  - Added `<h1>Homepage</h1>` after header
  - Fixed heading hierarchy (h1 → h2 → h3)
  - Changed decorative headings to `<span>` elements
  - Example changes:
    - `<h6>This is me</h6>` → `<h2>This is me</h2>`
    - `<h1>Philip Gilbert</h1>` → `<span>Philip Gilbert</span>`
    - `<h4>Economy</h4>` → `<span>Economy</span>`

#### **09-index.html** - Semantic Landmarks
- **Issue:** No semantic HTML5 landmarks
- **Fix:**
  - `<div class="header">` → `<header class="header">`
  - `<div class="nav">` → `<nav class="nav">`
  - Wrapped content in `<main>` tag
  - `<div class="footer">` → `<footer class="footer">`
  - `<div class="section">` → `<section class="section">` (except sections without headings)

#### **10-index.html** - Lists
- **Issue:** Multiple related items not marked up as lists
- **Fix:**
  - Navigation: `<div>` → `<ul>`, `<p>` → `<li>`
  - Package list: Transformed spans into `<ul>` with `<li>` elements

---

## Technologies Used
- HTML5 (semantic elements)
- CSS3 (custom properties, transitions)
- ARIA attributes
- Accessibility best practices

## Testing Tools
- **Axe DevTools** - Automated accessibility testing
- **headingsMap** - Visual representation of heading hierarchy
- **Landmarks** - Visual representation of page landmarks
- **Keyboard testing** - TAB navigation testing

## Key Accessibility Concepts

### WCAG Principles
- **Perceivable** - Information must be presentable to users in ways they can perceive
- **Operable** - User interface components must be operable
- **Understandable** - Information and operation must be understandable
- **Robust** - Content must be robust enough for assistive technologies

### Best Practices Implemented
1. **Sufficient color contrast** (minimum 4.5:1 for normal text)
2. **Keyboard accessibility** (all functionality available via keyboard)
3. **Skip navigation links** (bypass repetitive content)
4. **Semantic HTML** (proper use of headings, landmarks, lists)
5. **Alternative text** (meaningful descriptions for images)
6. **Form labels** (explicit labels for all form controls)
7. **ARIA attributes** (enhance accessibility where native HTML is insufficient)
8. **Proper heading hierarchy** (logical document outline)
9. **Allow zooming** (users can scale content)
10. **Descriptive links** (link purpose is clear from text or aria-label)

## Learning Outcomes
- Understanding web accessibility importance
- Implementing keyboard navigation
- Using ARIA attributes appropriately
- Creating proper semantic HTML structure
- Testing with accessibility tools
- Fixing common accessibility issues
- Understanding WCAG guidelines

## Repository
- **GitHub repository:** holbertonschool-web_front_end
- **Directory:** accessibility

## Author
Holberton School Web Front-End Project
