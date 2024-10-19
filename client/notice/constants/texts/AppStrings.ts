import { InstrumentName } from '@/types/noteTypes';

const APP_NAME = 'Notice';
let CURRENT_INSTRUMENT = InstrumentName.Flute;

// If we want to expand to new instruments. Since we want to restrict ourselves to the flute, the string is hardcoded
const setCurrentInstrument = (newInstrument: InstrumentName) => {
  CURRENT_INSTRUMENT = newInstrument;
};

export { APP_NAME, CURRENT_INSTRUMENT, setCurrentInstrument };
