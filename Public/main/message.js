window.addEventListener("resize", () => {
  window.parent.postMessage(
    {
      code: "NewsTemplate",
      innerHeight: document.body.offsetHeight,
    },
    "*"
  );
});
console.log(document.body.clientHeight);
window.addEventListener(
  "message",
  function (event) {
    console.log(event);
  },
  false
);
if (window && window.parent) {
  window.parent.postMessage(
    {
      code: "NewsTemplate",
      innerHeight: document.body.offsetHeight,
    },
    "*"
  );
}
