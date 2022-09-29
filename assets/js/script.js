// creation de compte students
function registrationStudent() {
  var firstName = document.getElementById("name").value;
  var isFirstNameValid = checkLength(firstName, 4);
  
  if (!isFirstNameValid) {
    document.getElementById("nameMsgError").innerHTML = "Please Check: your first Name must contain between 4 and 20 characters";
    document.getElementById("nameMsgError").style.color="#ed3c0d";
  } else {
    document.getElementById("nameMsgError").innerHTML = "";
  }
  var lastName = document.getElementById("lastName").value;
  var isLastNameValid = checkLength(lastName, 4);
  if (!isLastNameValid) {
    document.getElementById("lNameMsgError").innerHTML = "Please Check: your Last Name must contain between 8 and 20 characters";
    document.getElementById("lNameMsgError").style.color="#ed3c0d";
  } else {
    document.getElementById("lNameMsgError").innerHTML = "";
  }
  var email = document.getElementById("email").value;
  var regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var isEmailValid= regexEmail.test(email);
  if(!isEmailValid) {
    document.getElementById("emailMsgError").innerHTML = "Format Invalid";
    document.getElementById("emailMsgError").style.color="#ed3c0d";
  } else if  (!uniqueEmail(email)){ document.getElementById("emailMsgError").innerHTML = "Existing email";
  document.getElementById("emailMsgError").style.color="#ed3c0d";}
  else {
    document.getElementById("emailMsgError").innerHTML = "";
  }
  var password = document.getElementById("pwd").value;
  var regexPass = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!$&*^]).+$/;
  var isPasswordValid=regexPass.test(password) ;
  if (!isPasswordValid) {
    document.getElementById("passMsgError").innerHTML = "The Password must contain at least one uppercase character, one number and one special character";
    document.getElementById("passMsgError").style.color="#ed3c0d";
  } else {
    document.getElementById("passMsgError").innerHTML = "";
  }
  var tel = document.getElementById("tel").value;
  var isTelValid = checkLength(tel);
  if (!isTelValid) {
    document.getElementById("numberMsgError").innerHTML = "Please Check the Telephone Number";
    document.getElementById("numberMsgError").style.color="#ed3c0d";
  } else {
    document.getElementById("numberMsgError").innerHTML = "";
  }
  var adresse = document.getElementById("adresse").value;
  var cin = document.getElementById("cin").value;
  var isCinValid = checkLength(cin);
  if (!isCinValid) {
    document.getElementById("cinMsgError").innerHTML = "Please Check: your National Identity Card Number must contain  characters";
    document.getElementById("cinMsgError").style.color="#ed3c0d";
  } else {
    document.getElementById("cinMsgError").innerHTML = "";
  }
  var city = document.getElementById("city").value;
  var isCityValid=checkLength(city);
  if (!isCityValid) {
    document.getElementById("cityMsgError").innerHTML = "Please Enter The City Correctly";
    document.getElementById("cityMsgError").style.color="#ed3c0d";}
    else {
      document.getElementById("cityMsgError").innerHTML = "";
    }
    var adresse = document.getElementById("adresse").value;
    var isadresseValid=checkLength(adresse);
    if (!isadresseValid) {
      document.getElementById("adresseMsgError").innerHTML = "Please Enter Your Adresse Correctly";
      document.getElementById("adresseMsgError").style.color="#ed3c0d";}
      else {
        document.getElementById("adresseMsgError").innerHTML = "";
      }
   
   if(isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid && isTelValid && isCinValid && isadresseValid && uniqueEmail(email)){
 
   // if (!validatePassword){document.getElementById("passMsgError").innerHTML="please fill in this field: it must contain between 4 and 20 characters"}
   
  var usersTab = JSON.parse(localStorage.getItem("users") || "[]");


  var id = localStorage.getItem("id") || "1";
  var user = {
    id: id,
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    tel: tel,
    adresse: adresse,
    cin: cin,
    city: city,
    
    role: "Student",
  };
  usersTab.push(user);
  localStorage.setItem("users", JSON.stringify(usersTab));
  localStorage.setItem("id", Number(id) + 1);
  location.replace("index.html");}}
// verifier que le mail est unique
function uniqueEmail(email) {
  var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
  var userExist = ftrue;
  for (var i = 0; i < allUsers.length; i++) {
    if (allUsers[i].email === email) {
      userExist = false;
      break;
    }
  }}
  

