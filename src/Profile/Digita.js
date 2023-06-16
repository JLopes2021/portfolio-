import { useEffect, useState } from "react";

export function EscreverTela(props){
    const [text, setText] = useState("");

    const escreverNaTela = (text, i = 0) => {
        if(i <text.lenght){
            setText(text.slice(0, i + 1));
            setTimeout(() => escreverNaTela(text, i + 1), 100);
        }
    };

    useEffect(()=> {
        setTimeout(() => escreverNaTela(props.text));
    }, []);

    return(
        <div>
            {text}
        </div>
    )
}

export default EscreverTela