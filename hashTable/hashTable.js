// set / get - hash table

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    // set

    // accepts a key and a value
    // hashes the key
    // stores the key-value pair in the hash table array via separate chaining.
    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    // get

    // accepts a key
    // hashes the key
    // retrieves the key value pair in the hash table
    // key is not found, return undefined
    get(key) {
        let index = this._hash(key);
        let ret = this.keyMap[index];
        if (!ret) return undefined;
        for (let i = 0; i < ret.length; i++) {
            if (ret[i][0] === key) {
                return ret[i][1];
            }
        }

        // let index = this._hash(key);
        // if (!this.keyMap[index]) return undefined;
        // for (let i = 0; i < this.keyMap[index].length; i++) {
        //     if (this.keyMap[index][i][0] === key) {
        //         return this.keyMap[index][i][1];
        //     }
        // }

    }

    keys() {
        let resultArray = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!resultArray.includes(this.keyMap[i][j][0])) {
                        resultArray.push(this.keyMap[i][j][0]);
                    }
                }
            }
        } return resultArray;
    }

    values() {
        let resultArray = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!resultArray.includes(this.keyMap[i][j][1])) {
                        resultArray.push(this.keyMap[i][j][1]);
                    }
                }
            }
        } return resultArray;
    }


}

let ht = new HashTable(4);
ht.set('where the rock', 'hes cooking');
ht.set('u can', 'see me');
ht.set('hrikk', 'ssamma');
ht.set('weinda', 'weinda weiiiii');
ht.set('weinda', 'aaaaa');
ht.set('weinda', 'bbbbbb');
console.log(ht.keyMap);
// console.log('final', ht.get('where the rock'));
console.log('val>>>>>>>>', ht.values());
console.log('keys>>>>>>>>', ht.keys());