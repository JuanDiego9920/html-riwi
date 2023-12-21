let container = document.getElementById('contenedor');

 let row = document.createElement('div');
 row.classList.add('row')
 container.appendChild(row);
 
 let col = document.createElement('div');
 col.classList.add('col-md-4')
 row.appendChild(col);

 let card = document.createElement('div');
 card.classList.add('card')
 col.appendChild(card);

 let img = document.createElement('img');
 img.setAttribute('src','WhatsApp Image 2023-09-08 at 4.30.54 PM (2).jpeg');
 img.setAttribute('alt','text');
 img.classList.add('img-fluid')
 card.appendChild(img);
 
 let card_body = document.createElement('div');
 card_body.classList.add('card-body'); 
 card.appendChild(card_body); 

 let h5 = document.createElement('h5');
 h5.innerText.add = "Lorem ipsum dolor, sit amet consectetur adipisicing elit"; 
 card_body.appendChild(h5);
 
 let p = document.createElement('p');
 p.innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit";

 card_body.appendChild(p);

 let a = document.createElement('a');
 a.setAttribute('href','#');
 a.classList.add('btn');
 a.classList.add('btn-primary');
 a.innerText = "enviar";



 card_body.appendChild(a);