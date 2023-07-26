const initialState = {
    myFavourates: [],
   // allCharacters: []
}

const rootReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case 'ADD_FAV':
            console.log( 'ading fav');
            console.log(payload);
            return {
                ...state,
                myFavourates: [...state.myFavourates, payload],
               // allCharacters: [...state.allCharacters, payload]
            }
        case 'REMOVE_FAV':
            let copy = state.myFavourates.filter((character)=>{
                return character.id !== parseInt(payload);
            });
            return {myFavourates: copy,
            //allCharacters: copy
        }
        
        
        // case 'FILTER':
        //     let copy2 = [...state.allCharacters];
            
        //     let filterGender = copy2.filter((character) => {
        //         return character.gender === payload
        //     })

       

        default: 
            return {...state}; // returns a copy of the received state
    }
}

export default rootReducer;