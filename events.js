
function EventEmitter(){
    let events = {};

    function addEvent(str, fn){
        events = events || {};
        events[str] = events[str] || [];

        events[str].push(fn);
    }

    function raiseEvent(str){
        if (events[str]){
            events[str].forEach( fn => fn());
        }

    }

    function removeEvent(str, fn){
        let index = events[str].findIndex( function => function = fn);

        events[str].splice(index, 1);
    }
}