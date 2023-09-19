var courseName=document.getElementById('courseName');
var courseCategory=document.getElementById('courseCategory');
var coursePrice=document.getElementById('coursePrice');
var courseDescription=document.getElementById('courseDescription');
var courseCapacity=document.getElementById('courseCapacity');
var btn=document.getElementById('click');
var deleteAll=document.getElementById('deleteBtn');
var courses=[];
var clear=document.querySelectorAll('.inputs');
btn.addEventListener('click', function(e){
e.preventDefault();
addCourse();
removeCourse();
displayCourse();
})
function addCourse(){
  var course={
    name:courseName.value,
    catagory:courseCategory.value,
    price:coursePrice.value,
    description :courseDescription.value,
    capacity:courseCapacity.value,
  }
  courses.push(course);
}
function removeCourse(){
  for(var i=0;i<clear.length;i++){
    clear[i].value="";
  }
}
function displayCourse(){
  var result='';
  for(var i=0;i<courses.length;i++){
    result+=`
    <tr>
    <td>${i}</td>
    <td>${courses[i].name}</td>
    <td>${courses[i].catagory}</td>
    <td>${courses[i].price}</td>
    <td>${courses[i].description}</td>
    <td>${courses[i].capacity}</td>
    <td><button class="btn btn-outline-info" onclick="deleteCourses(${i})">delete</button></td>
    <td><button class="btn btn-outline-info">update</button></td>
    </tr>
    `;
  }
  document.getElementById('data').innerHTML=result;
}
function deleteCourses(id) {
  courses.splice(id, 1);
  displayCourse();
}
deleteAll.addEventListener('click', function(){
    courses.splice(0,courses.length);
  displayCourse();
})