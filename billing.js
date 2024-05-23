const cardnumber = document.getElementsByClassName("card-number")[0];
const month = document.getElementsByClassName("Month")[0];
const year = document.getElementsByClassName("Year")[0];
const cvv = document.getElementsByClassName("cvv")[0];
cardnumber.maxLength = 16;
month.maxLength = 2;
year.maxLength = 4;
cvv.maxLength = 3;


const navigation = () => {
    const sidebar = document.getElementsByClassName("sidebar")[0];
    const topnav = document.getElementsByClassName("topnav")[0];
    if (sidebar.style.display == "none") {
        sidebar.style.display = "flex";
        topnav.style.display = "none";
    } else {
        sidebar.style.display = "none";
        topnav.style.display = "flex";

    }
};
const loaddata = () => {
    cardlists = JSON.parse(localStorage.getItem("cardlists")) || { name: [], img: [], cardnumber: [], date: [], cvv: [] };
    infomationlists = JSON.parse(localStorage.getItem("applists")) || { billing: [], date: [], status: [] };
    for (let i = 0; i < cardlists.name.length; i++) {
        addcard(cardlists.name[i], cardlists.cardnumber[i], cardlists.date[i], cardlists.cvv[i], cardlists.img[i]);
    }
    for (let i = 0; i < infomationlists.billing.length; i++) {
        addpayment(infomationlists.billing[i], infomationlists.date[i], infomationlists.status[i]);
    }
    for (let i = 0; i < infomationlists.billing.length; i++) {
        addtransactions( infomationlists.name[i],infomationlists.billing[i], infomationlists.date[i],  infomationlists.status[i]);
    }
};

const showcard = (cardname) => {
    const cardnum = document.getElementsByClassName("cardnum")[0];
    const appname = document.getElementsByClassName("appname")[0];
    const blur = document.getElementsByClassName("blur")[0];

    if (cardnum.style.display == "none") {
        blur.style.display = cardnum.style.display = "flex"

    } else {
        blur.style.display = cardnum.style.display = "none"
    }
    appname.innerHTML = cardname;

};

const adddata = () => {
    const cardnumber = document.getElementsByClassName("card-number")[0].value;
    const name = document.getElementsByClassName("appname")[0].innerHTML
    const month = document.getElementsByClassName("Month")[0].value;
    const year = document.getElementsByClassName("Year")[0].value;

    const date = month + "/" + year;
    const cvv = document.getElementsByClassName("cvv")[0].value;


    if (name.toLowerCase == "visa") { img = visaback } else { img = masterback };
    if (cardlists.name.includes(name)) return alert("This card already exists.");
    if (month == "" || year == "" || cvv == "") return alert("Enter the info");
    cardlists.name.push(name);
    cardlists.img.push(img);
    cardlists.cardnumber.push(cardnumber);
    cardlists.date.push(date);
    cardlists.cvv.push(cvv);
    localStorage.setItem("cardlists", JSON.stringify(cardlists));
    addcard(name, cardnumber, date, cvv, img);
};


const addcard = (cardname, num, expiry, cvv, img) => {
    const cardnum = document.getElementsByClassName("cardnum")[0];
    let nocontent = document.getElementsByClassName("nocontent")[0];
    const nocontentvisa = document.getElementsByClassName("nocontentvisa")[0];
    const blur = document.getElementsByClassName("blur")[0];
    card = document.getElementsByClassName("card")[0];
    card_visa = document.getElementsByClassName("visa")[0];
    const master = document.getElementById("master");
    const visa = document.getElementById("visa");
    const imgs = document.createElement("img");
    imgs.src = img;
    const div = document.createElement("div");
    div.classList.add("txt");
    const h3 = document.createElement("h3");
    h3.innerHTML = num;
    const heading = document.createElement("a");
    // const valids = document.createElement("small");
    const hcvvs = document.createElement("small");
    const small = document.createElement("small");
    small.innerText = "VALID THRUV"
    hcvvs.innerText = "CVV"
    const info = document.createElement("a");
    const expirys = document.createElement("small");
    expirys.innerHTML = expiry;
    const cvvs = document.createElement("small");
    cvvs.innerHTML = cvv;
    if (cardname.toLowerCase() == "visa") { card = card_visa; card.classList.add("visa"); visa.value = num; nocontent = nocontentvisa; card.style.backgroundImage = `url('${visabg}')` } else { master.value = num; nocontent = nocontent; card.style.backgroundImage = `url(${masterbg})` }
    card.appendChild(imgs);
    card.appendChild(div);
    div.appendChild(h3);
    div.appendChild(heading);
    div.appendChild(info);
    heading.appendChild(small);
    heading.appendChild(hcvvs);
    info.appendChild(expirys);
    info.appendChild(cvvs);
    blur.style.display = cardnum.style.display = nocontent.style.display = "none"

};
const addpayment = (money, date, status) => {
    ul = document.getElementById("data");
    li = document.createElement("li");
    h3 = document.createElement("h3");
    h3.innerHTML = date;
    h3.classList.add("date");
    right = document.createElement("div");
    right.classList.add("right");
    price = document.createElement("h3");
    price.innerHTML = "$" + money;
    span = document.createElement("span");
    span.classList.add("material-symbols-outlined");
    span.innerHTML = "fiber_manual_record";
    if (status == "Paid") { span.classList.add("green") } else { span.classList.add("red") };

    pdf = document.createElement("h3");
    pdf.innerHTML="PDF";

    ul.appendChild(li);
    li.appendChild(h3);
    li.appendChild(right);
    right.appendChild(price);
    right.appendChild(span);
    right.appendChild(pdf);


};
const addtransactions = (name,money,date,status) =>{
    trans = document.getElementById("trans");
    app = document.createElement("div");
    app.classList.add("app");
    left = document.createElement("div");
    left.classList.add("left");
    span = document.createElement("span");
    span.classList.add("material-symbols-outlined");
    span.innerHTML = "arrow_downward";
    txt = document.createElement("div");
    txt.classList.add("txt");
    h3 = document.createElement("h3");
    h3.innerHTML = name;
    small = document.createElement("small");
    small.innerHTML = date;
    div = document.createElement("div");
    div.classList.add("left");
    leftsmall = document.createElement("small");
    leftsmall.innerHTML = "-$" + money;
    if (status == "Paid") { span.classList.add("up"); span.innerHTML = "arrow_upward" } else { span.classList.add("down") };
    console.log(status);
    trans.appendChild(app);
    app.appendChild(left);
    app.appendChild(div);
    left.appendChild(span);
    left.appendChild(txt);
    txt.appendChild(h3);
    txt.appendChild(small);
    div.appendChild(leftsmall);
};
const visaback = "https://i.ibb.co/WHZ3nRJ/visa.png";
const masterback = "https://simey-credit-card.netlify.app/img/logos/master.svg";

const visabg = "https://img.freepik.com/free-vector/gradient-black-background-with-cubes_23-2149152314.jpg?t=st=1715449567~exp=1715453167~hmac=40abe49874614821303df7aa8c27c4be9fd721162cce91bda53ba2e52c5b047a&w=996";
const masterbg = "https://img.freepik.com/free-vector/blue-wavy-background-with-line-wave_677411-919.jpg?t=st=1715450250~exp=1715453850~hmac=558ec0fa74d194c3db0e51fa671966d5abe5ae962b24d9285ade075e9fae4bba&w=106";


let cardlists;
loaddata();