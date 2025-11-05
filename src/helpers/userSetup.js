function userMarkdownSetup(md) {
  // The md parameter stands for the markdown-it instance used throughout the site generator.
  // Feel free to add any plugin you want here instead of /.eleventy.js
}

function userEleventySetup(eleventyConfig) {
  // The eleventyConfig parameter stands for the config instantiated in /.eleventy.js.
  // Feel free to add any plugin you want here instead of /.eleventy.js

  // --- ✅ Zoombox loader starts here ---
  // Make sure our custom files get copied into the build
  eleventyConfig.addPassthroughCopy({ "src/user": "user" });

  // Inject Zoombox CSS and JS into every generated HTML page
  eleventyConfig.addTransform("inject-zoombox", function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      const headTag = `<link rel="stylesheet" href="/user/zoombox.css">`;
      const bodyEndTag = `<script src="/user/zoombox.js"></script>`;

      let out = content.replace("</head>", `${headTag}\n</head>`);
      out = out.replace("</body>", `${bodyEndTag}\n</body>`);
      return out;
    }
    return content;
  });
  // --- ✅ Zoombox loader ends here ---
}

exports.userMarkdownSetup = userMarkdownSetup;
exports.userEleventySetup = userEleventySetup;
