//Hello this is a custom library created to give a button effect that it is following cursor movement but not much let's see how this works out but you will need GSAP to make this thing work

gsap.registerPlugin(ScrollTrigger);

let selector = (class_name) => {return document.querySelector(class_name)}

let selectorAll = (class_names) =>{return document.querySelectorAll(class_names)}

const button = document.querySelector('.popup-button');

function handleScroll() {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 100) 
  {
    if(selector('.hamburger-btn').classList.contains('UnactiveS'))
    {
      document.querySelector('.hamburger-btn.UnactiveS').classList.remove('DAH'); 
      document.querySelector('.hamburger-btn.UnactiveS').classList.add('AH'); 
    }
  } 
  else 
  {
    if(selector('.hamburger-btn').classList.contains('UnactiveS')){
    document.querySelector('.hamburger-btn.UnactiveS').classList.remove('AH'); 
    document.querySelector('.hamburger-btn.UnactiveS').classList.add('DAH');}
  }
}



let currentdegree = 0;

window.addEventListener('load',()=>
{
    document.querySelector('.hamburger-btn').classList.add('DAH'); 
    gsap.to('.center-disk',{rotationZ : 0 ,duration : 0,ease : "back.out(2)",onComplete : () => {currentdegree = 0}})
})
window.addEventListener('scroll', handleScroll);


// created by @Nikhil_Mahala and here there are three attributes i am going to define which are custom and here are these

// Nikhil_Effect  NE_strength="some number" NE_text_strength and so let's move forward Nikhil_Effect_text
//Nihhi_Effect targets the element 
//Nikhil_Effect_text targets the text of that element 

//let's define a self inducting function 


 cursoreffect = () =>
 {
    let Nikhil_Effect_list = document.querySelectorAll('.Nikhil_Effect');

    Nikhil_Effect_list.forEach((index)=>
    {
        let strength ;
        if(window.innerWidth<880){strength =0;}
        else{strength = index.getAttribute('strength');}

        let text_strength;

        if(window.innerWidth<880){text_strength =0;} 
        else{text_strength= index.getAttribute('ts');}
        let Nikhil_Effect_text = document.querySelectorAll('[Nikhil_Effect_text]');

        index.addEventListener('mouseenter',(enter)=>
        {
            index.addEventListener('mousemove',(move)=>
            {
                gsap.to(index,{x: ((((move.clientX - index.getBoundingClientRect().left)-(index.offsetWidth/2))/(index.offsetWidth/2)).toFixed(2))*strength, //((( enter.clientX - index.getBoundingClientRect().left)/index.offsetWidth) - 0.5) *strength,
                    y: ((((move.clientY - index.getBoundingClientRect().top)-(index.offsetHeight/2))/(index.offsetHeight/2)).toFixed(2))*strength, //((( enter.clientY - index.getBoundingClientRect().top)/index.offsetHeight) - 0.5) * strength,
                    duration:1,scale:1,ease:Power4.easeOut})

                Nikhil_Effect_text.forEach((rank)=>
                {
                    gsap.to(rank,{x: ((((move.clientX - index.getBoundingClientRect().left)-(index.offsetWidth/2))/(index.offsetWidth/2)).toFixed(2))*text_strength,
                        y: ((((move.clientY - index.getBoundingClientRect().top)-(index.offsetHeight/2))/(index.offsetHeight/2)).toFixed(2))*text_strength,
                        duration:1,scale:1,ease:Power4.easeOut})
                })
            })

        })

        index.addEventListener('mouseleave',(leave)=>
        {
            gsap.to(index,{x:0,y:0,scale:1,duration:1,ease:Power4.easeOut})

            Nikhil_Effect_text.forEach((rank)=>
            {
                gsap.to(rank,{x:0,y:0,scale:1,duration:1,ease:Elastic.easeOut})
            })
        })
    })
}

initcursorEffect = () => {if(window.innerWidth>680){cursoreffect()}}
initcursorEffect();
window.addEventListener('resize',()=>{
    initcursorEffect();
})
     
