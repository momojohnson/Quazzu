document.addEventListener('DOMContentLoaded', function () {
  let elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems);
});

document.addEventListener('DOMContentLoaded', function () {
  let elems = document.querySelectorAll('.carousel.carousel-slider');
   M.Carousel.init(elems, {fullWidth: true});
});

document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.modal');
 let instances = M.Modal.init(elems);
});

document.addEventListener('DOMContentLoaded', ()=>{
  let el = document.querySelector('.tabs');
   M.Tabs.init(el);
   console.log("Tabs initialized")
});


document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('select');
   M.FormSelect.init(elems);
});