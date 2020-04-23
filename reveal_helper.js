(function () {
    const cssFiles = [
        "../../reveal.js/css/reveal.css",
        "../../reveal.js/css/theme/moon.css",
        "../../reveal.js/lib/css/zenburn.css",
    ];

    const jsFiles = [
        "../../reveal.js/plugin/markdown/marked.js",
        "../../reveal.js/lib/js/head.min.js",
        "../../reveal.js/js/reveal.js"
    ];

    const additionalCss = `
        .reveal pre {
            margin: 0;
        }
        .monospace {
            font-family: monospace !important;
        }
        .illustration {
            border: 0px
        }
        .reveal li {
            margin-bottom: 0.5em;
        }
        .reveal pre {
            width: 100%;
        }
        .reveal pre code {
            cursor: pointer;
        }
        .reveal li pre {
            width: fit-content;
        }
        .logo {
            position: fixed;
            /* Sit on top of the page content */
            z-index: 2;
            /* Specify a stack order in case you're using a different order for other elements */
        }
    `;

    const head = document.head;
    const additonalScriptsEl = document.querySelector('.js-additional-scripts');

    function addCssFile(path) {
        const link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = path;
        head.appendChild(link);
    }

    function addJSFile(path) {
        const scriptTag = document.createElement("script");
        scriptTag.src = path;
        additonalScriptsEl.appendChild(scriptTag);
    }

    cssFiles.forEach(addCssFile);
    jsFiles.forEach(addJSFile);

    const additionalCssStyleTag = document.createElement("style");
    additionalCssStyleTag.innerHTML = additionalCss;
    head.appendChild(additionalCssStyleTag);

    // add redi logo
    document.body.insertAdjacentHTML("afterbegin", `<a href="https://www.redi-school.org/"><img src="../../redi-school-logo.jpg" class="logo"/></a>`);

    $(document).ready(function () {
        Reveal.initialize({
            history: true,
            dependencies: [
                {
                    src: '../../reveal.js/plugin/highlight/highlight.js', async: false, callback: function () {
                        hljs.initHighlightingOnLoad();
                    }
                },
                {
                    src: '../../reveal.js/plugin/markdown/markdown.js', 
                    async: false 
                },
            ]
        });

        // Make each code example executable by clicking it:
        $('code').click(function (event) {
            console.info('Click!', $(this).text());
            eval($(this).text());
        });
    });
})();