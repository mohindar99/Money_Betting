enum userTypeEnum {
  user = "user",
  admin = "admin",
}

export enum statusEnum {
  active = "active",
  inactive = "inactive",
}

type orderedMap = { type: "string"; description: "country" };

export type UserType = {
  username: string;
  email?: string;
  password?: string;
  userType?: userTypeEnum;
  profilePicUrl?: string;
  walletAddress?: string;
  status?: statusEnum;
  emailVerified?: boolean;
  country?: orderedMap;
  lastLogin?: Date;
  createdAt?: Date;
  modifiedAt?: Date;
};
