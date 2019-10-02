var totcolor = 6;
var colors = generaterandomColors(totcolor);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var messageDisplay = document.querySelector("#message");
var span = document.querySelector("#span");
var reset = document.querySelector("#reset");
var h1  = document.querySelector("#h1");
var hardbtn = document.querySelector(".selected");
var easybtn = document.querySelector("#easy");

easybtn.addEventListener("click",function(){
    totcolor = 3;
    h1.style.background = "steelblue";
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    colors = generaterandomColors(totcolor);
    pickedColor = pickColor();
    span.textContent = pickedColor;
    for(var i = 0 ; i < squares.length ; i++ )
    {
        if(colors[i])
        squares[i].style.background = colors[i];
        else
        squares[i].style.background = "none";
    } 
})
hardbtn.addEventListener("click",function(){
    totcolor = 6;
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    h1.style.background = "steelblue";
    colors = generaterandomColors(totcolor);
    pickedColor = pickColor();
    span.textContent = pickedColor;
    for(var i = 0 ; i < squares.length ; i++ )
    {
        squares[i].style.background = colors[i];
        squares[i].style.background = "block";
    } 
})
reset.addEventListener("click",function()
{
    colors = generaterandomColors(totcolor);
    pickedColor = pickColor();
    span.textContent = pickedColor;
    h1.style.background = "steelblue";
    reset.textContent = "New Game";
    messageDisplay.textContent = "          ";
    for(var i = 0 ; i < squares.length ; i++ )
    {
        squares[i].style.background = colors[i];
    }   
})
//console.log(pickedColor);
span.textContent = pickedColor;
for(var i = 0 ; i < squares.length ; i++ )
{
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click",function()
    {
        var currentColor = this.style.background;
        if(currentColor===pickedColor)
        {
            messageDisplay.textContent = "Correct";
            changeColor(pickedColor);
            h1.style.background = pickedColor;
            reset.textContent = "Play Again";

        }
        else
        {
            this.style.background="#232323";
            messageDisplay.textContent = "Try Again";
        }
    })
}
function changeColor(color)
{
    for(var i = 0 ; i < totcolor ; i++)
    squares[i].style.background = color;
}

function generaterandomColors(num)
{
    var arr = [];
    for(var i = 0 ; i < num ; i++)
    {
        arr.push(randomColor());
    }
    return arr;
}
function randomColor(){

    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
 
    return "rgb(" +r+", "+g+", "+b+")";
}
function pickColor()
{
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}