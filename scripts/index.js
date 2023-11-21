const sidebar = document.getElementById("sidebar");
let sidebarStatus = false;

const handleToggle = () => {
  sidebar.style.left = "0px";
};
const handleToggleClose = () => {
  sidebar.style.left = "-500px";
};

var header = document.getElementById("menu-list");
var menuBtns = header.getElementsByClassName("menu-btn");
var icons = header.getElementsByClassName("icon");
icons[0].style.background = "#e23b60";
for (let i = 0; i < menuBtns.length; i++) {
  menuBtns[i].addEventListener("click", function (e) {
    // page reload is closed by preventDefault()
    e.preventDefault();
    var current = document.getElementsByClassName("active-li");
    current[0].className = current[0].className.replace(" active-li", "");
    this.className += " active-li";

    for (let j = 0; j < menuBtns.length; j++) {
      icons[j].style.background = "#2e1d74";
    }
    icons[i].style.background = "#e23b60";
  });
}

const modalBody = document.getElementById("modal-body");
document.getElementById("form-layout").addEventListener("submit", (e) => {
  e.preventDefault();
  const newAddCreateReq = e.target.newAddCreateReq.value;
  const postLink = e.target.postLink.value;
  const image = e.target.image.value;
  const content = e.target.content.value;
  const adBudget = e.target.adBudget.value;
  const timeDuration = e.target.timeDuration.value;

  modalBody.innerHTML = `
  <label for="" class="d-block">New Add CreateReq:</label>
  <input type="text" class="form-control rounded-4" name="newAddCreateReq" value=${newAddCreateReq} />
  <label for="" class="d-block">Post Link:</label>
  <input type="text" class="form-control rounded-4" name="postLink" value=${postLink} />
  <label for="" class="d-block">Image:</label>
  <input type="text" class="form-control rounded-4" name="image" value=${image} />
  <label for="" class="d-block">Content:</label>
  <input type="text" class="form-control rounded-4" name="content" value=${content} />
  <label for="" class="d-block">Ad Budget:</label>
  <input type="text" class="form-control rounded-4" name="adBudget" value=${adBudget} />
  <label for="" class="d-block">Time Duration:</label>
  <input type="text" class="form-control rounded-4" name="timeDuration" value=${timeDuration} />
  `; 
});
