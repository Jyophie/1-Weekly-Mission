const tokenRemoveBtn = document.querySelector('.removeAccessToken');

function removeAccessToken () {
  localStorage.removeItem("accessToken");
}

tokenRemoveBtn.addEventListener('click', removeAccessToken);