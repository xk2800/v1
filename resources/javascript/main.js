let projectDataInject = $("#datas");
project.forEach((item) => {
  let projectOutput = '';

  if (item.featured === true) {
    projectOutput = `
      <div class="col">
        <div class="card h-100">
          <img src="/resources/img/${item.imagePath}" class="card-img-top w-100" alt="${item.projectName} Website Screenshot">
          <div class="card-body">
            <p class="font22-static mb-3"><strong>${item.projectName}</strong></p>
            <p class="font20-static">${item.projectDescription}</p>
          </div>
          <div class="card-footer">
            <p class="font18-static mb-2">${item.languagesUsed}</p>
            <div class="project-links">
    `;

    item.links.forEach((link) => {
      if (link.linkType === 2) { // github
        projectOutput += `<a href="${link.url}" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i></a>`;
      } else if (link.linkType === 3) { // external link
        projectOutput += `<a href="${link.url}" target="_blank" rel="noopener noreferrer"><i class="bi bi-box-arrow-up-right"></i></a>`;
      }
    });

    projectOutput += `
            </div>
          </div>
        </div>
      </div>
    `;
  }

  projectDataInject.append(projectOutput);
});

const sortedProjects = project.sort((a, b) => b.year.localeCompare(b.year));
function generateNonFeaturedProjectsHTML(projects) {
  const sortedProjects = project.sort((a, b) => b.year.localeCompare(a.year));

  let nonFeaturedProjectOutput = '';

  sortedProjects.forEach(item => {
    if (!item.featured) {
      nonFeaturedProjectOutput += `
          <tr>
            <td>${item.year}</td>
            <td>${item.projectName}</td>
            <td class='d-none d-md-table-cell'>${item.projectDescription}</td>
            <td class='d-none d-md-table-cell'>${item.projectBuiltAt}</td>
            <td>
              <ul>
                ${item.languagesUsed.split(', ').map(language => `<li><div class="pill">${language}</div></li>`).join('')}
              </ul>
            </td>
          </tr>
      `;
    }
  });

  return nonFeaturedProjectOutput;
}

// Use the function with your projects array
const nonFeaturedProjectsHTML = generateNonFeaturedProjectsHTML(archives);

// Inject the HTML into the specified element
let nonFeaturedProjectDataInject = $("#non-featured");
nonFeaturedProjectDataInject.append(nonFeaturedProjectsHTML);
