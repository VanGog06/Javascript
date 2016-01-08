var number = prompt("Enter a number");

if (number != null || number != "")
{
    alert((+number).toString(16).toUpperCase());
    console.log(number);
}