// Creation d'un compte Prof
function registrationProfessor() {
  var firstName = document.getElementById("name").value;
  var isFirstNameValid = checkLength(firstName, 4);
  if (!isFirstNameValid) {
    document.getElementById("msgErrorName").innerHTML = "Please Check: your first Name must contain between 4 and 20 characters";
    document.getElementById("msgErrorName").style.color="#ed3c0d";
  } else {
    document.getElementById("msgErrorName").innerHTML = "";
  }
  var lastName = document.getElementById("lastName").value;
  var isLastNameValid = checkLength(lastName, 4);
  if (!isLastNameValid) {
    document.getElementById("msgErrorLName").innerHTML = "Please Check: your Last Name must contain between 8 and 20 characters";
    document.getElementById("msgErrorLName").style.color="#ed3c0d";
  } else {
    document.getElementById("msgErrorLName").innerHTML = "";
  }
  var email = document.getElementById("email").value;
  var regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var isEmailValid= regexEmail.test(email);
  if (!isEmailValid) {
    document.getElementById("msgErrorEmail").innerHTML = "Format Invalid";
    document.getElementById("msgErrorEmail").style.color="#ed3c0d";
  } else {
    document.getElementById("msgErrorEmail").innerHTML = "";
  }
  var password = document.getElementById("pwd").value;
  var regexPass = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!$&*^]).+$/;
  var isPasswordValid=regexPass.test(password) ;
  if (!isPasswordValid) {
    document.getElementById("msgErrorPass").innerHTML = "Please Check the Password";
    document.getElementById("msgErrorPass").style.color="#ed3c0d";
  } else {
    document.getElementById("msgErrorPass").innerHTML = "";
  }
  var tel = document.getElementById("tel").value;
  var isTelValid = checkNumber(tel);
  if (!isTelValid) {
    document.getElementById("msgErrorNumber").innerHTML = "Invalid";
    document.getElementById("msgErrorNumber").style.color="#ed3c0d";
  } else {
    document.getElementById("msgErrorNumber").innerHTML = "";
  }
  var adresse = document.getElementById("adresse").value;
  var speciality = document.getElementById("module").value;
 
  if (speciality=="") {
    document.getElementById("msgErrorSpeciality").innerHTML = "Invalid";
    document.getElementById("msgErrorSpeciality").style.color="#ed3c0d";
  } else {
    document.getElementById("msgErrorNumber").innerHTML = "";
  }
  var experience = document.getElementById("experience").value;
  var description = document.getElementById("description").value;
  if(isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid && isTelValid ){
  var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
  var id = localStorage.getItem("id") || "1";
  var user = {
    id: id,
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    tel: tel,
    adresse: adresse,
    speciality: speciality,
    experience: experience,
    description:description,
    role: "Professor",
  };
  usersTab.push(user);
  localStorage.setItem("users", JSON.stringify(usersTab));
  localStorage.setItem("id", Number(id) + 1);
  location.replace("dashbord.html");}
}
//Creation d'un compte Prof
function registrationAdmin() {
  var firstName = document.getElementById("name").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("pwd").value;

  var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
  var id = localStorage.getItem("id") || "1";
  var user = {
    id: id,
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    role: "Admin",
  };
  usersTab.push(user);
  localStorage.setItem("users", JSON.stringify(usersTab));
  localStorage.setItem("id", Number(id) + 1);
  location.replace("admin .html");
}
function nul (ch){
  return ch!="";
}
function checkLength(ch, x,y) {
  return (ch.length >= x);
}
// fonction login
function login() {
  location.replace("login.html");
  var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
  var email = document.getElementById("email").value;
  var password = document.getElementById("pwd").value;
  for (var i = 0; i < usersTab.length; i++) {
    if (usersTab[i].email == email && usersTab[i].password == password) {
      localStorage.setItem("connectedUserId", usersTab[i].id);
      if (usersTab[i].role == "Student") {
        location.replace("index.html");
      } else if (usersTab[i].role == "Professor") {
        location.replace("dashbord.html");
      } else {
        location.replace("admin.html");
      }
    }
    else{document.getElementById("loginErrorMsg").innerHTML="Please Check Your Password Or Your Email";
    document.getElementById("loginErrorMsg").style.color="#C44C51";
  }
  }
}
// fonction qui génére le header
function generateHeading() {
  var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
  var connectedUserId = localStorage.getItem("connectedUserId");
  var registrationTab = JSON.parse(
    localStorage.getItem("registration") || "[]"
  );
  var content = "";
  if (connectedUserId) {
    if (searchObjectByIdAndKey(connectedUserId, "users").role == "Student") {
      content = `<li><a class="active mr-5" href="#">Welcome ${searchObjectByIdAndKey(connectedUserId, "users").firstName}! </a></li><br>
      <li><a href="index.html">Home</a></li>
      <li><a href="trainers.html"> My Trainers</a></li>
      <li class="dropdown"><a href="myregistrations.html"><span style=" font-size: 15px;
      font-weight: 500;font-family: Poppins ; "> Registrations</span> </a>
      <li><a href="contact.html">Contact</a></li>
     
  <li><a href="test.html" style="color:#008ea1; text-decoration:underline;" target="blc">Take The Test!</a></li>
  <li><a href="messageStudent.html"><img style="width:12%; margin-right:-70%;"src="assets/img/enveloppe.png" alt=""></a></li>
           <li>  <button class="btn " style="background: #008ea1;
    color: #fff; font-family: Poppins; " onclick="logout()">Logout</button></li>`;
    } else if (
      searchObjectByIdAndKey(connectedUserId, "users").role == "Professor"
    ) {
      content = `<li><a class="active" href="#">Welcome ${searchObjectByIdAndKey(connectedUserId, "users").firstName}! </a></li><br>
      <li><a  href="index.html">Home</a></li>
      <li><a href="dashbord.html">Teacher Space </a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><button class="btn " style="background: #008ea1;
      color: #fff; margin-left:50%; " onclick="logout()">Logout</button></li>
      `;
    } else   {
      content = `<li><a class="active" href="#">Welcome ${searchObjectByIdAndKey(connectedUserId, "users").firstName}! </a></li>
      <li><a  href="index.html">Home</a></li>
      <li><a href="admin.html">Administration</a></li>
      <li><a  href="contactmessage.html">Message</a></li>
    <li><button class="btn " style="background: #008ea1;
    color: #fff; margin-left:50%; " onclick="logout()">Logout</button></li>
    `;
    }
  } else {
    content = ` 
    <li><a class="active" href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Contact</a></li>
     
      <li class="dropdown"><a href="#"><span style=" font-size: 15px;
      font-weight: 500;font-family: Poppins ; color:#6B979C; " >Registration</span> <i class="bi bi-chevron-down " ></i></a>
      <ul><li><a href="signupStudent.html">Student </a></li><li><a href="signupProfessor.html">Teacher </a></li><li><a href="signupAdmin.html">Admin</a></li></ul>
      <li><button class="btn " style="background:#008ea1;
      color: #fff; margin-left:50%; " onclick="login()">Login</button></li>
      `;
  }
  document.getElementById("myHeading").innerHTML = content;
}
// deconnexion
function logout() {

  localStorage.removeItem("connectedUserId")
  location.replace("index.html");
}
// Ajout d'une formation
function addTrainning() {
  var forName = document.getElementById("name").value;
  var period = document.getElementById("period").value;
  var cost = document.getElementById("cost").value;
  var availableSeats = document.getElementById("availableSeats").value;
  var schedule = document.getElementById("schedule").value;
  var details = document.getElementById("details").value;
  var connectedUserId = localStorage.getItem("connectedUserId");
  var id = localStorage.getItem("idTraining") || "1";
  var trainingTab = JSON.parse(localStorage.getItem("training") || "[]");

  var training = {
    id: id,
    forName: forName,
    period: period,
    cost: cost,
    availableSeats: availableSeats,
    schedule: schedule,
    details:details,
    idTrainer: connectedUserId,
  };
  trainingTab.push(training);
  console.log(trainingTab.length);
  localStorage.setItem("training", JSON.stringify(trainingTab));
  localStorage.setItem("idTraining", Number(training.id) + 1);
}
// affichage de toute les formations
function training() {
  var trainingTab = JSON.parse(localStorage.getItem("training") || "[]");
  var content = "";
  for (var i = 0; i < trainingTab.length; i++) {
    content =
      content +
      ` <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
  <div class="course-item">
    <img src="assets/img/course-1.jpg" class="img-fluid" alt="...">
    <div class="course-content">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h4>${trainingTab[i].forName}</h4>
        <p class="price">${trainingTab[i].cost}</p>
      </div>

      <h3><a href="course-details.html">${trainingTab[i].forName}</a></h3>
      <p> ${trainingTab[i].details}.</p>
      <div class="trainer d-flex justify-content-between align-items-center">
        <div class="trainer-profile d-flex align-items-center">
          <img src="assets/img/trainers/trainer-1.jpg" class="img-fluid" alt="">
          <span>${
            searchObjectByIdAndKey(trainingTab[i].idTrainer, "users").firstName
            
          }${
        searchObjectByIdAndKey(trainingTab[i].idTrainer, "users").lastName
      }</span>
        </div>
        
        <div class="d-flex  align-items-center mb-3">
       <button class="btn " style="background:#6B979C;
       color: #fff;"onclick="displyedTrainnig(${
         trainingTab[i].id
       })">Display</button>
         </div>
      </div>
    </div>
  </div>
</div> `;
  }
  document.getElementById("firstCourse").innerHTML = content;
}
// recherche d'un element dans le LS par l'id et la clé
function searchObjectByIdAndKey(id, key) {
  tab = JSON.parse(localStorage.getItem(key));
  var findedObject;
  for (var i = 0; i < tab.length; i++) {
    if (tab[i].id == id) {
      findedObject = tab[i];
    }
  }
  return findedObject;
}
// sauvegarde de l'id de la formation displayed
function displyedTrainnig(id) {
  localStorage.setItem("displyedTraining", id);
  location.replace("training-details.html");
}
// affichage des details d'une formation selectionné par le user
function displayTraining() {
  var trainingTab = JSON.parse(localStorage.getItem("training"));
  var content = "";
  var displyedTraining = localStorage.getItem("displyedTraining");
  for (var i = 0; i < trainingTab.length; i++) {
    if (trainingTab[i].id == displyedTraining) {
      content = ` <div class="col-lg-8">
 <img src="assets/img/course-details.jpg" class="img-fluid" alt="">
 <h3>${trainingTab[i].forName} training content</h3>
 <p>
   ${trainingTab[i].details}
 </p>
</div>
<div class="col-lg-4">

 <div class="course-info d-flex justify-content-between align-items-center">
   <h5>Trainer</h5>
   <p><a href="#">${
     searchObjectByIdAndKey(trainingTab[i].idTrainer, "users").firstName
   }  ${
        searchObjectByIdAndKey(trainingTab[i].idTrainer, "users").lastName
      }</a></p>
 </div>

 <div class="course-info d-flex justify-content-between align-items-center">
   <h5>Course Fee</h5>
   <p>${trainingTab[i].cost}</p>
 </div>

 <div class="course-info d-flex justify-content-between align-items-center">
   <h5>Available Seats</h5>
   <p>${trainingTab[i].availableSeats}</p>
 </div>

 <div class="course-info d-flex justify-content-between align-items-center">
 <h5>Duration</h5>
 <p>${trainingTab[i].period}</p>
</div>

 <div class="course-info d-flex justify-content-between align-items-center">
   <h5>Schedule</h5>
   <p>${trainingTab[i].schedule}</p>
 </div>
 <div class="d-flex  align-items-center mb-3">
       <button  class="btn"  style="background: #008ea1;
       color: #fff; "onclick="registration(${trainingTab[i].id}
       )">Registration</button>
       <br> 
  </div>
  <span id="errorMsg"></span>
</div>`;
    }
  }
  document.getElementById("traiDetails").innerHTML = content;
}
// verifier si'il y'a déjà une iscription avec le meme Id
function findedRegistration(identif) {
  var registrationTab = JSON.parse(
    localStorage.getItem("registration") || "[]"
  );
  var connectedUserId = localStorage.getItem("connectedUserId");
  for (var i = 0; i < registrationTab.length; i++) {
    if (
      registrationTab[i].studentId == connectedUserId &&
      registrationTab[i].trainingId == identif
    ) {
      return registrationTab[i];
      break;
    }
  }
}
// verifier s'il toujours des place vide pour s'inscrire
function stealAvailableSeats (identif){
  var trainingTab = JSON.parse(localStorage.getItem("training"));
  for (var i = 0; i < trainingTab.length; i++) {
    if (trainingTab[i].id == identif) {
      return(trainingTab[i].availableSeats!=0);}
}}
// Inscription à une formation
function registration(identif) {
  var trainingTab = JSON.parse(localStorage.getItem("training"));
  var connectedUserId = localStorage.getItem("connectedUserId");
  var registrationTab = JSON.parse(
    localStorage.getItem("registration") || "[]"
  );
  
  if (!findedRegistration(identif) && stealAvailableSeats(identif) && connectedUserId) {
    for (var i = 0; i < trainingTab.length; i++) {
      if (trainingTab[i].id == identif) {
        var id = localStorage.getItem("registrationId") || "1";
        var trainingRegistraion = {
          id: id,
          trainingId: identif,
          proffesorId: trainingTab[i].idTrainer,
          studentId: connectedUserId,
          score: "0",
          scoreTest: "0",
          note: "",
        };
        registrationTab.push(trainingRegistraion);
        localStorage.setItem("registration", JSON.stringify(registrationTab));
        localStorage.setItem("registrationId", Number(id) + 1);
        trainingTab[i].availableSeats = trainingTab[i].availableSeats - 1;
        localStorage.setItem("training", JSON.stringify(trainingTab));
    
        break;
      }

      document.getElementById("errorMsg").innerHTML =
        "Registration Completed Successfully!";
      document.getElementById("errorMsg").style.color = "#6B979C";
    }
  } else if(!connectedUserId){document.getElementById("errorMsg").innerHTML =
  " Your Are Not Connected!";
document.getElementById("errorMsg").style.color = "#C44C51";}
    else {
    document.getElementById("errorMsg").innerHTML =
      " Your Are Already Registered!";
    document.getElementById("errorMsg").style.color = "#C44C51";
  }
  if(!stealAvailableSeats(identif)){document.getElementById("errorMsg").innerHTML =
  " There is no more seats, we are planning a new training in the coming days";
document.getElementById("errorMsg").style.color = "#C44C51";}
}

