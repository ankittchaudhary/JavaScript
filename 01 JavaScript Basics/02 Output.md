
# JavaScript Output Methods

## 1. **Alert Box**
```javascript
alert("Hello, World!");
```
Displays a popup dialog box with a message.

## 2. **Console Log**
```javascript
console.log("Hello, World!");
```
Outputs messages to the browser console (DevTools).

## 3. **Document Write**
```javascript
document.write("Hello, World!");
```
Writes directly to the HTML document (can overwrite entire page if used after page load).

## 4. **innerHTML**
```javascript
document.getElementById("demo").innerHTML = "Hello, World!";
```
Sets HTML content of a specific element.

## 5. **TextContent**
```javascript
document.getElementById("demo").textContent = "Hello, World!";
```
Sets text content of an element (safer than innerHTML).

## 6. **Console Table**
```javascript
console.table({name: "Ankit", age: 25});
```
Displays data in table format in the console.

## 7. **Console Error & Warn**
```javascript
console.error("Error message");
console.warn("Warning message");
```
Outputs error and warning messages to the console.
