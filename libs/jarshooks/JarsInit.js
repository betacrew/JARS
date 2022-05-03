import React, { useEffect } from 'react';
import store from './../../libs/flux/store';

export default function useJarsInit(key) {
    useEffect(() => {
        return () => {
            store.reducerManager.remove(key);
            store.sagaManager.removeSaga(key);
          };
    }, []);
}