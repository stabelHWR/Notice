//This file is there to map images

import icon from '@/assets/images/icons/icon.png';
import favicon from '@/assets/images/icons/favicon.png';
import noteImage from '@/assets/images/inApp/notes.png';

import fluteTutorialEn from '@/assets/images/instruments/flute/tutorial/en.png';
import fluteTutorialDe from '@/assets/images/instruments/flute/tutorial/de.png';

// Soprano clef images
//large
import cNoteSopranoLarge from '@/assets/images/instruments/flute/clefs/soprano/large/cNote.png';
import dNoteSopranoLarge from '@/assets/images/instruments/flute/clefs/soprano/large/dNote.png';
//small
import cNoteSopranoSmall from '@/assets/images/instruments/flute/clefs/soprano/small/cNote.png';

import { ImageSourcePropType } from 'react-native';
import { Clef, InstrumentName } from '@/types/noteTypes';
import { CustomSize, Languages } from '@/types/componentTypes';
import { AllNotes } from '@/constants/texts/Notes';

type ImageGroupKey = InstrumentName | 'icons' | 'inApp';

//add additional keys
type InAppImagesKey = 'notes'; //add additional properties to the key
type NoteKeys = AllNotes;
type IconKeys = CustomSize;
type TutorialKeys = Languages;
type AllKeys = InAppImagesKey | NoteKeys | IconKeys | TutorialKeys;

interface ClefImages {
  large: { [note: string]: ImageSourcePropType };
  medium: { [note: string]: ImageSourcePropType };
  small: { [note: string]: ImageSourcePropType };
}

type TutorialImages = {
  [language in TutorialKeys]: ImageSourcePropType;
};

interface InstrumentImages {
  [Clef.Alto]: ClefImages;
  [Clef.Bass]: ClefImages;
  [Clef.Treble]: ClefImages;

  [Clef.Soprano]: ClefImages;

  tutorials: TutorialImages;
}

interface IconImages {
  [size: string]: ImageSourcePropType;
}
interface InAppImages {
  [key: string]: ImageSourcePropType;
}

interface ImagePathMap {
  flute: InstrumentImages;
  icons: IconImages;
  inApp: InAppImages;
}

// Map of images
const imagePathMap: ImagePathMap = {
  flute: {
    treble: {
      large: {},
      medium: {
        //make small images
      },
      small: {
        //make small images
      },
    },
    bass: {
      large: {},
      medium: {
        //make small images
      },
      small: {
        //make small images
      },
    },
    alto: {
      large: {},
      medium: {
        //make small images
      },
      small: {
        //make small images
      },
    },
    soprano: {
      large: {
        C: cNoteSopranoLarge,
        D: dNoteSopranoLarge,
      },
      medium: {
        //make small images
      },
      small: {
        C: cNoteSopranoSmall,
      },

      // ...TODO : add notes
    },
    tutorials: {
      en: fluteTutorialEn,
      de: fluteTutorialDe,
    },
  },
  icons: {
    large: icon,
    small: favicon,
  },
  inApp: {
    notes: noteImage,
  },
};

const returnImageOrLogWarning = (image: ImageSourcePropType, imageKey: AllKeys) => {
  if (image) {
    return image;
  } else {
    console.warn(`No image found for ${imageKey}`);
  }
};

const getNoteImage = (
  instrument: InstrumentName,
  imageKey: AllNotes | TutorialKeys,
  size: CustomSize,
  clefKey?: Clef
): ImageSourcePropType | undefined => {
  const instrumentImageGroup = imagePathMap[instrument];

  if (!instrumentImageGroup) {
    console.warn(`No such instrument ${instrument}`);
    return undefined;
  }

  if (clefKey && instrumentImageGroup[clefKey]) {
    const clefImageGroup = instrumentImageGroup[clefKey][size] as {
      [note: string]: ImageSourcePropType;
    };

    const imageNoteKey = imageKey as AllNotes;
    const clefImage = clefImageGroup[imageNoteKey];

    return returnImageOrLogWarning(clefImage, imageNoteKey);
  } else if (!clefKey && imageKey in instrumentImageGroup.tutorials) {
    const tutorialImageKey = imageKey as TutorialKeys;
    const tutorialImage = instrumentImageGroup.tutorials[tutorialImageKey];

    return returnImageOrLogWarning(tutorialImage, tutorialImageKey);
  } else {
    console.warn(`No such clef ${clefKey} or invalid image key ${imageKey}`);
    return undefined;
  }
};

export default function getImage(
  imageGroupKey: ImageGroupKey,
  imageKey: AllKeys | string,
  clefKey?: Clef,
  size?: CustomSize
): ImageSourcePropType | undefined {
  const isInstrument = Object.values(InstrumentName).includes(imageGroupKey as InstrumentName);
  if (isInstrument) {
    const instrument = imageGroupKey as InstrumentName;
    const usedSize = size ? size : 'large';
    const noteImage = getNoteImage(instrument, imageKey as AllNotes, usedSize, clefKey);
    return noteImage;
  } else if (imageGroupKey === 'icons') {
    const iconImageKey = imageKey as IconKeys;
    const image = imagePathMap.icons[iconImageKey];

    return returnImageOrLogWarning(image, iconImageKey);
  } else if (imageGroupKey === 'inApp') {
    const inAppImageKey = imageKey as InAppImagesKey;
    const image = imagePathMap.inApp[inAppImageKey];
    return returnImageOrLogWarning(image, inAppImageKey);
  } else {
    console.warn(`No images group found for ${imageGroupKey}`);
  }
  return undefined;
}
