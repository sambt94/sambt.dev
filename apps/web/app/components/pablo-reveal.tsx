// ABOUTME: Easter egg component that reveals a photo of Pablo the dog.
// ABOUTME: Inline "Pablo" link triggers the image reveal with smooth animation.

import { useState } from 'react';

export function PabloReveal() {
  const [show, setShow] = useState(false);

  return (
    <>
      <a
        href="#"
        onClick={e => {
          e.preventDefault();
          setShow(!show);
        }}
        className="text-copy underline decoration-faint/40 underline-offset-[3px] hover:decoration-copy cursor-pointer transition-all duration-200"
      >
        Pablo
      </a>
      .
      <span
        className={`block overflow-hidden transition-all duration-[600ms] ease-smooth ${
          show ? 'max-h-[400px] mt-sm' : 'max-h-0 mt-0'
        }`}
      >
        <img
          src="/images/pablo.jpg"
          alt="Pablo the golden retriever"
          className="w-full rounded-lg"
        />
      </span>
    </>
  );
}
