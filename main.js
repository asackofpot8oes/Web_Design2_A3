//naming variables for the closing and opening of the dialog in the footer
const signBtn = document.querySelector ("#sign")
const dialog = document.querySelector (".dia")
const closeBtn = document.querySelector('#close')
//open
signBtn.addEventListener("click", ()=> dialog.show() )
//close
closeBtn.addEventListener("click", ()=> dialog.hide() )

//svg animation
const svg = document.querySelector ("svg.line")
const path = svg.querySelector ("path")

const scroll = () => {
    const distance = window.scrollY
    const pathLength = path.getTotalLength ()
    const totalDistance = svg.clientHeight - window.innerHeight
    const percentage = distance / (totalDistance) //add to this one to adjust where the animation end
    path.style.strokeDasharray = `${pathLength}`
    path.style.strokeDashoffset = `${pathLength * (1-percentage)}`
    
}
scroll()

window.addEventListener("scroll", scroll)
//activator for the scrolling svg animation
//gsap plugin
gsap.registerPlugin(ScrollTrigger) 

gsap.to("#carousel", {
    scrollTrigger: {
        trigger: "#carousel",
        start: "top 75%",
        toggleActions: "restart pause reverse pause"
    },
    x:2000,
   // rotation: 360,
    duration: 3})
    
    gsap.to("#carousel2", {
    scrollTrigger: {
        trigger: "#carousel2",
        start: "top 75%",
        toggleActions: "restart pause reverse pause"
    },
    x:1700,
   // rotation: 360,
    duration: 3})
    