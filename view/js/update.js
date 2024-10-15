let fname = document.getElementById("name");
let femail = document.getElementById("email");
let fmobile = document.getElementById("mobile");
let fage = document.getElementById("age");
let frole = document.getElementById("role");
let faddress = document.getElementById("address");

//query paramters
let params = new Proxy(new URLSearchParams(window.location.search), {
  get: (par, prop) => par.get(prop),
});

console.log(`params=`, params.id);

// send the request to the server to fetch single user details
const readData = async () => {
  await fetch(`/api/user/single/${params.id}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(`user =`, res);
      fname.value = res.user.name;
      femail.value = res.user.email;
      fmobile.value = res.user.mobile;
      fage.value = res.user.age;
      frole.value = res.user.role;
      faddress.value = res.user.address;
    })
    .catch((err) => console.log(err.msg));
};

readData();

let cForm = document.getElementById("contactForm");

cForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  let data = {
    name: fname.value,
    email: femail.value,
    mobile: fmobile.value,
    age: fage.value,
    role: frole.value,
    address: faddress.value,
  };

  console.log(`update data=`, data);
  await fetch(`/api/user/update/${params.id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PATCH",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      alert(res.msg);
      window.location.href = "/";
    })
    .catch((err) => console.log(err.msg));
});