// afficher la liste de tout les students
function displayStudents() {
  var usersTab = JSON.parse(localStorage.getItem("users"));
  var content = "";
  for (var i = 0; i < usersTab.length; i++) {
    if (usersTab[i].role == "Student") {
    
      content =
        content +
        `
        
    <tbody>
      <tr>
        
        <td>${usersTab[i].id}</td>
        <td>${usersTab[i].firstName}</td>
        <td>${usersTab[i].lastName}</td>
        <td>${usersTab[i].email}</td>
        <td><button class="btn"style="background: #6B979C;
        color: #fff;" onclick="updateStudent(${i})">Update</button></td>
        <td><button class="btn"style="background: #6B979C;
        color: #fff;" onclick="deleteStudent(${i})">Delete</button></td>
      </tr>
    </tbody>
    `;
    }
  }
  document.getElementById("student").innerHTML = content;
}
// Suppression d'un etudiant
function deleteStudent(index) {
  var usersTab = JSON.parse(localStorage.getItem("users"));
  usersTab.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(usersTab));
  location.reload();
}
// Modification d'un etdiant
function updateStudent(index) {
  var usersTab = JSON.parse(localStorage.getItem("users"));
  var name = usersTab[index].firstName;
  var lName = usersTab[index].lastName;
  var email = usersTab[index].email;
  var cin = usersTab[index].cin;

  content = `<div class="row">
 <div class="col-md-4"></div>
 <div class="col-md-4 form-group">
   <input
     type="text"
     name="name"
     class="form-control"
     id="newName"
     value= "${name}" 
   />
   <input
   type="text"
   name="name"
   class="form-control"
   id="newLName"
   value= "${lName}" />
 <input
 type="text"
 name="name"
 class="form-control"
 id="newEmail"
 value= "${email}" />
<input
type="text"
name="name"
class="form-control"
id="newCin"
value= "${cin}" />
<button class="btn"style="background: #6B979C;
color: #fff;" onclick="validate(${index})">Validate</button>
 </div>
</div>`;
  document.getElementById("updateStudiant").innerHTML = content;
}
// validation de la modification du student
function validate(i) {
  var usersTab = JSON.parse(localStorage.getItem("users"));
  var name = document.getElementById("newName").value;
  var lName = document.getElementById("newLName").value;
  var email = document.getElementById("newEmail").value;
  var cin = document.getElementById("newCin").value;
  usersTab[i].firstName = name;
  localStorage.setItem("users", JSON.stringify(usersTab));
  location.reload();
}
// consultation de toute les formations(Admin)
function checkTraining() {
  var trainingTab = JSON.parse(localStorage.getItem("training"));

  var content = "";
  for (var i = 0; i < trainingTab.length; i++) {
    content =
      content +
      `
    <tbody>
      <tr>
        <td>${trainingTab[i].id}</td>
        <td>${trainingTab[i].forName}</td>
        <td>${
          searchObjectByIdAndKey(trainingTab[i].idTrainer, "users").firstName
        } ${
        searchObjectByIdAndKey(trainingTab[i].idTrainer, "users").lastName
      }</td>
        <td>${trainingTab[i].cost}</td>
        <td>${trainingTab[i].period}</td>
        <td>${trainingTab[i].availableSeats}</td>
        <td><button class="btn"style="background: #6B979C;
        color: #fff;" onclick="deletetraining(${i})">Delete</button></td>
      </tr>
    </tbody>
    `;
  }
  document.getElementById("training").innerHTML = content;
}
// Suppression d'une formation(admin)
function deletetraining(index) {
  var trainingTab = JSON.parse(localStorage.getItem("training"));
  trainingTab.splice(index, 1);
  localStorage.setItem("training", JSON.stringify(trainingTab));
  location.reload();
}
// Consultation des formation d'un prof(Prof)
function checkMyTraining() {
  var tabTraining = JSON.parse(localStorage.getItem("training") || "[]");
  connectedUserId = localStorage.getItem("connectedUserId");
  var trainingTab = [];

  for (var i = 0; i < tabTraining.length; i++) {
    if (tabTraining[i].idTrainer == connectedUserId) {
      trainingTab.push(tabTraining[i]);
    }
  }
  var content = "";
  for (var i = 0; i < trainingTab.length; i++) {
    content =
      content +
      `
    <tbody>
      <tr>
        <td>${trainingTab[i].forName}</td>
        <td>${trainingTab[i].period}</td>
        <td>${trainingTab[i].availableSeats}</td>
        <td>${trainingTab[i].schedule}</td>
        <td>
       <button class="btn"style="background: #6B979C;
        color: #fff;" onclick="registeredStudent(${trainingTab[i].id})">Student List</button>
        <button class="btn"style="background:#6B979C;
        color: #fff;" onclick="addTest(${trainingTab[i].id})">Quiz</button>
        <button class="btn"style="background: #6B979C;
        color: #fff;" onclick="updateMyTraining(${trainingTab[i].id})">Update</button>
        <button class="btn"style="background: #6B979C;
        color: #fff;" onclick="deleteMyTraining(${trainingTab[i].id})">Delete</button>
        </td>

      </tr>
    </tbody>
    `;
  }
  document.getElementById("myTraining").innerHTML = content;
}
// Modifier une formation (Prof)
function updateMyTraining(id) {
  var tabTraining = JSON.parse(localStorage.getItem("training"));
  var content = "";
  for (var i = 0; i < tabTraining.length; i++) {
    if (tabTraining[i].id == id) {
      content = `<div class="row ">
  <div class="col-md-4"></div>

  <div class="col-md-4 form-group">
  <h3>Update</h3>
    <input
      type="text"
      name="name"
      class="form-control"
      id="newFormName"
      value="${tabTraining[i].forName}"
      required
    />
    <input
    type="Text"
    name="cost"
    class="form-control"
    id="newCost"
    value="${tabTraining[i].cost}"
    
  />
  <input
    type="Text"
    name="period"
    class="form-control"
    id="newPeriod"
    value="${tabTraining[i].period}"
    
  />
  <input
  type="Text"
  name="availableSeats"
  class="form-control"
  id="newSeat"
  value="${tabTraining[i].availableSeats}"
 
/>
<input
  type="Text"
  name="availableSeats"
  class="form-control"
  id="newSchedule"
  value="${tabTraining[i].schedule}"
 
/>
  </div>
  
</div><button class="btn mb-3" style="background: #6B979C;
color: #fff; " onclick="validateUpdateCourse(${tabTraining[i].id})">Validate</button>`;
    }
  }
  document.getElementById("updateCourse").innerHTML = content;
}
// sauvegarder l'update training
function validateUpdateCourse(id) {
  var trainingTab = JSON.parse(localStorage.getItem("training"));
  var name = document.getElementById("newFormName").value;
  var cost = document.getElementById("newCost").value;
  var period = document.getElementById("newPeriod").value;
  var seat = document.getElementById("newSeat").value;
  var schedule = document.getElementById("newSchedule").value;

  for (var i = 0; i < trainingTab.length; i++) {
    if (trainingTab[i].id == id) {
      trainingTab[i].forName = name;
      trainingTab[i].cost = cost;
      trainingTab[i].periode = period;
      trainingTab[i].availableSeats = seat;
      trainingTab[i].schedule = schedule;
    }
  }
  localStorage.setItem("training", JSON.stringify(trainingTab));
  location.reload();
}
function registeredStudent(id) {
  localStorage.setItem("displyedListStudent", id);
  location.replace("studentList.html");
}
// Afficher la liste des etudiants inscri à une formation
function registeredStudentList() {
  var registrationTab = JSON.parse(
    localStorage.getItem("registration") || "[]"
  );
  var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
  var identifiant = localStorage.getItem("displyedListStudent");
  
  var content = "";
  for (var i = 0; i < registrationTab.length; i++) {
    if (registrationTab[i].trainingId == identifiant) {
      for (var j = 0; j < usersTab.length; j++) {
        if (registrationTab[i].studentId == usersTab[j].id) {

          content = content+`
    
    <tr>
      <td>${usersTab[j].firstName}  ${usersTab[j].lastName}</td>
      <td>${registrationTab[i].note} </td>
      <td>${registrationTab[i].score}</td>
      <td>${registrationTab[i].scoreTest} </td>
      
      <td><button class="btn"style="background: #008ea1;
        color: #fff;" onclick="scoreNote(${i})">Evaluation</button>
        
        </td>
    </tr>
 `;
        }
      }
    }
  }
  document.getElementById("listStudent").innerHTML = content;
  document.getElementById("courseName").innerHTML = searchObjectByIdAndKey(
    identifiant,
    "training"
  ).forName;
}
// tri d'un tableau par score
function tri(){
  var T=JSON.parse(localStorage.getItem("registration") || "[]");
  var max;
 for(var i=0; i<(T.length)-1; i++){
  for(var j=i+1; j<T.length; j++){
   if(Number(T[i].scoreTest)<Number(T[j].scoreTest)){
    max=T[j];
    T[j]=T[i];
    T[i]=max;
   }
 }
}return T;}
// afficher la liste d'étudiant triées
function StoredStudentList() {
  var registrationT = JSON.parse(
    localStorage.getItem("registration") || "[]"
  );
  var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
  var identifiant = localStorage.getItem("displyedListStudent");
  var registrationTab=tri();
  console.log(registrationTab);
  var content = "";
  for (var i = 0; i < registrationTab.length; i++) {
    if (registrationTab[i].trainingId == identifiant) {
      for (var j = 0; j < usersTab.length; j++) {
        if (registrationTab[i].studentId == usersTab[j].id) {

          content = content+`
    
    <tr>
      <td>${usersTab[j].firstName}  ${usersTab[j].lastName}</td>
      <td>${registrationTab[i].note} </td>
      <td>${registrationTab[i].score}</td>
      <td>${registrationTab[i].scoreTest} </td>
      
      <td><button class="btn"style="background: #008ea1;
        color: #fff;" onclick="scoreNote(${i})">Evaluation</button>
        
        </td>
    </tr>
 `;
        }
      }
    }
  }
  document.getElementById("listStudent").innerHTML = content;
  document.getElementById("courseName").innerHTML = searchObjectByIdAndKey(
    identifiant,
    "training"
  ).forName;
}
//  donner une note à un student
function scoreNote(i) {
  var content = "";
  content = `   
  <div class="row ">
  <div class="col-md-3"></div>

  <div class="col-md-6 form-group">
  <h3>Add Score And Note</h3>
    <input
      type="number"
      name="score"
      class="form-control"
      id="score"
      placeholder="Score"
      required
    />
    <input
    type="Text"
    name="note"
    class="form-control"
    id="note"
    placeholder="Note"
    required
  />
  </div>
  
</div><button class="btn mb-3" style="background: #6B979C;
color: #fff; " onclick="confirmScore(${i})">Confirm</button>`;
  document.getElementById("scoreNote").innerHTML = content;
}

