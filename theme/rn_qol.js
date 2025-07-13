//Custom font, font size, and toggling line numbers on code blocks on the webpage.
(function () {
  const FONT_KEY = 'preferredFont';
  const SIZE_KEY = 'preferredFontSize';
  const LINE_NUMS_KEY = 'showLineNumbers';
  const fixedTextColor = 'rgb(152, 163, 173)';

  // Get body background
  function getBodyBackground() {
    const styles = getComputedStyle(document.body);
    return styles.backgroundColor || '#f8f9fa';
  }

  // CSS for line-number gutters
  const style = document.createElement('style');
  style.textContent = `
    pre.line-numbers {
      position: relative;
      padding-left: 3.5em !important;
    }
    pre.line-numbers .line-numbers-rows {
      position: absolute;
      top: 0;
      left: 0;
      width: 3em;
      pointer-events: none;
      user-select: none;
      text-align: right;
      color: rgba(152, 163, 173, 0.7);
      font-size: 0.9em;
      line-height: 1.5em;
      font-family: monospace;
    }
    pre.line-numbers .line-numbers-rows > span {
      display: block;
      height: 1.5em;
    }
  `;
  document.head.appendChild(style);

  // Utility: add or remove line-number gutters
  function updateLineNumbersState(show) {
    document.querySelectorAll('pre').forEach(pre => {
      // remove existing gutters
      const existing = pre.querySelector('.line-numbers-rows');
      if (existing) existing.remove();

      if (show) {
        pre.classList.add('line-numbers');
        const code = pre.querySelector('code');
        if (!code) return;
        //const lines = code.textContent.split('\n').length;
        let lineHeight = parseFloat(getComputedStyle(code).lineHeight);
        if (isNaN(lineHeight)) {
          const fontSize = parseFloat(getComputedStyle(code).fontSize) || 16;
          lineHeight = fontSize * 1.5;
        }
        const lines = Math.round(code.getBoundingClientRect().height / lineHeight);

        const gutter = document.createElement('div');
        gutter.className = 'line-numbers-rows';
        for (let i = 1; i <= lines; i++) {
          const span = document.createElement('span');
          span.textContent = i;
          gutter.appendChild(span);
        }
        pre.appendChild(gutter);
      } else {
        pre.classList.remove('line-numbers');
      }
    });
  }

  // Create floating container
  const container = document.createElement('div');
  Object.assign(container.style, {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: '9999',
    fontFamily: 'sans-serif',
    width: '160px',
    background: "rgba(0, 0, 0, 0.8)",
    borderRadius:"10px"
  });

  // Settings button
  const button = document.createElement('button');
  button.textContent = 'Settings';
  Object.assign(button.style, {
    padding: '10px 14px',
    borderRadius: '8px',
    border: '1px solid rgba(0,0,0,0.1)',
    cursor: 'pointer',
    fontWeight: 'bold',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    transition: 'all 0.3s ease',
    color: fixedTextColor,
    width: '100%',
    background: getBodyBackground()
  });

  // Font dropdown
  const selectLabel = document.createElement('label');
    Object.assign(selectLabel.style, {
    display: 'none',
    marginTop: '8px',
    marginLeft: 'px',
    fontSize: '12px',
    color: fixedTextColor,
    background: getBodyBackground()
  });
  selectLabel.textContent = 'Font Family';

  const select = document.createElement('select');
  Object.assign(select.style, {
    display: 'none',
    marginTop: '8px',
    padding: '6px',
    borderRadius: '5px',
    fontWeight: 'bold',
    border: '1px solid rgba(0,0,0,0.1)',
    boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
    transition: 'all 0.3s ease',
    color: fixedTextColor,
    width: '100%',
    background: getBodyBackground()
  });

  // Font-size slider label
  const sliderLabel = document.createElement('label');
  sliderLabel.textContent = 'Font size';
  Object.assign(sliderLabel.style, {
    display: 'none',
    marginTop: '8px',
    marginLeft: '5px',
    fontSize: '12px',
    color: fixedTextColor,
    background: getBodyBackground()
  });

  // Font-size slider
  const slider = document.createElement('input');
  Object.assign(slider, {type:'range', min:'12', max:'36', step:'1'});
  Object.assign(slider.style, {
    display: 'none',
    width: '100%',
    marginTop: '4px'
  });

  // Line-numbers toggle
  const lineNumsBtn = document.createElement('button');
  lineNumsBtn.textContent = 'Line Numbers: Off';
  Object.assign(lineNumsBtn.style, {
    display: 'none',
    marginTop: '8px',
    padding: '6px 10px',
    borderRadius: '5px',
    border: '1px solid rgba(0,0,0,0.1)',
    cursor: 'pointer',
    fontWeight: 'bold',
    boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
    color: fixedTextColor,
    width: '100%',
    background: getBodyBackground()
  });

  // Populate font dropdown
  const fonts = ['Arial','Verdana','Georgia','Courier New','Times New Roman','Trebuchet MS','Comic Sans MS','Roboto','Open Sans','Monospace','Open-Dyslexic'];
  fonts.forEach(f => {
    const o = document.createElement('option');
    o.value = f; o.textContent = f; o.style.fontFamily = f;
    select.appendChild(o);
  });

  // Load saved settings
  const savedFont = localStorage.getItem(FONT_KEY);
  if (savedFont && fonts.includes(savedFont)) {
    document.body.style.fontFamily = savedFont;
    select.value = savedFont;
  }
  const savedSize = localStorage.getItem(SIZE_KEY);
  if (savedSize && !isNaN(savedSize)) {
    document.body.style.fontSize = savedSize+'px';
    slider.value = savedSize;
  }
  let showLineNumbers = localStorage.getItem(LINE_NUMS_KEY)==='true';
  updateLineNumbersState(showLineNumbers);
  lineNumsBtn.textContent = `Line Numbers: ${showLineNumbers?'On':'Off'}`;

  // Handlers
  button.onclick = e => {
    e.stopPropagation();
    const bg = getBodyBackground();
    button.style.background = bg;
    select.style.background = bg;
    sliderLabel.style.background = bg;
    selectLabel.style.background = bg;
    lineNumsBtn.style.background = bg;
    const vis = select.style.display==='none';
    select.style.display = vis?'block':'none';
    sliderLabel.style.display = vis?'block':'none';
    selectLabel.style.display = vis?'block':'none';
    slider.style.display = vis?'block':'none';
    lineNumsBtn.style.display = vis?'block':'none';
  };
  select.onchange = () => {
    document.body.style.fontFamily = select.value;
    localStorage.setItem(FONT_KEY, select.value);
  };
  slider.oninput = () => {
    document.body.style.fontSize = slider.value+'px';
    localStorage.setItem(SIZE_KEY, slider.value);
  };
  lineNumsBtn.onclick = () => {
    showLineNumbers = !showLineNumbers;
    localStorage.setItem(LINE_NUMS_KEY, showLineNumbers);
    lineNumsBtn.textContent = `Line Numbers: ${showLineNumbers?'On':'Off'}`;
    updateLineNumbersState(showLineNumbers);
  };

  // Hide when clicking outside
  document.addEventListener('click', e => {
    if (!container.contains(e.target)) {
      select.style.display = sliderLabel.style.display = selectLabel.style.display = slider.style.display = lineNumsBtn.style.display = 'none';
    }
  });

  // Build UI
  container.append(button, selectLabel, select, sliderLabel, slider, lineNumsBtn);
  document.body.appendChild(container);
})();

