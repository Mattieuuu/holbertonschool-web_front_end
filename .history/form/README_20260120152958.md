# Form Learning Project

This project demonstrates progressive HTML and CSS form development, covering form structure, styling, validation, and interactive search functionality.

## Project Overview

This series of tasks builds from basic form structure to complex interactive form elements with validation, styling, and search functionality.

## Tasks Breakdown

### Task 0: Baseline Article (00-article.html, 00-styles.css)
- Basic article page structure
- Foundation for form development
- Initial styling setup

### Task 1: Post Comments Section (01-article.html, 01-styles.css)
- Added comments section (`post-comments` class)
- Section title with small-caps variant
- Introduction to form structure

### Task 2: Form Fieldsets (02-article.html, 02-styles.css)
- Created first fieldset with legend: "Your personal information"
- Created second fieldset with legend: "Your comment"
- Added form-group divs for organization
- Implemented float-based grid layout with col-1-2 (50%), col-2-3 (66.66%) classes

### Task 3: Labels and Form Fields (03-article.html, 03-styles.css)
- Added labels with proper for/id attributes
- Created form-field containers
- Added form-help placeholders
- Implemented button-primary styling with:
  - Transparent background with red border (normal state)
  - Red filled background on hover

### Task 4: Form Inputs (04-article.html, 04-styles.css)
- Added text inputs with validation patterns:
  - First Name: `[A-Za-zÀ-ž\s]{3,}` (min 3 chars)
  - Last Name: `[A-Za-zÀ-ž\s]{3,}` (min 3 chars)
  - Email: `[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$`
  - Title: `[A-Za-zÀ-ž\s]{4,}` (min 4 chars)
- Added textarea for comments with minlength=10
- Implemented input styling:
  - Position relative, width 100%, padding 1.2rem
  - Border 0.1rem solid black, white background
  - Focus state: grey border, light-grey background
  - Italic placeholder text

### Task 5: Form Help Messages (05-article.html, 05-styles.css)
- Added form-field-icon elements for validation indicators
- Added form-help paragraphs with validation rules:
  - First Name help text
  - Last Name help text
  - Title help text
  - Comment help text
- Implemented CSS animations:
  - Help text hidden by default (max-height: 0)
  - Appears on focus-within (max-height: 20rem)
  - Smooth transition over 0.3s

### Task 6: Validation Styling (06-article.html, 06-styles.css)
- Added color variables:
  - `--color-red: #cd3e65`
  - `--color-green: #08805b`
  - `--valid-color: var(--color-green)`
  - `--error-color: var(--color-red)`
- Implemented validation icons:
  - ✔ (checkmark) for valid inputs (green)
  - ✘ (X) for invalid inputs (red)
- Added validation borders:
  - Green border for valid inputs
  - Red border for invalid inputs
- Button styling update:
  - Normal: white text on red background
  - Hover: red text on white background with red border

### Task 7: Search Form (07-article.html, 07-styles.css)
- Created search form in navigation
- Form structure:
  - Form element with class `form-search`
  - Input type="search" with id="search-input"
  - Button with class `search-button`
  - SVG icon inside button
- Search form animation:
  - Initial state: Icon only (width: 0)
  - Focus state: Expands to 15rem width
  - Input shows "Search..." placeholder
  - Smooth width transition with cubic-bezier animation
  - Icon remains visible throughout all states

## File Structure

```
form/
├── 00-article.html          # Baseline
├── 00-styles.css            # Baseline styles
├── 01-article.html          # With comments section
├── 01-styles.css            # Comments styling
├── 02-article.html          # With fieldsets
├── 02-styles.css            # Fieldset styling
├── 03-article.html          # With labels
├── 03-styles.css            # Label and button styling
├── 04-article.html          # With inputs
├── 04-styles.css            # Input styling
├── 05-article.html          # With help messages
├── 05-styles.css            # Help message styling
├── 06-article.html          # With validation
├── 06-styles.css            # Validation styling
├── 07-article.html          # With search form
├── 07-styles.css            # Search form styling
└── README.md                # This file
```

## Key CSS Concepts

### Float-Based Grid Layout
- Uses float: left with padding for columns
- Clearfix with ::after pseudo-element
- Responsive column widths (col-1-2, col-2-3)

### Input Styling
- Position relative for icon positioning
- Padding for content spacing
- Border and focus states for visual feedback
- Placeholder styling with italics

### Form Validation
- HTML5 pattern attributes for validation
- CSS pseudo-selectors:
  - `:invalid` for invalid inputs
  - `:valid` for valid inputs
  - `:focus` for focused inputs
  - `:placeholder-shown` for empty inputs
  - `:focus-within` for container focus

### Animation & Transitions
- Smooth transitions on width, colors, and max-height
- Cubic-bezier timing for search form expansion
- Z-index management for layering elements

## HTML Attributes Used

### Input Attributes
- `type`: Specifies input type (text, email, search)
- `name`: Form submission name
- `id`: Element identification
- `placeholder`: Helper text
- `pattern`: Regex validation
- `maxlength`: Maximum character length
- `minlength`: Minimum character length
- `autocomplete`: Browser autocomplete behavior
- `accesskey`: Keyboard shortcut
- `required`: Required field indicator
- `aria-label`: Accessibility label

### Form Attributes
- `action`: Form submission endpoint
- `method`: HTTP method (post/get)
- `class`: CSS class styling

## CSS Custom Properties (Variables)

```css
--color-primary: #D73953
--color-black: #090909
--color-white: #ffffff
--color-grey: #a0a0a0
--color-light-grey: #f3f3f3
--color-dark-grey: #353535
--color-red: #cd3e65
--color-green: #08805b
--valid-color: var(--color-green)
--error-color: var(--color-red)
```

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- CSS custom properties support required
- HTML5 form validation support

## Notes

- Image paths updated to `../images/` for form folder location
- Form uses POST method (for demonstration)
- All inputs include accessibility features
- Validation messages appear on input focus
- Search form uses absolute positioning for animation effect
- Z-index management ensures proper element stacking

## Testing

To test the form:
1. Navigate to the form folder files (00-article.html through 07-article.html)
2. Test each task to see progressive enhancements
3. Try form validation with valid/invalid inputs
4. Test search form by clicking the icon and typing
5. Verify responsive layout and animations

## Learning Outcomes

After completing this project, you will understand:
- HTML form structure and semantics
- CSS form styling and layout techniques
- HTML5 form validation
- CSS pseudo-selectors and pseudo-elements
- CSS animations and transitions
- Accessibility attributes and practices
- Z-index and element stacking
- Float-based layouts
- Custom CSS properties
