import React, { useState, useEffect } from "react";

const TypewriterEffect = () => {
  const [text, setText] = useState("");
  const fullText = "Digite seu texto aqui...";
  const typingSpeed = 300; // velocidade da escrita em milissegundos

  useEffect(() => {
    let currentIndex = 1;
    let timeout;

    const addNextCharacter = () => {
      setText((prevText) => prevText + fullText[currentIndex]);
      currentIndex++;

      if (currentIndex < fullText.length) {
        timeout = setTimeout(addNextCharacter, typingSpeed);
      }
    };

    timeout = setTimeout(addNextCharacter, typingSpeed);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return <div style={{ backgroundColor: "black", color: "white" }}>{text}</div>;
};

export default TypewriterEffect;
