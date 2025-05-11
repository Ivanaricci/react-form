import { useState } from 'react'

const initialArticoli = ["Titolo1", "Titolo2", "Titolo3", "titolo4", "Titolo5"]

function App() {

    const [newArticle, setNewArticle] = useState("");
    const [articoli, setArticoli] = useState(initialArticoli)

    const addArticle = (e) => {
        e.preventDefault();
        console.log(`il nuovo articolo è ${newArticle}`)  // 👈🏻 funziona 
        setArticoli([...articoli, newArticle]); // 👈🏻 Non funziona
    }


    return <>

        <div className="container">
            <h1>Articoli</h1>
            <ul className="list-group mb-4">
                {initialArticoli.map((articolo, index) => (
                    <li key={index} className="list-group-item">{articolo}</li>
                ))}
            </ul>
            <form onSubmit={addArticle}>
                <div className='input-group mb-3'>
                    <input value={newArticle} onChange={(e) => {
                        setNewArticle(e.target.value);
                    }} type="text" className='form-control' placeholder='Nuovo articolo' />
                    <button className="btn btn-primary">Aggiungi</button>
                </div>
            </form>
        </div>

    </>

}

export default App
