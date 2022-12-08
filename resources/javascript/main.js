// let projectDataInject = $("#datas");
let projectDataInject = $("#datas");
project.forEach((item) => {
  // console.log(item.imagePath)

  let projectOutput = `
  <div class="col">
    <div class="card h-100">
      <img src="/resources/img/${item.imagePath}" class="card-img-top w-100" alt="${item.projectName} Website Screenshot">
      <div class="card-body">
        <p class="font22-static mb-3"><strong>${item.projectName}</strong></p>
        <p class="font20-static">${item.projectDescription}</p>
      </div>
      <div class="card-footer">
      <p class="font18-static mb-2">${item.languagesUsed}</p>
        <div class="project-links">`;        
          item.links.forEach((items) => {
            if(items.linkType == 2){ //github
              projectOutput = projectOutput + `<a href="${items.url}" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i></a>`;
            } else if(items.linkType == 3){ //external link
              projectOutput = projectOutput + `<a href="${items.url}" target="_blank" rel="noopener noreferrer"><i class="bi bi-box-arrow-up-right"></i></a>`;
            }
            
          });

        projectOutput = projectOutput + `
        
          
        </div>
      </div>
    </div>
  </div>
  `;

  projectDataInject.append(projectOutput);
});