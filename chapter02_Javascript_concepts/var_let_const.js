var TestCases =["login", "Logout", "Register", "Forgot Password", "Reset Password"];
for(var i=0; i<TestCases.length; i++){
    console.log(TestCases[i]);
}
console.log("loop countr leak", i); // i is accessible here because var is function-scoped