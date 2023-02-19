export interface Country {
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
  art?: Country;
  links?: string;
  rezept_ausprobiert?: string;
  zeitstatus?: number;
}
