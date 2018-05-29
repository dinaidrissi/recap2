let arrStudents = ["Adam Cichy",
 "Kamille Mai Rye",
"Ã˜jvind Hougaard Rasmussen",
"Alexander Ellegaard Landberg",
"Katrine Marie Kofoed Nielsen",
"Alexander Hedengran Burchardt",
"Krzysztof Mazur",
"Alona Virodova",
"Lasse KjÃ¦r Hauerberg",
"Amalia Stefanescu",
"Linnea Amina Dahbi HÃ¸jfeldt",
"Amalia Blanca Plana Ruiz",
"Louise Hauge Jessen",
"Anders Verdier",
"Maria Macedo Ferreira",
"Andrei Bolog",
"Marija Belautdinova",
"Anne Linde Andersen",
"Mishari Adel Toama",
"Benjamin Pelzman",
"Modestas Sekstela",
"Birkir BjÃ¶rnsson",
"Nanna Lisberg",
"Botond Lorand Birton",
"Nicklas Toft Povlsen",
"Bruno Miguel Caetano Amado",
"Nicolas MÃ¸ller Holm",
"Calin Valentin Dima",
"Niels Erik RaursÃ¸",
"Camille Doussy",
"Niels Krahmer Gerdes",
"Cecilie Harbo Holm",
"Oliver Pyndt SÃ¸mme",
"CharlÃ©ne Marteyn",
"Pablo Vicente de la Sota",
"Chiara Nicola",
"Patrycja Julia Zawrotniak",
"Christina Hedegaard Nielsen",
"Pernille Lee NÃ¸rskov",
"Constantin Guiu",
"Rasmus Kvist",
"DÃ¡vid Ale",
"Rita Radovics",
"Dina El Idrissi",
"Robert Alexandru Tutu",
"Dovile SÃ¸ndergaard",
"Rosa de Lurdes Afreixo Pires",
"Edita Gudan",
"Sofie Linde Kirketerp",
"Frederik Lee Kofoed",
"Stine Holm Andersson",
"Greta Gerulyte",
"SÃ¸ren Hermansen",
"Ioana VlÃ¡dÃ¡u-Babii",
"Tadeas Kosek",
"Irina Salagup",
"Valentina Ivanova Shtarbova",
"Istvan-Tamas TÃ¶rÃ¶k",
"Veronika MachÃ¡ckovÃ¡",
"Izabela Anna Turaj",
"VÃ­tek Linhart",
"Julie Titte Helt Lund",
"Wioletta Gluza"];
document.addEventListener("DOMContentLoaded", buildList);

function buildList(){
    //foreach og kalder på næste funktion
    arrStudents.forEach(addStudent);
}
    
function addStudent(student){
      // show the student
    //console.log("here's ", student);
    let temp = document.querySelector("#studentinfo").content;
    let infoNames = document.getElementById("#infoNames");
    let clone = temp.cloneNode(true);
//clone elements
clone.querySelector("span").getAttribute("data-json").textContent = student;
   //console.log(clone.querySelector("span").getAttribute("data-json").textContent = student);
    let students = document.querySelector("#students");
    //getNameParts();
    students.appendChild(clone);
    
}



function getNameParts(fullname){
    
    let fullName = arrStudents.map(getNameParts);
    console.log(fullName);
    let fullNameT = fullName.join(" ");
    console.log(fullNameT);

    let space1 = fullName.indexOf(" ");

    console.log("space1", space1);

    let space2num = space1 +1;

    let space2 = fullName.indexOf(" ", space2num);
    console.log("space2", space2);

    let nameLength = fullName.length;
    console.log(nameLength);

    let spaceCount = (fullName.split(" ").length -1);
    console.log(spaceCount);

    if (spaceCount <= 1){

        const firstName1 = fullName.substring(0, space1);
        console.log("first name:", firstName);  
       
        const lastName1 = fullName.substring(space1, nameLength);
        console.log("last name:", lastName1);

} else {

    const firstName = fullName.substring(0, space1);
    console.log("first name:", firstName);
    
    const middleName = fullName.substring(space2num, fullName.lastIndexOf(" "));
    console.log("middle name:", middleName);

    const lastName = fullName.substring(fullName.lastIndexOf(" "), nameLength);
    console.log("last name:", lastName);
 }

}
getNameParts();