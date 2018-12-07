var amitabh={fname:"Amitabh",lname:"Bacchan",age:71,skills:['Acting','Writing','Hosting'],address:{city:"Mumbai",pincode:01},dob:new Date('11-03-1897'),married:true,profession:"Actor"}
var abhishek=Object.create(amitabh);
abhishek.fname="Abhishek";
abhishek.age=31;
abhishek.dob=new Date(31-12-1990); 
abhishek.skills=['Overacting','kabbaddi'];



function print(obj)
{
    console.log(obj);
}

print(amitabh);
print(abhishek);
console.log(abhishek.lname);