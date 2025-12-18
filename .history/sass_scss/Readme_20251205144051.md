# Sass/SCSS Learning Guide

## Overview
This directory contains a series of Sass/SCSS exercises that demonstrate fundamental and advanced features of the Sass preprocessor. Each file builds upon previous concepts to teach progressive Sass skills.

---

## Files Description

### 0-debug_log.scss
**Concept:** Debug Output

This file demonstrates how to use the `@debug` directive to print messages during compilation.

```scss
/* Debug log */
@debug "Hello world";
```

**Output:**
```
0-debug_log.scss:1 DEBUG: Hello world
```

**Key Learning:**
- `@debug` outputs messages to the console during Sass compilation
- Useful for debugging and understanding variable values

---

### 1-color_variable.scss
**Concept:** Sass Variables

Introduces the concept of variables to store reusable values. Variables prevent code repetition and make maintenance easier.

```scss
/* Color variable */
$text-color: #3D3D3D;

body {
  color: $text-color;
}

p {
  color: $text-color;
}
```

**Key Learning:**
- Variables are defined with `$` prefix
- Variables can be reused throughout the stylesheet
- Makes it easy to change values globally

---

### 2-color_variables.scss
**Concept:** Multiple Variables

Extends the previous concept by using multiple variables for different purposes.

```scss
/* Color variables */
$text-color: #3D3D3D;
$bg-color: #6D6D6D;

body {
  color: $text-color;
  background-color: $bg-color;
}

p {
  color: $text-color;
}

h2 {
  background-color: $bg-color;
}
```

**Key Learning:**
- Multiple variables can be defined and used independently
- Variables improve code organization and readability

---

### 3-nested_tag.scss
**Concept:** Nesting Selectors

Demonstrates Sass's nesting feature, which allows you to nest selectors to represent the DOM structure and reduce repetition.

```scss
/* Nested tag */
body {
  margin: 0px;
  padding: 0px;

  p {
    margin: 10px;
  }
}
```

**Compiles to:**
```css
body {
  margin: 0px;
  padding: 0px;
}
body p {
  margin: 10px;
}
```

**Key Learning:**
- Nesting makes code more readable and organized
- Reflects the HTML structure visually
- Reduces selector repetition

---

### 4-nested_class.scss
**Concept:** Nesting Classes

Shows how to nest CSS classes within selectors using the same nesting concept.

```scss
/* Nested class */
body {
  color: #3D3D3D;

  .red {
    color: #FF0000;
  }
}
```

**Compiles to:**
```css
body {
  color: #3D3D3D;
}
body .red {
  color: #FF0000;
}
```

**Key Learning:**
- Classes can be nested like elements
- Creates descendant selectors automatically

---

### 5-nested_child.scss
**Concept:** Child Combinator

Introduces the child combinator `>` to select only direct children, not all descendants.

```scss
/* Nested child */
body {
  color: #3D3D3D;

  > .red {
    color: #FF0000;
  }
}
```

**Compiles to:**
```css
body {
  color: #3D3D3D;
}
body > .red {
  color: #FF0000;
}
```

**Key Learning:**
- `>` targets only direct children
- Different from space combinator (descendant selector)
- Provides more precise control over CSS cascade

---

### 6-nested_hover.scss
**Concept:** Pseudo-Classes with Parent Selector

Demonstrates the parent selector `&` which refers to the current selector, enabling pseudo-class nesting.

```scss
/* Nested hover */
button {
  color: #FF0000;

  &:hover {
    color: #00FF00;
  }
}
```

**Compiles to:**
```css
button {
  color: #FF0000;
}
button:hover {
  color: #00FF00;
}
```

**Key Learning:**
- `&` represents the parent selector
- Useful for pseudo-classes (`:hover`, `:focus`, `:active`, etc.)
- Keeps related styles organized together

---

### 7-nested_deeper.scss
**Concept:** Deep Nesting

Shows how to nest multiple levels deep to represent complex DOM hierarchies.

```scss
/* Nested deeper */
body {
  font-size: 14px;

  h1 {
    font-size: 16px;

    &.smaller {
      font-size: 12px;
    }
  }
}
```

**Compiles to:**
```css
body {
  font-size: 14px;
}
body h1 {
  font-size: 16px;
}
body h1.smaller {
  font-size: 12px;
}
```

**Key Learning:**
- Nesting can go multiple levels deep
- Maintains readability by representing DOM structure
- Combine element, class, and pseudo-class nesting

---

### 8-mixin_margins.scss
**Concept:** Mixins

Introduces mixins, which are reusable blocks of code that can accept parameters.

```scss
/* Mixin margins */
@mixin set-margins($left, $right) {
  margin-left: $left;
  margin-right: $right;
}

body {
  @include set-margins(10px, 10px);
}

div {
  @include set-margins(15px, 15px);
}
```

**Compiles to:**
```css
body {
  margin-left: 10px;
  margin-right: 10px;
}

div {
  margin-left: 15px;
  margin-right: 15px;
}
```

**Key Learning:**
- Mixins are defined with `@mixin` keyword
- Mixins can accept parameters
- Mixins are included with `@include` keyword
- Each include duplicates the CSS (unlike `@extend`)
- Great for parametric styles

---

