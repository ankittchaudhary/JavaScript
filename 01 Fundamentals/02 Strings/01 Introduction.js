/*


"Ankit"  its a string enclosed in double quotes
'Ankit'  its a string enclosed in single quotes

'some' + 'thing'  its a string concatenation // 'something'

typeof 'Ankit'  // 'string'
typeof 2 // 'number'

'hello' + 3 // 'hello3'  //type coercion  // number 3 is converted to string '3' and then concatenated with 'hello'

'hello' - 3 // NaN  // type coercion  // number 3 is converted to string '3' and then attempted to be subtracted from 'hello' which results in Not a Number (NaN)

'I'm Ankit'  // SyntaxError: Unexpected identifier  // because of the single quote in "I'm" which is interpreted as the end of the string

"I'm Ankit"  // This is correct because the string is enclosed in double quotes, allowing the single quote in "I'm" to be part of the string without causing a syntax error

//Escaping characters in strings

'It\'s a nice day'  // This is correct because the single quote in "It's" is escaped with a backslash, allowing it to be part of the string without causing a syntax error

"She said, \"Hello!\""  // This is correct because the double quotes around "Hello!" are escaped with a backslash, allowing them to be part of the string without causing a syntax error
'I\'m Ankit'  // This is correct because the single quote in "I'm" is escaped with a backslash, allowing it to be part of the string without causing a syntax error

\n // Newline character
\t // Tab character
\\ // Backslash character

` Multiline string
This is a string that spans
multiple lines. `

//Interpolation in template literals

let name = 'Ankit';
let greeting = `Hello, ${name}!`;  // This is correct because the variable 'name' is interpolated into the string using template literals






*/