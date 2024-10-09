// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Race = {
  id: number;
  name: string;
  mountTypeId: number;
  code: string;
  image?: string;
  gestTime: number;
};

export type MountType = {
  id: number;
  name: string;
};

export type Mount = {
  id: number;
  name: string;
  reproMax: number;
  reproDone: number;
  isFertile?: boolean;
  parents?: number;
};

export type Coupling = {
  mother: number;
  father: number;
  createdAt: Date;
  birth: Date;
};
