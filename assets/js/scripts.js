let body = document.querySelector('body')
let header = document.querySelector('header')
let container = document.querySelector('.container')
let nav = document.querySelector('nav')
let logo = document.getElementById('logo')
let navbarLinks = document.getElementById('navbar-links')
let ul = document.getElementById('ulNav')
let hamburger = document.getElementById('hamburger')
let ikon = document.querySelector('i')


hamburger.addEventListener('click' , (e)=>{
    e.preventDefault()
    navbarLinks.classList.toggle('mobNav')
    navbarLinks.style.transition = 'all 0.5s'
    ikon.classList.toggle('fa-bars')
    ikon.classList.toggle('fa-x')
    ikon.style.display = "flex"
})



let acc = document.getElementById('acc')
let acardions = document.querySelector('.acardions')
let acardion = document.querySelectorAll('.acardion')
let acardionTitle = document.querySelectorAll('.acardion__title')
let acardionContent = document.querySelectorAll('.acardion__content')



acardionTitle.forEach(title => {
    title.addEventListener('click', (e)=> {
        e.preventDefault()
        let content = title.parentElement.querySelector('.acardion__content');  
        title.style.transition = "all 0.5s"
        let icon = title.querySelector('span i');
        if (content.style.display === "block") {
            content.style.display = "none";
            icon.style.transform = "rotate(0deg)"
        } else {
            document.querySelectorAll('.acardion__content').forEach(item => {
                item.style.display = 'none';
            });
            document.querySelectorAll('.acardion__title span i').forEach(iconItem => {
                content.classList.remove('open');
                iconItem.style.transform = 'rotate(0deg)';
                icon.style.transform = "rotate(90deg)"
            });
            content.style.display = "block";
            content.style.backgroundColor = "pink"
            icon.style.transform = "rotate(90deg)"
            title.style.transition = "all 0.5s"
            content.classList.add('open');
            
            
        }
        
        
    });
});



// let acardionTitle = document.querySelectorAll(".acardion__title");
// acardionTitle.forEach(title => {
//     title.children[0].addEventListener("click",()=>{
//         title.children[0].classList.toggle("")
//         title.children[1].classList.toggle(".acardion__content")
//      })
// });

// for (let i = 0; i < acardionTitle.length; i++) {

//     acardionTitle[i].addEventListener('click',(e)=>{
//         e.preventDefault()

//     })
    
// }




