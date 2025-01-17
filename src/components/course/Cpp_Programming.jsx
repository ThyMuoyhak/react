import { useState } from 'react';

const Cpp_Programming = () => {
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
  <ul>
    <li>
      <a href="#basics" className="hover:text-red-500">
        1. Basics of C++
      </a>
      <ul className="ml-4 space-y-2">
        <li>
          <a href="#introduction" className="hover:text-red-500">
            1.1. Introduction to C++
          </a>
        </li>
        <li>
          <a href="#setup" className="hover:text-red-500">
            1.2. Setting Up the Environment (IDE or Terminal)
          </a>
        </li>
        <li>
          <a href="#syntax" className="hover:text-red-500">
            1.3. Syntax, Comments, and the Structure of a C++ Program
          </a>
        </li>
        <li>
          <a href="#input-output" className="hover:text-red-500">
            1.4. Input and Output (cin, cout)
          </a>
        </li>
        <li>
          <a href="#data-types" className="hover:text-red-500">
            1.5. Data Types and Variables
          </a>
        </li>
        <li>
          <a href="#constants" className="hover:text-red-500">
            1.6. Constants (const and constexpr)
          </a>
        </li>
        <li>
          <a href="#operators" className="hover:text-red-500">
            1.7. Operators (Arithmetic, Relational, Logical, Bitwise, etc.)
          </a>
        </li>
        <li>
          <a href="#typecasting" className="hover:text-red-500">
            1.8. Typecasting
          </a>
        </li>
      </ul>
    </li>
  </ul>
  <li>
    <a href="#control-flow" className="hover:text-red-500">
      2. Control Flow
    </a>
    <ul className="ml-4 space-y-2">
      <li>
        <a href="#conditional-statements" className="hover:text-red-500">
          2.1. Conditional Statements (if, else, switch)
        </a>
      </li>
      <li>
        <a href="#loops" className="hover:text-red-500">
          2.2. Loops (for, while, do-while)
        </a>
      </li>
      <li>
        <a href="#break-continue" className="hover:text-red-500">
          2.3. Break and Continue Statements
        </a>
      </li>
      <li>
        <a href="#goto" className="hover:text-red-500">
          2.4. Goto (Use with Caution)
        </a>
      </li>
    </ul>
  </li>
  <li>
    <a href="#functions" className="hover:text-red-500">
      3. Functions
    </a>
    <ul className="ml-4 space-y-2">
      <li>
        <a
          href="#function-definition-declaration"
          className="hover:text-red-500"
        >
          3.1. Function Definition and Declaration
        </a>
      </li>
      <li>
        <a href="#return-types-parameters" className="hover:text-red-500">
          3.2. Return Types and Parameters
        </a>
      </li>
      <li>
        <a href="#default-arguments" className="hover:text-red-500">
          3.3. Default Arguments
        </a>
      </li>
      <li>
        <a href="#inline-functions" className="hover:text-red-500">
          3.4. Inline Functions
        </a>
      </li>
      <li>
        <a href="#function-overloading" className="hover:text-red-500">
          3.5. Function Overloading
        </a>
      </li>
      <li>
        <a href="#recursion" className="hover:text-red-500">
          3.6. Recursion
        </a>
      </li>
    </ul>
  </li>
  <li>
    <a href="#arrays-and-strings" className="hover:text-red-500">
      4. Arrays and Strings
    </a>
    <ul className="ml-4 space-y-2">
      <li>
        <a href="#single-dimensional-arrays" className="hover:text-red-500">
          4.1. Single-dimensional arrays
        </a>
      </li>
      <li>
        <a href="#multi-dimensional-arrays" className="hover:text-red-500">
          4.2. Multi-dimensional arrays
        </a>
      </li>
      <li>
        <a href="#strings-and-character-arrays" className="hover:text-red-500">
          4.3. Strings and character arrays
        </a>
      </li>
      <li>
        <a href="#string-manipulation-functions" className="hover:text-red-500">
          4.4. String manipulation functions (from &lt;cstring&gt;)
        </a>
      </li>
    </ul>
  </li>
  <li>
    <a href="#pointers" className="hover:text-red-500">
      5. Pointers
    </a>
    <ul className="ml-4 space-y-2">
      <li>
        <a href="#basics-of-pointers" className="hover:text-red-500">
          5.1. Basics of Pointers
        </a>
      </li>
      <li>
        <a href="#pointer-arithmetic" className="hover:text-red-500">
          5.2. Pointer Arithmetic
        </a>
      </li>
      <li>
        <a href="#pointers-and-arrays" className="hover:text-red-500">
          5.3. Pointers and Arrays
        </a>
      </li>
      <li>
        <a href="#void-pointers" className="hover:text-red-500">
          5.4. Void Pointers
        </a>
      </li>
      <li>
        <a href="#pointers-to-functions" className="hover:text-red-500">
          5.5. Pointers to Functions
        </a>
      </li>
      <li>
        <a href="#dynamic-memory-allocation" className="hover:text-red-500">
          5.6. Dynamic Memory Allocation (new and delete)
        </a>
      </li>
    </ul>
  </li>
  <li>
    <a href="#object-oriented-programming" className="hover:text-red-500">
      6. Object-Oriented Programming (OOP)
    </a>
    <ul className="ml-4 space-y-2">
      <li>
        <a href="#classes-and-objects" className="hover:text-red-500">
          6.1. Classes and Objects
        </a>
      </li>
      <li>
        <a href="#access-modifiers" className="hover:text-red-500">
          6.2. Access Modifiers (private, protected, public)
        </a>
      </li>
      <li>
        <a href="#constructors-and-destructors" className="hover:text-red-500">
          6.3. Constructors and Destructors
        </a>
      </li>
      <li>
        <a href="#this-pointer" className="hover:text-red-500">
          6.4. this Pointer
        </a>
      </li>
      <li>
        <a href="#static-members-and-methods" className="hover:text-red-500">
          6.5. Static Members and Methods
        </a>
      </li>
      <li>
        <a href="#inheritance" className="hover:text-red-500">
          6.6. Inheritance (single, multiple, multilevel, hybrid)
        </a>
      </li>
      <li>
        <a href="#polymorphism" className="hover:text-red-500">
          6.7. Polymorphism (compile-time and runtime)
        </a>
      </li>
      <li>
        <a href="#function-overloading" className="hover:text-red-500">
          6.8. Function Overloading
        </a>
      </li>
      <li>
        <a href="#operator-overloading" className="hover:text-red-500">
          6.9. Operator Overloading
        </a>
      </li>
      <li>
        <a
          href="#virtual-functions-and-v-tables"
          className="hover:text-red-500"
        >
          6.10. Virtual Functions and v-Tables
        </a>
      </li>
      <li>
        <a
          href="#abstract-classes-and-pure-virtual-functions"
          className="hover:text-red-500"
        >
          6.11. Abstract Classes and Pure Virtual Functions
        </a>
      </li>
      <li>
        <a href="#encapsulation" className="hover:text-red-500">
          6.12. Encapsulation
        </a>
      </li>
      <li>
        <a href="#friend-functions-and-classes" className="hover:text-red-500">
          6.13. Friend Functions and Classes
        </a>
      </li>
    </ul>
  </li>
  <li>
    <a href="#file-handling" className="hover:text-red-500">
      7. File Handling
    </a>
    <ul className="ml-4 space-y-2">
      <li>
        <a href="#file-input-output" className="hover:text-red-500">
          7.1. File Input and Output (fstream, ifstream, ofstream)
        </a>
      </li>
      <li>
        <a href="#reading-and-writing-files" className="hover:text-red-500">
          7.2. Reading and Writing Files
        </a>
      </li>
      <li>
        <a href="#random-access-to-files" className="hover:text-red-500">
          7.3. Random Access to Files
        </a>
      </li>
      <li>
        <a href="#binary-files" className="hover:text-red-500">
          7.4. Binary Files
        </a>
      </li>
    </ul>
  </li>
  <li>
    <a href="#error-and-exception-handling" className="hover:text-red-500">
      8. Error and Exception Handling
    </a>
    <ul className="ml-4 space-y-2">
      <li>
        <a href="#basics-of-error-handling" className="hover:text-red-500">
          8.1. Basics of Error Handling
        </a>
      </li>
      <li>
        <a href="#try-catch-throw-keywords" className="hover:text-red-500">
          8.2. try, catch, throw Keywords
        </a>
      </li>
      <li>
        <a href="#standard-exceptions" className="hover:text-red-500">
          8.3. Standard Exceptions
        </a>
      </li>
      <li>
        <a href="#custom-exceptions" className="hover:text-red-500">
          8.4. Custom Exceptions
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
    <h2 className="text-xl font-bold mb-6">មេរៀនកម្មវិធី C++</h2>
    <ul className="space-y-4">
  <ul>
    <li>
      <a href="#basics" className="hover:text-red-500">
        1. Basics of C++
      </a>
      <ul className="ml-4 space-y-2">
        <li>
          <a href="#introduction" className="hover:text-red-500">
            1.1. Introduction to C++
          </a>
        </li>
        <li>
          <a href="#setup" className="hover:text-red-500">
            1.2. Setting Up the Environment (IDE or Terminal)
          </a>
        </li>
        <li>
          <a href="#syntax" className="hover:text-red-500">
            1.3. Syntax, Comments, and the Structure of a C++ Program
          </a>
        </li>
        <li>
          <a href="#input-output" className="hover:text-red-500">
            1.4. Input and Output (cin, cout)
          </a>
        </li>
        <li>
          <a href="#data-types" className="hover:text-red-500">
            1.5. Data Types and Variables
          </a>
        </li>
        <li>
          <a href="#constants" className="hover:text-red-500">
            1.6. Constants (const and constexpr)
          </a>
        </li>
        <li>
          <a href="#operators" className="hover:text-red-500">
            1.7. Operators (Arithmetic, Relational, Logical, Bitwise, etc.)
          </a>
        </li>
        <li>
          <a href="#typecasting" className="hover:text-red-500">
            1.8. Typecasting
          </a>
        </li>
      </ul>
    </li>
  </ul>
  <li>
    <a href="#control-flow" className="hover:text-red-500">
      2. Control Flow
    </a>
    <ul className="ml-4 space-y-2">
      <li>
        <a href="#conditional-statements" className="hover:text-red-500">
          2.1. Conditional Statements (if, else, switch)
        </a>
      </li>
      <li>
        <a href="#loops" className="hover:text-red-500">
          2.2. Loops (for, while, do-while)
        </a>
      </li>
      <li>
        <a href="#break-continue" className="hover:text-red-500">
          2.3. Break and Continue Statements
        </a>
      </li>
      <li>
        <a href="#goto" className="hover:text-red-500">
          2.4. Goto (Use with Caution)
        </a>
      </li>
    </ul>
  </li>
  <li>
    <a href="#functions" className="hover:text-red-500">
      3. Functions
    </a>
    <ul className="ml-4 space-y-2">
      <li>
        <a
          href="#function-definition-declaration"
          className="hover:text-red-500"
        >
          3.1. Function Definition and Declaration
        </a>
      </li>
      <li>
        <a href="#return-types-parameters" className="hover:text-red-500">
          3.2. Return Types and Parameters
        </a>
      </li>
      <li>
        <a href="#default-arguments" className="hover:text-red-500">
          3.3. Default Arguments
        </a>
      </li>
      <li>
        <a href="#inline-functions" className="hover:text-red-500">
          3.4. Inline Functions
        </a>
      </li>
      <li>
        <a href="#function-overloading" className="hover:text-red-500">
          3.5. Function Overloading
        </a>
      </li>
      <li>
        <a href="#recursion" className="hover:text-red-500">
          3.6. Recursion
        </a>
      </li>
    </ul>
  </li>
  <li>
    <a href="#arrays-and-strings" className="hover:text-red-500">
      4. Arrays and Strings
    </a>
    <ul className="ml-4 space-y-2">
      <li>
        <a href="#single-dimensional-arrays" className="hover:text-red-500">
          4.1. Single-dimensional arrays
        </a>
      </li>
      <li>
        <a href="#multi-dimensional-arrays" className="hover:text-red-500">
          4.2. Multi-dimensional arrays
        </a>
      </li>
      <li>
        <a href="#strings-and-character-arrays" className="hover:text-red-500">
          4.3. Strings and character arrays
        </a>
      </li>
      <li>
        <a href="#string-manipulation-functions" className="hover:text-red-500">
          4.4. String manipulation functions (from &lt;cstring&gt;)
        </a>
      </li>
    </ul>
  </li>
  <li>
    <a href="#pointers" className="hover:text-red-500">
      5. Pointers
    </a>
    <ul className="ml-4 space-y-2">
      <li>
        <a href="#basics-of-pointers" className="hover:text-red-500">
          5.1. Basics of Pointers
        </a>
      </li>
      <li>
        <a href="#pointer-arithmetic" className="hover:text-red-500">
          5.2. Pointer Arithmetic
        </a>
      </li>
      <li>
        <a href="#pointers-and-arrays" className="hover:text-red-500">
          5.3. Pointers and Arrays
        </a>
      </li>
      <li>
        <a href="#void-pointers" className="hover:text-red-500">
          5.4. Void Pointers
        </a>
      </li>
      <li>
        <a href="#pointers-to-functions" className="hover:text-red-500">
          5.5. Pointers to Functions
        </a>
      </li>
      <li>
        <a href="#dynamic-memory-allocation" className="hover:text-red-500">
          5.6. Dynamic Memory Allocation (new and delete)
        </a>
      </li>
    </ul>
  </li>
  <li>
    <a href="#object-oriented-programming" className="hover:text-red-500">
      6. Object-Oriented Programming (OOP)
    </a>
    <ul className="ml-4 space-y-2">
      <li>
        <a href="#classes-and-objects" className="hover:text-red-500">
          6.1. Classes and Objects
        </a>
      </li>
      <li>
        <a href="#access-modifiers" className="hover:text-red-500">
          6.2. Access Modifiers (private, protected, public)
        </a>
      </li>
      <li>
        <a href="#constructors-and-destructors" className="hover:text-red-500">
          6.3. Constructors and Destructors
        </a>
      </li>
      <li>
        <a href="#this-pointer" className="hover:text-red-500">
          6.4. this Pointer
        </a>
      </li>
      <li>
        <a href="#static-members-and-methods" className="hover:text-red-500">
          6.5. Static Members and Methods
        </a>
      </li>
      <li>
        <a href="#inheritance" className="hover:text-red-500">
          6.6. Inheritance (single, multiple, multilevel, hybrid)
        </a>
      </li>
      <li>
        <a href="#polymorphism" className="hover:text-red-500">
          6.7. Polymorphism (compile-time and runtime)
        </a>
      </li>
      <li>
        <a href="#function-overloading" className="hover:text-red-500">
          6.8. Function Overloading
        </a>
      </li>
      <li>
        <a href="#operator-overloading" className="hover:text-red-500">
          6.9. Operator Overloading
        </a>
      </li>
      <li>
        <a
          href="#virtual-functions-and-v-tables"
          className="hover:text-red-500"
        >
          6.10. Virtual Functions and v-Tables
        </a>
      </li>
      <li>
        <a
          href="#abstract-classes-and-pure-virtual-functions"
          className="hover:text-red-500"
        >
          6.11. Abstract Classes and Pure Virtual Functions
        </a>
      </li>
      <li>
        <a href="#encapsulation" className="hover:text-red-500">
          6.12. Encapsulation
        </a>
      </li>
      <li>
        <a href="#friend-functions-and-classes" className="hover:text-red-500">
          6.13. Friend Functions and Classes
        </a>
      </li>
    </ul>
  </li>
  <li>
    <a href="#file-handling" className="hover:text-red-500">
      7. File Handling
    </a>
    <ul className="ml-4 space-y-2">
      <li>
        <a href="#file-input-output" className="hover:text-red-500">
          7.1. File Input and Output (fstream, ifstream, ofstream)
        </a>
      </li>
      <li>
        <a href="#reading-and-writing-files" className="hover:text-red-500">
          7.2. Reading and Writing Files
        </a>
      </li>
      <li>
        <a href="#random-access-to-files" className="hover:text-red-500">
          7.3. Random Access to Files
        </a>
      </li>
      <li>
        <a href="#binary-files" className="hover:text-red-500">
          7.4. Binary Files
        </a>
      </li>
    </ul>
  </li>
  <li>
    <a href="#error-and-exception-handling" className="hover:text-red-500">
      8. Error and Exception Handling
    </a>
    <ul className="ml-4 space-y-2">
      <li>
        <a href="#basics-of-error-handling" className="hover:text-red-500">
          8.1. Basics of Error Handling
        </a>
      </li>
      <li>
        <a href="#try-catch-throw-keywords" className="hover:text-red-500">
          8.2. try, catch, throw Keywords
        </a>
      </li>
      <li>
        <a href="#standard-exceptions" className="hover:text-red-500">
          8.3. Standard Exceptions
        </a>
      </li>
      <li>
        <a href="#custom-exceptions" className="hover:text-red-500">
          8.4. Custom Exceptions
        </a>
      </li>
    </ul>
  </li>
  {/* Add similar nested lists for remaining modules */}
</ul>

  </div>

      <div className="py-12 px-6 w-full overflow-y-auto max-h-[1000px]">
      <div id="basics" className="py-12 px-6 overflow-y-auto">
  <h2 className="text-3xl font-semibold text-blue-600">1. Basics of C++</h2>
  <p className="mt-4 text-lg">
    នៅក្នុងផ្នែកនេះ យើងនឹងសិក្សាពីមូលដ្ឋាននៃភាសា C++។
  </p>
  {/* Introduction to C++ */}
  <div id="introduction" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      1.1. ការណែនាំអំពី C++
    </h3>
    <p className="mt-2">
      C++
      គឺជា​ភាសា​កម្មវិធី​ដែលមានលក្ខណៈអាចប្រើបានសំរាប់ការសរសេរកម្មវិធីដែលមានប្រសិទ្ធភាព
      និងមានកម្លាំង។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}
      <code>
        {"\n"}
        {"    "}#include{" "}
        <iostream>
          {"\n"}
          {"    "}
          {"\n"}
          {"    "}using namespace std;{"\n"}
          {"    "}
          {"\n"}
          {"    "}int main() {"{"}
          {"\n"}
          {"        "}cout &lt;&lt; "Hello, World!" &lt;&lt; endl;{"\n"}
          {"        "}return 0;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
        </iostream>
      </code>
      {"\n"}
      {"            "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}Output: Hello, World!{"\n"}
      {"    "}
    </pre>
  </div>
  {/* Setting Up the Environment (IDE or Terminal) */}
  <div id="setup" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      1.2. ការកំណត់បរិយាកាស (IDE ឬ Terminal)
    </h3>
    <p className="mt-2">
      ដើម្បីដំណើរការកម្មវិធី C++ នៅលើកុំព្យូទ័ររបស់អ្នក អ្នកត្រូវតែដំឡើង IDE ឬ
      Terminal ដូចជា Code::Blocks, Visual Studio Code, ឬ GCC Compiler។
    </p>
  </div>
  {/* Syntax, Comments, and the Structure of a C++ Program */}
  <div id="syntax" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      1.3. Syntax, មតិយោបល់ និងរចនាសម្ព័ន្ធនៃកម្មវិធី C++
    </h3>
    <p className="mt-2">
      នៅក្នុង C++ syntax មានចំណុចសំខាន់ៗជាច្រើន។
      មតិយោបល់គឺជាផ្នែកដែលត្រូវបានប្រើដើម្បីពន្យល់អំពីកូដ។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}
      <code>
        {"\n"}
        {"    "}#include{" "}
        <iostream>
          {"\n"}
          {"    "}
          {"\n"}
          {"    "}using namespace std;{"\n"}
          {"    "}
          {"\n"}
          {"    "}int main() {"{"}
          {"\n"}
          {"        "}// This is a single-line comment{"\n"}
          {"        "}cout &lt;&lt; "Hello, C++!" &lt;&lt; endl;{"  "}// Output
          message{"\n"}
          {"        "}return 0;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
        </iostream>
      </code>
      {"\n"}
      {"            "}
    </pre>
  </div>
  {/* Input and Output (cin, cout) */}
  <div id="input-output" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      1.4. ប្រតិបត្ដិការបញ្ចូល និងការបង្ហាញ (cin, cout)
    </h3>
    <p className="mt-2">
      ការបញ្ចូល (cin) និងការបង្ហាញ (cout)
      ត្រូវបានប្រើដើម្បីទទួលទិន្នន័យពីអ្នកប្រើ និងបង្ហាញផលបត្សត់ទៅកាន់អេក្រង់។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}
      <code>
        {"\n"}
        {"    "}#include{" "}
        <iostream>
          {"\n"}
          {"    "}
          {"\n"}
          {"    "}using namespace std;{"\n"}
          {"    "}
          {"\n"}
          {"    "}int main() {"{"}
          {"\n"}
          {"        "}int num;{"\n"}
          {"        "}cout &lt;&lt; "Enter a number: ";{"\n"}
          {"        "}cin &gt;&gt; num;{"\n"}
          {"        "}cout &lt;&lt; "You entered: " &lt;&lt; num &lt;&lt; endl;
          {"\n"}
          {"        "}return 0;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
        </iostream>
      </code>
      {"\n"}
      {"            "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}Output: {"\n"}
      {"    "}Enter a number: 5{"\n"}
      {"    "}You entered: 5{"\n"}
      {"    "}
    </pre>
  </div>
  {/* Data Types and Variables */}
  <div id="data-types" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      1.5. ប្រភេទទិន្នន័យ និងអថេរ
    </h3>
    <p className="mt-2">
      C++ មានប្រភេទទិន្នន័យមួយចំនួនដូចជា int, float, char, bool។
      អ្នកអាចប្រើប្រាស់អថេរដើម្បីផ្ទុកទិន្នន័យអ្វីៗមួយ។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}
      <code>
        {"\n"}
        {"    "}#include{" "}
        <iostream>
          {"\n"}
          {"    "}
          {"\n"}
          {"    "}using namespace std;{"\n"}
          {"    "}
          {"\n"}
          {"    "}int main() {"{"}
          {"\n"}
          {"        "}int x = 10;{"\n"}
          {"        "}float y = 5.5;{"\n"}
          {"        "}char z = 'A';{"\n"}
          {"        "}cout &lt;&lt; "x: " &lt;&lt; x &lt;&lt; ", y: " &lt;&lt; y
          &lt;&lt; ", z: " &lt;&lt; z &lt;&lt; endl;{"\n"}
          {"        "}return 0;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
        </iostream>
      </code>
      {"\n"}
      {"            "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}Output: {"\n"}
      {"    "}x: 10, y: 5.5, z: A{"\n"}
      {"    "}
    </pre>
  </div>
  {/* Constants (const and constexpr) */}
  <div id="constants" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      1.6. អថេរតូច (const និង constexpr)
    </h3>
    <p className="mt-2">
      const និង constexpr
      គឺជាគន្លងបញ្ចូលសម្រាប់កំណត់តម្លៃដែលមិនអាចផ្លាស់ប្តូរបានក្នុងកម្មវិធី C++។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}
      <code>
        {"\n"}
        {"    "}#include{" "}
        <iostream>
          {"\n"}
          {"    "}
          {"\n"}
          {"    "}using namespace std;{"\n"}
          {"    "}
          {"\n"}
          {"    "}int main() {"{"}
          {"\n"}
          {"        "}const int MAX = 100;{"\n"}
          {"        "}constexpr double PI = 3.14;{"\n"}
          {"        "}cout &lt;&lt; "MAX: " &lt;&lt; MAX &lt;&lt; ", PI: "
          &lt;&lt; PI &lt;&lt; endl;{"\n"}
          {"        "}return 0;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
        </iostream>
      </code>
      {"\n"}
      {"            "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}Output: {"\n"}
      {"    "}MAX: 100, PI: 3.14{"\n"}
      {"    "}
    </pre>
  </div>
  {/* Operators (Arithmetic, Relational, Logical, Bitwise, etc.) */}
  <div id="operators" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      1.7. អ-opération (ការគណនា, ការប្រៀបធៀប, ការបញ្ចូល, Bitwise, ល.)
    </h3>
    <p className="mt-2">
      C++ មានប្រភេទអ-opération បុគ្គលិករួមទាំងការគណនា, ការប្រៀបធៀប, ការបញ្ចូល
      និងការប្រើប្រាស់ Bitwise operators។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}
      <code>
        {"\n"}
        {"    "}#include{" "}
        <iostream>
          {"\n"}
          {"    "}
          {"\n"}
          {"    "}using namespace std;{"\n"}
          {"    "}
          {"\n"}
          {"    "}int main() {"{"}
          {"\n"}
          {"        "}int a = 10, b = 20;{"\n"}
          {"        "}cout &lt;&lt; "Sum: " &lt;&lt; a + b &lt;&lt; endl;{"  "}
          // Arithmetic operator{"\n"}
          {"        "}cout &lt;&lt; "Is a equal to b? " &lt;&lt; (a == b)
          &lt;&lt; endl;{"  "}// Relational operator{"\n"}
          {"        "}cout &lt;&lt; "Is a greater than b? " &lt;&lt; (a &gt; b)
          &lt;&lt; endl;{"  "}// Relational operator{"\n"}
          {"        "}return 0;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
        </iostream>
      </code>
      {"\n"}
      {"            "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}Output: {"\n"}
      {"    "}Sum: 30{"\n"}
      {"    "}Is a equal to b? 0{"\n"}
      {"    "}Is a greater than b? 0{"\n"}
      {"    "}
    </pre>
  </div>
  {/* Typecasting */}
  <div id="typecasting" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      1.8. ការផ្លាស់ប្តូរប្រភេទទិន្នន័យ
    </h3>
    <p className="mt-2">
      Typecasting ជាការប្រើប្រាស់ប្រភេទទិន្នន័យខុសគ្នា ដែលអាចប្រើនៅក្នុងការតប
      questions logical math function values.
    </p>
  </div>
