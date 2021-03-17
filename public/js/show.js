$(document).ready(function(){
    const Url = location.href.split('?');
    const _id = Url[1].split('=');
    // console.log(_id[1]);
  var allfiles;
 
  const api = "http://localhost:3000/show";
  var data={'Group':_id[1]};

  $.post(api,data,function(res){
    
    allfiles = res.all;
    // console.log(allfiles);
    for(var i = 1;i <= allfiles.length;i++){
        additem(allfiles[i-1]);
    }
  });

  function additem(files){
    var item = `<div class ="container">
                    <a class ="content-link" href="http://localhost:3000/${data.Group}/${files}/index.html">
                        <img class="show-img" src="img/${data.Group}/${files}.jpg" alt="">
                        <div class="show-title">
                            <p class="title">${files}</p>
                        </div>
                    </a>
                </div>`;
      $('#main').append(item);
  }
      
});
