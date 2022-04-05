export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  jsonb: Record<string, unknown> | null;
  timestamptz: string;
  uuid: string;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['Int']>;
  readonly _gt?: InputMaybe<Scalars['Int']>;
  readonly _gte?: InputMaybe<Scalars['Int']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['Int']>;
  readonly _lte?: InputMaybe<Scalars['Int']>;
  readonly _neq?: InputMaybe<Scalars['Int']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['String']>;
  readonly _gt?: InputMaybe<Scalars['String']>;
  readonly _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  readonly _ilike?: InputMaybe<Scalars['String']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  readonly _iregex?: InputMaybe<Scalars['String']>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  readonly _like?: InputMaybe<Scalars['String']>;
  readonly _lt?: InputMaybe<Scalars['String']>;
  readonly _lte?: InputMaybe<Scalars['String']>;
  readonly _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  readonly _nilike?: InputMaybe<Scalars['String']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  readonly _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  readonly _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  readonly _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  readonly _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  readonly _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  readonly _similar?: InputMaybe<Scalars['String']>;
};

/** the items that constitute a document */
export type DocumentItems = {
  readonly __typename?: 'documentItems';
  /** An object relationship */
  readonly document: Documents;
  readonly document_id: Scalars['uuid'];
  readonly flags?: Maybe<Scalars['jsonb']>;
  readonly id: Scalars['uuid'];
  readonly index: Scalars['Int'];
  readonly text: Scalars['String'];
};


/** the items that constitute a document */
export type DocumentItemsFlagsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "document_items" */
export type DocumentItems_Aggregate = {
  readonly __typename?: 'documentItems_aggregate';
  readonly aggregate?: Maybe<DocumentItems_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<DocumentItems>;
};

/** aggregate fields of "document_items" */
export type DocumentItems_Aggregate_Fields = {
  readonly __typename?: 'documentItems_aggregate_fields';
  readonly avg?: Maybe<DocumentItems_Avg_Fields>;
  readonly count: Scalars['Int'];
  readonly max?: Maybe<DocumentItems_Max_Fields>;
  readonly min?: Maybe<DocumentItems_Min_Fields>;
  readonly stddev?: Maybe<DocumentItems_Stddev_Fields>;
  readonly stddev_pop?: Maybe<DocumentItems_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<DocumentItems_Stddev_Samp_Fields>;
  readonly sum?: Maybe<DocumentItems_Sum_Fields>;
  readonly var_pop?: Maybe<DocumentItems_Var_Pop_Fields>;
  readonly var_samp?: Maybe<DocumentItems_Var_Samp_Fields>;
  readonly variance?: Maybe<DocumentItems_Variance_Fields>;
};


