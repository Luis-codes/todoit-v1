// console.log("ToDoIt");

// let todoList: string[] = [];

// console.log("Current todo list: ", todoList);

// const todoInput: HTMLInputElement = document.getElementById('todoInput') as HTMLInputElement;

// function addTodo() : void {
//     // if we don't have the todo input
//     if(todoInput == null) {
//         console.error('The todo input is missing from the page!');
//         return;
//     }

//     // get the value from the input
//     const newTodo: string = todoInput.value;

//     // verify that there is text
//     if ('' !== newTodo.trim()) {
//         console.log('Adding todo: ', newTodo);

//         // add the new item to the list
//         todoList.push(newTodo);
//         console.log('New todo list: ', todoList);

//         // clear the input
//         todoInput.value = '';

//         // keep the list sorted
//         todoList.sort();

//         // update the todo list
//         updateTodoList();

//         // apply the todo list filter
//         filterTodoList();
//     }
// }

// const todoListDiv: HTMLDivElement = document.getElementById('todoListContainer') as HTMLDivElement;

// function updateTodoList(): void {
//     console.log("Updating the rendered todo list");
//     todoListDiv.innerHTML = '';
//     todoListDiv.textContent = '';

//     const ul = document.createElement('ul');
//     ul.setAttribute('id', 'todoList');
//     todoListDiv.appendChild(ul);

//     todoList.forEach(item => {
//         const li = document.createElement('li');
//         li.setAttribute('class', 'todo-list-item');
//         li.innerHTML = `<a href='#' 
//         onclick='removeTodoListItem("${item}")'>${item}</a>`;
//         ul.appendChild(li);
//     });
// }

// function filterTodoList(): void {
//     console.log("Filtering the rendered todo list");

//     const todoListHtml: HTMLUListElement = document.getElementById('todoList') as HTMLUListElement;

//     if (todoListHtml === null) {
//         console.log("Nothing to filter");
//         return;
//     }

//     const todoListFilter = document.getElementById('todoFilter') as HTMLInputElement;
//     const todoListFilterText = todoListFilter.value.toUpperCase();

//     todoListHtml.childNodes.forEach((item) => {
//         let itemText: string | null = item.textContent;
//         if (itemText !== null) {
//             itemText = itemText.toUpperCase();

//             if (itemText.startsWith(todoListFilterText)) {
//                 (item as HTMLLIElement).style.display = "list-item";
//             } else {
//                 (item as HTMLLIElement).style.display = "none";
//             }
//         }
//     });
// }

// function removeTodoListItem(itemToRemove: string): void {
//     console.log("item to remove: ", itemToRemove);

//     todoList = todoList.filter((value: string, _index, _array) =>{
//         if(value === itemToRemove) {
//             return false;
//         }
//         return true;
//     });
//     // unsafe alternative: todoList.splice(...)

//     // update the todo list
//     updateTodoList();

//     // apply the todo list filter
//     filterTodoList();
// }

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

// class TodoItem {
//     private readonly _creationTimestamp: number;
//     private readonly _indentifier: string;
    
//     constructor(private _description: string, indentifier?: string) {
//         this._creationTimestamp = new Date().getTime();

//         if (indentifier) {
//             this._indentifier = indentifier;
//         } else {
//             // this is just for the example; for any real projects, use
//             // UUIDs instead.
//         }
//     }

//     get creationTimestamp(): number {
//         return this._creationTimestamp;
//     }

//     get identifier(): string {
//         return this._indentifier;
//     }

//     get description(): string {
//         return this._description
//     }
// }

class TodoList {
    private _todoList: ReadonlyArray<TodoItem> = [];

    constructor(todoList?: TodoItem[]) {
        //first we make sure that we have received a valid array
        if (Array.isArray(todoList) && todoList.length) {
            this._todoList = this._todoList.concat(todoList);
        }
    }

    get todoList(): ReadonlyArray<TodoItem> {
        return this._todoList
    }

    addTodo(todoItem: TodoItem) {
        if(todoItem) {
            // the value is "truthy":
            // not null, not undefined, not NaN, not an empty string,
            // not 0, not false
            this._todoList = this._todoList.concat(todoItem);
        }
    }

    removeTodo(itemId: string) {
        if(itemId) {
            this._todoList = this._todoList.filter(item => {
                if(item.indentifier === itemId) {
                    return false; // drop
                } else {
                    return true; // keep
                }
            });
        }
    }
}