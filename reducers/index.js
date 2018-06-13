export default (state = [], action) => {
	switch (action.type) {
        case 'ADD_ALARM': {
            return [
                ...state.alarms,
                {
                    id: 0,
                    title: action.title,
                    songRepeat: action.songRepeat
                }
            ]
        }
		default:
			return state
	}
};