function isValidEmail(email){
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailPattern.test(email)
}

console.log(isValidEmail("test@example.com")); // ✅ true
console.log(isValidEmail("user.name@domain.co.in")); // ✅ true
console.log(isValidEmail("invalid-email@com")); // ❌ false