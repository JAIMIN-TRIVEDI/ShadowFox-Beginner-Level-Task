var typed = new Typed(".multiple-text", {
  strings: [
    "FullStack Developer",
    "Tech Enthusiastic",
    "Computer Science Student",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 100,
  loop: true,
});

var box = document.getElementById("box");
console.log(box);

console.log(box.innerHTML);


var link = document.getElementById('link')

function theme() {
  if (box.innerHTML ==
    `<i class="bx bxs-brightness-half"></i>`) 
    {
    box.innerHTML =
    `<i class="bx bx-brightness-half"></i>`;
      link.innerHTML=`<link id="link" rel="stylesheet" href="Portfolio2.css">`
      let link2 = document.getElementById('link')
      console.log(link.innerHTML)
    }

  else if (box.innerHTML ==
    `<i class="bx bx-brightness-half"></i>`) 
    {
    box.innerHTML =
    `<i class="bx bxs-brightness-half"></i>`;
       link.innerHTML=`<link id="link" rel="stylesheet" href="Portfolio.css">`
       let link2 = document.getElementById('link')
       console.log(link.innerHTML);
    }
}
