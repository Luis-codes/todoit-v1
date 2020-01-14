var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("ToDoIt");
var todoList = [];
console.log("Current todo list: ", todoList);
var todoInput = document.getElementById('todoInput');
function addTodo() {
    // if we don't have the todo input
    if (todoInput == null) {
        console.error('The todo input is missing from the page!');
        return;
    }
    // get the value from the input
    var newTodo = todoInput.value;
    // verify that there is text
    if ('' !== newTodo.trim()) {
        console.log('Adding todo: ', newTodo);
        // add the new item to the list
        todoList.push(newTodo);
        console.log('New todo list: ', todoList);
        // clear the input
        todoInput.value = '';
        // keep the list sorted
        todoList.sort();
        // update the todo list
        updateTodoList();
        // apply the todo list filter
        filterTodoList();
    }
}
var todoListDiv = document.getElementById('todoListContainer');
function updateTodoList() {
    console.log("Updating the rendered todo list");
    todoListDiv.innerHTML = '';
    todoListDiv.textContent = '';
    var ul = document.createElement('ul');
    ul.setAttribute('id', 'todoList');
    todoListDiv.appendChild(ul);
    todoList.forEach(function (item) {
        var li = document.createElement('li');
        li.setAttribute('class', 'todo-list-item');
        li.innerHTML = "<a href='#' \n        onclick='removeTodoListItem(\"" + item + "\")'>" + item + "</a>";
        ul.appendChild(li);
    });
}
function filterTodoList() {
    console.log("Filtering the rendered todo list");
    var todoListHtml = document.getElementById('todoList');
    if (todoListHtml === null) {
        console.log("Nothing to filter");
        return;
    }
    var todoListFilter = document.getElementById('todoFilter');
    var todoListFilterText = todoListFilter.value.toUpperCase();
    todoListHtml.childNodes.forEach(function (item) {
        var itemText = item.textContent;
        if (itemText !== null) {
            itemText = itemText.toUpperCase();
            if (itemText.startsWith(todoListFilterText)) {
                item.style.display = "list-item";
            }
            else {
                item.style.display = "none";
            }
        }
    });
}
function removeTodoListItem(itemToRemove) {
    console.log("item to remove: ", itemToRemove);
    todoList = todoList.filter(function (value, _index, _array) {
        if (value === itemToRemove) {
            return false;
        }
        return true;
    });
    // unsafe alternative: todoList.splice(...)
    // update the todo list
    updateTodoList();
    // apply the todo list filter
    filterTodoList();
}
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
var ColoredCar = /** @class */ (function () {
    function ColoredCar(color) {
        this._color = color;
    }
    ColoredCar.prototype.displayColor = function () {
        console.log("Color of this car: " + this._color);
    };
    Object.defineProperty(ColoredCar.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: true,
        configurable: true
    });
    ColoredCar.prototype.resetColor = function () {
        this._color = ColoredCar.DEFAULT_COLOR;
    };
    ColoredCar.DEFAULT_COLOR = "Red";
    return ColoredCar;
}());
var Shape = /** @class */ (function () {
    function Shape(_shapeName) {
        this._shapeName = _shapeName;
        this.displayInformation();
    }
    Object.defineProperty(Shape.prototype, "shapeName", {
        get: function () {
            return this._shapeName;
        },
        enumerable: true,
        configurable: true
    });
    Shape.prototype.displayInformation = function () {
        console.log("This shape is a " + this._shapeName);
    };
    Shape.prototype.doSomething = function () {
        console.log("Not Interesting");
    };
    return Shape;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(_width) {
        var _this = _super.call(this, "Square") || this;
        _this._width = _width;
        return _this;
    }
    Square.prototype.displayArea = function () {
        var area = this._width * this._width;
        console.log("This " + this.shapeName + " has an area of: " + area);
    };
    Square.prototype.displayPerimeter = function () {
        var perimeter = 2 * (this._width + this._width);
        console.log("This " + this.shapeName + " has a perimeter of: " + perimeter);
    };
    Square.prototype.doSomething = function () {
        console.log("Something more interesting");
    };
    return Square;
}(Shape));
var square = new Square(5);
square.displayArea();
square.displayPerimeter();
square.doSomething();
var Calculator = /** @class */ (function () {
    function Calculator(_currentValue) {
        if (_currentValue === void 0) { _currentValue = 0; }
        this._currentValue = _currentValue;
    }
    Calculator.prototype.add = function (a) {
        this._currentValue += a;
        return this;
    };
    Calculator.prototype.subtract = function (a) {
        this._currentValue -= a;
        return this;
    };
    Calculator.prototype.multiply = function (a) {
        this._currentValue *= a;
        return this;
    };
    Calculator.prototype.divide = function (a) {
        this._currentValue /= a;
        return this;
    };
    Object.defineProperty(Calculator.prototype, "value", {
        get: function () {
            return this._currentValue;
        },
        enumerable: true,
        configurable: true
    });
    return Calculator;
}());
var result = new Calculator(0)
    .add(5)
    .multiply(2)
    .add(10)
    .divide(4)
    .subtract(2)
    .value;
console.log("Result: " + result);
