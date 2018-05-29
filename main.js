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

function buildList(){
    arrStudents.forEach(addStudent);
}
    
function addStudent(student){
      // show the student
    console.log("here's ", student);
    let temp = document.querySelector("#studentinfo").content;
    let clone = temp.cloneNode(true);
//clone elements
  clone.querySelector(span.dataset.json).textContent = student.firstname;
  console.log(student.firstname);
    let students = document.querySelector("#students");
    students.appendChild(clone);
}