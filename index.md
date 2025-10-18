<script setup>
if (typeof window !== "undefined") {
  if (
    window.location.pathname === "/" ||
    window.location.pathname === "/index.html"
  ) {
    const langs = navigator.languages || [navigator.language || navigator.userLanguage];
    let target = "/en.html";
    if (langs.some(l => l.startsWith("de"))) target = "/de.html";
    window.location.href = target;
  }
}
</script>
