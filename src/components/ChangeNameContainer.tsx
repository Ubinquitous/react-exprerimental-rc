import { useOptimistic, useState } from "react";
let count = 1;
const updateName = async (newName: string) => {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`${newName}${count++}`);
    }, 3000);
  });
};

interface IChangeName {
  currentName: string;
  onUpdateName: (name: string) => void;
}

function ChangeName({ currentName, onUpdateName }: IChangeName) {
  const [optimisticName, setOptimisticName] = useOptimistic(currentName);

  const submitAction = async (formData: any) => {
    const newName = formData.get("name");
    setOptimisticName(newName);
    const updatedName = await updateName(newName);
    onUpdateName(updatedName);
  };

  return (
    <form action={submitAction}>
      <p>Your name is: {optimisticName}</p>
      <p>
        <label>Change Name:</label>
        <input
          type="text"
          name="name"
          disabled={currentName !== optimisticName}
        />
      </p>
    </form>
  );
}

const ChangeNameContainer = () => {
  const [name, setName] = useState("");
  return <ChangeName currentName={name} onUpdateName={setName} />;
};

export default ChangeNameContainer;
