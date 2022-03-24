import * as fs from 'fs-web';

export const addNewCategory = (categoryFormat) => {
    let dataToUpdate = [];
    console.log("=====>> appending category", categoryFormat);
    fs.readFile('/src/data/category.json')
    .then(data => {
        console.log("=====>> data", data);
        var obj = JSON.parse(data);
        obj.push(categoryFormat);
        dataToUpdate = JSON.stringify(obj);
        fs.writeFile("/category.json", dataToUpdate);
    })
    .catch(err => {
        console.log("=====>> got error", err);
    });
  return dataToUpdate;
}
