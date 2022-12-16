import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    //+ Hooks
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( newCategory) => {
        if ( categories.includes(newCategory) ) return; // Para que no se repita la lista
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory onNewCategory={ onAddCategory } />

            {/* Listado de Gif */}
            {
            categories.map( (category)  => (
                <GifGrid 
                    key={ category } 
                    category={ category }
                />
            ))
            }
                {/* Gif item */}
        </>
    )
}