function BankAccount(accountNumber,accountHolderName,accountBalance)
{
    
        this.accountBalance=accountBalance;
        this.accountHolderName=accountHolderName;
        this.accountNumber=accountNumber;

       this.getCurrentBalance=function()
    {
       console.log("Current SalaryAccountBalance is:",this.accountBalance);
    }

    this.deposit=function(amount)
    {
        this.accountBalance+=amount;
        console.log("Amount Deposited");
    }

    
    this.withdraw=function(amount)
    {
        if(this.isSalary)
    {
        if(this.accountBalance>=amount)
       {
       this.accountBalance-=amount;
       console.log("Amount withdrawn from saving");
       }
       else
       {
           console.log("Withdrawl not possible");
       }
    }
   
    else {
    this.withdrawLimit = parseInt(this.accountBalance) + parseInt(this.odLimit);
    //console.log(this.odLimit);
    if(this.accountBalance>=amount)
    {

       this.accountBalance-=amount;
       console.log("Amount withdrawn from current");
    }

    else if(this.withdrawLimit>= amount)
    {
        this.withdrawLimit-=amount;
        this.accountBalance=0;
        console.log("Amount withdrawn from current using odLimit");
    }

   else
    {
       console.log("WithDraw not possible");
    }

    }
}
}


var salary=new BankAccount(101,"shailu",500 )
    
salary.isSalary=true;
salary.getCurrentBalance();
salary.deposit(1000);
salary.getCurrentBalance();
salary.withdraw(100);
salary.getCurrentBalance();


var current=new BankAccount(100,"shellu",300)
current.odLimit=1000;
current.getCurrentBalance();
current.deposit(1000);
current.getCurrentBalance();
current.withdraw(1300);
current.getCurrentBalance();
    
   
 
        
        
   

    


    

   








    













