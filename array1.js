const NamaL = []

function funNm() {
    const NamaD = document.getElementById("NmL1").value;
    const NamaT = document.getElementById("NmL2").value;
    
    // tambahkan inputan ke array
    if (NamaD) NamaL.push(NamaD);
    if (NamaT) NamaL.push(NamaT);

    document.getElementById("NmL1").value = "";
    document.getElementById("NmL2").value = "";

    // hasil dari array

    document.getElementById("hasilNm").innerText = `Nama: ${NamaL.join(", ")}`;
}

// fungsi tambah

function tambahN() {
    const namaB = document.getElementById("nmB").value;

    if (namaB) {
        NamaL.push(namaB);
        document.getElementById("nmB").value = "";
        document.getElementById("hasilNm").innerText = `Nama: ${NamaL.join(", ")}`;
        console.log(NamaL);
    }
}