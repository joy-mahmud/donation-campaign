const getDonateItems = ()=>{
    const storedDonateItem = localStorage.getItem('donations')
    if(storedDonateItem){
        return JSON.parse(storedDonateItem)
    }
    return []
}

const saveDonateItems = (id) =>{
    const storedDonateItems = getDonateItems()
    const exists = storedDonateItems.find(itemid => itemid===id)
    if(!exists){
        storedDonateItems.push(id)
        localStorage.setItem('donations',JSON.stringify(storedDonateItems))
    }
}
export {getDonateItems,saveDonateItems}