{
    document.querySelector('.menu-button').addEventListener('mouseenter',(EE)=>
        {
            let tl = gsap.timeline();
            tl.to('.ham-fill',{top:"-50%",duration:0.6,ease: Power2.InOut})
            .to('.menu-button span',{ backgroundColor : "white", duration:0.02},"=-0.52s")
        })
        
        
        document.querySelector('.menu-button').addEventListener('mouseleave',(LL)=>
        {
            if(!(selector('.menu-button').classList.contains('menu-button-clicked')))
            {
                let tlA = gsap.timeline();
                //tlA.set('.ham-fill',{top: "-50%",})
                tlA.to('.ham-fill',{top:"100%",duration:0.4,ease:Power2.InOut})
                .to('.menu-button span',{backgroundColor : "rgb(128, 118, 118)",duration:0.02,},"=-0.27")
                .set('.ham-fill',{top:"-200%" })
            }

        })
}









sliderworkerthree = (num) => {
    if(((currentdegree-90)%360) === 0){balls(0)}//one
    if(((currentdegree-45)%360) === 0){balls(1)}//two
    if(((currentdegree)%360) === 0){balls(2)}//three
    if(((currentdegree-315)%360) === 0){balls(3)}//four
    if(((currentdegree-270)%360) === 0){balls(4)}//five
    if(((currentdegree-225)%360) === 0){balls(5)}//six
    if(((currentdegree-180)%360) === 0){balls(6)}//seven
    if(((currentdegree-135)%360) === 0){balls(7)}//eight
 }

