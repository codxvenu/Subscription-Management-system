const navigation = () =>{
    const sidebar = document.getElementsByClassName("sidebar")[0];
    const topnav = document.getElementsByClassName("topnav")[0];
    if(sidebar.style.display == "none"){
        sidebar.style.display = "flex";
        topnav.style.display = "none";
    }else{
        sidebar.style.display ="none";
        topnav.style.display ="flex";

    }
};


const loaddata = () => {
    applists = JSON.parse(localStorage.getItem("applists")) || { name: [], img: [], billing: [], date: [], status: [] };
    for (let i = 0; i < applists.name.length; i++) {
        addapp(applists.name[i], applists.img[i], applists.billing[i], applists.date[i], applists.status[i]);
    }
};

const showapp = (name, appsname) => {
    const apps = document.getElementsByClassName(name)[0];
    const blur = document.getElementsByClassName("blur")[0];
    const appname = document.getElementById("appname");
    if (apps.style.display === "flex") {
        apps.style.display = blur.style.display = "none";
    } else {
        apps.style.display = "flex";
        blur.style.display = "block";
        appname.innerHTML = appsname;
    }
};

const adddata = () => {
    const name = document.getElementById("appname").innerHTML;
    const price = document.getElementById("price").value;
    const date = document.getElementById("date").value;
    const status = document.getElementById("status").value;
    let img = { photoshop, illustrator, netflix, figma, framer }[name.toLowerCase()];
    if (applists.name.includes(name)) return alert("This app already exists.");
    if (price == "" || date == "") return alert("Enter the info");
    applists.name.push(name);
    applists.img.push(img);
    applists.billing.push(price);
    applists.date.push(date);
    applists.status.push(status);
    localStorage.setItem("applists", JSON.stringify(applists));
    addapp(name, img, price, date, status);
};

const addapp = (names, imgs, prices, dates, statuss) => {
    const apps = document.getElementsByClassName("appstxt")[0];
    const app = document.getElementsByClassName("addapps")[0];
    const blur = document.getElementsByClassName("blur")[0];
    const tablebody = document.getElementById("tablebody");
    const tr = document.createElement('tr');
    const logo = document.createElement('td');
    logo.classList.add("logo");
    const nameElement = document.createElement('h3');
    nameElement.innerHTML = names;
    const imgElement = document.createElement('img');
    imgElement.src = imgs;
    const priceElement = document.createElement('td');
    priceElement.innerHTML = prices;
    const dateElement = document.createElement('td');
    const datename = document.createElement("h3")
    datename.innerHTML = dates;
    const statusElement = document.createElement('td');
    statusElement.innerHTML = statuss;
    const btn = document.createElement('td');
    const cancel = document.createElement('button');
    cancel.innerHTML = "Cancel Membership";
    cancel.id = "cancel";
    tr.classList.add(names);
    cancel.onclick = () => cancelmembership(names);
    btn.appendChild(cancel);
    logo.appendChild(imgElement);
    logo.appendChild(nameElement);
    dateElement.appendChild(datename)
    tr.append(logo, priceElement, dateElement, statusElement, btn);
    tablebody.appendChild(tr);
    apps.style.display = app.style.display = blur.style.display = "none";
};

const cancelmembership = (name) => {
    const tr = document.getElementsByClassName(name)[0];
    if (tr) tr.remove();
    const index = applists.name.indexOf(name);
    if (index !== -1) {
        applists.name.splice(index, 1);
        applists.img.splice(index, 1);
        applists.billing.splice(index, 1);
        applists.date.splice(index, 1);
        applists.status.splice(index, 1);
    }
    localStorage.setItem("applists", JSON.stringify(applists));
};

const figma = "https://static-00.iconduck.com/assets.00/apps-figma-icon-512x512-uapiauws.png";
const netflix = "https://static-00.iconduck.com/assets.00/apps-netflix-icon-512x512-gni9c4qs.png";
const illustrator = "https://static-00.iconduck.com/assets.00/adobe-illustrator-icon-512x512-s1nfujvx.png";
const photoshop = "https://static-00.iconduck.com/assets.00/adobe-photoshop-icon-512x512-sphmjz8h.png";
const framer = "https://cdn.dribbble.com/users/4878/screenshots/15802274/media/8f63cece88fccd2a614f791e5fbec240.png?resize=1000x750&vertical=center";

userinfo = JSON.parse(localStorage.getItem("userinfo")) || { name: [], email: [], password: [] };

const names = document.getElementById("name");
names.innerHTML = userinfo.name[0];
let applists;
loaddata();