# Angular21

# Data Types in Angular 21 & TypeScript – Complete Guide

TypeScript is the primary language used to develop Angular applications. Angular 21 uses TypeScript to help developers write clean, maintainable, scalable, and type-safe code.

Let's understand each concept with practical Angular 21 examples that you can use in real-world projects.

## 1. What are Data Types in Angular & TypeScript?

A data type defines what kind of value a variable or property can store.

For example:

typescript

```typescript
let username: string = 'John';
let age: number = 25;
let isActive: boolean = true;
```

Here:

- `string` – Stores text.
- `number` – Stores numeric values.
- `boolean` – Stores `true` or `false`.

TypeScript checks whether you assign the correct type of value.

typescript

```typescript
let age: number = 25;

age = 30;       // Valid
age = 'Hello';  // Error
```

### Common TypeScript data types

| Data type | Example |
| --- | --- |
| string | `'Angular'` |
| number | `100` |
| boolean | `true` |
| array | `[10, 20, 30]` |
| object | `{ name: 'John' }` |
| any | Any value |
| unknown | Any value, requires type checking |
| void | No meaningful return value |
| null | `null` |
| undefined | `undefined` |
| union | `string \\| number` |

## 2. Why are Data Types Important in Real Projects?

Imagine you are developing an employee management application.

An employee has:

- Employee name
- Employee ID
- Salary
- Active status

Without proper data types:

typescript

```typescript
let employeeName: any = 'John';
let salary: any = 50000;

salary = 'Hello';
```

TypeScript won't report an error for assigning a string to salary because `any` disables type checking.

With proper data types:

typescript

```typescript
let employeeName: string = 'John';
let salary: number = 50000;
let isActive: boolean = true;
```

Now TypeScript catches incorrect assignments.

Benefits in real projects:

1. Prevents common programming mistakes.
2. Identifies errors during development.
3. Improves code readability.
4. Provides better IntelliSense and autocomplete.
5. Makes refactoring easier.
6. Helps maintain large Angular applications.
7. Improves communication between developers.

Real-world example: In an e-commerce application, the product price should always be a number. TypeScript helps prevent accidentally assigning text to the price.

## 3. Auto Type Inference in TypeScript

TypeScript can automatically identify the data type based on the assigned value.

This is called Type Inference.

Example:

typescript

```typescript
let username = 'John';
let age = 25;
let isActive = true;
```

TypeScript automatically understands:

typescript

```typescript
let username: string = 'John';
let age: number = 25;
let isActive: boolean = true;
```

You don't need to explicitly mention the data type every time.

### Example with arrays

typescript

```typescript
let numbers = [10, 20, 30];
let names = ['John', 'David', 'Smith'];
```

TypeScript infers:

- `numbers` as `number[]`
- `names` as `string[]`

### Important point

When TypeScript can infer the type correctly, you generally don't need to write it explicitly.

However, for function parameters, API models, and public component properties, explicitly defining types often improves clarity.

## 4. How to Define Data Types for Properties & Variables

First, understand the difference between a property and a variable.

### A. Properties in Angular

A property is a value declared inside a class.

Example:

typescript

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <h2>{{ username }}</h2>
    <p>Age: {{ age }}</p>
  `
})
export class UserComponent {

  username: string = 'John';
  age: number = 25;
  isActive: boolean = true;

}
```

Here:

- `username` is a string property.
- `age` is a number property.
- `isActive` is a boolean property.

Properties belong to the class and can be accessed by its methods and Angular template.

### B. Variables in TypeScript

Variables are declared inside functions, methods, or other blocks.

typescript

```typescript
export class UserComponent {

  username: string = 'John';

  showMessage(): void {

    let message: string = 'Welcome to Angular 21';

    let age: number = 25;

    console.log(message);
    console.log(age);

  }

}
```

Here, `message` and `age` are local variables.

### Difference between Property and Variable

| Property | Variable |
| --- | --- |
| Declared inside a class | Can be declared inside a function or block |
| Belongs to an object/class instance (for instance properties) | Has a local or other declared scope |
| Can be accessed by class methods | Accessible within its scope |
| Can be used in Angular templates when accessible | Local variables cannot directly be accessed in the component template |
| Example: `username: string` | Example: `let age: number` |

Real-world example:

typescript

```typescript
export class EmployeeComponent {

  // Class properties
  employeeName: string = 'John';
  salary: number = 50000;

  calculateBonus(): void {

    // Local variables
    let bonus: number = 5000;
    let totalSalary: number = this.salary + bonus;

    console.log(totalSalary);

  }

}
```

Remember:

- Properties store class-level data.
- Variables store temporary values within their scope.

## 5. How to Define Data Types for Function Parameters

Function parameters are values passed to a function or method.

We can define their data types explicitly.

### Example 1: String parameter

typescript

