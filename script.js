let array = localStorage.array ? JSON.parse(localStorage.array) : [];


const render_all = () => {
    let x = document.getElementById("bd");
    bd.innerHTML = "";
    add_edit_div_to_bd();
    add_wrapper();
}

const render_screen = () => {

    let x = document.getElementById("wrapper");
    x.innerHTML = "";
    
    make_date_and_tasks_div();
    make_input_div();
    make_the_table();
    add_to_local_storage();

}

const add_edit_div_to_bd = () => {
    let x = document.getElementById("bd");
    bd.innerHTML =
    `   
    <div class="array_task_desc" id = "array_task_desc">
        <div class="edit_div">
            <div class="title_in_edit_div">
                <span class="title_in_edit"> Title : </span>
                <input type="text"class = "title_placeholder_in_edit">
            </div>
        </div>
    </div>
    `;
}

const add_wrapper = () => {
    let x = document.getElementById("bd");
    bd.innerHTML += 
    `
        <div class="name">To Do App</div>
        <div class="wrapper" id="wrapper">

        </div>
    `;
    render_screen();
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
            <input type="text" name="text" id="input" placeholder = "Item description" onkeydown = "add_by_enter(event);">
            <button type="submit" id = "submit" class = "sub" onclick = "Submit();"> Submit </button>
        </div>
    
    `;

}

const Submit = () => {
    let inp = document.getElementById("input");
    if(inp.value != "")
    {
        let item = {
            title_of_task: inp.value,
            add_date : new Date().toLocaleDateString(),
            end_date : 0,
            done : false,
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
                <div class = "data ${array[i].done?"done" : ""}">
                    <span> 
                        ${array[i].title_of_task} 
                    </span>
                    <span class = "date_in_task">
                        Add Date : ${array[i].add_date} <br/> 
                        ${array[i].end_date?"End Date : " + array[i].end_date : ""}
                    </span>

                </div>
                <div class = "true_and_false">
                    <div class = "Tr ${array[i].done?"tr_done" : ""}" onclick = "done_task(${i});"> 
                        &#9989
                    </div>
                    <div class = "Fl" onclick="delete_task(${i});"> 
                        &#10060
                    </div>
                </div>  
                <div class = "Ed" onclick = "show_edit_div(${i});">
                    &#128295
                </div>
            </div>
        `;

    }
}

const add_to_local_storage = () => {
    localStorage.array = JSON.stringify(array);
}

const delete_task = (i) => {
    array.splice(i, 1);
    render_screen();
}

const done_task = (i) => {
    
    array[i].done = !array[i].done;
    render_screen();
}

const show_edit_div = (i) => {
    let x = document.getElementById("array_task_desc");
    x.style.display = "flex";
}

render_all();