export const questions = {

  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all": {
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all",
    title: "Promise.all()",
    questions: [
      {
        "question": "What does Promise.all(iterable) return when given an empty array?",
        "options": [
          "A pending promise",
          "A promise that rejects immediately",
          "A promise that fulfills immediately with []",
          "A promise that fulfills asynchronously with []"
        ],
        "answer": "A promise that fulfills immediately with []"
      },
      {
        "question": "If all items in the iterable are non-promises, how does Promise.all behave?",
        "options": [
          "Rejects immediately",
          "Fulfills asynchronously with values",
          "Fulfills synchronously with wrapped values",
          "Fulfills immediately with wrapped promise objects"
        ],
        "answer": "Fulfills asynchronously with values"
      },
      {
        "question": "When does the returned promise reject?",
        "options": [
          "After all promises reject",
          "As soon as any input promise rejects",
          "Only if all input promises reject",
          "Never rejects"
        ],
        "answer": "As soon as any input promise rejects"
      },
      {
        "question": "What does then(values) receive on fulfillment?",
        "options": [
          "Results in arbitrary order",
          "Only values from settled promises",
          "An array of values in input order",
          "A nested array of promises"
        ],
        "answer": "An array of values in input order"
      },
      {
        "question": "If you pass already-settled promises, does Promise.all resolve synchronously?",
        "options": [
          "Yes",
          "No, always asynchronously",
          "Yes, if all promises are already resolved",
          "Depends on environment"
        ],
        "answer": "No, always asynchronously"
      },
      {
        "question": "Which method should you use to wait until all promises settle (regardless of rejection)?",
        "options": [
          "Promise.all()",
          "Promise.race()",
          "Promise.any()",
          "Promise.allSettled()"
        ],
        "answer": "Promise.allSettled()"
      },
      {
        "question": "What kind of behavior does Promise.all() exhibit on rejection?",
        "options": [
          "Lazy",
          "Fail-safe",
          "Fail-fast",
          "Buffering"
        ],
        "answer": "Fail-fast"
      },
      {
        "question": "What error does Promise.any() return if all promises reject?",
        "options": [
          "First rejection",
          "AggregateError",
          "Undefined",
          "SyntaxError"
        ],
        "answer": "AggregateError"
      },
      {
        "question": "How are non-promise values treated by Promise.all()?",
        "options": [
          "Rejected as invalid",
          "Wrapped as resolved promises",
          "Ignored",
          "Cause type error"
        ],
        "answer": "Wrapped as resolved promises"
      },
      {
        "question": "In await Promise.all([...]), what happens if one promise rejects?",
        "options": [
          "await returns partial results",
          "await throws first rejection",
          "await waits for all, then throws array",
          "await both resolves and rejects"
        ],
        "answer": "await throws first rejection"
      },
      {
        "question": "Can passing unresolved functions (not calling them) break Promise.all()?",
        "options": [
          "Yes—functions reject",
          "No—as long as iterable isn’t empty",
          "Yes—non-promises ignored",
          "No—they're treated as values, not called"
        ],
        "answer": "No—they're treated as values, not called"
      },
      {
        "question": "Why might you choose Promise.allSettled() over Promise.all()?",
        "options": [
          "To collect only fulfilled values",
          "To stop once one fails",
          "To wait for all, regardless of failure",
          "To reject immediately on any failure"
        ],
        "answer": "To wait for all, regardless of failure"
      }
    ],
  },

  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race": {
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race",
    title: "Promise.race()",
    questions: [
      {
        "question": "What does Promise.race(iterable) return?",
        "options": [
          "A promise that resolves when all input settle",
          "A promise that settles with the first promise to settle",
          "A promise that fulfills only if the first promise fulfills",
          "A promise that rejects only if the first promise rejects"
        ],
        "answer": "A promise that settles with the first promise to settle"
      },
      {
        "question": "If the first promise to settle in the race rejects, what happens?",
        "options": [
          "The returned promise fulfills with undefined",
          "It rejects with that reason",
          "It continues waiting for a fulfill",
          "It rejects with an AggregateError"
        ],
        "answer": "It rejects with that reason"
      },
      {
        "question": "What happens when you pass an empty iterable to Promise.race()?",
        "options": [
          "It fulfills immediately with []",
          "It rejects immediately",
          "It remains pending forever",
          "It throws a TypeError"
        ],
        "answer": "It remains pending forever"
      },
      {
        "question": "Are non-promise values in the iterable considered in the race?",
        "options": [
          "No, they're ignored",
          "Yes, treated as immediately settled promises",
          "They cause a TypeError",
          "They cause the race to reject"
        ],
        "answer": "Yes, treated as immediately settled promises"
      },
      {
        "question": "Is Promise.race synchronous when all inputs are already settled?",
        "options": [
          "Yes, synchronous resolution",
          "No, always asynchronous",
          "Only synchronous if fulfilled",
          "It depends on engine"
        ],
        "answer": "No, always asynchronous"
      },
      {
        "question": "What value does Promise.race() fulfill with if the fastest settled item is a number?",
        "options": [
          "A promise with that number",
          "A promise with undefined",
          "A promise that rejects",
          "It wraps the number in an array"
        ],
        "answer": "A promise with that number"
      },
      {
        "question": "How can Promise.race() be used to implement a timeout?",
        "options": [
          "By passing a promise that never resolves",
          "By racing your task against a rejecting timer",
          "By using Promise.resolve on the task",
          "By awaiting with a timeout parameter"
        ],
        "answer": "By racing your task against a rejecting timer"
      },
      {
        "question": "Which static promise method waits for the first fulfillment only?",
        "options": [
          "Promise.race()",
          "Promise.all()",
          "Promise.any()",
          "Promise.allSettled()"
        ],
        "answer": "Promise.any()"
      },
      {
        "question": "What does Promise.race() return if the iterable contains a resolved promise and a pending one?",
        "options": [
          "Remains pending forever",
          "Fulfills with the resolved promise's value",
          "Rejects with pending promise error",
          "Throws immediately"
        ],
        "answer": "Fulfills with the resolved promise's value"
      },
      {
        "question": "Which statement is true about the timing of Promise.race()?",
        "options": [
          "It can settle synchronously with empty iterable",
          "It always settles after microtasks, even with non-empty array",
          "It delays by 1 second always",
          "It settles in the next event loop tick always"
        ],
        "answer": "It always settles after microtasks, even with non-empty array"
      },
      {
        "question": "What happens if the iterable contains a non-promise thenable?",
        "options": [
          "Ignored silently",
          "Treated as a promise and raced",
          "Converted to string",
          "Causes an error"
        ],
        "answer": "Treated as a promise and raced"
      },
      {
        "question": "How does Promise.race() differ from Promise.any()?",
        "options": [
          "race waits for all, any waits first settle",
          "race rejects on first settle, any ignores rejects",
          "race fulfills only, any rejects only",
          "They behave identically"
        ],
        "answer": "race rejects on first settle, any ignores rejects"
      }
    ]
  },

  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled": {
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled",
    title: "Promise.allSettled()",
    questions: [
      {
        "question": "What does Promise.allSettled(iterable) return?",
        "options": [
          "A promise that rejects on first rejection",
          "A promise that resolves when all input settle",
          "A promise that resolves only on all fulfillments",
          "A promise that races settle in any order"
        ],
        "answer": "A promise that resolves when all input settle"
      },
      {
        "question": "How does Promise.allSettled behave with an empty iterable?",
        "options": [
          "Rejects immediately",
          "Remains pending forever",
          "Fulfills immediately",
          "Fulfills asynchronously"
        ],
        "answer": "Fulfills immediately"
      },
      {
        "question": "When does the promise returned by Promise.allSettled settle?",
        "options": [
          "After first fulfillment",
          "After first rejection",
          "After all promises either fulfill or reject",
          "Never settles"
        ],
        "answer": "After all promises either fulfill or reject"
      },
      {
        "question": "What is the structure of each item in the result array?",
        "options": [
          "{ status: 'fulfilled', value } or { status: 'rejected', reason }",
          "Plain values or errors",
          "Nested promise objects",
          "Only values without status"
        ],
        "answer": "{ status: 'fulfilled', value } or { status: 'rejected', reason }"
      },
      {
        "question": "Does Promise.allSettled ever reject?",
        "options": [
          "Yes, on first rejection",
          "Yes, if all promises reject",
          "No, it always resolves",
          "Depends on environment"
        ],
        "answer": "No, it always resolves"
      },
      {
        "question": "Are the results in order of settlement or input order?",
        "options": [
          "Order of settlement",
          "Random order",
          "Input order",
          "Reverse order"
        ],
        "answer": "Input order"
      },
      {
        "question": "How are non-promise values treated?",
        "options": [
          "Ignored",
          "Cause TypeError",
          "Wrapped and considered fulfilled",
          "Treated as rejects"
        ],
        "answer": "Wrapped and considered fulfilled"
      },
      {
        "question": "If iterable contains no pending promises, when does it fulfill?",
        "options": [
          "Synchronously",
          "Asynchronously",
          "Immediately",
          "Never"
        ],
        "answer": "Asynchronously"
      },
      {
        "question": "Which use-case suits Promise.allSettled best?",
        "options": [
          "Stop on first failure",
          "Ensure all tasks complete, then inspect",
          "Get only fastest fulfillment",
          "Aggregate errors only"
        ],
        "answer": "Ensure all tasks complete, then inspect"
      },
      {
        "question": "What property does a rejected outcome object contain?",
        "options": [
          "error",
          "reason",
          "message",
          "status"
        ],
        "answer": "reason"
      },
      {
        "question": "What property does a fulfilled outcome object contain alongside status?",
        "options": [
          "result",
          "value",
          "data",
          "output"
        ],
        "answer": "value"
      },
      {
        "question": "Which static method behaves differently than Promise.allSettled when one promise rejects?",
        "options": [
          "Promise.all()",
          "Promise.resolve()",
          "Promise.reject()",
          "Promise.finally()"
        ],
        "answer": "Promise.all()"
      }
    ]

  },

  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any": {
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any",
    title: "Promise.any()",
    questions: [
      {
        "question": "What does Promise.any(iterable) return when at least one promise fulfills?",
        "options": [
          "A promise that resolves with an array of all fulfillments",
          "A promise that fulfills with the first fulfillment value",
          "A promise that waits for all to settle",
          "A promise that rejects with the first rejection reason"
        ],
        "answer": "A promise that fulfills with the first fulfillment value"
      },
      {
        "question": "What happens if all promises in the iterable reject?",
        "options": [
          "It fulfills with undefined",
          "It remains pending forever",
          "It rejects with an AggregateError",
          "It rejects with the last rejection reason"
        ],
        "answer": "It rejects with an AggregateError"
      },
      {
        "question": "How does Promise.any behave with an empty iterable?",
        "options": [
          "Fulfilled immediately",
          "Rejected immediately with AggregateError",
          "Pending forever",
          "Throws a TypeError"
        ],
        "answer": "Rejected immediately with AggregateError"
      },
      {
        "question": "Does Promise.any consider non-promise values in the iterable?",
        "options": [
          "No, they're ignored",
          "Yes, treated as immediately resolved promises",
          "They cause a TypeError",
          "They convert to string values"
        ],
        "answer": "Yes, treated as immediately resolved promises"
      },
      {
        "question": "Is Promise.any synchronous when promises are already settled?",
        "options": [
          "Yes, it resolves synchronously",
          "No, always asynchronous",
          "Only if at least one is fulfilled",
          "Depends on the engine"
        ],
        "answer": "No, always asynchronous"
      },
      {
        "question": "Which error type does Promise.any rejection use?",
        "options": [
          "TypeError",
          "SyntaxError",
          "AggregateError",
          "ReferenceError"
        ],
        "answer": "AggregateError"
      },
      {
        "question": "How are rejection reasons provided when Promise.any rejects?",
        "options": [
          "Single error",
          "AggregateError.errors array",
          "Array of values",
          "Undefined"
        ],
        "answer": "AggregateError.errors array"
      },
      {
        "question": "How does Promise.any differ from Promise.race()?",
        "options": [
          "race waits for all to settle, any stops early",
          "race reacts to first settle, any reacts to first fulfill",
          "They are equivalent",
          "any rejects on first reject, race fulfills on first fulfill"
        ],
        "answer": "race reacts to first settle, any reacts to first fulfill"
      },
      {
        "question": "Can Promise.any short‑circuit upon a rejection?",
        "options": [
          "Yes, it rejects on first rejection",
          "No, it ignores rejections until a fulfillment",
          "Yes, it resolves on first negative",
          "No, it waits for all to settle"
        ],
        "answer": "No, it ignores rejections until a fulfillment"
      },
      {
        "question": "What value does Promise.any fulfill with if the fastest promise fulfills with a number?",
        "options": [
          "An array with that number",
          "That number",
          "Undefined",
          "A wrapped Promise<number>"
        ],
        "answer": "That number"
      },
      {
        "question": "Which static method would you use to get the *first successful* result among many?",
        "options": [
          "Promise.race()",
          "Promise.all()",
          "Promise.any()",
          "Promise.allSettled()"
        ],
        "answer": "Promise.any()"
      },
      {
        "question": "What’s the purpose of Promise.any?",
        "options": [
          "Get an array of all errors",
          "Wait for all to settle",
          "Return first fulfill, ignore rejects",
          "Return first settle, fulfill or reject"
        ],
        "answer": "Return first fulfill, ignore rejects"
      }
    ]

  },

  // Hoisting:
  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var": {
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var",
    title: "",
    questions: [],
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#hoisting":{
      title: "",
      URL: "",
      questions: [],
    }
  },

  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions": {
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
    title: "Functions",
    questions: [],
    "":{
      URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_hoisting",
      title: "Function hoisting",
      questions: []
    }
  },

  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types": {
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types",
    title: "Grammar and types",
    questions: [],
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variable_hoisting": {
      URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variable_hoisting",
      title: "Variable hoisting",
      questions: []
    }
  },

  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let": {
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let",
    title: "let",
    questions: []
  },

  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const": {
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const",
    title: "const",
    questions: []
  },

  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function": {
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function",
    title: "function",
    questions: [],
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function#hoisting" : {
      URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function#hoisting",
      title: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function#hoisting",
      questions: []
    }
  },

  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class": {
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class",
    title: "class",
    questions: []
  },

  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import": {
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import",
    title: "import",
    questions: [],
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#hoisting" :{
      URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#hoisting",
      title: "Hoisting",
      questions: []
    }
  },

  "https://developer.mozilla.org/en-US/docs/Glossary/Hoisting": {
    URL: "https://developer.mozilla.org/en-US/docs/Glossary/Hoisting",
    title: "Hoisting",
    questions: []
  },

}