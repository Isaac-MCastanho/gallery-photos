import * as C from "./styles";
import { Photo } from "../../types/Photo";

type Props = {
  url: string;
  name: string;
  handleDelete: ({ url, name }: Photo) => void;
};

export const PhotoItem = ({ url, name, handleDelete }: Props) => {
  return (
    <C.Container>
      <img src={url} alt={name} />
      {name}
      <div className="delete" onClick={() => handleDelete({ url, name })}>
        Excluir
      </div>
    </C.Container>
  );
};
