buttonEl = document.getElementById("button-el");
inputEl = document.getElementById("input-el");
resultEl = document.getElementById("result-el");
let ans = Math.floor((Math.random()*10)+1)
let no=0;
buttonEl.addEventListener("click",function(){
    let guess = inputEl.value;
    if(ans > guess)
    {
        resultEl.innerText = "Guess Higher";
        no++;
    }
    else if(ans < guess )
    {
        resultEl.innerText = "Guess Lower";
        no++;
    }
    else if(ans==guess)
    {
        resultEl.innerText = `Congratulations You have guessed the number \n Guesses took = ${no}`;
    }

})