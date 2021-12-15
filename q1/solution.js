let simple={
  
}
function findSimple(...numbers){
      let similaritRate=0
      for(let key in numbers){
          for(let value of numbers[key]){
                    if(simple[value]){
                    simple[value][key] ? simple[value][key]++:simple[value].push(1)

                    }
                    else{
                     simple[value]=[1]
                    }
          }
      }
      for (let key in simple){
         if (simple[key].length === numbers.length){
             similaritRate+= Math.min(...simple[key])
         }
      }
      return similaritRate
}
console.log(findSimple('aabcc','adcaa'))//3
console.log(findSimple('aabcc','adcaa','abc'))//2