function confirmScore(i) {
  var score = document.getElementById("score").value;
  var note = document.getElementById("note").value;
  var registrationTab = JSON.parse(localStorage.getItem("registration"));
 
  registrationTab[i].note = note;
  registrationTab[i].score = score;

  localStorage.setItem("registration", JSON.stringify(registrationTab));
  location.reload();
}

// suppression d'une  formation (accés Prof)
function deleteMyTraining(id) {
  var tabTraining = JSON.parse(localStorage.getItem("training"));
  for (var i = 0; i < tabTraining.length; i++) {
    if (tabTraining[i].id == id) {
      tabTraining.splice(i, 1);
      localStorage.setItem("training", JSON.stringify(tabTraining));
      break;
    }
  }
  location.reload();
}
// reccupérer la liste des etudiant inscrits à une formation(Prof)
function myTrainingList() {
  var connectedUserId = localStorage.getItem("connectedUserId");
  var registrationTab = JSON.parse(localStorage.getItem("registration"));
  for (var i = 0; i < registrationTab.length; i++) {
    if (registrationTab[i].ProffesorId == connectedUserId) {
      var name = searchObjectByIdAndKey(
        registrationTab[i].ProffesorId,
        "users"
      ).firstName;
      var lName = searchObjectByIdAndKey(
        registrationTab[i].ProffesorId,
        "users"
      ).lastName;
    }
  }
}
// Affichage de tout les prof sur l'accueil
function displayTrainer() {
  var usersTab = JSON.parse(localStorage.getItem("users"));
  var trainersTab = [];
  var content = "";
  for (var i = 0; i < usersTab.length; i++) {
    if (usersTab[i].role == "Professor") {
      trainersTab.push(usersTab[i]);
    }
  }

  for (var i = 0; i < trainersTab.length; i++) {
    content =
      content +
      `<div class="col-lg-4 col-md-6 d-flex align-items-stretch">
      <div class="member">
      <img src="assets/img/trainers/trainer-1.jpg" class="img-fluid" alt="">
      <div class="member-content">
        <h4>${trainersTab[i].firstName} ${trainersTab[i].lastName}</h4>
        <span>${trainersTab[i].speciality}</span>
        <p>
        ${trainersTab[i].description}
        </p>
        <div class="social">
          <a href=""><i class="bi bi-twitter"></i></a>
          <a href=""><i class="bi bi-facebook"></i></a>
          <a href=""><i class="bi bi-instagram"></i></a>
          <a href=""><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
    </div>
  </div>`;
  }
  document.getElementById("trainer").innerHTML = content;
}
// afficher les formations dans lesquelles je suis inscri
function displayMyTrainer() {
  var usersTab = JSON.parse(localStorage.getItem("users"));
  var registrationTab = JSON.parse(localStorage.getItem("registration"));
  var connectedUserId = localStorage.getItem("connectedUserId");
  var trainersTab = [];
  var content = "";

  for (var i = 0; i < registrationTab.length; i++) {
    if (registrationTab[i].studentId == connectedUserId) {
      trainersTab.push(
        searchObjectByIdAndKey(registrationTab[i].proffesorId, "users")
      );
    }
  }
  console.log(trainersTab);
  for (var i = 0; i < trainersTab.length; i++) {
    content =
      content +
      `<div class="col-lg-4 col-md-6 d-flex align-items-stretch">
    <div class="member">
      <img src="assets/img/trainers/trainer-1.jpg" class="img-fluid" alt="">
      <div class="member-content">
        <h4>${trainersTab[i].firstName} ${trainersTab[i].lastName}</h4>
        <span>${trainersTab[i].speciality}</span>
        <p>
        ${trainersTab[i].speciality}
        </p>
        <div><button class="btn"  style="background:#6B979C;
        color: #fff;" onclick="opinion(${trainersTab[i].id})">Leave Your Opinion</button></div>
        <div class="social">
          <a href=""><i class="bi bi-twitter"></i></a>
          <a href=""><i class="bi bi-facebook"></i></a>
          <a href=""><i class="bi bi-instagram"></i></a>
          <a href=""><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
    </div>
  </div>`;
  }
  document.getElementById("trainer").innerHTML = content;
  if (trainersTab.length == 0) {
    document.getElementById("trainer").innerHTML ="You Are Not Yet Registered For A Training";
    document.getElementById("trainer").style.color ="#C44C51";
      
  }
}
// saisir un avis etudiant pour son Prof
function opinion(id) {
  var content = "";
  content =
    content +
    `
  <div class="row" >
  <div class="col-lg-4 col-md-6"></div>
  <div class="col-lg-4 col-md-6">
    <textarea style="position: relative;
    display: inline-block;
    background-color:#EFF0FF; height:60px;
    color: black;
    padding: 15px;
    text-align: center;
    display: inline-block;
    font-size: 16px;" type="text" name="name" class="form-control" id="opinion" placeholder="Write Here..."></textarea>
    <button class="btn" style="background:#008ea1;
    color: #fff;" onclick="sendMessage(${id})">Send</button>
</div>
</div>`;
  document.getElementById("giveOpinion").innerHTML = content;
}
// sauvegarder l'avis de l'etudiant dans le LS
function sendMessage(id) {
  var connectedUserId = localStorage.getItem("connectedUserId");
  var msg = document.getElementById("opinion").value;
  var msgTab = JSON.parse(localStorage.getItem("msg") || "[]");
  alert (id);
  var message = {
    msg: msg,
    studentId: connectedUserId,
    trainerId:id,
  };
  msgTab.push(message);
  localStorage.setItem("msg", JSON.stringify(msgTab));
  document.getElementById("giveOpinion").innerHTML =
    "We would be happy to know your opinion!";
  document.getElementById("giveOpinion").style.color = "#008ea1";
}

