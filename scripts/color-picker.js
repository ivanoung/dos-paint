// Color picker

$("#custom").spectrum({
    flat: false,
    showInput: true,
    change: (color) =>{
        let col = color.toHexString();
        style.curCol.fill = col;
        console.log(col);
        $("#fill").css("background-color",col);
    }
});


