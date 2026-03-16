# Bootstrap

This project focuses on using Bootstrap 4.4.1 framework to build responsive web pages using its grid system and utility classes.

## Requirements

- Bootstrap version: **4.4.1**
- Use CDN version
- No custom CSS files, inline styles, or styles in `<head>` - only Bootstrap classes
- Only adding classes to HTML is allowed, no structural changes

## CDN Link

```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
```

## Tasks

### 0. Reboot styling
**File:** `0-index.html`

Add Bootstrap to reset the CSS styling with Bootstrap's Reboot styles.

### 1. Blocks
**File:** `1-index.html`

Build a responsive web page with 6 different rows, each with specific responsive behaviors:

**Row 1 (First line):**
- 4 cells: Primary, Success, Danger, Warning
- Equal width cells
- `>= 992px`: 4 columns in one line
- `< 992px`: 4 lines (stacked)

**Row 2 (Second line):**
- 4 cells: Primary, Success, Danger, Warning
- Equal width cells
- `>= 576px`: 4 columns in one line
- `< 576px`: 4 lines (stacked)

**Row 3 (Third line):**
- 3 cells: Primary, Success, Danger
- Danger cell: 50% width
- Success cell: 2x width of Primary cell
- `>= 992px`: 3 columns in one line
- `< 992px`: 3 lines (stacked)

**Row 4 (Fourth line):**
- 4 cells with different order based on screen size:
  - `>= 1200px` (xl): Primary → Success → Danger → Warning
  - `992-1200px` (lg): Warning → Primary → Success → Danger
  - `768-992px` (md): Danger → Warning → Primary → Success
  - `<= 768px`: Success → Danger → Warning → Primary

**Row 5 (Fifth line):**
- 2 cells: Primary, Success
- Each ~16% width
- `>= 768px`: 2 columns on opposite sides of screen
- `< 768px`: 2 lines (stacked)

**Row 6 (Last line):**
- 3 cells: Primary, Success, Danger
- Each ~16% width
- `>= 768px`: 3 columns with space between first and middle 2x bigger than space between middle and last
- `< 768px`: 3 lines (stacked)

**Common styles for all cells:**
- Padding: 0.5rem
- Background color matching cell name
- Text: centered and white

## Bootstrap Classes Used

- **Grid System:** `container-fluid`, `row`, `col-*`
- **Responsive Columns:** `col-sm-*`, `col-md-*`, `col-lg-*`, `col-xl-*`
- **Background Colors:** `bg-primary`, `bg-success`, `bg-danger`, `bg-warning`
- **Text Utilities:** `text-white`, `text-center`
- **Spacing:** `p-2` (padding 0.5rem)
- **Flexbox Utilities:** `justify-content-between`, `justify-content-around`
- **Order:** `order-*`, `order-sm-*`, `order-md-*`, `order-lg-*`, `order-xl-*`

## Repository

- **GitHub repository:** holbertonschool-web_front_end
- **Directory:** Bootstrap
