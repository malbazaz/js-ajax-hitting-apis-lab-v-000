function getRepositories(){
  const req = new XMLHttpRequest
  let username = document.getElementById("username").value
  req.addEventListener("load", displayRepositories)
  req.open("GET", `https://api.github.com/users/${username}/repos`)
  req.send()

}

function displayRepositories(){
  var repos = JSON.parse(this.responseText)
  console.log(repos)
  let username = document.getElementById("username").value
  const list = repos.map(r=>{
    console.log("r",r)
  })
  const repoList = `<ul> ${repos.map(r => '<li>' + `<a href = https://github.com/users/${username}/${r.name}>`+ r.name +'</a>'+' ' + '<a href="#"' + 'onclick="getCommits(this)"> Get Commits </a> </li>').join('')}</ul>`
  const branchesList =  `<ul>${repos.map(r => '<li>' + `<a href= https://github.com/repos/${username}/${r.name}/branches`+ username + '</a>' +' '+ r.name +'<a href="#"'+'onclick="getBranches(this)">Get Branches</a></li>').join('')}</ul>`
  document.getElementById("repositories").innerHTML = repoList + branchesList
}

function getCommits(el) {
  debugger;
  const name = el.dataset.full_name
  console.log("name", name)
  const req = new XMLHttpRequest()
  let username = document.getElementById("username").value
  req.addEventListener("load", displayCommits)
  req.open("GET", `https://api.github.com/repos/${name}/commits`)
  req.send()
}

function displayCommits() {
  const commits = JSON.parse(this.responseText)
  const list = commits.map(commit => {
    return `<li> user: ${commit.author.login}, name: ${commit.commit.author.name}, message: ${commit.commit.message}</li>`
  }).join('')
  const commitsList = `<ul>${list}</ul>`
  document.getElementById("details").innerHTML = commitsList
}

function getBranches(el) {
  const name = el.dataset.repos.full_name
  const req = new XMLHttpRequest()
  let username = document.getElementById("username").value
  req.addEventListener("load", displayBranches)
  req.open("GET", `https://api.github.com/repos/${name}/branches`)
  req.send()
}

function displayBranches() {
  const branches = JSON.parse(this.responseText)
  const list = branches.map(branch => {
    return `<li> name: ${branch.name}</li>`
  }).join('')
  const detailsList = `<ul>${list}</ul>`
  document.getElementById("details").innerHTML = detailsList
}
