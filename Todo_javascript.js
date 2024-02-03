
document.querySelector("#btn1").onclick = function(){
    if(document.querySelector("#newtask input").
    value.length == 0)
    {
        alert("Please Enter a Task")
    }
    else
    {
        document.querySelector(".tasks").innerHTML 
        += `
        <div class="task">
        <span id="taskname">${document.querySelector("#newtask input").value}</span>
        
        
        <button class="delete">
        <i class="far fa-trash-alt"></i>
        </button>
        </div>
        
        `;

        document.querySelector("#newtask input").value="";


    }



    // deleting a task

    let current_task = document.querySelectorAll(".delete");
    console.log(current_task);

    for(let i=0; i<current_task.length; i++){
        console.log("i'm Inside 1 ")

        current_task[i].onclick = function()
        {
            console.log("I'm Deleting  1")

            this.parentNode.remove();
        }
    }

    console.log("I'm out 1")


        let current_task1 = document.querySelectorAll(".task");

        console.log(current_task1);

        for(let i=0; i<current_task1.length; i++){
            console.log("i'm Inside 2 ")
          current_task1[i].onclick = function()
        {
            console.log("I'm Deleting  2")
            this.classList.toggle("Completed");
        }

        }  
        
        console.log("I'm out 2")



}




