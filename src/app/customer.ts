export interface Art {
  name?: string;
  code?: string;
}

export interface Link {
  name?: string;
  image?: string;
}

export interface Rezept {
  id?: number;
  name?: number;
  art?: Art;
  links?: string;
  rezept_ausprobiert?: string;
  zeitstatus?: number;
}
