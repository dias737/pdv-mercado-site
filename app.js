const year = document.querySelector("#current-year");
const copyButton = document.querySelector("#copy-checksum");
const checksum = document.querySelector("#checksum-value");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

if (copyButton && checksum) {
  copyButton.addEventListener("click", async () => {
    const buttonLabel = copyButton.querySelector("span");

    try {
      await navigator.clipboard.writeText(checksum.textContent.trim());
      buttonLabel.textContent = "Copiado";
      copyButton.setAttribute("aria-label", "Código de verificação copiado");

      window.setTimeout(() => {
        buttonLabel.textContent = "Copiar";
        copyButton.setAttribute("aria-label", "Copiar código de verificação");
      }, 1800);
    } catch {
      checksum.focus?.();
    }
  });
}
