import  React  from  'react';

const  GenerateQuote = ({selectQuote}) => {
    return (
        <div>
        <button onClick={selectQuote}>Get new character</button>
        </div>
    );
};

export  default  GenerateQuote;