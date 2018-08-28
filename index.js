function getRepositories(){
  const req = new XMLHttpRequest
  let username = document.getElementById("username").value
  req.addEventListener("load", displayRepositories)
  req.open("GET", `https://api.github.com/users/${username}/repos`)
  req.send()

}

function displayRepositories(event, data){
  var repos = JSON.parse(this.responseText)
  console.log(repos)
  let username = document.getElementById("username").value
  const repoList = `<ul> ${repos.map(r => '<li>' + `<a href = https://github.com/users/${username}/${r.name}>`+ r.name +'</a>'+' ' + '<a href="#"' + 'onclick="getCommits(this)"> Get Commits </a> </li>').join('')}</ul>`
  const branchesList =  `<ul>${repos.map(r => '<li>' + `<a href= https://github.com/repos/${username}/${r.name}/branches`+ username + '</a>' +' '+ r.name +'<a href="#"'+'onclick="getBranches(this)">Get Branches</a></li>').join('')}</ul>`
  document.getElementById("repositories").innerHTML = repoList + branchesList
}

function getCommits(el) {
  const name = el.dataset
  console.log("name", name)
  const req = new XMLHttpRequest()
  let username = document.getElementById("username").value
  req.addEventListener("load", displayCommits)
  req.open("GET", `https://api.github.com/repos/${username}/${name}/commits`)
  req.send()
}

function displayCommits() {
  const commits = JSON.parse(this.responseText)
  const list = commits.map(commit => {
    return `<li> user:${commit.author.login}, name:${commit.commit.author.name}
  })

  const commitsList = `<ul>${commits.map(commit => '<li><strong>' + commit.author.login + '</strong> - ' + commit.message + '</li>').join('')}</ul>`
console.log(commitsList)
  document.getElementById("commits").innerHTML = commitsList
}

function getBranches(el) {
  debugger;
  const name = el.dataset.repo
  const req = new XMLHttpRequest()
  let username = document.getElementById("username").value
  req.addEventListener("load", displayBranches)
  req.open("GET", "'https://api.github.com/repos/'+ username + '/' + name + '/branches'")
  req.send()
}

function displayBranches() {
  const branches = JSON.parse(this.responseText)
  const detailsList = `<ul>${branches.map(branch => '<li><strong>' + branch.username + '</strong> - ' + '</li>').join('')}</ul>`
  document.getElementById("details").innerHTML = detailsList
}
