import { IoLogoOctocat } from "react-icons/io5";
import { useEffect, useState } from 'react';

const Cursor = () => {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState(0);
  const [deviceType, setDeviceType] = useState('');
  const [isClicking, setIsClicking] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  // check if it is a touch device
  const isTouchDevice = () => {
  	try {
  	document.createEvent('TouchEvent');
  	setDeviceType('touch');
  	return true;
  	} catch (e) {
  	setDeviceType('mouse');
  	return false;
  	}
  };

  const move = (e) => {
	const touchEvent = e.touches ? e.touches[0] : null;
	const x = !isTouchDevice() ? e.clientX : touchEvent?.clientX || 0;
	const y = !isTouchDevice() ? e.clientY : touchEvent?.clientY || 0;

	setCursorX(x);
	setCursorY(y);

	// Set the cursor border's position directly
	const cursorBorder = document.getElementById('cursor-border');
	if (cursorBorder) {
	cursorBorder.style.left = `${x}px`;
	cursorBorder.style.top = `${y}px`;
	  }
  };

  const handleMouseDown = () => {
  	setIsClicking(true);
  };

  const handleMouseUp = () => {
  	setIsClicking(false);
  };

  const handleButtonHover = (hovered) => {
  	setButtonHovered(hovered);
  };

  useEffect(() => {
  	document.addEventListener('mousemove', move);
  	document.addEventListener('touchmove', move);
  	document.addEventListener('mousedown', handleMouseDown);
  	document.addEventListener('mouseup', handleMouseUp);

  	return () => {
  	document.removeEventListener('mousemove', move);
  	document.removeEventListener('touchmove', move);
  	document.removeEventListener('mousedown', handleMouseDown);
  	document.removeEventListener('mouseup', handleMouseUp);
  	};
  }, []);

  return (
    <div>
      <IoLogoOctocat
        className="cursor"
        style={{ left: `${cursorX}px`, top: `${cursorY}px` }}
    />
    </div>
  )
}

export default Cursor