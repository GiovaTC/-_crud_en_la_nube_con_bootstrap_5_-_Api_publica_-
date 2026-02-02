const API_URL = "https://jsonplaceholder.typicode.com/users";

const table = document.getElementById("userTable");
const form = document.getElementById("userForm");
const userId = document.getElementById("userId");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

// =====================
// READ
// =====================
function loadUsers() {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        table.innerHTML =  "";
        data.slice(0, 5).array.forEach(user => {
            table.innerHTML += `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>  
                    <td>
                        <button class="btn btn-warning btn-sm"
                        onclick="editUser(${user.id}, '${user.name}', '${user.email}')">
                        editar
                        </button>
                        <button class="btn btn-danger btn-sm"
                        onclick="deleteUser(${user.id})">
                        </button>
                    </td>   
                </tr>        
            `;  
        });
    });
}   
    
// =====================
// CREATE / UPDATE
// =====================
form.addEventListener("submit", e => {
    e.preventDefault();

    const userData = {
        name: nameInput.value,
        email: emailInput.value
    };

    if (userId.value === "") {
        // CREATE
        fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        }).then(() => {
            form.reset();
            loadUsers();
        });
    } else {
        // UPDATE
        fetch(`${API_URL}/${userId.value}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        }).then(() => {
            userId.value = "";
            form.reset();
            loadUsers();
        });
    }
});

// =====================
// EDIT
// =====================
function editUser(id, name, email) {
    userId.value = id;
    nameInput.value = name;
    emailInput.value = email;
}

// =====================
// DELETE
// =====================
function deleteUser(id) {
    if (!confirm("¿Eliminar usuario?")) return;

    fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    }).then(() => loadUsers());
}

// INIT
loadUsers();