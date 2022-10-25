function Button({ name, handleClick }) {

  switch (name) {
    case "get":
      return <GetButton/>

    case "delete":
      return <DeleteButton/>

  }
  return <h1>Hello</h1>

}

function GetButton() {
  return  <button onClick={() => console.log("get")}>GET</button>
}

function DeleteButton() {
  return  <button onClick={() => console.log("delete")}>DELETE</button>
}

export default Button;