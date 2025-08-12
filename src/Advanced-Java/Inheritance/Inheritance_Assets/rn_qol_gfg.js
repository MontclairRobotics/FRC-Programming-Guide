(() => {
  // Toast setup
  const toast = document.createElement('div');
  Object.assign(toast.style, {
    position: 'fixed',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'rgba(0,0,0,0.8)',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '14px',
    zIndex: '9999',
    opacity: '0',
    transition: 'opacity 0.3s ease',
    pointerEvents: 'none',
  });
  document.body.appendChild(toast);

  let toastTimeout;
  function showToast(msg) {
    toast.textContent = msg;
    toast.style.opacity = '1';
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.style.opacity = '0';
    }, 3000);
  }

  // Find all rayan
  const tabsList = Array.from(document.querySelectorAll('rayan'));

  tabsList.forEach(tabs => {
    // Create wrapper div
    const wrapper = document.createElement('div');
    wrapper.className = 'custom-tabs-wrapper';
    Object.assign(wrapper.style, {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      // optional fixed width or 100%
      width: tabs.offsetWidth + 'px',
    });

    // Insert wrapper before tabs, move tabs inside wrapper
    tabs.parentNode.insertBefore(wrapper, tabs);
    wrapper.appendChild(tabs);

    // Create the copy button
    const btn = document.createElement('button');
    btn.textContent = 'Copy All Code';
    btn.className = 'custom-copy-all-button';
    Object.assign(btn.style, {
      position: 'sticky',
      top: '45px',
      alignSelf: 'flex-end',
      marginRight: '8px',
      padding: '6px 12px',
      fontSize: '13px',
      cursor: 'pointer',
      zIndex: '10',
      backgroundColor: '#2c3e50',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      userSelect: 'none',
      transition: 'background-color 0.3s ease',
      minHeight: '32px'
    });

    // Optional hover style
    btn.addEventListener('mouseenter', () => btn.style.backgroundColor = '#1e2a38');
    btn.addEventListener('mouseleave', () => btn.style.backgroundColor = '#2c3e50');

    wrapper.insertBefore(btn, tabs);

    btn.addEventListener('click', async () => {
      try {
        const codeBlocks = tabs.querySelectorAll('pre, code');
        let combinedText = '';
        codeBlocks.forEach(block => {
          const text = block.textContent.trim();
          if (text.length > 0) combinedText += text + '\n\n';
        });

        if (!combinedText) {
          showToast('No code found to copy.');
          console.error('Copy failed: no code blocks found.');
          return;
        }

        await navigator.clipboard.writeText(combinedText);
        showToast('Copied all code!');
        console.log('Copy all code successful.');
      } catch (err) {
        showToast('Copy failed.');
        console.error('Copy all code failed:', err);
      }
    });
  });
})();
