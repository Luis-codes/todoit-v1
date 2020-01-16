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
// class Car {
// }
// let car: Car = new Car();
// class ColoredCar {
//     private _color: string;
//     private static DEFAULT_COLOR = "Red";
//     constructor(color: string) {
//         this._color = color;
//     }
//     displayColor() {
//         console.log(`Color of this car: ${this._color}`);
//     }
//     public get color(): string {
//         return this._color;
//     }
//     public set color(color: string) {
//         this._color = color
//     }
//     private resetColor() {
//         this._color = ColoredCar.DEFAULT_COLOR;
//     }
// }
// abstract class Shape {
//     constructor(private readonly _shapeName: string) {
//         this.displayInformation();
//     }
//     abstract displayArea(): void;
//     abstract displayPerimeter(): void;
//     protected get shapeName(): string {
//         return this._shapeName
//     }
//     public displayInformation(): void {
//         console.log(`This shape is a ${this._shapeName}`);
//     }
//     public doSomething(): void {
//         console.log("Not Interesting");
//     }
// }
// class Square extends Shape {
//     constructor(private _width: number) {
//         super("Square")
//     }
//     displayArea(): void {
//         const area = this._width * this._width;
//         console.log(`This ${this.shapeName} has an area of: ${area}`);
//     }
//     displayPerimeter(): void {
//         const perimeter = 2 * (this._width + this._width);
//         console.log(`This ${this.shapeName} has a perimeter of: ${perimeter}`);
//     }
//     public doSomething(): void {
//         console.log("Something more interesting");
//     }
// }
// let square: Square = new Square(5);
// square.displayArea();
// square.displayPerimeter();
// square.doSomething();
// class Calculator {
//     constructor(private _currentValue: number = 0) { }
//     add(a: number): this {
//         this._currentValue += a;
//         return this;
//     }
//     subtract(a: number): this {
//         this._currentValue -= a;
//         return this;
//     }
//     multiply(a: number): this {
//         this._currentValue *= a;
//         return this;
//     }
//     divide(a: number): this {
//         this._currentValue /= a;
//         return this;
//     }
//     get value(): number {
//         return this._currentValue;
//     }
// }
// let result: number = new Calculator(0)
// .add(5) 
// .multiply(2)
// .add(10)
// .divide(4)
// .subtract(2)
// .value;
// console.log(`Result: ${result}`);
// const plane: {
//     name: string,
//     description: string
// } = {
//     name:"Plane",
//     description: "Something that flies"
// };
// function foo(bar: { firstName: string, lastName: string }): void {
//     console.log(`Hello ${bar.firstName}.. or should I call you Mr.${bar.lastName}?`);
// }
// foo({
//     firstName: "Sebastien",
//     lastName: "Dubois"
// });
// function performCalculation(
//     a: number,
//     b: number,
//     calculationFn: (x: number, y: number) => number
// ): void {
//     console.log(`The result is ${calculationFn(a, b) }`);
// }
// performCalculation(
//     5,
//     10,
//     (x: number, y: number) => x + y
// );
// type Thing = {
//     name: string,
//     description: string
// };
// const myThing: Thing = {
//     name: "Computer",
//     description: "A thing that can perform calculation"
// };
// interface MusicPlayer {
//     play(): void;
//     pause(): void;
//     stop(): void;
//     rewind(seconds: number): void;
//     fastForward(seconds: number): void;
// }
// class BasicMusicPlayer implements MusicPlayer {
//     fastForward(seconds: number): void {
//         console.log(`Moving forward ${seconds} seconds`);
//     }
//     pause(): void {
//         console.log("Pausing");
//     }
//     play(): void {
//         console.log("Playing")
//     }
//     rewind(seconds: number): void {
//         console.log(`Rewinding ${seconds}`);
//     }
//     stop(): void {
//         console.log("Stopping");
//     }
// }
// interface Person {
//     firstName: string,
//     lastName: string,
//     age: number
// }
// function sayHelloTo(bar: Person): void {
//     console.log(`Hello ${bar.firstName}.. or should I call you Mr.${bar.lastName}?`);
// }
// let johnDoe: Person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 42
// };
// sayHelloTo(johnDoe);
// interface Club {
//     name: string;
//     logoLocation: string;
//     isActive(): boolean;
// }
// interface SoccerClub extends Club {
//     league: string;
// }
