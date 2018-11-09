var p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
       // resolve('ones')
                resolve('ones')
    }, 9000)
})

var p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // throw new Error('eeeee');
       // reject('two')
    resolve('two')
    }, 1000)
})

// var p3 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         reject(new Error('This is fine'));
//         //resolve('three');
//     }, 4000)
// })


p1.then(function(result){
    console.log("--------", result)
        // return p2.then(function(res){console.log(res)}).catch(function(err){console.log(err)})
        return p2
}).then(function(p2result){
    console.log("=========", p2result)
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject('three')
        }, 1000)
    });
}).then(function(p3result){
    console.log('*********', p3result)
}).catch(function(err){
    console.log("CaughtCathchError", err)
})