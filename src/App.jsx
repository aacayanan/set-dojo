import {useState} from 'react';
import './App.css'
import Diamond from "./cards/Diamond.jsx";
import Circle from "./cards/Circle.jsx";
import Rectangle from "./cards/Rectangle.jsx";

const shapes = ["Diamond", "Circle", "Rectangle"];
const colors = ["red", "green", "blue"];
const shadings = ["open", "striped", "solid"];
const quantities = [1, 2, 3];

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const generateRandomCards = (num = 3) => {
    return Array.from({length: num}, () => ({
        shape: getRandomItem(shapes),
        color: getRandomItem(colors),
        shading: getRandomItem(shadings),
        quantity: getRandomItem(quantities),
    }));
};

function isValidSet(cards) {
    const attrs = ["shape", "color", "shading", "quantity"];
    const explanation = [];

    let valid = true;

    for (let attr of attrs) {
        const values = cards.map(card => card[attr]);
        const unique = new Set(values);
        if (unique.size === 2) {
            valid = false;
            explanation.push(`${attr}: 2 same, 1 different ❌`);
        } else {
            explanation.push(`${attr}: ${unique.size === 1 ? "all same" : "all different"} ✅`);
        }
    }

    return {
        isValid: valid,
        reason: explanation.join(" | ")
    };
}

function App() {
    const [cards] = useState(generateRandomCards());
    const [result, setResult] = useState('');

    const handleCheckSet = () => {
        const {isValid, reason} = isValidSet(cards);
        setResult(`${isValid ? "✅ Valid set" : "❌ Invalid set"} — | ${reason} |`);
    };

    const renderCard = (card, index) => {
        const props = {
            color: card.color,
            shading: card.shading,
            quantity: card.quantity
        };
        switch (card.shape) {
            case "Diamond":
                return <Diamond key={index} {...props} />;
            case "Circle":
                return <Circle key={index} {...props} />;
            case "Rectangle":
                return <Rectangle key={index} {...props} />;
            default:
                return null;
        }
    };

    return (
        <div className='p-4 flex flex-col items-center justify-center h-screen bg-gray-100 gap-8'>
            {cards.map(renderCard)}
            <div className='flex gap-8 w-96 justify-center items-center'>
                <button
                    onClick={handleCheckSet}
                    className='flex w-full justify-center bg-red-400 p-4 border-2 border-gray-600 rounded-lg shadow-md hover:bg-red-600'
                >
                    Invalid
                </button>
                <button
                    onClick={handleCheckSet}
                    className='flex w-full justify-center bg-green-400 p-4 border-2 border-gray-600 rounded-lg shadow-md hover:bg-green-600'
                >
                    Valid
                </button>
                <button
                    className='border-2 border-gray-600 rounded-lg shadow-md p-3 hover:bg-gray-400'
                    onClick={() => window.location.reload()}
                ></button>
            </div>
            {result && <div className="text-center text-lg mt-4 w-full">{result}</div>}
        </div>
    );
}

export default App;
