function tipe() {
    let input = document.getElementById("typeInput").value;
    let parsedInput = Number(input)
    let type;

    if (!isNaN(parsedInput) && input.trim() !== "") {
        type = "number";
    } else {
        type = "string";
    }
    // output dari inputan
    document.getElementById("inputAja").innerText = "Tipe data dari inputan adalah: " + type;
    console.log(type);
}