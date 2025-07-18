// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="Welcome.html">Starting Out</a></li><li class="chapter-item expanded "><a href="Java-Fundamentals/Intro.html"><strong aria-hidden="true">1.</strong> Java Fundamentals</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Java-Fundamentals/course/Basic-Syntax.html"><strong aria-hidden="true">1.1.</strong> Basic Syntax</a></li><li class="chapter-item expanded "><a href="Java-Fundamentals/course/Variables.html"><strong aria-hidden="true">1.2.</strong> Variables</a></li><li class="chapter-item expanded "><a href="Java-Fundamentals/course/Operators-And-Math.html"><strong aria-hidden="true">1.3.</strong> Mathematical Operators</a></li><li class="chapter-item expanded "><a href="Java-Fundamentals/course/Boolean-And-Equality-Operators.html"><strong aria-hidden="true">1.4.</strong> Boolean &amp; Equality Operators</a></li><li class="chapter-item expanded "><a href="Java-Fundamentals/course/Arrays.html"><strong aria-hidden="true">1.5.</strong> Arrays</a></li><li class="chapter-item expanded "><a href="Java-Fundamentals/course/Control-Flow.html"><strong aria-hidden="true">1.6.</strong> Control Flow</a></li><li class="chapter-item expanded "><a href="Java-Fundamentals/course/If-Else.html"><strong aria-hidden="true">1.7.</strong> If-Else</a></li><li class="chapter-item expanded "><a href="Java-Fundamentals/course/Loops.html"><strong aria-hidden="true">1.8.</strong> Loops</a></li><li class="chapter-item expanded "><a href="Java-Fundamentals/course/Functions.html"><strong aria-hidden="true">1.9.</strong> Functions</a></li></ol></li><li class="chapter-item expanded "><a href="Object-Oriented-Programming/Intro.html"><strong aria-hidden="true">2.</strong> Object-Oriented Programming (OOP)</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Object-Oriented-Programming/course/Classes.html"><strong aria-hidden="true">2.1.</strong> Classes</a></li><li class="chapter-item expanded "><a href="Object-Oriented-Programming/course/Scope.html"><strong aria-hidden="true">2.2.</strong> Scope</a></li><li class="chapter-item expanded "><a href="Object-Oriented-Programming/course/Objects.html"><strong aria-hidden="true">2.3.</strong> Objects</a></li><li class="chapter-item expanded "><a href="Object-Oriented-Programming/course/Packages.html"><strong aria-hidden="true">2.4.</strong> Packages</a></li></ol></li><li class="chapter-item expanded "><a href="Git/Intro.html"><strong aria-hidden="true">3.</strong> Git &amp; GitHub</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Git/course/InstallingGit.html"><strong aria-hidden="true">3.1.</strong> Installing</a></li><li class="chapter-item expanded "><a href="Git/course/Usage.html"><strong aria-hidden="true">3.2.</strong> Using Git &amp; GitHub</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.3.</strong> Effectively Contributing</div></li></ol></li><li class="chapter-item expanded "><a href="FRC/Intro.html"><strong aria-hidden="true">4.</strong> FRC</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="FRC/course/Terminology.html"><strong aria-hidden="true">4.1.</strong> Important Terminology</a></li><li class="chapter-item expanded "><a href="FRC/course/Install.html"><strong aria-hidden="true">4.2.</strong> Installing WPILib</a></li><li class="chapter-item expanded "><a href="FRC/course/ElectricalPrimer.html"><strong aria-hidden="true">4.3.</strong> An adventure Into Electronics</a></li><li class="chapter-item expanded "><a href="FRC/course/PID.html"><strong aria-hidden="true">4.4.</strong> PID</a></li><li class="chapter-item expanded "><a href="FRC/course/Vision.html"><strong aria-hidden="true">4.5.</strong> Vision</a></li><li class="chapter-item expanded "><a href="FRC/course/Swerve.html"><strong aria-hidden="true">4.6.</strong> Swerve Drivetrain</a></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded affix "><a href="Appendix/Intro.html">Appendix</a></li><li class="chapter-item expanded affix "><a href="Appendix/Special-Thanks.html">A Special Thanks</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
