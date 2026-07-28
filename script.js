const body = document.body;
const memberSite = document.querySelector(".member-site");
const form = document.querySelector(".contact-form");
const loginForm = document.querySelector(".login-form");
const note = document.querySelector(".form-note");
const loginNote = document.querySelector(".login-note");
const strategyCallUrl = "https://calendly.com/ltrain-litfitness/15min?month=2026-07";

function resetPagePosition(hash = "") {
  if (hash) {
    history.replaceState(null, "", hash);
  }

  requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: "instant" }));
}
const phoneInput = form?.elements.phone;
const confirmationDialog = document.querySelector(".confirmation-dialog");
const closeDialogButton = document.querySelector(".close-dialog");

function showPublic() {
  body.classList.add("public-active");
  body.classList.remove("member-active");
  memberSite?.classList.remove("portal-unlocked");
  loginForm?.reset();
  if (loginNote) {
    loginNote.textContent = "";
  }
  resetPagePosition();
}

function showMember() {
  body.classList.add("member-active");
  body.classList.remove("public-active");
  memberSite?.classList.remove("portal-unlocked");
  resetPagePosition("#dashboard");
}

function unlockPortal() {
  memberSite?.classList.add("portal-unlocked");
  resetPagePosition("#dashboard");
}

document.querySelectorAll(".login-toggle").forEach((button) => {
  button.addEventListener("click", showMember);
});

document.querySelectorAll(".logout-toggle, .nav-home").forEach((button) => {
  button.addEventListener("click", showPublic);
});

closeDialogButton?.addEventListener("click", () => confirmationDialog?.close());

loginForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = loginForm.elements.username.value.trim();
  const password = loginForm.elements.password.value;

  if (username === "nolimits" && password === "nolimits") {
    loginNote.textContent = "";
    unlockPortal();
    return;
  }

  loginNote.textContent = "Incorrect username or password.";
  loginForm.elements.password.value = "";
  loginForm.elements.password.focus();
});

function formatPhoneNumber(value) {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  const area = digits.slice(0, 3);
  const prefix = digits.slice(3, 6);
  const line = digits.slice(6, 10);

  if (digits.length > 6) {
    return `(${area})-${prefix}-${line}`;
  }

  if (digits.length > 3) {
    return `(${area})-${prefix}`;
  }

  if (digits.length > 0) {
    return `(${area}`;
  }

  return "";
}

phoneInput?.addEventListener("input", () => {
  phoneInput.value = formatPhoneNumber(phoneInput.value);
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const phoneDigits = phoneInput?.value.replace(/\D/g, "") ?? "";

  if (phoneDigits && phoneDigits.length !== 10) {
    note.textContent = "Phone number must be exactly 10 digits.";
    phoneInput.focus();
    return;
  }

  note.textContent = "";
  confirmationDialog?.showModal();
  form.reset();
});
