// callback = using one function as parameter for the another function

function prosessData(data){
    console.log("Processing.............."+data);

}

function deletingData(data){
    console.log("Deleting...."+data);
}

function func(callback){
    callback("Surendra");
}

func(deletingData);

