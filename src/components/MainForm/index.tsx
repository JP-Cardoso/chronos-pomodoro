import { PlayCircleIcon } from "lucide-react";
import Cycles from "../Cycles";
import DefaultButton from "../DefaultButton";
import DefaultInput from "../DefaultInput";

export default function MainForm() {
  return (
    <>
      <form action="" className="form">
        <div className="formRow">
          <DefaultInput
            id='meuInput'
            type='text'
            labelText='task'
            placeholder='Digite algo'
            defaultValue='Valor preenchido'
            disabled
          />
        </div>

        <div className="formRow">
          <p>
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="formRow">
          <Cycles />
        </div>
        <div className="formRow">
          <DefaultButton
            icon={<PlayCircleIcon />}
            color='red'
          />
        </div>
      </form>
    </>
  );
}