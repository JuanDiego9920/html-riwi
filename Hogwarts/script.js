const hogwarts = {
    nombre: "Daniel Toro",
    edad: 30,
    familia: {
        madre: "Luz Mery",
        padre: "Cecilio"
    },
    linaje: ["Mestizo", "muggle", "sangre pura"],
    casa: "",
    animalPatronus: "",
    cualidades: ["Nobleza", "Inteligencia", "Humildad"]
}

const profesores = {
    transformaciones: "Profesor Kevin Slughorn",
    herbologia: "Profesor Maria Umbridge",
    pociones: "Profesor Liliana McGonagall",
    encantamientos: "Profesora Jackie",
    defensaContraLasArtesOscuras: "Profesor Robinson Snape ",
    animalesMagicos: "Profesor David Filch",
    historiaDeMagia: "Profesor Ronald Sprout"
}

if (hogwarts.cualidades.includes("creatividad","erudicion", "inteligencia" && hogwarts.linaje.includes("muggle"))){
    hogwarts.casa = "Ravenclaw"
}


const claseTransformaciones = {
    nombreProfesor: profesores.transformaciones,
    horario :"15:00 - 18:00",
    riddiculus: function(){
            let preguntaBogg = prompt("Hay un boggart en el sitio?")
            if(preguntaBogg == "si"){
                function enfrentarBogg(cualidadBogg, risa){
                    console.log(`El boggart con forma ${cualidadBogg}, se le ha aplicado el hechizo y quedo ${risa}`)
                }
/*   let cualidadBogg = prompt("Cual es tu mayor miedo: ")
let risa = prompt("Que te produce risa: ")
console.log(`El boggart es: ${cualidadBogg}`) */
            }else{
                console.log("no hay boggarts")
            }
        },
}

claseTransformaciones.riddiculus()
enfrentarBogg("Pedro","asd")