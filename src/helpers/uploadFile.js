


export const uploadFile = async(file) => {

  try {
        const formData = new FormData();
        formData.append('upload_preset', 'react-journal');
        formData.append('file', file);
        const res = await fetch(' https://api.cloudinary.com/v1_1/xxavierargentino/image/upload', {
            method: 'POST',
            body: formData
        })
        if(!res.ok) throw new Error("No se pudo subir la imagen");

        const data = await res.json();        
        return data.secure_url;

  } catch (error) {
    console.log(error.message);
    throw new Error(error.message)
  }
}
