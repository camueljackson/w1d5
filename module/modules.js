
let listItems = [];


function list(num) {

  listItems.push(num);
  return listItems;
}


// ******************************************


function sortList() {

  return listItems.sort(function (a,b) {
    return a-b;
  });

}


// ******************************************


module.exports = {
  list: list,
  sortList: sortList,

};