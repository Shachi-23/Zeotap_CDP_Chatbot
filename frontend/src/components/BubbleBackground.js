import React from 'react';

function BubbleBackground() {
  const bubbles = Array.from({ length: 40 }, (_, i) => {
    const size = 2 + Math.random() * 4;
    const side = Math.floor(Math.random() * 4);
    let animation, position;

    switch (side) {
      case 0:
        animation = 'bubble-rise-bottom';
        position = { bottom: '-5vh', left: `${Math.random() * 100}%` };
        break;
      case 1:
        animation = 'bubble-fall-top';
        position = { top: '-5vh', left: `${Math.random() * 100}%` };
        break;
      case 2:
        animation = 'bubble-move-left';
        position = { left: '-5vw', top: `${Math.random() * 100}%` };
        break;
      case 3:
        animation = 'bubble-move-right';
        position = { right: '-5vw', top: `${Math.random() * 100}%` };
        break;
    }

    return (
      <div
        key={i}
        className="bubble"
        style={{
          ...position,
          '--size': `${size}rem`,
          '--time': `${4 + Math.random() * 4}s`,
          '--delay': `${-1 * (2 + Math.random() * 4)}s`,
          '--animation': animation,
        }}
      />
    );
  });

  return <div className="bubble-background">{bubbles}</div>;
}

export default BubbleBackground;