let bgItems = selectorAll('.bg-items');
let BCImgs = selectorAll('.animate-items');
let middleArray = [];
let currentdegreeStorage = [0];
PCD = () => {currentdegreeStorage.push(currentdegree)} ;
let O2_array = [0];
pushOneinO2 = () => {O2_array.push(1);console.log(O2_array.length);PCD()}
sliderimgchanger = () => {
    let PA ;
    let AA;
    if((currentdegreeStorage[currentdegreeStorage.length-2]-90)%360 === 0){PA = 1}
    if((currentdegreeStorage[currentdegreeStorage.length-2]-45)%360 === 0){PA = 2}
    if((currentdegreeStorage[currentdegreeStorage.length-2]-0)%360 === 0){PA = 3}
    if((currentdegreeStorage[currentdegreeStorage.length-2]-315)%360 === 0){PA = 4}
    if((currentdegreeStorage[currentdegreeStorage.length-2]-270)%360 === 0){PA = 5}
    if((currentdegreeStorage[currentdegreeStorage.length-2]-225)%360 === 0){PA = 6}
    if((currentdegreeStorage[currentdegreeStorage.length-2]-180)%360 === 0){PA = 7}
    if((currentdegreeStorage[currentdegreeStorage.length-2]-135)%360 === 0){PA = 8}

    if((currentdegreeStorage[currentdegreeStorage.length-1]-90)%360 === 0){AA = 1}
    if((currentdegreeStorage[currentdegreeStorage.length-1]-45)%360 === 0){AA = 2}
    if((currentdegreeStorage[currentdegreeStorage.length-1]-0)%360 === 0){AA = 3}
    if((currentdegreeStorage[currentdegreeStorage.length-1]-315)%360 === 0){AA = 4}
    if((currentdegreeStorage[currentdegreeStorage.length-1]-270)%360 === 0){AA = 5}
    if((currentdegreeStorage[currentdegreeStorage.length-1]-225)%360 === 0){AA = 6}
    if((currentdegreeStorage[currentdegreeStorage.length-1]-180)%360 === 0){AA = 7}
    if((currentdegreeStorage[currentdegreeStorage.length-1]-135)%360 === 0){AA = 8}

        selectorAll('.animate-item').forEach((value,index) => 
        {
            value.classList.add('underplaced-bg');
            value.classList.remove('prev-activate-bg');
            value.classList.remove('activate-showing-img-animation');
            if(index === PA-1)
            {
            value.classList.remove('underplaced-bg');
            value.classList.add('prev-activate-bg');
            value.classList.remove('activate-showing-img-animation');
            }

            if(index === AA-1)
            {
            value.classList.remove('underplaced-bg');
            value.classList.remove('prev-activate-bg');
            value.classList.add('activate-showing-img-animation');
            }
        })

        selectorAll('.bg-item').forEach((value,index) => 
        {
            value.classList.add('UAI');
            value.classList.remove('PAcI');
            value.classList.remove('AcI');
            if(index === PA-1)
            {
            value.classList.remove('UAI');
            value.classList.add('PAcI');
            value.classList.remove('AcI');
            }

            if(index === AA-1)
            {
            value.classList.remove('UAI');
            value.classList.remove('PAcI');
            value.classList.add('AcI');
            }
        })
}
checkO2 = ()=> {
    if(O2_array[O2_array.length-1]===1 && middleArray[middleArray.length-1]===0)
    {
    let PA ;
    let AA;
    if((currentdegreeStorage[currentdegreeStorage.length-2]-90)%360 === 0){PA = 1}
    if((currentdegreeStorage[currentdegreeStorage.length-2]-45)%360 === 0){PA = 2}
    if((currentdegreeStorage[currentdegreeStorage.length-2]-0)%360 === 0){PA = 3}
    if((currentdegreeStorage[currentdegreeStorage.length-2]-315)%360 === 0){PA = 4}
    if((currentdegreeStorage[currentdegreeStorage.length-2]-270)%360 === 0){PA = 5}
    if((currentdegreeStorage[currentdegreeStorage.length-2]-225)%360 === 0){PA = 6}
    if((currentdegreeStorage[currentdegreeStorage.length-2]-180)%360 === 0){PA = 7}
    if((currentdegreeStorage[currentdegreeStorage.length-2]-135)%360 === 0){PA = 8}

    if((currentdegreeStorage[currentdegreeStorage.length-1]-90)%360 === 0){AA = 1}
    if((currentdegreeStorage[currentdegreeStorage.length-1]-45)%360 === 0){AA = 2}
    if((currentdegreeStorage[currentdegreeStorage.length-1]-0)%360 === 0){AA = 3}
    if((currentdegreeStorage[currentdegreeStorage.length-1]-315)%360 === 0){AA = 4}
    if((currentdegreeStorage[currentdegreeStorage.length-1]-270)%360 === 0){AA = 5}
    if((currentdegreeStorage[currentdegreeStorage.length-1]-225)%360 === 0){AA = 6}
    if((currentdegreeStorage[currentdegreeStorage.length-1]-180)%360 === 0){AA = 7}
    if((currentdegreeStorage[currentdegreeStorage.length-1]-135)%360 === 0){AA = 8}

        selectorAll('.animate-item').forEach((value,index) => 
        {
            value.classList.add('underplaced-bg');
            value.classList.remove('prev-activate-bg');
            value.classList.remove('activate-showing-img-animation');
            if(index === PA-1)
            {
            value.classList.remove('underplaced-bg');
            value.classList.add('prev-activate-bg');
            value.classList.remove('activate-showing-img-animation');
            }

            if(index === AA-1)
            {
            value.classList.remove('underplaced-bg');
            value.classList.remove('prev-activate-bg');
            value.classList.add('activate-showing-img-animation');
            }
        })

        selectorAll('.bg-item').forEach((value,index) => 
        {
            value.classList.add('UAI');
            value.classList.remove('PAcI');
            value.classList.remove('AcI');
            if(index === PA-1)
            {
            value.classList.remove('UAI');
            value.classList.add('PAcI');
            value.classList.remove('AcI');
            }

            if(index === AA-1)
            {
            value.classList.remove('UAI');
            value.classList.remove('PAcI');
            value.classList.add('AcI');
            }
        })

        console.log(currentdegreeStorage,`PA is ${PA}`,`AA is ${AA}`);
        console.log(selectorAll('.animate-item'));

    }}


let O1_array = [0];



