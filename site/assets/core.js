/* eslint-disable no-console */
console.log("Hello, universe!");
console.log("process.env.EXAMPLE_BUILD_VAR:", process.env.EXAMPLE_BUILD_VAR);

fetch("/api/example")
  .then((res) => res.json())
  .then((json) => {
    console.log("process.env.EXAMPLE_API_VAR:", json);
  });
/* eslint-enable no-console */