// Affichage des temoignages
function testimony() {
  var content = "";

  var msgTab = JSON.parse(localStorage.getItem("msg") || "[]");
  for (var i = 0; i < msgTab.length; i++) {
    content =
      content +
      `<div class="swiper-slide">
  <div class="testimonial-wrap">
    <div class="testimonial-item">
      <img src="assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt="">
      <h3>${searchObjectByIdAndKey(msgTab[i].studentId, "users").firstName} ${
        searchObjectByIdAndKey(msgTab[i].studentId, "users").lastName
      }</h3>
      <h4>Trainer: ${searchObjectByIdAndKey( msgTab[i].trainerId, "users").firstName} ${searchObjectByIdAndKey( msgTab[i].trainerId, "users").lastName}</h4>
      <p>
        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
        ${msgTab[i].msg}
        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
      </p>
    </div>
  </div>
</div>`;
  }
  document.getElementById("comment").innerHTML = content;
}
function sendContactMsg(){
  var connectedUserId = localStorage.getItem("connectedUserId");
  var contMsg = document.getElementById("contactMsg").value;
  var subject = document.getElementById("subject").value;
  var email= document.getElementById("email").value;
  var msgTab = JSON.parse(localStorage.getItem("contactMsg") || "[]");
  alert(msgTab);
  var message = {
    subject :subject ,
    email:email,
    contMsg:contMsg,
    userId: connectedUserId,
    msgTo: "admin",
  };
  msgTab.push(message);
  localStorage.setItem("contactMsg", JSON.stringify(msgTab));
  
    location.reload();
}
// affichage du msg sur la page 
function contactMsg() {
  var content = "";
var connectedUserId=localStorage.getItem("connectedUserId");
  var msgTab = JSON.parse(localStorage.getItem("contactMsg") || "[]");
  for (var i = 0; i < msgTab.length; i++) {
    if(msgTab[i].msgTo== connectedUserId){
    content =
      content +
      `<div  >
  <div class="testimonial-wrap col-lg-8">
    <div class="testimonial-item">
      <h3>${searchObjectByIdAndKey(msgTab[i].userId, "users").firstName} ${
        searchObjectByIdAndKey(msgTab[i].userId, "users").lastName
      }</h3>
      <h4>Email:${msgTab[i].email}</h4>
      <h4>Subject:${msgTab[i].subject}</h4>
      <p>
        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
        ${msgTab[i].contMsg}
        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
      </p>
      <button class="btn myBtn">Delete</button>
      <button class="btn myBtn" onclick="reply(${msgTab[i].userId})">Reply</button>
    </div>
  </div>
</div>`;
  }}
  document.getElementById("contMsg").innerHTML = content;
}
function reply(id){
  alert(id);
 var content="";
 content = `<tr>
 <td><textarea id="response" placeholder="      ..."></textarea></td>
 <td><button class="ml-5 btn myBtn"onclick="replyMsg(${id})">Send<button></td>
 </tr>`;
 document.getElementById("reply").innerHTML=content;
}
function replyMsg(id){
  alert(id);
var msg= document.getElementById("response").value;
var msgTab=JSON.parse(localStorage.getItem("contactMsg"));
var connectedUserId=localStorage.getItem("connectedUserId");
var message = {
  contMsg:msg,
  userId: connectedUserId,
  msgTo:id,
};
msgTab.push(message);
localStorage.setItem("contactMsg", JSON.stringify(msgTab));}
// afficher le msg sur la page student
function msg(){
  var connectedUserId=localStorage.getItem("connectedUserId");
var content="";
var msgTab = JSON.parse(localStorage.getItem("contactMsg") || "[]");
  for (var i = 0; i < msgTab.length; i++) {
    if(msgTab[i].msgTo == connectedUserId){
    content =
      content +
      `<div  >
  <div class="testimonial-wrap col-lg-8">
    <div class="testimonial-item">
      <h3>${searchObjectByIdAndKey(msgTab[i].userId, "users").firstName} ${
        searchObjectByIdAndKey(msgTab[i].userId, "users").lastName
      }</h3>
      
      <p>
        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
        ${msgTab[i].contMsg}
        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
      </p>
      <button class="btn myBtn">Delete</button>
      <button class="btn myBtn" onclick="replyStudent(${msgTab[i].userId})">Reply</button>
    </div>
  </div>
</div>`;}

document.getElementById("myMsg").innerHTML=content;}
}
function replyStudent(id){
  var content="";
  content = `<tr>
  <td><textarea id="response" placeholder="      ..."></textarea></td>
  <td><button class="ml-5 btn myBtn"onclick="replyMsg(${id})">Send<button></td>
  </tr>`;
  document.getElementById("replyStudent").innerHTML=content;
}
// Sauvegarde de l'id de la formation pour laquelle je compte ajouter un test
function addTest(id) {
  localStorage.setItem("trainingtestId", id);
  location.replace("exam.html");
}
// ajout d'un test
function test() {
  var content = "";
  content = ` <div class="row mt-5">

  <div class="col-lg-2 mt-5 mt-lg-0"></div>
  <div class="col-lg-8 mt-5 mt-lg-0">

  <form  role="form" class="php-email-form">
  <div class="row">
  <div class="col-md-2 form-group"></div>
    <div class="col-md-6 form-group">
    
      <input type="text" name="question" class="form-control" id="question" placeholder= "Question">
    </div>
      <div class="col-md-3 form-group">
      <input type="text" name="answer1" class="form-control" id="resp1" placeholder= "Response 1">
      <input type="text" name="answer2" class="form-control" id="resp2" placeholder= "Response 2">
      <input type="text" name="answer3" class="form-control" id="resp3" placeholder= "Response 3">
      <input type="text" name="answer3" class="form-control" id="resp" placeholder= "Right Answer Number ">
    </div>
    </div>
 
  <div class="text-center"> 
  <button class="btn" style="background: #6B979C;
  color: #fff; font-family: Poppins; margin-left:50%;" onclick="sendTest()">Send Test</button>
  </div>
</form>
    
  </div>
</div>`;
  document.getElementById("test").innerHTML = content;
}
// Sauvegarde du test préparer par le prof dans le Ls
function sendTest() {
  var question = document.getElementById("question").value;
  var resp1 = document.getElementById("resp1").value;
  var resp2 = document.getElementById("resp2").value;
  var resp3 = document.getElementById("resp3").value;
  var resp = document.getElementById("resp").value;
  var connectedUserId = localStorage.getItem("connectedUserId");
  var examTab = JSON.parse(localStorage.getItem("exam") || "[]");
  var idQuiz = localStorage.getItem("idquiz") || "1";
  var trainingId = localStorage.getItem("trainingtestId");
  var quiz = {
    id: idQuiz,
    question: question,
    resp1: resp1,
    resp2: resp2,
    resp3: resp3,
    resp: resp,
    trainerId: connectedUserId,
    trainingId: trainingId,
  };
  examTab.push(quiz);
  localStorage.setItem("exam", JSON.stringify(examTab));
  localStorage.setItem("idquiz", Number(idQuiz)+1);
}
// Chercher les exam d'un etudiant x 
function myExam(id){
  var exam = JSON.parse(localStorage.getItem("exam")) || "[]";
  var registrationTab= JSON.parse(localStorage.getItem("registration")) || "[]";
  var myExamTab=[];
for (var i=0; i<registrationTab.length;i++){
  if(registrationTab[i].studentId==id){
     for(var j=0; j< exam.length; j++){
       if(registrationTab[i].trainingId==exam[j].trainingId){
         myExamTab.push(exam[j]);
        }}}}
        return myExamTab;
       }
