const place= document.getElementById('root');
const but=document.createElement("button");
const img=document.createElement("img")

but.innerText="Pet img";

place.appendChild(but);
place.appendChild(img);

img.style.visibility= 'hidden';

but.addEventListener('click',function(){

    img.style.visibility= 'visible';

    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(response =>{

        console.table(response);

        response.map(user => {

            img.src=user.url;


        });

    })
    .then(result => {
        console.log('Success:', result);
      })
      .catch(error => {
        console.error('Error:', error);
      });

})

