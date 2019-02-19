
let selection = prompt ("Press B: Balance, D: Deposit, W: Withdrawal, Q: Quit");

  let balance = 5000;
  let deposit= 0;
  let withdrawal = 0;

  while (selection !== "Q" && selection !== "q") {
  switch (selection) {
      case "B":
      case "b":
        alert("Your Current Balance is :" + " " + balance);
        selection = prompt ("Press B: Balance, D: Deposit, W: Withdrawal, Q: Quit");

      break;
      case "D":
      case "d":
        prompt("How much would you like to deposit?");
        selection = prompt ("Press B: Balance, D: Deposit, W: Withdrawal, Q: Quit");

      break;
      case "W":
      case "w":
        prompt("How much would you like to withdraw?");
        selection = prompt ("Press B: Balance, D: Deposit, W: Withdrawal, Q: Quit");

      break;
      default :
        selection = prompt ("Press B: Balance, D: Deposit, W: Withdrawal, Q: Quit");
        break;
    }
  }
