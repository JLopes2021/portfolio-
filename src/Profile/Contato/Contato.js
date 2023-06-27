import React from "react";
import './Contato.css';

export default function Contact() {
  return (
    <div className="container_contact">
      <h2>Entre em contato</h2>
      <div className="links">
        <a href="https://github.com/seu-usuario-github" target="_blank" rel="noopener noreferrer">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEib-KfvEL-ihlbZKBuzc_u6RMnjVDxlNcUn0siiH3iJJ1vKPfj5fYa4B6PsL6u9Nl5tJMz5iLqT0JfSqB7J-rfYuqTKoX1mAgFEyc9zvWCRX_l87SQQg6ebwVpsRh3yfTV5cP5LHL8ZYr-Vy-VLH3TvghxACXkwrt8ggA3g2Pl-Zb9GmgQVOjjDZGZ2KQ/s320/kisspng-github-social-media-computer-icons-logo-android-5b348490ab20f1.548940641530168464701.png" alt="GitHub Logo" />
          Desenvolvedor Full Stack
        </a>
        <a href="https://www.linkedin.com/in/seu-perfil-linkedin" target="_blank" rel="noopener noreferrer">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlqsGlFVT1yS-5MLd9WRmGr1OW6kYMfFhc1okQGJM3n4IzcIl1Z3zxpmOX853dw57Ohopr0vSk_p9r8vsfNfnWHTvn4eBSo-4JUwYv426ouKEPtas5FemvlzwZFFkQqVEG7CrF_AjrANMYsq7ANr5JYKYuSXTxtLcPtXsva3dnx-6JPgCUMxK0yKAu6w/s320/linkedin.png.png" alt="LinkedIn Logo" />
          Jefferson Lopes
        </a>
      </div>
    </div>
  );
}
