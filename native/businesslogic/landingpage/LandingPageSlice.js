import store from './../../../libs/flux/store';

export const componentKey = "LANDING_PAGE";

const { actions } = store.reducerManager.add({
    key: componentKey,
    addedReducers: {
        updateRandomString: (state, action) => {
            state.randomString = action.payload;
        },
    }, 
    initialReducerState: {
        randomString: null
    }
});

export const { updateRandomString } = actions;
