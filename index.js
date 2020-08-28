// import _ from "lodash";
// import printMe from "./print.js";
import "./styles.css";
// import print from "./print";

class Car {
  constructor() {}
}

function component() {
  return Promise.all([
    import(/* webpackChunkName: "lodash" */ "lodash"),
    import(/* webpackChunkName: "print" */ "./print.js"),
    // import(/* webpackChunkName: 'say' */ './say.js' )
  ]).then(data => {
    const [_, printMe] = data;
    var element = document.createElement("div");
    var btn = document.createElement("button");

    element.innerHTML = _.join(["Hello", "webpack"], " ");

    btn.innerHTML = "Click me and check the console123112311!";
    btn.onclick = () => {
      // (printMe.default || printMe)()
      const p = printMe.default || printMe
      // const s = say.default || say
      p()
      // s('go go go')
    };

    element.appendChild(btn);

    return element;
  }).catch(err =>  console.log(err))
}
// let element = component(); // 存储 element，以在 print.js 修改时重新渲染
// document.body.appendChild(element);
// document.body.appendChild(component());
let element = null
component().then(ele => {
  element = ele
  document.body.appendChild(element);
})

if (module.hot) {
  module.hot.accept("./print.js", function() {
    console.log("Accepting the updated printMe module!");
    // printMe();
    document.body.removeChild(element);
    // element = component(); // Re-render the "component" to update the click handler
    component().then(ele => {
      element = ele
      document.body.appendChild(ele);
    })
    
  });

  // module.hot.accept();
}
