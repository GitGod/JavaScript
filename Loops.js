let reduceData = 
data.reduce(function (allData, currentObject) {
  let currentDate = currentObject['date'].substring(0,10);
        if (!allData[currentDate]) {         
            allData[currentDate] = [];
        }
        allData[currentDate].push(currentObject);
        return allData;
    }, {});
let newData=[];
let newData2=[];

for (let i=0; i<Object.keys(reduceData).length; i++) {
  let x={
    title:Object.keys(reduceData)[i],
    key:Object.keys(reduceData)[i],
    data:reduceData[Object.keys(reduceData)[i]]
  }
 // console.log(x);
 newData.push(x);
}

Object.keys(reduceData).forEach(item => newData2.push(
{
  title:item,
  key:item,
  data:reduceData[item]
}

))


const newData3 = Object.keys(reduceData).map(item => {
  return {
  title:item,
  key:item,
  data:reduceData[item]
};
})

console.log(newData3)
console.log(newData2)
console.log(newData)
