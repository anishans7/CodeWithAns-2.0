let title = document.querySelector("h3");
let add = document.querySelector("#add");
let cheack = 0 ;

add.addEventListener("click", function () {
    if(cheack == 0 ){

        title.innerHTML = "Followed";
        title.style.color = "green";
        cheack = 1;
        add.innerHTML = "Remove";
    }else{
        title.innerHTML = "removed";
        title.style.color = "black ";
        cheack = 0; 
        add.innerHTML = "Add friend ";
    }
});

