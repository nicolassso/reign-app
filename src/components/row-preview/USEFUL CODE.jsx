// USEFUL CODE 

// FROM ROW-PREVIEW


    const likedRows = []

    const setLikedRows = (a) => {
        const existingRow = likedRows.map(
            likedRow => likedRow.id===a.id
        )
        if(!existingRow){
            console.log(likedRows.length)
        }

        return likedRows.push(a)
    }



     const existingRow = likedRows.map(
         likedRow => likedRow.id === a.id
     )
     if(!existingRow){
         return likedRows.push(a)
     }
     else{
         return(
         (likedRows.length<2)
         ? likedRows = []
         : likedRows = (
             likedRows.filter(likedRow => 
                 likedRow.id!==a.id
                 ))
         )
     }  