</div>

<div id="control-flow" className="py-12 px-6 overflow-y-auto">
  <h2 className="text-3xl font-semibold text-blue-600">
    2. ការបញ្ជាក់ប្រតិបត្តិការ
  </h2>
  <p className="mt-4 text-lg">
    ផ្នែកនេះគ្របដណ្តប់ពីគន្លឹះសំខាន់ៗនៃការបញ្ជាក់ប្រតិបត្តិការ នៅក្នុង C++
    រួមមាន ប្រសិទ្ធិភាពលើបញ្ជាក់លក្ខខណ្ឌ, ការប្រើវប្បធម៌ស្របប្រភេទ, និងការប្រើ
    break/continue និង goto។
  </p>
  {/* Conditional Statements (if, else, switch) */}
  <div id="conditional-statements" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      2.1. ការបញ្ជាក់លក្ខខណ្ឌ (if, else, switch)
    </h3>
    <p className="mt-2">
      ការបញ្ជាក់លក្ខខណ្ឌអនុញ្ញាតឱ្យអ្នកគ្រប់គ្រងលំហូរប្រតិបត្តិការ
      ដោយផ្អែកលើលក្ខខណ្ឌ។ ការបញ្ជាក់សំខាន់ៗជាទូទៅមាន if, else និង switch។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}
      <code>
        {"\n"}
        {"    "}#include{" "}
        <iostream>
          {"\n"}
          {"    "}using namespace std;{"\n"}
          {"    "}
          {"\n"}
          {"    "}int main() {"{"}
          {"\n"}
          {"        "}int num = 10;{"\n"}
          {"        "}
          {"\n"}
          {"        "}// ប្រសិទ្ធិភាព if-else{"\n"}
          {"        "}if (num &gt; 0) {"{"}
          {"\n"}
          {"            "}cout &lt;&lt; "លេខវិជ្ជមាន" &lt;&lt; endl;{"\n"}
          {"        "}
          {"}"} else {"{"}
          {"\n"}
          {"            "}cout &lt;&lt; "លេខមិនវិជ្ជមាន" &lt;&lt; endl;{"\n"}
          {"        "}
          {"}"}
          {"\n"}
          {"    "}
          {"\n"}
          {"        "}// ប្រសិទ្ធិភាព switch{"\n"}
          {"        "}switch (num) {"{"}
          {"\n"}
          {"            "}case 10:{"\n"}
          {"                "}cout &lt;&lt; "លេខគឺ 10" &lt;&lt; endl;{"\n"}
          {"                "}break;{"\n"}
          {"            "}default:{"\n"}
          {"                "}cout &lt;&lt; "លេខមិនមែនជាលេខ 10" &lt;&lt; endl;
          {"\n"}
          {"        "}
          {"}"}
          {"\n"}
          {"    "}
          {"\n"}
          {"        "}return 0;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
        </iostream>
      </code>
      {"\n"}
      {"            "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}Output:{"\n"}
      {"    "}លេខវិជ្ជមាន{"\n"}
      {"    "}លេខគឺ 10{"\n"}
      {"    "}
    </pre>
  </div>
  {/* Loops (for, while, do-while) */}
  <div id="loops" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      2.2. វប្បធម៌ស្របប្រភេទ (for, while, do-while)
    </h3>
    <p className="mt-2">
      វប្បធម៌ស្របប្រភេទត្រូវបានប្រើដើម្បីអនុវត្តកម្មវិធីមួយម្តងៗ។
      ប្រភេទនៃវប្បធម៌ស្របប្រភេទមាន for, while និង do-while។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}
      <code>
        {"\n"}
        {"    "}#include{" "}
        <iostream>
          {"\n"}
          {"    "}using namespace std;{"\n"}
          {"    "}
          {"\n"}
          {"    "}int main() {"{"}
          {"\n"}
          {"        "}// វប្បធម៌ for{"\n"}
          {"        "}for (int i = 1; i &lt;= 5; i++) {"{"}
          {"\n"}
          {"            "}cout &lt;&lt; "វប្បធម៌ for: " &lt;&lt; i &lt;&lt;
          endl;{"\n"}
          {"        "}
          {"}"}
          {"\n"}
          {"    "}
          {"\n"}
          {"        "}// វប្បធម៌ while{"\n"}
          {"        "}int j = 1;{"\n"}
          {"        "}while (j &lt;= 5) {"{"}
          {"\n"}
          {"            "}cout &lt;&lt; "វប្បធម៌ while: " &lt;&lt; j &lt;&lt;
          endl;{"\n"}
          {"            "}j++;{"\n"}
          {"        "}
          {"}"}
          {"\n"}
          {"    "}
          {"\n"}
          {"        "}// វប្បធម៌ do-while{"\n"}
          {"        "}int k = 1;{"\n"}
          {"        "}do {"{"}
          {"\n"}
          {"            "}cout &lt;&lt; "វប្បធម៌ do-while: " &lt;&lt; k &lt;&lt;
          endl;{"\n"}
          {"            "}k++;{"\n"}
          {"        "}
          {"}"} while (k &lt;= 5);{"\n"}
          {"    "}
          {"\n"}
          {"        "}return 0;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
        </iostream>
      </code>
      {"\n"}
      {"            "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}Output:{"\n"}
      {"    "}វប្បធម៌ for: 1{"\n"}
      {"    "}វប្បធម៌ for: 2{"\n"}
      {"    "}វប្បធម៌ for: 3{"\n"}
      {"    "}វប្បធម៌ for: 4{"\n"}
      {"    "}វប្បធម៌ for: 5{"\n"}
      {"    "}វប្បធម៌ while: 1{"\n"}
      {"    "}វប្បធម៌ while: 2{"\n"}
      {"    "}វប្បធម៌ while: 3{"\n"}
      {"    "}វប្បធម៌ while: 4{"\n"}
      {"    "}វប្បធម៌ while: 5{"\n"}
      {"    "}វប្បធម៌ do-while: 1{"\n"}
      {"    "}វប្បធម៌ do-while: 2{"\n"}
      {"    "}វប្បធម៌ do-while: 3{"\n"}
      {"    "}វប្បធម៌ do-while: 4{"\n"}
      {"    "}វប្បធម៌ do-while: 5{"\n"}
      {"    "}
    </pre>
  </div>
  {/* Break and Continue Statements */}
  <div id="break-continue" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      2.3. ប្រសិទ្ធិភាព Break និង Continue
    </h3>
    <p className="mt-2">
      ប្រសិទ្ធិភាព break ចេញពីវប្បធម៌មួយមុនពេលវាអនុវត្តរហូត; ខណៈដែលប្រសិទ្ធិភាព
      continue ស្កីបការប្រតិបត្តិការបច្ចុប្បន្ននៃវប្បធម៌ ហើយទៅកាន់វប្បធម៌ក្រោយ។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}
      <code>
        {"\n"}
        {"    "}#include{" "}
        <iostream>
          {"\n"}
          {"    "}using namespace std;{"\n"}
          {"    "}
          {"\n"}
          {"    "}int main() {"{"}
          {"\n"}
          {"        "}for (int i = 1; i &lt;= 5; i++) {"{"}
          {"\n"}
          {"            "}if (i == 3) {"{"}
          {"\n"}
          {"                "}continue;{"  "}// ស្កីបការប្រតិបត្តិការពេល i គឺ 3
          {"\n"}
          {"            "}
          {"}"}
          {"\n"}
          {"            "}if (i == 4) {"{"}
          {"\n"}
          {"                "}break;{"  "}// ចាកចេញពីវប្បធម៌ពេល i គឺ 4{"\n"}
          {"            "}
          {"}"}
          {"\n"}
          {"            "}cout &lt;&lt; "លេខ: " &lt;&lt; i &lt;&lt; endl;{"\n"}
          {"        "}
          {"}"}
          {"\n"}
          {"    "}
          {"\n"}
          {"        "}return 0;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
        </iostream>
      </code>
      {"\n"}
      {"            "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}Output:{"\n"}
      {"    "}លេខ: 1{"\n"}
      {"    "}លេខ: 2{"\n"}
      {"    "}
    </pre>
  </div>
  {/* Goto (Use with Caution) */}
  <div id="goto" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      2.4. Goto (ប្រើដោយប្រុងប្រយ័ត្ន)
    </h3>
    <p className="mt-2">
      ប្រសិទ្ធិភាព goto
      អនុញ្ញាតឱ្យមានការចាកចេញទៅកន្លែងផ្សេងទៀតនៅក្នុងកូដដោយមិនមានលក្ខខណ្ឌ។
      វាគួរត្រូវបានប្រើដោយប្រុងប្រយ័ត្ន
      ពីព្រោះវាអាចនាំឲ្យមានកូដដែលរកសម្រាប់ការថែរក្សាយ៉ាងពិបាក។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}
      <code>
        {"\n"}
        {"    "}#include{" "}
        <iostream>
          {"\n"}
          {"    "}using namespace std;{"\n"}
          {"    "}
          {"\n"}
          {"    "}int main() {"{"}
          {"\n"}
          {"        "}int i = 1;{"\n"}
          {"    "}
          {"\n"}
          {"        "}loop_start:{"\n"}
          {"            "}if (i &gt; 5) {"{"}
          {"\n"}
          {"                "}goto loop_end;{"  "}// ចាកចេញទៅចុងបញ្ចប់នៃវប្បធម៌
          {"\n"}
          {"            "}
          {"}"}
          {"\n"}
          {"            "}cout &lt;&lt; "i: " &lt;&lt; i &lt;&lt; endl;{"\n"}
          {"            "}i++;{"\n"}
          {"            "}goto loop_start;{"  "}// ត្រឡប់ទៅកាន់ loop_start{"\n"}
          {"    "}
          {"\n"}
          {"        "}loop_end:{"\n"}
          {"            "}cout &lt;&lt; "វប្បធម៌បានបញ្ចប់" &lt;&lt; endl;{"\n"}
          {"        "}
          {"\n"}
          {"        "}return 0;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
        </iostream>
      </code>
      {"\n"}
      {"            "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}Output:{"\n"}
      {"    "}i: 1{"\n"}
      {"    "}i: 2{"\n"}
      {"    "}i: 3{"\n"}
      {"    "}i: 4{"\n"}
      {"    "}i: 5{"\n"}
      {"    "}វប្បធម៌បានបញ្ចប់{"\n"}
      {"    "}
    </pre>
  </div>
