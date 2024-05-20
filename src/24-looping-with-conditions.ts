export {};

function onlyTheAces(arr:String[]) {
    var aceArr:String[] = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i]==="Ace"){
            aceArr.push(arr[i]);
        }
    }
    return aceArr;
}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
