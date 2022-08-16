//Texto
let text = document.getElementById('itexto')

//Configurações do texto
let font_format = document.getElementById('iformat');
let font_type = document.getElementById('itype');
let font_size = document.getElementById('isize');
let font_color = document.getElementById('icor');
let font_style = document.getElementById('italic');
let font_decoration = document.getElementById('underline');
let font_weight = document.getElementById('bold');

function restaurar(){

}

function formatar(){
    //Itálico
    if(font_style.checked){
        text.style.fontStyle = font_style.value;
    }else {
        text.style.fontStyle = 'normal';
    }

    //Underline
    if(font_decoration.checked){
        text.style.textDecoration = font_decoration.value;
    }else {
        text.style.textDecoration = 'none';
    }

    //Negrito
    if(font_weight.checked){
        text.style.fontWeight = font_weight.value;
    }else {
        text.style.fontWeight = 'normal';
    }

    //Modificando o texto
    text.style.fontFamily = font_type.value;
    text.style.textTransform = font_format.value;
    text.style.fontSize = String(font_size.value) + "px";
    text.style.color = font_color.value;
}