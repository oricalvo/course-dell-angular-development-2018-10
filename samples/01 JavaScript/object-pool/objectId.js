const MAGIC_FIELD = "####id####";
let nextId = 1000;

export function getObjectId(obj) {
    let id = obj[MAGIC_FIELD];
    if(!id) {
        id = obj[MAGIC_FIELD] = ++nextId;
    }

    return id;
}
