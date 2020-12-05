document.title = "Data declarative view approach";
let data = [];
render();
const ourFrom = document.querySelector("#ourForm");

function loadData() {
    if (localStorage.getItem("backUpData")) {
        data = localStorage.getItem("backUpData");
    } else console.log("khong co du lieu back up...");
}
loadData();
render();

function saveData() {
    render();
    localStorage.setItem("data", JSON.stringify(data))
}

function deleteMe(el) {
    const idToDelete = el.getAttribute("data-id");
    data = data.filter(function(item) {
        return item.id != idToDelete;
    });
    saveData();
}

function updateMe(el) {
    const idToUpdate = el.getAttribute("data-id");
    console.log("function updateMe()", idToUpdate);
    let newValue = prompt("Enter new value...", el.getAttribute("data-value"));
    if (newValue) {
        data = data.map(function(item) {
            if (item.id == idToUpdate) {
                console.log("map find out item is:", item);
                item.value = newValue;
            }
            return item;
        })
        saveData()
    }
}

function submitHandler(e) {
    e.preventDefault();
    data.push({ value: document.querySelector("#collectDataField").value, id: Date.now() })
    saveData();
}

function render() {
    document.querySelector("#app").innerHTML = `
        <form onsubmit="submitHandler(event)">
            <input 
            id="collectDataField" 
            type="text" 
            autocomplete="off" 
            placeholder="type element you wanna show..."/>
            <button>Create Item...</button>
        </form>

        <ul>
            ${data.map(
                function (item){
                    return `<li>
                        ${item.value}
                        <button 
                        data-value="${item.value}"
                        data-id="${item.id}"
                        onclick="updateMe(this)"
                        >Edit</button>
                        <button
                        onclick="deleteMe(this)"
                        data-id="${item.id}"
                        >Delete</button>
                    </li>`
                }
            ).join("")}
        </ul>
    `
}