import React from 'react'
import CharacterItem from './Character_item'
import Spinner from '../ui/Spinner'
const characterGrid = ({items,isLoading}) => {
    return isLoading ? (<Spinner/>):(<section className="cards">
        {items.map((it)=>(
            <CharacterItem item={it} key={it.id}/>

        ))}


    </section>)
}

export default characterGrid
