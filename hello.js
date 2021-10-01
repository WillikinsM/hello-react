const root = document.getElementById("root");

//const hello = <div className="hellos">hello Worlds </div>;

const hello = <>
  <em>Hello</em> <strong>Worlds</strong>
</>

//React.createElement("div", {
  //children: "hello Wordld",
  //className: "divs",
//});

ReactDOM.render(hello, root);

//var hello = document.createElement("div");
//hello.className = "divs"
//hello.textContent = "Hello World"
//root.appendChild(hello);