### 9-extend_list.scss
**Concept:** Selector Extension

Demonstrates `@extend` which allows selectors to inherit styles from other selectors without duplication.

```scss
/* Extend list */
.info {
  font-size: 12px;
}

.success {
  @extend .info;
  color: #00FF00;
}

.warning {
  @extend .info;
  color: #FF0000;
}
```

**Compiles to:**
```css
.info, .success, .warning {
  font-size: 12px;
}

.success {
  color: #00FF00;
}

.warning {
  color: #FF0000;
}
```

**Key Learning:**
- `@extend` allows selector inheritance
- Sass groups selectors to avoid CSS duplication
- More efficient than mixins for simple inheritance
- Only shared properties are grouped

---

### 10-colors.scss & 10-import_colors.scss
**Concept:** Importing Files with @import

Demonstrates how to import variables and styles from external Sass files.

**10-colors.scss:**
```scss
/* All my colors */
$red: #FF0000;
$green: #00FF00;
$blue: #0000FF;
```

**10-import_colors.scss:**
```scss
/* Import colors */
@import "10-colors";

.red {
  color: $red;
}

.green {
  color: $green;
}

.blue {
  color: $blue;
}
```

**Key Learning:**
- `@import` imports code from external files
- Makes code organization cleaner
- Allows sharing variables and mixins across files
- File extension `.scss` is optional in import statements

**Note:** `@import` is deprecated in newer Sass versions. Use `@use` instead for better namespacing.

---

### 11-photos.scss & 11-loop_photos.scss
**Concept:** @each Loop with @use

Demonstrates looping over lists to generate multiple similar selectors dynamically.

**11-photos.scss:**
```scss
/* All names */
$list-names: julien john sam damian;
```

**11-loop_photos.scss:**
```scss
/* Loop photos */
@use "11-photos" as *;

@each $name in $list-names {
  .photo-#{$name} {
    background: image-url("photos/#{$name}.jpg") no-repeat;
  }
}
```

**Compiles to:**
```css
.photo-julien {
  background: image-url("photos/julien.jpg") no-repeat;
}

.photo-john {
  background: image-url("photos/john.jpg") no-repeat;
}

.photo-sam {
  background: image-url("photos/sam.jpg") no-repeat;
}

.photo-damian {
  background: image-url("photos/damian.jpg") no-repeat;
}
```

**Key Learning:**
- `@use` is the modern approach to importing (replaces `@import`)
- `as *` makes variables available without namespace prefix
- `@each` loops over list items
- String interpolation with `#{}` inserts values into selectors and properties

---

### 12-loop_header.scss
**Concept:** @for Loop

Demonstrates using `@for` to loop over numeric ranges for generating repetitive styles.

```scss
/* Loop header */
@for $i from 1 through 5 {
  h#{$i} {
    font-size: #{$i}px;
  }
}
```

**Compiles to:**
```css
h1 {
  font-size: 1px;
}

h2 {
  font-size: 2px;
}

h3 {
  font-size: 3px;
}

h4 {
  font-size: 4px;
}

h5 {
  font-size: 5px;
}
```

**Key Learning:**
- `@for` loops over numeric ranges
- `from X through Y` includes both start and end (inclusive)
- `from X to Y` excludes the end (exclusive)
- Useful for generating systematic variations

---

## Key Sass Features Summary

| Feature | Purpose | Example |
|---------|---------|---------|
| Variables `$` | Store reusable values | `$color: #FF0000;` |
| Nesting | Organize selectors hierarchically | `body { p { } }` |
| Parent Selector `&` | Reference parent in nested rules | `&:hover` |
| Mixins `@mixin` | Reusable parametric code blocks | `@mixin name($param) { }` |
| @extend | Inherit styles from other selectors | `@extend .class;` |
| @import | Import external files (deprecated) | `@import "file";` |
| @use | Import external files (modern) | `@use "file" as *;` |
| @each | Loop over lists | `@each $item in $list { }` |
| @for | Loop over numeric ranges | `@for $i from 1 to 5 { }` |
| @debug | Print debug messages | `@debug $variable;` |
| String Interpolation `#{}` | Insert values in strings | `#{$variable}` |

---

## Best Practices

1. **Use variables** for colors, fonts, sizes, and other reusable values
2. **Use meaningful variable names** that describe their purpose
3. **Organize code** with nesting to reflect HTML structure
4. **Use mixins** for complex, parametric styles
5. **Use @extend** for simple inheritance relationships
6. **Use @use** instead of @import for modern projects
7. **Keep nesting shallow** (max 3-4 levels) for readability
8. **Comment your code** with block comments explaining purpose
9. **Use @each and @for** to generate repetitive styles automatically
10. **Compile to CSS** before deployment to browsers

---

## Running the Examples

To compile any Sass file to CSS:

```bash
sass filename.scss
```

To see only the CSS output:

```bash
sass filename.scss | tail -n +2
```

To compile with specific output style:

```bash
sass --style=expanded filename.scss
sass --style=compressed filename.scss
```

---

## Resources

- [Official Sass Documentation](https://sass-lang.com/)
- [Sass Language Features](https://sass-lang.com/documentation/at-rules)
- [Sass Best Practices](https://sass-lang.com/guide)

