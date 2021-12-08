function max(bNumList){
    if(arguments.length==0){
        return null
    }
    let maxBigInt=0n;
    try{
        for(let i=0;i<arguments.length;i++){
            let item=arguments[i];
            if(typeof(item) !== "bigint") {
                    item=BigInt(item)
            }
            if(item>maxBigInt){
                maxBigInt=item
            }
            if(item > Number.MAX_SAFE_INTEGER || arguments[0]===""){
                throw error
            }
        }
    }catch(e){
        return "Big Error"
    }
    return(maxBigInt)
}
// ------------------------------------------------------------------------------------

console.log(max(1n,10n,5n))
console.log(max("10", 5n, 1))
console.log(max()) //null
console.log(max(2 ** 53 - 1))
console.log(max(2 ** 53))//big err
console.log(max("10" / 3))//big err
console.log(max("10" / 2))
console.log(max(10-12,10-10,10-11))
console.log(max(0n))
console.log(max(""))//big err
console.log(max("salam"))//big err