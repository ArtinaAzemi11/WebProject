async function includeHTML(id, file, cssFile = null, jsFile = null) {
  const el = document.getElementById(id);
  if (!el) return;

  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error(`Could not fetch ${file}`);
    const text = await response.text();
    el.innerHTML = text;

    if (cssFile) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = cssFile;
      document.head.appendChild(link);
    }

    if (jsFile) {
      const script = document.createElement("script");
      script.src = jsFile;
      script.defer = true;
      document.body.appendChild(script);
    }
  } catch (err) {
    console.error(err);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  includeHTML("navbar", "navbar.html", "../CSS/navbar.css", "../JavaScript/navbar.js");
  includeHTML("footer", "footer.html", "../CSS/footer.css", "../JavaScript/footer.js");
});
