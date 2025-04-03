

let div = document.getElementById("divdiv")
let btn = document.getElementById('btn')
let btn2 = document.getElementById('btn2')
let ul = document.getElementById('ull')

let pages = 1
let totalpage

function getusers(page){

    let request = new XMLHttpRequest();
    request.open('GET', 'https://reqres.in/api/users?page=' + page)

    request.addEventListener('load', function() {   
        let respons = this.responseText
        let responsejs = JSON.parse(respons)

        

        ul.innerHTML = " "
    
        responsejs.data.forEach(element => {
            let li = document.createElement('li')
            li.textContent = element.first_name + "     " + element.last_name          
            ul.appendChild(li)
        });
        totalpage = responsejs.total_pages
        updateButtons();
    })
    
    
    request.addEventListener('error', function(){
    
    })
    
    request.send()

}


getusers(pages)

btn2.addEventListener('click', function(){
    if( pages === totalpage){
        return
    }
    pages++
    getusers(pages)
   
})

btn.addEventListener('click', function(){
    if (pages === 1){
        return
    }
    pages--
    getusers(pages)
})

function updateButtons() {    
    btn.disabled = pages === 1;
    btn2.disabled = pages === totalpage;
}