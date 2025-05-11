import { useState } from 'react'

const articoli = ["Titolo1", "Titolo2", "Titolo3", "titolo4", "Titolo5"]

function App() {
    return <>

        <div className="container">
            <h1>Articoli</h1>
            <ul className="list-group">
                {articoli.map((articolo, index) => (
                    <li key={index} className="list-group-item">{articolo}</li>
                ))}
            </ul>
            <form>
                <div className='input-group mb-3'>
                    <input type="text" className='form-control' placeholder='Nuovo articolo' />
                </div>
            </form>
        </div>

    </>

}

export default App
