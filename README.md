# -_crud_en_la_nube_con_bootstrap_5_-_Api_publica_- :. 
# CRUD en la Nube con Bootstrap 5 + API Publica :

<img width="1536" height="1024" alt="image" src="https://github.com/user-attachments/assets/f5b9bdc8-d8bf-429b-b868-2cd8cd3eae2d" />            

<img width="2552" height="1042" alt="image" src="https://github.com/user-attachments/assets/b7a7658f-aa34-43db-a9e3-7f738dded505" />    

<img width="2556" height="1044" alt="image" src="https://github.com/user-attachments/assets/f1f07037-4751-4b7f-84ca-a0be3ba80aeb" />        

A continuación tienes una **solución completa, clara y funcional en HTML + JavaScript usando Bootstrap 5**,  
que implementa un **CRUD con tabla y menú**, consumiendo una **API pública gratuita y de código abierto en la nube**.

La API utilizada es **JSONPlaceholder**, muy popular para demos y pruebas .

---

## 🔗 API pública gratuita

👉 https://jsonplaceholder.typicode.com  

📌 Soporta: **GET / POST / PUT / DELETE** (simulado, no persiste datos).

---

## 🎯 Funcionalidades incluidas

- ✅ Menú de navegación (Bootstrap)
- ✅ Tabla responsiva
- ✅ CRUD completo (Create, Read, Update, Delete)
- ✅ Consumo de API REST pública
- ✅ Código 100% frontend (HTML + JavaScript)
- ✅ Estilo profesional con Bootstrap 5

---

## 📂 Estructura del proyecto

```text
crud-bootstrap/
│
├── index.html
└── app.js

🧩 index.html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>CRUD en la Nube - Bootstrap</title>

    <!-- Bootstrap 5 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<!-- MENU -->
<nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">CRUD Cloud</a>
        <span class="navbar-text text-light">
            API Pública - JSONPlaceholder
        </span>
    </div>
</nav>

<div class="container mt-4">

    <h3 class="mb-3">Gestión de Usuarios</h3>

    <!-- FORMULARIO -->
    <form id="userForm" class="row g-3 mb-4">
        <input type="hidden" id="userId">

        <div class="col-md-4">
            <input type="text" id="name" class="form-control" placeholder="Nombre" required>
        </div>

        <div class="col-md-4">
            <input type="email" id="email" class="form-control" placeholder="Email" required>
        </div>

        <div class="col-md-4">
            <button class="btn btn-primary w-100" type="submit">
                Guardar
            </button>
        </div>
    </form>

    <!-- TABLA -->
    <table class="table table-bordered table-hover">
        <thead class="table-dark">
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody id="userTable"></tbody>
    </table>

</div>

<script src="app.js"></script>
</body>
</html>

🧠 app.js
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
            table.innerHTML = "";
            data.slice(0, 5).forEach(user => {
                table.innerHTML += `
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>
                            <button class="btn btn-warning btn-sm"
                                onclick="editUser(${user.id}, '${user.name}', '${user.email}')">
                                Editar
                            </button>
                            <button class="btn btn-danger btn-sm"
                                onclick="deleteUser(${user.id})">
                                Eliminar
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

🌐 API utilizada (gratis y open source)
Recurso	URL
Base API	https://jsonplaceholder.typicode.com
Usuarios	https://jsonplaceholder.typicode.com/users
GitHub	https://github.com/typicode/jsonplaceholder

📌 Nota importante
La API simula cambios en operaciones POST / PUT / DELETE,
por lo que es ideal para demos, pruebas técnicas y portafolios, pero no persiste datos.

🚀 Cómo ejecutar
- Guarda los archivos index.html y app.js
- Abre index.html en tu navegador
- CRUD funcionando sin backend propio / .
