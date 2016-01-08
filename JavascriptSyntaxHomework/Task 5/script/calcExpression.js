function calculateExpression() {
    var expression = document.getElementById("expression").value;
    expression = eval(expression);
    document.getElementById("result").innerHTML = expression;
}
