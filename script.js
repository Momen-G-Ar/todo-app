let array = localStorage.array ? JSON.parse(localStorage.array) : [];


const render_screen = () => {

    let x = document.getElementById("wrapper");
    x.innerHTML = "";
    make_date_and_tasks_div();
    make_input_div();
    make_the_table();

}

const make_date_and_tasks_div = () => {
    let x = document.getElementById("wrapper");
    x.innerHTML +=
        `
        <div class = "make_date_and_tasks_div" id = "make_date_and_tasks_div">
                
        </div> 
    
    `;
    calculate_number_of_tasks();
    make_date();
}

const make_date = () => {
    let x = document.getElementById("make_date_and_tasks_div");
    x.innerHTML +=
        `
        <div class="date_of_nearest_task">
            ${new Date().toLocaleDateString()}
            
        </div>
    ` ;
}

const calculate_number_of_tasks = () => {
    let x = document.getElementById("make_date_and_tasks_div");
    x.innerHTML +=
        `
        <div class="number_of_tasks">
            ${array.length}
        </div>
    
    `;
}

const make_input_div = () => {
    let x = document.getElementById("wrapper");
    x.innerHTML +=
        `
        <div class="make_input_div">
            <input type="text" name="text" id="input" onkeydown = "add_by_enter(event);">
            <button type="submit" id = "submit" class = "sub" onclick = "Submit();"> Submit </button>
        </div>
    
    `;

}

const Submit = () => {
    let inp = document.getElementById("input");
    if(inp.value != "")
    {
        let item = {
            desc: inp.value,
            enter_Date : new Date().toLocaleDateString(),
        };
        
        array.push(item);
        inp.value = "";
        console.log(array);
    }
    render_screen();
}

const make_the_table = () => {
    let x = document.getElementById("wrapper");
    x.innerHTML +=
    `
        <div class="tasks_div" id = "tasks_div">
                
        </div>
    ` ;
    render_array_elements();
}

const add_by_enter = (event) => {
    console.log(event);
    if(event.keyCode == 13)
    {
        Submit();
    }
        
}

const render_array_elements = () => {
    let x = document.getElementById("tasks_div");
    for(let i = 0; i < array.length; i++)
    {
        x.innerHTML += `
            <div class = "task">
                <div class = "data">
                    ${array[i].desc} 
                </div>
                <div class = "true_and_false">
                    <div class = "Tr"> 
                        &#9989
                    </div>
                    <div class = "Fl"> 
                        &#10060
                    </div>
                </div>  
                
            </div>
        `;

    }
}

render_screen();