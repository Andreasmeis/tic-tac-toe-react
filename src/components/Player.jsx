import { useState } from "react"

export default function Player({ initName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initName)
    const [isEditing, setIsEditing] = useState(false)

    function handleEditClick() {
        setIsEditing((editing) => !editing);

        if (isEditing) {
            onChangeName(symbol, playerName)
        }
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {isEditing ?
                    <input type="text" required value={playerName} onChange={(event) => setPlayerName(event.target.value)} /> :
                    <span className="player-name">{playerName}</span>
                }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{!isEditing ? 'Edit' : 'Save'}</button>
        </li>
    )
}