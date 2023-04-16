import { useRecoilValue } from "recoil";
import { NoteAtom } from "./Store";

const Home = () => {
  const mynotes = useRecoilValue(NoteAtom);

  return (
    <div>
      {mynotes.map((note, index) => {
        return (
          <div key={index}>
            <h1> Id :- {note.id}</h1>
            <h1> Title :- {note.title}</h1>
            <h1> Description :- {note.disc}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
