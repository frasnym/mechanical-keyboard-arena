export type Keyboard = {
  slug?: string;
  name: string;
  keys: string;
  material: string;
  knob: string;
  wirelessConnection: string;
  bluetoothConnection: string;
  wiredConnection: string;
  hotSwapAble: string;
  switch: string;
  keyCaps: string;
  antiGhosting: string;
  rgb: string;
  battery: string;
  keyCapsPuller: string;
  switchPuller: string;
  software: string;
  stabilizer: string;
  warranty: string;
  prices?: string;
  imageUrl?: string;
};

export interface AppContextInterface {
  header: string[];
  data: Keyboard[];
}
