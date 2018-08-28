function getRepositories(){
  const req = new XMLHttpRequest
  let username = document.getElementById("username")
  req.open("GET", `https://api.github.com/${username}/repos`)
  req.send()
  req.addEventListener("load", displayRepositories)
}

function displayRepositories(event, data){
  var repos = JSON.parse(this.responseText)
  console.log(repos)
  const repoList = `<ul>${repos.map(r => '<li>' + r.name + ' - <a href="#" data-repo="' + r.name + '" onclick="getCommits(this)">Get Commits</a></li>').join('')}</ul>`
  document.getElementById("repositories").innerHTML = repoList
}

function getCommits(el) {
  const name = el.dataset.repo
  const req = new XMLHttpRequest()
  let username = document.getElementById("username")
  req.addEventListener("load", displayCommits)
  req.open("GET", 'https://api.github.com/repos/'+ username +'/' + name + '/commits')
  req.send()
}