```typescript
export class UserComponent {

  greetUser(username: string): void {

    console.log('Welcome ' + username);

  }

}
```

Calling the method:

typescript

```typescript
this.greetUser('John');  // Valid

this.greetUser(100);     // Error
```

### Example 2: Multiple parameters

typescript

```typescript
export class EmployeeComponent {

  getEmployeeDetails(
    name: string,
    age: number,
    salary: number
  ): void {

    console.log(name);
    console.log(age);
    console.log(salary);

  }

}
```

Calling the method:

typescript

```typescript
this.getEmployeeDetails('John', 25, 50000);
```

### Example 3: Function parameters in real projects

Suppose you have a product management application.

typescript

```typescript
export class ProductComponent {

  updateProduct(
    productId: number,
    productName: string,
    price: number
  ): void {

    console.log('Product Updated');

  }

}
```

This ensures that the method receives the correct type of values.

## 6. How to Define Function Return Types

A return type defines what type of value a function returns.

Syntax:

typescript

```typescript
function functionName(): returnType {
  // Code
}
```

### Example 1: String return type

typescript

```typescript
getUsername(): string {

  return 'John';

}
```

### Example 2: Number return type

typescript

```typescript
getAge(): number {

  return 25;

}
```

### Example 3: Boolean return type

typescript

```typescript
isActive(): boolean {

  return true;

}
```

### Example 4: Void return type

If a function does not return a meaningful value, use `void`.

typescript

```typescript
showMessage(): void {

  console.log('Welcome to Angular 21');

}
```

### Example 5: Function with parameters and return type

typescript

```typescript
export class CalculatorComponent {

  addNumbers(
    num1: number,
    num2: number
  ): number {

    return num1 + num2;

  }

}
```

Calling the method:

typescript

```typescript
let result: number = this.addNumbers(10, 20);

console.log(result); // 30
```

### Quick reference

| Function | Return type |
| --- | --- |
| `getName()` | `string` |
| `getAge()` | `number` |
| `isActive()` | `boolean` |
| `getUsers()` | `User[]` |
| `showMessage()` | `void` |

Note: TypeScript can infer function return types automatically, but explicitly defining return types is useful for important application methods and service APIs.

## 7. How to Define Data Types for Button Click Events

In Angular, we use event binding to handle button click events.

Syntax:

HTMLWrap linesCopy codePreview

```html
<button (click)="functionName()">Click Me</button>
```

### Example 1: Button click without an event parameter

user.component.html

HTMLWrap linesCopy codePreview

```html
<button (click)="showMessage()">
  Click Me
</button>
```

user.component.ts

typescript

```typescript
export class UserComponent {

  showMessage(): void {

    console.log('Button Clicked');

  }

}
```

Here, we don't need an event object because we only want to execute a function.

### Example 2: Button click with an event parameter

user.component.html

HTMLWrap linesCopy codePreview

```html
<button (click)="showMessage($event)">
  Click Me
</button>
```

user.component.ts

typescript

```typescript
export class UserComponent {

  showMessage(event: MouseEvent): void {

    console.log('Button Clicked');

    console.log(event);

  }

}
```

Here:

- `$event` represents the event object.
- `MouseEvent` defines the event data type.
- We can access information about the click event.

### Example 3: Access button information

typescript

```typescript
showMessage(event: MouseEvent): void {

  const button = event.target as HTMLButtonElement;

  console.log(button.innerText);

}
```

This retrieves the text inside the clicked button.

## 8. How to Define Data Types for Input Change Events

In Angular, we commonly use the `(input)` event to detect changes in an input field.

### Example 1: Input event

user.component.html

HTMLWrap linesCopy codePreview

```html
<input
  type="text"
  (input)="getUserName($event)"
/>
```

user.component.ts

typescript

```typescript
export class UserComponent {

  getUserName(event: Event): void {

    console.log(event);

  }

}
```

Here, the event parameter uses the `Event` data type.

### Example 2: Get input field value

typescript

```typescript
getUserName(event: Event): void {

  const input = event.target as HTMLInputElement;

  console.log(input.value);

}
```

Let's understand this important line:

typescript

```typescript
const input = event.target as HTMLInputElement;
```

- `event.target` identifies the element that triggered the event.
- `HTMLInputElement` represents an HTML input element.
- `as HTMLInputElement` tells TypeScript how to treat the target.

Now we can access:

typescript

```typescript
input.value;
input.placeholder;
input.type;
input.disabled;
```

### Example 3: Store input value in a property

typescript

```typescript
export class UserComponent {

  username: string = '';

  getUserName(event: Event): void {

    const input = event.target as HTMLInputElement;

    this.username = input.value;

  }

}
```

HTML:

HTMLWrap linesCopy codePreview

```html
<input
  type="text"
  (input)="getUserName($event)"
/>

<h3>{{ username }}</h3>
```

