export interface Movie {
  id: number;
  title: string;
  rating: number;
  detail: string;
  imgSrc: string;
}

export interface movieRowProbs {
  id: number;
  title: string;
  rating: number;
  number: number;
  detail?: string;
}

export interface movieIdPageParams {
  params: {
    id: string;
  };
}

export interface searchInputParams {
  params: {
    searchInput: string;
  };
}

export interface footerProps {
  year: string;
  fullName: string;
  studentId: string;
}
