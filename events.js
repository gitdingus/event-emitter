let EventEmitter = (function (){
    let events = {};

    function addEvent(str, fn){
        events = events || {};
        events[str] = events[str] || [];

        events[str].push(fn);
    }

    function raiseEvent(str, ...arg){
        if (events[str]){
            events[str].forEach( fn => fn(...arg));
        }

    }

    function removeEvent(str, fn){
        let index = events[str].findIndex( func => func === fn);

        events[str].splice(index, 1);
    }

    return { addEvent, raiseEvent, removeEvent }
})();

export { EventEmitter };
