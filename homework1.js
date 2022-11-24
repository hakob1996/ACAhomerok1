//PART1
var nums = ['367','1002', '250','8'];
var newNums =[] ;

for(var i=0; i<4; i++){
    if(nums[i].slice(-1)<1){
        newNums.push(nums[i])
    }else{
        newNums.push(nums[i].slice(-1)+ nums[i].slice(0, -1))
    }
}
console.log(newNums)


//PART 2
var nums1 = [45,26,78];
var nums2 = [-23,-456,0];
var jam 

function compare(a){
    for(var i=0; i<a.length; i++){
        for (var y=i+1; y<a.length; y++){
            if(a[i]>a[y]){
                jam = a[i];
                a[i] = a[y];
                a[y] = jam;
            }
        }
    }
    console.log(a)
    }
    
compare(nums1);
compare(nums2);

//PART3


var n = +prompt();

var i = 0;
var j = 0;

if(n%10 === 0 && !Math.floor(n/10)){
        i += 1
}
if(n%3 === 0 && n%10 === 1){
        j +=1
}

console.log(`${i}, ${j}`)

//PART4

var question1 = prompt('Please enter the name of shape here');
var question2 = prompt('Please enter the first parameter (positive numbers ONLY!) ');
var question3 = prompt('Please enter the second parameter (positive numbers ONLY!) ');
if(question1 == 'triangle' && question2>0 && question3 >0 ){
    alert(`Square of triangle is ${(question2/2) * question3} `)
}else if(question1 == 'rectangle' && question2>0 && question3 >0 ){
    alert(`Square of rectangle is ${question2 * question3} `)
}else if(question2 <=0 || question3<=0){
    alert('ONLY positive numbers please')
}
else{
    alert('please check the name of the shape')
}

//PART5 did not solve the comparing part. trid the continue; , tried the second for loop bug still were not able
var arr=[];
var obj1 = {
    a: 1,
    b: 2
}
var obj1Clone={}

var obj2 = {
    a: 1,
    b: 2,
    c: 2
}

var obj3 = {
    a: 1,
    b: 2,
    c: 2,
    d: 2
}

function reverse(a){
    var temp 
    for (var key in a) {
    /*Did some google research for this line*/    obj1Clone[a[key]] = key;
    // console.log(Object.values(a ))
}

}
reverse(obj2)
console.log(obj1Clone)