// affichage du test pour l'étudiant
function displayExam() {
  var content = "";
  connectedUserId=localStorage.getItem("connectedUserId");
  var exam=myExam(connectedUserId);
  var testDoneTab=JSON.parse(localStorage.getItem("testDone")||"[]");
  alert(testDoneTab.length)
  if(exam.length==0){
    document.getElementById("myTest").innerHTML = "No Test.";
    document.getElementById("myTest").style.color = "#C44C51";
}
  else{
    
  for(var j=0; j<exam.length;j++){
     
   if(testDoneTab.length == 0 || (testDoneTab.length!=0 && !findedobject(exam[j].trainingId) )){
  
    var k= localStorage.getItem("playQuiz") || "0" ;

     content = ` <h3 class="text-center mb-4" style="color:#008ea1;">Test( Session ${ searchObjectByIdAndKey(
       exam[j].trainingId,
       "training"
     ).forName})
     </h3 > <div class="container" data-aos="fade-up" >
       <h5>Enter the number of the correct answer.</h5>
       <p class="mt-2">${exam[j].question}:</p>
       <div class="form-check">
         
         <label class="form-check-label" for="flexRadioDefault1">
          1. ${exam[j].resp1}
         </label>
        
       </div>
       <div class="form-check">
         
         <label class="form-check-label" for="flexRadioDefault2">
         2.${exam[j].resp2}
         </label>
       </div>
     
       <div class="form-check">
        
         <label class="form-check-label" for="flexRadioDefault3">
         3. ${exam[j].resp3}
         </label>
       </div>
     <input style="margin-left: 5%; width:5%;" id="respUser"><br>
     <button class="btn mt-3 " style="background: #6B979C;
     color: #fff; font-family: Poppins; margin-left: 5%; " onclick="next(${exam[j].id},)">Submit Answer>></button>
     </div>
     </div>`;
     localStorage.setItem("playQuiz", k);
     document.getElementById("myTest").innerHTML = content;}
     if(findedobject(exam[j].id)){  document.getElementById("myTest").innerHTML = "You Have Already Taken The Exam";
     document.getElementById("myTest").style.color = "#C44C51";}
   
  }}}

