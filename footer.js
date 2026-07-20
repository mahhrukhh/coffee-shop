function Footer() {
  const year = new Date().getFullYear();
  return `
    <footer class="footer">
      <div class="wrap">
        <span>&copy; ${year} Mahrukh's &amp; Bean.</span>
        <span>Built with plain HTML/CSS/JS.</span>
      </div>
    </footer>
  `;
}
