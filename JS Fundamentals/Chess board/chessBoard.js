function chessBoard(n) {

    let result = " ";
    result = '<div class="chessboard">\n';
    let color = "black"

    for (let i = 1; i <= n; i++) {
        result += "  <div>\n";

        if (n % 2 == 0) {
            if (color === "black") {
                color = 'white';
            } else {
                color = "black"
            }
        }
        if (i === 1) {
            color = "black"
        }
        for (let j = 1; j <= n; j++) {
            result += `    <span class="${color}"></span>\n`
            if (color === "black") {
                color = "white";
            } else {
                color = "black";
            }
        }



        result += "  </div>\n"
    }
    result += "  </div>\n"
    console.log(result);
}
