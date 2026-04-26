<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
<script type="text/javascript">
  emailjs.init('cjghC4XgB6V_vU-4s');

  const btn = document.getElementById('button');
  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');
  nameInput.addEventListener('input', function() {
    this.value = this.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, ''); 
  });
  phoneInput.addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9]/g, ''); 
  });

  document.getElementById('form')
    .addEventListener('submit', function(event) {
      event.preventDefault();
      if (!/^[a-zA-Zа-яА-ЯёЁ\s]+$/.test(nameInput.value)) {
        alert('Please enter a valid name (letters only).');
        return;
      }
      if (!/^\d+$/.test(phoneInput.value)) {
        alert('Please enter a valid phone number (digits only).');
        return;
      }

      btn.value = 'Sending...';

      const serviceID = 'default_service';
      const templateID = 'template_cgug5cc';

      emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = 'Send Email';
          alert('Sent!');
        }, (err) => {
          btn.value = 'Send Email';
          alert(JSON.stringify(err));
        });
    });
</script>