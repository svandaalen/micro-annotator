export type AnnotatorBodyType = {
  "type": string | (string[]),
  "value": string,
};

export type ElucidateBodyType = AnnotatorBodyType & {
  "id": string,
  "purpose": string
};

export type EntityBodyType = [
  {
    "type": "TextualBody",
    "purpose": "classifying",
    "value": string
  },
  {
    "type": "TextualBody",
    "purpose": "commenting",
    "value": string
  }
];

export type SelectorTarget = {
  "type": undefined,
  "selector": {
    "type": string,
    "end": number,
    "start": number
  },
  "source": string
};

export type ImageTarget = {
  "type": "Image",
  "selector": {
    "type": string,
    "conformsTo": string,
    "value": string
  } | undefined,
  "source": string
};

export type ElucidateTargetType = SelectorTarget | ImageTarget;

type TargetType = string | (ElucidateTargetType[]);

export type ElucidateAnnotation = {
  "id": string,
  "type": string,
  "created": string,
  "creator": string,
  "generator": {
    "id": string,
    "type": string,
    "name": string
  } | undefined,
  "body": EntityBodyType | ElucidateBodyType | (ElucidateBodyType[]),
  "target": TargetType
  "motivation": string
};
