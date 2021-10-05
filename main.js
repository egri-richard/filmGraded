class Film{
    constructor(nev, rendezo, kiadasiEv) {
        this.nev = nev;
        this.rendezo = rendezo;
        this.kiadasiEv = kiadasiEv;
    }

    toString() {
        return `Cím: ${this.nev}; Rendezte: ${this.rendezo}; Kiadva: ${this.kiadasiEv}`
    }

    getNevString() {
        return `${this.nev}`
    }
    getRendString() {
        return `${this.rendezo}`
    }
    getKiadString() {
        return `${this.kiadasiEv}`
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

function removeTable() {
    let t = document.getElementById('tableData');
    t.innerHTML = "";
}

function addTableData() {
    removeTable();

    for (f of filmArr) {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");

        let a = document.createTextNode(f.getNevString());
        let b = document.createTextNode(f.getRendString());
        let c = document.createTextNode(f.getKiadString());

        td1.appendChild(a);
        td2.appendChild(b);
        td3.appendChild(c);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
          
        document.getElementById('tableData').appendChild(tr);
    }

    filmArr.length = 0;
}