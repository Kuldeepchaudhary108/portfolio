import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) {
      return undefined;
    }

    const moveCursor = (event) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
      cursor.style.transform = 'translate(-50%, -50%)';
    };

    const setHoverState = (hovered) => {
      cursor.style.width = hovered ? '60px' : '24px';
      cursor.style.height = hovered ? '60px' : '24px';
      cursor.style.backgroundColor = hovered ? '#FBFF48' : '#fff';
      cursor.style.mixBlendMode = hovered ? 'normal' : 'difference';
      cursor.style.border = hovered ? '2px solid black' : 'none';
    };

    const handlePointerOver = (event) => {
      if (event.target.closest('.cursor-hover, a, button, input, textarea')) {
        setHoverState(true);
      }
    };

    const handlePointerOut = (event) => {
      if (event.target.closest('.cursor-hover, a, button, input, textarea')) {
        setHoverState(false);
      }
    };

    document.addEventListener('pointermove', moveCursor);
    document.addEventListener('pointerover', handlePointerOver);
    document.addEventListener('pointerout', handlePointerOut);

    return () => {
      document.removeEventListener('pointermove', moveCursor);
      document.removeEventListener('pointerover', handlePointerOver);
      document.removeEventListener('pointerout', handlePointerOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      id="cursor"
      className="pointer-events-none fixed z-[9999] hidden h-6 w-6 rounded-full border-2 border-black bg-white lg:block"
    />
  );
}
