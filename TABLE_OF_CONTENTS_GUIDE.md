### How to Add a Table of Contents to Your Articles

This guide explains how to add a dynamic table of contents to your article entries. The script `public/reusable_toc.js` will automatically find the section headings in your article and create a list of links.

**Step 1: Add the Table of Contents Placeholder**

In your HTML content for each article, find a suitable location for the table of contents. A good place is usually right after the main introduction or hero section. Insert the following HTML snippet. The script will find this `div` and fill it with the table of contents.

```html
<!-- Table of Contents Placeholder -->
<div id="toc-container" class="mb-6"></div>
```

**Step 2: Include the Table of Contents Script**

At the very end of your HTML content, just before the closing `</body>` tag, add the following script tag. This will load the script that generates the table of contents.

```html
<script src="/reusable_toc.js"></script>
```

---

### Example

Here is how you would modify the 'History Taking in Pediatrics' article:

You would edit the `content` string for the `history-taking-pediatrics` entry in your data file (`src/data/learn.ts`).

1.  **Add the placeholder** right after the hero `div`:

    ```html
    ...
    <!-- Content -->
    <div class="relative p-6 sm:p-8">
      <span class="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-medium text-indigo-200">History Taking</span>
      <h1 class="font-brand text-3xl font-bold mb-3 text-white">History Taking in Pediatrics</h1>
      <p class="text-sm text-indigo-200">A paediatric history depends on someone other than the patient...</p>
    </div>
    </div>

    <!-- Table of Contents Placeholder -->
    <div id="toc-container" class="mb-6"></div>

    <!-- 1. Introduction -->
    <h2 class="font-brand flex items-start gap-2 text-indigo-950 dark:text-white text-lg font-semibold mt-8 mb-3">
    ...
    ```

2.  **Add the script tag** at the very end of the content:
    ```html
    ...
      </ul>
    </div>
    </details>

    <script src="/reusable_toc.js"></script>

    </body>
    </html>
    `
    ```

By following these two steps for each article, a nicely formatted and navigable table of contents will be automatically generated.
