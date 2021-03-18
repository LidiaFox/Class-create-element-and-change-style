## Create class (ES6)
I create class which creates new element in document and change its style.
1. Create `class Options` (_name class - always with a capital letter_)
2. Declaration metod `constructor` and add arguments `(height, ...)`
3. Write properties in every arguments use _this_ - `this.height = height`.
4. Create metod (function) which creates new element `div` in document and change its style.
 4.1 Startly I create element `let div = document.createElement('div')`
 4.2 After I insert element in DOM `document.body.appendChild(div)`
 4.3 After I assign style properties `div.style.height = this.height`
5. When the class is created I creat new object and I writen its properties in arguments `const div = new Options('40px', '600px', 'blue', '8px', 'any text')`
6. And in the end I call the metod `div.createElement()`

