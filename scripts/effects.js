// effet pour affichage décalé
const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=> {
        if (entry.isIntersecting){
            entry.target.classList.add("show");
        } 
    })
})

const columnsContact = document.querySelectorAll(".effet_js");
columnsContact.forEach((element)=> observer.observe(element));

