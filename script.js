const knopf = document.getElementById("geburtstagsknopf");
const nachricht = document.getElementById("geburtstagsnachricht");

if (knopf && nachricht) {
  knopf.addEventListener("click", function () {
    nachricht.hidden = false;
    knopf.textContent = "Nachricht geöffnet";
    knopf.disabled = true;
  });
}
