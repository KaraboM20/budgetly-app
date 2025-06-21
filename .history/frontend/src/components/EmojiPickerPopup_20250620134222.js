import React, { useState } from 'react';
import EmojiPicker from "emoji-picker-react";
import { LuImage, LuX } from 'react-icons/lu';

const EmojiPickerPopup = ({icon, onSelect}) => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div onClick={() => setIsOpen(true)}>
        <div></div>
      
    </div>
  )
}

export default EmojiPickerPopup
