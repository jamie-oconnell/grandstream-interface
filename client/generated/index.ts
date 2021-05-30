import { useQuery, UseQueryOptions, useMutation, UseMutationOptions } from 'react-query';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("http://localhost:4001/graphql", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ query, variables }),
    });
    
    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};


export type Mutation = {
  __typename?: 'Mutation';
  signupUser: User;
  updatePhone: Phone;
  createPhone: Phone;
  deletePost?: Maybe<Phone>;
  createRoom: Room;
  deleteRoom?: Maybe<Room>;
};


export type MutationSignupUserArgs = {
  data: UserCreateInput;
};


export type MutationUpdatePhoneArgs = {
  data: PhoneUpdateInput;
};


export type MutationCreatePhoneArgs = {
  data: PhoneCreateInput;
};


export type MutationDeletePostArgs = {
  id: Scalars['Int'];
};


export type MutationCreateRoomArgs = {
  data: RoomCreateInput;
};


export type MutationDeleteRoomArgs = {
  id: Scalars['Int'];
};

export type Phone = {
  __typename?: 'Phone';
  id: Scalars['ID'];
  mac_address: Scalars['String'];
  room?: Maybe<Room>;
  ip?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  lastCheckedAt?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
};

export type PhoneCreateInput = {
  mac_address: Scalars['String'];
  room_id?: Maybe<Scalars['ID']>;
};

export type PhoneOrderByUpdatedAtInput = {
  updatedAt: PhoneSortOrder;
};

export enum PhoneSortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type PhoneUpdateInput = {
  id?: Maybe<Scalars['ID']>;
  mac_address?: Maybe<Scalars['String']>;
  room_id?: Maybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  allUsers: Array<User>;
  phoneById?: Maybe<Phone>;
  phones: Array<Phone>;
  roomById?: Maybe<Room>;
  rooms: Array<Room>;
};


export type QueryPhoneByIdArgs = {
  id: Scalars['Float'];
};


export type QueryPhonesArgs = {
  orderBy?: Maybe<PhoneOrderByUpdatedAtInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  searchString?: Maybe<Scalars['String']>;
};


export type QueryRoomByIdArgs = {
  id: Scalars['Float'];
};


export type QueryRoomsArgs = {
  orderBy?: Maybe<RoomOrderByUpdatedAtInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  searchString?: Maybe<Scalars['String']>;
};

export type Room = {
  __typename?: 'Room';
  id: Scalars['ID'];
  number: Scalars['String'];
  phone?: Maybe<Phone>;
  updatedAt: Scalars['DateTime'];
};

export type RoomCreateInput = {
  number: Scalars['String'];
};

export type RoomOrderByUpdatedAtInput = {
  updatedAt: RoomSortOrder;
};

export enum RoomSortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type UserCreateInput = {
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type PhonesQueryVariables = Exact<{
  searchString?: Maybe<Scalars['String']>;
}>;


export type PhonesQuery = (
  { __typename?: 'Query' }
  & { phones: Array<(
    { __typename?: 'Phone' }
    & Pick<Phone, 'id' | 'mac_address' | 'ip' | 'status' | 'updatedAt' | 'lastCheckedAt'>
    & { room?: Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'id' | 'number' | 'updatedAt'>
    )> }
  )> }
);

export type UpdatePhoneMutationVariables = Exact<{
  data: PhoneUpdateInput;
}>;


export type UpdatePhoneMutation = (
  { __typename?: 'Mutation' }
  & { updatePhone: (
    { __typename?: 'Phone' }
    & Pick<Phone, 'id'>
    & { room?: Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'number'>
    )> }
  ) }
);

export type RoomsQueryVariables = Exact<{
  searchString?: Maybe<Scalars['String']>;
}>;


export type RoomsQuery = (
  { __typename?: 'Query' }
  & { rooms: Array<(
    { __typename?: 'Room' }
    & Pick<Room, 'id' | 'number' | 'updatedAt'>
  )> }
);


export const PhonesDocument = `
    query Phones($searchString: String) {
  phones(searchString: $searchString) {
    id
    mac_address
    ip
    room {
      id
      number
      updatedAt
    }
    status
    updatedAt
    lastCheckedAt
  }
}
    `;
export const usePhonesQuery = <
      TData = PhonesQuery,
      TError = unknown
    >(
      variables?: PhonesQueryVariables, 
      options?: UseQueryOptions<PhonesQuery, TError, TData>
    ) => 
    useQuery<PhonesQuery, TError, TData>(
      ['Phones', variables],
      fetcher<PhonesQuery, PhonesQueryVariables>(PhonesDocument, variables),
      options
    );
export const UpdatePhoneDocument = `
    mutation UpdatePhone($data: PhoneUpdateInput!) {
  updatePhone(data: $data) {
    id
    room {
      number
    }
  }
}
    `;
export const useUpdatePhoneMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdatePhoneMutation, TError, UpdatePhoneMutationVariables, TContext>) => 
    useMutation<UpdatePhoneMutation, TError, UpdatePhoneMutationVariables, TContext>(
      (variables?: UpdatePhoneMutationVariables) => fetcher<UpdatePhoneMutation, UpdatePhoneMutationVariables>(UpdatePhoneDocument, variables)(),
      options
    );
export const RoomsDocument = `
    query Rooms($searchString: String) {
  rooms(searchString: $searchString) {
    id
    number
    updatedAt
  }
}
    `;
export const useRoomsQuery = <
      TData = RoomsQuery,
      TError = unknown
    >(
      variables?: RoomsQueryVariables, 
      options?: UseQueryOptions<RoomsQuery, TError, TData>
    ) => 
    useQuery<RoomsQuery, TError, TData>(
      ['Rooms', variables],
      fetcher<RoomsQuery, RoomsQueryVariables>(RoomsDocument, variables),
      options
    );