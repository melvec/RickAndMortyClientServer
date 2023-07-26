const initialState = {
    myFavourates: [],
}

const rootReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case 'ADD_FAV':
            console.log( 'ading fav');
            console.log(payload);
            return {
                ...state,
                myFavourates: [...state.myFavourates, action.payload]}
        case 'REMOVE_FAV':
            let copy = state.myFavourates.filter((character)=>{
                return character.id !== parseInt(payload);
            });
            return {myFavourates: copy}
        default: 
            return {...state}; // returns a copy of the received state
    }
}

export default rootReducer;