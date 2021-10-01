function encodeAndDecodeMessages() {
    let buttons = Array
        .from(document.getElementsByTagName("button"))
        .forEach(x => {
            if (x.textContent.includes("Encode")) {
                x.addEventListener("click", encode)
            } else {
                x.addEventListener("click", decode)
            }
        })

    function encode(e) {
        let encodeTextArea = e.target.parentElement.querySelector("textarea");
        let decodeTextArea = e.target.parentElement.parentElement.querySelectorAll("div textarea")[1];
        let encodeText = '';
        for (let char of encodeTextArea.value) {
            let charCode = char.charCodeAt() + 1;
            encodeText += String.fromCharCode(charCode);

        }
        decodeTextArea.value = encodeText;
        encodeTextArea.value = "";
    }

    function decode(e) {
        let decodeTextArea = e.target.parentElement.querySelector("textarea");
        let encodeTextArea = e.target.parentElement.parentElement.querySelectorAll("div textarea")[0];
        let decodeText = '';


        for (let char of decodeTextArea.value) {
            let charCode = char.charCodeAt() - 1;
            decodeText += String.fromCharCode(charCode);

        }
        encodeTextArea.value = decodeText;
        decodeTextArea.value = "";


    }

}