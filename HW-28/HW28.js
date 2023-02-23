class Deferred {
#arrayFunc=[];
 then(func) {
    this.#arrayFunc.push(func);

}
resolve(str){
    for(let func of this.#arrayFunc ){
        str=func(str);
    }
    this.#arrayFunc.length=0;
}
}



const d = new Deferred()
d.then(function(res){ console.log("1 ", res); return "a"; });
 d.then(function(res){ console.log("2 ", res); return "b"; });
 d.then(function(res){ console.log("3 ", res); return "c"; });
d.resolve('hello');  