// confirmer la reponse du test
function next(id,k) {
  
  var examT=JSON.parse(localStorage.getItem("exam"));
  var testTab=JSON.parse(localStorage.getItem("testDone")||"[]");
  var connectedUserId=localStorage.getItem("connectedUserId");
  for(var i=0; i<examT.length;i++){
   
    if(examT[i].id==id){
      

  var testOk={
    id:examT[i].id,
    trainerId:examT[i].trainerId,
    idStudent:connectedUserId,
    trainingId:examT[i].trainingId,
  };
  console.log(testOk);
  testTab.push(testOk);
  localStorage.setItem("testDone", JSON.stringify(testTab));}}
  
  
  var exam=myExam(connectedUserId);
  
  var registrationTab = JSON.parse(localStorage.getItem("registration"));
  var j = localStorage.getItem("playQuiz");
  var userAnswer;
  userAnswer = document.getElementById("respUser").value;
  if (userAnswer == exam[j].resp) {
    for (var i = 0; i < registrationTab.length; i++) {
      if (registrationTab[i].studentId == connectedUserId) {
        registrationTab[i].scoreTest = Number(registrationTab[i].scoreTest) + 10;
        localStorage.setItem("registration", JSON.stringify(registrationTab));
        break;
      }
    }
  }

  j = Number(j) + 1;
  if ((j == exam.length)) {
    document.getElementById("myTest").innerHTML = "Test Completed!";
    document.getElementById("myTest").style.color = "#008ea1";

    localStorage.removeItem("playQuiz");
    location.replace("index.html");
  } else {
    localStorage.setItem("playQuiz", j);
    location.reload();
  }
}
function findedobject(id){
  var T=JSON.parse(localStorage.getItem("testDone")||"[]");
  var connectedUserId=JSON.parse(localStorage.getItem("connectedUserId"));
  var finded;
  for(var i=0; i<T.length; i++){
    if(T[i].trainingId == id && T[i].idStudent== connectedUserId){
      finded=T[i];
    }
  }
return finded;
}
function fidedUser(id) {
  var T=JSON.parse(localStorage.getItem("testDone")||"[]");
for(var i=0; i<T.length; i++){
  if(T[i].idStudent== id){
    finded=T[i];
  }
}
return finded;
}
// vérification si deux chaine sont égaux
function correct(ch1, ch2) {
  if (ch1 == ch2) {
    return true;
  }
}
// Compteur du staf smart
function counter() {
  var trainingTab = JSON.parse(localStorage.getItem("training"));
  var usersTab = JSON.parse(localStorage.getItem("users"));
  var nbStudent = 0;
  var nbTrainer = 0;
  for (var i = 0; i < usersTab.length; i++) {
    if ((usersTab[i].role == "Student")) nbStudent++;
    else if ((usersTab[i].role== "Professor")) 
      nbTrainer++;
  }
 
  var content = "";
  content = `  <div class="row counters">

  <div class="col-lg-4 col-10 text-center">
    <span data-purecounter-start="0" data-purecounter-end=${nbStudent} data-purecounter-duration="1" class="purecounter"></span>
    <p>Students</p>
  </div>

  <div class="col-lg-4 col-10 text-center">
    <span data-purecounter-start="0" data-purecounter-end=${trainingTab.length} data-purecounter-duration="1" class="purecounter"></span>
    <p>Courses</p>
  </div>
  <div class="col-lg-4 col-10 text-center">
    <span data-purecounter-start="0" data-purecounter-end=${nbTrainer} data-purecounter-duration="1" class="purecounter"></span>
    <p>Trainers</p>
  </div>

</div>`;
  document.getElementById("counter").innerHTML = content;
}
function myregistrationList(){
 
    var trainingTab = JSON.parse(localStorage.getItem("training") || "[]");
    var registrationTab= JSON.parse(localStorage.getItem("registration") || "[]");
    var connectedUserId=localStorage.getItem("connectedUserId");
    var content = "";
   
    for (var i = 0; i < registrationTab.length; i++) {
      if (registrationTab[i].studentId == connectedUserId) {
        alert("hi");
        for(var j=0; j< trainingTab.length;j++){
          if(registrationTab[i].trainingId==trainingTab[j].id){
            alert("hi")
      content =
        content +
        ` <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
    <div class="course-item">
      <img src="assets/img/course-1.jpg" class="img-fluid" alt="...">
      <div class="course-content">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h4>${trainingTab[j].forName}</h4>
          <p class="price">$ ${trainingTab[j].cost}</p>
        </div>
  
        <h3><a href="course-details.html">${trainingTab[j].forName}</a></h3>
        <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
        <div class="trainer d-flex justify-content-between align-items-center">
          <div class="trainer-profile d-flex align-items-center">
            <img src="assets/img/trainers/trainer-1.jpg" class="img-fluid" alt="">
            <span>${
              searchObjectByIdAndKey(trainingTab[j].idTrainer, "users").firstName
            }${
          searchObjectByIdAndKey(trainingTab[j].idTrainer, "users").lastName
        }</span>
          </div>
          
          <div class="d-flex  align-items-center mb-3">
         <button class="btn " style="background:#6B979C;
         color: #fff;"onclick="displyedTrainnig(${
           trainingTab[j].id
         })">Display</button>
           </div>
        </div>
      </div>
    </div>
  </div> `;
    }}
    document.getElementById("myRegistration").innerHTML = content;}
    
  }
}
