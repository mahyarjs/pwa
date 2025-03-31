navigator?.serviceWorker?.register("/sw.js");

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, {
    edge: "right",
  });

  let cssCodeTexts = "";
  const docStylsheet = document.styleSheets;
  for (const cssFile in docStylsheet) {
    if (
      typeof docStylsheet[cssFile].href == "string" &&
      docStylsheet[cssFile].href.includes("util.css")
    ) {
      const cssCodes = docStylsheet[cssFile].cssRules;
      for (const css in cssCodes) {
        if (
          cssCodes[css].selectorText &&
          document
            .querySelector("body")
            .innerHTML.includes(
              cssCodes[css].selectorText.split(".")[1] || "zzzzzzzzzz"
            )
        ) {
          cssCodeTexts = cssCodeTexts + cssCodes[css].cssText;
        }
      }
    }
  }
  var download = document.getElementById("download");
  //   download.setAttribute(
  //     "href",
  //     "data:text/csv;charset=utf-8," + encodeURIComponent(cssCodeTexts)
  //   );
  //   download.setAttribute("download", "filename.css");
});

let pwa = null;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  pwa = e;
});

if (!window.matchMedia("(display-mode: standalone)").matches) {
  document.querySelector(".a").addEventListener("click", () => {
    if (!pwa) {
      return;
    }
    pwa.prompt("kos?").then((res) => console.log(res));
  });
}
