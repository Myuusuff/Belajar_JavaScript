var x = 5;
var y = 8;

var latihan = x + y;

document.getElementById("latihan").innerHTML 
= "Hasil dari " + x + " + " + y + " = " + latihan;

function getInput() {
    let input = document.getElementById("nameUser").value;
    document.getElementById("output").innerText = "Anda memasukkan: " + input;
}

function Tambah() {
    // ambil nilai dari inputan
    var a = parseFloat(document.getElementById("tambah1").value)
    var b = parseFloat(document.getElementById("tambah2").value)
    
    // cek apakah inputan sudah benar
    if (isNaN(a) || isNaN(b)) {
        alert("Inputan harus angka");
        return;
    }
    // hitung hasil penjumlahan
    var c = a + b;
    document.getElementById("penjumlahan").innerText = "Hasil dari " + a + " + " + b + " = " + c;
}

function Bagi() {
    // megunakan parseFloat untuk mengubah string menjadi angka
    var angka1 = parseFloat(document.getElementById("bagi1").value)
    var angka2 = parseFloat(document.getElementById("bagi2").value)

    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("pembagian").innerText = "Inputan harus angka";
        return;
    }
    // cek apakah angka kedua adalah 0
    if (angka2 == 0) {
        document.getElementById("pembagian").innerText = "Angka kedua tidak boleh 0";
        return;
    }

    // hitung hasil pembagian
    var hasil = angka1 / angka2;
    document.getElementById("pembagian").innerText = "Hasil dari " + angka1 + " / " + angka2 + " = " + hasil;
}