Whenever the user types something, the `username` property gets updated.

## 9. Multiple Data Types – Union Types

Sometimes a variable or property needs to accept more than one data type.

TypeScript provides Union Types for this purpose.

We use the pipe (`|`) symbol.

Syntax:

typescript

```typescript
let variableName: string | number;
```

This means the variable can store either a string or a number.

### Example 1: String or number

typescript

```typescript
let userId: string | number;

userId = 101;       // Valid

userId = 'USER101'; // Valid

userId = true;      // Error
```

### Example 2: Union types in Angular properties

typescript

```typescript
export class UserComponent {

  userId: number | string = 101;

  updateUserId(): void {

    this.userId = 'USER101';

  }

}
```

### Example 3: Multiple union types

typescript

```typescript
export class ProductComponent {

  productPrice: number | string | null = 500;

}
```

The property can contain:

- A number
- A string
- null

### Example 4: Union types in function parameters

typescript

```typescript
getUserDetails(userId: number | string): void {

  console.log(userId);

}
```

Calling the method:

typescript

```typescript
this.getUserDetails(101);

this.getUserDetails('USER101');
```

Both are valid.

### Real-world use cases

| Scenario | Union type |
| --- | --- |
| User ID | `number \\| string` |
| Product price | `number \\| string` |
| API response | `User \\| null` |
| Selected value | `string \\| number` |
| Optional status | `'active' \\| 'inactive'` |

Important: When working with union types, sometimes you need to check the actual type before performing operations.

typescript

```typescript
function displayValue(value: string | number): void {

  if (typeof value === 'string') {

    console.log(value.toUpperCase());

  } else {

    console.log(value.toFixed(2));

  }

}
```

## 10. Event Types: Event, PointerEvent, MouseEvent

This is one of the most important topics when working with Angular event binding.

JavaScript and TypeScript provide different event types for handling user interactions.

Let's understand the differences.

### A. Event

`Event` is the general or base event type.

It is used for common events such as:

- Input
- Change
- Submit
- Focus
- Blur

Example:

HTMLWrap linesCopy codePreview

```html
<input
  type="text"
  (input)="handleInput($event)"
/>
```

typescript

```typescript
handleInput(event: Event): void {

  console.log(event.type);

}
```

Here, `Event` represents the general event object.

### B. MouseEvent

`MouseEvent` is used for mouse-related interactions.

Examples:

- click
- dblclick
- mouseenter
- mouseleave
- mousedown
- mouseup

Angular example:

HTMLWrap linesCopy codePreview

```html
<button (click)="handleClick($event)">
  Click Me
</button>
```

typescript

```typescript
handleClick(event: MouseEvent): void {

  console.log(event.clientX);

  console.log(event.clientY);

  console.log(event.button);

}
```

Some useful MouseEvent properties:

| Property | Description |
| --- | --- |
| `clientX` | Mouse X position inside the browser viewport |
| `clientY` | Mouse Y position inside the browser viewport |
| `button` | Which mouse button was pressed |
| `ctrlKey` | Whether Ctrl was pressed |
| `shiftKey` | Whether Shift was pressed |

### C. PointerEvent

`PointerEvent` is used for pointer-based interactions.

It supports:

- Mouse
- Touch
- Pen or stylus

Examples:

- pointerdown
- pointerup
- pointermove
- pointerenter
- pointerleave

Angular example:

HTMLWrap linesCopy codePreview

```html
<button (pointerdown)="handlePointer($event)">
  Press Me
</button>
```

typescript

```typescript
handlePointer(event: PointerEvent): void {

  console.log(event.pointerType);

  console.log(event.clientX);

  console.log(event.clientY);

}
```

Some useful PointerEvent properties:

| Property | Description |
| --- | --- |
| `pointerType` | Identifies mouse, touch, or pen |
| `pointerId` | Identifies the pointer |
| `pressure` | Pointer pressure |
| `clientX` | Pointer X position |
| `clientY` | Pointer Y position |

### Difference between Event, MouseEvent and PointerEvent

| Feature | Event | MouseEvent | PointerEvent |
| --- | --- | --- | --- |
| Purpose | General events | Mouse interactions | Pointer interactions |
| Mouse support | General | Yes | Yes |
| Touch support | General | Not the intended abstraction | Yes |
| Pen support | General | Not the intended abstraction | Yes |
| Example | input | click | pointerdown |

### Important relationship

text

```text
Event
  |
  └── UIEvent
        |
        └── MouseEvent
              |
              └── PointerEvent
```

This is a simplified inheritance chain.

`PointerEvent` extends `MouseEvent`, which extends `UIEvent`, which extends `Event`.

Interview tip: Use `Event` for general input events, `MouseEvent` for mouse clicks, and `PointerEvent` when supporting mouse, touch, and pen interactions.

## 11. Complete Angular 21 Practical Example

