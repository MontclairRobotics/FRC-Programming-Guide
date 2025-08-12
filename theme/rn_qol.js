// Get body background (helper)
function getBodyBackground() {
  const styles = getComputedStyle(document.body);
  return styles.backgroundColor || '#f8f9fa';
}
const fixedTextColor = 'rgb(152, 163, 173)';


//Custom font, font size, and toggling line numbers on code blocks on the webpage.
(function () {
  const FONT_KEY = 'preferredFont';
  const SIZE_KEY = 'preferredFontSize';
  const LINE_NUMS_KEY = 'showLineNumbers';



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
    bottom: '10px',
    right: '10px',
    zIndex: '9999',
    fontFamily: 'sans-serif',
    width: '140px',
    background: "rgba(0, 0, 0, 0.8)",
    borderRadius:"10px",
    minHeight:"40px"
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

  //hr in settings
  const hr = document.createElement('hr')
  hr.style.cssText = `
    border: none;
    height: 1px;
    background-color: ${fixedTextColor};
    margin: -5px auto 4px auto;
    width: 85%;
    opacity: 0.6;
    display: none;
  `;

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
    hr.style.display = vis?'block':'none';
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
      select.style.display = sliderLabel.style.display = selectLabel.style.display = slider.style.display = lineNumsBtn.style.display = hr.style.display = 'none';
    }
  });

  // Build UI
  container.append(button, hr, selectLabel, select, sliderLabel, slider, lineNumsBtn);
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

//Notes Collective View
function getMap(htmlString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');

  const result = [];
  let currentTop = null;
  let currentSub = null;

  const items = doc.querySelectorAll('.chapter-item');

  items.forEach(item => {
    const link = item.querySelector('a');
    const text = link ? link.textContent.trim() : item.textContent.trim();
    const href = link ? link.getAttribute('href').replace('.html', '.md') : '';

    const strong = item.querySelector('strong');
    const number = strong ? strong.textContent.trim() : '';
    const isTopLevel = number && /^\d+\.$/.test(number);
    const isSubLevel = number && /^\d+\.\d+\.$/.test(number);

    if (!number && !href && !text) return; // skip blanks/spacers

    if (text === "Appendix") {
      result.push({
        title: text,
        link: href
      });
      return;
    }

    if (isTopLevel) {
      currentTop = {
        title: text,
        link: href || '',
        children: []
      };
      result.push(currentTop);
    } else if (isSubLevel && currentTop) {
      currentTop.children.push({
        title: text.replace(/^\d+\.\d+\.\s*/, ''),
        link: href || ''
      });
    } else if (!number && href && !currentTop) {
      // standalone top level like "Starting Out"
      result.push({
        title: text,
        link: href
      });
    } else if (!number && currentTop && currentTop.title === "💫 Advanced Java") {
      // advanced java items without links
      currentTop.children.push({
        title: text.replace(/^\d+\.\d+\.\s*/, ''),
        link: href || ''
      });
    } else if (text === "A Special Thanks") {
      result.push({
        title: text,
        link: href
      });
    }
  });

  return result;
}
window.onload = function() {
    const sidebarHTML = document.querySelector('.sidebar-scrollbox').innerHTML;
    const summaryMap = getMap(sidebarHTML);
    localStorage.setItem('map', JSON.stringify(summaryMap));
};

//Never let the site exist on the root directory, always go to index.html. 
//For clarity in multiple ways to get to a URL, without this, /Index.html, /, [the url itself], 
//and /Welcome.html all correspond to the same page but can have different notes. 
window.addEventListener('load', () => {
  const path = window.location.pathname;
  if (path === '/' || path === '') {
    window.location.href = '/Index.html';
  }
  else if (path.toLowerCase() === '/notes') { //lets going to notes page convient
    window.location.href = '/notes.html';
  }
  
  if(path.toLowerCase() != '/notes'){
    const bindNavArrows = () => {
      const nav = document.querySelector('.nav-wrapper');
      if(!nav) return;
      const prev = nav.querySelector('a[rel~="prev"],a.previous');
      const next = nav.querySelector('a[rel~="next"],a.next');
      document.addEventListener('keydown', e => {
        if(e.target && (e.target.tagName==='INPUT' || e.target.tagName==='TEXTAREA' || e.target.isContentEditable)) return;
        if(e.key==='ArrowLeft' && prev){ prev.click(); e.preventDefault(); }
        if(e.key==='ArrowRight' && next){ next.click(); e.preventDefault(); }
      }, { passive: true });
    };
    bindNavArrows()
  }
});


//Theming
const content = document.getElementById('content');
if (content) {
    content.style.paddingLeft = "30px";
    content.style.paddingRight = "10px";
    content.style.paddingBottom = "90px";
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.theme-selected').forEach(item => {
    item.classList.remove('theme-selected');
  });
  const theme = localStorage.getItem('mdbook-theme');
  if (theme) {
    const el = document.getElementById(theme);
    if (el) {
      el.classList.add('theme-selected');
    }
  }

  const themeList = document.getElementById('theme-list').children;
  const themeIds = Array.from(themeList).map(child => child.children[0].id);
  localStorage.setItem('themes', JSON.stringify(themeIds));
});


