console.log('connected');

// console.dir(window);

const nav = document.getElementById('nav');
// console.log(nav);

const body = document.getElementById('body');
// console.log(body);


const navContainer = document.getElementById('hidden');
// console.log(navContainer);
// console.dir(navContainer)


const hamburger = document.querySelector('.svg-container')
console.log('Hamburger element' ,hamburger);

const dropDown = document.getElementById('dropdown');
console.dir('This is the dropDown element' ,dropDown)

hamburger.addEventListener('click', () => {
    dropDown.classList.toggle('mobile-menu-container')
})






// function createNavOnScroll() {
//     navContainer.style.backgroundColor = "#fff";
//     navContainer.style.position = "sticky";
//     navContainer.style.top  = 0;
//     navContainer.style.transition = 'all easeOut 2s';
//     navContainer.style.borderBottom = '1px solid #eee';
//     // navContainer.style.border = '2px solid red';
// }


// window.addEventListener('scroll', () => {
//     console.log('this is the window scrollY property in px unit.' ,window.scrollY + 'px')

//         if(window.scrollY >= 80) {
//             createNavOnScroll();
//          }

//          else {
//           navContainer.style.background = 'transparent';
//          }

//           // while (window.scrollY >= 80) {
//           //   createNavOnScroll()
//           // } 


// })

