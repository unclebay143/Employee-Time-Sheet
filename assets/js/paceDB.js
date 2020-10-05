/*
                THIS SCRIPT 
                
 > handles the registration details of new clients 
and
 > create local storage for their employees

*/ 

let checkDb = JSON.parse(localStorage.getItem("paceDB"));
if(checkDb == null) // if paceDB does not exist create one 
{

  checkDb=[]

}
let getUserDetails = () =>
{ // function to get all user's details from registration form
  
  companyName = document.getElementById("name").value;
  companyEmail = document.getElementById("email").value;
  companyTel = document.getElementById("phone").value;
  companyType = document.getElementById("type").value;
  companyUrl = document.getElementById("url").value;
  companyPassword = document.getElementById("password").value;
  company2Password = document.getElementById("cpassword").value;
  logoOption = document.getElementById("logo");
  companyLogo = logoOption.options[logoOption.selectedIndex].text;

  if (companyPassword == company2Password)
  {  // validate password and confirm password before storage

    switch(companyLogo)
    {// check which logo is selected
  
      case "Business":
        return companyLogo = "business_avatar.png";
        break;
  
      case "Engineer":
        companyLogo = "engineer_avatar.jpg";
        break;
  
      case "Information Technology":
        companyLogo = "information_tech_avatar.jpg";
        break;
  
      case "Medicine":
        companyLogo = "medic_avatar.png";
        break;
  
      case "Security":
        companyLogo = "security_avatar.png";
        break;
  
      case "Software":
        companyLogo = "software_avatar.jpg"
        break;
  
      default:
        companyLogo = "no_profile_img.png"
    }
  

        
    // create local storage for new company employee
    
    let _employee_Db = JSON.parse(localStorage.getItem(`${companyName}_employees`));

    if(_employee_Db === null || _employee_Db === undefined) 
    {// if company local storage does not exist create one 

      _employee_Db = []

    }

    let sample = [
        {
        "name":"Sample Name",
        "role":"Engineer",
        "phone":"08038157444",
        "joining_date" : Date.now()
        },
    ]

    localStorage.setItem(`${companyName}_employees`, JSON.stringify(sample))


// staging new company details for storage

    let newCompany = {
      "name" : companyName,
      "email" : companyEmail,
      "phone" : companyTel,
      "type" : companyType,
      "password" : companyPassword,
      "url" : companyUrl,
      "logo" : companyLogo,
      "employeeDb" : localStorage.getItem(`${companyName}_employees`),
      "user_type" : "admin"
    }
    
    checkDb.push(newCompany)

    // push new company information into the local storage
    localStorage.setItem("paceDB", JSON.stringify(checkDb))
    validateReg()

  }

  else

  {

    alert("Password Mismatch")

  }

}

