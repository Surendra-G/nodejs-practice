async function test (){
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let result = await response.json();
    console.log(result);

}
test();