/** aggregate fields of "document_items" */
export type DocumentItems_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<DocumentItems_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "document_items" */
export type DocumentItems_Aggregate_Order_By = {
  readonly avg?: InputMaybe<DocumentItems_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<DocumentItems_Max_Order_By>;
  readonly min?: InputMaybe<DocumentItems_Min_Order_By>;
  readonly stddev?: InputMaybe<DocumentItems_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<DocumentItems_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<DocumentItems_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<DocumentItems_Sum_Order_By>;
  readonly var_pop?: InputMaybe<DocumentItems_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<DocumentItems_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<DocumentItems_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type DocumentItems_Append_Input = {
  readonly flags?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "document_items" */
export type DocumentItems_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<DocumentItems_Insert_Input>;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<DocumentItems_On_Conflict>;
};

/** aggregate avg on columns */
export type DocumentItems_Avg_Fields = {
  readonly __typename?: 'documentItems_avg_fields';
  readonly index?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "document_items" */
export type DocumentItems_Avg_Order_By = {
  readonly index?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "document_items". All fields are combined with a logical 'AND'. */
export type DocumentItems_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<DocumentItems_Bool_Exp>>;
  readonly _not?: InputMaybe<DocumentItems_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<DocumentItems_Bool_Exp>>;
  readonly document?: InputMaybe<Documents_Bool_Exp>;
  readonly document_id?: InputMaybe<Uuid_Comparison_Exp>;
  readonly flags?: InputMaybe<Jsonb_Comparison_Exp>;
  readonly id?: InputMaybe<Uuid_Comparison_Exp>;
  readonly index?: InputMaybe<Int_Comparison_Exp>;
  readonly text?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "document_items" */
export type DocumentItems_Constraint =
  /** unique or primary key constraint */
  | 'document_items_document_id_index_key'
  /** unique or primary key constraint */
  | 'document_items_pkey';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type DocumentItems_Delete_At_Path_Input = {
  readonly flags?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type DocumentItems_Delete_Elem_Input = {
  readonly flags?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type DocumentItems_Delete_Key_Input = {
  readonly flags?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "document_items" */
export type DocumentItems_Inc_Input = {
  readonly index?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "document_items" */
export type DocumentItems_Insert_Input = {
  readonly document?: InputMaybe<Documents_Obj_Rel_Insert_Input>;
  readonly document_id?: InputMaybe<Scalars['uuid']>;
  readonly flags?: InputMaybe<Scalars['jsonb']>;
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly index?: InputMaybe<Scalars['Int']>;
  readonly text?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type DocumentItems_Max_Fields = {
  readonly __typename?: 'documentItems_max_fields';
  readonly document_id?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly index?: Maybe<Scalars['Int']>;
  readonly text?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "document_items" */
export type DocumentItems_Max_Order_By = {
  readonly document_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly index?: InputMaybe<Order_By>;
  readonly text?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type DocumentItems_Min_Fields = {
  readonly __typename?: 'documentItems_min_fields';
  readonly document_id?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly index?: Maybe<Scalars['Int']>;
  readonly text?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "document_items" */
export type DocumentItems_Min_Order_By = {
  readonly document_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly index?: InputMaybe<Order_By>;
  readonly text?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "document_items" */
export type DocumentItems_Mutation_Response = {
  readonly __typename?: 'documentItems_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<DocumentItems>;
};

/** on_conflict condition type for table "document_items" */
export type DocumentItems_On_Conflict = {
  readonly constraint: DocumentItems_Constraint;
  readonly update_columns?: ReadonlyArray<DocumentItems_Update_Column>;
  readonly where?: InputMaybe<DocumentItems_Bool_Exp>;
};

/** Ordering options when selecting data from "document_items". */
export type DocumentItems_Order_By = {
  readonly document?: InputMaybe<Documents_Order_By>;
  readonly document_id?: InputMaybe<Order_By>;
  readonly flags?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly index?: InputMaybe<Order_By>;
  readonly text?: InputMaybe<Order_By>;
};

/** primary key columns input for table: documentItems */
export type DocumentItems_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type DocumentItems_Prepend_Input = {
  readonly flags?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "document_items" */
export type DocumentItems_Select_Column =
  /** column name */
  | 'document_id'
  /** column name */
  | 'flags'
  /** column name */
  | 'id'
  /** column name */
  | 'index'
  /** column name */
  | 'text';

/** input type for updating data in table "document_items" */
export type DocumentItems_Set_Input = {
  readonly document_id?: InputMaybe<Scalars['uuid']>;
  readonly flags?: InputMaybe<Scalars['jsonb']>;
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly index?: InputMaybe<Scalars['Int']>;
  readonly text?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type DocumentItems_Stddev_Fields = {
  readonly __typename?: 'documentItems_stddev_fields';
  readonly index?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "document_items" */
export type DocumentItems_Stddev_Order_By = {
  readonly index?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type DocumentItems_Stddev_Pop_Fields = {
  readonly __typename?: 'documentItems_stddev_pop_fields';
  readonly index?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "document_items" */
export type DocumentItems_Stddev_Pop_Order_By = {
  readonly index?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type DocumentItems_Stddev_Samp_Fields = {
  readonly __typename?: 'documentItems_stddev_samp_fields';
  readonly index?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "document_items" */
export type DocumentItems_Stddev_Samp_Order_By = {
  readonly index?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type DocumentItems_Sum_Fields = {
  readonly __typename?: 'documentItems_sum_fields';
  readonly index?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "document_items" */
export type DocumentItems_Sum_Order_By = {
  readonly index?: InputMaybe<Order_By>;
};

/** update columns of table "document_items" */
export type DocumentItems_Update_Column =
  /** column name */
  | 'document_id'
  /** column name */
  | 'flags'
  /** column name */
  | 'id'
  /** column name */
  | 'index'
  /** column name */
  | 'text';

/** aggregate var_pop on columns */
export type DocumentItems_Var_Pop_Fields = {
  readonly __typename?: 'documentItems_var_pop_fields';
  readonly index?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "document_items" */
export type DocumentItems_Var_Pop_Order_By = {
  readonly index?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type DocumentItems_Var_Samp_Fields = {
  readonly __typename?: 'documentItems_var_samp_fields';
  readonly index?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "document_items" */
export type DocumentItems_Var_Samp_Order_By = {
  readonly index?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type DocumentItems_Variance_Fields = {
  readonly __typename?: 'documentItems_variance_fields';
  readonly index?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "document_items" */
export type DocumentItems_Variance_Order_By = {
  readonly index?: InputMaybe<Order_By>;
};

/** connection between users and what documents they can edit */
export type Document_Members = {
  readonly __typename?: 'document_members';
  /** An object relationship */
  readonly document: Documents;
  readonly document_id: Scalars['uuid'];
  /** An object relationship */
  readonly document_role: Document_Roles;
  readonly id: Scalars['uuid'];
  readonly role: Document_Roles_Enum;
  /** An object relationship */
  readonly user: Users;
  readonly userId: Scalars['uuid'];
};

/** aggregated selection of "document_members" */
export type Document_Members_Aggregate = {
  readonly __typename?: 'document_members_aggregate';
  readonly aggregate?: Maybe<Document_Members_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Document_Members>;
};

/** aggregate fields of "document_members" */
export type Document_Members_Aggregate_Fields = {
  readonly __typename?: 'document_members_aggregate_fields';
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Document_Members_Max_Fields>;
  readonly min?: Maybe<Document_Members_Min_Fields>;
};


/** aggregate fields of "document_members" */
export type Document_Members_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Document_Members_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "document_members" */
export type Document_Members_Aggregate_Order_By = {
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Document_Members_Max_Order_By>;
  readonly min?: InputMaybe<Document_Members_Min_Order_By>;
};

/** input type for inserting array relation for remote table "document_members" */
export type Document_Members_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Document_Members_Insert_Input>;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<Document_Members_On_Conflict>;
};

/** Boolean expression to filter rows from the table "document_members". All fields are combined with a logical 'AND'. */
export type Document_Members_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Document_Members_Bool_Exp>>;
  readonly _not?: InputMaybe<Document_Members_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Document_Members_Bool_Exp>>;
  readonly document?: InputMaybe<Documents_Bool_Exp>;
  readonly document_id?: InputMaybe<Uuid_Comparison_Exp>;
  readonly document_role?: InputMaybe<Document_Roles_Bool_Exp>;
  readonly id?: InputMaybe<Uuid_Comparison_Exp>;
  readonly role?: InputMaybe<Document_Roles_Enum_Comparison_Exp>;
  readonly user?: InputMaybe<Users_Bool_Exp>;
  readonly userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "document_members" */
export type Document_Members_Constraint =
  /** unique or primary key constraint */
  | 'document_members_pkey'
  /** unique or primary key constraint */
  | 'document_members_user_id_document_id_key';

/** input type for inserting data into table "document_members" */
export type Document_Members_Insert_Input = {
  readonly document?: InputMaybe<Documents_Obj_Rel_Insert_Input>;
  readonly document_id?: InputMaybe<Scalars['uuid']>;
  readonly document_role?: InputMaybe<Document_Roles_Obj_Rel_Insert_Input>;
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly role?: InputMaybe<Document_Roles_Enum>;
  readonly user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  readonly userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Document_Members_Max_Fields = {
  readonly __typename?: 'document_members_max_fields';
  readonly document_id?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "document_members" */
export type Document_Members_Max_Order_By = {
  readonly document_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Document_Members_Min_Fields = {
  readonly __typename?: 'document_members_min_fields';
  readonly document_id?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "document_members" */
export type Document_Members_Min_Order_By = {
  readonly document_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "document_members" */
export type Document_Members_Mutation_Response = {
  readonly __typename?: 'document_members_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<Document_Members>;
};

/** on_conflict condition type for table "document_members" */
export type Document_Members_On_Conflict = {
  readonly constraint: Document_Members_Constraint;
  readonly update_columns?: ReadonlyArray<Document_Members_Update_Column>;
  readonly where?: InputMaybe<Document_Members_Bool_Exp>;
};

/** Ordering options when selecting data from "document_members". */
export type Document_Members_Order_By = {
  readonly document?: InputMaybe<Documents_Order_By>;
  readonly document_id?: InputMaybe<Order_By>;
  readonly document_role?: InputMaybe<Document_Roles_Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly role?: InputMaybe<Order_By>;
  readonly user?: InputMaybe<Users_Order_By>;
  readonly userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: document_members */
export type Document_Members_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
};

/** select columns of table "document_members" */
export type Document_Members_Select_Column =
  /** column name */
  | 'document_id'
  /** column name */
  | 'id'
  /** column name */
  | 'role'
  /** column name */
  | 'userId';

/** input type for updating data in table "document_members" */
export type Document_Members_Set_Input = {
  readonly document_id?: InputMaybe<Scalars['uuid']>;
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly role?: InputMaybe<Document_Roles_Enum>;
  readonly userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "document_members" */
export type Document_Members_Update_Column =
  /** column name */
  | 'document_id'
  /** column name */
  | 'id'
  /** column name */
  | 'role'
  /** column name */
  | 'userId';

/** columns and relationships of "document_roles" */
export type Document_Roles = {
  readonly __typename?: 'document_roles';
  readonly comment: Scalars['String'];
  /** fetch data from the table: "document_members" */
  readonly document_members: ReadonlyArray<Document_Members>;
  /** An aggregate relationship */
  readonly document_members_aggregate: Document_Members_Aggregate;
  readonly value: Scalars['String'];
};


/** columns and relationships of "document_roles" */
export type Document_RolesDocument_MembersArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Document_Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Document_Members_Order_By>>;
  where?: InputMaybe<Document_Members_Bool_Exp>;
};


/** columns and relationships of "document_roles" */
export type Document_RolesDocument_Members_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Document_Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Document_Members_Order_By>>;
  where?: InputMaybe<Document_Members_Bool_Exp>;
};

/** aggregated selection of "document_roles" */
export type Document_Roles_Aggregate = {
  readonly __typename?: 'document_roles_aggregate';
  readonly aggregate?: Maybe<Document_Roles_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Document_Roles>;
};

/** aggregate fields of "document_roles" */
export type Document_Roles_Aggregate_Fields = {
  readonly __typename?: 'document_roles_aggregate_fields';
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Document_Roles_Max_Fields>;
  readonly min?: Maybe<Document_Roles_Min_Fields>;
};


/** aggregate fields of "document_roles" */
export type Document_Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Document_Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "document_roles". All fields are combined with a logical 'AND'. */
export type Document_Roles_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Document_Roles_Bool_Exp>>;
  readonly _not?: InputMaybe<Document_Roles_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Document_Roles_Bool_Exp>>;
  readonly comment?: InputMaybe<String_Comparison_Exp>;
  readonly document_members?: InputMaybe<Document_Members_Bool_Exp>;
  readonly value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "document_roles" */
export type Document_Roles_Constraint =
  /** unique or primary key constraint */
  | 'document_roles_pkey';

export type Document_Roles_Enum =
  /** can only read */
  | 'read'
  /** can write */
  | 'write';

/** Boolean expression to compare columns of type "document_roles_enum". All fields are combined with logical 'AND'. */
export type Document_Roles_Enum_Comparison_Exp = {
  readonly _eq?: InputMaybe<Document_Roles_Enum>;
  readonly _in?: InputMaybe<ReadonlyArray<Document_Roles_Enum>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _neq?: InputMaybe<Document_Roles_Enum>;
  readonly _nin?: InputMaybe<ReadonlyArray<Document_Roles_Enum>>;
};

/** input type for inserting data into table "document_roles" */
export type Document_Roles_Insert_Input = {
  readonly comment?: InputMaybe<Scalars['String']>;
  readonly document_members?: InputMaybe<Document_Members_Arr_Rel_Insert_Input>;
  readonly value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Document_Roles_Max_Fields = {
  readonly __typename?: 'document_roles_max_fields';
  readonly comment?: Maybe<Scalars['String']>;
  readonly value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Document_Roles_Min_Fields = {
  readonly __typename?: 'document_roles_min_fields';
  readonly comment?: Maybe<Scalars['String']>;
  readonly value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "document_roles" */
export type Document_Roles_Mutation_Response = {
  readonly __typename?: 'document_roles_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<Document_Roles>;
};

/** input type for inserting object relation for remote table "document_roles" */
export type Document_Roles_Obj_Rel_Insert_Input = {
  readonly data: Document_Roles_Insert_Input;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<Document_Roles_On_Conflict>;
};

/** on_conflict condition type for table "document_roles" */
export type Document_Roles_On_Conflict = {
  readonly constraint: Document_Roles_Constraint;
  readonly update_columns?: ReadonlyArray<Document_Roles_Update_Column>;
  readonly where?: InputMaybe<Document_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "document_roles". */
export type Document_Roles_Order_By = {
  readonly comment?: InputMaybe<Order_By>;
  readonly document_members_aggregate?: InputMaybe<Document_Members_Aggregate_Order_By>;
  readonly value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: document_roles */
export type Document_Roles_Pk_Columns_Input = {
  readonly value: Scalars['String'];
};

/** select columns of table "document_roles" */
export type Document_Roles_Select_Column =
  /** column name */
  | 'comment'
  /** column name */
  | 'value';

/** input type for updating data in table "document_roles" */
export type Document_Roles_Set_Input = {
  readonly comment?: InputMaybe<Scalars['String']>;
  readonly value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "document_roles" */
export type Document_Roles_Update_Column =
  /** column name */
  | 'comment'
  /** column name */
  | 'value';

/** stores document */
export type Documents = {
  readonly __typename?: 'documents';
  readonly created_at: Scalars['timestamptz'];
  readonly id: Scalars['uuid'];
  /** An array relationship */
  readonly items: ReadonlyArray<DocumentItems>;
  /** An aggregate relationship */
  readonly items_aggregate: DocumentItems_Aggregate;
  /** An array relationship */
  readonly members: ReadonlyArray<Document_Members>;
  /** An aggregate relationship */
  readonly members_aggregate: Document_Members_Aggregate;
  /** An object relationship */
  readonly owner: Users;
  readonly ownerId: Scalars['uuid'];
  readonly title: Scalars['String'];
  readonly updated_at?: Maybe<Scalars['timestamptz']>;
};


/** stores document */
export type DocumentsItemsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<DocumentItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<DocumentItems_Order_By>>;
  where?: InputMaybe<DocumentItems_Bool_Exp>;
};


/** stores document */
export type DocumentsItems_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<DocumentItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<DocumentItems_Order_By>>;
  where?: InputMaybe<DocumentItems_Bool_Exp>;
};


/** stores document */
export type DocumentsMembersArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Document_Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Document_Members_Order_By>>;
  where?: InputMaybe<Document_Members_Bool_Exp>;
};


/** stores document */
export type DocumentsMembers_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Document_Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Document_Members_Order_By>>;
  where?: InputMaybe<Document_Members_Bool_Exp>;
};

/** aggregated selection of "documents" */
export type Documents_Aggregate = {
  readonly __typename?: 'documents_aggregate';
  readonly aggregate?: Maybe<Documents_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Documents>;
};

/** aggregate fields of "documents" */
export type Documents_Aggregate_Fields = {
  readonly __typename?: 'documents_aggregate_fields';
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Documents_Max_Fields>;
  readonly min?: Maybe<Documents_Min_Fields>;
};


/** aggregate fields of "documents" */
export type Documents_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Documents_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "documents". All fields are combined with a logical 'AND'. */
export type Documents_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Documents_Bool_Exp>>;
  readonly _not?: InputMaybe<Documents_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Documents_Bool_Exp>>;
  readonly created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly id?: InputMaybe<Uuid_Comparison_Exp>;
  readonly items?: InputMaybe<DocumentItems_Bool_Exp>;
  readonly members?: InputMaybe<Document_Members_Bool_Exp>;
  readonly owner?: InputMaybe<Users_Bool_Exp>;
  readonly ownerId?: InputMaybe<Uuid_Comparison_Exp>;
  readonly title?: InputMaybe<String_Comparison_Exp>;
  readonly updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "documents" */
export type Documents_Constraint =
  /** unique or primary key constraint */
  | 'documents_pkey';

/** input type for inserting data into table "documents" */
export type Documents_Insert_Input = {
  readonly created_at?: InputMaybe<Scalars['timestamptz']>;
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly items?: InputMaybe<DocumentItems_Arr_Rel_Insert_Input>;
  readonly members?: InputMaybe<Document_Members_Arr_Rel_Insert_Input>;
  readonly owner?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  readonly ownerId?: InputMaybe<Scalars['uuid']>;
  readonly title?: InputMaybe<Scalars['String']>;
  readonly updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Documents_Max_Fields = {
  readonly __typename?: 'documents_max_fields';
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly ownerId?: Maybe<Scalars['uuid']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Documents_Min_Fields = {
  readonly __typename?: 'documents_min_fields';
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly ownerId?: Maybe<Scalars['uuid']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "documents" */
export type Documents_Mutation_Response = {
  readonly __typename?: 'documents_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<Documents>;
};

/** input type for inserting object relation for remote table "documents" */
export type Documents_Obj_Rel_Insert_Input = {
  readonly data: Documents_Insert_Input;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<Documents_On_Conflict>;
};

/** on_conflict condition type for table "documents" */
export type Documents_On_Conflict = {
  readonly constraint: Documents_Constraint;
  readonly update_columns?: ReadonlyArray<Documents_Update_Column>;
  readonly where?: InputMaybe<Documents_Bool_Exp>;
};

/** Ordering options when selecting data from "documents". */
export type Documents_Order_By = {
  readonly created_at?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly items_aggregate?: InputMaybe<DocumentItems_Aggregate_Order_By>;
  readonly members_aggregate?: InputMaybe<Document_Members_Aggregate_Order_By>;
  readonly owner?: InputMaybe<Users_Order_By>;
  readonly ownerId?: InputMaybe<Order_By>;
  readonly title?: InputMaybe<Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: documents */
export type Documents_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
};

/** select columns of table "documents" */
export type Documents_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'ownerId'
  /** column name */
  | 'title'
  /** column name */
  | 'updated_at';

/** input type for updating data in table "documents" */
export type Documents_Set_Input = {
  readonly created_at?: InputMaybe<Scalars['timestamptz']>;
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly ownerId?: InputMaybe<Scalars['uuid']>;
  readonly title?: InputMaybe<Scalars['String']>;
  readonly updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "documents" */
export type Documents_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'ownerId'
  /** column name */
  | 'title'
  /** column name */
  | 'updated_at';

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  readonly _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  readonly _contains?: InputMaybe<Scalars['jsonb']>;
  readonly _eq?: InputMaybe<Scalars['jsonb']>;
  readonly _gt?: InputMaybe<Scalars['jsonb']>;
  readonly _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  readonly _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  readonly _has_keys_all?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  readonly _has_keys_any?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['jsonb']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['jsonb']>;
  readonly _lte?: InputMaybe<Scalars['jsonb']>;
  readonly _neq?: InputMaybe<Scalars['jsonb']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  readonly __typename?: 'mutation_root';
  /** delete single row from the table: "documents" */
  readonly deleteDocument?: Maybe<Documents>;
  /** delete single row from the table: "document_items" */
  readonly deleteDocumentItem?: Maybe<DocumentItems>;
  /** delete data from the table: "document_items" */
  readonly deleteDocumentItems?: Maybe<DocumentItems_Mutation_Response>;
  /** delete data from the table: "documents" */
  readonly deleteDocuments?: Maybe<Documents_Mutation_Response>;
  /** delete data from the table: "document_members" */
  readonly delete_document_members?: Maybe<Document_Members_Mutation_Response>;
  /** delete single row from the table: "document_members" */
  readonly delete_document_members_by_pk?: Maybe<Document_Members>;
  /** delete data from the table: "document_roles" */
  readonly delete_document_roles?: Maybe<Document_Roles_Mutation_Response>;
  /** delete single row from the table: "document_roles" */
  readonly delete_document_roles_by_pk?: Maybe<Document_Roles>;
  /** delete data from the table: "users" */
  readonly delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  readonly delete_users_by_pk?: Maybe<Users>;
  /** insert a single row into the table: "documents" */
  readonly insertDocument?: Maybe<Documents>;
  /** insert a single row into the table: "document_items" */
  readonly insertDocumentItem?: Maybe<DocumentItems>;
  /** insert data into the table: "document_items" */
  readonly insertDocumentItems?: Maybe<DocumentItems_Mutation_Response>;
  /** insert data into the table: "documents" */
  readonly insertDocuments?: Maybe<Documents_Mutation_Response>;
  /** insert data into the table: "document_members" */
  readonly insert_document_members?: Maybe<Document_Members_Mutation_Response>;
  /** insert a single row into the table: "document_members" */
  readonly insert_document_members_one?: Maybe<Document_Members>;
  /** insert data into the table: "document_roles" */
  readonly insert_document_roles?: Maybe<Document_Roles_Mutation_Response>;
  /** insert a single row into the table: "document_roles" */
  readonly insert_document_roles_one?: Maybe<Document_Roles>;
  /** insert data into the table: "users" */
  readonly insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  readonly insert_users_one?: Maybe<Users>;
  /** update single row of the table: "documents" */
  readonly updateDocument?: Maybe<Documents>;
  /** update single row of the table: "document_items" */
  readonly updateDocumentItem?: Maybe<DocumentItems>;
  /** update data of the table: "document_items" */
  readonly updateDocumentItems?: Maybe<DocumentItems_Mutation_Response>;
  /** update data of the table: "documents" */
  readonly updateDocuments?: Maybe<Documents_Mutation_Response>;
  /** update data of the table: "document_members" */
  readonly update_document_members?: Maybe<Document_Members_Mutation_Response>;
  /** update single row of the table: "document_members" */
  readonly update_document_members_by_pk?: Maybe<Document_Members>;
  /** update data of the table: "document_roles" */
  readonly update_document_roles?: Maybe<Document_Roles_Mutation_Response>;
  /** update single row of the table: "document_roles" */
  readonly update_document_roles_by_pk?: Maybe<Document_Roles>;
  /** update data of the table: "users" */
  readonly update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  readonly update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDeleteDocumentArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteDocumentItemArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteDocumentItemsArgs = {
  where: DocumentItems_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteDocumentsArgs = {
  where: Documents_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Document_MembersArgs = {
  where: Document_Members_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Document_Members_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Document_RolesArgs = {
  where: Document_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Document_Roles_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  email: Scalars['String'];
  idpId: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsertDocumentArgs = {
  object: Documents_Insert_Input;
  on_conflict?: InputMaybe<Documents_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertDocumentItemArgs = {
  object: DocumentItems_Insert_Input;
  on_conflict?: InputMaybe<DocumentItems_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertDocumentItemsArgs = {
  objects: ReadonlyArray<DocumentItems_Insert_Input>;
  on_conflict?: InputMaybe<DocumentItems_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertDocumentsArgs = {
  objects: ReadonlyArray<Documents_Insert_Input>;
  on_conflict?: InputMaybe<Documents_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Document_MembersArgs = {
  objects: ReadonlyArray<Document_Members_Insert_Input>;
  on_conflict?: InputMaybe<Document_Members_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Document_Members_OneArgs = {
  object: Document_Members_Insert_Input;
  on_conflict?: InputMaybe<Document_Members_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Document_RolesArgs = {
  objects: ReadonlyArray<Document_Roles_Insert_Input>;
  on_conflict?: InputMaybe<Document_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Document_Roles_OneArgs = {
  object: Document_Roles_Insert_Input;
  on_conflict?: InputMaybe<Document_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: ReadonlyArray<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdateDocumentArgs = {
  _set?: InputMaybe<Documents_Set_Input>;
  pk_columns: Documents_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateDocumentItemArgs = {
  _append?: InputMaybe<DocumentItems_Append_Input>;
  _delete_at_path?: InputMaybe<DocumentItems_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<DocumentItems_Delete_Elem_Input>;
  _delete_key?: InputMaybe<DocumentItems_Delete_Key_Input>;
  _inc?: InputMaybe<DocumentItems_Inc_Input>;
  _prepend?: InputMaybe<DocumentItems_Prepend_Input>;
  _set?: InputMaybe<DocumentItems_Set_Input>;
  pk_columns: DocumentItems_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateDocumentItemsArgs = {
  _append?: InputMaybe<DocumentItems_Append_Input>;
  _delete_at_path?: InputMaybe<DocumentItems_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<DocumentItems_Delete_Elem_Input>;
  _delete_key?: InputMaybe<DocumentItems_Delete_Key_Input>;
  _inc?: InputMaybe<DocumentItems_Inc_Input>;
  _prepend?: InputMaybe<DocumentItems_Prepend_Input>;
  _set?: InputMaybe<DocumentItems_Set_Input>;
  where: DocumentItems_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateDocumentsArgs = {
  _set?: InputMaybe<Documents_Set_Input>;
  where: Documents_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Document_MembersArgs = {
  _set?: InputMaybe<Document_Members_Set_Input>;
  where: Document_Members_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Document_Members_By_PkArgs = {
  _set?: InputMaybe<Document_Members_Set_Input>;
  pk_columns: Document_Members_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Document_RolesArgs = {
  _set?: InputMaybe<Document_Roles_Set_Input>;
  where: Document_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Document_Roles_By_PkArgs = {
  _set?: InputMaybe<Document_Roles_Set_Input>;
  pk_columns: Document_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export type Order_By =
  /** in ascending order, nulls last */
  | 'asc'
  /** in ascending order, nulls first */
  | 'asc_nulls_first'
  /** in ascending order, nulls last */
  | 'asc_nulls_last'
  /** in descending order, nulls first */
  | 'desc'
  /** in descending order, nulls first */
  | 'desc_nulls_first'
  /** in descending order, nulls last */
  | 'desc_nulls_last';

export type Query_Root = {
  readonly __typename?: 'query_root';
  /** fetch data from the table: "documents" using primary key columns */
  readonly document?: Maybe<Documents>;
  /** fetch data from the table: "document_items" using primary key columns */
  readonly documentItem?: Maybe<DocumentItems>;
  /** fetch data from the table: "document_items" */
  readonly documentItems: ReadonlyArray<DocumentItems>;
  /** fetch aggregated fields from the table: "document_items" */
  readonly documentItemsAggr: DocumentItems_Aggregate;
  /** fetch data from the table: "document_members" */
  readonly document_members: ReadonlyArray<Document_Members>;
  /** An aggregate relationship */
  readonly document_members_aggregate: Document_Members_Aggregate;
  /** fetch data from the table: "document_members" using primary key columns */
  readonly document_members_by_pk?: Maybe<Document_Members>;
  /** fetch data from the table: "document_roles" */
  readonly document_roles: ReadonlyArray<Document_Roles>;
  /** fetch aggregated fields from the table: "document_roles" */
  readonly document_roles_aggregate: Document_Roles_Aggregate;
  /** fetch data from the table: "document_roles" using primary key columns */
  readonly document_roles_by_pk?: Maybe<Document_Roles>;
  /** fetch data from the table: "documents" */
  readonly documents: ReadonlyArray<Documents>;
  /** fetch aggregated fields from the table: "documents" */
  readonly documentsAggr: Documents_Aggregate;
  /** fetch data from the table: "users" */
  readonly users: ReadonlyArray<Users>;
  /** fetch aggregated fields from the table: "users" */
  readonly users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  readonly users_by_pk?: Maybe<Users>;
};


export type Query_RootDocumentArgs = {
  id: Scalars['uuid'];
};


export type Query_RootDocumentItemArgs = {
  id: Scalars['uuid'];
};


export type Query_RootDocumentItemsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<DocumentItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<DocumentItems_Order_By>>;
  where?: InputMaybe<DocumentItems_Bool_Exp>;
};


export type Query_RootDocumentItemsAggrArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<DocumentItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<DocumentItems_Order_By>>;
  where?: InputMaybe<DocumentItems_Bool_Exp>;
};


export type Query_RootDocument_MembersArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Document_Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Document_Members_Order_By>>;
  where?: InputMaybe<Document_Members_Bool_Exp>;
};


export type Query_RootDocument_Members_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Document_Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Document_Members_Order_By>>;
  where?: InputMaybe<Document_Members_Bool_Exp>;
};


export type Query_RootDocument_Members_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootDocument_RolesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Document_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Document_Roles_Order_By>>;
  where?: InputMaybe<Document_Roles_Bool_Exp>;
};


export type Query_RootDocument_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Document_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Document_Roles_Order_By>>;
  where?: InputMaybe<Document_Roles_Bool_Exp>;
};


export type Query_RootDocument_Roles_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootDocumentsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Documents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Documents_Order_By>>;
  where?: InputMaybe<Documents_Bool_Exp>;
};


export type Query_RootDocumentsAggrArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Documents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Documents_Order_By>>;
  where?: InputMaybe<Documents_Bool_Exp>;
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  email: Scalars['String'];
  idpId: Scalars['String'];
};

export type Subscription_Root = {
  readonly __typename?: 'subscription_root';
  /** fetch data from the table: "documents" using primary key columns */
  readonly document?: Maybe<Documents>;
  /** fetch data from the table: "document_items" using primary key columns */
  readonly documentItem?: Maybe<DocumentItems>;
  /** fetch data from the table: "document_items" */
  readonly documentItems: ReadonlyArray<DocumentItems>;
  /** fetch aggregated fields from the table: "document_items" */
  readonly documentItemsAggr: DocumentItems_Aggregate;
  /** fetch data from the table: "document_members" */
  readonly document_members: ReadonlyArray<Document_Members>;
  /** An aggregate relationship */
  readonly document_members_aggregate: Document_Members_Aggregate;
  /** fetch data from the table: "document_members" using primary key columns */
  readonly document_members_by_pk?: Maybe<Document_Members>;
  /** fetch data from the table: "document_roles" */
  readonly document_roles: ReadonlyArray<Document_Roles>;
  /** fetch aggregated fields from the table: "document_roles" */
  readonly document_roles_aggregate: Document_Roles_Aggregate;
  /** fetch data from the table: "document_roles" using primary key columns */
  readonly document_roles_by_pk?: Maybe<Document_Roles>;
  /** fetch data from the table: "documents" */
  readonly documents: ReadonlyArray<Documents>;
  /** fetch aggregated fields from the table: "documents" */
  readonly documentsAggr: Documents_Aggregate;
  /** fetch data from the table: "users" */
  readonly users: ReadonlyArray<Users>;
  /** fetch aggregated fields from the table: "users" */
  readonly users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  readonly users_by_pk?: Maybe<Users>;
};


export type Subscription_RootDocumentArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootDocumentItemArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootDocumentItemsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<DocumentItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<DocumentItems_Order_By>>;
  where?: InputMaybe<DocumentItems_Bool_Exp>;
};


export type Subscription_RootDocumentItemsAggrArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<DocumentItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<DocumentItems_Order_By>>;
  where?: InputMaybe<DocumentItems_Bool_Exp>;
};


export type Subscription_RootDocument_MembersArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Document_Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Document_Members_Order_By>>;
  where?: InputMaybe<Document_Members_Bool_Exp>;
};


export type Subscription_RootDocument_Members_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Document_Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Document_Members_Order_By>>;
  where?: InputMaybe<Document_Members_Bool_Exp>;
};


export type Subscription_RootDocument_Members_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootDocument_RolesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Document_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Document_Roles_Order_By>>;
  where?: InputMaybe<Document_Roles_Bool_Exp>;
};


export type Subscription_RootDocument_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Document_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Document_Roles_Order_By>>;
  where?: InputMaybe<Document_Roles_Bool_Exp>;
};


export type Subscription_RootDocument_Roles_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootDocumentsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Documents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Documents_Order_By>>;
  where?: InputMaybe<Documents_Bool_Exp>;
};


export type Subscription_RootDocumentsAggrArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Documents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Documents_Order_By>>;
  where?: InputMaybe<Documents_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  email: Scalars['String'];
  idpId: Scalars['String'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['timestamptz']>;
  readonly _gt?: InputMaybe<Scalars['timestamptz']>;
  readonly _gte?: InputMaybe<Scalars['timestamptz']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['timestamptz']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['timestamptz']>;
  readonly _lte?: InputMaybe<Scalars['timestamptz']>;
  readonly _neq?: InputMaybe<Scalars['timestamptz']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['timestamptz']>>;
};

/** stores all users */
export type Users = {
  readonly __typename?: 'users';
  readonly created_at: Scalars['timestamptz'];
  /** fetch data from the table: "document_members" */
  readonly document_members: ReadonlyArray<Document_Members>;
  /** An aggregate relationship */
  readonly document_members_aggregate: Document_Members_Aggregate;
  readonly email: Scalars['String'];
  readonly id: Scalars['uuid'];
  readonly idpId: Scalars['String'];
};


/** stores all users */
export type UsersDocument_MembersArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Document_Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Document_Members_Order_By>>;
  where?: InputMaybe<Document_Members_Bool_Exp>;
};


/** stores all users */
export type UsersDocument_Members_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Document_Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Document_Members_Order_By>>;
  where?: InputMaybe<Document_Members_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  readonly __typename?: 'users_aggregate';
  readonly aggregate?: Maybe<Users_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  readonly __typename?: 'users_aggregate_fields';
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Users_Max_Fields>;
  readonly min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Users_Bool_Exp>>;
  readonly _not?: InputMaybe<Users_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Users_Bool_Exp>>;
  readonly created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly document_members?: InputMaybe<Document_Members_Bool_Exp>;
  readonly email?: InputMaybe<String_Comparison_Exp>;
  readonly id?: InputMaybe<Uuid_Comparison_Exp>;
  readonly idpId?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export type Users_Constraint =
  /** unique or primary key constraint */
  | 'users_email_key'
  /** unique or primary key constraint */
  | 'users_id_key'
  /** unique or primary key constraint */
  | 'users_pkey';

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  readonly created_at?: InputMaybe<Scalars['timestamptz']>;
  readonly document_members?: InputMaybe<Document_Members_Arr_Rel_Insert_Input>;
  readonly email?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly idpId?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  readonly __typename?: 'users_max_fields';
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly idpId?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  readonly __typename?: 'users_min_fields';
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly idpId?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  readonly __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  readonly data: Users_Insert_Input;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  readonly constraint: Users_Constraint;
  readonly update_columns?: ReadonlyArray<Users_Update_Column>;
  readonly where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  readonly created_at?: InputMaybe<Order_By>;
  readonly document_members_aggregate?: InputMaybe<Document_Members_Aggregate_Order_By>;
  readonly email?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly idpId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  readonly email: Scalars['String'];
  readonly idpId: Scalars['String'];
};

/** select columns of table "users" */
export type Users_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'email'
  /** column name */
  | 'id'
  /** column name */
  | 'idpId';

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  readonly created_at?: InputMaybe<Scalars['timestamptz']>;
  readonly email?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly idpId?: InputMaybe<Scalars['String']>;
};

/** update columns of table "users" */
export type Users_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'email'
  /** column name */
  | 'id'
  /** column name */
  | 'idpId';

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['uuid']>;
  readonly _gt?: InputMaybe<Scalars['uuid']>;
  readonly _gte?: InputMaybe<Scalars['uuid']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['uuid']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['uuid']>;
  readonly _lte?: InputMaybe<Scalars['uuid']>;
  readonly _neq?: InputMaybe<Scalars['uuid']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['uuid']>>;
};
