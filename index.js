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
  let username = document.getElementById("username")
  const repoList = `<ul>${repos.map(r => '<li>' +`<a href = https://github.com/${username}/${r.name}`+ ' - <a href="#" data-repo="' + r.name + '" onclick="getCommits(this)">Get Commits</a></li>').join('')}</ul>`
  const branchesList =  `<ul>${repos.map(r => '<li>' +r.name + ' - <a href="#" data-repo="' + ${username} + '" onclick="getBranches(this)">Get Branches</a></li>').join('')}</ul>`
  document.getElementById("repositories").innerHTML = repoList +
}

function getCommits(el) {
  const name = el.dataset.repo
  const req = new XMLHttpRequest()
  let username = document.getElementById("username")
  req.addEventListener("load", displayCommits)
  req.open("GET", 'https://api.github.com/repos/'+ username +'/' + name + '/commits')
  req.send()
}

function displayCommits() {
  const commits = JSON.parse(this.responseText)
  const commitsList = `<ul>${commits.map(commit => '<li><strong>' + commit.author.login + '</strong> - ' + commit.commit.message + '</li>').join('')}</ul>`
  document.getElementById("commits").innerHTML = commitsList
}
function getBranches(el) {
  const name = el.dataset.repo
  const req = new XMLHttpRequest()
  let username = document.getElementById("username")
  req.addEventListener("load", displayBranches)
  req.open("GET", 'https://api.github.com/repos/'+ username +'/' + name + '/branches')
  req.send()
}

function displayBranches() {
  const branches = JSON.parse(this.responseText)
  const detailsList = `<ul>${branches.map(branch => '<li><strong>' + branch.username + '</strong> - ' + '</li>').join('')}</ul>`
  document.getElementById("details").innerHTML = detailsList
}
