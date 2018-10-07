import {getObjectId} from "./objectId";

export function ObjectPool() {
    const map = {};

    function add(obj) {
        const id = getObjectId(obj);
        if(map[id]) {
            return;
        }

        map[id] = obj;
    }

    function pull() {
        for(let key in map) {
            const obj = map[key];
            delete map[key];
            return obj;
        }

        return null;
    }

    return {
        add,
        pull,
    }
}