</div>



<div id="functions" className="py-12 px-6 overflow-y-auto">
  <h2 className="text-3xl font-semibold text-blue-600">3. មុខងារ</h2>
  <p className="mt-4 text-lg">
    ផ្នែកនេះគ្របដណ្តប់អំពីគោលបំណងសំខាន់ៗនៃមុខងារនៅក្នុង C++ រួមមានការបញ្ជាក់
    និងការប្រកាសមុខងារ ប្រភេទត្រឡប់ និងប៉ារ៉ាម៉ែត្រ និងច្រើនទៀត។
  </p>
  {/* Function Definition and Declaration */}
  <div id="function-definition-declaration" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      3.1. ការបញ្ជាក់ និងការប្រកាសមុខងារ
    </h3>
    <p className="mt-2">
      មុខងារគឺជាប្លុកកូដដែលបំពេញភារកិច្ចជាក់លាក់។
      មុខងារត្រូវបានកំណត់ដោយប្រើប្រភេទត្រឡប់ ឈ្មោះមុខងារ និងប៉ារ៉ាម៉ែត្រ។
      ការប្រកាសមុខងារផ្តល់សញ្ញាសម្រាប់មុខងារដល់កុំព្យូទ័រ។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}
      <code>
        {"\n"}
        {"    "}#include{" "}
        <iostream>
          {"\n"}
          {"    "}
          {"\n"}
          {"    "}using namespace std;{"\n"}
          {"    "}
          {"\n"}
          {"    "}// ការប្រកាសមុខងារ{"\n"}
          {"    "}void greet(); {"\n"}
          {"    "}
          {"\n"}
          {"    "}int main() {"{"}
          {"\n"}
          {"        "}// ការហៅមុខងារ{"\n"}
          {"        "}greet();{"\n"}
          {"        "}return 0;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
          {"\n"}
          {"    "}// ការបញ្ជាក់មុខងារ{"\n"}
          {"    "}void greet() {"{"}
          {"\n"}
          {"        "}cout &lt;&lt; "សួស្តី ពិភពលោក!" &lt;&lt; endl;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
        </iostream>
      </code>
      {"\n"}
      {"            "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}Output:{"\n"}
      {"    "}សួស្តី ពិភពលោក!{"\n"}
      {"    "}
    </pre>
  </div>
  {/* Return Types and Parameters */}
  <div id="return-types-parameters" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      3.2. ប្រភេទត្រឡប់ និងប៉ារ៉ាម៉ែត្រ
    </h3>
    <p className="mt-2">
      មុខងារអាចមានប្រភេទត្រឡប់ ហើយវាអាចទទួលប៉ារ៉ាម៉ែត្រ
      ដើម្បីអនុវត្តភារកិច្ចជាក់លាក់ជាមួយព័ត៌មានបញ្ចូលផ្សេងៗ។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}
      <code>
        {"\n"}
        {"    "}#include{" "}
        <iostream>
          {"\n"}
          {"    "}
          {"\n"}
          {"    "}using namespace std;{"\n"}
          {"    "}
          {"\n"}
          {"    "}// មុខងារជាមួយប្រភេទត្រឡប់ និងប៉ារ៉ាម៉ែត្រ{"\n"}
          {"    "}int add(int a, int b) {"{"}
          {"\n"}
          {"        "}return a + b;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
          {"\n"}
          {"    "}int main() {"{"}
          {"\n"}
          {"        "}int result = add(5, 3); // ការហៅមុខងារជាមួយប៉ារ៉ាម៉ែត្រ
          {"\n"}
          {"        "}cout &lt;&lt; "ផលបូក: " &lt;&lt; result &lt;&lt; endl;
          {"\n"}
          {"        "}return 0;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
        </iostream>
      </code>
      {"\n"}
      {"            "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}Output:{"\n"}
      {"    "}ផលបូក: 8{"\n"}
      {"    "}
    </pre>
  </div>
  {/* Default Arguments */}
  <div id="default-arguments" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      3.3. ប៉ារ៉ាម៉ែត្រដែលមានតម្លៃលំនាំដើម
    </h3>
    <p className="mt-2">
      អ្នកអាចផ្តល់តម្លៃលំនាំដើមសម្រាប់ប៉ារ៉ាម៉ែត្រមុខងារ។
      ប្រសិនបើមិនមានការផ្តល់ប៉ារ៉ាម៉ែត្រទេ តម្លៃលំនាំដើមនឹងត្រូវបានប្រើ។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}
      <code>
        {"\n"}
        {"    "}#include{" "}
        <iostream>
          {"\n"}
          {"    "}
          {"\n"}
          {"    "}using namespace std;{"\n"}
          {"    "}
          {"\n"}
          {"    "}// មុខងារជាមួយប៉ារ៉ាម៉ែត្រដែលមានតម្លៃលំនាំដើម{"\n"}
          {"    "}void greet(string name = "អ្នកប្រើ") {"{"}
          {"\n"}
          {"        "}cout &lt;&lt; "សួស្តី, " &lt;&lt; name &lt;&lt; "!"
          &lt;&lt; endl;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
          {"\n"}
          {"    "}int main() {"{"}
          {"\n"}
          {"        "}greet();{"        "}// ប្រើតម្លៃលំនាំដើម{"\n"}
          {"        "}greet("John");{"  "}// ផ្តល់ប៉ារ៉ាម៉ែត្រ{"\n"}
          {"        "}return 0;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
        </iostream>
      </code>
      {"\n"}
      {"            "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}Output:{"\n"}
      {"    "}សួស្តី, អ្នកប្រើ!{"\n"}
      {"    "}សួស្តី, John!{"\n"}
      {"    "}
    </pre>
  </div>
  {/* Inline Functions */}
  <div id="inline-functions" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      3.4. មុខងារជាមួយបញ្ជូល
    </h3>
    <p className="mt-2">
      មុខងារជាមួយបញ្ជូលគឺជាមុខងារដែលត្រូវបានកំណត់ដោយប្រើពាក្យគន្លង `inline`។
      វាត្រូវបានផ្តល់អនុសាសន៍សម្រាប់មុខងារតូចៗ
      ដើម្បីបង្កើនប្រសិទ្ធភាពដោយការបញ្ចៀសករណីប្រើការហៅមុខងារ។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}
      <code>
        {"\n"}
        {"    "}#include{" "}
        <iostream>
          {"\n"}
          {"    "}
          {"\n"}
          {"    "}using namespace std;{"\n"}
          {"    "}
          {"\n"}
          {"    "}// មុខងារជាមួយបញ្ជូល{"\n"}
          {"    "}inline int square(int x) {"{"}
          {"\n"}
          {"        "}return x * x;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
          {"\n"}
          {"    "}int main() {"{"}
          {"\n"}
          {"        "}int result = square(5);{"\n"}
          {"        "}cout &lt;&lt; "ការ៉េ: " &lt;&lt; result &lt;&lt; endl;
          {"\n"}
          {"        "}return 0;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
        </iostream>
      </code>
      {"\n"}
      {"            "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}Output:{"\n"}
      {"    "}ការ៉េ: 25{"\n"}
      {"    "}
    </pre>
  </div>
  {/* Function Overloading */}
  <div id="function-overloading" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      3.5. ការអាប់ដែកមុខងារ
    </h3>
    <p className="mt-2">
      ការអាប់ដែកមុខងារអនុញ្ញាតឱ្យអ្នកកំណត់មុខងារមួយចំនួនដែលមានឈ្មោះដូចគ្នា
      ប៉ុន្តែមានប៉ារ៉ាម៉ែត្រផ្សេងៗ។
      មុខងារទីតាំងនឹងត្រូវបានហៅអាស្រ័យលើអង្គភាពដែលត្រូវបានផ្តល់។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}
      <code>
        {"\n"}
        {"    "}#include{" "}
        <iostream>
          {"\n"}
          {"    "}
          {"\n"}
          {"    "}using namespace std;{"\n"}
          {"    "}
          {"\n"}
          {"    "}// ការអាប់ដែកមុខងារ{"\n"}
          {"    "}int add(int a, int b) {"{"}
          {"\n"}
          {"        "}return a + b;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
          {"\n"}
          {"    "}double add(double a, double b) {"{"}
          {"\n"}
          {"        "}return a + b;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
          {"\n"}
          {"    "}int main() {"{"}
          {"\n"}
          {"        "}int intResult = add(5, 3);{"\n"}
          {"        "}double doubleResult = add(5.5, 3.5);{"\n"}
          {"        "}
          {"\n"}
          {"        "}cout &lt;&lt; "ផលបូកបញ្ចូលចំនួនទ្រង់ទ្រាយគត់: " &lt;&lt;
          intResult &lt;&lt; endl;{"\n"}
          {"        "}cout &lt;&lt; "ផលបូកបញ្ចូលចំនួនទ្រង់ទ្រាយទាំងអស់: "
          &lt;&lt; doubleResult &lt;&lt; endl;{"\n"}
          {"        "}
          {"\n"}
          {"        "}return 0;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
        </iostream>
      </code>
      {"\n"}
      {"            "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}Output:{"\n"}
      {"    "}ផលបូកបញ្ចូលចំនួនទ្រង់ទ្រាយគត់: 8{"\n"}
      {"    "}ផលបូកបញ្ចូលចំនួនទ្រង់ទ្រាយទាំងអស់: 9{"\n"}
      {"    "}
    </pre>
  </div>
  {/* Recursion */}
  <div id="recursion" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      3.6. ការស្ដារឡើងវិញ
    </h3>
    <p className="mt-2">
      ការស្ដារឡើងវិញគឺជាវិធីសាស្ត្រដែលមុខងារហៅខ្លួនឯង។
      វាត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយសម្រាប់បញ្ហាដែលអាចបំបែកទៅជាបញ្ហាដូចគ្នា
      តាមរយៈការគណនាតម្លៃដូចជាផលចំនួនគ្រិះឬលេខ Fibonacci។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}
      <code>
        {"\n"}
        {"    "}#include{" "}
        <iostream>
          {"\n"}
          {"    "}
          {"\n"}
          {"    "}using namespace std;{"\n"}
          {"    "}
          {"\n"}
          {"    "}// មុខងារស្ដារឡើងវិញសម្រាប់គណនាផលចំនួនគ្រិះ{"\n"}
          {"    "}int factorial(int n) {"{"}
          {"\n"}
          {"        "}if (n &lt;= 1) {"{"}
          {"\n"}
          {"            "}return 1;{"\n"}
          {"        "}
          {"}"}
          {"\n"}
          {"        "}return n * factorial(n - 1);{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
          {"\n"}
          {"    "}int main() {"{"}
          {"\n"}
          {"        "}int result = factorial(5);{"\n"}
          {"        "}cout &lt;&lt; "ផ្ទះចំនួន 5: " &lt;&lt; result &lt;&lt;
          endl;{"\n"}
          {"        "}return 0;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
        </iostream>
      </code>
      {"\n"}
      {"            "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}Output:{"\n"}
      {"    "}ផ្ទះចំនួន 5: 120{"\n"}
      {"    "}
    </pre>
  </div>
</div>

<div id="arrays-and-strings" className="py-12 px-6 overflow-y-auto">
  <h2 className="text-3xl font-semibold text-blue-600">
    4. ប្រភេទអារ៉េ និងខ្សែអក្សរ
  </h2>
  <p className="mt-4 text-lg">
    ផ្នែកនេះគ្របដណ្តប់ពីអារ៉េ និងខ្សែអក្សរនៅក្នុង C++
    រួមមានអារ៉េមួយឈ្មោះដូចគ្នា, អារ៉េច្រើនមួយ និងការបន្លាយខ្សែអក្សរ
    ប្រើអារ៉េអក្សរ និងបណ្ណាល័យខ្សែអក្សរ C++។
  </p>
  {/* Single-dimensional Arrays */}
  <div id="single-dimensional-arrays" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">4.1. អារ៉េមួយឈ្មោះ</h3>
    <p className="mt-2">
      អារ៉េមួយឈ្មោះគឺជាការប្រមូលផលបញ្ចូលធាតុប្រភេទដូចគ្នា
      ដែលបានរក្សាទុកក្នុងទីតាំងស្មុគស្មាញក្នុងអង្គចងចាំ។
      វាត្រូវបានហៅថាជាបញ្ជីឬវ៉ិចទ័រ។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}
      <code>
        {"\n"}
        {"    "}#include{" "}
        <iostream>
          {"\n"}
          {"    "}using namespace std;{"\n"}
          {"    "}
          {"\n"}
          {"    "}int main() {"{"}
          {"\n"}
          {"        "}int arr[5] = {"{"}1, 2, 3, 4, 5{"}"};{"\n"}
          {"    "}
          {"\n"}
          {"        "}// ចូលដំណើរការធាតុ{"\n"}
          {"        "}for (int i = 0; i &lt; 5; i++) {"{"}
          {"\n"}
          {"            "}cout &lt;&lt; "ធាតុនៅចំណុច " &lt;&lt; i &lt;&lt; ": "
          &lt;&lt; arr[i] &lt;&lt; endl;{"\n"}
          {"        "}
          {"}"}
          {"\n"}
          {"    "}
          {"\n"}
          {"        "}return 0;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
        </iostream>
      </code>
      {"\n"}
      {"            "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}Output:{"\n"}
      {"    "}ធាតុនៅចំណុច 0: 1{"\n"}
      {"    "}ធាតុនៅចំណុច 1: 2{"\n"}
      {"    "}ធាតុនៅចំណុច 2: 3{"\n"}
      {"    "}ធាតុនៅចំណុច 3: 4{"\n"}
      {"    "}ធាតុនៅចំណុច 4: 5{"\n"}
      {"    "}
    </pre>
  </div>
  {/* Multi-dimensional Arrays */}
  <div id="multi-dimensional-arrays" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">4.2. អារ៉េច្រើនមួយ</h3>
    <p className="mt-2">
      អារ៉េច្រើនមួយគឺជាអារ៉េនៃអារ៉េ។
      វាអាចត្រូវបានប្រើសម្រាប់តំណាងឱ្យម៉ាទ្រីចឬតារាង។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}
      <code>
        {"\n"}
        {"    "}#include{" "}
        <iostream>
          {"\n"}
          {"    "}using namespace std;{"\n"}
          {"    "}
          {"\n"}
          {"    "}int main() {"{"}
          {"\n"}
          {"        "}int arr[2][3] = {"{"}
          {"{"}1, 2, 3{"}"}, {"{"}4, 5, 6{"}"}
          {"}"};{"\n"}
          {"    "}
          {"\n"}
          {"        "}// ចូលដំណើរការធាតុ{"\n"}
          {"        "}for (int i = 0; i &lt; 2; i++) {"{"}
          {"\n"}
          {"            "}for (int j = 0; j &lt; 3; j++) {"{"}
          {"\n"}
          {"                "}cout &lt;&lt; "ធាតុនៅ [" &lt;&lt; i &lt;&lt; "]["
          &lt;&lt; j &lt;&lt; "]: " &lt;&lt; arr[i][j] &lt;&lt; endl;{"\n"}
          {"            "}
          {"}"}
          {"\n"}
          {"        "}
          {"}"}
          {"\n"}
          {"    "}
          {"\n"}
          {"        "}return 0;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
        </iostream>
      </code>
      {"\n"}
      {"            "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}Output:{"\n"}
      {"    "}ធាតុនៅ [0][0]: 1{"\n"}
      {"    "}ធាតុនៅ [0][1]: 2{"\n"}
      {"    "}ធាតុនៅ [0][2]: 3{"\n"}
      {"    "}ធាតុនៅ [1][0]: 4{"\n"}
      {"    "}ធាតុនៅ [1][1]: 5{"\n"}
      {"    "}ធាតុនៅ [1][2]: 6{"\n"}
      {"    "}
    </pre>
  </div>
  {/* Strings and Character Arrays */}
  <div id="strings-and-character-arrays" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      4.3. ខ្សែអក្សរ និង អារ៉េអក្សរ
    </h3>
    <p className="mt-2">
      នៅក្នុង C++, ខ្សែអក្សរទូទៅត្រូវបានបង្ហាញដោយប្រើអារ៉េអក្សរ។
      អារ៉េអក្សរដែលបញ្ចប់ដោយ null គឺជាវិធីបង្ហាញខ្សែអក្សរដើមក្នុង C++។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}
      <code>
        {"\n"}
        {"    "}#include{" "}
        <iostream>
          {"\n"}
          {"    "}using namespace std;{"\n"}
          {"    "}
          {"\n"}
          {"    "}int main() {"{"}
          {"\n"}
          {"        "}char str[] = "Hello, World!";{"\n"}
          {"        "}cout &lt;&lt; "ខ្សែអក្សរ: " &lt;&lt; str &lt;&lt; endl;
          {"\n"}
          {"    "}
          {"\n"}
          {"        "}return 0;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
        </iostream>
      </code>
      {"\n"}
      {"            "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}Output:{"\n"}
      {"    "}ខ្សែអក្សរ: Hello, World!{"\n"}
      {"    "}
    </pre>
  </div>
  {/* String Manipulation Functions (from <cstring>) */}
  <div id="string-manipulation-functions" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      4.4. មុខងារបន្លាយខ្សែអក្សរ (ពី &lt;cstring&gt;)
    </h3>
    <p className="mt-2">
      បណ្ណាល័យ <code>&lt;cstring&gt;</code> ផ្ដល់ជូនមុខងារដើម្បីបន្លាយខ្សែអក្សរ
      C-style ដូចជា ការចម្លង, ការបញ្ចូលខ្សែអក្សរ, និងការប្រៀបធៀបខ្សែអក្សរ។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}
      <code>
        {"\n"}
        {"    "}#include{" "}
        <iostream>
          {"\n"}
          {"    "}#include{" "}
          <cstring>
            {"\n"}
            {"    "}using namespace std;{"\n"}
            {"    "}
            {"\n"}
            {"    "}int main() {"{"}
            {"\n"}
            {"        "}char str1[50] = "Hello";{"\n"}
            {"        "}char str2[] = "World";{"\n"}
            {"    "}
            {"\n"}
            {"        "}// ការបញ្ចូលខ្សែអក្សរ{"\n"}
            {"        "}strcat(str1, " ");{"\n"}
            {"        "}strcat(str1, str2);{"\n"}
            {"        "}cout &lt;&lt; "ខ្សែអក្សរ បញ្ចូលជាមួយគ្នា: " &lt;&lt;
            str1 &lt;&lt; endl;{"\n"}
            {"    "}
            {"\n"}
            {"        "}// បែងចែក{"\n"}
            {"        "}cout &lt;&lt; "ប្រវែងនៃ str1: " &lt;&lt; strlen(str1)
            &lt;&lt; endl;{"\n"}
            {"    "}
            {"\n"}
            {"        "}// ការប្រៀបធៀប{"\n"}
            {"        "}if (strcmp(str1, str2) == 0) {"{"}
            {"\n"}
            {"            "}cout &lt;&lt; "str1 មានតម្លៃស្មើ str2" &lt;&lt;
            endl;{"\n"}
            {"        "}
            {"}"} else {"{"}
            {"\n"}
            {"            "}cout &lt;&lt; "str1 មិនមានតម្លៃស្មើ str2" &lt;&lt;
            endl;{"\n"}
            {"        "}
            {"}"}
            {"\n"}
            {"    "}
            {"\n"}
            {"        "}return 0;{"\n"}
            {"    "}
            {"}"}
            {"\n"}
            {"    "}
          </cstring>
        </iostream>
      </code>
      {"\n"}
      {"            "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}Output:{"\n"}
      {"    "}ខ្សែអក្សរ បញ្ចូលជាមួយគ្នា: Hello World{"\n"}
      {"    "}ប្រវែងនៃ str1: 11{"\n"}
      {"    "}str1 មិនមានតម្លៃស្មើ str2{"\n"}
      {"    "}
    </pre>
  </div>
