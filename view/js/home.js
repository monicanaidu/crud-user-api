let users = document.getElementById("users");

let readData = async () => {
  await fetch(`/api/user/all`, {
    method: "GET",
    header: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      printData(res.users);
    })
    .catch((err) => console.log(err.msg));
};

readData();

//delete user
const deleteUser = async (id) => {
  if (window.confirm(`Are you sure to delete user info?`)) {
    await fetch(`/api/user/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        alert(res.msg);
        window.location.reload(); //page reload
      })
      .catch((err) => console.log(err.message));
  } else {
    alert("delete terminated");
  }
};

function printData(data) {
  data.forEach((item) => {
    document.getElementById("users").innerHTML += `<tr class="text-center">
        
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.mobile}</td>
        <td>${item.age}</td>
        <td>${item.role}</td>
        <td>${item.address}</td>
        <td class="d-flex justify-content-around">
        <a href="/edit?id=${item._id}" class="btn btn-info">
        <i class="bi bi-pencil"></i>
        </a>
        <button onclick="deleteUser('${item._id}')" class="btn btn-danger">
        <i class="bi bi-trash"></i>
        </button>

        </td>
        </tr>`;
  });
}
