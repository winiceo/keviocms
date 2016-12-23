
const AV = require('leanengine')
var APP_ID = '1e2a1f8CBN4mliM17JaXnHHg';
var APP_KEY = 'z4mQ2xaRHeXP2RVCaezCSHNF';
AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

    var note = AV.Object.createWithoutData('test', '');
    // 设置名称
    note.set("title",{1:4444});

 var   p1=  note.save()

// We define what to do when the promise is resolved/fulfilled with the then() call,
// and the catch() method defines what to do if the promise is rejected.
p1.then(

    function(val) {
         console.log(val)
    },function(error){

        console.log(error)
        throw 3333;
    })
    .catch( function(reason) {
            console.log('Handle rejected promise ('+reason+') here.');
     });
