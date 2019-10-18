const distictgData = [...new Set(data.map(x => x['date'].substring(0,10)))]

for(i = 0; i < distictgData.length; i++){

  result = data.filter(d => {
    var time = distictgData[i];                     
   if(d['date'].substring(0,10)===time){
    return (d);}});

  newData.push({
    title:distictgData[i],
    key:distictgData[i],
    data : result
    
  })
}
