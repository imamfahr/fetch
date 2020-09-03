// fetch data using async await to api github

const getDataGithub = async () => {
    try {
      let response = await fetch("https://api.github.com/users/imamfahr");
      let data = await response.json();
      console.log("data mas imam", data);
      document.getElementById('username').innerHTML=`${data.login}`
      document.getElementsByClassName('short-bio')[0].innerHTML=`${data.bio}`
      document.getElementsByClassName('img-fluid')[0].src= data.avatar_url;
      document.getElementById('urlGit').innerHTML=`${data.html_url}`;
      document.getElementById('id').innerHTML=`${data.id}`;
      document.getElementById('following').innerHTML=`${data.following}`;
      document.getElementById('followers').innerHTML=`${data.followers}`;
      document.getElementById('public-repos').innerHTML=`${data.public_repos}`;
      document.getElementById('latest-update').innerHTML=`${data.updated_at}`
    } catch {
      console.log("maaf server sedang maintenance");
    }
  };
  

getDataGithub()

