class Storage {
    static getItem(key){
        return null
    }
    static setItem(key, value){
        return null
    }
}

export const storage = 'undefined' !== typeof window ? localStorage : Storage;