export default function createSagaManager(sagaMiddleware) {
    let sagas = [];
    let emitSagaAdditionListener = null;

    return {
        addSaga: function(name, saga) {
            if (sagas[name]) {
                return;
            }
            sagas = { ...sagas, [name]: saga };
            if (emitSagaAdditionListener) {
                emitSagaAdditionListener(saga);
            }
        },
        removeSaga: function(name) {
            // TODO: Implement this function
        },
        setAddSagaListener: function(listener) {
            emitSagaAdditionListener = listener;
        }
    }
}