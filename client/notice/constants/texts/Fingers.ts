type dataArray = {
  boldDisplayedText: string;
  infoDisplayedText: string;
};

const sides: Array<dataArray> = [
  { boldDisplayedText: 'L', infoDisplayedText: 'left' },
  { boldDisplayedText: 'R', infoDisplayedText: 'right' },
];

const fingersEN: Array<dataArray> = [
  { boldDisplayedText: 'I', infoDisplayedText: 'indexFinger' },
  { boldDisplayedText: 'R', infoDisplayedText: 'ringFinger' },
  { boldDisplayedText: 'M', infoDisplayedText: 'middleFinger' },
  { boldDisplayedText: 'L', infoDisplayedText: 'littleFinger' },
  { boldDisplayedText: 'T', infoDisplayedText: 'thumb' },
];
const fingersDE: Array<dataArray> = [
  { boldDisplayedText: 'Z', infoDisplayedText: 'indexFinger' },
  { boldDisplayedText: 'R', infoDisplayedText: 'ringFinger' },
  { boldDisplayedText: 'M', infoDisplayedText: 'middleFinger' },
  { boldDisplayedText: 'K', infoDisplayedText: 'littleFinger' },
  { boldDisplayedText: 'D', infoDisplayedText: 'thumb' },
];

export { dataArray, sides, fingersEN, fingersDE };
