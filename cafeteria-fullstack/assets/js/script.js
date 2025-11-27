
    const form = document.getElementById("contactForm");
    const alertError = document.getElementById("alertError");

    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const date = document.getElementById("date").value.trim();
      const people = document.getElementById("people").value.trim();

      if (!name || !email || !date || !people) {
        alertError.classList.remove("d-none");
        return;
      }

      alertError.classList.add("d-none");
      form.reset();

      const successModal = new bootstrap.Modal(document.getElementById("successModal"));
      successModal.show();
    });