Let's combine the concepts into one Angular component.

We will create a simple user interaction component that demonstrates:

- Class properties
- Local variables
- Type inference
- Function parameters
- Return types
- Button click events
- Input change events
- Union types
- MouseEvent and PointerEvent

user.component.ts

typescript

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  template: `
    <h2>Angular 21 Data Types</h2>

    <input
      type="text"
      placeholder="Enter username"
      (input)="getUserName($event)"
    />

    <h3>Username: {{ username }}</h3>

    <button (click)="showMessage($event)">
      Click Me
    </button>

    <button (pointerdown)="handlePointer($event)">
      Pointer Event
    </button>

    <button (click)="updateUserId()">
      Update User ID
    </button>

    <h3>User ID: {{ userId }}</h3>

    <h3>Total: {{ addNumbers(10, 20) }}</h3>
  `
})
export class UserComponent {

  // Properties
  username: string = '';

  age: number = 25;

  isActive: boolean = true;

  userId: string | number = 101;

  // Input Event
  getUserName(event: Event): void {

    const input = event.target as HTMLInputElement;

    this.username = input.value;

  }

  // Mouse Event
  showMessage(event: MouseEvent): void {

    console.log('Button Clicked');

    console.log(event.clientX);

  }

  // Pointer Event
  handlePointer(event: PointerEvent): void {

    console.log(event.pointerType);

  }

  // Union Type
  updateUserId(): void {

    this.userId = 'USER101';

  }

  // Function Parameters and Return Type
  addNumbers(num1: number, num2: number): number {

    return num1 + num2;

  }

  // Type Inference and Local Variable
  calculateSalary(): void {

    let salary = 50000;

    let bonus = 5000;

    let totalSalary = salary + bonus;

    console.log(totalSalary);

  }

}
```

This example demonstrates how TypeScript data types work in a practical Angular component.

## 12. Best Practices for Data Types in Angular 21

When developing real-world Angular applications, follow these practices:

1. Prefer `string`, `number`, and `boolean` instead of `any` wherever possible.
2. Use TypeScript type inference when the type is obvious.
3. Explicitly define function parameter types.
4. Define return types for important methods.
5. Use union types when a value can have multiple valid types.
6. Use interfaces or type aliases for complex objects.
7. Use `Event`, `MouseEvent`, and `PointerEvent` appropriately.
8. Enable strict TypeScript checking and Angular template checking.
9. Use `unknown` instead of `any` when handling values whose types are not yet known.
10. Avoid unnecessary type assertions.

Angular's strict template checking can also detect incorrect template bindings and infer `$event` types.

Angular

+1

## 13. Important Interview Questions

| Interview question | Short answer |
| --- | --- |
| What is a data type? | It defines the kind of value a variable can store. |
| What is type inference? | TypeScript automatically determines the data type. |
| What is `any`? | It disables most type checking for that value. |
| What is `void`? | Indicates that a function doesn't return a meaningful value. |
| What is a union type? | Allows a value to have one of multiple specified types. |
| What is a property? | A member declared inside a class or object. |
| What is a local variable? | A variable declared within a local scope. |
| What is `$event`? | The event object passed by Angular event binding. |
| What is MouseEvent? | A type representing mouse interactions. |
| What is PointerEvent? | A type representing mouse, touch, and pen interactions. |
| What is Event? | The general base event type. |

## 14. Official Documentation

For further learning, refer to these resources:

- [TypeScript – Everyday Types](<https://www.typescriptlang.org/docs/handbook/2/everyday-types.html?utm_source=chatgpt.com>)
- [TypeScript – Type Inference](<https://www.typescriptlang.org/docs/handbook/type-inference?utm_source=chatgpt.com>)
- [TypeScript – Union Types](<https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html?utm_source=chatgpt.com>)
- [Angular – Template Type Checking](<https://angular.dev/tools/cli/template-typecheck?utm_source=chatgpt.com>)
- [Angular – Template Syntax](<https://angular.dev/guide/templates?utm_source=chatgpt.com>)

## Final Learning Summary

## Angular 21 & TypeScript – Quick Revision

| Concept | Syntax |
| --- | --- |
| Property | `name: string` |
| Variable | `let age: number` |
| Function parameter | `name: string` |
| Return type | `(): number` |
| No return value | `(): void` |
| Button click | `event: MouseEvent` |
| Input change | `event: Event` |
| Pointer event | `event: PointerEvent` |
| Union type | `string \\| number` |
| Array | `number[]` |
| Type inference | `let age = 25` |

Key takeawayTypeScript data types help Angular developers catch errors early, write predictable code, and maintain large-scale applications.

My recommendation: After learning these concepts, the next important topic is TypeScript `interface`, `type`, and object data types. These are especially useful when working with Angular services, API responses, forms, and real-world CRUD applications.
