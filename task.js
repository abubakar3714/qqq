      
      filterSelection("all")
      function filterSelection(c) {
        var x, i;
        x = document.getElementsByClassName("filterDiv");
        if (c == "all") c = "";
        for (i = 0; i < x.length; i++) {
          w3RemoveClass(x[i], "show");
          if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
        }
      }
      
      function w3AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
          if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
        }
      }
      
      function w3RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
          while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);     
          }
        }
        element.className = arr1.join(" ");
      }
      
      // Add active class to the current button (highlight it)
      var btnContainer = document.getElementById("myBtnContainer");
      var btns = btnContainer.getElementsByClassName("btn");
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function(){
          var current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
        });
      }
      /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
        const sections = document.querySelectorAll('section[id]')

        function scrollActive(){
            const scrollY = window.pageYOffset
        
            sections.forEach(current =>{
                const sectionHeight = current.offsetHeight,
                    sectionTop = current.offsetTop - 50,
                    sectionId = current.getAttribute('id')
        
                if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                    document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
                }else{
                    document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
                }
            })
        }
        window.addEventListener('scroll', scrollActive)
        
        
        /*=============== CHANGE BACKGROUND HEADER ===============*/
        function scrollHeader(){
            const header = document.getElementById('header')
            // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
            if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
        }
         // loader started
    function scrollToTop(){
        window.scrollTo(0,0)
    }
    function myFunction() {
    myVar = setTimeout(showPage, 1000);
}
    function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}
// loader end
  let miningStartTime = new Date().getTime();
let miningTime = 0;
let cryptoBalance = 0.0000;
let claimButton = document.getElementById('claim-button');

setInterval(() => {
let currentTime = new Date().getTime();
miningTime = Math.floor((currentTime - miningStartTime) / 1000);
document.getElementById('mining-time').innerText = `${miningTime} seconds`;
if (miningTime >= 60) {
cryptoBalance += 0.0005; // add 0.0001 BTC to balance every 1 minute
document.getElementById('crypto-balance').innerText = cryptoBalance.toFixed(4) + 'TC';
miningStartTime = new Date().getTime();
miningTime = 0;
}
}, 1000);

claimButton.addEventListener('click', () => {
alert(`You claimed ${cryptoBalance.toFixed(4)} BTC!`);
cryptoBalance = 0.0000;
document.getElementById('crypto-balance').innerText = cryptoBalance.toFixed(4) + 'TC';
});
let miningRate = 0.0001; // 0.0001 BTC per minute
document.getElementById('mining-rate').innerText = `Mining Rate: ${miningRate} BTC per minute`;
let totalMined = 0.0000;
document.getElementById('total-mined').innerText = `Total Mined: ${totalMined.toFixed(4)} BTC`;
let miningSpeed = 1; // 1 minute
document.getElementById('mining-speed').innerText = `Mining Speed: ${miningSpeed} minute`;
// loader started
function myFunction() {
myVar = setTimeout(showPage, 3000);
}
function showPage() {
document.getElementById("loader").style.display = "none";
document.getElementById("myDiv").style.display = "block";
}
// loader end