</div>
<div id="pointers" className="py-12 px-6 overflow-y-auto">
  <h2 className="text-3xl font-semibold text-blue-600">5. Pointers</h2>
  <p className="mt-4 text-lg">
    ផ្នែកនេះបញ្ជាក់ពីគន្លងសំខាន់ៗនៃ pointers ក្នុង C++ រួមមានមូលដ្ឋាននៃ pointers
    ប្រតិបត្តិការ pointer pointer និងអារេ void pointer ពីរ៉េទៅមុខនៃ functions
    និងការចែកចាយអង្គចោលមេម៉ូរីដោយប្រើ new និង delete។
  </p>
  {/* Basics of Pointers */}
  <div id="basics-of-pointers" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      5.1. មូលដ្ឋាននៃ Pointers
    </h3>
    <p className="mt-2">
      Pointer គឺជាប្រែប្រាប់ដែលផ្ទុកអាសយដ្ឋានមេម៉ូរីនៃអថេរដទៃ។ Pointers
      ត្រូវបានប្រើសម្រាប់ការចែកចាយមេម៉ូរីឌីណាមិច
      និងធ្វើការកែលម្អកម្រិតសមត្ថភាពពេលដោះសោចមកទិន្នន័យដ៏ធំ។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}
      <code>
        {"\n"}
        {"    "}#include{" "}
        <iostream>
          {"\n"}
          {"    "}using namespace std;{"\n"}
          {"    "}
          {"\n"}
          {"    "}int main() {"{"}
          {"\n"}
          {"        "}int num = 10;{"\n"}
          {"        "}int* ptr = #{"  "}// Pointer ទៅកាន់អថេរ integer{"\n"}
          {"    "}
          {"\n"}
          {"        "}cout &lt;&lt; "តម្លៃនៃ num: " &lt;&lt; num &lt;&lt; endl;
          {"\n"}
          {"        "}cout &lt;&lt; "អាសយដ្ឋាននៃ num: " &lt;&lt; &amp;num
          &lt;&lt; endl;{"\n"}
          {"        "}cout &lt;&lt; "Pointer ptr ផ្ទុកអាសយដ្ឋាន: " &lt;&lt; ptr
          &lt;&lt; endl;{"\n"}
          {"        "}cout &lt;&lt; "តម្លៃដែល ptr ឆ្លើយតប: " &lt;&lt; *ptr
          &lt;&lt; endl;{"\n"}
          {"    "}
          {"\n"}
          {"        "}return 0;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
        </iostream>
      </code>
      {"\n"}
      {"            "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}Output:{"\n"}
      {"    "}តម្លៃនៃ num: 10{"\n"}
      {"    "}អាសយដ្ឋាននៃ num: 0x7ffeefbff5ac{"\n"}
      {"    "}Pointer ptr ផ្ទុកអាសយដ្ឋាន: 0x7ffeefbff5ac{"\n"}
      {"    "}តម្លៃដែល ptr ឆ្លើយតប: 10{"\n"}
      {"    "}
    </pre>
  </div>
  {/* Pointer Arithmetic */}
  <div id="pointer-arithmetic" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      5.2. ប្រតិបត្តិការ Pointer
    </h3>
    <p className="mt-2">
      ប្រតិបត្តិការ pointer អនុញ្ញាតឱ្យអ្នកអនុវត្តប្រតិបត្តិការ ទៅលើ pointer
      ដូចជា បន្ថែម ឬកាត់ចេញ pointer ដើម្បីផ្លាស់ទីតាមអារេតម្លៃ។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}
      <code>
        {"\n"}
        {"    "}#include{" "}
        <iostream>
          {"\n"}
          {"    "}using namespace std;{"\n"}
          {"    "}
          {"\n"}
          {"    "}int main() {"{"}
          {"\n"}
          {"        "}int arr[3] = {"{"}10, 20, 30{"}"};{"\n"}
          {"        "}int* ptr = arr;{"\n"}
          {"    "}
          {"\n"}
          {"        "}cout &lt;&lt; "ធាតុដំបូង: " &lt;&lt; *ptr &lt;&lt; endl;
          {"\n"}
          {"        "}ptr++;{"  "}// ផ្លាស់ទីទៅធាតុបន្ទាប់ក្នុងអារេ{"\n"}
          {"        "}cout &lt;&lt; "ធាតុទីពីរ: " &lt;&lt; *ptr &lt;&lt; endl;
          {"\n"}
          {"        "}ptr++;{"  "}// ផ្លាស់ទីទៅធាតុបន្ទាប់ក្នុងអារេ{"\n"}
          {"        "}cout &lt;&lt; "ធាតុទីបី: " &lt;&lt; *ptr &lt;&lt; endl;
          {"\n"}
          {"    "}
          {"\n"}
          {"        "}return 0;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
        </iostream>
      </code>
      {"\n"}
      {"            "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}Output:{"\n"}
      {"    "}ធាតុដំបូង: 10{"\n"}
      {"    "}ធាតុទីពីរ: 20{"\n"}
      {"    "}ធាតុទីបី: 30{"\n"}
      {"    "}
    </pre>
  </div>
  {/* Pointers and Arrays */}
  <div id="pointers-and-arrays" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      5.3. Pointers និង Arrays
    </h3>
    <p className="mt-2">
      Arrays និង pointers មានទំនាក់ទំនងយ៉ាងជិតស្និទ។ ពិតណាស់ឈ្មោះនៃ array
      គឺជាព្រឹត្តិការណ៍ pointer ដែលចាំបាច់ចូលទៅកាន់ធាតុទីមួយនៃ array។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}
      <code>
        {"\n"}
        {"    "}#include{" "}
        <iostream>
          {"\n"}
          {"    "}using namespace std;{"\n"}
          {"    "}
          {"\n"}
          {"    "}int main() {"{"}
          {"\n"}
          {"        "}int arr[3] = {"{"}10, 20, 30{"}"};{"\n"}
          {"        "}int* ptr = arr;{"  "}// Pointer ទៅធាតុទីមួយនៃ array{"\n"}
          {"    "}
          {"\n"}
          {"        "}cout &lt;&lt; "ធាតុដំបូងដោយប្រើ pointer: " &lt;&lt; *ptr
          &lt;&lt; endl;{"\n"}
          {"        "}ptr++;{"  "}// ផ្លាស់ទីទៅធាតុបន្ទាប់{"\n"}
          {"        "}cout &lt;&lt; "ធាតុទីពីរដោយប្រើ pointer: " &lt;&lt; *ptr
          &lt;&lt; endl;{"\n"}
          {"    "}
          {"\n"}
          {"        "}return 0;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
        </iostream>
      </code>
      {"\n"}
      {"            "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}Output:{"\n"}
      {"    "}ធាតុដំបូងដោយប្រើ pointer: 10{"\n"}
      {"    "}ធាតុទីពីរដោយប្រើ pointer: 20{"\n"}
      {"    "}
    </pre>
  </div>
  {/* Void Pointers */}
  <div id="void-pointers" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">5.4. Void Pointers</h3>
    <p className="mt-2">
      Void pointer គឺជា pointer ដែលអាចបង្ហាញទៅកាន់ទិន្នន័យណាមួយ។ វាជា pointer
      ដែលប្រើសម្រាប់ការចែកចាយមេម៉ូរីឌីណាមិច និងគោលបំណងផ្សេងទៀត។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}
      <code>
        {"\n"}
        {"    "}#include{" "}
        <iostream>
          {"\n"}
          {"    "}using namespace std;{"\n"}
          {"    "}
          {"\n"}
          {"    "}int main() {"{"}
          {"\n"}
          {"        "}int num = 5;{"\n"}
          {"        "}double pi = 3.14;{"\n"}
          {"    "}
          {"\n"}
          {"        "}void* ptr;{"  "}// Void pointer{"\n"}
          {"        "}ptr = #{"  "}// បង្ហាញទៅកាន់ integer{"\n"}
          {"        "}cout &lt;&lt; "តម្លៃ integer: " &lt;&lt; *(int*)ptr
          &lt;&lt; endl;{"\n"}
          {"    "}
          {"\n"}
          {"        "}ptr = π{"  "}// បង្ហាញទៅកាន់ double{"\n"}
          {"        "}cout &lt;&lt; "តម្លៃ double: " &lt;&lt; *(double*)ptr
          &lt;&lt; endl;{"\n"}
          {"    "}
          {"\n"}
          {"        "}return 0;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
        </iostream>
      </code>
      {"\n"}
      {"            "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}Output:{"\n"}
      {"    "}តម្លៃ integer: 5{"\n"}
      {"    "}តម្លៃ double: 3.14{"\n"}
      {"    "}
    </pre>
  </div>
  {/* Pointers to Functions */}
  <div id="pointers-to-functions" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      5.5. Pointers ទៅ Functions
    </h3>
    <p className="mt-2">
      Function pointer ត្រូវបានប្រើសម្រាប់រក្សាទុកអាសយដ្ឋាននៃ function
      និងអាចប្រើសម្រាប់ហៅ function ដោយប្រើ pointer យ៉ាងផ្ទាល់។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}
      <code>
        {"\n"}
        {"    "}#include{" "}
        <iostream>
          {"\n"}
          {"    "}using namespace std;{"\n"}
          {"    "}
          {"\n"}
          {"    "}void greet() {"{"}
          {"\n"}
          {"        "}cout &lt;&lt; "Hello, World!" &lt;&lt; endl;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
          {"\n"}
          {"    "}int main() {"{"}
          {"\n"}
          {"        "}void (*funcPtr)() = greet;{"  "}// Function pointer{"\n"}
          {"        "}funcPtr();{"  "}// ហៅ function ដោយប្រើ pointer{"\n"}
          {"    "}
          {"\n"}
          {"        "}return 0;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
        </iostream>
      </code>
      {"\n"}
      {"            "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}Output:{"\n"}
      {"    "}Hello, World!{"\n"}
      {"    "}
    </pre>
  </div>
  {/* Dynamic Memory Allocation (new and delete) */}
  <div id="dynamic-memory-allocation" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      5.6. ការចែកចាយអង្គចោលមេម៉ូរី (new និង delete)
    </h3>
    <p className="mt-2">
      ការចែកចាយអង្គចោលមេម៉ូរីអនុញ្ញាតឱ្យកម្មវិធីអាចចែកចាយមេម៉ូរីនៅពេលវេលារ៉ែនតៃមដោយប្រើប្រតិបត្តិការណ៍
      `new` និងទទួលវិញដោយប្រើ `delete`។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}
      <code>
        {"\n"}
        {"    "}#include{" "}
        <iostream>
          {"\n"}
          {"    "}using namespace std;{"\n"}
          {"    "}
          {"\n"}
          {"    "}int main() {"{"}
          {"\n"}
          {"        "}int* ptr = new int;{"  "}// ចែកចាយមេម៉ូរីដោយប្រើ new
          សម្រាប់ integer{"\n"}
          {"        "}*ptr = 10;{"\n"}
          {"    "}
          {"\n"}
          {"        "}cout &lt;&lt; "តម្លៃដែលបានចែកចាយមេម៉ូរី: " &lt;&lt; *ptr
          &lt;&lt; endl;{"\n"}
          {"    "}
          {"\n"}
          {"        "}delete ptr;{"  "}// សម្អាតមេម៉ូរីដែលបានចែកចាយ{"\n"}
          {"    "}
          {"\n"}
          {"        "}return 0;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
        </iostream>
      </code>
      {"\n"}
      {"            "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}Output:{"\n"}
      {"    "}តម្លៃដែលបានចែកចាយមេម៉ូរី: 10{"\n"}
      {"    "}
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


