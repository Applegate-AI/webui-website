// Minimal JS for interactivity (placeholder)
document.addEventListener('submit', function(e){
  if(e.target && e.target.id === 'contact-form'){
    e.preventDefault();
    alert('Thanks — your message was recorded (this is a demo). Replace with a real form handler.');
  }
});
