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