<div id="object-oriented-programming" className="py-12 px-6 overflow-y-auto">
  <h2 className="text-3xl font-semibold text-blue-600">
    6. ការសរសេរកម្មវិធីដោយប្រើវត្ថុ (OOP)
  </h2>
  <p className="mt-4 text-lg">
    ផ្នែកនេះពន្យល់ពីវិធីសាស្ត្រដែលប្រើនៅក្នុង OOP នៅ C++ ដូចជាការបង្កើតវត្ថុ
    និងថ្នាក់, ការកំណត់សិទ្ធិ, ការប្រើប្រាស់ប្រភេទលក្ខណៈ
    និងមុខងារផ្សេងៗដែលពាក់ព័ន្ធ។
  </p>
  {/* Classes and Objects */}
  <div id="classes-and-objects" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      6.1. ថ្នាក់ និង វត្ថុ
    </h3>
    <p className="mt-2">
      ថ្នាក់គឺជាការបញ្ជាក់ពីប្រភេទទិន្នន័យដែលមានលក្ខណៈពិសេស
      និងមុខងារដែលវត្ថុមាន។ វត្ថុគឺជាឧទាហរណ៍នៃថ្នាក់មួយ។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}
      <code>
        {"\n"}
        {"    "}#include{" "}
        <iostream>
          {"\n"}
          {"    "}using namespace std;{"\n"}
          {"    "}
          {"\n"}
          {"    "}class Person {"{"}
          {"\n"}
          {"    "}public:{"\n"}
          {"        "}string name;{"\n"}
          {"        "}int age;{"\n"}
          {"    "}
          {"\n"}
          {"        "}void introduce() {"{"}
          {"\n"}
          {"            "}cout &lt;&lt; "Hello, my name is " &lt;&lt; name
          &lt;&lt; " and I am " &lt;&lt; age &lt;&lt; " years old." &lt;&lt;
          endl;{"\n"}
          {"        "}
          {"}"}
          {"\n"}
          {"    "}
          {"}"};{"\n"}
          {"    "}
          {"\n"}
          {"    "}int main() {"{"}
          {"\n"}
          {"        "}Person person;{"\n"}
          {"        "}person.name = "John";{"\n"}
          {"        "}person.age = 30;{"\n"}
          {"    "}
          {"\n"}
          {"        "}person.introduce();{"\n"}
          {"    "}
          {"\n"}
          {"        "}return 0;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
        </iostream>
      </code>
      {"\n"}
      {"            "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}Output:{"\n"}
      {"    "}Hello, my name is John and I am 30 years old.{"\n"}
      {"    "}
    </pre>
  </div>
  {/* Access Modifiers */}
  <div id="access-modifiers" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      6.2. ការកំណត់សិទ្ធិ (private, protected, public)
    </h3>
    <p className="mt-2">
      ការកំណត់សិទ្ធិគឺជាការកំណត់សិទ្ធិមូលដ្ឋានលើបំណែកនៃថ្នាក់ ដូចជា{" "}
      <code>private</code>, <code>protected</code>, និង <code>public</code>។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}
      <code>
        {"\n"}
        {"    "}#include{" "}
        <iostream>
          {"\n"}
          {"    "}using namespace std;{"\n"}
          {"    "}
          {"\n"}
          {"    "}class Person {"{"}
          {"\n"}
          {"    "}private:{"\n"}
          {"        "}string name;{"\n"}
          {"    "}public:{"\n"}
          {"        "}int age;{"\n"}
          {"    "}
          {"\n"}
          {"        "}void setName(string n) {"{"}
          {"\n"}
          {"            "}name = n;{"\n"}
          {"        "}
          {"}"}
          {"\n"}
          {"    "}
          {"\n"}
          {"        "}void introduce() {"{"}
          {"\n"}
          {"            "}cout &lt;&lt; "Hello, my name is " &lt;&lt; name
          &lt;&lt; " and I am " &lt;&lt; age &lt;&lt; " years old." &lt;&lt;
          endl;{"\n"}
          {"        "}
          {"}"}
          {"\n"}
          {"    "}
          {"}"};{"\n"}
          {"    "}
          {"\n"}
          {"    "}int main() {"{"}
          {"\n"}
          {"        "}Person person;{"\n"}
          {"        "}person.setName("Alice");{"\n"}
          {"        "}person.age = 25;{"\n"}
          {"        "}person.introduce();{"\n"}
          {"    "}
          {"\n"}
          {"        "}return 0;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
        </iostream>
      </code>
      {"\n"}
      {"            "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}Output:{"\n"}
      {"    "}Hello, my name is Alice and I am 25 years old.{"\n"}
      {"    "}
    </pre>
  </div>
  {/* Constructors and Destructors */}
  <div id="constructors-and-destructors" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      6.3. ការបង្កើត និង ការបំបាត់
    </h3>
    <p className="mt-2">
      Constructor និង Destructor
      គឺជាមុខងារដែលត្រូវបានប្រើនៅពេលបង្កើតនិងបំបាត់វត្ថុ។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}
      <code>
        {"\n"}
        {"    "}#include{" "}
        <iostream>
          {"\n"}
          {"    "}using namespace std;{"\n"}
          {"    "}
          {"\n"}
          {"    "}class Person {"{"}
          {"\n"}
          {"    "}public:{"\n"}
          {"        "}string name;{"\n"}
          {"        "}int age;{"\n"}
          {"    "}
          {"\n"}
          {"        "}Person(string n, int a) {"{"} // Constructor{"\n"}
          {"            "}name = n;{"\n"}
          {"            "}age = a;{"\n"}
          {"        "}
          {"}"}
          {"\n"}
          {"    "}
          {"\n"}
          {"        "}~Person() {"{"} // Destructor{"\n"}
          {"            "}cout &lt;&lt; "Person object destroyed" &lt;&lt; endl;
          {"\n"}
          {"        "}
          {"}"}
          {"\n"}
          {"    "}
          {"\n"}
          {"        "}void introduce() {"{"}
          {"\n"}
          {"            "}cout &lt;&lt; "Hello, my name is " &lt;&lt; name
          &lt;&lt; " and I am " &lt;&lt; age &lt;&lt; " years old." &lt;&lt;
          endl;{"\n"}
          {"        "}
          {"}"}
          {"\n"}
          {"    "}
          {"}"};{"\n"}
          {"    "}
          {"\n"}
          {"    "}int main() {"{"}
          {"\n"}
          {"        "}Person person("Bob", 28);{"\n"}
          {"        "}person.introduce();{"\n"}
          {"    "}
          {"\n"}
          {"        "}return 0;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
        </iostream>
      </code>
      {"\n"}
      {"            "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}Output:{"\n"}
      {"    "}Hello, my name is Bob and I am 28 years old.{"\n"}
      {"    "}Person object destroyed{"\n"}
      {"    "}
    </pre>
  </div>
  {/* this Pointer */}
  <div id="this-pointer" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">6.4. this Pointer</h3>
    <p className="mt-2">
      this pointer គឺជាព្រឹត្តិការណ៍ដែលបញ្ជាក់អាសយដ្ឋាននៃវត្ថុដែលកំពុងហៅមុខងារ។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}
      <code>
        {"\n"}
        {"    "}#include{" "}
        <iostream>
          {"\n"}
          {"    "}using namespace std;{"\n"}
          {"    "}
          {"\n"}
          {"    "}class Person {"{"}
          {"\n"}
          {"    "}public:{"\n"}
          {"        "}string name;{"\n"}
          {"        "}int age;{"\n"}
          {"    "}
          {"\n"}
          {"        "}void setName(string name) {"{"}
          {"\n"}
          {"            "}this-&gt;name = name; // using this pointer{"\n"}
          {"        "}
          {"}"}
          {"\n"}
          {"    "}
          {"\n"}
          {"        "}void introduce() {"{"}
          {"\n"}
          {"            "}cout &lt;&lt; "My name is " &lt;&lt; name &lt;&lt;
          endl;{"\n"}
          {"        "}
          {"}"}
          {"\n"}
          {"    "}
          {"}"};{"\n"}
          {"    "}
          {"\n"}
          {"    "}int main() {"{"}
          {"\n"}
          {"        "}Person person;{"\n"}
          {"        "}person.setName("Charlie");{"\n"}
          {"        "}person.introduce();{"\n"}
          {"    "}
          {"\n"}
          {"        "}return 0;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
        </iostream>
      </code>
      {"\n"}
      {"            "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}Output:{"\n"}
      {"    "}My name is Charlie{"\n"}
      {"    "}
    </pre>
  </div>
  {/* Static Members and Methods */}
  <div id="static-members-and-methods" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      6.5. សមាជិក និង វិធីសាស្ត្រស្ថិតិ
    </h3>
    <p className="mt-2">
      Static members and methods are shared among all instances of a class, and
      can be accessed without creating an object of the class.
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}
      <code>
        {"\n"}
        {"    "}#include{" "}
        <iostream>
          {"\n"}
          {"    "}using namespace std;{"\n"}
          {"    "}
          {"\n"}
          {"    "}class Counter {"{"}
          {"\n"}
          {"    "}public:{"\n"}
          {"        "}static int count; // Static member variable{"\n"}
          {"    "}
          {"\n"}
          {"        "}void increment() {"{"}
          {"\n"}
          {"            "}count++;{"\n"}
          {"        "}
          {"}"}
          {"\n"}
          {"    "}
          {"\n"}
          {"        "}static void displayCount() {"{"} // Static member function
          {"\n"}
          {"            "}cout &lt;&lt; "Count: " &lt;&lt; count &lt;&lt; endl;
          {"\n"}
          {"        "}
          {"}"}
          {"\n"}
          {"    "}
          {"}"};{"\n"}
          {"    "}
          {"\n"}
          {"    "}int Counter::count = 0; // Initializing static variable{"\n"}
          {"    "}
          {"\n"}
          {"    "}int main() {"{"}
          {"\n"}
          {"        "}Counter obj1, obj2;{"\n"}
          {"        "}obj1.increment();{"\n"}
          {"        "}obj2.increment();{"\n"}
          {"        "}Counter::displayCount(); // Calling static method{"\n"}
          {"    "}
          {"\n"}
          {"        "}return 0;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}
        </iostream>
      </code>
      {"\n"}
      {"            "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      {"    "}Output:{"\n"}
      {"    "}Count: 2{"\n"}
      {"    "}
    </pre>
  </div>
  {/* Inheritance */}
  <div id="inheritance" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      6.6. ការធ្វើមារីលើ (Inheritance)
    </h3>
    <p className="mt-2">
      Inheritance គឺជាគម្របមួយដែលអនុញ្ញាតឱ្យថ្នាក់មួយអាចទទួលបានលក្ខណៈ
      និងមុខងារពីថ្នាក់មួយទៀត។ Inheritance មានដូចជា (single, multiple,
      multilevel, hybrid)
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      <code>
        {"\n"}#include{" "}
        <iostream>
          {"\n"}using namespace std;{"\n"}
          {"\n"}class Animal {"{"}
          {"\n"}public:{"\n"}
          {"    "}void speak() {"{"}
          {"\n"}
          {"        "}cout &lt;&lt; "ខ្ញុំមានសំឡេង!" &lt;&lt; endl;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"}"};{"\n"}
          {"\n"}class Dog : public Animal {"{"} // Dog inherits from Animal
          {"\n"}public:{"\n"}
          {"    "}void bark() {"{"}
          {"\n"}
          {"        "}cout &lt;&lt; "Woof! Woof!" &lt;&lt; endl;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"}"};{"\n"}
          {"\n"}int main() {"{"}
          {"\n"}
          {"    "}Dog dog;{"\n"}
          {"    "}dog.speak();{"  "}// Inherited function{"\n"}
          {"    "}dog.bark();{"   "}// Dog's own function{"\n"}
          {"\n"}
          {"    "}return 0;{"\n"}
          {"}"}
          {"\n"}
        </iostream>
      </code>
      {"\n"}
      {"    "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output:{"\n"}ខ្ញុំមានសំឡេង!{"\n"}Woof! Woof!{"\n"}
    </pre>
  </div>
  {/* Polymorphism */}
  <div id="polymorphism" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      6.7. Polymorphism (ពេលកំឡុងពេលសរសេរ និងពេលអនុវត្ត)
    </h3>
    <p className="mt-2">
      Polymorphism
      អនុញ្ញាតឱ្យមានការប្រើប្រាស់មុខងារដែលមានឈ្មោះដូចគ្នានៅក្នុងថ្នាក់ផ្សេងៗ។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      <code>
        {"\n"}#include{" "}
        <iostream>
          {"\n"}using namespace std;{"\n"}
          {"\n"}class Shape {"{"}
          {"\n"}public:{"\n"}
          {"    "}virtual void draw() {"{"} // Virtual function{"\n"}
          {"        "}cout &lt;&lt; "គំនូរដោយទូទៅ!" &lt;&lt; endl;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"}"};{"\n"}
          {"\n"}class Circle : public Shape {"{"}
          {"\n"}public:{"\n"}
          {"    "}void draw() override {"{"} // Overriding base class function
          {"\n"}
          {"        "}cout &lt;&lt; "គំនូរលេខសម្រង់!" &lt;&lt; endl;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"}"};{"\n"}
          {"\n"}int main() {"{"}
          {"\n"}
          {"    "}Shape* shape = new Circle();{"  "}// Polymorphism{"\n"}
          {"    "}shape-&gt;draw();{"\n"}
          {"\n"}
          {"    "}delete shape;{"\n"}
          {"    "}return 0;{"\n"}
          {"}"}
          {"\n"}
        </iostream>
      </code>
      {"\n"}
      {"    "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output:{"\n"}គំនូរលេខសម្រង់!{"\n"}
    </pre>
  </div>
  {/* Function Overloading */}
  <div id="function-overloading" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      6.8. ការបង្រៀនមុខងារ
    </h3>
    <p className="mt-2">
      Function Overloading គឺជាការបង្កើតមុខងារច្រើនដែលមានឈ្មោះដូចគ្នា
      ប៉ុន្តែមានប៉ារ៉ាម៉ែត្រ ផ្សេងគ្នា។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      <code>
        {"\n"}#include{" "}
        <iostream>
          {"\n"}using namespace std;{"\n"}
          {"\n"}class Calculator {"{"}
          {"\n"}public:{"\n"}
          {"    "}int add(int a, int b) {"{"}
          {"\n"}
          {"        "}return a + b;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"\n"}
          {"    "}double add(double a, double b) {"{"}
          {"\n"}
          {"        "}return a + b;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"}"};{"\n"}
          {"\n"}int main() {"{"}
          {"\n"}
          {"    "}Calculator calc;{"\n"}
          {"    "}cout &lt;&lt; "ផលបូកចំនួនអង្គចោល: " &lt;&lt; calc.add(5, 3)
          &lt;&lt; endl;{"\n"}
          {"    "}cout &lt;&lt; "ផលបូកចំនួនទ្រង់ទ្រាយទ្វីត: " &lt;&lt;
          calc.add(3.5, 2.5) &lt;&lt; endl;{"\n"}
          {"\n"}
          {"    "}return 0;{"\n"}
          {"}"}
          {"\n"}
        </iostream>
      </code>
      {"\n"}
      {"    "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output:{"\n"}ផលបូកចំនួនអង្គចោល: 8{"\n"}ផលបូកចំនួនទ្រង់ទ្រាយទ្វីត: 6{"\n"}
    </pre>
  </div>
  {/* Operator Overloading */}
  <div id="operator-overloading" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      6.9. ការបង្ហោះប្រតិបត្តិការ
    </h3>
    <p className="mt-2">
      Operator Overloading អនុញ្ញាតឱ្យអ្នកកំណត់ការប្រើប្រាស់ប្រតិបត្តិការ
      (operators) សម្រាប់ថ្នាក់របស់អ្នក។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      <code>
        {"\n"}#include{" "}
        <iostream>
          {"\n"}using namespace std;{"\n"}
          {"\n"}class Complex {"{"}
          {"\n"}public:{"\n"}
          {"    "}int real, imag;{"\n"}
          {"\n"}
          {"    "}Complex operator + (Complex const&amp; other) {"{"}
          {"\n"}
          {"        "}Complex temp;{"\n"}
          {"        "}temp.real = real + other.real;{"\n"}
          {"        "}temp.imag = imag + other.imag;{"\n"}
          {"        "}return temp;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"}"};{"\n"}
          {"\n"}int main() {"{"}
          {"\n"}
          {"    "}Complex num1, num2, result;{"\n"}
          {"    "}num1.real = 5;{"\n"}
          {"    "}num1.imag = 3;{"\n"}
          {"    "}num2.real = 2;{"\n"}
          {"    "}num2.imag = 4;{"\n"}
          {"\n"}
          {"    "}result = num1 + num2;{"\n"}
          {"    "}cout &lt;&lt; "ផលបូក: " &lt;&lt; result.real &lt;&lt; " + "
          &lt;&lt; result.imag &lt;&lt; "i" &lt;&lt; endl;{"\n"}
          {"\n"}
          {"    "}return 0;{"\n"}
          {"}"}
          {"\n"}
        </iostream>
      </code>
      {"\n"}
      {"    "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output:{"\n"}ផលបូក: 7 + 7i{"\n"}
    </pre>
  </div>
  {/* Virtual Functions and v-Tables */}
  <div id="virtual-functions-and-v-tables" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      6.10. មុខងារធម្មតា និង v-Tables
    </h3>
    <p className="mt-2">
      Virtual functions are functions in a base class that can be overridden in
      derived classes. v-Tables are used to implement dynamic dispatch for
      virtual functions.
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      <code>
        {"\n"}#include{" "}
        <iostream>
          {"\n"}using namespace std;{"\n"}
          {"\n"}class Base {"{"}
          {"\n"}public:{"\n"}
          {"    "}virtual void display() {"{"}
          {"\n"}
          {"        "}cout &lt;&lt; "Base class" &lt;&lt; endl;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"}"};{"\n"}
          {"\n"}class Derived : public Base {"{"}
          {"\n"}public:{"\n"}
          {"    "}void display() override {"{"}
          {"\n"}
          {"        "}cout &lt;&lt; "Derived class" &lt;&lt; endl;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"}"};{"\n"}
          {"\n"}int main() {"{"}
          {"\n"}
          {"    "}Base* basePtr;{"\n"}
          {"    "}Derived derivedObj;{"\n"}
          {"    "}basePtr = &amp;derivedObj;{"\n"}
          {"    "}basePtr-&gt;display();{"  "}// Will call Derived class display
          function{"\n"}
          {"\n"}
          {"    "}return 0;{"\n"}
          {"}"}
          {"\n"}
        </iostream>
      </code>
      {"\n"}
      {"    "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output:{"\n"}Derived class{"\n"}
    </pre>
  </div>
  {/* Abstract Classes and Pure Virtual Functions */}
  <div id="abstract-classes-and-pure-virtual-functions" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      6.11. ថ្នាក់ទទេ និង មុខងារទទេដែលត្រឹមត្រូវ
    </h3>
    <p className="mt-2">
      An abstract class is a class that cannot be instantiated and contains at
      least one pure virtual function.
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      <code>
        {"\n"}#include{" "}
        <iostream>
          {"\n"}using namespace std;{"\n"}
          {"\n"}class Shape {"{"}
          {"\n"}public:{"\n"}
          {"    "}virtual void draw() = 0; // Pure virtual function{"\n"}
          {"}"};{"\n"}
          {"\n"}class Circle : public Shape {"{"}
          {"\n"}public:{"\n"}
          {"    "}void draw() override {"{"}
          {"\n"}
          {"        "}cout &lt;&lt; "គំនូរលេខសម្រង់!" &lt;&lt; endl;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"}"};{"\n"}
          {"\n"}int main() {"{"}
          {"\n"}
          {"    "}Shape* shape = new Circle();{"\n"}
          {"    "}shape-&gt;draw();{"\n"}
          {"\n"}
          {"    "}delete shape;{"\n"}
          {"    "}return 0;{"\n"}
          {"}"}
          {"\n"}
        </iostream>
      </code>
      {"\n"}
      {"    "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output:{"\n"}គំនូរលេខសម្រង់!{"\n"}
    </pre>
  </div>
  {/* Encapsulation */}
  <div id="encapsulation" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      6.12. ការបញ្ចូលគ្នា
    </h3>
    <p className="mt-2">
      Encapsulation is the concept of hiding the internal details of an object
      and only exposing necessary functionality.
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      <code>
        {"\n"}#include{" "}
        <iostream>
          {"\n"}using namespace std;{"\n"}
          {"\n"}class Account {"{"}
          {"\n"}private:{"\n"}
          {"    "}double balance;{"\n"}public:{"\n"}
          {"    "}void deposit(double amount) {"{"}
          {"\n"}
          {"        "}if (amount &gt; 0) {"{"}
          {"\n"}
          {"            "}balance += amount;{"\n"}
          {"        "}
          {"}"}
          {"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"\n"}
          {"    "}double getBalance() {"{"}
          {"\n"}
          {"        "}return balance;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"}"};{"\n"}
          {"\n"}int main() {"{"}
          {"\n"}
          {"    "}Account account;{"\n"}
          {"    "}account.deposit(500);{"\n"}
          {"    "}cout &lt;&lt; "សរុបប្រាក់នៅក្នុងគណនី: " &lt;&lt;
          account.getBalance() &lt;&lt; endl;{"\n"}
          {"\n"}
          {"    "}return 0;{"\n"}
          {"}"}
          {"\n"}
        </iostream>
      </code>
      {"\n"}
      {"    "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output:{"\n"}សរុបប្រាក់នៅក្នុងគណនី: 500{"\n"}
    </pre>
  </div>
  {/* Friend Functions and Classes */}
  <div id="friend-functions-and-classes" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      6.13. មុខងារជួបនិងថ្នាក់ទេ
    </h3>
    <p className="mt-2">
      Friend functions and classes can access private and protected members of
      other classes.
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      <code>
        {"\n"}#include{" "}
        <iostream>
          {"\n"}using namespace std;{"\n"}
          {"\n"}class Box {"{"}
          {"\n"}private:{"\n"}
          {"    "}double length;{"\n"}public:{"\n"}
          {"    "}Box(double l) : length(l) {"{"}
          {"}"}
          {"\n"}
          {"    "}friend void printLength(Box box);{"  "}// Friend function
          {"\n"}
          {"}"};{"\n"}
          {"\n"}void printLength(Box box) {"{"}
          {"\n"}
          {"    "}cout &lt;&lt; "Length: " &lt;&lt; box.length &lt;&lt; endl;
          {"\n"}
          {"}"}
          {"\n"}
          {"\n"}int main() {"{"}
          {"\n"}
          {"    "}Box box(10);{"\n"}
          {"    "}printLength(box);{"  "}// Calling friend function{"\n"}
          {"\n"}
          {"    "}return 0;{"\n"}
          {"}"}
          {"\n"}
        </iostream>
      </code>
      {"\n"}
      {"    "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output:{"\n"}Length: 10{"\n"}
    </pre>
  </div>
</div>


<div id="file-handling" className="py-12 px-6 overflow-y-auto">
      <h2 className="text-3xl font-semibold text-blue-600">7. File Handling</h2>
      <p className="mt-4 text-lg">
        នៅក្នុងផ្នែកនេះ យើងនឹងសិក្សាអំពីការបញ្ជូលនិងការបង្ហោះឯកសារ (File Handling) នៅក្នុង C++។ វាផ្តល់ឱកាសនៃការអាននិងការសរសេរ ទៅក្នុងឯកសារ ការចូលប្រើឯកសារ និងការប្រើប្រាស់ឯកសារដែលមានទ្រង់ទ្រាយពីរដូចជា ឯកសារ binaray។
      </p>

      {/* File Input and Output */}
      <div id="file-input-output" className="mt-8">
        <h3 className="text-2xl font-semibold text-blue-600">
          7.1. File Input and Output (fstream, ifstream, ofstream)
        </h3>
        <p className="mt-2">
          ក្នុង C++ យើងអាចប្រើបញ្ជី <code>fstream</code> ដើម្បីបញ្ចូល និង បង្ហោះឯកសារ។ <code>ifstream</code> និង <code>ofstream</code> គឺជាកម្មវិធីដើម្បីអាន និងសរសេរ ក្នុងឯកសារ។
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
          <code>
            {`#include <iostream>
#include <fstream>
using namespace std;

int main() {
    ofstream outFile("example.txt"); // បើកឯកសារសម្រាប់សរសេរ
    if (outFile.is_open()) {
        outFile << "សួស្តី ពិភពលោក!" << endl; // សរសេរទៅក្នុងឯកសារ
        outFile.close(); // បិទឯកសារ
    }

    ifstream inFile("example.txt"); // បើកឯកសារសម្រាប់អាន
    string line;
    if (inFile.is_open()) {
        while (getline(inFile, line)) {
            cout << line << endl; // បង្ហាញខ្លឹមសារ
        }
        inFile.close(); // បិទឯកសារ
    }

    return 0;
}`}
          </code>
        </pre>
        <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
          Output: <br />
          សួស្តី ពិភពលោក!
        </pre>
      </div>

      {/* Reading and Writing Files */}
      <div id="reading-and-writing-files" className="mt-8">
        <h3 className="text-2xl font-semibold text-blue-600">7.2. Reading and Writing Files</h3>
        <p className="mt-2">
          ការអាននិងសរសេរឯកសារប្រើ <code>ofstream</code> និង <code>ifstream</code> ដើម្បីសរសេរឬអានពីឯកសារបញ្ចូល និងបញ្ចេញព័ត៌មានក្នុងឯកសារ។
        </p>
      </div>

      {/* Random Access to Files */}
      <div id="random-access-to-files" className="mt-8">
        <h3 className="text-2xl font-semibold text-blue-600">7.3. Random Access to Files</h3>
        <p className="mt-2">
          ការចូលប្រើឯកសារแบบRandom គឺមានសមត្ថភាពក្នុងការអានឬសរសេរ ពីទីតាំងណាមួយក្នុងឯកសារ ដែលអាចធ្វើបានដោយប្រើ <code>seekg</code> និង <code>seekp</code>។
        </p>
      </div>

      {/* Binary Files */}
      <div id="binary-files" className="mt-8">
        <h3 className="text-2xl font-semibold text-blue-600">7.4. Binary Files</h3>
        <p className="mt-2">
          ឯកសារ binary គឺជាឯកសារដែលផ្ទុកទិន្នន័យក្នុងទ្រង់ទ្រាយទិន្នន័យបែបបីណារី ដែលអាចអាននិងសរសេរបានដោយប្រើ <code>fstream</code>។
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
          <code>
            {`#include <iostream>
#include <fstream>
using namespace std;

struct Student {
    string name;
    int age;
};

int main() {
    ofstream outFile("student.dat", ios::binary); // បើកឯកសារតាមប្រភេទ binary
    Student s1 = {"John", 20};
    outFile.write(reinterpret_cast<char*>(&s1), sizeof(s1)); // សរសេរទៅឯកសារ
    outFile.close();

    ifstream inFile("student.dat", ios::binary); // បើកឯកសារសម្រាប់អាន binary
    Student s2;
    inFile.read(reinterpret_cast<char*>(&s2), sizeof(s2)); // អានពីឯកសារ
    inFile.close();

    cout << "Student Name: " << s2.name << endl;
    cout << "Student Age: " << s2.age << endl;

    return 0;
}`}
          </code>
        </pre>
        <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
          Output: <br />
          Student Name: John <br />
          Student Age: 20
        </pre>
      </div>
    </div>

    <div id="error-and-exception-handling" className="py-12 px-6 overflow-y-auto">
  <h2 className="text-3xl font-semibold text-blue-600">
    8. ការប្រតិបត្ដិចរៀងនិងការព្យាបាលករណីកំហុស
  </h2>
  <p className="mt-4 text-lg">
    ផ្នែកនេះពិភាក្សាអំពីការប្រតិបត្ដិចរៀងនិងការព្យាបាលករណីកំហុស
    ដោយប្រើពាក្យគន្លឹះ try, catch, throw និងករណីកំហុសផ្សេងៗ។
  </p>
  {/* Basics of Error Handling */}
  <div id="basics-of-error-handling" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      8.1. មូលដ្ឋាននៃការប្រតិបត្ដិចរៀងនិងការព្យាបាលករណីកំហុស
    </h3>
    <p className="mt-2">
      ការប្រតិបត្ដិចរៀងនិងការព្យាបាលករណីកំហុសគឺជាគន្លងមួយដែលអនុញ្ញាតឲ្យអ្នកកម្មវិធីអាចកំណត់ករណីកំហុស
      និងស្ថិតិការកែលម្អក្នុងកម្មវិធី។
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
      <code>
        {"\n"}#include{" "}
        <iostream>
          {"\n"}using namespace std;{"\n"}
          {"\n"}int main() {"{"}
          {"\n"}
          {"    "}try {"{"}
          {"\n"}
          {"        "}int num = 10;{"\n"}
          {"        "}if (num == 10) {"{"}
          {"\n"}
          {"            "}throw "កំហុស!";{"\n"}
          {"        "}
          {"}"}
          {"\n"}
          {"    "}
          {"}"} catch (const char* msg) {"{"}
          {"\n"}
          {"        "}cout &lt;&lt; "ចំណាំ: " &lt;&lt; msg &lt;&lt; endl;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"\n"}
          {"    "}return 0;{"\n"}
          {"}"}
          {"\n"}
        </iostream>
      </code>
      {"\n"}
      {"        "}
    </pre>
    <pre className="bg-gray-100 text-black p-4 rounded-lg mt-2 overflow-x-auto">
      Output:{"\n"}ចំណាំ: កំហុស!{"\n"}
    </pre>
  </div>
  {/* Try, Catch, Throw Keywords */}
  <div id="try-catch-throw-keywords" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      8.2. ពាក្យគន្លឹះ try, catch, throw
    </h3>
    <p className="mt-2">
      try ប្រើសម្រាប់ការប្រតិបត្ដិចរៀងក្នុងប្លុក ដែលប្រើជាមួយ catch
      ដើម្បីចាប់ករណីកំហុស ហើយ throw ប្រើដើម្បីឱ្យមានការបញ្ចូនកំហុស។
    </p>
  </div>
  {/* Standard Exceptions */}
  <div id="standard-exceptions" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      8.3. ករណីកំហុសស្តង់ដារ
    </h3>
    <p className="mt-2">
      C++ មានករណីកំហុសស្តង់ដាដែលអាចប្រើបាន ដូចជា <code>std::out_of_range</code>,{" "}
      <code>std::invalid_argument</code> និង <code>std::exception</code>។
    </p>
  </div>
  {/* Custom Exceptions */}
  <div id="custom-exceptions" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">
      8.4. ករណីកំហុសផ្ទាល់ខ្លួន
    </h3>
    <p className="mt-2">
      អ្នកអាចបង្កើតករណីកំហុសផ្ទាល់ខ្លួន ដោយការប្រើប្រាស់ <code>class</code> ឬ{" "}
      <code>struct</code> និងឲ្យវាដំណើរការជាករណីកំហុសក្នុងកម្មវិធី។
    </p>
  </div>
</div>



      </div>
        
  </div>
  


    </>
  );
}

export default Cpp_Programming;