//Introducing Notes, a way to annotate pages. 
(function(){
  const NOTES_KEY = 'inlineNotes_' + location.pathname;
  const NOTE_ICON_DEFAULT = '💬';
  const NOTE_ICON_COMMENTED = '🟨'; // yellow square as "note" indicator

  function loadNotes() {
    try {
      return JSON.parse(localStorage.getItem(NOTES_KEY)) || {};
    } catch {
      return {};
    }
  }
  function saveNotes(notes) {
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  }

  const style = document.createElement('style');
  style.textContent = `
    .note-marker {
      cursor: pointer;
      user-select: none;
      font-size: 16px;
      position: absolute;
      right: 0.4em;
      top: 50%;
      transform: translateY(-50%);
      display: none;
      z-index: 100001;
      transition: color 0.3s ease;
      padding:10px;
    }
    .note-block {
      position: relative;
    }
    .note-block:hover > .note-marker:not(.has-comment) {
      display: inline-block;
      color: #0a84ff; /* blue for default */
    }
    .note-block.has-comment > .note-marker {
      display: inline-block !important;
      color: #ffcc00; /* bright yellow */
      font-weight: bold;
    }

    .note-popup {
      position: absolute;
      background: #222;
      color: #eee;
      border-radius: 6px;
      padding: 8px;
      width: 250px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.8);
      z-index: 100009 !important;
      font-family: monospace, monospace;
      font-size: 14px;
      display: none;
      transition: background-color 0.3s ease;
    }
    .note-popup textarea {
      width: 100%;
      height: 80px;
      background: #333;
      border: none;
      color: #eee;
      border-radius: 4px;
      resize: none;
      outline: none;
      font-family: monospace;
      font-size: 14px;
    }
    .note-popup .btn-row {
      margin-top: 6px;
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
    .note-popup button.saveNote,
    .note-popup button.deleteNote {
      border: none;
      padding: 6px 12px;
      color: white;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
      transition: background-color 0.3s ease;
    }
    .note-popup button.saveNote:active,
    .note-popup button.deleteNote:active {
      filter: brightness(0.85);
    }
    .note-popup.saved {
      background-color: #114411 !important;
      transition: background-color 0.5s ease;
    }
  `;
  document.head.appendChild(style);

  let notes = loadNotes();

  function getAttachableBlocks() {
    return Array.from(document.querySelectorAll('.content p, .content li, .content h1, .content h2, .content h3, .content h4, .content h5, .content h6'));
  }

  function createNoteMarker(blockIndex) {
    const marker = document.createElement('span');
    marker.className = 'note-marker';
    const hasNote = !!notes[blockIndex];
    marker.textContent = hasNote ? NOTE_ICON_COMMENTED : NOTE_ICON_DEFAULT;
    if (hasNote) {
      marker.classList.add('has-comment');
    }
    marker.title = 'Click to view/edit note';
    marker.dataset.blockIndex = blockIndex;
    return marker;
  }

  function createNotePopup(blockIndex, initialText) {
    const popup = document.createElement('div');
    popup.className = 'note-popup';
    popup.dataset.blockIndex = blockIndex;

    const textarea = document.createElement('textarea');
    textarea.value = initialText || '';

    const btnRow = document.createElement('div');
    btnRow.className = 'btn-row';

    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
    saveBtn.className = 'saveNote';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'deleteNote';

    saveBtn.style.background = 'rgba(0, 122, 204, 0.3)';    
    deleteBtn.style.backgroundColor = 'rgba(178, 34, 34, 0.3)';
    
    saveBtn.onclick = () => {
      const text = textarea.value.trim();
      if (text.length > 0) {
        notes[blockIndex] = text;
        saveNotes(notes);
        const block = attachableBlocks[blockIndex];
        if (block) block.classList.add('has-comment');
      } else {
        delete notes[blockIndex];
        saveNotes(notes);
        const block = attachableBlocks[blockIndex];
        if (block) block.classList.remove('has-comment');
      }
      updateMarker(blockIndex);
      // Show saved background flash
      popup.classList.add('saved');
      setTimeout(() => popup.classList.remove('saved'), 800);
      popup.style.display = 'none';
    };

    deleteBtn.onclick = () => {
      delete notes[blockIndex];
      saveNotes(notes);
      const block = attachableBlocks[blockIndex];
      if (block) block.classList.remove('has-comment');
      updateMarker(blockIndex);
      popup.style.display = 'none';
    };

    btnRow.appendChild(saveBtn);
    btnRow.appendChild(deleteBtn);

    popup.appendChild(textarea);
    popup.appendChild(btnRow);

    document.body.appendChild(popup);
    return popup;
  }

  function updateMarker(blockIndex) {
    const block = attachableBlocks[blockIndex];
    if (!block) return;
    const marker = block.querySelector(`.note-marker[data-block-index='${blockIndex}']`);
    if (!marker) return;
    const hasNote = !!notes[blockIndex];
    marker.textContent = hasNote ? NOTE_ICON_COMMENTED : NOTE_ICON_DEFAULT;
    marker.classList.toggle('has-comment', hasNote);
  }

  function positionPopup(marker, popup) {
    const rect = marker.getBoundingClientRect();
    const popupRect = popup.getBoundingClientRect();
    let top = rect.bottom + window.scrollY + 6;
    let left = rect.left + window.scrollX;

    if (left + popupRect.width > window.innerWidth) {
      left = window.innerWidth - popupRect.width - 10;
    }
    if (top + popupRect.height > window.innerHeight + window.scrollY) {
      top = rect.top + window.scrollY - popupRect.height - 6;
    }

    popup.style.top = `${top}px`;
    popup.style.left = `${left}px`;
  }

  let attachableBlocks = [];
  function renderNotes() {
    attachableBlocks = getAttachableBlocks();

    attachableBlocks.forEach((block, idx) => {
      block.classList.add('note-block');
      const existingMarker = block.querySelector('.note-marker');
      if (existingMarker) existingMarker.remove();

      const marker = createNoteMarker(idx);
      block.appendChild(marker);

      if (notes[idx]) {
        block.classList.add('has-comment');
      } else {
        block.classList.remove('has-comment');
      }

      if (!document.querySelector(`.note-popup[data-block-index='${idx}']`)) {
        createNotePopup(idx, notes[idx] || '');
      }
    });
  }

  document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('note-marker')) {
      const idx = e.target.dataset.blockIndex;
      const popup = document.querySelector(`.note-popup[data-block-index='${idx}']`);
      if (!popup) return;

      if (popup.style.display === 'block') {
        popup.style.display = 'none';
      } else {
        document.querySelectorAll('.note-popup').forEach(p => p.style.display = 'none');
        popup.style.display = 'block';
        positionPopup(e.target, popup);
      }
      e.stopPropagation();
    } else {
      if (!e.target.closest('.note-popup')) {
        document.querySelectorAll('.note-popup').forEach(p => p.style.display = 'none');
      }
    }
  });

  renderNotes();
})();
