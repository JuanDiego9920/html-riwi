function inicio(){


    let correo = document.getElementById('correo').value;
    let contrasena =document.getElementById('contrasena').value;

    var personas = [
        {
            nombre : 'juan',
            gmail : 'juan@gmail.com',
            contrasena : '654321'
        },
        {
            nombre : 'diego',
            gmail : 'diego@gmail.com',
            contrasena : '654321'
        },
        {
            nombre : 'mariana',
            gmail : 'mariana@gmail.com',
            contrasena : '654321'
        }
    ];

    personas.forEach(function(persona){
        if(correo == persona.gmail && contrasena == persona.contrasena){
            sessionStorage.setItem('nombre', persona.nombre);
            sessionStorage.setItem('auth', 1);
            location.href = '2index.html'
        }else{
            console.log('el correo o la contrasena estan malas')
        }
    })

}