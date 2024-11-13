
let exp_div = document.getElementById('experiance')
let exp_btn = document.getElementById('exp_btn')

exp_btn?.addEventListener('click', ()=>{
    exp_div!.classList.toggle('hide')
})


let contact_section = document.getElementById('contact')
let contact_btn =document.getElementById('contact_btn')

contact_btn?.addEventListener('click', ()=>{
    contact_section!.classList.toggle('hide')
})


let edu_section= document.getElementById('education')
let edu_btn = document.getElementById('edu_btn')
edu_btn?.addEventListener('click', ()=>{
    edu_section!.classList.toggle('hide')
})

let skills_section = document.getElementById('skills')
let skills_btn =document.getElementById('skills_btn')
skills_btn?.addEventListener('click', ()=>{
    skills_section!.classList.toggle('hide')
})

let lang_section = document.getElementById('language')
let lang_btn = document.getElementById('lang_btn')
lang_btn?.addEventListener('click', ()=>{
    lang_section!.classList.toggle('hide')
})



let print_btn = document.getElementById('print_btn')

print_btn?.addEventListener('click', ()=>{
    window.print()
})
