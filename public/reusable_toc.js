document.addEventListener('DOMContentLoaded', () => {
  const tocContainer = document.getElementById('toc-container');
  if (!tocContainer) return;

  // Select all H2 headings that have the 'font-brand' class, which seem to be the section titles
  const headings = Array.from(document.querySelectorAll('h2.font-brand'));
  
  // Only generate a ToC if there is more than one section heading
  if (headings.length < 2) {
    if(tocContainer.parentElement) {
       tocContainer.parentElement.removeChild(tocContainer);
    }
    return;
  }

  const tocWrapper = document.createElement('div');
  tocWrapper.className = 'p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700';
  
  const tocTitle = document.createElement('h3');
  tocTitle.className = 'font-brand text-lg font-semibold text-indigo-950 dark:text-white mb-3';
  tocTitle.textContent = 'On this page';
  tocWrapper.appendChild(tocTitle);

  const tocList = document.createElement('ol');
  tocList.className = 'list-decimal list-inside space-y-2 text-sm';
  tocWrapper.appendChild(tocList);

  headings.forEach(heading => {
    // Clone the heading to manipulate it without affecting the original
    const headingClone = heading.cloneNode(true);
    
    // Attempt to remove the decorative number span if it exists
    const numberSpan = headingClone.querySelector('span.bg-indigo-950');
    if (numberSpan && numberSpan.parentElement) {
      numberSpan.parentElement.removeChild(numberSpan);
    }
    
    const headingText = (headingClone.textContent || '').trim();
    if (!headingText) return;

    const slug = headingText.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').trim();
    heading.id = slug;

    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = `#${slug}`;
    link.textContent = headingText;
    link.className = 'text-indigo-600 dark:text-indigo-400 hover:underline';
    
    listItem.appendChild(link);
    tocList.appendChild(listItem);
  });
  
  tocContainer.appendChild(tocWrapper);
});