pushOneinO1 = () => {O1_array.push(1);console.log(O1_array.length);PCD()}
checkO1 = ()=> {if(O1_array[O1_array.length-1]===1 && middleArray[middleArray.length-1]===1)
    {
    let PA ;
    let AA;
    if((currentdegreeStorage[currentdegreeStorage.length-2]-90)%360 === 0){PA = 1}
    if((currentdegreeStorage[currentdegreeStorage.length-2]-45)%360 === 0){PA = 2}
    if((currentdegreeStorage[currentdegreeStorage.length-2]-0)%360 === 0){PA = 3}
    if((currentdegreeStorage[currentdegreeStorage.length-2]-315)%360 === 0){PA = 4}
    if((currentdegreeStorage[currentdegreeStorage.length-2]-270)%360 === 0){PA = 5}
    if((currentdegreeStorage[currentdegreeStorage.length-2]-225)%360 === 0){PA = 6}
    if((currentdegreeStorage[currentdegreeStorage.length-2]-180)%360 === 0){PA = 7}
    if((currentdegreeStorage[currentdegreeStorage.length-2]-135)%360 === 0){PA = 8}

    if((currentdegreeStorage[currentdegreeStorage.length-1]-90)%360 === 0){AA = 1}
    if((currentdegreeStorage[currentdegreeStorage.length-1]-45)%360 === 0){AA = 2}
    if((currentdegreeStorage[currentdegreeStorage.length-1]-0)%360 === 0){AA = 3}
    if((currentdegreeStorage[currentdegreeStorage.length-1]-315)%360 === 0){AA = 4}
    if((currentdegreeStorage[currentdegreeStorage.length-1]-270)%360 === 0){AA = 5}
    if((currentdegreeStorage[currentdegreeStorage.length-1]-225)%360 === 0){AA = 6}
    if((currentdegreeStorage[currentdegreeStorage.length-1]-180)%360 === 0){AA = 7}
    if((currentdegreeStorage[currentdegreeStorage.length-1]-135)%360 === 0){AA = 8}

        selectorAll('.animate-item').forEach((value,index) => 
        {
            value.classList.add('underplaced-bg');
            value.classList.remove('prev-activate-bg');
            value.classList.remove('activate-showing-img-animation');
            if(index === PA-1)
            {
            value.classList.remove('underplaced-bg');
            value.classList.add('prev-activate-bg');
            value.classList.remove('activate-showing-img-animation');
            }

            if(index === AA-1)
            {
            value.classList.remove('underplaced-bg');
            value.classList.remove('prev-activate-bg');
            value.classList.add('activate-showing-img-animation');
            }
        })

        selectorAll('.bg-item').forEach((value,index) => 
        {
            value.classList.add('UAI');
            value.classList.remove('PAcI');
            value.classList.remove('AcI');
            if(index === PA-1)
            {
            value.classList.remove('UAI');
            value.classList.add('PAcI');
            value.classList.remove('AcI');
            }

            if(index === AA-1)
            {
            value.classList.remove('UAI');
            value.classList.remove('PAcI');
            value.classList.add('AcI');
            }
        })

        console.log(currentdegreeStorage,`PA is ${PA}`,`AA is ${AA}`);
        console.log(selectorAll('.animate-item'));

    }}

selector('.next').addEventListener('click',()=>
{
    gsap.to('.center-disk',{rotationZ : 45+currentdegree ,duration : 0,ease: "back.out(2)",onComplete : () => {currentdegree += 45;sliderworkerthree();}});
        O2_array.push(0);
        middleArray.push(0);
        clearTimeout(window.pushTimeout02);
        clearTimeout(window.checkTimeout02);
        window.pushTimeout02 = setTimeout(pushOneinO2, 400);
        window.checkTimeout02 = setTimeout(checkO2, 510);
})

selector('.prev').addEventListener('click',()=>
    {
        gsap.to('.center-disk',{rotationZ : currentdegree-45 ,duration : 0,ease : "back.out(2)",onComplete : () => {currentdegree -= 45;sliderworkerthree();}});
        O1_array.push(0);
        middleArray.push(1);
        console.log(O1_array.length);
        clearTimeout(window.pushTimeout);
        clearTimeout(window.checkTimeout);
        window.pushTimeout = setTimeout(pushOneinO1, 400);
        window.checkTimeout = setTimeout(checkO1, 510);
    })


