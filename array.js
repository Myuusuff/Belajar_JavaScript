// mendeklarasikan array sebagai variabel kendaraan global
const Kendaraan = [];

// membuat fungsi untuk menambahkan data ke array
function addKendaraan() {
    const input1 = document.getElementById("arrayInput1").value;
    const input2 = document.getElementById("arrayInput2").value;
    const input3 = document.getElementById("arrayInput3").value;

    // tambahkan inputan ke array
    if (input1)Kendaraan.push(input1);
    if (input2)Kendaraan.push(input2);
    if (input3)Kendaraan.push(input3);

    // megosongkan inputan  setelah di submit
    document.getElementById("arrayInput1").value = "";
    document.getElementById("arrayInput2").value = "";
    document.getElementById("arrayInput3").value = "";

    // inputan tidak boleh kosong
    if (input1 === "" || input2 === "" || input3 === "") {
        alert("Inputan tidak boleh kosong");
        return;
    }
    // output dari array
    document.getElementById("hasil").innerText = `Kendaraan: ${Kendaraan.join(", ")}`;
    console.log(Kendaraan)

}

// membuat fungsi untuk menambahkan data ke array

function tambahKendaraan() {
    const kendaraanBaru = document.getElementById("arrayInput4").value;

    // peringatan jika input kosong
    if (kendaraanBaru === "") {
        alert("Inputan tidak boleh kosong");
        return;
    }

    // kendaraan sudah ada
    if (Kendaraan.includes(kendaraanBaru)) {
        alert("Kendaraan sudah ada");
    }
    if (kendaraanBaru) {
        Kendaraan.push(kendaraanBaru);
        document.getElementById("arrayInput4").value = "";
        document.getElementById("hasil1").innerText = `Kendaraan: ${Kendaraan.join(", ")}`;
        console.log(Kendaraan);
    }
    
}