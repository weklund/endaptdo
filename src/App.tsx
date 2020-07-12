import React, {useState} from 'react'
import './App.css'

const App: React.FC = () => {
    const [name, setName] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [deadline, setDeadline] = useState<string>('')
    const [maxRespondents, setMaxRespondents] = useState<number>(0)

    return(
        <div className="App">
            <header className="App-header">
                <h1>Create your event!</h1>
                <input type="text" placeholder="Event name" value={name} onChange={(event) => setName(event.target.value)}/>

                <textarea value={description} onChange={(event) => setDescription(event.target.value)} rows={3} />

                <input type="text" placeholder="Event Deadline" value={deadline} onChange={(event) => setDeadline(event.target.value)}/>

                <input type="number" placeholder="Max # of respondents" value={maxRespondents} onChange={(event) => setMaxRespondents(parseInt(event.target.value))}/>


                <button onSubmit={() => console.log('SUBMITTING')}>Create Event</button>
            </header>

        </div>
    )
}


export default App