document.querySelector('.image-info').classList.add('CV');
document.querySelector('.eye-button').addEventListener('click',()=>{
    if (document.querySelector('.slider',).classList.contains('hide---eye'))
    {
        document.querySelectorAll('.CV').forEach(el => { el.classList.remove('hide---eye');})
        document.querySelectorAll('.CV').forEach(el => {el.classList.add('show---eye');})
        document.querySelector('.line-eye').classList.add('line-eyeNV');
        document.querySelector('.line-eye').classList.remove('line-eyeV');

    }
    else
    {
        document.querySelectorAll('.CV').forEach(el => {el.classList.add('hide---eye');})
        document.querySelectorAll('.CV').forEach(el => {el.classList.remove('show---eye');})
        document.querySelector('.line-eye').classList.add('line-eyeV');
        document.querySelector('.line-eye').classList.remove('line-eyeNV');
    }
})


 sliderworker = (num) => {gsap.to('.center-disk',{rotationZ : num+currentdegree ,duration : 0,ease: "back.out(2)",onComplete : () => {currentdegree += num;}})}
 sliderworkertwo = (num) => {
    if(((currentdegree-90)%360) === 0){sliderworker(0+num);}//one

    if(((currentdegree-45)%360) === 0){sliderworker(45+num);}//two

    if(((currentdegree)%360) === 0){sliderworker(90+num);}//three

    if(((currentdegree-315)%360) === 0){sliderworker(135+num);}//four

    if(((currentdegree-270)%360) === 0){sliderworker(180+num);}//five
    
    if(((currentdegree-225)%360) === 0){sliderworker(num-135);}//six
    
    if(((currentdegree-180)%360) === 0){sliderworker(num-90);}//seven
    
    if(((currentdegree-135)%360) === 0){sliderworker(num-45);}//eight
 }

 balls = (num) => {
    selectorAll('.balls').forEach((value,index)=> {
        value.classList.add('shrink-ball')
        if(index===num){
            value.classList.remove('shrink-ball');
            value.classList.add('enlarge-ball');
        }})

    selectorAll('.ballnums').forEach((value,index)=> {
        value.classList.add('hidefill');
        value.classList.remove('showfill');
        if(index===num){
            value.classList.remove('hidefill')
            value.classList.add('showfill');
        }})  
}

selector('.eone').addEventListener('click',()=> {sliderworkertwo(0);balls(0);PCD();sliderimgchanger()})
selector('.etwo').addEventListener('click',()=> {sliderworkertwo(-45);balls(1);PCD();sliderimgchanger()})
selector('.ethree').addEventListener('click',()=> {sliderworkertwo(-90);balls(2);PCD();sliderimgchanger()})
selector('.efour').addEventListener('click',()=> {sliderworkertwo(-135);balls(3);PCD();sliderimgchanger()})
selector('.efive').addEventListener('click',()=> {sliderworkertwo(-180);balls(4);PCD();sliderimgchanger()})
selector('.esix').addEventListener('click',()=> {sliderworkertwo(135);balls(5);PCD();sliderimgchanger()})
selector('.eseven').addEventListener('click',()=> {sliderworkertwo(90);balls(6);PCD();sliderimgchanger()})
selector('.eeight').addEventListener('click',()=> {sliderworkertwo(45);balls(7);PCD();sliderimgchanger()})



selector('.menu-button').addEventListener('click',()=>{
    if(selector('.menu-button').classList.contains('menu-button-clicked'))
    {
        selector('.menu-button').classList.remove('menu-button-clicked');
        selector('.side-bar').classList.remove('activeS');
        selector('.hamburger-btn').classList.add('UnactiveS');
        selector('.link-wrap-side').classList.add('update')

    }
    else{
        selector('.menu-button').classList.add('menu-button-clicked');
        selector('.side-bar').classList.add('activeS');
        selector('.hamburger-btn').classList.remove('UnactiveS');
        selector('.link-wrap-side').classList.remove('update')

    }

    handleScroll();

})






















