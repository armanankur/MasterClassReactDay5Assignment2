import { useRef } from "react";
import { useRecoilState } from "recoil";
import { NoteAtom } from "./Store";

const Edit = () => {
  const [data, setData] = useRecoilState(NoteAtom);
  const ID = useRef();
  const title = useRef();
  const disc = useRef();

  const handleupdate = () => {
    const newData = data.map((ele) => {
      if (ele.id === ID.current.value) {
        let obj = {
          id: ele.id,
          title: title.current.value,
          disc: disc.current.value
        };

        return obj;
      } else {
        return ele;
      }
    });
    console.log(newData);

    setData([...newData]);
  };

  return (
    <div>
      <input
        ref={ID}
        type="text"
        placeholder="Enter ID which you want delete"
      />{" "}
      <br />
      <br />
      <input ref={title} type="text" placeholder="Enter titel " />
      <br />
      <br />
      <input ref={disc} type="text" placeholder="Enter Disc " />
      <br />
      <br />
      <button onClick={handleupdate}>Update Note</button>
    </div>
  );
};

export { Edit };
