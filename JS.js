console.log('JS.js is loaded');
console.log(typeof gsap);
function rotateLogo()
{
gsap.to('.logo-container',{
    rotationY : 360,
    duration:2,
    repeat : -1,
    repeatDelay: 0
})
} 
setTimeout(rotateLogo,5000);

