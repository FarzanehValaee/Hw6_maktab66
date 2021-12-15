function sortWithTree(arr){
          sortTree=[]
          var indexes = []
          i = -1;
          while ((i = arr.indexOf(-1, i+1)) != -1){
              indexes.push(i);
          }
          arr.sort()
          arr.splice(0,indexes.length)
          for(let value of indexes){
             arr.splice(value,0,-1)
          }
          return arr
}
a=[-1,150,190,-1,-1,160,180]
console.log(sortWithTree(a))
