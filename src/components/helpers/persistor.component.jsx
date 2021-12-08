import {storage} from './storage.component'
import React, { useEffect, useState } from 'react'

export const usePersistedState = (
    key,
    defaultValue
) => {
    const storageData = storage.getItem(key);
    const [state, setState] = useState(() => storageData ? JSON.parse(storageData) : defaultValue)

    useEffect(() => {
        storage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState]
}

