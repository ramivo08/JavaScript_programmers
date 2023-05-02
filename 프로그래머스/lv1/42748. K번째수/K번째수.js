function solution(array, commands) {
    var answer = [];
    for(var i=0; i<commands.length; i++){
        var comman = commands[i];
        console.log('comman:',comman);
        //slice,split,substr..?
       //commands[i].slice(array)
        
        //array.slice(comman).sort(comman[i]);
        //var slicearr= array.slice(comman).sort(a<b);
        
        var sliceArr= array.slice(comman[0]-1,comman[1]);
        console.log('sliceArr:', sliceArr);
        answer.push(sliceArr.sort((a,b) => a-b)[comman[2]-1]); //오름차순

        // commands[i].substr(array) //콘솔 찍었을때, 에러발생
        //commands[i].split(array) //콘솔 찍었을때, 에러발생
        //console.log('콘솔:',commands[i].slice());   

       // console.log('콘솔:', sliceArr.slice().sort((a,b) => a-b));
    }
    
    return answer;
}