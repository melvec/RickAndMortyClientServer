const initialState = {
    myFavourates: [],
    allCharacters: []
}

const rootReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case 'ADD_FAV':
            console.log( 'ading fav');
            console.log(payload);
            return {
                ...state,
                 myFavourates: [...state.myFavourates, payload],
                allCharacters: [...state.allCharacters, payload]
            }
        case 'REMOVE_FAV':
            let copy = state.allCharacters.filter((character)=>{
                return character.id !== parseInt(payload);
            });
            return {
            ...state,    
            myFavourates: copy,
            allCharacters: copy
        }
        
        
        case 'FILTER':
            let copy2 = [...state.allCharacters];
            
            let filterGender = copy2.filter((character) => {
                return character.gender === payload
            });
            return {
                ...state,
                myFavourates: filterGender
            }

        case 'ORDER':
            let copy3 = [...state.allCharacters];
            // if(payload == 'A'){
            //     let ordered = copy3.sort((a,b) => a.id-b.id)
                
            // }
            // else{
            //     let ordered = copy3.sort((a,b) => b.id-a.id)
            // }


            return {
                ...state,
                myFavourates: copy3.sort((a,b)=> {
                    return payload === "A" ? a.id -b.id : b.id - a.id
                })
            }
       

        default: 
            return {...state}; // returns a copy of the received state
    }
}

export default rootReducer;