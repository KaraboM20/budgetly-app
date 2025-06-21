import React, { useState } from 'react';
import EmojiPicker from "emoji-picker-react";
import { LuImage, LuX } from 'react-icons/lu';

const EmojiPickerPopup = ({icon, onSelect}) => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
    <div onClick={() => setIsOpen(true)}>
        <div>
            {icon ? (
                <img src={icon} alt="Icon" />
            ) : (
                <LuImage />
            )}
        </div>

        <p>{icon ? "Change Icon" : "Pick Icon"}</p>
      
    </div>

    {isOpen && (
        <div>
        <button onClick={() => setIsOpen(false)}>
        <LuX />
        </button>

        <EmojiPicker
        open={isOpen}
        onEmojiClick={{emoji) => onSelect(emoji?.imageUrl || "")}
        />
        </div>
    )}
    </div>
  )
}

export default EmojiPickerPopup
