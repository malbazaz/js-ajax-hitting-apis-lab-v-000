function getRepositories(){
  const req = new XMLHttpRequest
  username = document.getElementById("username")
  req.open("GET", `https://api.github.com/${username}/repos`)
  req.send()
  req.addEventListener("load", showRepositories)
}

function showRepositories(){

}
