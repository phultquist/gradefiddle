// function Assignment(string){
//   if (string){
//
//   } else {
//     this.name = '';
//     this.score;
//     this.outOf;
//   }
//   this.id = 'a'+ID();
// }
//
// Assignment.prototype.calcLetterGrade = function () {
//     var percent = parseFloat(this.score) / parseFloat(this.outOf);
//
//     let grade = '';
//
//     if (percent >= 0.93) {
//       grade = 'A';
//     } else if (percent >= 0.9) {
//       grade = 'A-';
//     } else if (percent >= 0.87) {
//       grade = 'B+';
//     } else if (percent >= 0.83) {
//       grade = 'B';
//     } else if (percent >= 0.8) {
//       grade = 'B-';
//     } else if (percent >= 0.77) {
//       grade = 'C+';
//     } else if (percent >= 0.73) {
//       grade = 'C';
//     } else if (percent >= 0.7) {
//       grade = 'C-';
//     } else if (percent > 0) {
//       grade = 'D';
//     }
//
//     return grade;
// }

function Category(name, weight){
  this.weight = weight;
  this.name = name;
  this.id = 'c'+ID();
  this.assignments = [];
}

Category.prototype.categoryMakeup = function(){
  var tof = 0;
  var ts = 0;
  this.assignments.map(function(x){
    ts += parseFloat(x.score);
    tof += parseFloat(x.outOf);
  })
  if (tof == 0 || ts == 0){
    return null;
  }
  return this.weight * (ts/tof)
}


var ID = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
};
let n = 1;
function Assignment(tableId){
  this.name = 'New Assignment';
  this.category = getCategoryById(tableId);
  if (n > 1) this.name += " "+n;
  let table = $("#"+tableId);
  this.score = 10;
  this.outOf = 10;
  this.id = ID();
  this.category.assignments.push(this);
  n++;
}
