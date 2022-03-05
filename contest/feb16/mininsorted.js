//Enter code here
function runProgram(input){
    input=input.split("\n");
    let n=+input[0];
    let arr =input[1].trim().split(" ").map(Number);
    console.log(p1(n,arr))
}

function p1(n,arr){
    let low=0;
    let high=n-1;
    if(arr[low]<=arr[high]){
        return 1
    } 
    while (low<=high){
        let mid =Math.floor(low+(high-low)/2);
        if(arr[mid]>arr[mid+1]){
            return arr[mid+1]
        } else if(arr[mid]<arr[mid-1]){
            return arr[mid]
        } else if(arr[low]<=arr[mid]){
            low=mid+1
        } else if(arr[mid]<=arr[high]) {
            high=mid-1
        }
    }
    return -1
}



process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });