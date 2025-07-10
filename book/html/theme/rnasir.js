//Button functionality
(function () {
    // Toggle function for sidebar
    function toggleSidebarClass() {
      const el = document.getElementById('sidebar');
      if (!el) return;
      el.className = el.className === 'sidebar1' ? 'sidebarHidden' : 'sidebar1';
    }

    const floatBtn = document.createElement('button');
    floatBtn.id = 'sidebar-toggle-floating';
    floatBtn.innerHTML = '<i class="fa fa-bars"></i>';
  
    // Inline styles to not modify build
    Object.assign(floatBtn.style, {
      position: 'fixed',
      top: '5px',
      left: '10px',
      zIndex: '9999',
      padding: '8px 10px',
      margin: '0',
      backgroundColor: 'rgb(22, 25, 35)',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      fontSize: '18px',
      cursor: 'pointer',
      boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
      z_index: '20000 !important'
    });
  
    const icon = floatBtn.querySelector('i');
    if (icon) icon.style.pointerEvents = 'none';

    //Add new btn 
    floatBtn.addEventListener('click', toggleSidebarClass);
    floatBtn.classList.add('icon-button')
    
    document.body.appendChild(floatBtn);
  })();

//Style the new menu upon button press 
(function () {
  const css = `
    .sidebar1 {
      background-color: rgb(40, 45, 63);
      transition: transform 0.3s ease;
      bottom: 0px;
      box-sizing: border-box;
      color: rgb(200, 201, 219);
      display: block;
      font-family: "Open Sans", sans-serif;
      font-size: 16.8px;
      overflow-y: auto;
      position: fixed;
      scrollbar-color: rgb(200, 201, 219) rgb(22, 25, 35);
      -webkit-text-size-adjust: 100%;
      top: 0px;
      transition-behavior: normal;
      transition-delay: 0s;
      transition-duration: 0.3s;
      transition-property: transform;
      transition-timing-function: ease;
      unicode-bidi: isolate;
      width: 250px;
      margin-top:40px;
      transform: translateX(0); 
      z-index:20000 !important;
    }
    .sidebarHidden{
        visibility:none; 
        position:absolute;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
    }
    .sidebar-scrollbox { 
      overflow-y: auto; 
      position: absolute; 
      inset: 0px; padding:
      10px;margin-left:10px; 
    }
  `;

  const style = document.createElement('style');
  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);

  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.classList.add('sidebar1');
    sidebar.classList.remove('sidebar');
  }
})();

/*
//Repair broken urls in menu
(function() {
  const url = new URL(window.location.href);
  const path = url.pathname;

  // Find all "/course/<segment>" occurrences
  const courseMatches = [...path.matchAll(/\/course\/([^\/]+)/g)];

  if (courseMatches.length > 1) {
    // Take the **second to last** and the **last** course segments

    const secondLast = courseMatches[courseMatches.length - 2][1]; // segment name without /course/
    const lastMatch = courseMatches[courseMatches.length - 1];
    const lastCourseIndex = lastMatch.index;

    // Everything after the last "/course/<segment>" (including the matched segment)
    const fromLastCourseOnward = path.slice(lastCourseIndex);

    // Compose new path without leading slash
    const newPath = secondLast + fromLastCourseOnward;

    if (newPath !== path.replace(/^\//, '')) {
      // Redirect to relative path (no leading slash)
      window.location.replace(newPath + url.search + url.hash);
    }
  }
})();*/

//Repair all broken urls as of now. 
(function () {
  const is404 =
    document.title.includes("Page not found") ||
    document.body.textContent.includes("could not be found");

  if (!is404) {
    sessionStorage.removeItem("alreadyRedirected");
    return;
  }

  console.warn("⚠️ Detected 404 page");

  if (sessionStorage.getItem("alreadyRedirected") === "true") {
    console.log("Skipping redirect");
    return;
  }

  setTimeout(() => {
    const fullPath = window.location.pathname;
    const segments = fullPath.split("/").filter(Boolean);

    // 🔍 Detect and preserve base path (e.g. FRC-Programming-Guide)
    // Assume everything before 'course' or other content is base
    let baseSegments = [];
    for (let i = 0; i < segments.length; i++) {
      if (
        segments[i] === "course" ||
        (segments[i + 1] && segments[i + 1].endsWith(".html"))
      ) {
        break;
      }
      baseSegments.push(segments[i]);
    }
    const base = "/" + baseSegments.join("/");

    // ✳️ Case 1: /base/Y/course/X/z.html → /base/X/z.html
    const idx = segments.lastIndexOf("course");
    if (idx !== -1 && segments.length > idx + 2) {
      const x = segments[idx + 1];
      const z = segments.slice(idx + 2).join("/");
      const newUrl = `${base}/${x}/${z}`;
      console.log(`🔁 Redirecting to (case 1): ${newUrl}`);
      sessionStorage.setItem("alreadyRedirected", "true");
      window.location.replace(newUrl + window.location.search + window.location.hash);
      return;
    }

    // ✳️ Case 2: /base/Y/X/z.html → /base/X/z.html
    if (segments.length >= 3) {
      const x = segments[segments.length - 2];
      const z = segments[segments.length - 1];
      const newUrl = `${base}/${x}/${z}`;
      console.log(`🔁 Redirecting to (case 2): ${newUrl}`);
      sessionStorage.setItem("alreadyRedirected", "true");
      window.location.replace(newUrl + window.location.search + window.location.hash);
      return;
    }

  }, 62.5);
})();

