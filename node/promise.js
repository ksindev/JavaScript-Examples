let error = false;

const doAsyncTask = (x) => {

    let tn = ( x || 'first' );

    console.log('Async Task Called ' + tn + ' time.');

    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            
            console.log('Async task completed. ');

            if (error) {
                reject(new Error('This is fine' + tn));
            } else {
                resolve(tn);
            }
            error = true;
        }, 2000);
    });
}


//normal promise call back
// doAsyncTask().then(
//     (val) => { console.log('Task was successfull. '); },
//     (err) => { console.log('Task Errored'); }
// );


//cahained callback

doAsyncTask().then(
    (val) => {  console.log('Then called ' + val); return  doAsyncTask('second');}
).then(
    (val2) => { console.log('Then called ' + val2); console.log('Task was successfull. '); }
).catch(
    (error) => { console.log('Task Errored', error);}
);

console.log('Last Line.');