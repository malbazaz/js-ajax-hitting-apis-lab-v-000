function getRepositories(){
  const req = new XMLHttpRequest
  username = document.getElementById("username")
  req.open("GET", `https://api.github.com/${username}/repos`)
  req.send()
  req.addEventListener("load", showRepositories)
}

function showRepositories(event, data){
  var repos = JSON.parse(this.responseText)
  console.log(repos)
  const repoList = `<ul>${repos.map(r => '<li>' + r.name + ' - <a href="#" data-repo="' + r.name + '" onclick="getCommits(this)">Get Commits</a></li>').join('')}</ul>`
  document.getElementById("repositories").innerHTML = repoList
}
