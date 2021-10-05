class Film{
    constructor(nev, rendezo, kiadasiEv) {
        this.nev = nev;
        this.rendezo = rendezo;
        this.kiadasiEv = kiadasiEv;
    }

    toString() {
        return `Cím: ${this.nev}; Rendezte: ${this.rendezo}; Kiadva: ${this.kiadasiEv};`
    }
}

let filmArr = [];

function addFilm() {
    let nevIn = document.getElementById('nevIn').value;
    let rendIn = document.getElementById('rendIn').value;
    let evIn = document.getElementById('evIn').value;

    let f = new Film(nevIn, rendIn, evIn);
    console.log(f.toString());
    filmArr.push(f);

    document.getElementById('nevIn').value = "";
    document.getElementById('rendIn').value = "";
    document.getElementById('evIn').value = "";
}

function createTable() {
    for (f of filmArr) {
        let tag = document.createElement("h6");
        let film = document.createTextNode(f.toString());
        tag.appendChild(film);
        tag.style.borderBottom = "solid black";
        document.getElementById('listDiv').appendChild(tag);
    }
}