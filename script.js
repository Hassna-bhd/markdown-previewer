document.addEventListener("DOMContentLoaded", () => {

  const editor = document.getElementById("editor");
  const preview = document.getElementById("preview");
  const buttons = document.querySelectorAll(".expand");

  // FCC requirement
  marked.setOptions({
    breaks: true
  });

  // default text render
  preview.innerHTML = marked.parse(editor.value);

  // live update
  editor.addEventListener("input", () => {
    preview.innerHTML = marked.parse(editor.value);
  });

  // fullscreen toggle
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {

      const targetId = btn.dataset.target;
      const target = document.getElementById(targetId);

       const isFullscreen = target.classList.contains("fullscreen");

    if (!isFullscreen) {
      // 👉 activer fullscreen
      target.classList.add("fullscreen");

      document.querySelectorAll(".box").forEach(box => {
        if (box !== target) {
          box.classList.add("hidden"); // cacher l'autre
        }
      });

      btn.innerHTML = '<i class="fa-solid fa-down-left-and-up-right-to-center"></i>';

    } else {
      // 👉 quitter fullscreen
      target.classList.remove("fullscreen");

      document.querySelectorAll(".box").forEach(box => {
        box.classList.remove("hidden"); // tout réafficher
      });

      btn.innerHTML = '<i class="fa-solid fa-maximize"></i>';
    }

    });
  });
});