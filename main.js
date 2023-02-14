const form = document.getElementById('keywordForm');
const content = document.getElementById('content');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // verhindert, dass das Formular die Seite neu lädt
  const passwordInput = document.getElementById('keyword');
  if (passwordInput.value === 'Golfplatz') {
    form.classList.toggle('fade');
    content.classList.remove('hider');
    content.scrollIntoView({ behavior:'smooth'});
    window.addEventListener('scroll', reveal);
    function reveal(){
        var reveals = document.querySelectorAll('.reveal');

        for(var i = 0; i < reveals.length; i++){
            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;

            if(revealtop<windowheight-revealpoint){
                reveals[i].classList.add('active');
            } else{
                reveals[i].classList.remove('active');
            }
        }
        function updateCountdown() {
          const now = new Date();
          const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
          const remainingTime = midnight - now;
        
          const hours = Math.floor(remainingTime / (1000 * 60 * 60));
          const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        
          const countdownElement = document.getElementById('countdown');
          countdownElement.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
        
        updateCountdown();
        setInterval(updateCountdown, 1000);
        
    }

  } else {
    passwordInput.classList.add('wronginput')
  }
});

