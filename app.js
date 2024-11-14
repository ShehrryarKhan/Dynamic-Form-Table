
function displaySignupData(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const signupDataDiv = document.getElementById("signupData");

    signupDataDiv.innerHTML = `
        <strong>Submitted Data:</strong><br>
        Name: ${name}<br>
        Email: ${email}<br>
        Password: ${"*".repeat(password.length)}
    `;
    signupDataDiv.style.display = "block";
}


function toggleReadMore() {
    const moreText = document.querySelector(".more-text");
    const button = document.querySelector(".read-more-section button");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        button.innerText = "Read Less";
    } else {
        moreText.style.display = "none";
        button.innerText = "Read More";
    }
}


let students = [];
let editIndex = null;

function addStudent(event) {
    event.preventDefault();
    const name = document.getElementById("studentName").value;
    const age = document.getElementById("studentAge").value;
    const grade = document.getElementById("studentGrade").value;

    if (editIndex === null) {
        students.push({ name, age, grade });
    } else {
        students[editIndex] = { name, age, grade };
        editIndex = null;
        document.getElementById("studentForm").reset();
    }
    renderTable();
}

function renderTable() {
    const tbody = document.getElementById("studentTable").querySelector("tbody");
    tbody.innerHTML = "";

    students.forEach((student, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.grade}</td>
            <td>
                <button class="edit-button" onclick="editStudent(${index})">Edit</button>
                <button onclick="deleteStudent(${index})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function editStudent(index) {
    const student = students[index];
    document.getElementById("studentName").value = student.name;
    document.getElementById("studentAge").value = student.age;
    document.getElementById("studentGrade").value = student.grade;
    editIndex = index;
}

function deleteStudent(index) {
    students.splice(index, 1);
    renderTable();
}
