loaddata();
figma = "https://static-00.iconduck.com/assets.00/apps-figma-icon-512x512-uapiauws.png";
netflix = "https://static-00.iconduck.com/assets.00/apps-netflix-icon-512x512-gni9c4qs.png";
illustrator = "https://static-00.iconduck.com/assets.00/adobe-illustrator-icon-512x512-s1nfujvx.png";
photoshop = "https://static-00.iconduck.com/assets.00/adobe-photoshop-icon-512x512-sphmjz8h.png";
framer = "https://cdn.dribbble.com/users/4878/screenshots/15802274/media/8f63cece88fccd2a614f791e5fbec240.png?resize=1000x750&vertical=center";

localStorage.removeItem("appslists")

var applists = {
    "name": [],
    "img": [],
    "billing": [],
    "date": [],
    "status": []
};

function loaddata(){
    if (!applists) {
applists = JSON.parse(localStorage.getItem("applists")) || {
    "name": [],
    "img": [],
    "billing": [],
    "date": [],
    "status": []
};
}
    console.log(applists);
    for (let i = 0; i < applists.name.length; i++) {
    addapp(applists.name[i], applists.img[i], applists.billing[i], applists.date[i], applists.status[i]);
}
    
}

function showapp(name, appsname) {
    const apps = document.getElementsByClassName(name)[0];
    const blur = document.getElementsByClassName("blur")[0];
    const appname = document.getElementById("appname")
    if (name == "appstxt") {
        if (apps.style.display === "flex") {
            apps.style.display = "none";

        } else {
            apps.style.display = "flex";
            blur.style.display = "block";
            appname.innerHTML = appsname;
        }
    } else {
        if (apps.style.display === "flex") {
            apps.style.display = "none";
            blur.style.display = "none";

        } else {
            apps.style.display = "flex";
            blur.style.display = "block";
            appname.innerHTML = appsname;
        }
    }
}



function adddata() {
    const name = document.getElementById("appname").innerHTML
    const price = document.getElementById("price").value;
    const date = document.getElementById("date").value;
    const status = document.getElementById("status").value;
    if (applists.name.includes(name)) {
        alert("This app already exists.");
        return;
    }
    if (name == "photoshop") {
        img = photoshop
    } else if (name === "illustrator") {
        img = illustrator
    } else if (name === "netflix") {
        img = netflix
    } else if (name === "figma") {
        img = figma
    } else if (name === "framer") {
        img = framer
    }

    if (price == "" || date == "") {
        alert("enter the info ")
    } else {
        applists["name"].push(name);
        applists["img"].push(img);
        applists["billing"].push(price);
        applists["date"].push(date);
        applists["status"].push(status);

        localStorage.setItem("applists", JSON.stringify(applists));
        addapp(name, img, price, date, status);
    }

}

function addapp(names, imgs, prices, dates, statuss) {
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
    dateElement.innerHTML = dates;

    const statusElement = document.createElement('td');
    statusElement.innerHTML = statuss;

    const btn = document.createElement('td');
    const cancel = document.createElement('button');
    cancel.innerHTML = "Cancel Membership";
    cancel.id = "cancel";
    tr.classList.add(names);
    cancel.onclick = function () {
        cancelmembership(names);
    };
    btn.appendChild(cancel);

    logo.appendChild(imgElement);
    logo.appendChild(nameElement);
    tr.appendChild(logo);
    tr.appendChild(priceElement);
    tr.appendChild(dateElement);
    tr.appendChild(statusElement);
    tr.appendChild(btn);

    tablebody.appendChild(tr);  
  
    apps.style.display = "none";
    app.style.display = "none";
    blur.style.display = "none";
}

function cancelmembership(name) {
    tr = document.getElementsByClassName(name)[0];
    
    if(tr){
        tr.remove();
    }
    for (let i = 0; i < applists.name.length; i++) {
        if (name == applists.name[i]) {
            applists.name.splice(i, 1);
            applists.img.splice(i, 1);
            applists.billing.splice(i, 1);
            applists.date.splice(i, 1);
            applists.status.splice(i, 1);
            break;
        }
    }
    localStorage.setItem("applists", JSON.stringify(applists));
}
