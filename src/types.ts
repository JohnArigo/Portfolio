export type portType = {
  height: number;
  width: number;
};
export type ports = {
  portSize: portType;
  setPortSize: React.Dispatch<React.SetStateAction<portType>>;
};
