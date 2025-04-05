setInterval(() => {
  if (Math.random() < 0.5) {
    console.error("Hello, World! (stderr)");
  } else {
    console.log("Hello, World! (stdout)");
  }
}, 1000);
