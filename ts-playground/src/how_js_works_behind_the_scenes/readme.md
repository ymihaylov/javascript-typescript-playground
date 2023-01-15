# Notes: JavaScript Execution Context – How JS Works Behind the Scenes
Link: https://www.freecodecamp.org/news/how-javascript-works-behind-the-scene-javascript-execution-context/

- JavaScript is a single-threaded interpreted language
- Every browser has an JS engine

## Execution context
- It's an environment
- During the context runtime, the parser parses the source code and allocates memory for the variables and functions
- Two context types
	- global: created when the program started
	- function: created when the function is called - representing the function local scope

## Phases of the JavaScript Execution Context
1. Creation phase
- In this phase,the JS engine creates the execution context;
- Sets up the script's env.
2. Execution phase
- Executes the code in the execution context
- Process every statement, expression and evaluates funciton calls
This phases are applicable for both contexts - global and function context

### Creation phase
- Creation window/global object
- Set up a memory for storing vars and funcs
- Stores the vars with values as undefined and functions as reference

### Execution phase
- Assigning values to the vars
- Until now, in creation phase, n was undefined
- Invoking the function - create new Execution context
- Functions are destroyed in the memory after they're finished
- Global context will be destroyed when the script ends

# What is callstack?
- Execution context stack, Runtime stack, Machine stack
- LIFO princple
- global context - first thing pushed to the callstack
- function stack context is pushed to the stack when function is called
- when function is finished, js will delete its context from the stack and goes back to it's parent
