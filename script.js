const panels = document.querySelectorAll(".panel")

panels.forEach((panel)=>{
    panel.addEventListener("click", ()=>{
        removeaActiveClasses()
        panel.classList.add("active");
        
    })
})

function removeaActiveClasses(){
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    })
}