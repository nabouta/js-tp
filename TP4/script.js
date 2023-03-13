let lengthPassWord = document.querySelectorAll('.nombrecaractere');
let checkbox = document.querySelectorAll('input[type="checkbox"]');
let generatebutton = document.querySelector('button');
let nombreCaractere = document.querySelector('.nombrecaractere');
let createpassword = document.querySelector('.motdepasse');
const copy =document.querySelector('i');
let notificationOne =document.querySelector('.notificationOne')
let notificationTwo =document.querySelector('.notificationTwo')
          

function generateUppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}


function generateLowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function generateNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}


function generateSpecial() {
    let tabSpeciaux = "+=)ç_-('&%$*!:<^>@;]{[}],#~";
    return tabSpeciaux[Math.floor(Math.random() * tabSpeciaux.length)];
}

generatebutton.addEventListener('click', () => {
    let lenght = nombreCaractere.value
    createpassword.value = ''
    if (lenght > 0 && lenght <= 20) {
        let motdepasse = ''
        let checkElement = Array.from(checkbox).filter(element => element.checked);
        
        
        for (let k=0; k < lenght; k++){
            checkElement.forEach((item) => {
                if(item.id == "uppercase") motdepasse += generateUppercase()
                if(item.id == "lowercase") motdepasse += generateLowercase()
                if(item.id == "numbers")   motdepasse += generateNumber()
                if(item.id == "special")  motdepasse += generateSpecial()
    
            })
        }

        motdepasse = motdepasse.substring(0, lenght)
        if (lenght < checkElement.length) {
            notificationTwo.style.display="block"
            setTimeout(() =>{
              notificationTwo.style.display="none"
            } , 2000);
  
        }
        else 
        {  createpassword.value = shuffle(motdepasse)}

        function shuffle(s) {
            var arr = s.split('');           
            var n = arr.length;              
            
            for(var i=0 ; i<n-1 ; ++i) {
              var j = getRandomInt(n);       
              
              var temp = arr[i];             
              arr[i] = arr[j];
              arr[j] = temp;
            }
            
            s = arr.join('');                
            return s;                        
          }

          function getRandomInt(n) {
            return Math.floor(Math.random() * n);
          }

    }

    else
          notificationOne.style.display="block"
          setTimeout(() =>{
            notificationOne.style.display="none"
          } , 2000);




        copy.addEventListener('mouseover',()=> {
            copy.style.opacity="1"
        })

        copy.addEventListener('mouseout',()=> {
            copy.style.opacity="-1"
        })
    
})

    








        /*for (let i = 0; i < lenght; i++) {



            let element = checkElement[Math.floor(Math.random() * checkElement.length)];
            // console.log(element)
            // console.log(checkElement);
            // console.log(element);
            // console.log(element.id);


            if (element.id == "maguscule") {
                
                motdepasse += generateMajiscule();
               // console.log(generateMajiscule());
            }

            if (element.id == "minuscule") { motdepasse += generateMinuscule(); }

            if (element.id == "numbers") { motdepasse += generateNumber(); }

            if (element.id == "speciaux") { motdepasse += generateSpeciaux(); }

            element = ''
            if (lenght < checkElement.length) {
                alert("Le nombre de caractere est inferieur au checkbox")
            }
            else { createpassword.value = motdepasse; }


        }
        */

