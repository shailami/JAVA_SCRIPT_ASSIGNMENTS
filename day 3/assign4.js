class BankAccount 
{
    constructor (accountNumber,accountHolderName,accountBalance)
    {
        this.accountBalance=accountBalance;
        this.accountHolderName=accountHolderName;
        this.accountNumber=accountNumber;

    }
      
}


class Salary extends BankAccount{
    constructor (accountNumber,accountHolderName,accountBalance,isSalary)
    {
        
        super(accountNumber,accountHolderName,accountBalance);
        this.isSalary=isSalary;
    }

    deposit(amount)
    {
        this.accountBalance+=amount;
        console.log("Amount Deposited");
    }

    withdraw(amount)
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

    getCurrentBalance()
    {
       console.log("Current SalaryAccountBalance is:",this.accountBalance);
    }

}

class Current extends BankAccount{
    
    constructor (accountNumber,accountHolderName,accountBalance,odLimit)
    {
        
        super(accountNumber,accountHolderName,accountBalance);
        this.odLimit=odLimit;
    }
    

    deposit(amount)
    {
        this.accountBalance+=amount;
        console.log("Amount Deposited");
    }

    withdraw(amount)
    {
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

    getCurrentBalance()
    {
       console.log("Current CurrentAccountBalance is:",this.accountBalance);
    }
}

var shell=new Salary(101,"shailu",500,true);
shell.getCurrentBalance();
shell.deposit(1000);
shell.getCurrentBalance();
shell.withdraw(100);
shell.getCurrentBalance();

var shailu=new Current(100,"shellu",300,200);
shailu.getCurrentBalance();
shailu.deposit(1000);
shailu.getCurrentBalance();
shailu.withdraw(1300);
shailu.getCurrentBalance();







    













