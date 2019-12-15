console.log('welcome to eleni-maria designs');

//Modal references
const modal = document.getElementById('modal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');

//Open & Close Modal Event Listeners
const openModal = () => {
  modal.style.display = 'block';
};
openBtn.addEventListener('click', openModal);

const closeModal = () => {
  modal.style.display = 'none';
};
closeBtn.addEventListener('click', closeModal);

//Resume Event Listener
const resumeButton = document.getElementById('resume');
resumeButton.addEventListener('click', function(e) {
  if (e.target) {
    closeModal();
    window.open('https://');
  }
});
