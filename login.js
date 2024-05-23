
const loaddata = () => {
    userinfo = JSON.parse(localStorage.getItem("userinfo")) || { name: [], email: [], password: [] };
};


const addlogindata = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;
    const userinfoJSON = localStorage.getItem("userinfo");
    const userinfo = userinfoJSON ? JSON.parse(userinfoJSON) : { name: [], email: [], password: [] };
    
    const index = userinfo.name.indexOf(name);
    
    if (index !== -1 && userinfo.password[index] === password) {
        console.log("Logged in successfully!");
        window.location.replace("home.html");
    } else { 
        userinfo.name.push(name);
        userinfo.email.push(email);
        userinfo.password.push(password);
        localStorage.setItem("userinfo", JSON.stringify(userinfo));
        console.log("User registered successfully!");
    }
};

let userinfo;
loaddata();