//Floating IDE for Java
(() => {
  window.addEventListener("load", () => {
      const win = document.createElement("div");
      win.style.cssText = "position:fixed;top:100px;left:100px;width:800px;height:500px;min-width:160px;min-height:32px;border:2px solid #888;border-radius:6px;box-shadow:0 8px 20px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.3);background:white;display:none;overflow:hidden;z-index:9999;";

      const titleBar = document.createElement("div");
      titleBar.style.cssText = "background:#4CAF50;color:white;height:32px;cursor:move;font-family:sans-serif;font-size:14px;user-select:none;position:relative;display:flex;align-items:center;";

      const controls = document.createElement("div");
      controls.style.cssText = "display:flex;gap:5px;position:absolute;left:8px;top:6px;";

      const makeBtn = (label, bg) => {
          const b = document.createElement("button");
          b.innerText = label;
          b.style.cssText = `width:20px;height:20px;background:${bg};color:white;border:none;border-radius:3px;cursor:pointer;font-size:12px;line-height:16px;padding:0;`;
          return b;
      };

      const btnMin = makeBtn("–", "#f0ad4e");
      const btnMax = makeBtn("□", "#5bc0de");
      const btnClose = makeBtn("×", "#d9534f");
      const btnNewTab = makeBtn("↗", "#337ab7");
      
      controls.appendChild(btnClose);
      controls.appendChild(btnMax);
      controls.appendChild(btnMin);
      
      
      controls.appendChild(btnNewTab);
      titleBar.appendChild(controls);

      const titleText = document.createElement("div");
      titleText.innerText = "JAVA IDE";
      titleText.style.cssText = "pointer-events:none;position:absolute;left:50%;transform:translateX(-50%);white-space:nowrap;";
      titleBar.appendChild(titleText);

      // color the title bar

      titleBar.style.background = getBodyBackground();
      titleBar.style.color = fixedTextColor;

      const iframe = document.createElement("iframe");
      iframe.src = "https://www.jdoodle.com/online-java-compiler";
      iframe.title = "JAVA IDE";
      iframe.style.cssText = "width:100%;height:calc(100% - 32px);border:none;user-select:none;";

      win.appendChild(titleBar);
      win.appendChild(iframe);

      // Add resize handles
      const edges = [
          { pos: 'n', style: 'top:-2px;left:0;width:100%;height:5px;cursor:n-resize;' },
          { pos: 's', style: 'bottom:-2px;left:0;width:100%;height:5px;cursor:s-resize;' },
          { pos: 'e', style: 'top:0;right:-2px;width:5px;height:100%;cursor:e-resize;' },
          { pos: 'w', style: 'top:0;left:-2px;width:5px;height:100%;cursor:w-resize;' },
          { pos: 'ne', style: 'top:-2px;right:-2px;width:10px;height:10px;cursor:ne-resize;' },
          { pos: 'nw', style: 'top:-2px;left:-2px;width:10px;height:10px;cursor:nw-resize;' },
          { pos: 'se', style: 'bottom:-2px;right:-2px;width:10px;height:10px;cursor:se-resize;' },
          { pos: 'sw', style: 'bottom:-2px;left:-2px;width:10px;height:10px;cursor:sw-resize;' }
      ];

      edges.forEach(edge => {
          const handle = document.createElement("div");
          handle.style.cssText = `position:absolute;${edge.style}z-index:10000;`;
          handle.dataset.dir = edge.pos;
          win.appendChild(handle);
      });

      document.body.appendChild(win);

      //Check if mobile, then mount dev ide if computer
      const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      if (!isMobile) { 
        console.log("DESKTOP")
        const toggleBtn = document.createElement("button");
        toggleBtn.innerText = "Show IDE";
        Object.assign(toggleBtn.style, {
            padding: '10px 14px',
            borderRadius: '8px',
            border: '1px solid rgba(0,0,0,0.1)',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease',
            color: fixedTextColor,
            width: '100%',
            background: getBodyBackground(),
            fontSize: '14px',
            margin: '0 0 0 0'
        });
        // try to find existing Settings button and insert toggleBtn directly above it; else append to body
        const settingsBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.trim() === 'Settings');
        if (settingsBtn && settingsBtn.parentNode) {
            settingsBtn.parentNode.insertBefore(toggleBtn, settingsBtn);

            const hr = document.createElement('hr');
            hr.style.border = `1px solid ${fixedTextColor}`;
            hr.style.background="rgba(0, 0, 0, 0.8)"
            settingsBtn.parentNode.insertBefore(hr, settingsBtn);
            
        } else {
            document.body.appendChild(toggleBtn);
        }

        toggleBtn.onclick = () => {
            if (win.style.display === "none") {
                win.style.display = "block";
                toggleBtn.innerText = "Hide IDE";
            } else {
                win.style.display = "none";
                toggleBtn.innerText = "Show IDE";
            }
        };
      }
        
      btnNewTab.onclick = () => {
        window.open(iframe.src, "_blank", "noopener,noreferrer");
      };

      // Drag window (clamped)
      let offsetX, offsetY, isDragging = false;
      titleBar.onmousedown = e => {
          if (e.target.tagName === "BUTTON") return;
          isDragging = true;
          offsetX = e.clientX - win.offsetLeft;
          offsetY = e.clientY - win.offsetTop;
          document.onmousemove = e => {
              if (!isDragging) return;
              const vw = window.innerWidth;
              const vh = window.innerHeight;
              const w = win.offsetWidth;
              const h = win.offsetHeight;
              // minimum visible area to keep on-screen (title bar height)
              const minVisibleX = Math.min(40, Math.floor(vw / 10));
              const minVisibleY = Math.min(32, Math.floor(vh / 10));

              let newLeft = e.clientX - offsetX;
              let newTop = e.clientY - offsetY;

              // left/right max
              const minLeft = Math.min(vw - minVisibleX, -(w - minVisibleX));
              const maxLeft = Math.max(0, vw - minVisibleX);
              newLeft = Math.max(minLeft, Math.min(newLeft, maxLeft));

              // top/bottom max
              const minTop = Math.min(vh - minVisibleY, -(h - minVisibleY));
              const maxTop = Math.max(0, vh - minVisibleY);
              newTop = Math.max(minTop, Math.min(newTop, maxTop));

              win.style.left = newLeft + "px";
              win.style.top = newTop + "px";
          };
          document.onmouseup = () => { isDragging = false; document.onmousemove = null; document.onmouseup = null; };
      };

      // Resize window
      let isResizing = false, dir, startX, startY, startW, startH, startL, startT;
      win.querySelectorAll("[data-dir]").forEach(handle => {
          handle.onmousedown = e => {
              e.preventDefault();
              dir = handle.dataset.dir;
              isResizing = true;
              startX = e.clientX;
              startY = e.clientY;
              startW = win.offsetWidth;
              startH = win.offsetHeight;
              startL = win.offsetLeft;
              startT = win.offsetTop;
              document.onmousemove = resizeMove;
              document.onmouseup = stopResize;
          };
      });

      function resizeMove(e) {
          if (!isResizing) return;
          let dx = e.clientX - startX;
          let dy = e.clientY - startY;
          if (dir.includes('e')) win.style.width = (startW + dx) + "px";
          if (dir.includes('s')) win.style.height = (startH + dy) + "px";
          if (dir.includes('w')) {
              win.style.width = (startW - dx) + "px";
              win.style.left = (startL + dx) + "px";
          }
          if (dir.includes('n')) {
              win.style.height = (startH - dy) + "px";
              win.style.top = (startT + dy) + "px";
          }
      }

      function stopResize() {
          isResizing = false;
          document.onmousemove = null;
          document.onmouseup = null;
      }

      // Minimize
      let isMinimized = false, prevSize = {};
      const toggleMinimize = () => {
          if (!isMinimized) {
              prevSize = {width: win.style.width, height: win.style.height};
              win.style.height = "32px";
              win.style.width = "160px";
              iframe.style.display = "none";
              isMinimized = true;
              //console.log(btnNewTab.style.display)
              btnNewTab.style.display="none";
              titleText.style.right = "-10%";
              titleText.style.left = "";
                //"pointer-events:none;position:absolute;right:;transform:translateX(-50%);white-space:nowrap;";
              
          } else {
              win.style.width = prevSize.width;
              win.style.height = prevSize.height;
              iframe.style.display = "block";
              isMinimized = false;
              btnNewTab.style.display="";
              titleText.style.left = "50%";
              titleText.style.right = "";
                //"pointer-events:none;position:absolute;left:50%;transform:translateX(-50%);white-space:nowrap;"
          }
      };
      btnMin.onclick = toggleMinimize;
      titleBar.ondblclick = toggleMinimize;

      // Maximize
      let isMax = false, prevPos = {};
      btnMax.onclick = () => {
          if (!isMax) {
              prevPos = {left: win.style.left, top: win.style.top, width: win.style.width, height: win.style.height};
              win.style.left = "0px";
              win.style.top = "0px";
              win.style.width = "100%";
              win.style.height = "100%";
              isMax = true;
          } else {
              win.style.left = prevPos.left;
              win.style.top = prevPos.top;
              win.style.width = prevPos.width;
              win.style.height = prevPos.height;
              isMax = false;
          }
      };

      // Close
      btnClose.onclick = () => {
          win.style.display = "none";
          toggleBtn.innerText = "Show IDE";
      };
  });
})();

