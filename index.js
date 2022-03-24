function Display(num){
    let out = document.getElementById('out');
    out.value += num;
}
function Clear(){
    let out = document.getElementById('out');
    out.value = '';
}
function Delete(){
    let out = document.getElementById('out');
    out.value = out.value.slice(0,-1);
}
function Calculate(){
    let out = document.getElementById('out');
    try{
    out.value = eval(out.value);
    }
    catch(err){
        alert("The value is not valid! \n Please enter a valid value");
    }
}