export interface IStrapiAuction {
  data: AuctionData | AuctionData[];
  meta: Meta;
}

export interface AuctionData {
  id: number;
  attributes: AuctionAttributes;
}

export interface AuctionAttributes {
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Event: Event;
  Items: ItemsEntity[];
  Time: Time;
}

export interface Event {
  id: number;
  Name: string;
  Address: string;
  Description: string;
  Photo: Photo;
}

export interface ItemsEntity {
  id: number;
  Name: string;
  Description: string;
  Price: number;
  Photo: Photo;
}

export interface Time {
  id: number;
  Start: string;
  End: string;
}

export interface Photo {
  data: PhotoData;
}

export interface PhotoData {
  id: number;
  attributes: PhotoAttributes;
}

export interface PhotoAttributes {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: null;
  provider: string;
  provider_metadata?: null;
  createdAt: string;
  updatedAt: string;
}

export interface Formats {
  thumbnail: ThumbnailOrLargeOrMediumOrSmall;
  large: ThumbnailOrLargeOrMediumOrSmall;
  medium: ThumbnailOrLargeOrMediumOrSmall;
  small: ThumbnailOrLargeOrMediumOrSmall;
}

export interface ThumbnailOrLargeOrMediumOrSmall {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: null;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface Meta {
  pagination?: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
