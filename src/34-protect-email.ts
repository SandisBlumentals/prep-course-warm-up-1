export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */

const protectEmail = (eMail:string) => {
    var [mail, domain] = eMail.split('@');
        var emailLength = mail.length;
        switch (emailLength) {
            case 6: 
            case 5: 
            case 4: 
                mail = mail.slice(0,mail.length-3);
                break;
            case 3: 
            case 2: 
            case 1: 
            case 0: 
                mail = "";
                break;
            default:
                mail = mail.slice(0,3);
        }
    return mail+"...@"+domain;
}

console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
console.log(protectEmail('12345@example.com')); // Expected result: 12...@example.com
console.log(protectEmail('12@example.com')); // Expected result: ...@example.com