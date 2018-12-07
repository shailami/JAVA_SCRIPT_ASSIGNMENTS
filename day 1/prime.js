prime=function(n){
    if(n==1)
    return ("Not-prime");
    else  
    {
     for(var x=2;x<n;x++)
    {
        if(n%x==0)
        {
        return("NOT_Prime");
        }
       
    }

    return("Prime");
}

}
console.log(prime(13));