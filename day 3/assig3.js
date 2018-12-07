var amitabh={fname:"Amitabh",lname:"Bacchan",age:71,skills:['Acting','Writing','Hosting'],address:{city:"Mumbai",pincode:01},dob:new Date('11-03-1897'),married:true,profession:"Actor"}
var abhishek=Object.create(amitabh);
abhishek.fname="Abhishek";
abhishek.age=31;
abhishek.dob=new Date(31-12-1990); 
abhishek.skills=['Overacting','kabbaddi'];
var aradhya=Object.create(abhishek);
aradhya.fname="Aradhyaa";
aradhya.age=5;
aradhya.skills=['playing'];
aradhya.married=false;
aradhya.dob=new Date(11-2-2015);
aradhya.profession="child";



function print(obj)
{
    console.log(obj);
}

print(amitabh);
print(abhishek);
print(aradhya);
console.log(abhishek.lname);        //inherited from amitabh
console.log(abhishek.address);      //inherited from amitabh
console.log(abhishek.profession);  //inherited from amitabh
console.log(aradhya.lname);         //inherited from amitabh via abhishek
console.log(aradhya.address);       //inherited from amitabh via abhishek