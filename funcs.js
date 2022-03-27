export function checkIncludes(itemString, list){
    let result = false
    list.forEach( item => {
        try {
            if(itemString.includes(item)){
                result = true
            }
        } catch (error) {
            if(item.test(itemString)){
                result = true
            }
        }
    })

    return result
}