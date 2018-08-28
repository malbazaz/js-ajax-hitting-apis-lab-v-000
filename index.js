function getRepositories(){
  const req = new XMLHttpRequest
  req.open("GET", `https://api.github.com/${username}/repos`)
  req.send()
}
