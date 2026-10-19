function gerarQRCode() {
    // Pega o que foi digitado
    let texto = document.getElementById("texto").value;
    // Pega o espaço onde o QR Code será colocado
    let qrcode = document.getElementById("qrcode");

    // Limpa o QR Code anterior
    qrcode.innerHTML = "";

    // Verifica se o usuário digitou alguma coisa
    if (texto === "") {
        alert("Digite um texto ou link!");
        return;
    }

    // Cria o QR Code
    new QRCode(qrcode, {
        text: texto,
        width: 200,
        height: 200
    });
}
