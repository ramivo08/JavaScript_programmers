function solution(name, yearning, photo) {
    var answer = [];
//    console.log(photo);
    //var result=0;
//순회 , 배열비교- toString/indexOf/includes, 문자열과 숫자의 비교?
//console.log("name:",name);
    
//    name = name.toString();
//    console.log("name:", name);

    for(var i=0; i<photo.length; i++){  
        console.log("i: ", photo[i]); 
      //  var photo = photo[i];
        var result=0;
        for(var j=0; j<name.length; j++){
          //  console.log('yearning:',yearning[j]);
           
            if(photo[i].includes(name[j])){
           // if(name === photo[i]){
               //answer+= result;
         
                result += yearning[j]
               // answer += yearning.toString();
                console.log("result:",result);
              
          }
            
        }//j for
        
        answer.push(result);
         console.log("answer: ",answer);
        
   }//i for
   
    return answer;
}