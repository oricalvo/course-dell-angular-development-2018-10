import {ObjectPool} from "./objectPool";

const pool = ObjectPool();

const ori = {
    id: 1,
    name: "Ori"
};

const likeOri = {
    id: 1,
    name: "Ori"
};

pool.add(ori);
pool.add(ori);
pool.add(ori);

const res = pool.pull();
console.log(res == ori);

console.log(pool.pull() == null);
