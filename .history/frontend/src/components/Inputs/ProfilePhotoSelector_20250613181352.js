import React from 'react'

const ProfilePhotoSelector = ({image, setImage}) => {
    const inoutRef = useRef(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files(0);
        if (file) {
            setImage(file);

            const preview = URL.createObjectURL(file);
            setPreviewUrl
        }
    }
  return (
    <div>
      <h1>ProfilePhotoSelector</h1>
    </div>
  )
}

export default ProfilePhotoSelector
