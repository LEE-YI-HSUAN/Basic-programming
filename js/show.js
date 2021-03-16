const testFolder = '科技組/';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});

$(document).ready(function(){
    var item = `<div class ="container">
                    <a class ="content-link" href="#">
                        <img class="show-img" src="img/1.jpg" alt="">
                        <div class="show-title">
                            <p class="title">第一組-title</p>
                        </div>
                    </a>
                </div>`;

    for(var i = 1;i < 10;i++)
        $("#main").append(item);
    
    
});
