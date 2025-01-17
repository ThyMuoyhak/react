import { useState } from 'react';

const C_programming = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Sidebar for mobile */}
      <div
        className={`fixed inset-0 z-50 bg-gray-800 md:hidden transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}
        id="sidebar"
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setOpen(false)}
            className="text-white text-2xl"
            id="closeSidebar"
          >
            ×
          </button>
        </div>
        <div className="flex flex-col items-center text-white space-y-4 py-6 max-h-screen overflow-y-auto">
         
        </div>
      </div>

      {/* Button to toggle Sidebar (for mobile) */}
      <div className="fixed bottom-4 right-20 md:hidden transform px-20">
        <button
          onClick={() => setOpen(!open)} // Toggle open/close state
          className="p-3 bg-blue-500 hover:bg-blue-600 focus:outline-none shadow-lg"
        >
          <span className="text-white text-lg">☰</span>
        </button>
      </div>

      {/* Your Sidebar (Conditional Rendering based on `open` state) */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-gray-800 md:hidden transition-transform duration-300"
          id="sidebar"
        >
          <div className="flex justify-end p-6">
            <button
              onClick={() => setOpen(false)}
              className="text-white text-2xl"
            >
              ×
            </button>
          </div>
          <div className="flex flex-col items-center text-white space-y-4 py-6 max-h-screen overflow-y-auto">
          <ul className="space-y-4">
      <li>
        <a href="#introduction" className="hover:text-red-500">
          1. Introduction to C Programming
        </a>
        <ul className="ml-4 space-y-2">
          <li>
            <a href="#overview" className="hover:text-red-500">
              1.1. Overview of C Programming
            </a>
          </li>
          <li>
            <a href="#history" className="hover:text-red-500">
              1.2. History of C
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-red-500">
              1.3. Features of C
            </a>
          </li>
          <li>
            <a href="#setup" className="hover:text-red-500">
              1.4. Setting Up the C Environment
            </a>
          </li>
          <li>
            <a href="#structure" className="hover:text-red-500">
              1.5. Structure of a C Program
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#variables" className="hover:text-red-500">
          2. Variables and Data Types
        </a>
        <ul className="ml-4 space-y-2">
          <li>
            <a href="#declaring-variables" className="hover:text-red-500">
              2.1. Declaring Variables
            </a>
          </li>
          <li>
            <a href="#basic-data-types" className="hover:text-red-500">
              2.2. Basic Data Types
            </a>
          </li>
          <li>
            <a href="#constants" className="hover:text-red-500">
              2.3. Constants
            </a>
          </li>
          <li>
            <a href="#type-casting" className="hover:text-red-500">
              2.4. Type Casting and Conversion
            </a>
          </li>
          <li>
            <a href="#storage-classes" className="hover:text-red-500">
              2.5. Storage Classes
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#operators" className="hover:text-red-500">
          3. Operators in C
        </a>
        <ul className="ml-4 space-y-2">
          <li>
            <a href="#arithmetic-operators" className="hover:text-red-500">
              3.1. Arithmetic Operators
            </a>
          </li>
          <li>
            <a href="#relational-operators" className="hover:text-red-500">
              3.2. Relational Operators
            </a>
          </li>
          <li>
            <a href="#logical-operators" className="hover:text-red-500">
              3.3. Logical Operators
            </a>
          </li>
          <li>
            <a href="#assignment-operators" className="hover:text-red-500">
              3.4. Assignment Operators
            </a>
          </li>
          <li>
            <a href="#bitwise-operators" className="hover:text-red-500">
              3.5. Bitwise Operators
            </a>
          </li>
          <li>
            <a href="#increment-decrement" className="hover:text-red-500">
              3.6. Increment and Decrement
            </a>
          </li>
          <li>
            <a href="#conditional-operator" className="hover:text-red-500">
              3.6 Conditional Operator
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#control-statements" className="hover:text-red-500">
          4. Control Statements
        </a>
        <ul className="ml-4 space-y-2">
          <li>
            <a href="#if-statement" className="hover:text-red-500">
              4.1. if Statement
            </a>
          </li>
          <li>
            <a href="#else-statement" className="hover:text-red-500">
              4.2. else Statement
            </a>
          </li>
          <li>
            <a href="#switch-statement" className="hover:text-red-500">
              4.3. switch Statement
            </a>
          </li>
          <li>
            <a href="#break-statement" className="hover:text-red-500">
              4.4. break Statement
            </a>
          </li>
          <li>
            <a href="#continue-statement" className="hover:text-red-500">
              4.5. continue Statement
            </a>
          </li>
          <li>
            <a href="#goto-statement" className="hover:text-red-500">
              4.6. goto Statement
            </a>
          </li>
          <li>
            <a href="#nested-structures" className="hover:text-red-500">
              4.7. Nested Control Structures
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#loops" className="hover:text-red-500">
          5. Loops in C
        </a>
        <ul className="ml-4 space-y-2">
          <li>
            <a href="#for-loop" className="hover:text-red-500">
              5.1. for Loop
            </a>
          </li>
          <li>
            <a href="#while-loop" className="hover:text-red-500">
              5.2. while Loop
            </a>
          </li>
          <li>
            <a href="#do-while-loop" className="hover:text-red-500">
              5.3. do-while Loop
            </a>
          </li>
          <li>
            <a href="#nested-loops" className="hover:text-red-500">
              5.4. Nested Loops
            </a>
          </li>
          <li>
            <a href="#infinite-loops" className="hover:text-red-500">
              5.5. Infinite Loops
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#functions" className="hover:text-red-500">
          6. Functions in C
        </a>
        <ul className="ml-4 space-y-2">
          <li>
            <a href="#function-declaration" className="hover:text-red-500">
              6.1. Function Declaration and Definition
            </a>
          </li>
          <li>
            <a href="#arguments-return" className="hover:text-red-500">
              6.2. Function Arguments and Return Types
            </a>
          </li>
          <li>
            <a href="#recursion" className="hover:text-red-500">
              6.3. Recursion
            </a>
          </li>
          <li>
            <a href="#call-by-value" className="hover:text-red-500">
              6.3. Call by Value vs. Call by Reference
            </a>
          </li>
          <li>
            <a href="#prototypes" className="hover:text-red-500">
              6.4. Function Prototypes
            </a>
          </li>
          <li>
            <a href="#header-files" className="hover:text-red-500">
              6.5. Header Files and Libraries
            </a>
          </li>
          <li>
            <a href="#standard-functions" className="hover:text-red-500">
              6.6. Standard Library Functions
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#arrays" className="hover:text-red-500">
          7. Arrays in C
        </a>
        <ul className="ml-4 space-y-2">
          <li>
            <a href="#one-dimensional-arrays" className="hover:text-red-500">
              7.1. One-dimensional Arrays
            </a>
          </li>
          <li>
            <a href="#multi-dimensional-arrays" className="hover:text-red-500">
              7.2. Multi-dimensional Arrays
            </a>
          </li>
          <li>
            <a href="#array-initialization" className="hover:text-red-500">
              7.3. Array Initialization
            </a>
          </li>
          <li>
            <a href="#passing-arrays" className="hover:text-red-500">
              7.4. Passing Arrays to Functions
            </a>
          </li>
          <li>
            <a href="#array-manipulation" className="hover:text-red-500">
              7.5. Array Manipulation
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#pointers" className="hover:text-red-500">
          8. Pointers in C
        </a>
        <ul className="ml-4 space-y-2">
          <li>
            <a href="#introduction-to-pointers" className="hover:text-red-500">
              8.1. Introduction to Pointers
            </a>
          </li>
          <li>
            <a href="#pointer-declaration" className="hover:text-red-500">
              8.2. Pointer Declaration and Initialization
            </a>
          </li>
          <li>
            <a href="#pointers-and-arrays" className="hover:text-red-500">
              8.3. Pointers and Arrays
            </a>
          </li>
          <li>
            <a href="#pointers-to-functions" className="hover:text-red-500">
              8.4. Pointers to Functions
            </a>
          </li>
          <li>
            <a href="#dynamic-memory-allocation" className="hover:text-red-500">
              8.5. Dynamic Memory Allocation
            </a>
          </li>
          <li>
            <a href="#pointer-arithmetic" className="hover:text-red-500">
              8.6. Pointer Arithmetic
            </a>
          </li>
          <li>
            <a href="#pointers-to-structures" className="hover:text-red-500">
              8.7. Pointers to Structures and Arrays
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#structures-unions" className="hover:text-red-500">
          9. Structures and Unions
        </a>
        <ul className="ml-4 space-y-2">
          <li>
            <a
              href="#introduction-to-structures"
              className="hover:text-red-500"
            >
              9.1. Introduction to Structures
            </a>
          </li>
          <li>
            <a
              href="#structure-declaration-initialization"
              className="hover:text-red-500"
            >
              9.2. Structure Declaration and Initialization
            </a>
          </li>
          <li>
            <a
              href="#accessing-structure-members"
              className="hover:text-red-500"
            >
              9.3. Accessing Structure Members
            </a>
          </li>
          <li>
            <a href="#nested-structures" className="hover:text-red-500">
              9.4. Nested Structures
            </a>
          </li>
          <li>
            <a href="#unions-in-c" className="hover:text-red-500">
              9.5. Unions in C
            </a>
          </li>
          <li>
            <a
              href="#differences-between-structures-unions"
              className="hover:text-red-500"
            >
              9.6. Differences Between Structures and Unions
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#file-handling" className="hover:text-red-500">
          10. File Handling
        </a>
        <ul className="ml-4 space-y-2">
          <li>
            <a
              href="#introduction-to-file-handling"
              className="hover:text-red-500"
            >
              10.1. Introduction to File Handling
            </a>
          </li>
          <li>
            <a href="#file-operations" className="hover:text-red-500">
              10.2. File Operations: fopen, fclose, fread, fwrite
            </a>
          </li>
          <li>
            <a href="#file-pointers-modes" className="hover:text-red-500">
              10.3. File Pointers and Modes
            </a>
          </li>
          <li>
            <a
              href="#reading-writing-text-files"
              className="hover:text-red-500"
            >
              10.4. Reading and Writing Text Files
            </a>
          </li>
          <li>
            <a
              href="#error-handling-file-operations"
              className="hover:text-red-500"
            >
              10.5. Error Handling in File Operations
            </a>
          </li>
          <li>
            <a href="#binary-file-handling" className="hover:text-red-500">
              10.6. Binary File Handling
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#dynamic-memory-allocation" className="hover:text-red-500">
          11. Dynamic Memory Allocation
        </a>
        <ul className="ml-4 space-y-2">
          <li>
            <a
              href="#introduction-to-dynamic-memory"
              className="hover:text-red-500"
            >
              11.1. Introduction to Dynamic Memory
            </a>
          </li>
          <li>
            <a
              href="#malloc-calloc-realloc-free"
              className="hover:text-red-500"
            >
              11.2. malloc(), calloc(), realloc(), and free()
            </a>
          </li>
          <li>
            <a
              href="#memory-leaks-memory-management"
              className="hover:text-red-500"
            >
              11.3. Memory Leaks and Memory Management
            </a>
          </li>
          <li>
            <a
              href="#using-pointers-with-dynamic-memory"
              className="hover:text-red-500"
            >
              11.4. Using Pointers with Dynamic Memory
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#preprocessor-directives" className="hover:text-red-500">
          12. Preprocessor Directives
        </a>
        <ul className="ml-4 space-y-2">
          <li>
            <a href="#define-and-constants" className="hover:text-red-500">
              12.1. #define and Constants
            </a>
          </li>
          <li>
            <a href="#include-and-header-files" className="hover:text-red-500">
              12.2. #include and Header Files
            </a>
          </li>
          <li>
            <a href="#conditional-compilation" className="hover:text-red-500">
              12.3. Conditional Compilation
            </a>
          </li>
          <li>
            <a
              href="#macros-and-inline-functions"
              className="hover:text-red-500"
            >
              12.4. Macros and Inline Functions
            </a>
          </li>
          <li>
            <a
              href="#file-inclusion-and-guard-directives"
              className="hover:text-red-500"
            >
              12.5. File Inclusion and Guard Directives
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#error-handling-and-debugging" className="hover:text-red-500">
          13. Error Handling and Debugging
        </a>
        <ul className="ml-4 space-y-2">
          <li>
            <a href="#error-handling-in-c" className="hover:text-red-500">
              13.1. Error Handling in C
            </a>
          </li>
          <li>
            <a
              href="#using-assert-for-debugging"
              className="hover:text-red-500"
            >
              13.2. Using assert() for Debugging
            </a>
          </li>
          <li>
            <a href="#handling-runtime-errors" className="hover:text-red-500">
              13.3. Handling Runtime Errors
            </a>
          </li>
          <li>
            <a href="#debugging-with-gdb" className="hover:text-red-500">
              13.4. Debugging with GDB
            </a>
          </li>
          <li>
            <a
              href="#exception-handling-techniques"
              className="hover:text-red-500"
            >
              13.5. Exception Handling Techniques
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#advanced-c-concepts" className="hover:text-red-500">
          14. Advanced C Concepts
        </a>
        <ul className="ml-4 space-y-2">
          <li>
            <a href="#multithreading-in-c" className="hover:text-red-500">
              14.1. Multithreading in C
            </a>
          </li>
          <li>
            <a
              href="#sockets-and-networking-in-c"
              className="hover:text-red-500"
            >
              14.2. Sockets and Networking in C
            </a>
          </li>
          <li>
            <a
              href="#c-and-object-oriented-programming"
              className="hover:text-red-500"
            >
              14.3. C and Object-Oriented Programming
            </a>
          </li>
          <li>
            <a href="#advanced-data-structures" className="hover:text-red-500">
              14.4. Advanced Data Structures (e.g., Trees, Graphs)
            </a>
          </li>
          <li>
            <a
              href="#compiler-optimization-techniques"
              className="hover:text-red-500"
            >
              14.5. Compiler Optimization Techniques
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#c-standard-library" className="hover:text-red-500">
          15. C Standard Library
        </a>
        <ul className="ml-4 space-y-2">
          <li>
            <a href="#standard-input-output" className="hover:text-red-500">
              15.1. Standard Input/Output
            </a>
          </li>
          <li>
            <a href="#string-handling-functions" className="hover:text-red-500">
              15.2. String Handling Functions
            </a>
          </li>
          <li>
            <a href="#mathematical-functions" className="hover:text-red-500">
              15.3. Mathematical Functions
            </a>
          </li>
          <li>
            <a
              href="#memory-management-functions"
              className="hover:text-red-500"
            >
              15.4. Memory Management Functions
            </a>
          </li>
          <li>
            <a href="#date-and-time-functions" className="hover:text-red-500">
              15.5. Date and Time Functions
            </a>
          </li>
          <li>
            <a
              href="#character-handling-functions"
              className="hover:text-red-500"
            >
              15.6. Character Handling Functions
            </a>
          </li>
        </ul>
      </li>
      {/* Add similar nested lists for remaining modules */}
    </ul>
          </div>
        </div>
      )}

      

     <div className="flex">
  {/* Sidebar សម្រាប់ Desktop */}
  <div className="hidden md:block w-2/4  p-6  overflow-y-auto max-h-[1000px]">
    <h2 className="text-xl font-bold mb-6">មេរៀនកម្មវិធី C</h2>
    <ul className="space-y-4">
      <li>
        <a href="#introduction" className="hover:text-red-500">
          1. Introduction to C Programming
        </a>
        <ul className="ml-4 space-y-2">
          <li>
            <a href="#overview" className="hover:text-red-500">
              1.1. Overview of C Programming
            </a>
          </li>
          <li>
            <a href="#history" className="hover:text-red-500">
              1.2. History of C
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-red-500">
              1.3. Features of C
            </a>
          </li>
          <li>
            <a href="#setup" className="hover:text-red-500">
              1.4. Setting Up the C Environment
            </a>
          </li>
          <li>
            <a href="#structure" className="hover:text-red-500">
              1.5. Structure of a C Program
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#variables" className="hover:text-red-500">
          2. Variables and Data Types
        </a>
        <ul className="ml-4 space-y-2">
          <li>
            <a href="#declaring-variables" className="hover:text-red-500">
              2.1. Declaring Variables
            </a>
          </li>
          <li>
            <a href="#basic-data-types" className="hover:text-red-500">
              2.2. Basic Data Types
            </a>
          </li>
          <li>
            <a href="#constants" className="hover:text-red-500">
              2.3. Constants
            </a>
          </li>
          <li>
            <a href="#type-casting" className="hover:text-red-500">
              2.4. Type Casting and Conversion
            </a>
          </li>
          <li>
            <a href="#storage-classes" className="hover:text-red-500">
              2.5. Storage Classes
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#operators" className="hover:text-red-500">
          3. Operators in C
        </a>
        <ul className="ml-4 space-y-2">
          <li>
            <a href="#arithmetic-operators" className="hover:text-red-500">
              3.1. Arithmetic Operators
            </a>
          </li>
          <li>
            <a href="#relational-operators" className="hover:text-red-500">
              3.2. Relational Operators
            </a>
          </li>
          <li>
            <a href="#logical-operators" className="hover:text-red-500">
              3.3. Logical Operators
            </a>
          </li>
          <li>
            <a href="#assignment-operators" className="hover:text-red-500">
              3.4. Assignment Operators
            </a>
          </li>
          <li>
            <a href="#bitwise-operators" className="hover:text-red-500">
              3.5. Bitwise Operators
            </a>
          </li>
          <li>
            <a href="#increment-decrement" className="hover:text-red-500">
              3.6. Increment and Decrement
            </a>
          </li>
          <li>
            <a href="#conditional-operator" className="hover:text-red-500">
              3.6 Conditional Operator
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#control-statements" className="hover:text-red-500">
          4. Control Statements
        </a>
        <ul className="ml-4 space-y-2">
          <li>
            <a href="#if-statement" className="hover:text-red-500">
              4.1. if Statement
            </a>
          </li>
          <li>
            <a href="#else-statement" className="hover:text-red-500">
              4.2. else Statement
            </a>
          </li>
          <li>
            <a href="#switch-statement" className="hover:text-red-500">
              4.3. switch Statement
            </a>
          </li>
          <li>
            <a href="#break-statement" className="hover:text-red-500">
              4.4. break Statement
            </a>
          </li>
          <li>
            <a href="#continue-statement" className="hover:text-red-500">
              4.5. continue Statement
            </a>
          </li>
          <li>
            <a href="#goto-statement" className="hover:text-red-500">
              4.6. goto Statement
            </a>
          </li>
          <li>
            <a href="#nested-structures" className="hover:text-red-500">
              4.7. Nested Control Structures
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#loops" className="hover:text-red-500">
          5. Loops in C
        </a>
        <ul className="ml-4 space-y-2">
          <li>
            <a href="#for-loop" className="hover:text-red-500">
              5.1. for Loop
            </a>
          </li>
          <li>
            <a href="#while-loop" className="hover:text-red-500">
              5.2. while Loop
            </a>
          </li>
          <li>
            <a href="#do-while-loop" className="hover:text-red-500">
              5.3. do-while Loop
            </a>
          </li>
          <li>
            <a href="#nested-loops" className="hover:text-red-500">
              5.4. Nested Loops
            </a>
          </li>
          <li>
            <a href="#infinite-loops" className="hover:text-red-500">
              5.5. Infinite Loops
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#functions" className="hover:text-red-500">
          6. Functions in C
        </a>
        <ul className="ml-4 space-y-2">
          <li>
            <a href="#function-declaration" className="hover:text-red-500">
              6.1. Function Declaration and Definition
            </a>
          </li>
          <li>
            <a href="#arguments-return" className="hover:text-red-500">
              6.2. Function Arguments and Return Types
            </a>
          </li>
          <li>
            <a href="#recursion" className="hover:text-red-500">
              6.3. Recursion
            </a>
          </li>
          <li>
            <a href="#call-by-value" className="hover:text-red-500">
              6.3. Call by Value vs. Call by Reference
            </a>
          </li>
          <li>
            <a href="#prototypes" className="hover:text-red-500">
              6.4. Function Prototypes
            </a>
          </li>
          <li>
            <a href="#header-files" className="hover:text-red-500">
              6.5. Header Files and Libraries
            </a>
          </li>
          <li>
            <a href="#standard-functions" className="hover:text-red-500">
              6.6. Standard Library Functions
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#arrays" className="hover:text-red-500">
          7. Arrays in C
        </a>
        <ul className="ml-4 space-y-2">
          <li>
            <a href="#one-dimensional-arrays" className="hover:text-red-500">
              7.1. One-dimensional Arrays
            </a>
          </li>
          <li>
            <a href="#multi-dimensional-arrays" className="hover:text-red-500">
              7.2. Multi-dimensional Arrays
            </a>
          </li>
          <li>
            <a href="#array-initialization" className="hover:text-red-500">
              7.3. Array Initialization
            </a>
          </li>
          <li>
            <a href="#passing-arrays" className="hover:text-red-500">
              7.4. Passing Arrays to Functions
            </a>
          </li>
          <li>
            <a href="#array-manipulation" className="hover:text-red-500">
              7.5. Array Manipulation
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#pointers" className="hover:text-red-500">
          8. Pointers in C
        </a>
        <ul className="ml-4 space-y-2">
          <li>
            <a href="#introduction-to-pointers" className="hover:text-red-500">
              8.1. Introduction to Pointers
            </a>
          </li>
          <li>
            <a href="#pointer-declaration" className="hover:text-red-500">
              8.2. Pointer Declaration and Initialization
            </a>
          </li>
          <li>
            <a href="#pointers-and-arrays" className="hover:text-red-500">
              8.3. Pointers and Arrays
            </a>
          </li>
          <li>
            <a href="#pointers-to-functions" className="hover:text-red-500">
              8.4. Pointers to Functions
            </a>
          </li>
          <li>
            <a href="#dynamic-memory-allocation" className="hover:text-red-500">
              8.5. Dynamic Memory Allocation
            </a>
          </li>
          <li>
            <a href="#pointer-arithmetic" className="hover:text-red-500">
              8.6. Pointer Arithmetic
            </a>
          </li>
          <li>
            <a href="#pointers-to-structures" className="hover:text-red-500">
              8.7. Pointers to Structures and Arrays
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#structures-unions" className="hover:text-red-500">
          9. Structures and Unions
        </a>
        <ul className="ml-4 space-y-2">
          <li>
            <a
              href="#introduction-to-structures"
              className="hover:text-red-500"
            >
              9.1. Introduction to Structures
            </a>
          </li>
          <li>
            <a
              href="#structure-declaration-initialization"
              className="hover:text-red-500"
            >
              9.2. Structure Declaration and Initialization
            </a>
          </li>
          <li>
            <a
              href="#accessing-structure-members"
              className="hover:text-red-500"
            >
              9.3. Accessing Structure Members
            </a>
          </li>
          <li>
            <a href="#nested-structures" className="hover:text-red-500">
              9.4. Nested Structures
            </a>
          </li>
          <li>
            <a href="#unions-in-c" className="hover:text-red-500">
              9.5. Unions in C
            </a>
          </li>
          <li>
            <a
              href="#differences-between-structures-unions"
              className="hover:text-red-500"
            >
              9.6. Differences Between Structures and Unions
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#file-handling" className="hover:text-red-500">
          10. File Handling
        </a>
        <ul className="ml-4 space-y-2">
          <li>
            <a
              href="#introduction-to-file-handling"
              className="hover:text-red-500"
            >
              10.1. Introduction to File Handling
            </a>
          </li>
          <li>
            <a href="#file-operations" className="hover:text-red-500">
              10.2. File Operations: fopen, fclose, fread, fwrite
            </a>
          </li>
          <li>
            <a href="#file-pointers-modes" className="hover:text-red-500">
              10.3. File Pointers and Modes
            </a>
          </li>
          <li>
            <a
              href="#reading-writing-text-files"
              className="hover:text-red-500"
            >
              10.4. Reading and Writing Text Files
            </a>
          </li>
          <li>
            <a
              href="#error-handling-file-operations"
              className="hover:text-red-500"
            >
              10.5. Error Handling in File Operations
            </a>
          </li>
          <li>
            <a href="#binary-file-handling" className="hover:text-red-500">
              10.6. Binary File Handling
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#dynamic-memory-allocation" className="hover:text-red-500">
          11. Dynamic Memory Allocation
        </a>
        <ul className="ml-4 space-y-2">
          <li>
            <a
              href="#introduction-to-dynamic-memory"
              className="hover:text-red-500"
            >
              11.1. Introduction to Dynamic Memory
            </a>
          </li>
          <li>
            <a
              href="#malloc-calloc-realloc-free"
              className="hover:text-red-500"
            >
              11.2. malloc(), calloc(), realloc(), and free()
            </a>
          </li>
          <li>
            <a
              href="#memory-leaks-memory-management"
              className="hover:text-red-500"
            >
              11.3. Memory Leaks and Memory Management
            </a>
          </li>
          <li>
            <a
              href="#using-pointers-with-dynamic-memory"
              className="hover:text-red-500"
            >
              11.4. Using Pointers with Dynamic Memory
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#preprocessor-directives" className="hover:text-red-500">
          12. Preprocessor Directives
        </a>
        <ul className="ml-4 space-y-2">
          <li>
            <a href="#define-and-constants" className="hover:text-red-500">
              12.1. #define and Constants
            </a>
          </li>
          <li>
            <a href="#include-and-header-files" className="hover:text-red-500">
              12.2. #include and Header Files
            </a>
          </li>
          <li>
            <a href="#conditional-compilation" className="hover:text-red-500">
              12.3. Conditional Compilation
            </a>
          </li>
          <li>
            <a
              href="#macros-and-inline-functions"
              className="hover:text-red-500"
            >
              12.4. Macros and Inline Functions
            </a>
          </li>
          <li>
            <a
              href="#file-inclusion-and-guard-directives"
              className="hover:text-red-500"
            >
              12.5. File Inclusion and Guard Directives
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#error-handling-and-debugging" className="hover:text-red-500">
          13. Error Handling and Debugging
        </a>
        <ul className="ml-4 space-y-2">
          <li>
            <a href="#error-handling-in-c" className="hover:text-red-500">
              13.1. Error Handling in C
            </a>
          </li>
          <li>
            <a
              href="#using-assert-for-debugging"
              className="hover:text-red-500"
            >
              13.2. Using assert() for Debugging
            </a>
          </li>
          <li>
            <a href="#handling-runtime-errors" className="hover:text-red-500">
              13.3. Handling Runtime Errors
            </a>
          </li>
          <li>
            <a href="#debugging-with-gdb" className="hover:text-red-500">
              13.4. Debugging with GDB
            </a>
          </li>
          <li>
            <a
              href="#exception-handling-techniques"
              className="hover:text-red-500"
            >
              13.5. Exception Handling Techniques
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#advanced-c-concepts" className="hover:text-red-500">
          14. Advanced C Concepts
        </a>
        <ul className="ml-4 space-y-2">
          <li>
            <a href="#multithreading-in-c" className="hover:text-red-500">
              14.1. Multithreading in C
            </a>
          </li>
          <li>
            <a
              href="#sockets-and-networking-in-c"
              className="hover:text-red-500"
            >
              14.2. Sockets and Networking in C
            </a>
          </li>
          <li>
            <a
              href="#c-and-object-oriented-programming"
              className="hover:text-red-500"
            >
              14.3. C and Object-Oriented Programming
            </a>
          </li>
          <li>
            <a href="#advanced-data-structures" className="hover:text-red-500">
              14.4. Advanced Data Structures (e.g., Trees, Graphs)
            </a>
          </li>
          <li>
            <a
              href="#compiler-optimization-techniques"
              className="hover:text-red-500"
            >
              14.5. Compiler Optimization Techniques
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#c-standard-library" className="hover:text-red-500">
          15. C Standard Library
        </a>
        <ul className="ml-4 space-y-2">
          <li>
            <a href="#standard-input-output" className="hover:text-red-500">
              15.1. Standard Input/Output
            </a>
          </li>
          <li>
            <a href="#string-handling-functions" className="hover:text-red-500">
              15.2. String Handling Functions
            </a>
          </li>
          <li>
            <a href="#mathematical-functions" className="hover:text-red-500">
              15.3. Mathematical Functions
            </a>
          </li>
          <li>
            <a
              href="#memory-management-functions"
              className="hover:text-red-500"
            >
              15.4. Memory Management Functions
            </a>
          </li>
          <li>
            <a href="#date-and-time-functions" className="hover:text-red-500">
              15.5. Date and Time Functions
            </a>
          </li>
          <li>
            <a
              href="#character-handling-functions"
              className="hover:text-red-500"
            >
              15.6. Character Handling Functions
            </a>
          </li>
        </ul>
      </li>
      {/* Add similar nested lists for remaining modules */}
    </ul>
  </div>

      <div className="py-12 px-6 w-full overflow-y-auto max-h-[1000px]">
      <div id="introduction" className="py-12 px-6 overflow-y-auto">
  <h2 className="text-3xl font-semibold text-blue-600">
    1. ការណែនាំអំពីការកម្មវិធី C
  </h2>
  <p className="mt-4 text-lg">
    កម្មវិធី C គឺជាភាសាកម្មវិធីទូទៅដែលមានអំណាច។ វាត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយក្នុងសoftware ប្រព័ន្ធ និងកម្មវិធីអនុគមន៍, ប្រព័ន្ធ嵌入式 និងទីកន្លែងផ្សេងទៀតដែលការអនុវត្តមានសារសំខាន់។
  </p>

  {/* សេចក្តីពិពណ៌នាអំពី C */}
  <div id="overview" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      1.1. សេចក្តីពិពណ៌នាអំពី C
    </h3>
    <p className="mt-2">
      C គឺជាភាសាកម្មវិធីដែលមានភាពច្រើនប្រើ និងមានការចាប់ផ្តើមសំខាន់សម្រាប់ភាសាកម្មវិធីទំនើបផ្សេងៗដូចជា C++, Java និង Python។ ភាសានេះមានការត្រួតពិនិត្យលើប្រព័ន្ធធនធាន។
    </p>
  </div>

  {/* ប្រវត្តិសាស្ត្រ C */}
  <div id="history" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">1.2. ប្រវត្តិសាស្ត្រ C</h3>
    <p className="mt-2">
      C ត្រូវបានបង្កើតដោយ Dennis Ritchie នៅឆ្នាំ 1972 នៅ Bell Labs។ វាត្រូវបានរចនាឡើងសម្រាប់ការសរសេរប្រព័ន្ធប្រតិបត្តិការ និងបានក្លាយជាភាសាកម្មវិធីមួយដែលមានប្រជាប្រិយភាពខ្ពស់។
    </p>
    <p className="mt-2">គន្លឹះសំខាន់ក្នុងប្រវត្តិសាស្ត្រ C:</p>
    <ul className="list-disc ml-6 mt-2">
      <li>1972: ការបង្កើត C នៅ Bell Labs</li>
      <li>
        1978: ការបោះពុម្ព "The C Programming Language" ដោយ Kernighan និង
        Ritchie
      </li>
      <li>1989: ការចុះបញ្ជីស្តង់ដារអេសអេនអេស C (ANSI C)</li>
    </ul>
  </div>

  {/* លក្ខណៈពិសេសរបស់ C */}
  <div id="features" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">1.3. លក្ខណៈពិសេសរបស់ C</h3>
    <p className="mt-2">
      C មានលក្ខណៈពិសេសមួយចំនួនដែលធ្វើឲ្យវាជាជម្រើសមួយដែលពេញនិយមសម្រាប់កម្មវិធីជាច្រើន៖
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>ការចូលប្រើការជ្រៅទៅកាន់សមត្ថភាពអង្គចងចាំ</li>
      <li>វាតាមរយៈសyntax និងសំណុំរចនាបថដែលសាមញ្ញ</li>
      <li>អាចប្រើបានលើវេទិកានានា និងអាចដំណើរការបាននៅលើវេទិកាផ្សេងៗ</li>
      <li>បណ្ណាល័យសំណុំការងារដែលមានសម្បត្តិ</li>
      <li>ការប្រើប្រាស់ធនធានយ៉ាងមានប្រសិទ្ធភាព</li>
    </ul>
  </div>

  {/* ការរៀបចំបរិស្ថាន C */}
  <div id="setup" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      1.4. ការរៀបចំបរិស្ថាន C
    </h3>
    <p className="mt-2">
      ដើម្បីចាប់ផ្តើមការសរសេរកម្មវិធីនៅក្នុង C អ្នកត្រូវតែចាប់ផ្តើមបរិស្ថានអភិវឌ្ឍ:
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>តំឡើងកម្មវិធីចម្រោះ C (ឧ. GCC ឬ Clang)</li>
      <li>
        ជ្រើសរើសប្រព័ន្ធអភិវឌ្ឍន៍ឯកសារ (IDE) ដូចជា Code::Blocks,
        Dev-C++ ឬ Visual Studio
      </li>
      <li>សរសេរកម្មវិធី C យ៉ាងសាមញ្ញនៅក្នុងកម្មវិធីអភិវឌ្ឍ</li>
      <li>ចម្រោះ និងអនុវត្តកម្មវិធី</li>
    </ul>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      {"#include <stdio.h>"}
      {"\n"}
      {"\n"}
      {"int main() {"}
      {"\n"}
      {"    "}{"printf(\"Hello, World!\");"}
      {"\n"}
      {"    "}{"return 0;"}
      {"\n"}
      {"}"}
    </pre>
  </div>

  {/* រចនាសម្ព័ន្ធកម្មវិធី C */}
  <div id="structure" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      1.5. រចនាសម្ព័ន្ធកម្មវិធី C
    </h3>
    <p className="mt-2">កម្មវិធី C មួយធម្មតាមានរចនាសម្ព័ន្ធដូចខាងក្រោម:</p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      {"#include <stdio.h>"}
      {"\n"}
      {"// ព្រឹត្តិការណ៍ Preprocessor"}
      {"\n"}
      {"int main() {"}
      {"\n"}
      {"    "}{"// មុខងារជាMain"}
      {"\n"}
      {"    "}{"// ការបញ្ជាក់អថេរ"}
      {"\n"}
      {"    "}{"int number = 10;"}
      {"\n"}
      {"\n"}
      {"    "}{"// អនុគមន៍"}
      {"\n"}
      {"    "}{"printf(\"Number: %d\", number);"}
      {"\n"}
      {"\n"}
      {"    "}{"return 0; // ពិពណ៌នាអត្រាប្រតិបត្តិការ"}
      {"\n"}
      {"}"}
    </pre>
    <p className="mt-2">ការពន្យល់:</p>
    <ul className="list-disc ml-6 mt-2">
      <li>
        <strong>ព្រឹត្តិការណ៍ Preprocessor:</strong> បញ្ចូលបណ្ណាល័យដែលចាំបាច់
      </li>
      <li>
        <strong>មុខងារMain:</strong> ចំណុចចាប់ផ្តើមនៃកម្មវិធី
      </li>
      <li>
        <strong>ការបញ្ជាក់អថេរ:</strong> ការបញ្ជាក់អថេរដែលបានប្រើនៅក្នុងកម្មវិធី
      </li>
      <li>
        <strong>អនុគមន៍:</strong> ប្រតិបត្តិការកម្មវិធី
      </li>
      <li>
        <strong>ពិពណ៌នាអត្រាប្រតិបតិ្តការ:</strong> បញ្ចប់កម្មវិធី
      </li>
    </ul>
  </div>
</div>

      <div id="variables" className="py-12 px-6 overflow-y-auto">
  <h2 className="text-3xl font-semibold text-blue-600">
    2. អថេរ និង ប្រភេទទិន្នន័យ
  </h2>
  <p className="mt-4 text-lg">
    ផ្នែកនេះគួរឲ្យដឹងពីមូលដ្ឋាននៃអថេរ និងប្រភេទទិន្នន័យនៅក្នុងការសរសេរប្រព័ន្ធ C
    ។
  </p>
  {/* Declaring Variables */}
  <div id="declaring-variables" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">2.1. ការប្រកាសអថេរ</h3>
    <p className="mt-2 ">
      នៅក្នុង C អថេរ​ត្រូវបានប្រើដើម្បីផ្ទុកទិន្នន័យ។ ដើម្បីប្រកាសអថេរ
      អ្នកត្រូវតែបញ្ជាក់ប្រភេទ និងឈ្មោះរបស់វា។ ឧទាហរណ៍៖
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto overflow-x-auto">
      int number;{"\n"}float pi;{"\n"}char letter;{"\n"}
      {"        "}
    </pre>
    <p className="mt-2 ">
      នៅទីនេះ 'int' ត្រូវបានប្រើសម្រាប់ចំនួនគត់ 'float' សម្រាប់ចំនួនបែបភាគរយ និង
      'char' សម្រាប់តួអក្សរ។
    </p>
  </div>
  {/* Basic Data Types */}
  <div id="basic-data-types" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      2.2. ប្រភេទទិន្នន័យមូលដ្ឋាន
    </h3>
    <p className="mt-2 ">C មានប្រភេទទិន្នន័យមូលដ្ឋានជាច្រើន រួមមាន៖</p>
    <ul className="list-disc ml-6 mt-2 ">
      <li>
        <strong>int</strong>: ប្រើសម្រាប់ចំនួនគត់ (ឧ. 10, -50)
      </li>
      <li>
        <strong>float</strong>: ប្រើសម្រាប់ចំនួនបែបភាគរយ (ឧ. 3.14, -0.001)
      </li>
      <li>
        <strong>double</strong>:
        ប្រើសម្រាប់ចំនួនបែបភាគរយដែលមានភាពត្រឹមត្រូវខ្ពស់ (ឧ. 3.14159265359)
      </li>
      <li>
        <strong>char</strong>: ប្រើសម្រាប់តួអក្សរ (ឧ. 'a', 'Z')
      </li>
    </ul>
  </div>
  {/* Constants */}
  <div id="constants" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">2.3. តម្លៃថេរ</h3>
    <p className="mt-2 ">
      តម្លៃថេរនេះគឺជាតម្លៃដែលមិនអាចផ្លាស់ប្តូរបានក្នុងការប្រតិបត្តិការនៃកម្មវិធី។
      វាត្រូវបានកំណត់ដោយប្រើគន្លង <code>#define</code> ឬក៏ប្រើកូនសោ{" "}
      <code>const</code>៖
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto overflow-x-auto">
      #define PI 3.14159{"\n"}const int MAX_VALUE = 100;{"\n"}
      {"        "}
    </pre>
    <p className="mt-2 ">
      ឧទាហរណ៍ទីមួយកំណត់តម្លៃថេរដើម្បីសម្គាល់ PI ហើយឧទាហរណ៍ទីពីរប្រើកូនសោ{" "}
      <code>const</code> សម្រាប់តម្លៃថេរចំនួនគត់។
    </p>
  </div>
  {/* Type Casting */}
  <div id="type-casting" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      2.4. ការបម្លែងប្រភេទ និង ការបម្លែងទិន្នន័យ
    </h3>
    <p className="mt-2 ">
      ការបម្លែងប្រភេទគឺជាដំណើរការនៃការបម្លែងប្រភេទទិន្នន័យពីមួយទៅមួយ។ នៅក្នុង C
      អ្នកអាចធ្វើបានទាំងដោយស្វ័យប្រវត្តិក្នុងករណីណាមួយ ឬដោយគ្រូបង្រៀន៖
    </p>
    <ul className="list-disc ml-6 mt-2 ">
      <li>
        <strong>ការបម្លែងដោយស្វ័យប្រវត្តិ</strong>:
        អ្នកកុំព្យូទ័រប្រែប្រភេទដោយស្វ័យប្រវត្តិពេលបម្លែងពីប្រភេទតូចទៅធំជាង
        ដូចជា ពី <code>int</code> ទៅ <code>float</code> ។
      </li>
      <li>
        <strong>ការបម្លែងដោយដៃ</strong>: អ្នកអភិវឌ្ឍន៍ធ្វើការបម្លែងដោយដៃ ដូចជា
        បម្លែងពី <code>float</code> ទៅ <code>int</code> ។
      </li>
    </ul>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto overflow-x-auto">
      int num = 10;{"\n"}float numFloat = num;{"  "}// ការបម្លែងដោយស្វ័យប្រវត្តិ
      {"\n"}numFloat = 10.5;{"\n"}int numInt = (int) numFloat;{"  "}//
      ការបម្លែងដោយដៃ{"\n"}
      {"        "}
    </pre>
  </div>
  {/* Storage Classes */}
  <div id="storage-classes" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      2.5. ប្រភេទផ្ទុកទិន្នន័យ
    </h3>
    <p className="mt-2 ">
      ប្រភេទផ្ទុកទិន្នន័យក្នុង C គឺកំណត់ព្រមទាំងវិស័យ ការច visibility និង
      អាយុរស់រវើកនៃអថេរ។ មានប្រភេទផ្ទុកទិន្នន័យបួនប្រភេទ៖
    </p>
    <ul className="list-disc ml-6 mt-2 ">
      <li>
        <strong>auto</strong>: ប្រភេទផ្ទុកទិន្នន័យលំនាំសម្រាប់អថេរមូលដ្ឋាន។
        ពួកវាត្រូវបានបង្កើតដោយស្វ័យប្រវត្តិនៅពេលហៅមុខងារ។
      </li>
      <li>
        <strong>register</strong>: ប្រើសម្រាប់ផ្ទុកអថេរនៅក្នុងចំណងចងក្រង CPU
        ជំនួសការផ្ទុកនៅក្នុង RAM ដើម្បីចូលរួមបានលឿន។
      </li>
      <li>
        <strong>static</strong>:
        ប្រើសម្រាប់រក្សាតម្លៃរបស់អថេរប្រសិនបើបន្តរក្សាតម្លៃនោះរហូតបន្ទាប់ពីការចាកចេញពីមុខងារ។
      </li>
      <li>
        <strong>extern</strong>:
        ប្រើសម្រាប់ប្រកាសអថេរដែលបានកំណត់ក្នុងឯកសារផ្សេង។
      </li>
    </ul>
  </div>
</div>


  <div id="operators" className="py-12 px-6 overflow-y-auto">
    <h2 className="text-3xl font-semibold text-blue-600">
      3. OPERATORS_ នៅក្នុង C
    </h2>
    <p className="mt-4 text-lg">
      នៅក្នុងផ្នែកនេះ យើងនឹងស្វែងយល់ពីប្រភេទនៃ OPERATOR_ ក្នុងកម្មវិធី C ។
    </p>
    {/* Arithmetic Operators */}
    <div id="arithmetic-operators" className="mt-8">
      <h3 className="text-2xl font-semibold text-blue-600">
        3.1. OPERATOR_គណិតវិទ្យា
      </h3>
      <p className="mt-2">
        OPERATOR_គណិតវិទ្យាត្រូវបានប្រើសម្រាប់ធ្វើការប្រតិបត្ដិការគណិតវិទ្យា។
        OPERATOR_គណិតវិទ្យាមូលដ្ឋានក្នុង C មានដូចតទៅ៖
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li>
          <strong>+</strong>: បូក
        </li>
        <li>
          <strong>-</strong>: បន្ថយ
        </li>
        <li>
          <strong>*</strong>: គុណ
        </li>
        <li>
          <strong>/</strong>: ចែក
        </li>
        <li>
          <strong>%</strong>: បំបែកសល់ (បរិមាណនៅក្រោយការចែក)
        </li>
      </ul>
      <p className="mt-2">ឧទាហរណ៍៖</p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto overflow-x-auto">
        {"    "}
        <code>
          {"\n"}
          {"    "}int a = 10, b = 5;{"\n"}
          {"    "}int sum = a + b; // បូក{"\n"}
          {"    "}int product = a * b; // គុណ{"\n"}
          {"    "}
        </code>
        {"\n"}
        {"        "}
      </pre>
    </div>
    {/* Relational Operators */}
    <div id="relational-operators" className="mt-8">
      <h3 className="text-2xl font-semibold text-blue-600">
        3.2. OPERATOR_ប្រៀបធៀប
      </h3>
      <p className="mt-2">
        OPERATOR_ប្រៀបធៀបត្រូវបានប្រើសម្រាប់ប្រៀបធៀបតម្លៃពីរដើម្បីទទួលបានលទ្ធផល
        boolean (ពិត ឬ មិនពិត)។ OPERATOR_ទាំងនេះមានដូចតទៅ៖
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li>
          <strong>==</strong>: ស្មើនឹង
        </li>
        <li>
          <strong>!=</strong>: មិនស្មើនឹង
        </li>
        <li>
          <strong>&gt;</strong>: លើស
        </li>
        <li>
          <strong>&lt;</strong>: តិចជាង
        </li>
        <li>
          <strong>&gt;=</strong>: លើសឬស្មើ
        </li>
        <li>
          <strong>&lt;=</strong>: តិចឬស្មើ
        </li>
      </ul>
      <p className="mt-2">ឧទាហរណ៍៖</p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto overflow-x-auto">
        {"    "}
        <code>
          {"\n"}
          {"    "}int a = 10, b = 5;{"\n"}
          {"    "}bool result = (a &gt; b); // ពិត ពីព្រោះ 10 លើស 5{"\n"}
          {"    "}
        </code>
        {"\n"}
        {"        "}
      </pre>
    </div>
    {/* Logical Operators */}
    <div id="logical-operators" className="mt-8">
      <h3 className="text-2xl font-semibold text-blue-600">
        3.3. OPERATOR_តុល្យភាព
      </h3>
      <p className="mt-2">
        OPERATOR_តុល្យភាពត្រូវបានប្រើសម្រាប់សម្ពោធន៍បញ្ចូលនៃការបញ្ជាក់លក្ខខណ្ឌ។
        OPERATOR_ទាំងនេះមានដូចតទៅ៖
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li>
          <strong>&amp;&amp;&amp;</strong>: AND តុល្យភាព
        </li>
        <li>
          <strong>||</strong>: OR តុល្យភាព
        </li>
        <li>
          <strong>!</strong>: NOT តុល្យភាព
        </li>
      </ul>
      <p className="mt-2">ឧទាហរណ៍៖</p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto overflow-x-auto">
        {"    "}
        <code>
          {"\n"}
          {"    "}int a = 10, b = 5;{"\n"}
          {"    "}bool result = (a &gt; b &amp;&amp; b &gt; 0); // ពិត
          ប្រសិនបើលក្ខខណ្ឌទាំងពីរពិត{"\n"}
          {"    "}
        </code>
        {"\n"}
        {"        "}
      </pre>
    </div>
    {/* Assignment Operators */}
    <div id="assignment-operators" className="mt-8">
      <h3 className="text-2xl font-semibold text-blue-600">
        3.4. OPERATOR_ការបញ្ជាក់តម្លៃ
      </h3>
      <p className="mt-2">
        OPERATOR_ការបញ្ជាក់តម្លៃត្រូវបានប្រើសម្រាប់បញ្ជាក់តម្លៃទៅអថេរ។
        OPERATOR_ការបញ្ជាក់មូលដ្ឋានគឺ៖
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li>
          <strong>=</strong>: ការបញ្ជាក់តម្លៃសាមញ្ញ
        </li>
        <li>
          <strong>+=</strong>: បូកនិងបញ្ជាក់
        </li>
        <li>
          <strong>-=</strong>: បន្ថយនិងបញ្ជាក់
        </li>
        <li>
          <strong>*=</strong>: គុណនិងបញ្ជាក់
        </li>
        <li>
          <strong>/=</strong>: ចែកនិងបញ្ជាក់
        </li>
        <li>
          <strong>%=</strong>: បំបែកសល់និងបញ្ជាក់
        </li>
      </ul>
      <p className="mt-2">ឧទាហរណ៍៖</p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto overflow-x-auto">
        {"    "}
        <code>
          {"\n"}
          {"    "}int a = 10;{"\n"}
          {"    "}a += 5; // a = a + 5{"\n"}
          {"    "}
        </code>
        {"\n"}
        {"        "}
      </pre>
    </div>
    {/* Bitwise Operators */}
    <div id="bitwise-operators" className="mt-8">
      <h3 className="text-2xl font-semibold text-blue-600">
        3.5. OPERATOR_បញ្ចូលជាតំណ
      </h3>
      <p className="mt-2">
        OPERATOR_បញ្ចូលជាតំណត្រូវបានប្រើសម្រាប់ធ្វើប្រតិបត្ដិការលើប៊ីតនៃតម្លៃចំនួនគត់៖
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li>
          <strong>&amp;</strong>: AND ប៊ីត
        </li>
        <li>
          <strong>|</strong>: OR ប៊ីត
        </li>
        <li>
          <strong>^</strong>: XOR ប៊ីត
        </li>
        <li>
          <strong>~</strong>: NOT ប៊ីត
        </li>
        <li>
          <strong>&lt;&lt;</strong>: ការផ្លាស់ទីឆ្វេង
        </li>
        <li>
          <strong>&gt;&gt;</strong>: ការផ្លាស់ទីស្តាំ
        </li>
      </ul>
      <p className="mt-2">ឧទាហរណ៍៖</p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto overflow-x-auto">
        {"    "}
        <code>
          {"\n"}
          {"    "}int a = 5, b = 3;{"\n"}
          {"    "}int result = a &amp; b; // AND ប៊ីត{"\n"}
          {"    "}
        </code>
        {"\n"}
        {"        "}
      </pre>
    </div>
    {/* Increment and Decrement */}
    <div id="increment-decrement" className="mt-8">
      <h3 className="text-2xl font-semibold text-blue-600">
        3.6. បន្ថែម និង ការបន្ថយ
      </h3>
      <p className="mt-2">
        OPERATOR_បន្ថែម និង OPERATOR_បន្ថយត្រូវបានប្រើសម្រាប់បង្កើន ឬ
        កាត់បន្ថយតម្លៃអថេរដោយ 1៖
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li>
          <strong>++</strong>: OPERATOR_បន្ថែម (បង្កើនតម្លៃដោយ 1)
        </li>
        <li>
          <strong>--</strong>: OPERATOR_បន្ថយ (កាត់បន្ថយតម្លៃដោយ 1)
        </li>
      </ul>
      <p className="mt-2">ឧទាហរណ៍៖</p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto overflow-x-auto">
        {"    "}
        <code>
          {"\n"}
          {"    "}int a = 5;{"\n"}
          {"    "}a++; // a ក្លាយជាលេខ 6{"\n"}
          {"    "}--a; // a ក្លាយជាលេខ 5 វិញ{"\n"}
          {"    "}
        </code>
        {"\n"}
        {"        "}
      </pre>
    </div>
    {/* Conditional Operator */}
    <div id="conditional-operator" className="mt-8">
      <h3 className="text-2xl font-semibold text-blue-600">
        3.7. OPERATOR_លក្ខខណ្ឌ
      </h3>
      <p className="mt-2">
        OPERATOR_លក្ខខណ្ឌ (OPERATOR_ ternary) គឺជាការបង្ហាញខ្លីសម្រាប់បញ្ជាក់
        if-else៖
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li>
          <strong>condition ? expr1 : expr2</strong>: ប្រសិនបើលក្ខខណ្ឌពិត expr1
          នឹងត្រូវបានអនុវត្តិ។ ប្រសិនបើមិនពិត expr2 នឹងត្រូវបានអនុវត្តិ។
        </li>
      </ul>
      <p className="mt-2">ឧទាហរណ៍៖</p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto overflow-x-auto">
        {"    "}
        <code>
          {"\n"}
          {"    "}int a = 5;{"\n"}
          {"    "}int result = (a &gt; 3) ? 10 : 20; // result នឹងមានតម្លៃ 10
          ពីព្រោះលក្ខខណ្ឌពិត{"\n"}
          {"    "}
        </code>
        {"\n"}
        {"        "}
      </pre>
    </div>
  </div>
  <div id="control-statements" className="py-12 px-6 overflow-y-auto">
    <h2 className="text-3xl font-semibold text-blue-600">
      4. គ្រប់គ្រងប្រតិបត្តិការនៅក្នុង C
    </h2>
    <p className="mt-4 text-lg">
      នៅក្នុងផ្នែកនេះ យើងនឹងសិក្សាពីប្រភេទនៃប្រតិបត្តិការគ្រប់គ្រងនៅក្នុងភាសា C។
    </p>
    {/* if Statement */}
    <div id="if-statement" className="mt-8">
      <h3 className="text-2xl font-semibold text-blue-600">4.1. ប្រកាស if</h3>
      <p className="mt-2">
        ប្រកាស <code>if</code> ត្រូវបានប្រើដើម្បីធ្វើការត្រួតពិនិត្យលក្ខខណ្ឌមួយ។
        ប្រសិនបើលក្ខខណ្ឌត្រឹមត្រូវ វានឹងអនុវត្តកូដក្នុងរយៈពេល។
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
        <code>
          {"\n"}#include &lt;stdio.h&gt;{"\n"}
          {"\n"}int main() {"{"}
          {"\n"}
          {"    "}int a = 10;{"\n"}
          {"    "}if (a &gt; 5) {"{"}
          {"\n"}
          {"        "}printf("a is greater than 5\n");{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}return 0;{"\n"}
          {"}"}
          {"\n"}
        </code>
        {"\n"}
        {"        "}
      </pre>
      <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
        Output: a is greater than 5{"\n"}
      </pre>
    </div>
    {/* else Statement */}
    <div id="else-statement" className="mt-8">
      <h3 className="text-2xl font-semibold text-blue-600">4.2. ប្រកាស else</h3>
      <p className="mt-2">
        ប្រកាស <code>else</code> ត្រូវបានប្រើជាមួយ <code>if</code>{" "}
        ដើម្បីអនុវត្តកូដនៅពេលដែលលក្ខខណ្ឌ <code>if</code> មិនត្រឹមត្រូវ។
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
        <code>
          {"\n"}#include &lt;stdio.h&gt;{"\n"}
          {"\n"}int main() {"{"}
          {"\n"}
          {"    "}int a = 3;{"\n"}
          {"    "}if (a &gt; 5) {"{"}
          {"\n"}
          {"        "}printf("a is greater than 5\n");{"\n"}
          {"    "}
          {"}"} else {"{"}
          {"\n"}
          {"        "}printf("a is not greater than 5\n");{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}return 0;{"\n"}
          {"}"}
          {"\n"}
        </code>
        {"\n"}
        {"        "}
      </pre>
      <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
        Output: a is not greater than 5{"\n"}
      </pre>
    </div>
    {/* switch Statement */}
    <div id="switch-statement" className="mt-8">
      <h3 className="text-2xl font-semibold text-blue-600">
        4.3. ប្រកាស switch
      </h3>
      <p className="mt-2">
        ប្រកាស <code>switch</code>{" "}
        ត្រូវបានប្រើដើម្បីធ្វើការត្រួតពិនិត្យករណីដែលមានជម្រើសជាច្រើន។
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
        <code>
          {"\n"}#include &lt;stdio.h&gt;{"\n"}
          {"\n"}int main() {"{"}
          {"\n"}
          {"    "}int day = 2;{"\n"}
          {"    "}switch (day) {"{"}
          {"\n"}
          {"        "}case 1:{"\n"}
          {"            "}printf("Monday\n");{"\n"}
          {"            "}break;{"\n"}
          {"        "}case 2:{"\n"}
          {"            "}printf("Tuesday\n");{"\n"}
          {"            "}break;{"\n"}
          {"        "}default:{"\n"}
          {"            "}printf("Invalid day\n");{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}return 0;{"\n"}
          {"}"}
          {"\n"}
        </code>
        {"\n"}
        {"        "}
      </pre>
      <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
        Output: Tuesday{"\n"}
      </pre>
    </div>
    {/* break Statement */}
    <div id="break-statement" className="mt-8">
      <h3 className="text-2xl font-semibold text-blue-600">
        4.4. ប្រកាស break
      </h3>
      <p className="mt-2">
        ប្រកាស <code>break</code> ត្រូវបានប្រើដើម្បីបញ្ចប់ការអនុវត្តន៍នៅក្នុងលូប
        និងបញ្ជូនការផ្ទេរទៅកាន់ការអនុវត្តបន្ទាប់។
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
        <code>
          {"\n"}#include &lt;stdio.h&gt;{"\n"}
          {"\n"}int main() {"{"}
          {"\n"}
          {"    "}for (int i = 0; i &lt; 5; i++) {"{"}
          {"\n"}
          {"        "}if (i == 3) {"{"}
          {"\n"}
          {"            "}break; // Exit the loop when i is 3{"\n"}
          {"        "}
          {"}"}
          {"\n"}
          {"        "}printf("%d ", i);{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}return 0;{"\n"}
          {"}"}
          {"\n"}
        </code>
        {"\n"}
        {"        "}
      </pre>
      <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
        Output: 0 1 2{"\n"}
      </pre>
    </div>
    {/* continue Statement */}
    <div id="continue-statement" className="mt-8">
      <h3 className="text-2xl font-semibold text-blue-600">
        4.5. ប្រកាស continue
      </h3>
      <p className="mt-2">
        ប្រកាស <code>continue</code>{" "}
        ត្រូវបានប្រើដើម្បីបញ្ចប់វគ្គបច្ចុប្បន្ននៃលូប
        ហើយត្រឡប់ទៅកាន់ការត្រួតពិនិត្យលក្ខខណ្ឌ។
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
        <code>
          {"\n"}#include &lt;stdio.h&gt;{"\n"}
          {"\n"}int main() {"{"}
          {"\n"}
          {"    "}for (int i = 0; i &lt; 5; i++) {"{"}
          {"\n"}
          {"        "}if (i == 3) {"{"}
          {"\n"}
          {"            "}continue; // Skip when i is 3{"\n"}
          {"        "}
          {"}"}
          {"\n"}
          {"        "}printf("%d ", i);{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}return 0;{"\n"}
          {"}"}
          {"\n"}
        </code>
        {"\n"}
        {"        "}
      </pre>
      <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
        Output: 0 1 2 4{"\n"}
      </pre>
    </div>
    {/* goto Statement */}
    <div id="goto-statement" className="mt-8">
      <h3 className="text-2xl font-semibold text-blue-600">4.6. ប្រកាស goto</h3>
      <p className="mt-2">
        ប្រកាស <code>goto</code>{" "}
        ត្រូវបានប្រើដើម្បីផ្លាស់ប្តូរទិសដៅប្រតិបត្តិការនៅក្នុងកម្មវិធីដោយផ្ទាល់។
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
        <code>
          {"\n"}#include &lt;stdio.h&gt;{"\n"}
          {"\n"}int main() {"{"}
          {"\n"}
          {"    "}int i = 0;{"\n"}start: {"\n"}
          {"    "}if (i &lt; 5) {"{"}
          {"\n"}
          {"        "}printf("%d ", i);{"\n"}
          {"        "}i++;{"\n"}
          {"        "}goto start; // Jump back to start{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}return 0;{"\n"}
          {"}"}
          {"\n"}
        </code>
        {"\n"}
        {"        "}
      </pre>
      <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
        Output: 0 1 2 3 4{"\n"}
      </pre>
    </div>
    {/* Nested Control Structures */}
    <div id="nested-structures" className="mt-8">
      <h3 className="text-2xl font-semibold text-blue-600">
        4.7. រចនាសម្ព័ន្ធគ្រប់គ្រងដែលនៅក្នុងគ្នា
      </h3>
      <p className="mt-2">
        ការប្រើប្រាស់គ្រប់គ្រងក្នុងគ្នាមានប្រយោជន៍បំផុតនៅពេលដែលត្រូវត្រូវការត្រួតពិនិត្យជាច្រើនក្នុងលូប។
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
        <code>
          {"\n"}#include &lt;stdio.h&gt;{"\n"}
          {"\n"}int main() {"{"}
          {"\n"}
          {"    "}for (int i = 0; i &lt; 3; i++) {"{"}
          {"\n"}
          {"        "}for (int j = 0; j &lt; 3; j++) {"{"}
          {"\n"}
          {"            "}printf("%d%d ", i, j);{"\n"}
          {"        "}
          {"}"}
          {"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}return 0;{"\n"}
          {"}"}
          {"\n"}
        </code>
        {"\n"}
        {"        "}
      </pre>
      <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
        Output: 00 01 02 10 11 12 20 21 22{"\n"}
      </pre>
    </div>
  </div>
  <div id="loops" className="py-12 px-6 overflow-y-auto">
    <h2 className="text-3xl font-semibold text-blue-600">5. Loops in C</h2>
    <p className="mt-4 text-lg">
      នៅក្នុងផ្នែកនេះ យើងនឹងសិក្សាពីប្រភេទនៃលូបនៅក្នុងភាសា C។
    </p>
    {/* for Loop */}
    <div id="for-loop" className="mt-8">
      <h3 className="text-2xl font-semibold text-blue-600">5.1. លូប for</h3>
      <p className="mt-2">
        លូប <code>for</code>{" "}
        ត្រូវបានប្រើដើម្បីធ្វើការកំណត់ចំនួននៃការអនុវត្តន៍ជាក់លាក់។
        វាអាចកំណត់ចំនួនកំណត់នៃការងារដែលត្រូវអនុវត្ត។
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
        <code>
          {"\n"}#include &lt;stdio.h&gt;{"\n"}
          {"\n"}int main() {"{"}
          {"\n"}
          {"    "}for (int i = 0; i &lt; 5; i++) {"{"}
          {"\n"}
          {"        "}printf("%d\n", i);{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}return 0;{"\n"}
          {"}"}
          {"\n"}
        </code>
        {"\n"}
        {"        "}
      </pre>
      <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
        Output: 0 1 2 3 4{"\n"}
      </pre>
    </div>
    {/* while Loop */}
    <div id="while-loop" className="mt-8">
      <h3 className="text-2xl font-semibold text-blue-600">5.2. លូប while</h3>
      <p className="mt-2">
        លូប <code>while</code>{" "}
        ត្រូវបានប្រើដើម្បីអនុវត្តកូដឡើងវិញជាការផ្សេងៗទៅរហូតដល់លក្ខខណ្ឌមួយត្រូវបានបង្ហាញថាត្រឹមត្រូវ។
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
        <code>
          {"\n"}#include &lt;stdio.h&gt;{"\n"}
          {"\n"}int main() {"{"}
          {"\n"}
          {"    "}int i = 0;{"\n"}
          {"    "}while (i &lt; 5) {"{"}
          {"\n"}
          {"        "}printf("%d\n", i);{"\n"}
          {"        "}i++;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}return 0;{"\n"}
          {"}"}
          {"\n"}
        </code>
        {"\n"}
        {"        "}
      </pre>
      <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
        Output: 0 1 2 3 4{"\n"}
      </pre>
    </div>
    {/* do-while Loop */}
    <div id="do-while-loop" className="mt-8">
      <h3 className="text-2xl font-semibold text-blue-600">
        5.3. លូប do-while
      </h3>
      <p className="mt-2">
        លូប <code>do-while</code>{" "}
        ត្រូវបានប្រើដើម្បីអនុវត្តកូដមួយដំបូងប៉ុន្តែការត្រួតពិនិត្យលក្ខខណ្ឌត្រូវបានអនុវត្តក្រោយពីការអនុវត្តចុងក្រោយ។
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
        <code>
          {"\n"}#include &lt;stdio.h&gt;{"\n"}
          {"\n"}int main() {"{"}
          {"\n"}
          {"    "}int i = 0;{"\n"}
          {"    "}do {"{"}
          {"\n"}
          {"        "}printf("%d\n", i);{"\n"}
          {"        "}i++;{"\n"}
          {"    "}
          {"}"} while (i &lt; 5);{"\n"}
          {"    "}return 0;{"\n"}
          {"}"}
          {"\n"}
        </code>
        {"\n"}
        {"        "}
      </pre>
      <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
        Output: 0 1 2 3 4{"\n"}
      </pre>
    </div>
    {/* Nested Loops */}
    <div id="nested-loops" className="mt-8">
      <h3 className="text-2xl font-semibold text-blue-600">5.4. លូប Nested</h3>
      <p className="mt-2">
        លូប Nested ត្រូវបានប្រើដើម្បីបញ្ចូលលូបនៅក្នុងលូប។
        វា​មានប្រយោជន៍ក្នុងករណីដែលត្រូវការត្រួតពិនិត្យជាច្រើននៅក្នុងវគ្គប្រតិបត្តិការលូប។
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
        <code>
          {"\n"}#include &lt;stdio.h&gt;{"\n"}
          {"\n"}int main() {"{"}
          {"\n"}
          {"    "}for (int i = 0; i &lt; 3; i++) {"{"}
          {"\n"}
          {"        "}for (int j = 0; j &lt; 3; j++) {"{"}
          {"\n"}
          {"            "}printf("%d%d ", i, j);{"\n"}
          {"        "}
          {"}"}
          {"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}return 0;{"\n"}
          {"}"}
          {"\n"}
        </code>
        {"\n"}
        {"        "}
      </pre>
      <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
        Output: 00 01 02 10 11 12 20 21 22{"\n"}
      </pre>
    </div>
    {/* Infinite Loops */}
    <div id="infinite-loops" className="mt-8">
      <h3 className="text-2xl font-semibold text-blue-600">
        5.5. លូបអន្ដរក្រោយ
      </h3>
      <p className="mt-2">
        លូបអន្ដរក្រោយត្រូវបានប្រើប្រសិនបើលក្ខខណ្ឌមិនត្រូវបានបញ្ចប់។
        វាអាចត្រូវបានប្រើប្រាស់ដោយព្រមានដោយស្របតាមការប្រើប្រាស់{" "}
        <code>break</code> សម្រាប់ចាកចេញពីលូប។
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
        <code>
          {"\n"}#include &lt;stdio.h&gt;{"\n"}
          {"\n"}int main() {"{"}
          {"\n"}
          {"    "}while (1) {"{"}
          {"\n"}
          {"        "}printf("This is an infinite loop\n");{"\n"}
          {"        "}break; // Exit the loop{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}return 0;{"\n"}
          {"}"}
          {"\n"}
        </code>
        {"\n"}
        {"        "}
      </pre>
      <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
        Output: This is an infinite loop{"\n"}
      </pre>
    </div>
  </div>
  <div id="functions" className="py-12 px-6 overflow-y-auto">
    <h2 className="text-3xl font-semibold text-blue-600">6. Functions in C</h2>
    <p className="mt-4 text-lg">
      នៅក្នុងផ្នែកនេះ យើងនឹងសិក្សាពីមុខងារ (Functions) នៅក្នុងភាសា C។
    </p>
    {/* Function Declaration and Definition */}
    <div id="function-declaration" className="mt-8">
      <h3 className="text-2xl font-semibold text-blue-600">
        6.1. ការប្រាប់ និងការបង្កើតមុខងារ
      </h3>
      <p className="mt-2">
        មុខងារ (Function) ត្រូវបានប្រើដើម្បីបែងចែកការងារនៅក្នុងកម្មវិធី។
        ការប្រាប់មុខងារមានបញ្ហាទៅក្នុងកូដមុនពីការអនុវត្តន៍វា។
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
        <code>
          {"\n"}#include &lt;stdio.h&gt;{"\n"}
          {"\n"}void greet() {"{"}
          {"\n"}
          {"    "}printf("Hello, World!\n");{"\n"}
          {"}"}
          {"\n"}
          {"\n"}int main() {"{"}
          {"\n"}
          {"    "}greet();{"  "}// Function call{"\n"}
          {"    "}return 0;{"\n"}
          {"}"}
          {"\n"}
        </code>
        {"\n"}
        {"        "}
      </pre>
      <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
        Output: Hello, World!{"\n"}
      </pre>
    </div>
    {/* Function Arguments and Return Types */}
    <div id="arguments-return" className="mt-8">
      <h3 className="text-2xl font-semibold text-blue-600">
        6.2. ប្រភេទអាគុយម៉ង់ និងប្រភេទត្រឡប់តាមមុខងារ
      </h3>
      <p className="mt-2">
        មុខងារមានអាគុយម៉ង់ ដែលអាចប្រើក្នុងការទទួលយកទិន្នន័យមកក្នុងវា។
        ប្រភេទត្រឡប់តាមមុខងារ ក៏អាចធ្វើការត្រឡប់តម្លៃមកវិញបានផងដែរ។
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
        <code>
          {"\n"}#include &lt;stdio.h&gt;{"\n"}
          {"\n"}int add(int a, int b) {"{"}
          {"\n"}
          {"    "}return a + b;{"\n"}
          {"}"}
          {"\n"}
          {"\n"}int main() {"{"}
          {"\n"}
          {"    "}int result = add(3, 4);{"\n"}
          {"    "}printf("The sum is: %d\n", result);{"\n"}
          {"    "}return 0;{"\n"}
          {"}"}
          {"\n"}
        </code>
        {"\n"}
        {"        "}
      </pre>
      <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
        Output: The sum is: 7{"\n"}
      </pre>
    </div>
    {/* Recursion */}
    <div id="recursion" className="mt-8">
      <h3 className="text-2xl font-semibold text-blue-600">
        6.3. ការហៅដោយខ្លួនឯង
      </h3>
      <p className="mt-2">
        Recursion គឺជាការហៅមុខងារមួយដោយខ្លួនឯង ដើម្បីដោះសោរាបញ្ហាដែលស្រដៀងគ្នា។
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
        <code>
          {"\n"}#include &lt;stdio.h&gt;{"\n"}
          {"\n"}int factorial(int n) {"{"}
          {"\n"}
          {"    "}if (n == 0) {"{"}
          {"\n"}
          {"        "}return 1;{"\n"}
          {"    "}
          {"}"} else {"{"}
          {"\n"}
          {"        "}return n * factorial(n - 1);{"  "}// Recursive call{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"}"}
          {"\n"}
          {"\n"}int main() {"{"}
          {"\n"}
          {"    "}int result = factorial(5);{"\n"}
          {"    "}printf("Factorial of 5 is: %d\n", result);{"\n"}
          {"    "}return 0;{"\n"}
          {"}"}
          {"\n"}
        </code>
        {"\n"}
        {"        "}
      </pre>
      <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
        Output: Factorial of 5 is: 120{"\n"}
      </pre>
    </div>
    {/* Call by Value vs. Call by Reference */}
    <div id="call-by-value" className="mt-8">
      <h3 className="text-2xl font-semibold text-blue-600">
        6.4. ការហៅតាមតម្លៃ និងការហៅតាមយោង
      </h3>
      <p className="mt-2">
        ការហៅតាមតម្លៃ
        និងការហៅតាមយោងមានភាពខុសគ្នាក្នុងការផ្លាស់ប្តូរទិន្នន័យនៅក្នុងមុខងារ។
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
        <code>
          {"\n"}#include &lt;stdio.h&gt;{"\n"}
          {"\n"}void byValue(int a) {"{"}
          {"\n"}
          {"    "}a = 20;{"  "}// Only modifies the local copy{"\n"}
          {"}"}
          {"\n"}
          {"\n"}void byReference(int *a) {"{"}
          {"\n"}
          {"    "}*a = 20;{"  "}// Modifies the original value{"\n"}
          {"}"}
          {"\n"}
          {"\n"}int main() {"{"}
          {"\n"}
          {"    "}int x = 10;{"\n"}
          {"    "}byValue(x);{"\n"}
          {"    "}printf("Value after byValue: %d\n", x);{"  "}// 10{"\n"}
          {"\n"}
          {"    "}byReference(&amp;x);{"\n"}
          {"    "}printf("Value after byReference: %d\n", x);{"  "}// 20{"\n"}
          {"    "}return 0;{"\n"}
          {"}"}
          {"\n"}
        </code>
        {"\n"}
        {"        "}
      </pre>
      <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
        Output: {"\n"}Value after byValue: 10{"\n"}Value after byReference: 20
        {"\n"}
      </pre>
    </div>
    {/* Function Prototypes */}
    <div id="prototypes" className="mt-8">
      <h3 className="text-2xl font-semibold text-blue-600">
        6.5. ប្រភេទមុខងារ
      </h3>
      <p className="mt-2">
        ប្រភេទមុខងារ (Function Prototypes)
        ត្រូវបានប្រើដើម្បីស្នើរសុំការប្រាប់ពីបែបបទនៃមុខងារ មុនការអនុវត្តន៍វា។
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
        <code>
          {"\n"}#include &lt;stdio.h&gt;{"\n"}
          {"\n"}// Function prototype{"\n"}void greet();{"\n"}
          {"\n"}int main() {"{"}
          {"\n"}
          {"    "}greet();{"  "}// Function call{"\n"}
          {"    "}return 0;{"\n"}
          {"}"}
          {"\n"}
          {"\n"}void greet() {"{"}
          {"\n"}
          {"    "}printf("Hello, World!\n");{"\n"}
          {"}"}
          {"\n"}
        </code>
        {"\n"}
        {"        "}
      </pre>
      <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
        Output: Hello, World!{"\n"}
      </pre>
    </div>
    {/* Header Files and Libraries */}
    <div id="header-files" className="mt-8">
      <h3 className="text-2xl font-semibold text-blue-600">
        6.6. កំណត់ឯកសារ និងបណ្ណាល័យ
      </h3>
      <p className="mt-2">
        ឯកសារ header និងបណ្ណាល័យ (Libraries)
        ត្រូវបានប្រើដើម្បីផ្តល់សេវាកម្មនិងមុខងារផ្សេងៗដែលអាចអនុវត្តបាន។
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
        <code>
          {"\n"}#include &lt;stdio.h&gt;&gt;{"  "}// Standard library for
          input-output functions{"\n"}#include &lt;math.h&gt;{"   "}// Library
          for mathematical functions{"\n"}
          {"\n"}int main() {"{"}
          {"\n"}
          {"    "}printf("Square root of 16 is: %.2f\n", sqrt(16));{"  "}//
          sqrt() function from math.h{"\n"}
          {"    "}return 0;{"\n"}
          {"}"}
          {"\n"}
        </code>
        {"\n"}
        {"        "}
      </pre>
      <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
        Output: Square root of 16 is: 4.00{"\n"}
      </pre>
    </div>
    {/* Standard Library Functions */}
    <div id="standard-functions" className="mt-8">
      <h3 className="text-2xl font-semibold text-blue-600">
        6.7. មុខងារបណ្ណាល័យស្តង់ដារ
      </h3>
      <p className="mt-2">
        មុខងារបណ្ណាល័យស្តង់ដារ (Standard Library Functions) នៅក្នុងភាសា C
        ផ្តល់ជូននូវមុខងារដែលមានប្រយោជន៍សម្រាប់ការងារផ្សេងៗគ្នា។
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
        <code>
          {"\n"}#include &lt;stdio.h&gt;&gt;{"\n"}
          {"\n"}int main() {"{"}
          {"\n"}
          {"    "}char str[] = "Hello, World!";{"\n"}
          {"    "}printf("Length of string: %lu\n", strlen(str));{"  "}//
          strlen() function from string.h{"\n"}
          {"    "}return 0;{"\n"}
          {"}"}
          {"\n"}
        </code>
        {"\n"}
        {"        "}
      </pre>
      <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
        Output: Length of string: 13{"\n"}
      </pre>
    </div>
  </div>
  <div id="arrays" className="py-12 px-6 overflow-y-auto">
    <h2 className="text-3xl font-semibold text-blue-600">7. Arrays in C</h2>
    <p className="mt-4 text-lg">
      នៅក្នុងផ្នែកនេះ យើងនឹងសិក្សាពីអារេ (Arrays) នៅក្នុងភាសា C។
    </p>
    {/* One-dimensional Arrays */}
    <div id="one-dimensional-arrays" className="mt-8">
      <h3 className="text-2xl font-semibold text-blue-600">
        7.1. អារេមួយវិមាត្រ
      </h3>
      <p className="mt-2">
        អារេមួយវិមាត្រគឺជាការប្រមូលគ្នានៃតម្លៃដែលមានប្រភេទដូចគ្នា។
        អារេមួយមិតិយ៉ាងសាមញ្ញនឹងមានកូដដូចខាងក្រោម។
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
        <code>
          {"\n"}#include &lt;stdio.h&gt;{"\n"}
          {"\n"}int main() {"{"}
          {"\n"}
          {"    "}int arr[5] = {"{"}1, 2, 3, 4, 5{"}"};{"  "}// One-dimensional
          array{"\n"}
          {"    "}for (int i = 0; i &lt; 5; i++) {"{"}
          {"\n"}
          {"        "}printf("%d ", arr[i]);{"  "}// Access elements using index
          {"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}return 0;{"\n"}
          {"}"}
          {"\n"}
        </code>
        {"\n"}
        {"        "}
      </pre>
      <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
        Output: 1 2 3 4 5{"\n"}
      </pre>
    </div>
    {/* Multi-dimensional Arrays */}
    <div id="multi-dimensional-arrays" className="mt-8">
      <h3 className="text-2xl font-semibold text-blue-600">
        7.2. អារេពហុវិមាត្រ
      </h3>
      <p className="mt-2">
        អារេពហុវិមាត្រគឺជាអារេដែលមានជម្រើសតិចតួចជាច្រើន (ធម្មតាជាម៉ាត្រិក)។
        អារេនេះអាចប្រើបានដើម្បីផ្ទុកទិន្នន័យដូចជា តារាងលេខ។
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
        <code>
          {"\n"}#include &lt;stdio.h&gt;{"\n"}
          {"\n"}int main() {"{"}
          {"\n"}
          {"    "}int arr[2][3] = {"{"}
          {"{"}1, 2, 3{"}"}, {"{"}4, 5, 6{"}"}
          {"}"};{"  "}// 2x3 two-dimensional array{"\n"}
          {"    "}for (int i = 0; i &lt; 2; i++) {"{"}
          {"\n"}
          {"        "}for (int j = 0; j &lt; 3; j++) {"{"}
          {"\n"}
          {"            "}printf("%d ", arr[i][j]);{"  "}// Accessing 2D array
          elements{"\n"}
          {"        "}
          {"}"}
          {"\n"}
          {"        "}printf("\n");{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}return 0;{"\n"}
          {"}"}
          {"\n"}
        </code>
        {"\n"}
        {"        "}
      </pre>
      <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
        Output: {"\n"}1 2 3 {"\n"}4 5 6{"\n"}
      </pre>
    </div>
    {/* Array Initialization */}
    <div id="array-initialization" className="mt-8">
      <h3 className="text-2xl font-semibold text-blue-600">
        7.3. ការកំណត់អារេ
      </h3>
      <p className="mt-2">
        ការកំណត់អារេគឺជាការបញ្ជាក់តម្លៃដំបូងសម្រាប់អារេ។
        អ្នកអាចកំណត់តម្លៃដំបូងបានដោយប្រើសញ្ញាបញ្ជូន `{"{"}
        {"}"}`។
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
        <code>
          {"\n"}#include &lt;stdio.h&gt;{"\n"}
          {"\n"}int main() {"{"}
          {"\n"}
          {"    "}int arr[5] = {"{"}1, 2, 3{"}"};{"  "}// Array initialized with
          partial values{"\n"}
          {"    "}for (int i = 0; i &lt; 5; i++) {"{"}
          {"\n"}
          {"        "}printf("%d ", arr[i]);{"  "}// Remaining values will be
          set to 0{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}return 0;{"\n"}
          {"}"}
          {"\n"}
        </code>
        {"\n"}
        {"        "}
      </pre>
      <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
        Output: 1 2 3 0 0{"\n"}
      </pre>
    </div>
    {/* Passing Arrays to Functions */}
    <div id="passing-arrays" className="mt-8">
      <h3 className="text-2xl font-semibold text-blue-600">
        7.4. ការផ្ទេរអារេទៅមុខងារ
      </h3>
      <p className="mt-2">
        អ្នកអាចផ្ទេរអារេទៅមុខងារ ដោយផ្ទេរតែអាសយដ្ឋាននៃអារេ។
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
        <code>
          {"\n"}#include &lt;stdio.h&gt;{"\n"}
          {"\n"}void printArray(int arr[], int size) {"{"}
          {"\n"}
          {"    "}for (int i = 0; i &lt; size; i++) {"{"}
          {"\n"}
          {"        "}printf("%d ", arr[i]);{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"}"}
          {"\n"}
          {"\n"}int main() {"{"}
          {"\n"}
          {"    "}int arr[5] = {"{"}1, 2, 3, 4, 5{"}"};{"\n"}
          {"    "}printArray(arr, 5);{"  "}// Passing array to function{"\n"}
          {"    "}return 0;{"\n"}
          {"}"}
          {"\n"}
        </code>
        {"\n"}
        {"        "}
      </pre>
      <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
        Output: 1 2 3 4 5{"\n"}
      </pre>
    </div>
    {/* Array Manipulation */}
    <div id="array-manipulation" className="mt-8">
      <h3 className="text-2xl font-semibold text-blue-600">
        7.5. ការបដិសេធអារេ
      </h3>
      <p className="mt-2">
        ការបដិសេធអារេអាចមានប្រយោជន៍ដើម្បីកែប្រែទិន្នន័យក្នុងអារេ។
        ការបដិសេធអារេអាចធ្វើការផ្លាស់ប្តូរ តម្លៃធាតុនៃអារេ
        និងគ្រប់គ្រងទិន្នន័យដោយប្រើកូដរួមផ្សំ។
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
        <code>
          {"\n"}#include &lt;stdio.h&gt;{"\n"}
          {"\n"}int main() {"{"}
          {"\n"}
          {"    "}int arr[5] = {"{"}1, 2, 3, 4, 5{"}"};{"\n"}
          {"    "}for (int i = 0; i &lt; 5; i++) {"{"}
          {"\n"}
          {"        "}arr[i] = arr[i] * 2;{"  "}// Multiply each element by 2
          {"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"\n"}
          {"    "}for (int i = 0; i &lt; 5; i++) {"{"}
          {"\n"}
          {"        "}printf("%d ", arr[i]);{"  "}// Display updated array{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}return 0;{"\n"}
          {"}"}
          {"\n"}
        </code>
        {"\n"}
        {"        "}
      </pre>
      <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
        Output: 2 4 6 8 10{"\n"}
      </pre>
    </div>
  </div>
  <div id="pointers" className="py-12 px-6 overflow-y-auto">
  <h2 className="text-3xl font-semibold text-blue-600">8. Pointers in C</h2>
  <p className="mt-4 text-lg">
    នៅក្នុងផ្នែកនេះ យើងនឹងសិក្សាពីPointer (Pointers) នៅក្នុងភាសា C។
  </p>
  <div id="introduction-to-pointers" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      8.1. ការណែនាំអំពីPointer
    </h3>
    <p className="mt-2">
      Pointer គឺជាអថេរដែលផ្ទុកអាសយដ្ឋាននៃអថេរផ្សេងទៀត។ យើងប្រើPointer
      ដើម្បីយកអាសយដ្ឋាននៃអថេរមួយ
      ហើយអាចប្រើវាដើម្បីចូលដំណើរការទិន្នន័យក្នុងអថេរនោះ។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}#include &lt;stdio.h&gt;{"\n"}
        {"\n"}int main() {"{"}
        {"\n"}
        {"    "}int a = 10;{"\n"}
        {"    "}int *ptr = &amp;a;{"  "}// ptr is a pointer to a{"\n"}
        {"    "}printf("Value of a: %d\n", a);{"\n"}
        {"    "}printf("Value through ptr: %d\n", *ptr);{"  "}// Dereferencing
        the pointer{"\n"}
        {"    "}return 0;{"\n"}
        {"}"}
        {"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output: {"\n"}Value of a: 10{"\n"}Value through ptr: 10{"\n"}
    </pre>
  </div>
  <div id="pointer-declaration" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      8.2. ការប្រកាស និង ការបង្កើតPointer
    </h3>
    <p className="mt-2">
      ក្នុងភាសា C, Pointerត្រូវបានប្រកាសដោយប្រើសញ្ញា <code>*</code>។
      អ្នកអាចបង្កើតPointer និងកំណត់អាសយដ្ឋានឱ្យវាបានដោយប្រើសញ្ញា{" "}
      <code>&amp;</code> ។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}#include &lt;stdio.h&gt;{"\n"}
        {"\n"}int main() {"{"}
        {"\n"}
        {"    "}int a = 5;{"\n"}
        {"    "}int *ptr = &amp;a;{"  "}// Pointer initialization with address
        of a{"\n"}
        {"    "}printf("Address of a: %p\n", (void*)ptr);{"  "}// Print address
        {"\n"}
        {"    "}return 0;{"\n"}
        {"}"}
        {"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output: {"\n"}Address of a: <address_value>{"\n"}</address_value>
    </pre>
  </div>
  <div id="pointers-and-arrays" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      8.3. Pointer និង អារេ
    </h3>
    <p className="mt-2">
      Pointerនឹងអារេគឺជាគ្រឿងភ្ជាប់គ្នាដោយពិតប្រាកដ។ យើងអាចប្រើPointer
      ដើម្បីចូលទៅកាន់ធាតុក្នុងអារេ។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}#include &lt;stdio.h&gt;{"\n"}
        {"\n"}int main() {"{"}
        {"\n"}
        {"    "}int arr[3] = {"{"}10, 20, 30{"}"};{"\n"}
        {"    "}int *ptr = arr;{"  "}// Pointer points to the first element of
        arr{"\n"}
        {"    "}for (int i = 0; i &lt; 3; i++) {"{"}
        {"\n"}
        {"        "}printf("%d ", *(ptr + i));{"  "}// Dereference pointer to
        access array elements{"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"    "}return 0;{"\n"}
        {"}"}
        {"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output: 10 20 30{"\n"}
    </pre>
  </div>
  <div id="pointers-to-functions" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      8.4. Pointer ទៅមុខងារ
    </h3>
    <p className="mt-2">
      អ្នកអាចប្រើPointer ដើម្បីចូលទៅកាន់មុខងារ និងហៅមុខងារនោះតាមអាសយដ្ឋាន។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}#include &lt;stdio.h&gt;{"\n"}
        {"\n"}void greet() {"{"}
        {"\n"}
        {"    "}printf("Hello, World!\n");{"\n"}
        {"}"}
        {"\n"}
        {"\n"}int main() {"{"}
        {"\n"}
        {"    "}void (*ptr)() = greet;{"  "}// Pointer to function greet{"\n"}
        {"    "}ptr();{"  "}// Call function using pointer{"\n"}
        {"    "}return 0;{"\n"}
        {"}"}
        {"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output: {"\n"}Hello, World!{"\n"}
    </pre>
  </div>
  <div id="dynamic-memory-allocation" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      8.5. ការបញ្ជូនសម្ភារៈស្មើ
    </h3>
    <p className="mt-2">
      ការបញ្ជូនសម្ភារៈស្មើមានប្រយោជន៍នៅពេលដែលអ្នកត្រូវការបង្កើតអត្ថបទមួយដែលមានទំហំមិនប្រាកដក្នុងរយៈពេលបណ្តោះអាសន្ន។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}#include &lt;stdio.h&gt;{"\n"}#include &lt;stdlib.h&gt;{"\n"}
        {"\n"}int main() {"{"}
        {"\n"}
        {"    "}int *ptr = (int *)malloc(5 * sizeof(int));{"  "}// Allocate
        memory for 5 integers{"\n"}
        {"    "}for (int i = 0; i &lt; 5; i++) {"{"}
        {"\n"}
        {"        "}ptr[i] = i + 1;{"  "}// Initialize dynamically allocated
        memory{"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"\n"}
        {"    "}for (int i = 0; i &lt; 5; i++) {"{"}
        {"\n"}
        {"        "}printf("%d ", ptr[i]);{"  "}// Print dynamically allocated
        array{"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"\n"}
        {"    "}free(ptr);{"  "}// Free allocated memory{"\n"}
        {"    "}return 0;{"\n"}
        {"}"}
        {"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output: {"\n"}1 2 3 4 5{"\n"}
    </pre>
  </div>
  <div id="pointer-arithmetic" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      8.6. គណិតវិទ្យាPointer
    </h3>
    <p className="mt-2">
      Pointerអាចប្រើសម្រាប់ធ្វើការគណិតវិទ្យា (arithmetics)
      ដើម្បីបញ្ជូនទៅឬបញ្ចេញនូវអាសយដ្ឋាននៃអថេរផ្សេងៗ។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}#include &lt;stdio.h&gt;{"\n"}
        {"\n"}int main() {"{"}
        {"\n"}
        {"    "}int arr[3] = {"{"}1, 2, 3{"}"};{"\n"}
        {"    "}int *ptr = arr;{"\n"}
        {"    "}printf("%d ", *(ptr + 1));{"  "}// Pointer arithmetic to access
        second element{"\n"}
        {"    "}return 0;{"\n"}
        {"}"}
        {"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output: {"\n"}2{"\n"}
    </pre>
  </div>
  <div id="pointers-to-structures" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      8.7. Pointer ទៅStructures និង អារេ
    </h3>
    <p className="mt-2">
      អ្នកអាចប្រើPointer ដើម្បីចូលទៅកាន់ប្រភេទទិន្នន័យស្មុគស្មាញដូចជា structures
      និងអារេ។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}#include &lt;stdio.h&gt;{"\n"}
        {"\n"}struct Person {"{"}
        {"\n"}
        {"    "}char name[50];{"\n"}
        {"    "}int age;{"\n"}
        {"}"};{"\n"}
        {"\n"}int main() {"{"}
        {"\n"}
        {"    "}struct Person p1 = {"{"}"John", 30{"}"};{"\n"}
        {"    "}struct Person *ptr = &amp;p1;{"\n"}
        {"    "}printf("Name: %s, Age: %d\n", ptr-&gt;name, ptr-&gt;age);{"  "}
        // Access struct members using pointer{"\n"}
        {"    "}return 0;{"\n"}
        {"}"}
        {"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output: {"\n"}Name: John, Age: 30{"\n"}
    </pre>
  </div>
</div>


<div id="structures-unions" className="py-12 px-6 overflow-y-auto">
  <h2 className="text-3xl font-semibold text-blue-600">
    9. Structures and Unions
  </h2>
  <p className="mt-4 text-lg">
    នៅក្នុងផ្នែកនេះ យើងនឹងសិក្សាពីស្រទាប់ និងអង្គចងចាំ (Structures and Unions)
    នៅក្នុងភាសា C។
  </p>
  <div id="introduction-to-structures" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      9.1. ការណែនាំអំពីស្រទាប់
    </h3>
    <p className="mt-2">
      ស្រទាប់ (Structures) គឺជាការបញ្ចូលតម្លៃមួយចំនួនជាភាគរយ
      ក្នុងអង្គតម្លៃផ្សេងៗ។
      អ្នកអាចប្រើស្រទាប់ដើម្បីធ្វើការរួមបញ្ចូលទិន្នន័យដែលមានប្រភេទផ្សេងៗគ្នា។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}#include &lt;stdio.h&gt;{"\n"}
        {"\n"}struct Person {"{"}
        {"\n"}
        {"    "}char name[50];{"\n"}
        {"    "}int age;{"\n"}
        {"}"};{"\n"}
        {"\n"}int main() {"{"}
        {"\n"}
        {"    "}struct Person person1 = {"{"}"John", 30{"}"};{"\n"}
        {"    "}printf("Name: %s\n", person1.name);{"\n"}
        {"    "}printf("Age: %d\n", person1.age);{"\n"}
        {"    "}return 0;{"\n"}
        {"}"}
        {"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output: {"\n"}Name: John{"\n"}Age: 30{"\n"}
    </pre>
  </div>
  <div id="structure-declaration-initialization" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      9.2. ការបញ្ចូលនិងកំណត់តម្លៃស្រទាប់
    </h3>
    <p className="mt-2">
      ការបញ្ចូលស្រទាប់ជាដើម និងការកំណត់តម្លៃប្រើរបៀបដូចខាងក្រោម។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}#include &lt;stdio.h&gt;{"\n"}
        {"\n"}struct Student {"{"}
        {"\n"}
        {"    "}char name[50];{"\n"}
        {"    "}int rollNumber;{"\n"}
        {"    "}float marks;{"\n"}
        {"}"};{"\n"}
        {"\n"}int main() {"{"}
        {"\n"}
        {"    "}struct Student student1 = {"{"}"Alice", 101, 90.5{"}"};{"\n"}
        {"    "}printf("Name: %s\n", student1.name);{"\n"}
        {"    "}printf("Roll Number: %d\n", student1.rollNumber);{"\n"}
        {"    "}printf("Marks: %.2f\n", student1.marks);{"\n"}
        {"    "}return 0;{"\n"}
        {"}"}
        {"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output: {"\n"}Name: Alice{"\n"}Roll Number: 101{"\n"}Marks: 90.50{"\n"}
    </pre>
  </div>
  <div id="accessing-structure-members" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      9.3. ការចូលប្រើសមាជិកស្រទាប់
    </h3>
    <p className="mt-2">
      ដើម្បីចូលប្រើសមាជិកស្រទាប់ អ្នកត្រូវប្រើសញ្ញាសមូហធិបតេយ្យ `.` ។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}#include &lt;stdio.h&gt;{"\n"}
        {"\n"}struct Person {"{"}
        {"\n"}
        {"    "}char name[50];{"\n"}
        {"    "}int age;{"\n"}
        {"}"};{"\n"}
        {"\n"}int main() {"{"}
        {"\n"}
        {"    "}struct Person person1 = {"{"}"John", 30{"}"};{"\n"}
        {"    "}printf("Name: %s\n", person1.name);{"  "}// Accessing structure
        member{"\n"}
        {"    "}printf("Age: %d\n", person1.age);{"\n"}
        {"    "}return 0;{"\n"}
        {"}"}
        {"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output: {"\n"}Name: John{"\n"}Age: 30{"\n"}
    </pre>
  </div>
  <div id="nested-structures" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      9.4. ស្រទាប់ជាប់គ្នា
    </h3>
    <p className="mt-2">
      អ្នកអាចប្រើស្រទាប់នៅក្នុងស្រទាប់ផ្សេងទៀត ដើម្បីផ្ទុកព័ត៌មានបន្ថែម។
      នេះអាចធ្វើបានតាមរយៈការបញ្ចូលរបស់ស្រទាប់ដទៃ។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}#include &lt;stdio.h&gt;{"\n"}
        {"\n"}struct Date {"{"}
        {"\n"}
        {"    "}int day;{"\n"}
        {"    "}int month;{"\n"}
        {"    "}int year;{"\n"}
        {"}"};{"\n"}
        {"\n"}struct Person {"{"}
        {"\n"}
        {"    "}char name[50];{"\n"}
        {"    "}struct Date birthDate;{"  "}// Nested structure{"\n"}
        {"}"};{"\n"}
        {"\n"}int main() {"{"}
        {"\n"}
        {"    "}struct Person person1 = {"{"}"John", {"{"}15, 5, 1990{"}"}
        {"}"};{"\n"}
        {"    "}printf("Name: %s\n", person1.name);{"\n"}
        {"    "}printf("Birth Date: %d/%d/%d\n", person1.birthDate.day,
        person1.birthDate.month, person1.birthDate.year);{"\n"}
        {"    "}return 0;{"\n"}
        {"}"}
        {"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output: {"\n"}Name: John{"\n"}Birth Date: 15/5/1990{"\n"}
    </pre>
  </div>
  {/* Unions in C */}
  <div id="unions-in-c" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      9.5. អង្គចងចាំក្នុង C
    </h3>
    <p className="mt-2">
      អង្គចងចាំ (Union)
      គឺជា​ដំណើរការដែលអនុញ្ញាតឲ្យមានការប្រើប្រាស់ប្រភេទទិន្នន័យជាច្រើនក្នុងមួយផ្នែកតែម្ដង។
      តែការប្រើប្រាស់ទិន្នន័យជាច្រើនប្រភេទក្នុងចំណោមវា គួរតែមានទំហំតែមួយ។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}#include &lt;stdio.h&gt;{"\n"}
        {"\n"}union Data {"{"}
        {"\n"}
        {"    "}int i;{"\n"}
        {"    "}float f;{"\n"}
        {"    "}char str[20];{"\n"}
        {"}"};{"\n"}
        {"\n"}int main() {"{"}
        {"\n"}
        {"    "}union Data data;{"\n"}
        {"    "}data.i = 10;{"\n"}
        {"    "}printf("Data as integer: %d\n", data.i);{"\n"}
        {"    "}data.f = 220.5;{"\n"}
        {"    "}printf("Data as float: %.2f\n", data.f);{"\n"}
        {"    "}return 0;{"\n"}
        {"}"}
        {"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output: {"\n"}Data as integer: 10{"\n"}Data as float: 220.50{"\n"}
    </pre>
  </div>
  {/* Differences Between Structures and Unions */}
  <div id="differences-between-structures-unions" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      9.6. ការប្រៀបធៀបរវាងស្រទាប់ និងអង្គចងចាំ
    </h3>
    <p className="mt-2">
      មានការប្រៀបធៀបមួយចំនួនរវាងស្រទាប់ និងអង្គចងចាំ។
      ភាពខុសគ្នាដ៏សំខាន់គឺថាស្រទាប់ត្រូវបានប្រើដើម្បីផ្ទុកទិន្នន័យពីប្រភេទផ្សេងៗគ្នា
      ហើយទាំងអស់មានតម្លៃដែលត្រូវបានរក្សាទុកជាដំណាក់កាល។ តែអង្គចងចាំ
      គឺស្តាប់តែប្រភេទទិន្នន័យមួយគត់ នៅពេលនោះ។
    </p>
  </div>
</div>

<div id="file-handling" className="py-12 px-6 overflow-y-auto">
  <h2 className="text-3xl font-semibold text-blue-600">10. File Handling</h2>
  <p className="mt-4 text-lg">
    នៅក្នុងផ្នែកនេះ យើងនឹងសិក្សាពីការដោះសោនិងការប្រតិបត្តិការពីឯកសារ (File
    Handling) នៅក្នុងភាសា C។
  </p>
  {/* Introduction to File Handling */}
  <div id="introduction-to-file-handling" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      10.1. ការណែនាំអំពីការដោះសោនឯកសារ
    </h3>
    <p className="mt-2">
      File Handling គឺជាការប្រើប្រាស់ឯកសារជាមួយភាសា C ដើម្បីអាន បញ្ចូល
      ឬលុបព័ត៌មានពីឯកសារ។ ឯកសារនៅក្នុង C គឺអាចសរសេរ និងអានបាន។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}#include &lt;stdio.h&gt;{"\n"}
        {"\n"}int main() {"{"}
        {"\n"}
        {"    "}FILE *file = fopen("file.txt", "w");{"  "}// Open a file for
        writing{"\n"}
        {"    "}if (file != NULL) {"{"}
        {"\n"}
        {"        "}fprintf(file, "Hello, world!");{"  "}// Write to the file
        {"\n"}
        {"        "}fclose(file);{"  "}// Close the file{"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"    "}return 0;{"\n"}
        {"}"}
        {"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output: (Creates a file named "file.txt" with the content "Hello, world!")
      {"\n"}
    </pre>
  </div>
  {/* File Operations: fopen, fclose, fread, fwrite */}
  <div id="file-operations" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      10.2. ប្រតិបត្តិការនៅលើឯកសារ: fopen, fclose, fread, fwrite
    </h3>
    <p className="mt-2">
      ភាសា C ផ្តល់នូវមុខងារផ្សេងៗដើម្បីអាន និងសរសេរ ទិន្នន័យទៅក្នុងឯកសារ។
      ការប្រើប្រាស់មុខងារ fopen() និង fclose() សម្រាប់បើក និងបិទឯកសារ និង
      fread(), fwrite() សម្រាប់អាន និងសរសេរ ទិន្នន័យ។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}#include &lt;stdio.h&gt;{"\n"}
        {"\n"}int main() {"{"}
        {"\n"}
        {"    "}FILE *file = fopen("file.txt", "r");{"  "}// Open file for
        reading{"\n"}
        {"    "}char str[100];{"\n"}
        {"    "}if (file != NULL) {"{"}
        {"\n"}
        {"        "}fread(str, sizeof(char), 100, file);{"  "}// Read from the
        file{"\n"}
        {"        "}printf("Read content: %s\n", str);{"\n"}
        {"        "}fclose(file);{"  "}// Close the file{"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"    "}return 0;{"\n"}
        {"}"}
        {"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output: {"\n"}Read content: Hello, world!{"\n"}
    </pre>
  </div>
  {/* File Pointers and Modes */}
  <div id="file-pointers-modes" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      10.3. អាសយដ្ឋានឯកសារ និងមូដ
    </h3>
    <p className="mt-2">
      អ្នកអាចប្រើមុខងារ fopen() ដើម្បីបើកឯកសារជាមួយមូដផ្សេងៗ។
      មូដទាំងនេះអាចជាផ្នែកអាន ('r'), សរសេរ ('w'), ឬបន្ថែម ('a') ទៅក្នុងឯកសារ។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}#include &lt;stdio.h&gt;{"\n"}
        {"\n"}int main() {"{"}
        {"\n"}
        {"    "}FILE *file = fopen("file.txt", "w");{"  "}// Open file in write
        mode{"\n"}
        {"    "}if (file != NULL) {"{"}
        {"\n"}
        {"        "}fprintf(file, "This is a test.");{"\n"}
        {"        "}fclose(file);{"  "}// Close the file{"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"    "}return 0;{"\n"}
        {"}"}
        {"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output: (Creates or overwrites "file.txt" with the text "This is a test.")
      {"\n"}
    </pre>
  </div>
  {/* Reading and Writing Text Files */}
  <div id="reading-writing-text-files" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      10.4. អាន និងសរសេរឯកសារប្រើអក្សរ
    </h3>
    <p className="mt-2">
      ការអាន និងសរសេរឯកសារដោយប្រើអក្សរនៅក្នុង C ត្រូវបានធ្វើដោយប្រើមុខងារ
      fopen(), fwrite(), fread() និង fclose()។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}#include &lt;stdio.h&gt;{"\n"}
        {"\n"}int main() {"{"}
        {"\n"}
        {"    "}FILE *file = fopen("file.txt", "r");{"  "}// Open file in read
        mode{"\n"}
        {"    "}char ch;{"\n"}
        {"    "}if (file != NULL) {"{"}
        {"\n"}
        {"        "}while ((ch = fgetc(file)) != EOF) {"{"}
        {"  "}// Read character by character{"\n"}
        {"            "}putchar(ch);{"\n"}
        {"        "}
        {"}"}
        {"\n"}
        {"        "}fclose(file);{"  "}// Close the file{"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"    "}return 0;{"\n"}
        {"}"}
        {"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output: {"\n"}Content of the file displayed character by character{"\n"}
    </pre>
  </div>
  {/* Error Handling in File Operations */}
  <div id="error-handling-file-operations" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      10.5. ការដោះសោនកំហុសក្នុងប្រតិបត្តិការឯកសារ
    </h3>
    <p className="mt-2">
      ការដោះសោនកំហុសនៅក្នុងប្រតិបត្តិការឯកសារអាចធ្វើបានដោយប្រើមុខងារដូចជា
      `fopen()` ដែលត្រឡប់តែបែបតាមឯកសារបើកបានឬមិនបាន
      និងផ្តល់ព័ត៌មានបន្ថែមពាក់ព័ន្ធក្នុងករណីមិនអាចបើកឯកសារ។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}#include &lt;stdio.h&gt;{"\n"}
        {"\n"}int main() {"{"}
        {"\n"}
        {"    "}FILE *file = fopen("nonexistent.txt", "r");{"  "}// Try to open
        a non-existent file{"\n"}
        {"    "}if (file == NULL) {"{"}
        {"\n"}
        {"        "}printf("Error: Could not open file.\n");{"\n"}
        {"    "}
        {"}"} else {"{"}
        {"\n"}
        {"        "}fclose(file);{"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"    "}return 0;{"\n"}
        {"}"}
        {"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output: {"\n"}Error: Could not open file.{"\n"}
    </pre>
  </div>
  {/* Binary File Handling */}
  <div id="binary-file-handling" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      10.6. ការដោះសោនឯកសារប្រភេទបាញ់ (Binary Files)
    </h3>
    <p className="mt-2">
      ការប្រើប្រាស់ឯកសារប្រភេទបាញ់ (Binary) អាចធ្វើបានដោយប្រើមុខងារ fopen()
      ដោយប្រើមូដ "wb" សម្រាប់សរសេរ និង "rb" សម្រាប់អាន។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}#include &lt;stdio.h&gt;{"\n"}
        {"\n"}int main() {"{"}
        {"\n"}
        {"    "}FILE *file = fopen("data.bin", "wb");{"  "}// Open binary file
        for writing{"\n"}
        {"    "}int num = 1234;{"\n"}
        {"    "}fwrite(&amp;num, sizeof(num), 1, file);{"  "}// Write binary
        data to file{"\n"}
        {"    "}fclose(file);{"  "}// Close the file{"\n"}
        {"\n"}
        {"    "}file = fopen("data.bin", "rb");{"  "}// Open binary file for
        reading{"\n"}
        {"    "}fread(&amp;num, sizeof(num), 1, file);{"  "}// Read binary data
        from file{"\n"}
        {"    "}printf("Read number: %d\n", num);{"\n"}
        {"    "}fclose(file);{"\n"}
        {"    "}return 0;{"\n"}
        {"}"}
        {"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output: {"\n"}Read number: 1234{"\n"}
    </pre>
  </div>
</div>

<div id="dynamic-memory-allocation" className="py-12 px-6 overflow-y-auto">
  <h2 className="text-3xl font-semibold text-blue-600">
    11. Dynamic Memory Allocation
  </h2>
  <p className="mt-4 text-lg">
    នៅក្នុងផ្នែកនេះ យើងនឹងសិក្សាពីការបែងចែកសម្ភារៈនៅលើចន្លោះម៉ាស៊ីនយ៉ាងឥតកំណត់
    (Dynamic Memory Allocation) នៅក្នុងភាសា C។
  </p>
  {/* Introduction to Dynamic Memory */}
  <div id="introduction-to-dynamic-memory" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      11.1. ការណែនាំអំពីសម្ភារៈឥតកំណត់
    </h3>
    <p className="mt-2">
      Dynamic Memory Allocation
      គឺជាការបែងចែកអង្គចិត្តនៃសម្ភារៈមួយនៅពេលកម្មវិធីកំពុងដំណើរការដោយប្រើមុខងារ
      malloc(), calloc(), realloc() និង free()។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}#include &lt;stdio.h&gt;{"\n"}#include &lt;stdlib.h&gt;{"\n"}
        {"\n"}int main() {"{"}
        {"\n"}
        {"    "}int *ptr;{"\n"}
        {"    "}ptr = (int*) malloc(sizeof(int));{"  "}// Allocate memory for
        one integer{"\n"}
        {"    "}if (ptr != NULL) {"{"}
        {"\n"}
        {"        "}*ptr = 100;{"\n"}
        {"        "}printf("Value: %d\n", *ptr);{"\n"}
        {"        "}free(ptr);{"  "}// Free dynamically allocated memory{"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"    "}return 0;{"\n"}
        {"}"}
        {"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output: {"\n"}Value: 100{"\n"}
    </pre>
  </div>
  {/* malloc(), calloc(), realloc(), and free() */}
  <div id="malloc-calloc-realloc-free" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      11.2. malloc(), calloc(), realloc(), and free()
    </h3>
    <p className="mt-2">
      មុខងារ malloc() និង calloc()
      ត្រូវបានប្រើដើម្បីបែងចែកអង្គចិត្តម៉ាស៊ីនសម្រាប់ទិន្នន័យដែលមិនបានកំណត់ពីមុន
      (Dynamic Memory). realloc()
      ត្រូវបានប្រើដើម្បីបន្ថែមឬកាត់បន្ថយទំហំមាតិកាដែលបានបែងចែក។ free()
      ប្រើសម្រាប់ដោះលែងអង្គចិត្តដែលបានបែងចែក។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}#include &lt;stdio.h&gt;{"\n"}#include &lt;stdlib.h&gt;{"\n"}
        {"\n"}int main() {"{"}
        {"\n"}
        {"    "}int *arr;{"\n"}
        {"    "}arr = (int*) malloc(5 * sizeof(int));{"  "}// Allocate memory
        for 5 integers{"\n"}
        {"    "}if (arr != NULL) {"{"}
        {"\n"}
        {"        "}for (int i = 0; i &lt; 5; i++) {"{"}
        {"\n"}
        {"            "}arr[i] = i * 10;{"\n"}
        {"        "}
        {"}"}
        {"\n"}
        {"\n"}
        {"        "}for (int i = 0; i &lt; 5; i++) {"{"}
        {"\n"}
        {"            "}printf("%d ", arr[i]);{"  "}// Display elements{"\n"}
        {"        "}
        {"}"}
        {"\n"}
        {"\n"}
        {"        "}arr = (int*) realloc(arr, 10 * sizeof(int));{"  "}//
        Reallocate memory for 10 integers{"\n"}
        {"        "}for (int i = 5; i &lt; 10; i++) {"{"}
        {"\n"}
        {"            "}arr[i] = i * 10;{"\n"}
        {"        "}
        {"}"}
        {"\n"}
        {"\n"}
        {"        "}printf("\n");{"\n"}
        {"        "}for (int i = 0; i &lt; 10; i++) {"{"}
        {"\n"}
        {"            "}printf("%d ", arr[i]);{"  "}// Display updated elements
        {"\n"}
        {"        "}
        {"}"}
        {"\n"}
        {"\n"}
        {"        "}free(arr);{"  "}// Free allocated memory{"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"    "}return 0;{"\n"}
        {"}"}
        {"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output: {"\n"}0 10 20 30 40 {"\n"}0 10 20 30 40 50 60 70 80 90{"\n"}
    </pre>
  </div>
  {/* Memory Leaks and Memory Management */}
  <div id="memory-leaks-memory-management" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      11.3. ការហួសបាត់នៃសម្ភារៈ និងការគ្រប់គ្រងសម្ភារៈ
    </h3>
    <p className="mt-2">
      Memory Leaks គឺជាបញ្ហានៃការបែងចែកសម្ភារៈហើយមិនមានការដោះលែងមើលថែរប្រាកដ។
      វាអាចបណ្តាលឱ្យមានបញ្ហាកំណត់ក្នុងប្រព័ន្ធ។
      ការគ្រប់គ្រងសម្ភារៈប្រកបដោយការប្រើប្រាស់ free()
      និងការបង់កំណត់លើការបែងចែកមានសារៈសំខាន់។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}#include &lt;stdio.h&gt;{"\n"}#include &lt;stdlib.h&gt;{"\n"}
        {"\n"}int main() {"{"}
        {"\n"}
        {"    "}int *arr = (int*) malloc(5 * sizeof(int));{"  "}// Memory
        allocated but not freed{"\n"}
        {"    "}// Forgetting to call free() can cause a memory leak{"\n"}
        {"    "}// free(arr);{"  "}// Fix by freeing the allocated memory{"\n"}
        {"    "}return 0;{"\n"}
        {"}"}
        {"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output: {"\n"}(No output, but this program has a memory leak due to not
      freeing the memory){"\n"}
    </pre>
  </div>
  {/* Using Pointers with Dynamic Memory */}
  <div id="using-pointers-with-dynamic-memory" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      11.4. ការប្រើប្រាស់បញ្ជូនជាមួយសម្ភារៈឥតកំណត់
    </h3>
    <p className="mt-2">
      ការប្រើប្រាស់ pointers ជាមួយនឹង dynamic memory
      គឺមានសារៈសំខាន់ពេលដែលអ្នកកំណត់តម្លៃឥតកំណត់មួយសម្រាប់ទិន្នន័យ។
      ការប្រើប្រាស់ pointer អាចធ្វើឲ្យការបែងចែក memory
      ទៅលើអង្គចិត្តនីមួយៗកាន់តែមានប្រសិទ្ធភាព។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}#include &lt;stdio.h&gt;{"\n"}#include &lt;stdlib.h&gt;{"\n"}
        {"\n"}int main() {"{"}
        {"\n"}
        {"    "}int *ptr;{"\n"}
        {"    "}ptr = (int*) malloc(3 * sizeof(int));{"  "}// Allocate memory
        for 3 integers{"\n"}
        {"    "}if (ptr != NULL) {"{"}
        {"\n"}
        {"        "}for (int i = 0; i &lt; 3; i++) {"{"}
        {"\n"}
        {"            "}ptr[i] = i * 5;{"  "}// Assign values dynamically{"\n"}
        {"        "}
        {"}"}
        {"\n"}
        {"\n"}
        {"        "}for (int i = 0; i &lt; 3; i++) {"{"}
        {"\n"}
        {"            "}printf("%d ", ptr[i]);{"  "}// Display values{"\n"}
        {"        "}
        {"}"}
        {"\n"}
        {"\n"}
        {"        "}free(ptr);{"  "}// Free allocated memory{"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"    "}return 0;{"\n"}
        {"}"}
        {"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output: {"\n"}0 5 10{"\n"}
    </pre>
  </div>
</div>

<div id="preprocessor-directives" className="py-12 px-6 overflow-y-auto">
  <h2 className="text-3xl font-semibold text-blue-600">
    12. Preprocessor Directives
  </h2>
  <p className="mt-4 text-lg">
    នៅក្នុងផ្នែកនេះ យើងនឹងសិក្សាពីការប្រើប្រាស់បញ្ជាតម្រូវ (Preprocessor
    Directives) ក្នុងភាសា C។
  </p>
  {/* #define and Constants */}
  <div id="define-and-constants" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      12.1. #define and Constants
    </h3>
    <p className="mt-2">
      Directives #define ត្រូវបានប្រើសម្រាប់ការបង្កើត constants
      និងកំណត់តម្លៃថេរដែលត្រូវបានប្រើក្នុងកម្មវិធី។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}#include &lt;stdio.h&gt;{"\n"}
        {"\n"}#define PI 3.14{"  "}// Defining constant PI{"\n"}
        {"\n"}int main() {"{"}
        {"\n"}
        {"    "}float area = PI * 10 * 10;{"  "}// Using defined constant{"\n"}
        {"    "}printf("Area of circle: %.2f\n", area);{"\n"}
        {"    "}return 0;{"\n"}
        {"}"}
        {"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output: {"\n"}Area of circle: 314.00{"\n"}
    </pre>
  </div>
  {/* #include and Header Files */}
  <div id="include-and-header-files" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      12.2. #include and Header Files
    </h3>
    <p className="mt-2">
      Directive #include ត្រូវបានប្រើដើម្បីបញ្ចូលឯកសារ header
      ដែលមានប្រភេទនៃអនុបត្ថម្ភដូចជា function declarations, constants, and types។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}#include &lt;stdio.h&gt;{"  "}// Standard Input-Output header file
        {"\n"}
        {"\n"}int main() {"{"}
        {"\n"}
        {"    "}printf("Hello, World!\n");{"  "}// Using printf from stdio.h
        {"\n"}
        {"    "}return 0;{"\n"}
        {"}"}
        {"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output: {"\n"}Hello, World!{"\n"}
    </pre>
  </div>
  {/* Conditional Compilation */}
  <div id="conditional-compilation" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      12.3. Conditional Compilation
    </h3>
    <p className="mt-2">
      Conditional Compilation គឺជាការប្រើប្រាស់បញ្ជាតម្រូវ #if, #else, #elif និង
      #endif ដើម្បីជ្រើសរើសកូដមួយសម្រាប់បរិស្ថានផ្សេងៗគ្នា។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}#include &lt;stdio.h&gt;{"\n"}
        {"\n"}#define DEBUG 1{"  "}// Enable debug code{"\n"}
        {"\n"}int main() {"{"}
        {"\n"}
        {"    "}#if DEBUG{"\n"}
        {"        "}printf("Debugging is enabled.\n");{"\n"}
        {"    "}#else{"\n"}
        {"        "}printf("Debugging is disabled.\n");{"\n"}
        {"    "}#endif{"\n"}
        {"    "}return 0;{"\n"}
        {"}"}
        {"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output: {"\n"}Debugging is enabled.{"\n"}
    </pre>
  </div>
  {/* Macros and Inline Functions */}
  <div id="macros-and-inline-functions" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      12.4. Macros and Inline Functions
    </h3>
    <p className="mt-2">
      Macros ត្រូវបានប្រើសម្រាប់បង្កើតកូដផ្ទៃក្នុង (code snippets)
      ដែលត្រូវបានជំនួសដោយអត្ថបទមុននឹងកំណត់ដំណើរការ។ Inline functions
      គឺជាមុខងារដែលត្រូវបានកំណត់ក្នុងផ្ទាំងមួយនៃការជួបប្រទះដោយមិនបង្កើតការហៅមុខងារ។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}#include &lt;stdio.h&gt;{"\n"}
        {"\n"}#define SQUARE(x) ((x) * (x)){"  "}// Macro for square of a number
        {"\n"}
        {"\n"}inline int square(int x) {"{"}
        {"\n"}
        {"    "}return x * x;{"  "}// Inline function for square of a number
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}int main() {"{"}
        {"\n"}
        {"    "}printf("Square using macro: %d\n", SQUARE(4));{"\n"}
        {"    "}printf("Square using inline function: %d\n", square(4));{"\n"}
        {"    "}return 0;{"\n"}
        {"}"}
        {"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output: {"\n"}Square using macro: 16{"\n"}Square using inline function: 16
      {"\n"}
    </pre>
  </div>
  {/* File Inclusion and Guard Directives */}
  <div id="file-inclusion-and-guard-directives" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      12.5. File Inclusion and Guard Directives
    </h3>
    <p className="mt-2">
      Guard directives (e.g., #ifndef, #define, #endif)
      ត្រូវបានប្រើដើម្បីកុះគ្នាការបញ្ចូលឯកសារតែម្ដងក្នុងកម្មវិធីជាមួយនឹងការជៀសវាងភាពបញ្ចូលអំពីរបៀបមួយ។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}// Example of header guard{"\n"}#ifndef HEADER_FILE_H{"\n"}#define
        HEADER_FILE_H{"\n"}
        {"\n"}void exampleFunction();{"\n"}
        {"\n"}#endif{"  "}// HEADER_FILE_H{"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Explanation: {"\n"}This code ensures that the header file is only included
      once in a project.{"\n"}
    </pre>
  </div>
</div>

<div id="error-handling-and-debugging" className="py-12 px-6 overflow-y-auto">
  <h2 className="text-3xl font-semibold text-blue-600">
    13. ការដោះសោ និង ការកែចំ
  </h2>
  <p className="mt-4 text-lg">
    ក្នុងផ្នែកនេះយើងនឹងពិភាក្សាពីបច្ចេកទេសនៃការដោះសោ និង
    ការកែចំក្នុងការគ្រប់គ្រងកំហុស និងការត្រួតពិនិត្យបញ្ហាក្នុងការសរសេរកូដ C។
    ការប្រើប្រាស់ឧបករណ៍ និងបច្ចេកទេសទាំងនេះជួយអ្នកដើម្បីកំណត់
    និងដោះសោបញ្ហាដោយឆាប់រហ័សនៅពេលដែលអ្នកកំពុងអភិវឌ្ឍកម្មវិធី។
  </p>
  {/* Error Handling in C */}
  <div id="error-handling-in-c" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      13.1. ការដោះសោក្នុង C
    </h3>
    <p className="mt-2">
      ក្នុង C ការដោះសោធម្មតាត្រូវបានធ្វើតាមការប្រើតម្លៃត្រឡប់ `errno`
      និងមុខងារដោះសោដូចជា `perror()` និង `strerror()`។
      ឧបករណ៍ទាំងនេះអនុញ្ញាតឱ្យអ្នករកឃើញ
      និងរាយការណ៍ពីកំហុសនៅពេលដែលកម្មវិធីកំពុងដំណើរការ។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}#include &lt;stdio.h&gt;{"\n"}#include &lt;errno.h&gt;{"\n"}
        {"\n"}int main() {"{"}
        {"\n"}
        {"    "}FILE *file = fopen("non_existent_file.txt", "r");{"\n"}
        {"    "}if (file == NULL) {"{"}
        {"\n"}
        {"        "}perror("កំហុសក្នុងការបើកឯកសារ");{"  "}// បង្ហាញសារកំហុស
        {"\n"}
        {"        "}return 1;{"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"    "}fclose(file);{"\n"}
        {"    "}return 0;{"\n"}
        {"}"}
        {"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output: {"\n"}កំហុសក្នុងការបើកឯកសារ: មិនមានឯកសារទេ{"\n"}
    </pre>
  </div>
  {/* Using assert() for Debugging */}
  <div id="using-assert-for-debugging" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      13.2. ប្រើ assert() សម្រាប់ការកែចំ
    </h3>
    <p className="mt-2">
      មុខងារ `assert()` ជាឧបករណ៍សម្រាប់ត្រួតពិនិត្យលក្ខខណ្ឌមួយ។
      ប្រសិនបើលក្ខខណ្ឌមិនត្រឹមត្រូវ ប្រព័ន្ធនឹងបញ្ចប់ការប្រតិបត្ដិ
      ដោយផ្តល់ព័ត៌មានអំពីទីតាំងកំហុសដែលបានកើតឡើង។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}#include &lt;stdio.h&gt;{"\n"}#include &lt;assert.h&gt;{"\n"}
        {"\n"}int main() {"{"}
        {"\n"}
        {"    "}int x = 5;{"\n"}
        {"    "}assert(x &gt; 0);{"  "}// នេះនឹងជោគជ័យ{"\n"}
        {"    "}assert(x &lt; 0);{"  "}// នេះនឹងបរាជ័យ{"\n"}
        {"    "}return 0;{"\n"}
        {"}"}
        {"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output: {"\n"}ការបញ្ចេញអនុញ្ញាតបានបរាជ័យ: x &lt; 0, ឯកសារអ្នកឧទាហរណ៍.c,
      បន្ទាត់ 6, មុខងារ main.{"\n"}
    </pre>
  </div>
  {/* Handling Runtime Errors */}
  <div id="handling-runtime-errors" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      13.3. ការដោះសោកំហុសនៅពេលប្រតិបត្ដិ
    </h3>
    <p className="mt-2">
      កំហុស Runtime ក្នុងកម្មវិធី C អាចដោះសោបានតាមបច្ចេកទេសដូចជា ការត្រួតពិនិត្យ
      pointer មិនមានតម្លៃ, ការបញ្ជាក់វាលបញ្ចូល
      និងការប្រើប្រាស់លេខកូដកំហុសដែលត្រឹមត្រូវសម្រាប់មុខងារផ្សេងៗ។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}#include &lt;stdio.h&gt;{"\n"}
        {"\n"}int main() {"{"}
        {"\n"}
        {"    "}int *ptr = NULL;{"\n"}
        {"    "}if (ptr == NULL) {"{"}
        {"\n"}
        {"        "}printf("Pointer មិនមានតម្លៃ, មិនអាចបញ្ជូលបាន\n");{"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"    "}return 0;{"\n"}
        {"}"}
        {"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output: {"\n"}Pointer មិនមានតម្លៃ, មិនអាចបញ្ជូលបាន{"\n"}
    </pre>
  </div>
  {/* Debugging with GDB */}
  <div id="debugging-with-gdb" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      13.4. ការកែចំជាមួយ GDB
    </h3>
    <p className="mt-2">
      GDB (GNU Debugger) គឺជាឧបករណ៍ដ៏មានអំណាចសម្រាប់ការកែចំកម្មវិធី C។
      វាអនុញ្ញាតឱ្យអ្នកអនុវត្តកម្មវិធីរបស់អ្នកជាការប្រតិបត្ដិทีៗ កំណត់
      breakpoints ពិនិត្យតម្លៃអថេរ និងតាមដានកំហុស។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}$ gcc -g example.c -o example{"   "}//
        បង្កើតការបញ្ចូលជាមួយសញ្ញារូបសំណេីបបញ្ហា{"\n"}$ gdb ./example
        {"                "}// ចាប់ផ្តើម GDB{"\n"}(gdb) break main
        {"                "}// កំណត់ breakpoint នៅក្នុងមុខងារ main{"\n"}(gdb)
        run{"                       "}// ប្រតិបត្ដិកម្មវិធី{"\n"}(gdb) print x
        {"                   "}// ពិនិត្យតម្លៃនៃ x{"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Explanation: {"\n"}GDB អនុញ្ញាតឱ្យអ្នកធ្វើការកែចំកម្មវិធីបានយ៉ាង
      interactive និងពិនិត្យប្រភេទរបស់វា។{"\n"}
    </pre>
  </div>
  {/* Exception Handling Techniques */}
  <div id="exception-handling-techniques" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      13.5. បច្ចេកទេសការដោះសោបញ្ហាអាក្រក់
    </h3>
    <p className="mt-2">
      បញ្ហាអាក្រក់នៅក្នុង C មិនមានការគាំទ្រដោយតែមួយសម្រាប់ការដោះសោបញ្ហាបានទេ។
      ទោះជាយ៉ាងណាក៏ដោយ អ្នកអាចប្រើប្រាស់បច្ចេកទេសដូចជា `setjmp()` និង
      `longjmp()` ដើម្បីធ្វើការទំនាក់ទំនងដូចជា exception handling នៅក្នុង C ។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}#include &lt;stdio.h&gt;{"\n"}#include &lt;setjmp.h&gt;{"\n"}
        {"\n"}jmp_buf env;{"\n"}
        {"\n"}void testFunction() {"{"}
        {"\n"}
        {"    "}longjmp(env, 1);{"  "}// ការត្រឡប់មកវិញទៅកាន់ setjmp{"\n"}
        {"}"}
        {"\n"}
        {"\n"}int main() {"{"}
        {"\n"}
        {"    "}if (setjmp(env) != 0) {"{"}
        {"\n"}
        {"        "}printf("មានកំហុសកើតឡើង!\n");{"\n"}
        {"    "}
        {"}"} else {"{"}
        {"\n"}
        {"        "}testFunction();{"  "}// នេះនឹងបង្ហាញ longjmp{"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"    "}return 0;{"\n"}
        {"}"}
        {"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output: {"\n"}មានកំហុសកើតឡើង!{"\n"}
    </pre>
  </div>
</div>

<div id="advanced-c-concepts" className="py-12 px-6 overflow-y-auto">
      <h2 className="text-3xl font-semibold text-blue-600">14. គំនិតខុសៗទៅក្នុង C</h2>
      <p className="mt-4 text-lg">
        ក្នុងផ្នែកនេះ យើងនឹងពិភាក្សាអំពីប្រធានបទខុសៗទៀតក្នុងការកម្មវិធី C ដែលសំខាន់សម្រាប់ការបង្កើតកម្មវិធីដែលមានភាពស្មុគស្មាញ និងមានប្រសិទ្ធភាព។ គំនិតទាំងនេះនឹងពង្រឹងការយល់ដឹងមូលដ្ឋានរបស់អ្នក និងជួយដោះសោបញ្ហាស្មុគស្មាញ និងធ្វើឲ្យប្រសើរឡើងនូវក្រុមការងាររបស់អ្នក។
      </p>

      <div id="multithreading-in-c" className="mt-8">
        <h3 className="text-2xl font-semibold text-blue-600">14.1. Multithreading ក្នុង C</h3>
        <p className="mt-2">
          Multithreading អនុញ្ញាតឱ្យមានការអនុវត្តន៍threads ច្រើន (គ្រឿងប្រតិបត្តិតូចៗនៃដំណើរការមួយ) ក្នុងពេលតែមួយ ដែលធ្វើអោយកម្មវិធីមានប្រសិទ្ធភាពកាន់តែខ្ពស់ក្នុងករណីដែលត្រូវការអនុវត្តន៍ពេលតែមួយ ដូចជា កម្មវិធីម៉ាស៊ីនមេ ឬកម្មវិធីដែលត្រូវការអនុវត្តន៍ជាច្រើន។
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
          <code>
            {`#include <stdio.h>
#include <pthread.h>

void* printMessage(void* ptr) {
    printf("សួស្តីពីthread!\\n");
    return NULL;
}

int main() {
    pthread_t thread1;
    pthread_create(&thread1, NULL, printMessage, NULL);
    pthread_join(thread1, NULL);
    return 0;
}`}
          </code>
        </pre>
        <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
          Output:
          <br />
          សួស្តីពីthread!
        </pre>
      </div>

      <div id="sockets-and-networking-in-c" className="mt-8">
        <h3 className="text-2xl font-semibold text-blue-600">14.2. សោនិងបណ្តាញក្នុង C</h3>
        <p className="mt-2">
          Sockets ផ្តល់នូវវិធីសាស្ត្រដើម្បីកម្មវិធីធ្វើការទំនាក់ទំនងតាមបណ្តាញ។ ក្នុង C ប្រើបណ្ណាល័យ &lt;sys/socket.h&gt; ដើម្បីបង្កើតសោនិងធ្វើការទំនាក់ទំនងទាំងពីរសម្រាប់គ្រឿងម៉ាស៊ីនមេនិងអតិថិជន។ វាជាមុខងារសំខាន់សម្រាប់បង្កើតកម្មវិធីដែលត្រូវការបញ្ចូនទិន្នន័យ ដូចជា ប្រព័ន្ធប្រតិបត្តិការទំព័របណ្ដាញ ឬហ្គេមអនឡាញ។
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
          <code>
            {`#include <stdio.h>
#include <sys/socket.h>
#include <arpa/inet.h>

int main() {
    int sockfd = socket(AF_INET, SOCK_STREAM, 0);
    struct sockaddr_in server;
    server.sin_family = AF_INET;
    server.sin_port = htons(8080);
    server.sin_addr.s_addr = inet_addr("127.0.0.1");

    connect(sockfd, (struct sockaddr *)&server, sizeof(server));
    // បញ្ជូន និងទទួលទិន្នន័យ

    return 0;
}`}
          </code>
        </pre>
        <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
          Explanation:
          <br />
          នេះបង្កើតគ klient TCP មួយដែលភ្ជាប់ទៅម៉ាស៊ីនមេនៅលើ localhost នៅពេល 8080។
        </pre>
      </div>

      <div id="c-and-object-oriented-programming" className="mt-8">
        <h3 className="text-2xl font-semibold text-blue-600">14.3. C និងការកម្មវិធីមូលដ្ឋានវត្ថុ-oriented</h3>
        <p className="mt-2">
          C មិនមែនជាភាសាកម្មវិធីមូលដ្ឋានវត្ថុទេ ប៉ុន្តែគម្រោងវត្ថុ-oriented ដូចជា encapsulation, inheritance និង polymorphism អាចត្រូវបានអនុវត្តន៍តាមរយៈស៊ិចថួរ (structures), function pointers និងបច្ចេកទេសផ្សេងៗ។ នេះអនុញ្ញាតឱ្យអ្នកសម្រួលទិន្នន័យក្នុងរបៀបដូចកម្មវិធីមូលដ្ឋានវត្ថុ។
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
          <code>
            {`#include <stdio.h>

struct Car {
    char model[50];
    int year;
    void (*displayInfo)(struct Car*);  // Function pointer
};

void displayCarInfo(struct Car* car) {
    printf("ម៉ូដែល: %s\\nឆ្នាំ: %d\\n", car->model, car->year);
}

int main() {
    struct Car myCar = {"Toyota", 2020, displayCarInfo};
    myCar.displayInfo(&myCar);  // ការហៅវិធី
    return 0;}`}
          </code>
        </pre>
        <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
          Output:
          <br />
          ម៉ូដែល: Toyota
          <br />
          ឆ្នាំ: 2020
        </pre>
      </div>

      <div id="advanced-data-structures" className="mt-8">
        <h3 className="text-2xl font-semibold text-blue-600">14.4. រចនាសម្ព័ន្ធទិន្នន័យខ្ពស់ (ដូចជា ដើមឈើ, សៀវភៅ)</h3>
        <p className="mt-2">
          រចនាសម្ព័ន្ធទិន្នន័យខ្ពស់ដូចជា ដើមឈើ និង សៀវភៅមានសារៈសំខាន់សម្រាប់ការកំណត់ទិន្នន័យស្មុគស្មាញក្នុង C។ រចនាសម្ព័ន្ធទាំងនេះអនុញ្ញាតឱ្យមានការកែប្រែទិន្នន័យយ៉ាងមានប្រសិទ្ធភាព និងដោះសោបញ្ហាក្នុងកម្មវិធីដូចជា ឌីតាបេស, កម្មវិធីបកប្រែ និង អាល់ហ្គូរិធម៍ AI។
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
          <code>
            {`#include <stdio.h>

struct Node {
    int data;
    struct Node* left;
    struct Node* right;
};

void inOrderTraversal(struct Node* root) {
    if (root != NULL) {
        inOrderTraversal(root->left);
        printf("%d ", root->data);
        inOrderTraversal(root->right);
    }
}

int main() {
    struct Node root = {10, NULL, NULL};
    struct Node leftChild = {5, NULL, NULL};
    struct Node rightChild = {15, NULL, NULL};

    root.left = &leftChild;
    root.right = &rightChild;

    inOrderTraversal(&root);  // Output: 5 10 15
    return 0;}`}
          </code>
        </pre>
        <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
          Output:
          <br />
          5 10 15
        </pre>
      </div>

      <div id="compiler-optimization-techniques" className="mt-8">
        <h3 className="text-2xl font-semibold text-blue-600">14.5. បច្ចេកទេសប្រសិទ្ធភាពក្រុមបកប្រែ</h3>
        <p className="mt-2">
          បច្ចេកទេសប្រសិទ្ធភាពក្រុមបកប្រែមកនឹងត្រូវបានប្រើដើម្បីធ្វើឲ្យកម្មវិធី C មានប្រសិទ្ធភាពខ្ពស់។ បច្ចេកទេសទាំងនេះអាចបង្កើតឲ្យមានការកំណត់ទាំងការចំណាយពេលវេលា ការប្រើប្រាស់លុបចោលកូដដែលមិនចាំបាច់ ការកំណត់អនុភាពនៅក្នុងរយៈពេល និងកំណត់ការប្រើប្រាស់មេម៉ូរី។
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
          <code>
            {`$ gcc -O2 program.c -o program  // បកប្រែជាមួយកម្រិតប្រសិទ្ធភាព 2`}
          </code>
        </pre>
        <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
          Explanation:
          <br />
          ផ្ទាំង `-O2` អនុញ្ញាតឱ្យមានការបង្កើតប្រសិទ្ធភាពដែលធ្វើឲ្យប្រសើរឡើងដោយគ្មានការកំណត់ពេលវេលាការបកប្រែជាខ្លាំង។
        </pre>
      </div>
    </div>

    <div id="c-standard-library" className="py-12 px-6 overflow-y-auto">
  <h2 className="text-3xl font-semibold text-blue-600">
    15. បណ្ណាល័យស្តង់ដារ C
  </h2>
  <p className="mt-4 text-lg">
    ក្នុងផ្នែកនេះ យើងនឹងពិភាក្សាអំពីបណ្ណាល័យស្តង់ដារបស់ភាសា C
    ដែលផ្តល់អំពីមុខងារនិងសមត្ថភាពដែលអាចជួយសម្រួលការអភិវឌ្ឍកម្មវិធីរបស់អ្នក។
    វាជារបៀបដ៏សំខាន់ក្នុងការបង្កើតកម្មវិធីដែលមានប្រសិទ្ធភាព
    និងគាំទ្រដល់ការអភិវឌ្ឍកម្មវិធីនៅក្នុងបរិស្ថាន C។
  </p>
  <div id="standard-input-output" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      15.1. ការបញ្ចូល/ចេញស្តង់ដារ
    </h3>
    <p className="mt-2">
      បណ្ណាល័យ C ផ្តល់នូវមុខងារសំខាន់ៗសម្រាប់ការបញ្ចូល និងចេញទិន្នន័យ៖
      `printf()` សម្រាប់បង្ហាញការចេញ និង `scanf()`
      សម្រាប់ទទួលការបញ្ចូលពីអ្នកប្រើ។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}#include &lt;stdio.h&gt;{"\n"}
        {"\n"}int main() {"{"}
        {"\n"}
        {"    "}int number;{"\n"}
        {"    "}printf("បញ្ចូលលេខ: ");{"\n"}
        {"    "}scanf("%d", &amp;number);{"\n"}
        {"    "}printf("លេខដែលបានបញ្ចូលគឺ: %d\n", number);{"\n"}
        {"    "}return 0;{"\n"}
        {"}"}
        {"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output: {"\n"}បញ្ចូលលេខ: 5{"\n"}លេខដែលបានបញ្ចូលគឺ: 5{"\n"}
    </pre>
  </div>
  {/* String Handling Functions */}
  <div id="string-handling-functions" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      15.2. មុខងារការគ្រប់គ្រងស្ថិតិ
    </h3>
    <p className="mt-2">
      បណ្ណាល័យ C មានមុខងារច្រើនសម្រាប់ការគ្រប់គ្រងស្ថិតិដូចជា `strlen()`,
      `strcpy()`, `strcat()`, និង `strcmp()`។
      មុខងារទាំងនេះអាចធ្វើអោយអ្នកគ្រប់គ្រងអត្ថបទបានល្អប្រសើរឡើង។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}#include &lt;stdio.h&gt;{"\n"}#include &lt;string.h&gt;{"\n"}
        {"\n"}int main() {"{"}
        {"\n"}
        {"    "}char str1[] = "សួស្តី";{"\n"}
        {"    "}char str2[20];{"\n"}
        {"    "}
        {"\n"}
        {"    "}strcpy(str2, str1);{"\n"}
        {"    "}printf("str2: %s\n", str2);{"\n"}
        {"    "}printf("ប្រវែងរបស់ str1: %zu\n", strlen(str1));{"\n"}
        {"    "}
        {"\n"}
        {"    "}return 0;{"\n"}
        {"}"}
        {"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output: {"\n"}str2: សួស្តី{"\n"}ប្រវែងរបស់ str1: 6{"\n"}
    </pre>
  </div>
  {/* Mathematical Functions */}
  <div id="mathematical-functions" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      15.3. មុខងារធ្វើគណនាឧត្តម
    </h3>
    <p className="mt-2">
      បណ្ណាល័យ C ផ្តល់នូវមុខងារដើម្បីអនុវត្តន៍ការគណនាឧត្តមដូចជា `sqrt()`
      សម្រាប់ការគណនាផលដំណាក់ជាកំណត់ និង `pow()` សម្រាប់ការលើកកម្ពស់។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}#include &lt;stdio.h&gt;{"\n"}#include &lt;math.h&gt;{"\n"}
        {"\n"}int main() {"{"}
        {"\n"}
        {"    "}double number = 16.0;{"\n"}
        {"    "}printf("ការគណនាផលដំណាក់របស់ %f គឺ: %f\n", number, sqrt(number));
        {"\n"}
        {"    "}printf("16 លើកកម្ពស់ 2 គឺ: %f\n", pow(16, 2));{"\n"}
        {"    "}return 0;{"\n"}
        {"}"}
        {"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output: {"\n"}ការគណនាផលដំណាក់របស់ 16.000000 គឺ: 4.000000{"\n"}16 លើកកម្ពស់
      2 គឺ: 256.000000{"\n"}
    </pre>
  </div>
  {/* Memory Management Functions */}
  <div id="memory-management-functions" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      15.4. មុខងារគ្រប់គ្រងមេម៉ូរី
    </h3>
    <p className="mt-2">
      ការគ្រប់គ្រងមេម៉ូរីក្នុង C
      គឺមានសារៈសំខាន់សម្រាប់ការផ្ដល់ដល់កម្មវិធីការចំណាយមេម៉ូរីដែលមានប្រសិទ្ធភាព។
      `malloc()`, `free()`, និង `realloc()`
      ជាមុខងារសំខាន់សម្រាប់ការប្រមូលទិន្នន័យនៅលើមេម៉ូរី។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}#include &lt;stdio.h&gt;{"\n"}#include &lt;stdlib.h&gt;{"\n"}
        {"\n"}int main() {"{"}
        {"\n"}
        {"    "}int* ptr = (int*)malloc(sizeof(int));{"\n"}
        {"    "}if (ptr == NULL) {"{"}
        {"\n"}
        {"        "}printf("មេម៉ូរីមិនគ្រប់គ្រាន់\n");{"\n"}
        {"        "}return 1;{"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"    "}*ptr = 42;{"\n"}
        {"    "}printf("តម្លៃក្នុង ptr: %d\n", *ptr);{"\n"}
        {"    "}free(ptr);{"  "}// បញ្ចប់ការប្រើប្រាស់មេម៉ូរី{"\n"}
        {"    "}return 0;{"\n"}
        {"}"}
        {"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output: {"\n"}តម្លៃក្នុង ptr: 42{"\n"}
    </pre>
  </div>
  {/* Date and Time Functions */}
  <div id="date-and-time-functions" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      15.5. មុខងារពេលវេលានិងថ្ងៃ
    </h3>
    <p className="mt-2">
      C ផ្តល់នូវមុខងារច្រើនសម្រាប់ការកំណត់ និងទទួលថ្ងៃ និងពេលវេលាដូចជា `time()`,
      `localtime()`, និង `strftime()`។ មុខងារទាំងនេះអាចធ្វើអោយអ្នកគ្រប់គ្រងថ្ងៃ
      និងពេលវេលានៅក្នុងកម្មវិធីបានល្អប្រសើរ។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}#include &lt;stdio.h&gt;{"\n"}#include &lt;time.h&gt;{"\n"}
        {"\n"}int main() {"{"}
        {"\n"}
        {"    "}time_t t;{"\n"}
        {"    "}time(&amp;t);{"\n"}
        {"    "}struct tm *tm_info = localtime(&amp;t);{"\n"}
        {"    "}printf("ថ្ងៃបច្ចុប្បន្ន: %s\n", asctime(tm_info));{"\n"}
        {"    "}return 0;{"\n"}
        {"}"}
        {"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output: {"\n"}ថ្ងៃបច្ចុប្បន្ន: Mon Jan 15 10:56:31 2025{"\n"}
    </pre>
  </div>
  {/* Character Handling Functions */}
  <div id="character-handling-functions" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      15.6. មុខងារគ្រប់គ្រងតួអក្សរ
    </h3>
    <p className="mt-2">
      C ផ្តល់នូវមុខងារគ្រប់គ្រងតួអក្សរដូចជា `isalpha()`, `isdigit()`, និង
      `tolower()` ដែលអាចត្រូវបានប្រើសម្រាប់ការត្រួតពិនិត្យ
      និងផ្លាស់ប្ដូរតួអក្សរ។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto overflow-x-auto">
      <code>
        {"\n"}#include &lt;stdio.h&gt;{"\n"}#include &lt;ctype.h&gt;{"\n"}
        {"\n"}int main() {"{"}
        {"\n"}
        {"    "}char ch = 'A';{"\n"}
        {"    "}if (isalpha(ch)) {"{"}
        {"\n"}
        {"        "}printf("%c គឺជាតួអក្សរ\n", ch);{"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"    "}printf("%c នៅក្នុងតួអក្សរតូចគឺ: %c\n", ch, tolower(ch));{"\n"}
        {"    "}return 0;{"\n"}
        {"}"}
        {"\n"}
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output: {"\n"}A គឺជាតួអក្សរ{"\n"}A នៅក្នុងតួអក្សរតូចគឺ: a{"\n"}
    </pre>
  </div>
</div>

      </div>
        
  </div>
  


    </>
  );
}

export default C_programming;
