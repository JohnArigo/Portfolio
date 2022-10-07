export type portType = {
  height: number;
  width: number;
};
export type ports = {
  portSize: portType;
  setPortSize: React.Dispatch<React.SetStateAction<portType>>;
  scrollSize: number;
  setScrollSize: React.Dispatch<React.SetStateAction<number>>;
  screenPercent: number;
  bgMode: boolean;
};

export type handleType = {
  handleRefClick: () => void;
};

export type contactTypes = {
  scrollSize: number;
  setScrollSize: React.Dispatch<React.SetStateAction<number>>;
  screenPercent: number;
  bgMode: boolean;
  setBgMode?: React.Dispatch<React.SetStateAction<boolean>>;
};
