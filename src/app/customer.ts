export interface Country {
  name?: string;
  code?: string;
}

export interface Representative {
  name?: string;
  image?: string;
}

export interface Customer {
  id?: number;
  name?: number;
  art?: Country;
  links?: string;
  rezept_ausprobiert?: string;
  zeitstatus?: number;
}
