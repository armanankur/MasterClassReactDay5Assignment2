import { useRef } from "react";
import { NoteAtom } from "./Store";
import { useRecoilState } from "recoil";

const Create = () => {
  const title = useRef();
  const disc = useRef();
  const ID = useRef();

  const [notes, setNotes] = useRecoilState(NoteAtom);

  console.log(notes);

  const handelSubmit = () => {
    const obj = {
      id: ID.current.value,
      title: title.current.value,
      disc: disc.current.value
    };

    setNotes([...notes, obj]);
  };

  return (
    <div>
      <input ref={ID} type="text" placeholder="Enter  Id" />
      <br />
      <br />
      <input ref={title} type="text" placeholder="Enter title" />
      <br />
      <br />

      <input ref={disc} type="text" placeholder="enter description" />
      <br />
      <br />
      <button onClick={handelSubmit}>ADD NOTE</button>
    </div>
  );
};

export default Create;
