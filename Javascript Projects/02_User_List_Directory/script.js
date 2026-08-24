const userContainer = document.querySelector(".users");
const userInput = document.querySelector(".user-input > input");

let userData = [
  { name: "Muhammad Hussain", email: "muhammadhussain@gmail.com" },
  { name: "Suleman Amjad", email: "sulemanamjad@gmail.com" },
  { name: "Zaryab Haider", email: "zaryabhaider@gmail.com" },
  { name: "Hamid Munir", email: "hamidmunir@gmail.com" },
  { name: "Bilal Akram", email: "bilalakram@gmail.com" },
  { name: "Muhammad Ahsan", email: "muhammadahsan@gmail.com" },
  { name: "Asadullah", email: "asadullah@gmail.com" },
  { name: "Haris Shafique", email: "harisshafique@gmail.com" },
  { name: "Shahran", email: "Shahran@gmail.com" },
  { name: "Zia Mustafa", email: "ziamustafa@gmail.com" },
];

// === Render User Data ===

function renderUserData(arr) {
  userContainer.innerHTML = "";
  arr.map((user) => {
    const userDiv = document.createElement("div");

    userDiv.classList.add("user");

    userDiv.innerHTML = `
      <img src="./assets/user-icon.png" alt="user image" />
      <div class="user-info">
        <h3>${user.name}</h3>
        <p>${user.email}</p>
      </div>
    `;
    userContainer.append(userDiv);
  });
}

renderUserData(userData);

// === Filter User Data ===

function handleUserSearch() {
  let val = userInput.value;

  let filteredUserArr = userData.filter((user) => {
    return (
      user.name.toLowerCase().includes(val.toLowerCase()) ||
      user.email.toLowerCase().includes(val.toLowerCase())
    );
  });

  if (filteredUserArr.length > 0) {
    renderUserData(filteredUserArr);
  } else {
    userContainer.innerHTML =
      "<p class='no-user-found'>No user found with this name or email</p>";
  }
}

userInput.addEventListener("input", handleUserSearch);
