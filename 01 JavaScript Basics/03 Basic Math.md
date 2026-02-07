
# Basic Math in JavaScript

## Arithmetic Operators

JavaScript follows the standard **order of operations (PEMDAS/BODMAS)**:

1. **Parentheses** `()`
2. **Exponentiation** `**`
3. **Multiplication** `*`, **Division** `/`, **Modulus** `%`
4. **Addition** `+`, **Subtraction** `-`

### Examples
```javascript
10 + 5 * 2        // 20 (multiplication first)
(10 + 5) * 2      // 30 (parentheses first)
10 - 3 + 2        // 9 (left to right)
20 / 4 * 5        // 25 (left to right)
```

## Common Math Methods

### `Math.round()`
Rounds to nearest integer
```javascript
Math.round(4.5)    // 5
Math.round(4.4)    // 4
```

### `Math.floor()`
Rounds down
```javascript
Math.floor(4.9)    // 4
```

### `Math.ceil()`
Rounds up
```javascript
Math.ceil(4.1)     // 5
```

### `Math.abs()`
Absolute value
```javascript
Math.abs(-5)       // 5
```

### `Math.max() / Math.min()`
Find largest or smallest
```javascript
Math.max(5, 10, 3)     // 10
Math.min(5, 10, 3)     // 3
```

### `Math.pow()`
Exponentiation
```javascript
Math.pow(2, 3)     // 8
```

### `Math.sqrt()`
Square root
```javascript
Math.sqrt(16)      // 4
```
