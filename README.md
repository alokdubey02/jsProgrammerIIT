````
# Animal Tables Project

## Overview
This project is a web-based application that dynamically displays and manages data for three categories of animals: **Big Cats**, **Dogs**, and **Big Fish**. Each category has its own interactive table with features such as sorting, adding, editing, and deleting entries. The design focuses on usability and customization, ensuring a user-friendly experience.

---

## Features

### 1. Dynamic Tables
- Each animal category has its own table dynamically rendered on the webpage.
- Data is displayed in a clean, tabular format with responsive design.

### 2. Sorting
- Configurable sorting functionality:
  - **Big Cats Table**: Sortable on all fields except images.
  - **Dogs Table**: Sortable on **Name** and **Location** fields.
  - **Big Fish Table**: Sortable only on the **Size** field.

### 3. Adding New Entries
- Users can add new animals to any table using an input form.
- Fields include **Name**, **Size**, and **Location**.
- Default placeholder images are used for new entries.

### 4. Edit and Delete Functionality
- Edit: Update existing entries using a prompt dialog.
- Delete: Remove specific rows with a single click.

### 5. Image Styling
- Images are displayed with:
  - Hover effects: Enlarges the image and applies a border.
  - Tooltip: Displays the animal name on hover.

### 6. Custom Styling
- Unique text styles for specific tables:
  - **Bold Names**: Dog names appear in bold.
  - **Italic and Blue Names**: Big Fish names are italicized, bold, and blue.

---

## Design Approach

### Class-Based Implementation
The project uses an **`AnimalTable` class** to handle:
- Rendering the table and its rows.
- Managing data (add, edit, delete, and sort).
- Configuring column-specific behavior (e.g., sorting, styling).

This modular approach ensures code reusability and scalability.

---

### Data Representation
Animal data for each category is stored in JSON format. This format is lightweight, easy to modify, and facilitates dynamic table generation.

Example:
```json
[
  {
    "species": "Big Cats",
    "name": "Tiger",
    "size": 10,
    "location": "Asia",
    "image": "./images/tiger.png"
  }
]
````

---

## Validation

1. **Duplicate Prevention**:
   - Ensures no two animals in the same table have the same name.
2. **Input Validation**:
   - Ensures valid numeric inputs for size.
   - Prevents submission of empty fields.

---

## Styling

1. **CSS Effects**:

   - Smooth hover transitions for images.
   - Custom classes for bold and italic text.

2. **Bootstrap**:
   - Used for responsive and aesthetically pleasing table layouts.

Example CSS:

```css
img:hover {
  transform: scale(6);
  border-color: #000;
}
```

---

## File Structure

```
/index.html       # HTML file containing the structure for the tables.
/styles.css       # Custom CSS for additional styling and hover effects.
/script.js        # JavaScript logic for managing and rendering tables.
```

---

## How to Run

1. Clone the repository or download the project files.
2. Ensure the image files are placed in the `/images/` directory.
3. Open `index.html` in any modern browser.
4. Interact with the tables:
   - Add new entries using the form.
   - Sort columns by clicking the "Sort" button.
   - Edit or delete rows using the respective buttons.

---

## References

- **ChatGPT**: Used for guidance and reference also used for formatting the documentation as readme.md file.
- **Bootstrap**: For responsive and structured table styling.
