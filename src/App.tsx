import { useState, useEffect, FormEvent, ChangeEvent, useRef } from "react";
import * as C from "./App.styles";
import * as Photos from "./services/photos";
import { Photo } from "./types/Photo";
import { PhotoItem } from "./components/PhotoItem";
import { symlink } from "fs";
import { isNullOrUndefined, isString } from "util";

const App = () => {
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("Nenhum arquivo!");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      setPhotos(await Photos.getAll());
      setLoading(false);
    };
    getPhotos();
  }, []);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get("image") as File;
    if (file && file.size > 0) {
      setUploading(true);
      let result = await Photos.insert(file);
      setUploading(false);

      if (result instanceof Error) {
        alert(`${result.name} - ${result.message}`);
      } else {
        let newPhotoList = [...photos];
        newPhotoList.push(result);
        setPhotos(newPhotoList);
        setFileName("Nenhum arquivo!");
      }
    }
  };

  const handleDelete = async (photo: Photo) => {
    Photos.deletePhoto(photo).then(() => {
      const newPhotos = photos.filter((item) => item.url !== photo.url);
      setPhotos(newPhotos);
    });
  };

  const handleFileInput = (e: ChangeEvent) => {
    console.log(inputRef.current?.value);

    let arrayFile = inputRef.current?.value.split("\\");
    let nameFile = arrayFile?.reverse()[0];
    // .filter(
    //   (item, index, array) => index === array.length - 1
    // );

    // if (typeof nameFile !== undefined) {
    setFileName(nameFile ? nameFile : "Nenhum arquivo!");
    // } else {
    //   setFileName("Nenhum arquivo!");
    //   return;
    // }
  };
  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de Fotos</C.Header>

        <C.UploadForm method="POST" onSubmit={handleFormSubmit}>
          <div className="file-group">
            <label htmlFor="file">Escolher arquivo</label>
            <div className="filename">{fileName}</div>
            <input
              type="file"
              name="image"
              id="file"
              className="inputfile"
              onChange={handleFileInput}
              ref={inputRef}
            />
          </div>
          <div className="submit-group">
            {/* {uploading && "Enviando..."} */}
            <input type="submit" value="Enviar" />
          </div>
        </C.UploadForm>

        {loading && (
          <C.ScreenWarning>
            <div className="emoji">🤚🏻</div>
            <div>Carregando...</div>
          </C.ScreenWarning>
        )}

        {!loading && photos.length > 0 && (
          <C.PhotoList>
            {photos.map((item, index) => (
              <PhotoItem
                key={index}
                url={item.url}
                name={item.name}
                handleDelete={handleDelete}
              />
            ))}
          </C.PhotoList>
        )}

        {!loading && photos.length === 0 && (
          <C.ScreenWarning>
            <div className="emoji">😔</div>
            <div>Não há fotos cadastradas!</div>
          </C.ScreenWarning>
        )}
      </C.Area>
    </C.Container>
  );
};

export default App;
