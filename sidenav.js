function msgalert(){
            alert("Enjoy your songs by Logging In")
        }
        let active = document.querySelectorAll('h1');
        active.forEach( button =>{
           button.addEventListener('click', function(){
               active.forEach(btn => btn.classList.remove('active'));
               this.classList.add('active');
           }) 
        })