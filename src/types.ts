export interface citie {
  id: string;
  name: string;
}

export interface CardUser {
  name: string;
  email: string;
  phone: string;
  link: string;
  citie: string;
  organisation?: string;
  adress?: string;
  from?: string;
}
