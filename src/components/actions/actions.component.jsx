window.rowsLiked = []

const addFavToFaves = (row) => {
    const existingRow = window.rowsLiked.find(
        rowLiked => rowLiked.id === row.id
    )

    if(!existingRow){
        return window.rowsLiked.push(row)
    }else{
        return(
        (window.rowsLiked.length<2)
        ? window.rowsLiked = []
        : window.rowsLiked = window.rowsLiked.filter(rowLiked => rowLiked.id!==row.id))
    }
}

export const addFaves = (row) =>{

    addFavToFaves(row)

    console.log(window.rowsLiked)

    return window.rowsLiked


}