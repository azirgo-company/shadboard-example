import { z } from 'zod'
import type { Audit, AuditChange, AuditConnection, AuditDeleteResponse, AuditFilter, AuditFilterUserFilter, AuditSort, AuditSortFields, AuditSubscriptionFilter, AuthResponse, BooleanFieldComparison, BusinessType, CheckListItem, ChecklistItemInput, Company, CompanyContactsArgs, CompanyContactsAggregateArgs, CompanyDealsArgs, CompanyDealsAggregateArgs, CompanyNotesArgs, CompanyNotesAggregateArgs, CompanyAggregateFilter, CompanyAggregateGroupBy, CompanyAggregateGroupByCreatedAtArgs, CompanyAggregateGroupByUpdatedAtArgs, CompanyAggregateResponse, CompanyAvgAggregate, CompanyBusinessTypeFilterComparison, CompanyCompanySizeFilterComparison, CompanyConnection, CompanyContactsAggregateGroupBy, CompanyContactsAggregateResponse, CompanyContactsAvgAggregate, CompanyContactsConnection, CompanyContactsCountAggregate, CompanyContactsMaxAggregate, CompanyContactsMinAggregate, CompanyContactsSumAggregate, CompanyCountAggregate, CompanyCreateInput, CompanyDealsAggregateGroupBy, CompanyDealsAggregateResponse, CompanyDealsAvgAggregate, CompanyDealsConnection, CompanyDealsCountAggregate, CompanyDealsMaxAggregate, CompanyDealsMinAggregate, CompanyDealsSumAggregate, CompanyDeleteFilter, CompanyDeleteResponse, CompanyFilter, CompanyFilterCompanyNoteFilter, CompanyFilterContactFilter, CompanyFilterDealFilter, CompanyFilterUserFilter, CompanyIndustryFilterComparison, CompanyMaxAggregate, CompanyMinAggregate, CompanyNote, CompanyNoteAggregateFilter, CompanyNoteConnection, CompanyNoteCreateInput, CompanyNoteDeleteFilter, CompanyNoteDeleteResponse, CompanyNoteFilter, CompanyNoteFilterCompanyFilter, CompanyNoteFilterUserFilter, CompanyNoteSort, CompanyNoteSortFields, CompanyNoteSubscriptionFilter, CompanyNoteUpdateFilter, CompanyNoteUpdateInput, CompanyNotesAggregateGroupBy, CompanyNotesAggregateResponse, CompanyNotesAvgAggregate, CompanyNotesConnection, CompanyNotesCountAggregate, CompanyNotesMaxAggregate, CompanyNotesMinAggregate, CompanyNotesSumAggregate, CompanySize, CompanySort, CompanySortFields, CompanySubscriptionFilter, CompanySumAggregate, CompanyUpdateFilter, CompanyUpdateInput, Contact, ContactDealsArgs, ContactNotesArgs, ContactAggregateFilter, ContactConnection, ContactCreateInput, ContactDealsConnection, ContactDeleteFilter, ContactDeleteResponse, ContactFilter, ContactFilterCompanyFilter, ContactFilterContactNoteFilter, ContactFilterDealFilter, ContactFilterUserFilter, ContactNote, ContactNoteConnection, ContactNoteCreateInput, ContactNoteDeleteFilter, ContactNoteDeleteResponse, ContactNoteFilter, ContactNoteFilterContactFilter, ContactNoteFilterUserFilter, ContactNoteSort, ContactNoteSortFields, ContactNoteSubscriptionFilter, ContactNoteUpdateFilter, ContactNoteUpdateInput, ContactNotesConnection, ContactSort, ContactSortFields, ContactStage, ContactStageFilterComparison, ContactStatus, ContactStatusFilterComparison, ContactSubscriptionFilter, ContactUpdateFilter, ContactUpdateInput, CreateAuditSubscriptionFilterInput, CreateCompanyNoteSubscriptionFilterInput, CreateCompanySubscriptionFilterInput, CreateContactNoteSubscriptionFilterInput, CreateContactSubscriptionFilterInput, CreateDealStageSubscriptionFilterInput, CreateDealSubscriptionFilterInput, CreateEventCategorySubscriptionFilterInput, CreateEventSubscriptionFilterInput, CreateManyCompaniesInput, CreateManyCompanyNotesInput, CreateManyContactNotesInput, CreateManyContactsInput, CreateManyDealStagesInput, CreateManyDealsInput, CreateManyEventCategoriesInput, CreateManyEventsInput, CreateManyQuotesInput, CreateManyTaskCommentsInput, CreateManyTaskStagesInput, CreateManyTasksInput, CreateManyUsersInput, CreateOneCompanyInput, CreateOneCompanyNoteInput, CreateOneContactInput, CreateOneContactNoteInput, CreateOneDealInput, CreateOneDealStageInput, CreateOneEventCategoryInput, CreateOneEventInput, CreateOneQuoteInput, CreateOneTaskCommentInput, CreateOneTaskInput, CreateOneTaskStageInput, CreateOneUserInput, CreateQuoteSubscriptionFilterInput, CreateTaskCommentSubscriptionFilterInput, CreateTaskStageSubscriptionFilterInput, CreateTaskSubscriptionFilterInput, CreateUserSubscriptionFilterInput, DateFieldComparison, DateFieldComparisonBetween, Deal, DealAggregateFilter, DealAggregateGroupBy, DealAggregateGroupByCreatedAtArgs, DealAggregateGroupByUpdatedAtArgs, DealAggregateResponse, DealAvgAggregate, DealConnection, DealCountAggregate, DealCreateInput, DealDeleteFilter, DealDeleteResponse, DealFilter, DealFilterCompanyFilter, DealFilterContactFilter, DealFilterDealStageFilter, DealFilterUserFilter, DealMaxAggregate, DealMinAggregate, DealSort, DealSortFields, DealStage, DealStageDealsArgs, DealStageDealsAggregateArgs, DealStageConnection, DealStageCreateInput, DealStageDealsAggregateGroupBy, DealStageDealsAggregateResponse, DealStageDealsAvgAggregate, DealStageDealsCountAggregate, DealStageDealsMaxAggregate, DealStageDealsMinAggregate, DealStageDealsSumAggregate, DealStageDeleteFilter, DealStageDeleteResponse, DealStageFilter, DealStageFilterDealFilter, DealStageFilterUserFilter, DealStageSort, DealStageSortFields, DealStageSubscriptionFilter, DealStageUpdateFilter, DealStageUpdateInput, DealSubscriptionFilter, DealSumAggregate, DealUpdateFilter, DealUpdateInput, DeleteManyCompaniesInput, DeleteManyCompanyNotesInput, DeleteManyContactNotesInput, DeleteManyContactsInput, DeleteManyDealStagesInput, DeleteManyDealsInput, DeleteManyEventCategoriesInput, DeleteManyEventsInput, DeleteManyQuotesInput, DeleteManyResponse, DeleteManyTaskCommentsInput, DeleteManyTaskStagesInput, DeleteManyTasksInput, DeleteManyUsersInput, DeleteOneAuditSubscriptionFilterInput, DeleteOneCompanyInput, DeleteOneCompanyNoteInput, DeleteOneCompanyNoteSubscriptionFilterInput, DeleteOneCompanySubscriptionFilterInput, DeleteOneContactInput, DeleteOneContactNoteInput, DeleteOneContactNoteSubscriptionFilterInput, DeleteOneContactSubscriptionFilterInput, DeleteOneDealInput, DeleteOneDealStageInput, DeleteOneDealStageSubscriptionFilterInput, DeleteOneDealSubscriptionFilterInput, DeleteOneEventCategoryInput, DeleteOneEventCategorySubscriptionFilterInput, DeleteOneEventInput, DeleteOneEventSubscriptionFilterInput, DeleteOneQuoteInput, DeleteOneQuoteSubscriptionFilterInput, DeleteOneTaskCommentInput, DeleteOneTaskCommentSubscriptionFilterInput, DeleteOneTaskInput, DeleteOneTaskStageInput, DeleteOneTaskStageSubscriptionFilterInput, DeleteOneTaskSubscriptionFilterInput, DeleteOneUserInput, DeleteOneUserSubscriptionFilterInput, Event, EventParticipantsArgs, EventCategory, EventCategoryEventsArgs, EventCategoryConnection, EventCategoryCreateInput, EventCategoryDeleteFilter, EventCategoryDeleteResponse, EventCategoryFilter, EventCategoryFilterUserFilter, EventCategorySort, EventCategorySortFields, EventCategorySubscriptionFilter, EventCategoryUpdateFilter, EventCategoryUpdateInput, EventConnection, EventCreateInput, EventDeleteFilter, EventDeleteResponse, EventFilter, EventFilterEventCategoryFilter, EventFilterUserFilter, EventSort, EventSortFields, EventSubscriptionFilter, EventUpdateFilter, EventUpdateInput, FloatFieldComparison, FloatFieldComparisonBetween, GroupBy, IdFilterComparison, Industry, IntFieldComparison, IntFieldComparisonBetween, LoginInput, NumberFieldComparison, NumberFieldComparisonBetween, OffsetPageInfo, OffsetPaging, Quote, QuoteConnection, QuoteCreateInput, QuoteDeleteFilter, QuoteDeleteResponse, QuoteFilter, QuoteFilterCompanyFilter, QuoteFilterContactFilter, QuoteFilterUserFilter, QuoteItem, QuoteItemInput, QuoteSort, QuoteSortFields, QuoteStatus, QuoteStatusFilterComparison, QuoteSubscriptionFilter, QuoteUpdateFilter, QuoteUpdateInput, RegisterInput, Role, SortDirection, SortNulls, StringFieldComparison, Task, TaskCommentsArgs, TaskCommentsAggregateArgs, TaskUsersArgs, TaskUsersAggregateArgs, TaskAggregateFilter, TaskAggregateGroupBy, TaskAggregateGroupByCreatedAtArgs, TaskAggregateGroupByDueDateArgs, TaskAggregateGroupByUpdatedAtArgs, TaskAggregateResponse, TaskAvgAggregate, TaskComment, TaskCommentAggregateFilter, TaskCommentConnection, TaskCommentCreateInput, TaskCommentDeleteFilter, TaskCommentDeleteResponse, TaskCommentFilter, TaskCommentFilterTaskFilter, TaskCommentFilterUserFilter, TaskCommentSort, TaskCommentSortFields, TaskCommentSubscriptionFilter, TaskCommentUpdateFilter, TaskCommentUpdateInput, TaskCommentsAggregateGroupBy, TaskCommentsAggregateResponse, TaskCommentsAvgAggregate, TaskCommentsConnection, TaskCommentsCountAggregate, TaskCommentsMaxAggregate, TaskCommentsMinAggregate, TaskCommentsSumAggregate, TaskConnection, TaskCountAggregate, TaskCreateInput, TaskDeleteFilter, TaskDeleteResponse, TaskFilter, TaskFilterTaskCommentFilter, TaskFilterTaskStageFilter, TaskFilterUserFilter, TaskMaxAggregate, TaskMinAggregate, TaskSort, TaskSortFields, TaskStage, TaskStageTasksArgs, TaskStageTasksAggregateArgs, TaskStageAggregateFilter, TaskStageAggregateGroupBy, TaskStageAggregateGroupByCreatedAtArgs, TaskStageAggregateGroupByUpdatedAtArgs, TaskStageAggregateResponse, TaskStageAvgAggregate, TaskStageConnection, TaskStageCountAggregate, TaskStageCreateInput, TaskStageDeleteFilter, TaskStageDeleteResponse, TaskStageFilter, TaskStageFilterUserFilter, TaskStageMaxAggregate, TaskStageMinAggregate, TaskStageSort, TaskStageSortFields, TaskStageSubscriptionFilter, TaskStageSumAggregate, TaskStageTasksAggregateGroupBy, TaskStageTasksAggregateResponse, TaskStageTasksAvgAggregate, TaskStageTasksCountAggregate, TaskStageTasksMaxAggregate, TaskStageTasksMinAggregate, TaskStageTasksSumAggregate, TaskStageUpdateFilter, TaskStageUpdateInput, TaskSubscriptionFilter, TaskSumAggregate, TaskUpdateFilter, TaskUpdateInput, TaskUsersAggregateGroupBy, TaskUsersAggregateResponse, TaskUsersAvgAggregate, TaskUsersCountAggregate, TaskUsersMaxAggregate, TaskUsersMinAggregate, TaskUsersSumAggregate, UpdateManyCompaniesInput, UpdateManyCompanyNotesInput, UpdateManyContactNotesInput, UpdateManyContactsInput, UpdateManyDealStagesInput, UpdateManyDealsInput, UpdateManyEventCategoriesInput, UpdateManyEventsInput, UpdateManyQuotesInput, UpdateManyResponse, UpdateManyTaskCommentsInput, UpdateManyTaskStagesInput, UpdateManyTasksInput, UpdateManyUsersInput, UpdateOneAuditSubscriptionFilterInput, UpdateOneCompanyInput, UpdateOneCompanyNoteInput, UpdateOneCompanyNoteSubscriptionFilterInput, UpdateOneCompanySubscriptionFilterInput, UpdateOneContactInput, UpdateOneContactNoteInput, UpdateOneContactNoteSubscriptionFilterInput, UpdateOneContactSubscriptionFilterInput, UpdateOneDealInput, UpdateOneDealStageInput, UpdateOneDealStageSubscriptionFilterInput, UpdateOneDealSubscriptionFilterInput, UpdateOneEventCategoryInput, UpdateOneEventCategorySubscriptionFilterInput, UpdateOneEventInput, UpdateOneEventSubscriptionFilterInput, UpdateOneQuoteInput, UpdateOneQuoteSubscriptionFilterInput, UpdateOneTaskCommentInput, UpdateOneTaskCommentSubscriptionFilterInput, UpdateOneTaskInput, UpdateOneTaskStageInput, UpdateOneTaskStageSubscriptionFilterInput, UpdateOneTaskSubscriptionFilterInput, UpdateOneUserInput, UpdateOneUserSubscriptionFilterInput, User, UserCompaniesArgs, UserContactsArgs, UserDealsArgs, UserEventsArgs, UserTasksArgs, UserAggregateFilter, UserCompaniesConnection, UserConnection, UserContactsConnection, UserCreateInput, UserDealsConnection, UserDeleteFilter, UserDeleteResponse, UserEventsConnection, UserFilter, UserFilterCompanyFilter, UserFilterContactFilter, UserFilterDealFilter, UserFilterEventFilter, UserFilterTaskFilter, UserFilterUserFilter, UserRoleFilterComparison, UserSort, UserSortFields, UserSubscriptionFilter, UserTasksConnection, UserUpdateFilter, UserUpdateInput } from './schema.types'

type Properties<T> = Required<{
  [K in keyof T]: z.ZodType<T[K], any, T[K]>;
}>;

type definedNonNullAny = {};

export const isDefinedNonNullAny = (v: any): v is definedNonNullAny => v !== undefined && v !== null;

export const definedNonNullAnySchema = z.any().refine((v) => isDefinedNonNullAny(v));

export const AuditSortFieldsSchema = z.enum(['action', 'createdAt', 'id', 'targetEntity', 'targetId', 'updatedAt']);

export const BusinessTypeSchema = z.enum(['B2B', 'B2C', 'B2G']);

export const CompanyNoteSortFieldsSchema = z.enum(['createdAt', 'id', 'updatedAt']);

export const CompanySizeSchema = z.enum(['ENTERPRISE', 'LARGE', 'MEDIUM', 'SMALL']);

export const CompanySortFieldsSchema = z.enum(['businessType', 'companySize', 'country', 'createdAt', 'id', 'industry', 'name', 'totalRevenue', 'updatedAt', 'website']);

export const ContactNoteSortFieldsSchema = z.enum(['createdAt', 'id', 'updatedAt']);

export const ContactSortFieldsSchema = z.enum(['createdAt', 'email', 'id', 'jobTitle', 'name', 'phone', 'score', 'stage', 'status', 'timezone', 'updatedAt']);

export const ContactStageSchema = z.enum(['CUSTOMER', 'LEAD', 'SALES_QUALIFIED_LEAD']);

export const ContactStatusSchema = z.enum(['CHURNED', 'CONTACTED', 'INTERESTED', 'LOST', 'NEGOTIATION', 'NEW', 'QUALIFIED', 'UNQUALIFIED', 'WON']);

export const DealSortFieldsSchema = z.enum(['closeDateDay', 'closeDateMonth', 'closeDateYear', 'companyId', 'createdAt', 'dealOwnerId', 'id', 'stageId', 'title', 'updatedAt', 'value']);

export const DealStageSortFieldsSchema = z.enum(['createdAt', 'id', 'title', 'updatedAt']);

export const EventCategorySortFieldsSchema = z.enum(['createdAt', 'id', 'title', 'updatedAt']);

export const EventSortFieldsSchema = z.enum(['createdAt', 'description', 'endDate', 'id', 'startDate', 'title', 'updatedAt']);

export const GroupBySchema = z.enum(['DAY', 'MONTH', 'WEEK', 'YEAR']);

export const IndustrySchema = z.enum(['AEROSPACE', 'AGRICULTURE', 'AUTOMOTIVE', 'CHEMICALS', 'CONSTRUCTION', 'DEFENSE', 'EDUCATION', 'ENERGY', 'FINANCIAL_SERVICES', 'FOOD_AND_BEVERAGE', 'GOVERNMENT', 'HEALTHCARE', 'HOSPITALITY', 'INDUSTRIAL_MANUFACTURING', 'INSURANCE', 'LIFE_SCIENCES', 'LOGISTICS', 'MEDIA', 'MINING', 'NONPROFIT', 'OTHER', 'PHARMACEUTICALS', 'PROFESSIONAL_SERVICES', 'REAL_ESTATE', 'RETAIL', 'TECHNOLOGY', 'TELECOMMUNICATIONS', 'TRANSPORTATION', 'UTILITIES']);

export const QuoteSortFieldsSchema = z.enum(['createdAt', 'id', 'status', 'title', 'total', 'updatedAt']);

export const QuoteStatusSchema = z.enum(['ACCEPTED', 'DRAFT', 'SENT']);

export const RoleSchema = z.enum(['ADMIN', 'SALES_INTERN', 'SALES_MANAGER', 'SALES_PERSON']);

export const SortDirectionSchema = z.enum(['ASC', 'DESC']);

export const SortNullsSchema = z.enum(['NULLS_FIRST', 'NULLS_LAST']);

export const TaskCommentSortFieldsSchema = z.enum(['createdAt', 'id', 'updatedAt']);

export const TaskSortFieldsSchema = z.enum(['completed', 'createdAt', 'description', 'dueDate', 'id', 'stageId', 'title', 'updatedAt']);

export const TaskStageSortFieldsSchema = z.enum(['createdAt', 'id', 'title', 'updatedAt']);

export const UserSortFieldsSchema = z.enum(['createdAt', 'email', 'id', 'jobTitle', 'name', 'phone', 'role', 'timezone', 'updatedAt']);

export function AuditSchema(): z.ZodObject<Properties<Audit>> {
  return z.object({
    __typename: z.literal('Audit').optional(),
    action: z.string(),
    changes: z.array(z.lazy(() => AuditChangeSchema())),
    createdAt: z.string().datetime(),
    id: z.string(),
    targetEntity: z.string(),
    targetId: z.number(),
    updatedAt: z.string().datetime(),
    user: z.lazy(() => UserSchema().nullish())
  })
}

export function AuditChangeSchema(): z.ZodObject<Properties<AuditChange>> {
  return z.object({
    __typename: z.literal('AuditChange').optional(),
    field: z.string(),
    from: z.string().nullish(),
    to: z.string().nullish()
  })
}

export function AuditConnectionSchema(): z.ZodObject<Properties<AuditConnection>> {
  return z.object({
    __typename: z.literal('AuditConnection').optional(),
    nodes: z.array(z.lazy(() => AuditSchema())),
    pageInfo: z.lazy(() => OffsetPageInfoSchema()),
    totalCount: z.number()
  })
}

export function AuditDeleteResponseSchema(): z.ZodObject<Properties<AuditDeleteResponse>> {
  return z.object({
    __typename: z.literal('AuditDeleteResponse').optional(),
    action: z.string().nullish(),
    changes: z.array(z.lazy(() => AuditChangeSchema())).nullish(),
    createdAt: z.string().datetime().nullish(),
    id: z.string().nullish(),
    targetEntity: z.string().nullish(),
    targetId: z.number().nullish(),
    updatedAt: z.string().datetime().nullish()
  })
}

export function AuditFilterSchema(): z.ZodObject<Properties<AuditFilter>> {
  return z.object({
    action: z.lazy(() => StringFieldComparisonSchema().nullish()),
    and: z.array(z.lazy(() => AuditFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => AuditFilterSchema())).nullish(),
    targetEntity: z.lazy(() => StringFieldComparisonSchema().nullish()),
    targetId: z.lazy(() => NumberFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    user: z.lazy(() => AuditFilterUserFilterSchema().nullish())
  })
}

export function AuditFilterUserFilterSchema(): z.ZodObject<Properties<AuditFilterUserFilter>> {
  return z.object({
    and: z.array(z.lazy(() => AuditFilterUserFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    email: z.lazy(() => StringFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    jobTitle: z.lazy(() => StringFieldComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => AuditFilterUserFilterSchema())).nullish(),
    phone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    role: z.lazy(() => UserRoleFilterComparisonSchema().nullish()),
    timezone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function AuditSortSchema(): z.ZodObject<Properties<AuditSort>> {
  return z.object({
    direction: SortDirectionSchema,
    field: AuditSortFieldsSchema,
    nulls: SortNullsSchema.nullish()
  })
}

export function AuditSubscriptionFilterSchema(): z.ZodObject<Properties<AuditSubscriptionFilter>> {
  return z.object({
    action: z.lazy(() => StringFieldComparisonSchema().nullish()),
    and: z.array(z.lazy(() => AuditSubscriptionFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => AuditSubscriptionFilterSchema())).nullish(),
    targetEntity: z.lazy(() => StringFieldComparisonSchema().nullish()),
    targetId: z.lazy(() => NumberFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function AuthResponseSchema(): z.ZodObject<Properties<AuthResponse>> {
  return z.object({
    __typename: z.literal('AuthResponse').optional(),
    accessToken: z.string(),
    refreshToken: z.string(),
    user: z.lazy(() => UserSchema())
  })
}

export function BooleanFieldComparisonSchema(): z.ZodObject<Properties<BooleanFieldComparison>> {
  return z.object({
    is: z.boolean().nullish(),
    isNot: z.boolean().nullish()
  })
}

export function CheckListItemSchema(): z.ZodObject<Properties<CheckListItem>> {
  return z.object({
    __typename: z.literal('CheckListItem').optional(),
    checked: z.boolean(),
    title: z.string()
  })
}

export function ChecklistItemInputSchema(): z.ZodObject<Properties<ChecklistItemInput>> {
  return z.object({
    checked: z.boolean(),
    title: z.string()
  })
}

export function CompanySchema(): z.ZodObject<Properties<Company>> {
  return z.object({
    __typename: z.literal('Company').optional(),
    avatarUrl: z.string().nullish(),
    businessType: BusinessTypeSchema.nullish(),
    companySize: CompanySizeSchema.nullish(),
    contacts: z.lazy(() => CompanyContactsConnectionSchema()),
    contactsAggregate: z.array(z.lazy(() => CompanyContactsAggregateResponseSchema())),
    country: z.string().nullish(),
    createdAt: z.string().datetime(),
    createdBy: z.lazy(() => UserSchema()),
    deals: z.lazy(() => CompanyDealsConnectionSchema()),
    dealsAggregate: z.array(z.lazy(() => CompanyDealsAggregateResponseSchema())),
    id: z.string(),
    industry: IndustrySchema.nullish(),
    name: z.string(),
    notes: z.lazy(() => CompanyNotesConnectionSchema()),
    notesAggregate: z.array(z.lazy(() => CompanyNotesAggregateResponseSchema())),
    salesOwner: z.lazy(() => UserSchema()),
    totalRevenue: z.number().nullish(),
    updatedAt: z.string().datetime(),
    updatedBy: z.lazy(() => UserSchema().nullish()),
    website: z.string().nullish()
  })
}

export function CompanyContactsArgsSchema(): z.ZodObject<Properties<CompanyContactsArgs>> {
  return z.object({
    filter: z.lazy(() => ContactFilterSchema()),
    paging: z.lazy(() => OffsetPagingSchema()),
    sorting: z.array(z.lazy(() => ContactSortSchema()))
  })
}

export function CompanyContactsAggregateArgsSchema(): z.ZodObject<Properties<CompanyContactsAggregateArgs>> {
  return z.object({
    filter: z.lazy(() => ContactAggregateFilterSchema().nullish())
  })
}

export function CompanyDealsArgsSchema(): z.ZodObject<Properties<CompanyDealsArgs>> {
  return z.object({
    filter: z.lazy(() => DealFilterSchema()),
    paging: z.lazy(() => OffsetPagingSchema()),
    sorting: z.array(z.lazy(() => DealSortSchema()))
  })
}

export function CompanyDealsAggregateArgsSchema(): z.ZodObject<Properties<CompanyDealsAggregateArgs>> {
  return z.object({
    filter: z.lazy(() => DealAggregateFilterSchema().nullish())
  })
}

export function CompanyNotesArgsSchema(): z.ZodObject<Properties<CompanyNotesArgs>> {
  return z.object({
    filter: z.lazy(() => CompanyNoteFilterSchema()),
    paging: z.lazy(() => OffsetPagingSchema()),
    sorting: z.array(z.lazy(() => CompanyNoteSortSchema()))
  })
}

export function CompanyNotesAggregateArgsSchema(): z.ZodObject<Properties<CompanyNotesAggregateArgs>> {
  return z.object({
    filter: z.lazy(() => CompanyNoteAggregateFilterSchema().nullish())
  })
}

export function CompanyAggregateFilterSchema(): z.ZodObject<Properties<CompanyAggregateFilter>> {
  return z.object({
    and: z.array(z.lazy(() => CompanyAggregateFilterSchema())).nullish(),
    businessType: z.lazy(() => CompanyBusinessTypeFilterComparisonSchema().nullish()),
    companySize: z.lazy(() => CompanyCompanySizeFilterComparisonSchema().nullish()),
    country: z.lazy(() => StringFieldComparisonSchema().nullish()),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    industry: z.lazy(() => CompanyIndustryFilterComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => CompanyAggregateFilterSchema())).nullish(),
    totalRevenue: z.lazy(() => IntFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    website: z.lazy(() => StringFieldComparisonSchema().nullish())
  })
}

export function CompanyAggregateGroupBySchema(): z.ZodObject<Properties<CompanyAggregateGroupBy>> {
  return z.object({
    __typename: z.literal('CompanyAggregateGroupBy').optional(),
    businessType: BusinessTypeSchema.nullish(),
    companySize: CompanySizeSchema.nullish(),
    country: z.string().nullish(),
    createdAt: z.string().datetime().nullish(),
    id: z.string().nullish(),
    industry: IndustrySchema.nullish(),
    name: z.string().nullish(),
    totalRevenue: z.number().nullish(),
    updatedAt: z.string().datetime().nullish(),
    website: z.string().nullish()
  })
}

export function CompanyAggregateGroupByCreatedAtArgsSchema(): z.ZodObject<Properties<CompanyAggregateGroupByCreatedAtArgs>> {
  return z.object({
    by: GroupBySchema.default("DAY")
  })
}

export function CompanyAggregateGroupByUpdatedAtArgsSchema(): z.ZodObject<Properties<CompanyAggregateGroupByUpdatedAtArgs>> {
  return z.object({
    by: GroupBySchema.default("DAY")
  })
}

export function CompanyAggregateResponseSchema(): z.ZodObject<Properties<CompanyAggregateResponse>> {
  return z.object({
    __typename: z.literal('CompanyAggregateResponse').optional(),
    avg: z.lazy(() => CompanyAvgAggregateSchema().nullish()),
    count: z.lazy(() => CompanyCountAggregateSchema().nullish()),
    groupBy: z.lazy(() => CompanyAggregateGroupBySchema().nullish()),
    max: z.lazy(() => CompanyMaxAggregateSchema().nullish()),
    min: z.lazy(() => CompanyMinAggregateSchema().nullish()),
    sum: z.lazy(() => CompanySumAggregateSchema().nullish())
  })
}

export function CompanyAvgAggregateSchema(): z.ZodObject<Properties<CompanyAvgAggregate>> {
  return z.object({
    __typename: z.literal('CompanyAvgAggregate').optional(),
    id: z.number().nullish(),
    totalRevenue: z.number().nullish()
  })
}

export function CompanyBusinessTypeFilterComparisonSchema(): z.ZodObject<Properties<CompanyBusinessTypeFilterComparison>> {
  return z.object({
    eq: BusinessTypeSchema.nullish(),
    in: z.array(BusinessTypeSchema).nullish(),
    neq: BusinessTypeSchema.nullish(),
    notIn: z.array(BusinessTypeSchema).nullish()
  })
}

export function CompanyCompanySizeFilterComparisonSchema(): z.ZodObject<Properties<CompanyCompanySizeFilterComparison>> {
  return z.object({
    eq: CompanySizeSchema.nullish(),
    in: z.array(CompanySizeSchema).nullish(),
    neq: CompanySizeSchema.nullish(),
    notIn: z.array(CompanySizeSchema).nullish()
  })
}

export function CompanyConnectionSchema(): z.ZodObject<Properties<CompanyConnection>> {
  return z.object({
    __typename: z.literal('CompanyConnection').optional(),
    nodes: z.array(z.lazy(() => CompanySchema())),
    pageInfo: z.lazy(() => OffsetPageInfoSchema()),
    totalCount: z.number()
  })
}

export function CompanyContactsAggregateGroupBySchema(): z.ZodObject<Properties<CompanyContactsAggregateGroupBy>> {
  return z.object({
    __typename: z.literal('CompanyContactsAggregateGroupBy').optional(),
    createdAt: z.string().datetime().nullish(),
    email: z.string().nullish(),
    id: z.string().nullish(),
    jobTitle: z.string().nullish(),
    name: z.string().nullish(),
    phone: z.string().nullish(),
    score: z.number().nullish(),
    stage: ContactStageSchema.nullish(),
    status: ContactStatusSchema.nullish(),
    timezone: z.string().nullish(),
    updatedAt: z.string().datetime().nullish()
  })
}

export function CompanyContactsAggregateResponseSchema(): z.ZodObject<Properties<CompanyContactsAggregateResponse>> {
  return z.object({
    __typename: z.literal('CompanyContactsAggregateResponse').optional(),
    avg: z.lazy(() => CompanyContactsAvgAggregateSchema().nullish()),
    count: z.lazy(() => CompanyContactsCountAggregateSchema().nullish()),
    groupBy: z.lazy(() => CompanyContactsAggregateGroupBySchema().nullish()),
    max: z.lazy(() => CompanyContactsMaxAggregateSchema().nullish()),
    min: z.lazy(() => CompanyContactsMinAggregateSchema().nullish()),
    sum: z.lazy(() => CompanyContactsSumAggregateSchema().nullish())
  })
}

export function CompanyContactsAvgAggregateSchema(): z.ZodObject<Properties<CompanyContactsAvgAggregate>> {
  return z.object({
    __typename: z.literal('CompanyContactsAvgAggregate').optional(),
    id: z.number().nullish(),
    score: z.number().nullish()
  })
}

export function CompanyContactsConnectionSchema(): z.ZodObject<Properties<CompanyContactsConnection>> {
  return z.object({
    __typename: z.literal('CompanyContactsConnection').optional(),
    nodes: z.array(z.lazy(() => ContactSchema())),
    pageInfo: z.lazy(() => OffsetPageInfoSchema()),
    totalCount: z.number()
  })
}

export function CompanyContactsCountAggregateSchema(): z.ZodObject<Properties<CompanyContactsCountAggregate>> {
  return z.object({
    __typename: z.literal('CompanyContactsCountAggregate').optional(),
    createdAt: z.number().nullish(),
    email: z.number().nullish(),
    id: z.number().nullish(),
    jobTitle: z.number().nullish(),
    name: z.number().nullish(),
    phone: z.number().nullish(),
    score: z.number().nullish(),
    stage: z.number().nullish(),
    status: z.number().nullish(),
    timezone: z.number().nullish(),
    updatedAt: z.number().nullish()
  })
}

export function CompanyContactsMaxAggregateSchema(): z.ZodObject<Properties<CompanyContactsMaxAggregate>> {
  return z.object({
    __typename: z.literal('CompanyContactsMaxAggregate').optional(),
    createdAt: z.string().datetime().nullish(),
    email: z.string().nullish(),
    id: z.string().nullish(),
    jobTitle: z.string().nullish(),
    name: z.string().nullish(),
    phone: z.string().nullish(),
    score: z.number().nullish(),
    stage: ContactStageSchema.nullish(),
    status: ContactStatusSchema.nullish(),
    timezone: z.string().nullish(),
    updatedAt: z.string().datetime().nullish()
  })
}

export function CompanyContactsMinAggregateSchema(): z.ZodObject<Properties<CompanyContactsMinAggregate>> {
  return z.object({
    __typename: z.literal('CompanyContactsMinAggregate').optional(),
    createdAt: z.string().datetime().nullish(),
    email: z.string().nullish(),
    id: z.string().nullish(),
    jobTitle: z.string().nullish(),
    name: z.string().nullish(),
    phone: z.string().nullish(),
    score: z.number().nullish(),
    stage: ContactStageSchema.nullish(),
    status: ContactStatusSchema.nullish(),
    timezone: z.string().nullish(),
    updatedAt: z.string().datetime().nullish()
  })
}

export function CompanyContactsSumAggregateSchema(): z.ZodObject<Properties<CompanyContactsSumAggregate>> {
  return z.object({
    __typename: z.literal('CompanyContactsSumAggregate').optional(),
    id: z.number().nullish(),
    score: z.number().nullish()
  })
}

export function CompanyCountAggregateSchema(): z.ZodObject<Properties<CompanyCountAggregate>> {
  return z.object({
    __typename: z.literal('CompanyCountAggregate').optional(),
    businessType: z.number().nullish(),
    companySize: z.number().nullish(),
    country: z.number().nullish(),
    createdAt: z.number().nullish(),
    id: z.number().nullish(),
    industry: z.number().nullish(),
    name: z.number().nullish(),
    totalRevenue: z.number().nullish(),
    updatedAt: z.number().nullish(),
    website: z.number().nullish()
  })
}

export function CompanyCreateInputSchema(): z.ZodObject<Properties<CompanyCreateInput>> {
  return z.object({
    businessType: BusinessTypeSchema.nullish(),
    companySize: CompanySizeSchema.nullish(),
    country: z.string().nullish(),
    industry: IndustrySchema.nullish(),
    name: z.string(),
    salesOwnerId: z.string(),
    totalRevenue: z.number().nullish(),
    website: z.string().nullish()
  })
}

export function CompanyDealsAggregateGroupBySchema(): z.ZodObject<Properties<CompanyDealsAggregateGroupBy>> {
  return z.object({
    __typename: z.literal('CompanyDealsAggregateGroupBy').optional(),
    closeDateDay: z.number().nullish(),
    closeDateMonth: z.number().nullish(),
    closeDateYear: z.number().nullish(),
    companyId: z.string().nullish(),
    createdAt: z.string().datetime().nullish(),
    dealOwnerId: z.string().nullish(),
    id: z.string().nullish(),
    stageId: z.string().nullish(),
    title: z.string().nullish(),
    updatedAt: z.string().datetime().nullish(),
    value: z.number().nullish()
  })
}

export function CompanyDealsAggregateResponseSchema(): z.ZodObject<Properties<CompanyDealsAggregateResponse>> {
  return z.object({
    __typename: z.literal('CompanyDealsAggregateResponse').optional(),
    avg: z.lazy(() => CompanyDealsAvgAggregateSchema().nullish()),
    count: z.lazy(() => CompanyDealsCountAggregateSchema().nullish()),
    groupBy: z.lazy(() => CompanyDealsAggregateGroupBySchema().nullish()),
    max: z.lazy(() => CompanyDealsMaxAggregateSchema().nullish()),
    min: z.lazy(() => CompanyDealsMinAggregateSchema().nullish()),
    sum: z.lazy(() => CompanyDealsSumAggregateSchema().nullish())
  })
}

export function CompanyDealsAvgAggregateSchema(): z.ZodObject<Properties<CompanyDealsAvgAggregate>> {
  return z.object({
    __typename: z.literal('CompanyDealsAvgAggregate').optional(),
    closeDateDay: z.number().nullish(),
    closeDateMonth: z.number().nullish(),
    closeDateYear: z.number().nullish(),
    companyId: z.number().nullish(),
    dealOwnerId: z.number().nullish(),
    id: z.number().nullish(),
    stageId: z.number().nullish(),
    value: z.number().nullish()
  })
}

export function CompanyDealsConnectionSchema(): z.ZodObject<Properties<CompanyDealsConnection>> {
  return z.object({
    __typename: z.literal('CompanyDealsConnection').optional(),
    nodes: z.array(z.lazy(() => DealSchema())),
    pageInfo: z.lazy(() => OffsetPageInfoSchema()),
    totalCount: z.number()
  })
}

export function CompanyDealsCountAggregateSchema(): z.ZodObject<Properties<CompanyDealsCountAggregate>> {
  return z.object({
    __typename: z.literal('CompanyDealsCountAggregate').optional(),
    closeDateDay: z.number().nullish(),
    closeDateMonth: z.number().nullish(),
    closeDateYear: z.number().nullish(),
    companyId: z.number().nullish(),
    createdAt: z.number().nullish(),
    dealOwnerId: z.number().nullish(),
    id: z.number().nullish(),
    stageId: z.number().nullish(),
    title: z.number().nullish(),
    updatedAt: z.number().nullish(),
    value: z.number().nullish()
  })
}

export function CompanyDealsMaxAggregateSchema(): z.ZodObject<Properties<CompanyDealsMaxAggregate>> {
  return z.object({
    __typename: z.literal('CompanyDealsMaxAggregate').optional(),
    closeDateDay: z.number().nullish(),
    closeDateMonth: z.number().nullish(),
    closeDateYear: z.number().nullish(),
    companyId: z.string().nullish(),
    createdAt: z.string().datetime().nullish(),
    dealOwnerId: z.string().nullish(),
    id: z.string().nullish(),
    stageId: z.string().nullish(),
    title: z.string().nullish(),
    updatedAt: z.string().datetime().nullish(),
    value: z.number().nullish()
  })
}

export function CompanyDealsMinAggregateSchema(): z.ZodObject<Properties<CompanyDealsMinAggregate>> {
  return z.object({
    __typename: z.literal('CompanyDealsMinAggregate').optional(),
    closeDateDay: z.number().nullish(),
    closeDateMonth: z.number().nullish(),
    closeDateYear: z.number().nullish(),
    companyId: z.string().nullish(),
    createdAt: z.string().datetime().nullish(),
    dealOwnerId: z.string().nullish(),
    id: z.string().nullish(),
    stageId: z.string().nullish(),
    title: z.string().nullish(),
    updatedAt: z.string().datetime().nullish(),
    value: z.number().nullish()
  })
}

export function CompanyDealsSumAggregateSchema(): z.ZodObject<Properties<CompanyDealsSumAggregate>> {
  return z.object({
    __typename: z.literal('CompanyDealsSumAggregate').optional(),
    closeDateDay: z.number().nullish(),
    closeDateMonth: z.number().nullish(),
    closeDateYear: z.number().nullish(),
    companyId: z.number().nullish(),
    dealOwnerId: z.number().nullish(),
    id: z.number().nullish(),
    stageId: z.number().nullish(),
    value: z.number().nullish()
  })
}

export function CompanyDeleteFilterSchema(): z.ZodObject<Properties<CompanyDeleteFilter>> {
  return z.object({
    and: z.array(z.lazy(() => CompanyDeleteFilterSchema())).nullish(),
    businessType: z.lazy(() => CompanyBusinessTypeFilterComparisonSchema().nullish()),
    companySize: z.lazy(() => CompanyCompanySizeFilterComparisonSchema().nullish()),
    country: z.lazy(() => StringFieldComparisonSchema().nullish()),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    industry: z.lazy(() => CompanyIndustryFilterComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => CompanyDeleteFilterSchema())).nullish(),
    totalRevenue: z.lazy(() => IntFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    website: z.lazy(() => StringFieldComparisonSchema().nullish())
  })
}

export function CompanyDeleteResponseSchema(): z.ZodObject<Properties<CompanyDeleteResponse>> {
  return z.object({
    __typename: z.literal('CompanyDeleteResponse').optional(),
    avatarUrl: z.string().nullish(),
    businessType: BusinessTypeSchema.nullish(),
    companySize: CompanySizeSchema.nullish(),
    country: z.string().nullish(),
    createdAt: z.string().datetime().nullish(),
    id: z.string().nullish(),
    industry: IndustrySchema.nullish(),
    name: z.string().nullish(),
    totalRevenue: z.number().nullish(),
    updatedAt: z.string().datetime().nullish(),
    website: z.string().nullish()
  })
}

export function CompanyFilterSchema(): z.ZodObject<Properties<CompanyFilter>> {
  return z.object({
    and: z.array(z.lazy(() => CompanyFilterSchema())).nullish(),
    businessType: z.lazy(() => CompanyBusinessTypeFilterComparisonSchema().nullish()),
    companySize: z.lazy(() => CompanyCompanySizeFilterComparisonSchema().nullish()),
    contacts: z.lazy(() => CompanyFilterContactFilterSchema().nullish()),
    country: z.lazy(() => StringFieldComparisonSchema().nullish()),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    createdBy: z.lazy(() => CompanyFilterUserFilterSchema().nullish()),
    deals: z.lazy(() => CompanyFilterDealFilterSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    industry: z.lazy(() => CompanyIndustryFilterComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    notes: z.lazy(() => CompanyFilterCompanyNoteFilterSchema().nullish()),
    or: z.array(z.lazy(() => CompanyFilterSchema())).nullish(),
    salesOwner: z.lazy(() => CompanyFilterUserFilterSchema().nullish()),
    totalRevenue: z.lazy(() => IntFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    updatedBy: z.lazy(() => CompanyFilterUserFilterSchema().nullish()),
    website: z.lazy(() => StringFieldComparisonSchema().nullish())
  })
}

export function CompanyFilterCompanyNoteFilterSchema(): z.ZodObject<Properties<CompanyFilterCompanyNoteFilter>> {
  return z.object({
    and: z.array(z.lazy(() => CompanyFilterCompanyNoteFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => CompanyFilterCompanyNoteFilterSchema())).nullish(),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function CompanyFilterContactFilterSchema(): z.ZodObject<Properties<CompanyFilterContactFilter>> {
  return z.object({
    and: z.array(z.lazy(() => CompanyFilterContactFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    email: z.lazy(() => StringFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    jobTitle: z.lazy(() => StringFieldComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => CompanyFilterContactFilterSchema())).nullish(),
    phone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    score: z.lazy(() => IntFieldComparisonSchema().nullish()),
    stage: z.lazy(() => ContactStageFilterComparisonSchema().nullish()),
    status: z.lazy(() => ContactStatusFilterComparisonSchema().nullish()),
    timezone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function CompanyFilterDealFilterSchema(): z.ZodObject<Properties<CompanyFilterDealFilter>> {
  return z.object({
    and: z.array(z.lazy(() => CompanyFilterDealFilterSchema())).nullish(),
    closeDateDay: z.lazy(() => IntFieldComparisonSchema().nullish()),
    closeDateMonth: z.lazy(() => IntFieldComparisonSchema().nullish()),
    closeDateYear: z.lazy(() => IntFieldComparisonSchema().nullish()),
    companyId: z.lazy(() => IdFilterComparisonSchema().nullish()),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    dealOwnerId: z.lazy(() => IdFilterComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => CompanyFilterDealFilterSchema())).nullish(),
    stageId: z.lazy(() => IdFilterComparisonSchema().nullish()),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    value: z.lazy(() => FloatFieldComparisonSchema().nullish())
  })
}

export function CompanyFilterUserFilterSchema(): z.ZodObject<Properties<CompanyFilterUserFilter>> {
  return z.object({
    and: z.array(z.lazy(() => CompanyFilterUserFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    email: z.lazy(() => StringFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    jobTitle: z.lazy(() => StringFieldComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => CompanyFilterUserFilterSchema())).nullish(),
    phone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    role: z.lazy(() => UserRoleFilterComparisonSchema().nullish()),
    timezone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function CompanyIndustryFilterComparisonSchema(): z.ZodObject<Properties<CompanyIndustryFilterComparison>> {
  return z.object({
    eq: IndustrySchema.nullish(),
    in: z.array(IndustrySchema).nullish(),
    neq: IndustrySchema.nullish(),
    notIn: z.array(IndustrySchema).nullish()
  })
}

export function CompanyMaxAggregateSchema(): z.ZodObject<Properties<CompanyMaxAggregate>> {
  return z.object({
    __typename: z.literal('CompanyMaxAggregate').optional(),
    businessType: BusinessTypeSchema.nullish(),
    companySize: CompanySizeSchema.nullish(),
    country: z.string().nullish(),
    createdAt: z.string().datetime().nullish(),
    id: z.string().nullish(),
    industry: IndustrySchema.nullish(),
    name: z.string().nullish(),
    totalRevenue: z.number().nullish(),
    updatedAt: z.string().datetime().nullish(),
    website: z.string().nullish()
  })
}

export function CompanyMinAggregateSchema(): z.ZodObject<Properties<CompanyMinAggregate>> {
  return z.object({
    __typename: z.literal('CompanyMinAggregate').optional(),
    businessType: BusinessTypeSchema.nullish(),
    companySize: CompanySizeSchema.nullish(),
    country: z.string().nullish(),
    createdAt: z.string().datetime().nullish(),
    id: z.string().nullish(),
    industry: IndustrySchema.nullish(),
    name: z.string().nullish(),
    totalRevenue: z.number().nullish(),
    updatedAt: z.string().datetime().nullish(),
    website: z.string().nullish()
  })
}

export function CompanyNoteSchema(): z.ZodObject<Properties<CompanyNote>> {
  return z.object({
    __typename: z.literal('CompanyNote').optional(),
    company: z.lazy(() => CompanySchema()),
    createdAt: z.string().datetime(),
    createdBy: z.lazy(() => UserSchema()),
    id: z.string(),
    note: z.string(),
    updatedAt: z.string().datetime(),
    updatedBy: z.lazy(() => UserSchema().nullish())
  })
}

export function CompanyNoteAggregateFilterSchema(): z.ZodObject<Properties<CompanyNoteAggregateFilter>> {
  return z.object({
    and: z.array(z.lazy(() => CompanyNoteAggregateFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => CompanyNoteAggregateFilterSchema())).nullish(),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function CompanyNoteConnectionSchema(): z.ZodObject<Properties<CompanyNoteConnection>> {
  return z.object({
    __typename: z.literal('CompanyNoteConnection').optional(),
    nodes: z.array(z.lazy(() => CompanyNoteSchema())),
    pageInfo: z.lazy(() => OffsetPageInfoSchema()),
    totalCount: z.number()
  })
}

export function CompanyNoteCreateInputSchema(): z.ZodObject<Properties<CompanyNoteCreateInput>> {
  return z.object({
    companyId: z.string(),
    note: z.string()
  })
}

export function CompanyNoteDeleteFilterSchema(): z.ZodObject<Properties<CompanyNoteDeleteFilter>> {
  return z.object({
    and: z.array(z.lazy(() => CompanyNoteDeleteFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => CompanyNoteDeleteFilterSchema())).nullish(),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function CompanyNoteDeleteResponseSchema(): z.ZodObject<Properties<CompanyNoteDeleteResponse>> {
  return z.object({
    __typename: z.literal('CompanyNoteDeleteResponse').optional(),
    createdAt: z.string().datetime().nullish(),
    id: z.string().nullish(),
    note: z.string().nullish(),
    updatedAt: z.string().datetime().nullish()
  })
}

export function CompanyNoteFilterSchema(): z.ZodObject<Properties<CompanyNoteFilter>> {
  return z.object({
    and: z.array(z.lazy(() => CompanyNoteFilterSchema())).nullish(),
    company: z.lazy(() => CompanyNoteFilterCompanyFilterSchema().nullish()),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    createdBy: z.lazy(() => CompanyNoteFilterUserFilterSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => CompanyNoteFilterSchema())).nullish(),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    updatedBy: z.lazy(() => CompanyNoteFilterUserFilterSchema().nullish())
  })
}

export function CompanyNoteFilterCompanyFilterSchema(): z.ZodObject<Properties<CompanyNoteFilterCompanyFilter>> {
  return z.object({
    and: z.array(z.lazy(() => CompanyNoteFilterCompanyFilterSchema())).nullish(),
    businessType: z.lazy(() => CompanyBusinessTypeFilterComparisonSchema().nullish()),
    companySize: z.lazy(() => CompanyCompanySizeFilterComparisonSchema().nullish()),
    country: z.lazy(() => StringFieldComparisonSchema().nullish()),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    industry: z.lazy(() => CompanyIndustryFilterComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => CompanyNoteFilterCompanyFilterSchema())).nullish(),
    totalRevenue: z.lazy(() => IntFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    website: z.lazy(() => StringFieldComparisonSchema().nullish())
  })
}

export function CompanyNoteFilterUserFilterSchema(): z.ZodObject<Properties<CompanyNoteFilterUserFilter>> {
  return z.object({
    and: z.array(z.lazy(() => CompanyNoteFilterUserFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    email: z.lazy(() => StringFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    jobTitle: z.lazy(() => StringFieldComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => CompanyNoteFilterUserFilterSchema())).nullish(),
    phone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    role: z.lazy(() => UserRoleFilterComparisonSchema().nullish()),
    timezone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function CompanyNoteSortSchema(): z.ZodObject<Properties<CompanyNoteSort>> {
  return z.object({
    direction: SortDirectionSchema,
    field: CompanyNoteSortFieldsSchema,
    nulls: SortNullsSchema.nullish()
  })
}

export function CompanyNoteSubscriptionFilterSchema(): z.ZodObject<Properties<CompanyNoteSubscriptionFilter>> {
  return z.object({
    and: z.array(z.lazy(() => CompanyNoteSubscriptionFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => CompanyNoteSubscriptionFilterSchema())).nullish(),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function CompanyNoteUpdateFilterSchema(): z.ZodObject<Properties<CompanyNoteUpdateFilter>> {
  return z.object({
    and: z.array(z.lazy(() => CompanyNoteUpdateFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => CompanyNoteUpdateFilterSchema())).nullish(),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function CompanyNoteUpdateInputSchema(): z.ZodObject<Properties<CompanyNoteUpdateInput>> {
  return z.object({
    note: z.string()
  })
}

export function CompanyNotesAggregateGroupBySchema(): z.ZodObject<Properties<CompanyNotesAggregateGroupBy>> {
  return z.object({
    __typename: z.literal('CompanyNotesAggregateGroupBy').optional(),
    createdAt: z.string().datetime().nullish(),
    id: z.string().nullish(),
    updatedAt: z.string().datetime().nullish()
  })
}

export function CompanyNotesAggregateResponseSchema(): z.ZodObject<Properties<CompanyNotesAggregateResponse>> {
  return z.object({
    __typename: z.literal('CompanyNotesAggregateResponse').optional(),
    avg: z.lazy(() => CompanyNotesAvgAggregateSchema().nullish()),
    count: z.lazy(() => CompanyNotesCountAggregateSchema().nullish()),
    groupBy: z.lazy(() => CompanyNotesAggregateGroupBySchema().nullish()),
    max: z.lazy(() => CompanyNotesMaxAggregateSchema().nullish()),
    min: z.lazy(() => CompanyNotesMinAggregateSchema().nullish()),
    sum: z.lazy(() => CompanyNotesSumAggregateSchema().nullish())
  })
}

export function CompanyNotesAvgAggregateSchema(): z.ZodObject<Properties<CompanyNotesAvgAggregate>> {
  return z.object({
    __typename: z.literal('CompanyNotesAvgAggregate').optional(),
    id: z.number().nullish()
  })
}

export function CompanyNotesConnectionSchema(): z.ZodObject<Properties<CompanyNotesConnection>> {
  return z.object({
    __typename: z.literal('CompanyNotesConnection').optional(),
    nodes: z.array(z.lazy(() => CompanyNoteSchema())),
    pageInfo: z.lazy(() => OffsetPageInfoSchema()),
    totalCount: z.number()
  })
}

export function CompanyNotesCountAggregateSchema(): z.ZodObject<Properties<CompanyNotesCountAggregate>> {
  return z.object({
    __typename: z.literal('CompanyNotesCountAggregate').optional(),
    createdAt: z.number().nullish(),
    id: z.number().nullish(),
    updatedAt: z.number().nullish()
  })
}

export function CompanyNotesMaxAggregateSchema(): z.ZodObject<Properties<CompanyNotesMaxAggregate>> {
  return z.object({
    __typename: z.literal('CompanyNotesMaxAggregate').optional(),
    createdAt: z.string().datetime().nullish(),
    id: z.string().nullish(),
    updatedAt: z.string().datetime().nullish()
  })
}

export function CompanyNotesMinAggregateSchema(): z.ZodObject<Properties<CompanyNotesMinAggregate>> {
  return z.object({
    __typename: z.literal('CompanyNotesMinAggregate').optional(),
    createdAt: z.string().datetime().nullish(),
    id: z.string().nullish(),
    updatedAt: z.string().datetime().nullish()
  })
}

export function CompanyNotesSumAggregateSchema(): z.ZodObject<Properties<CompanyNotesSumAggregate>> {
  return z.object({
    __typename: z.literal('CompanyNotesSumAggregate').optional(),
    id: z.number().nullish()
  })
}

export function CompanySortSchema(): z.ZodObject<Properties<CompanySort>> {
  return z.object({
    direction: SortDirectionSchema,
    field: CompanySortFieldsSchema,
    nulls: SortNullsSchema.nullish()
  })
}

export function CompanySubscriptionFilterSchema(): z.ZodObject<Properties<CompanySubscriptionFilter>> {
  return z.object({
    and: z.array(z.lazy(() => CompanySubscriptionFilterSchema())).nullish(),
    businessType: z.lazy(() => CompanyBusinessTypeFilterComparisonSchema().nullish()),
    companySize: z.lazy(() => CompanyCompanySizeFilterComparisonSchema().nullish()),
    country: z.lazy(() => StringFieldComparisonSchema().nullish()),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    industry: z.lazy(() => CompanyIndustryFilterComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => CompanySubscriptionFilterSchema())).nullish(),
    totalRevenue: z.lazy(() => IntFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    website: z.lazy(() => StringFieldComparisonSchema().nullish())
  })
}

export function CompanySumAggregateSchema(): z.ZodObject<Properties<CompanySumAggregate>> {
  return z.object({
    __typename: z.literal('CompanySumAggregate').optional(),
    id: z.number().nullish(),
    totalRevenue: z.number().nullish()
  })
}

export function CompanyUpdateFilterSchema(): z.ZodObject<Properties<CompanyUpdateFilter>> {
  return z.object({
    and: z.array(z.lazy(() => CompanyUpdateFilterSchema())).nullish(),
    businessType: z.lazy(() => CompanyBusinessTypeFilterComparisonSchema().nullish()),
    companySize: z.lazy(() => CompanyCompanySizeFilterComparisonSchema().nullish()),
    country: z.lazy(() => StringFieldComparisonSchema().nullish()),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    industry: z.lazy(() => CompanyIndustryFilterComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => CompanyUpdateFilterSchema())).nullish(),
    totalRevenue: z.lazy(() => IntFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    website: z.lazy(() => StringFieldComparisonSchema().nullish())
  })
}

export function CompanyUpdateInputSchema(): z.ZodObject<Properties<CompanyUpdateInput>> {
  return z.object({
    businessType: BusinessTypeSchema.nullish(),
    companySize: CompanySizeSchema.nullish(),
    country: z.string().nullish(),
    industry: IndustrySchema.nullish(),
    name: z.string().nullish(),
    salesOwnerId: z.string().nullish(),
    totalRevenue: z.number().nullish(),
    website: z.string().nullish()
  })
}

export function ContactSchema(): z.ZodObject<Properties<Contact>> {
  return z.object({
    __typename: z.literal('Contact').optional(),
    avatarUrl: z.string().nullish(),
    company: z.lazy(() => CompanySchema()),
    createdAt: z.string().datetime(),
    createdBy: z.lazy(() => UserSchema()),
    deals: z.lazy(() => ContactDealsConnectionSchema()),
    email: z.string(),
    id: z.string(),
    jobTitle: z.string().nullish(),
    name: z.string(),
    notes: z.lazy(() => ContactNotesConnectionSchema()),
    phone: z.string().nullish(),
    salesOwner: z.lazy(() => UserSchema()),
    score: z.number().nullish(),
    stage: ContactStageSchema,
    status: ContactStatusSchema,
    timezone: z.string().nullish(),
    updatedAt: z.string().datetime(),
    updatedBy: z.lazy(() => UserSchema().nullish())
  })
}

export function ContactDealsArgsSchema(): z.ZodObject<Properties<ContactDealsArgs>> {
  return z.object({
    filter: z.lazy(() => DealFilterSchema()),
    paging: z.lazy(() => OffsetPagingSchema()),
    sorting: z.array(z.lazy(() => DealSortSchema()))
  })
}

export function ContactNotesArgsSchema(): z.ZodObject<Properties<ContactNotesArgs>> {
  return z.object({
    filter: z.lazy(() => ContactNoteFilterSchema()),
    paging: z.lazy(() => OffsetPagingSchema()),
    sorting: z.array(z.lazy(() => ContactNoteSortSchema()))
  })
}

export function ContactAggregateFilterSchema(): z.ZodObject<Properties<ContactAggregateFilter>> {
  return z.object({
    and: z.array(z.lazy(() => ContactAggregateFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    email: z.lazy(() => StringFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    jobTitle: z.lazy(() => StringFieldComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => ContactAggregateFilterSchema())).nullish(),
    phone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    score: z.lazy(() => IntFieldComparisonSchema().nullish()),
    stage: z.lazy(() => ContactStageFilterComparisonSchema().nullish()),
    status: z.lazy(() => ContactStatusFilterComparisonSchema().nullish()),
    timezone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function ContactConnectionSchema(): z.ZodObject<Properties<ContactConnection>> {
  return z.object({
    __typename: z.literal('ContactConnection').optional(),
    nodes: z.array(z.lazy(() => ContactSchema())),
    pageInfo: z.lazy(() => OffsetPageInfoSchema()),
    totalCount: z.number()
  })
}

export function ContactCreateInputSchema(): z.ZodObject<Properties<ContactCreateInput>> {
  return z.object({
    companyId: z.string(),
    email: z.string(),
    jobTitle: z.string().nullish(),
    name: z.string(),
    phone: z.string().nullish(),
    salesOwnerId: z.string(),
    score: z.number().nullish(),
    stage: ContactStageSchema.nullish(),
    status: ContactStatusSchema.nullish(),
    timezone: z.string().nullish()
  })
}

export function ContactDealsConnectionSchema(): z.ZodObject<Properties<ContactDealsConnection>> {
  return z.object({
    __typename: z.literal('ContactDealsConnection').optional(),
    nodes: z.array(z.lazy(() => DealSchema())),
    pageInfo: z.lazy(() => OffsetPageInfoSchema()),
    totalCount: z.number()
  })
}

export function ContactDeleteFilterSchema(): z.ZodObject<Properties<ContactDeleteFilter>> {
  return z.object({
    and: z.array(z.lazy(() => ContactDeleteFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    email: z.lazy(() => StringFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    jobTitle: z.lazy(() => StringFieldComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => ContactDeleteFilterSchema())).nullish(),
    phone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    score: z.lazy(() => IntFieldComparisonSchema().nullish()),
    stage: z.lazy(() => ContactStageFilterComparisonSchema().nullish()),
    status: z.lazy(() => ContactStatusFilterComparisonSchema().nullish()),
    timezone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function ContactDeleteResponseSchema(): z.ZodObject<Properties<ContactDeleteResponse>> {
  return z.object({
    __typename: z.literal('ContactDeleteResponse').optional(),
    avatarUrl: z.string().nullish(),
    createdAt: z.string().datetime().nullish(),
    email: z.string().nullish(),
    id: z.string().nullish(),
    jobTitle: z.string().nullish(),
    name: z.string().nullish(),
    phone: z.string().nullish(),
    score: z.number().nullish(),
    stage: ContactStageSchema.nullish(),
    status: ContactStatusSchema.nullish(),
    timezone: z.string().nullish(),
    updatedAt: z.string().datetime().nullish()
  })
}

export function ContactFilterSchema(): z.ZodObject<Properties<ContactFilter>> {
  return z.object({
    and: z.array(z.lazy(() => ContactFilterSchema())).nullish(),
    company: z.lazy(() => ContactFilterCompanyFilterSchema().nullish()),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    createdBy: z.lazy(() => ContactFilterUserFilterSchema().nullish()),
    deals: z.lazy(() => ContactFilterDealFilterSchema().nullish()),
    email: z.lazy(() => StringFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    jobTitle: z.lazy(() => StringFieldComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    notes: z.lazy(() => ContactFilterContactNoteFilterSchema().nullish()),
    or: z.array(z.lazy(() => ContactFilterSchema())).nullish(),
    phone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    salesOwner: z.lazy(() => ContactFilterUserFilterSchema().nullish()),
    score: z.lazy(() => IntFieldComparisonSchema().nullish()),
    stage: z.lazy(() => ContactStageFilterComparisonSchema().nullish()),
    status: z.lazy(() => ContactStatusFilterComparisonSchema().nullish()),
    timezone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    updatedBy: z.lazy(() => ContactFilterUserFilterSchema().nullish())
  })
}

export function ContactFilterCompanyFilterSchema(): z.ZodObject<Properties<ContactFilterCompanyFilter>> {
  return z.object({
    and: z.array(z.lazy(() => ContactFilterCompanyFilterSchema())).nullish(),
    businessType: z.lazy(() => CompanyBusinessTypeFilterComparisonSchema().nullish()),
    companySize: z.lazy(() => CompanyCompanySizeFilterComparisonSchema().nullish()),
    country: z.lazy(() => StringFieldComparisonSchema().nullish()),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    industry: z.lazy(() => CompanyIndustryFilterComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => ContactFilterCompanyFilterSchema())).nullish(),
    totalRevenue: z.lazy(() => IntFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    website: z.lazy(() => StringFieldComparisonSchema().nullish())
  })
}

export function ContactFilterContactNoteFilterSchema(): z.ZodObject<Properties<ContactFilterContactNoteFilter>> {
  return z.object({
    and: z.array(z.lazy(() => ContactFilterContactNoteFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => ContactFilterContactNoteFilterSchema())).nullish(),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function ContactFilterDealFilterSchema(): z.ZodObject<Properties<ContactFilterDealFilter>> {
  return z.object({
    and: z.array(z.lazy(() => ContactFilterDealFilterSchema())).nullish(),
    closeDateDay: z.lazy(() => IntFieldComparisonSchema().nullish()),
    closeDateMonth: z.lazy(() => IntFieldComparisonSchema().nullish()),
    closeDateYear: z.lazy(() => IntFieldComparisonSchema().nullish()),
    companyId: z.lazy(() => IdFilterComparisonSchema().nullish()),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    dealOwnerId: z.lazy(() => IdFilterComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => ContactFilterDealFilterSchema())).nullish(),
    stageId: z.lazy(() => IdFilterComparisonSchema().nullish()),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    value: z.lazy(() => FloatFieldComparisonSchema().nullish())
  })
}

export function ContactFilterUserFilterSchema(): z.ZodObject<Properties<ContactFilterUserFilter>> {
  return z.object({
    and: z.array(z.lazy(() => ContactFilterUserFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    email: z.lazy(() => StringFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    jobTitle: z.lazy(() => StringFieldComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => ContactFilterUserFilterSchema())).nullish(),
    phone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    role: z.lazy(() => UserRoleFilterComparisonSchema().nullish()),
    timezone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function ContactNoteSchema(): z.ZodObject<Properties<ContactNote>> {
  return z.object({
    __typename: z.literal('ContactNote').optional(),
    contact: z.lazy(() => ContactSchema()),
    createdAt: z.string().datetime(),
    createdBy: z.lazy(() => UserSchema()),
    id: z.string(),
    note: z.string(),
    updatedAt: z.string().datetime(),
    updatedBy: z.lazy(() => UserSchema().nullish())
  })
}

export function ContactNoteConnectionSchema(): z.ZodObject<Properties<ContactNoteConnection>> {
  return z.object({
    __typename: z.literal('ContactNoteConnection').optional(),
    nodes: z.array(z.lazy(() => ContactNoteSchema())),
    pageInfo: z.lazy(() => OffsetPageInfoSchema()),
    totalCount: z.number()
  })
}

export function ContactNoteCreateInputSchema(): z.ZodObject<Properties<ContactNoteCreateInput>> {
  return z.object({
    contactId: z.string(),
    note: z.string()
  })
}

export function ContactNoteDeleteFilterSchema(): z.ZodObject<Properties<ContactNoteDeleteFilter>> {
  return z.object({
    and: z.array(z.lazy(() => ContactNoteDeleteFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => ContactNoteDeleteFilterSchema())).nullish(),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function ContactNoteDeleteResponseSchema(): z.ZodObject<Properties<ContactNoteDeleteResponse>> {
  return z.object({
    __typename: z.literal('ContactNoteDeleteResponse').optional(),
    createdAt: z.string().datetime().nullish(),
    id: z.string().nullish(),
    note: z.string().nullish(),
    updatedAt: z.string().datetime().nullish()
  })
}

export function ContactNoteFilterSchema(): z.ZodObject<Properties<ContactNoteFilter>> {
  return z.object({
    and: z.array(z.lazy(() => ContactNoteFilterSchema())).nullish(),
    contact: z.lazy(() => ContactNoteFilterContactFilterSchema().nullish()),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    createdBy: z.lazy(() => ContactNoteFilterUserFilterSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => ContactNoteFilterSchema())).nullish(),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    updatedBy: z.lazy(() => ContactNoteFilterUserFilterSchema().nullish())
  })
}

export function ContactNoteFilterContactFilterSchema(): z.ZodObject<Properties<ContactNoteFilterContactFilter>> {
  return z.object({
    and: z.array(z.lazy(() => ContactNoteFilterContactFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    email: z.lazy(() => StringFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    jobTitle: z.lazy(() => StringFieldComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => ContactNoteFilterContactFilterSchema())).nullish(),
    phone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    score: z.lazy(() => IntFieldComparisonSchema().nullish()),
    stage: z.lazy(() => ContactStageFilterComparisonSchema().nullish()),
    status: z.lazy(() => ContactStatusFilterComparisonSchema().nullish()),
    timezone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function ContactNoteFilterUserFilterSchema(): z.ZodObject<Properties<ContactNoteFilterUserFilter>> {
  return z.object({
    and: z.array(z.lazy(() => ContactNoteFilterUserFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    email: z.lazy(() => StringFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    jobTitle: z.lazy(() => StringFieldComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => ContactNoteFilterUserFilterSchema())).nullish(),
    phone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    role: z.lazy(() => UserRoleFilterComparisonSchema().nullish()),
    timezone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function ContactNoteSortSchema(): z.ZodObject<Properties<ContactNoteSort>> {
  return z.object({
    direction: SortDirectionSchema,
    field: ContactNoteSortFieldsSchema,
    nulls: SortNullsSchema.nullish()
  })
}

export function ContactNoteSubscriptionFilterSchema(): z.ZodObject<Properties<ContactNoteSubscriptionFilter>> {
  return z.object({
    and: z.array(z.lazy(() => ContactNoteSubscriptionFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => ContactNoteSubscriptionFilterSchema())).nullish(),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function ContactNoteUpdateFilterSchema(): z.ZodObject<Properties<ContactNoteUpdateFilter>> {
  return z.object({
    and: z.array(z.lazy(() => ContactNoteUpdateFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => ContactNoteUpdateFilterSchema())).nullish(),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function ContactNoteUpdateInputSchema(): z.ZodObject<Properties<ContactNoteUpdateInput>> {
  return z.object({
    note: z.string()
  })
}

export function ContactNotesConnectionSchema(): z.ZodObject<Properties<ContactNotesConnection>> {
  return z.object({
    __typename: z.literal('ContactNotesConnection').optional(),
    nodes: z.array(z.lazy(() => ContactNoteSchema())),
    pageInfo: z.lazy(() => OffsetPageInfoSchema()),
    totalCount: z.number()
  })
}

export function ContactSortSchema(): z.ZodObject<Properties<ContactSort>> {
  return z.object({
    direction: SortDirectionSchema,
    field: ContactSortFieldsSchema,
    nulls: SortNullsSchema.nullish()
  })
}

export function ContactStageFilterComparisonSchema(): z.ZodObject<Properties<ContactStageFilterComparison>> {
  return z.object({
    eq: ContactStageSchema.nullish(),
    gt: ContactStageSchema.nullish(),
    gte: ContactStageSchema.nullish(),
    iLike: ContactStageSchema.nullish(),
    in: z.array(ContactStageSchema).nullish(),
    is: z.boolean().nullish(),
    isNot: z.boolean().nullish(),
    like: ContactStageSchema.nullish(),
    lt: ContactStageSchema.nullish(),
    lte: ContactStageSchema.nullish(),
    neq: ContactStageSchema.nullish(),
    notILike: ContactStageSchema.nullish(),
    notIn: z.array(ContactStageSchema).nullish(),
    notLike: ContactStageSchema.nullish()
  })
}

export function ContactStatusFilterComparisonSchema(): z.ZodObject<Properties<ContactStatusFilterComparison>> {
  return z.object({
    eq: ContactStatusSchema.nullish(),
    gt: ContactStatusSchema.nullish(),
    gte: ContactStatusSchema.nullish(),
    iLike: ContactStatusSchema.nullish(),
    in: z.array(ContactStatusSchema).nullish(),
    is: z.boolean().nullish(),
    isNot: z.boolean().nullish(),
    like: ContactStatusSchema.nullish(),
    lt: ContactStatusSchema.nullish(),
    lte: ContactStatusSchema.nullish(),
    neq: ContactStatusSchema.nullish(),
    notILike: ContactStatusSchema.nullish(),
    notIn: z.array(ContactStatusSchema).nullish(),
    notLike: ContactStatusSchema.nullish()
  })
}

export function ContactSubscriptionFilterSchema(): z.ZodObject<Properties<ContactSubscriptionFilter>> {
  return z.object({
    and: z.array(z.lazy(() => ContactSubscriptionFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    email: z.lazy(() => StringFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    jobTitle: z.lazy(() => StringFieldComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => ContactSubscriptionFilterSchema())).nullish(),
    phone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    score: z.lazy(() => IntFieldComparisonSchema().nullish()),
    stage: z.lazy(() => ContactStageFilterComparisonSchema().nullish()),
    status: z.lazy(() => ContactStatusFilterComparisonSchema().nullish()),
    timezone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function ContactUpdateFilterSchema(): z.ZodObject<Properties<ContactUpdateFilter>> {
  return z.object({
    and: z.array(z.lazy(() => ContactUpdateFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    email: z.lazy(() => StringFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    jobTitle: z.lazy(() => StringFieldComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => ContactUpdateFilterSchema())).nullish(),
    phone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    score: z.lazy(() => IntFieldComparisonSchema().nullish()),
    stage: z.lazy(() => ContactStageFilterComparisonSchema().nullish()),
    status: z.lazy(() => ContactStatusFilterComparisonSchema().nullish()),
    timezone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function ContactUpdateInputSchema(): z.ZodObject<Properties<ContactUpdateInput>> {
  return z.object({
    companyId: z.string().nullish(),
    email: z.string().nullish(),
    jobTitle: z.string().nullish(),
    name: z.string().nullish(),
    phone: z.string().nullish(),
    salesOwnerId: z.string().nullish(),
    score: z.number().nullish(),
    stage: ContactStageSchema.nullish(),
    status: ContactStatusSchema.nullish(),
    timezone: z.string().nullish()
  })
}

export function CreateAuditSubscriptionFilterInputSchema(): z.ZodObject<Properties<CreateAuditSubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => AuditSubscriptionFilterSchema())
  })
}

export function CreateCompanyNoteSubscriptionFilterInputSchema(): z.ZodObject<Properties<CreateCompanyNoteSubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => CompanyNoteSubscriptionFilterSchema())
  })
}

export function CreateCompanySubscriptionFilterInputSchema(): z.ZodObject<Properties<CreateCompanySubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => CompanySubscriptionFilterSchema())
  })
}

export function CreateContactNoteSubscriptionFilterInputSchema(): z.ZodObject<Properties<CreateContactNoteSubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => ContactNoteSubscriptionFilterSchema())
  })
}

export function CreateContactSubscriptionFilterInputSchema(): z.ZodObject<Properties<CreateContactSubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => ContactSubscriptionFilterSchema())
  })
}

export function CreateDealStageSubscriptionFilterInputSchema(): z.ZodObject<Properties<CreateDealStageSubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => DealStageSubscriptionFilterSchema())
  })
}

export function CreateDealSubscriptionFilterInputSchema(): z.ZodObject<Properties<CreateDealSubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => DealSubscriptionFilterSchema())
  })
}

export function CreateEventCategorySubscriptionFilterInputSchema(): z.ZodObject<Properties<CreateEventCategorySubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => EventCategorySubscriptionFilterSchema())
  })
}

export function CreateEventSubscriptionFilterInputSchema(): z.ZodObject<Properties<CreateEventSubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => EventSubscriptionFilterSchema())
  })
}

export function CreateManyCompaniesInputSchema(): z.ZodObject<Properties<CreateManyCompaniesInput>> {
  return z.object({
    companies: z.array(z.lazy(() => CompanyCreateInputSchema()))
  })
}

export function CreateManyCompanyNotesInputSchema(): z.ZodObject<Properties<CreateManyCompanyNotesInput>> {
  return z.object({
    companyNotes: z.array(z.lazy(() => CompanyNoteCreateInputSchema()))
  })
}

export function CreateManyContactNotesInputSchema(): z.ZodObject<Properties<CreateManyContactNotesInput>> {
  return z.object({
    contactNotes: z.array(z.lazy(() => ContactNoteCreateInputSchema()))
  })
}

export function CreateManyContactsInputSchema(): z.ZodObject<Properties<CreateManyContactsInput>> {
  return z.object({
    contacts: z.array(z.lazy(() => ContactCreateInputSchema()))
  })
}

export function CreateManyDealStagesInputSchema(): z.ZodObject<Properties<CreateManyDealStagesInput>> {
  return z.object({
    dealStages: z.array(z.lazy(() => DealStageCreateInputSchema()))
  })
}

export function CreateManyDealsInputSchema(): z.ZodObject<Properties<CreateManyDealsInput>> {
  return z.object({
    deals: z.array(z.lazy(() => DealCreateInputSchema()))
  })
}

export function CreateManyEventCategoriesInputSchema(): z.ZodObject<Properties<CreateManyEventCategoriesInput>> {
  return z.object({
    eventCategories: z.array(z.lazy(() => EventCategoryCreateInputSchema()))
  })
}

export function CreateManyEventsInputSchema(): z.ZodObject<Properties<CreateManyEventsInput>> {
  return z.object({
    events: z.array(z.lazy(() => EventCreateInputSchema()))
  })
}

export function CreateManyQuotesInputSchema(): z.ZodObject<Properties<CreateManyQuotesInput>> {
  return z.object({
    quotes: z.array(z.lazy(() => QuoteCreateInputSchema()))
  })
}

export function CreateManyTaskCommentsInputSchema(): z.ZodObject<Properties<CreateManyTaskCommentsInput>> {
  return z.object({
    taskComments: z.array(z.lazy(() => TaskCommentCreateInputSchema()))
  })
}

export function CreateManyTaskStagesInputSchema(): z.ZodObject<Properties<CreateManyTaskStagesInput>> {
  return z.object({
    taskStages: z.array(z.lazy(() => TaskStageCreateInputSchema()))
  })
}

export function CreateManyTasksInputSchema(): z.ZodObject<Properties<CreateManyTasksInput>> {
  return z.object({
    tasks: z.array(z.lazy(() => TaskCreateInputSchema()))
  })
}

export function CreateManyUsersInputSchema(): z.ZodObject<Properties<CreateManyUsersInput>> {
  return z.object({
    users: z.array(z.lazy(() => UserCreateInputSchema()))
  })
}

export function CreateOneCompanyInputSchema(): z.ZodObject<Properties<CreateOneCompanyInput>> {
  return z.object({
    company: z.lazy(() => CompanyCreateInputSchema())
  })
}

export function CreateOneCompanyNoteInputSchema(): z.ZodObject<Properties<CreateOneCompanyNoteInput>> {
  return z.object({
    companyNote: z.lazy(() => CompanyNoteCreateInputSchema())
  })
}

export function CreateOneContactInputSchema(): z.ZodObject<Properties<CreateOneContactInput>> {
  return z.object({
    contact: z.lazy(() => ContactCreateInputSchema())
  })
}

export function CreateOneContactNoteInputSchema(): z.ZodObject<Properties<CreateOneContactNoteInput>> {
  return z.object({
    contactNote: z.lazy(() => ContactNoteCreateInputSchema())
  })
}

export function CreateOneDealInputSchema(): z.ZodObject<Properties<CreateOneDealInput>> {
  return z.object({
    deal: z.lazy(() => DealCreateInputSchema())
  })
}

export function CreateOneDealStageInputSchema(): z.ZodObject<Properties<CreateOneDealStageInput>> {
  return z.object({
    dealStage: z.lazy(() => DealStageCreateInputSchema())
  })
}

export function CreateOneEventCategoryInputSchema(): z.ZodObject<Properties<CreateOneEventCategoryInput>> {
  return z.object({
    eventCategory: z.lazy(() => EventCategoryCreateInputSchema())
  })
}

export function CreateOneEventInputSchema(): z.ZodObject<Properties<CreateOneEventInput>> {
  return z.object({
    event: z.lazy(() => EventCreateInputSchema())
  })
}

export function CreateOneQuoteInputSchema(): z.ZodObject<Properties<CreateOneQuoteInput>> {
  return z.object({
    quote: z.lazy(() => QuoteCreateInputSchema())
  })
}

export function CreateOneTaskCommentInputSchema(): z.ZodObject<Properties<CreateOneTaskCommentInput>> {
  return z.object({
    taskComment: z.lazy(() => TaskCommentCreateInputSchema())
  })
}

export function CreateOneTaskInputSchema(): z.ZodObject<Properties<CreateOneTaskInput>> {
  return z.object({
    task: z.lazy(() => TaskCreateInputSchema())
  })
}

export function CreateOneTaskStageInputSchema(): z.ZodObject<Properties<CreateOneTaskStageInput>> {
  return z.object({
    taskStage: z.lazy(() => TaskStageCreateInputSchema())
  })
}

export function CreateOneUserInputSchema(): z.ZodObject<Properties<CreateOneUserInput>> {
  return z.object({
    user: z.lazy(() => UserCreateInputSchema())
  })
}

export function CreateQuoteSubscriptionFilterInputSchema(): z.ZodObject<Properties<CreateQuoteSubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => QuoteSubscriptionFilterSchema())
  })
}

export function CreateTaskCommentSubscriptionFilterInputSchema(): z.ZodObject<Properties<CreateTaskCommentSubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => TaskCommentSubscriptionFilterSchema())
  })
}

export function CreateTaskStageSubscriptionFilterInputSchema(): z.ZodObject<Properties<CreateTaskStageSubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => TaskStageSubscriptionFilterSchema())
  })
}

export function CreateTaskSubscriptionFilterInputSchema(): z.ZodObject<Properties<CreateTaskSubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => TaskSubscriptionFilterSchema())
  })
}

export function CreateUserSubscriptionFilterInputSchema(): z.ZodObject<Properties<CreateUserSubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => UserSubscriptionFilterSchema())
  })
}

export function DateFieldComparisonSchema(): z.ZodObject<Properties<DateFieldComparison>> {
  return z.object({
    between: z.lazy(() => DateFieldComparisonBetweenSchema().nullish()),
    eq: z.string().datetime().nullish(),
    gt: z.string().datetime().nullish(),
    gte: z.string().datetime().nullish(),
    in: z.array(z.string().datetime()).nullish(),
    is: z.boolean().nullish(),
    isNot: z.boolean().nullish(),
    lt: z.string().datetime().nullish(),
    lte: z.string().datetime().nullish(),
    neq: z.string().datetime().nullish(),
    notBetween: z.lazy(() => DateFieldComparisonBetweenSchema().nullish()),
    notIn: z.array(z.string().datetime()).nullish()
  })
}

export function DateFieldComparisonBetweenSchema(): z.ZodObject<Properties<DateFieldComparisonBetween>> {
  return z.object({
    lower: z.string().datetime(),
    upper: z.string().datetime()
  })
}

export function DealSchema(): z.ZodObject<Properties<Deal>> {
  return z.object({
    __typename: z.literal('Deal').optional(),
    closeDateDay: z.number().nullish(),
    closeDateMonth: z.number().nullish(),
    closeDateYear: z.number().nullish(),
    company: z.lazy(() => CompanySchema()),
    companyId: z.string(),
    createdAt: z.string().datetime(),
    createdBy: z.lazy(() => UserSchema()),
    dealContact: z.lazy(() => ContactSchema()),
    dealOwner: z.lazy(() => UserSchema()),
    dealOwnerId: z.string(),
    id: z.string(),
    notes: z.string(),
    stage: z.lazy(() => DealStageSchema().nullish()),
    stageId: z.string().nullish(),
    title: z.string(),
    updatedAt: z.string().datetime(),
    updatedBy: z.lazy(() => UserSchema().nullish()),
    value: z.number().nullish()
  })
}

export function DealAggregateFilterSchema(): z.ZodObject<Properties<DealAggregateFilter>> {
  return z.object({
    and: z.array(z.lazy(() => DealAggregateFilterSchema())).nullish(),
    closeDateDay: z.lazy(() => IntFieldComparisonSchema().nullish()),
    closeDateMonth: z.lazy(() => IntFieldComparisonSchema().nullish()),
    closeDateYear: z.lazy(() => IntFieldComparisonSchema().nullish()),
    companyId: z.lazy(() => IdFilterComparisonSchema().nullish()),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    dealOwnerId: z.lazy(() => IdFilterComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => DealAggregateFilterSchema())).nullish(),
    stageId: z.lazy(() => IdFilterComparisonSchema().nullish()),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    value: z.lazy(() => FloatFieldComparisonSchema().nullish())
  })
}

export function DealAggregateGroupBySchema(): z.ZodObject<Properties<DealAggregateGroupBy>> {
  return z.object({
    __typename: z.literal('DealAggregateGroupBy').optional(),
    closeDateDay: z.number().nullish(),
    closeDateMonth: z.number().nullish(),
    closeDateYear: z.number().nullish(),
    companyId: z.string().nullish(),
    createdAt: z.string().datetime().nullish(),
    dealOwnerId: z.string().nullish(),
    id: z.string().nullish(),
    stageId: z.string().nullish(),
    title: z.string().nullish(),
    updatedAt: z.string().datetime().nullish(),
    value: z.number().nullish()
  })
}

export function DealAggregateGroupByCreatedAtArgsSchema(): z.ZodObject<Properties<DealAggregateGroupByCreatedAtArgs>> {
  return z.object({
    by: GroupBySchema.default("DAY")
  })
}

export function DealAggregateGroupByUpdatedAtArgsSchema(): z.ZodObject<Properties<DealAggregateGroupByUpdatedAtArgs>> {
  return z.object({
    by: GroupBySchema.default("DAY")
  })
}

export function DealAggregateResponseSchema(): z.ZodObject<Properties<DealAggregateResponse>> {
  return z.object({
    __typename: z.literal('DealAggregateResponse').optional(),
    avg: z.lazy(() => DealAvgAggregateSchema().nullish()),
    count: z.lazy(() => DealCountAggregateSchema().nullish()),
    groupBy: z.lazy(() => DealAggregateGroupBySchema().nullish()),
    max: z.lazy(() => DealMaxAggregateSchema().nullish()),
    min: z.lazy(() => DealMinAggregateSchema().nullish()),
    sum: z.lazy(() => DealSumAggregateSchema().nullish())
  })
}

export function DealAvgAggregateSchema(): z.ZodObject<Properties<DealAvgAggregate>> {
  return z.object({
    __typename: z.literal('DealAvgAggregate').optional(),
    closeDateDay: z.number().nullish(),
    closeDateMonth: z.number().nullish(),
    closeDateYear: z.number().nullish(),
    companyId: z.number().nullish(),
    dealOwnerId: z.number().nullish(),
    id: z.number().nullish(),
    stageId: z.number().nullish(),
    value: z.number().nullish()
  })
}

export function DealConnectionSchema(): z.ZodObject<Properties<DealConnection>> {
  return z.object({
    __typename: z.literal('DealConnection').optional(),
    nodes: z.array(z.lazy(() => DealSchema())),
    pageInfo: z.lazy(() => OffsetPageInfoSchema()),
    totalCount: z.number()
  })
}

export function DealCountAggregateSchema(): z.ZodObject<Properties<DealCountAggregate>> {
  return z.object({
    __typename: z.literal('DealCountAggregate').optional(),
    closeDateDay: z.number().nullish(),
    closeDateMonth: z.number().nullish(),
    closeDateYear: z.number().nullish(),
    companyId: z.number().nullish(),
    createdAt: z.number().nullish(),
    dealOwnerId: z.number().nullish(),
    id: z.number().nullish(),
    stageId: z.number().nullish(),
    title: z.number().nullish(),
    updatedAt: z.number().nullish(),
    value: z.number().nullish()
  })
}

export function DealCreateInputSchema(): z.ZodObject<Properties<DealCreateInput>> {
  return z.object({
    companyId: z.string(),
    dealContactId: z.string().nullish(),
    dealOwnerId: z.string(),
    stageId: z.string().nullish(),
    title: z.string(),
    value: z.number().nullish()
  })
}

export function DealDeleteFilterSchema(): z.ZodObject<Properties<DealDeleteFilter>> {
  return z.object({
    and: z.array(z.lazy(() => DealDeleteFilterSchema())).nullish(),
    closeDateDay: z.lazy(() => IntFieldComparisonSchema().nullish()),
    closeDateMonth: z.lazy(() => IntFieldComparisonSchema().nullish()),
    closeDateYear: z.lazy(() => IntFieldComparisonSchema().nullish()),
    companyId: z.lazy(() => IdFilterComparisonSchema().nullish()),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    dealOwnerId: z.lazy(() => IdFilterComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => DealDeleteFilterSchema())).nullish(),
    stageId: z.lazy(() => IdFilterComparisonSchema().nullish()),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    value: z.lazy(() => FloatFieldComparisonSchema().nullish())
  })
}

export function DealDeleteResponseSchema(): z.ZodObject<Properties<DealDeleteResponse>> {
  return z.object({
    __typename: z.literal('DealDeleteResponse').optional(),
    closeDateDay: z.number().nullish(),
    closeDateMonth: z.number().nullish(),
    closeDateYear: z.number().nullish(),
    companyId: z.string().nullish(),
    createdAt: z.string().datetime().nullish(),
    dealOwnerId: z.string().nullish(),
    id: z.string().nullish(),
    notes: z.string().nullish(),
    stageId: z.string().nullish(),
    title: z.string().nullish(),
    updatedAt: z.string().datetime().nullish(),
    value: z.number().nullish()
  })
}

export function DealFilterSchema(): z.ZodObject<Properties<DealFilter>> {
  return z.object({
    and: z.array(z.lazy(() => DealFilterSchema())).nullish(),
    closeDateDay: z.lazy(() => IntFieldComparisonSchema().nullish()),
    closeDateMonth: z.lazy(() => IntFieldComparisonSchema().nullish()),
    closeDateYear: z.lazy(() => IntFieldComparisonSchema().nullish()),
    company: z.lazy(() => DealFilterCompanyFilterSchema().nullish()),
    companyId: z.lazy(() => IdFilterComparisonSchema().nullish()),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    createdBy: z.lazy(() => DealFilterUserFilterSchema().nullish()),
    dealContact: z.lazy(() => DealFilterContactFilterSchema().nullish()),
    dealOwner: z.lazy(() => DealFilterUserFilterSchema().nullish()),
    dealOwnerId: z.lazy(() => IdFilterComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => DealFilterSchema())).nullish(),
    stage: z.lazy(() => DealFilterDealStageFilterSchema().nullish()),
    stageId: z.lazy(() => IdFilterComparisonSchema().nullish()),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    updatedBy: z.lazy(() => DealFilterUserFilterSchema().nullish()),
    value: z.lazy(() => FloatFieldComparisonSchema().nullish())
  })
}

export function DealFilterCompanyFilterSchema(): z.ZodObject<Properties<DealFilterCompanyFilter>> {
  return z.object({
    and: z.array(z.lazy(() => DealFilterCompanyFilterSchema())).nullish(),
    businessType: z.lazy(() => CompanyBusinessTypeFilterComparisonSchema().nullish()),
    companySize: z.lazy(() => CompanyCompanySizeFilterComparisonSchema().nullish()),
    country: z.lazy(() => StringFieldComparisonSchema().nullish()),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    industry: z.lazy(() => CompanyIndustryFilterComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => DealFilterCompanyFilterSchema())).nullish(),
    totalRevenue: z.lazy(() => IntFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    website: z.lazy(() => StringFieldComparisonSchema().nullish())
  })
}

export function DealFilterContactFilterSchema(): z.ZodObject<Properties<DealFilterContactFilter>> {
  return z.object({
    and: z.array(z.lazy(() => DealFilterContactFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    email: z.lazy(() => StringFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    jobTitle: z.lazy(() => StringFieldComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => DealFilterContactFilterSchema())).nullish(),
    phone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    score: z.lazy(() => IntFieldComparisonSchema().nullish()),
    stage: z.lazy(() => ContactStageFilterComparisonSchema().nullish()),
    status: z.lazy(() => ContactStatusFilterComparisonSchema().nullish()),
    timezone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function DealFilterDealStageFilterSchema(): z.ZodObject<Properties<DealFilterDealStageFilter>> {
  return z.object({
    and: z.array(z.lazy(() => DealFilterDealStageFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => DealFilterDealStageFilterSchema())).nullish(),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function DealFilterUserFilterSchema(): z.ZodObject<Properties<DealFilterUserFilter>> {
  return z.object({
    and: z.array(z.lazy(() => DealFilterUserFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    email: z.lazy(() => StringFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    jobTitle: z.lazy(() => StringFieldComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => DealFilterUserFilterSchema())).nullish(),
    phone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    role: z.lazy(() => UserRoleFilterComparisonSchema().nullish()),
    timezone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function DealMaxAggregateSchema(): z.ZodObject<Properties<DealMaxAggregate>> {
  return z.object({
    __typename: z.literal('DealMaxAggregate').optional(),
    closeDateDay: z.number().nullish(),
    closeDateMonth: z.number().nullish(),
    closeDateYear: z.number().nullish(),
    companyId: z.string().nullish(),
    createdAt: z.string().datetime().nullish(),
    dealOwnerId: z.string().nullish(),
    id: z.string().nullish(),
    stageId: z.string().nullish(),
    title: z.string().nullish(),
    updatedAt: z.string().datetime().nullish(),
    value: z.number().nullish()
  })
}

export function DealMinAggregateSchema(): z.ZodObject<Properties<DealMinAggregate>> {
  return z.object({
    __typename: z.literal('DealMinAggregate').optional(),
    closeDateDay: z.number().nullish(),
    closeDateMonth: z.number().nullish(),
    closeDateYear: z.number().nullish(),
    companyId: z.string().nullish(),
    createdAt: z.string().datetime().nullish(),
    dealOwnerId: z.string().nullish(),
    id: z.string().nullish(),
    stageId: z.string().nullish(),
    title: z.string().nullish(),
    updatedAt: z.string().datetime().nullish(),
    value: z.number().nullish()
  })
}

export function DealSortSchema(): z.ZodObject<Properties<DealSort>> {
  return z.object({
    direction: SortDirectionSchema,
    field: DealSortFieldsSchema,
    nulls: SortNullsSchema.nullish()
  })
}

export function DealStageSchema(): z.ZodObject<Properties<DealStage>> {
  return z.object({
    __typename: z.literal('DealStage').optional(),
    createdAt: z.string().datetime(),
    createdBy: z.lazy(() => UserSchema()),
    deals: z.array(z.lazy(() => DealSchema())),
    dealsAggregate: z.array(z.lazy(() => DealStageDealsAggregateResponseSchema())),
    id: z.string(),
    title: z.string(),
    updatedAt: z.string().datetime(),
    updatedBy: z.lazy(() => UserSchema().nullish())
  })
}

export function DealStageDealsArgsSchema(): z.ZodObject<Properties<DealStageDealsArgs>> {
  return z.object({
    filter: z.lazy(() => DealFilterSchema()),
    sorting: z.array(z.lazy(() => DealSortSchema()))
  })
}

export function DealStageDealsAggregateArgsSchema(): z.ZodObject<Properties<DealStageDealsAggregateArgs>> {
  return z.object({
    filter: z.lazy(() => DealAggregateFilterSchema().nullish())
  })
}

export function DealStageConnectionSchema(): z.ZodObject<Properties<DealStageConnection>> {
  return z.object({
    __typename: z.literal('DealStageConnection').optional(),
    nodes: z.array(z.lazy(() => DealStageSchema())),
    pageInfo: z.lazy(() => OffsetPageInfoSchema()),
    totalCount: z.number()
  })
}

export function DealStageCreateInputSchema(): z.ZodObject<Properties<DealStageCreateInput>> {
  return z.object({
    title: z.string()
  })
}

export function DealStageDealsAggregateGroupBySchema(): z.ZodObject<Properties<DealStageDealsAggregateGroupBy>> {
  return z.object({
    __typename: z.literal('DealStageDealsAggregateGroupBy').optional(),
    closeDateDay: z.number().nullish(),
    closeDateMonth: z.number().nullish(),
    closeDateYear: z.number().nullish(),
    companyId: z.string().nullish(),
    createdAt: z.string().datetime().nullish(),
    dealOwnerId: z.string().nullish(),
    id: z.string().nullish(),
    stageId: z.string().nullish(),
    title: z.string().nullish(),
    updatedAt: z.string().datetime().nullish(),
    value: z.number().nullish()
  })
}

export function DealStageDealsAggregateResponseSchema(): z.ZodObject<Properties<DealStageDealsAggregateResponse>> {
  return z.object({
    __typename: z.literal('DealStageDealsAggregateResponse').optional(),
    avg: z.lazy(() => DealStageDealsAvgAggregateSchema().nullish()),
    count: z.lazy(() => DealStageDealsCountAggregateSchema().nullish()),
    groupBy: z.lazy(() => DealStageDealsAggregateGroupBySchema().nullish()),
    max: z.lazy(() => DealStageDealsMaxAggregateSchema().nullish()),
    min: z.lazy(() => DealStageDealsMinAggregateSchema().nullish()),
    sum: z.lazy(() => DealStageDealsSumAggregateSchema().nullish())
  })
}

export function DealStageDealsAvgAggregateSchema(): z.ZodObject<Properties<DealStageDealsAvgAggregate>> {
  return z.object({
    __typename: z.literal('DealStageDealsAvgAggregate').optional(),
    closeDateDay: z.number().nullish(),
    closeDateMonth: z.number().nullish(),
    closeDateYear: z.number().nullish(),
    companyId: z.number().nullish(),
    dealOwnerId: z.number().nullish(),
    id: z.number().nullish(),
    stageId: z.number().nullish(),
    value: z.number().nullish()
  })
}

export function DealStageDealsCountAggregateSchema(): z.ZodObject<Properties<DealStageDealsCountAggregate>> {
  return z.object({
    __typename: z.literal('DealStageDealsCountAggregate').optional(),
    closeDateDay: z.number().nullish(),
    closeDateMonth: z.number().nullish(),
    closeDateYear: z.number().nullish(),
    companyId: z.number().nullish(),
    createdAt: z.number().nullish(),
    dealOwnerId: z.number().nullish(),
    id: z.number().nullish(),
    stageId: z.number().nullish(),
    title: z.number().nullish(),
    updatedAt: z.number().nullish(),
    value: z.number().nullish()
  })
}

export function DealStageDealsMaxAggregateSchema(): z.ZodObject<Properties<DealStageDealsMaxAggregate>> {
  return z.object({
    __typename: z.literal('DealStageDealsMaxAggregate').optional(),
    closeDateDay: z.number().nullish(),
    closeDateMonth: z.number().nullish(),
    closeDateYear: z.number().nullish(),
    companyId: z.string().nullish(),
    createdAt: z.string().datetime().nullish(),
    dealOwnerId: z.string().nullish(),
    id: z.string().nullish(),
    stageId: z.string().nullish(),
    title: z.string().nullish(),
    updatedAt: z.string().datetime().nullish(),
    value: z.number().nullish()
  })
}

export function DealStageDealsMinAggregateSchema(): z.ZodObject<Properties<DealStageDealsMinAggregate>> {
  return z.object({
    __typename: z.literal('DealStageDealsMinAggregate').optional(),
    closeDateDay: z.number().nullish(),
    closeDateMonth: z.number().nullish(),
    closeDateYear: z.number().nullish(),
    companyId: z.string().nullish(),
    createdAt: z.string().datetime().nullish(),
    dealOwnerId: z.string().nullish(),
    id: z.string().nullish(),
    stageId: z.string().nullish(),
    title: z.string().nullish(),
    updatedAt: z.string().datetime().nullish(),
    value: z.number().nullish()
  })
}

export function DealStageDealsSumAggregateSchema(): z.ZodObject<Properties<DealStageDealsSumAggregate>> {
  return z.object({
    __typename: z.literal('DealStageDealsSumAggregate').optional(),
    closeDateDay: z.number().nullish(),
    closeDateMonth: z.number().nullish(),
    closeDateYear: z.number().nullish(),
    companyId: z.number().nullish(),
    dealOwnerId: z.number().nullish(),
    id: z.number().nullish(),
    stageId: z.number().nullish(),
    value: z.number().nullish()
  })
}

export function DealStageDeleteFilterSchema(): z.ZodObject<Properties<DealStageDeleteFilter>> {
  return z.object({
    and: z.array(z.lazy(() => DealStageDeleteFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => DealStageDeleteFilterSchema())).nullish(),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function DealStageDeleteResponseSchema(): z.ZodObject<Properties<DealStageDeleteResponse>> {
  return z.object({
    __typename: z.literal('DealStageDeleteResponse').optional(),
    createdAt: z.string().datetime().nullish(),
    id: z.string().nullish(),
    title: z.string().nullish(),
    updatedAt: z.string().datetime().nullish()
  })
}

export function DealStageFilterSchema(): z.ZodObject<Properties<DealStageFilter>> {
  return z.object({
    and: z.array(z.lazy(() => DealStageFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    createdBy: z.lazy(() => DealStageFilterUserFilterSchema().nullish()),
    deals: z.lazy(() => DealStageFilterDealFilterSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => DealStageFilterSchema())).nullish(),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    updatedBy: z.lazy(() => DealStageFilterUserFilterSchema().nullish())
  })
}

export function DealStageFilterDealFilterSchema(): z.ZodObject<Properties<DealStageFilterDealFilter>> {
  return z.object({
    and: z.array(z.lazy(() => DealStageFilterDealFilterSchema())).nullish(),
    closeDateDay: z.lazy(() => IntFieldComparisonSchema().nullish()),
    closeDateMonth: z.lazy(() => IntFieldComparisonSchema().nullish()),
    closeDateYear: z.lazy(() => IntFieldComparisonSchema().nullish()),
    companyId: z.lazy(() => IdFilterComparisonSchema().nullish()),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    dealOwnerId: z.lazy(() => IdFilterComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => DealStageFilterDealFilterSchema())).nullish(),
    stageId: z.lazy(() => IdFilterComparisonSchema().nullish()),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    value: z.lazy(() => FloatFieldComparisonSchema().nullish())
  })
}

export function DealStageFilterUserFilterSchema(): z.ZodObject<Properties<DealStageFilterUserFilter>> {
  return z.object({
    and: z.array(z.lazy(() => DealStageFilterUserFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    email: z.lazy(() => StringFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    jobTitle: z.lazy(() => StringFieldComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => DealStageFilterUserFilterSchema())).nullish(),
    phone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    role: z.lazy(() => UserRoleFilterComparisonSchema().nullish()),
    timezone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function DealStageSortSchema(): z.ZodObject<Properties<DealStageSort>> {
  return z.object({
    direction: SortDirectionSchema,
    field: DealStageSortFieldsSchema,
    nulls: SortNullsSchema.nullish()
  })
}

export function DealStageSubscriptionFilterSchema(): z.ZodObject<Properties<DealStageSubscriptionFilter>> {
  return z.object({
    and: z.array(z.lazy(() => DealStageSubscriptionFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => DealStageSubscriptionFilterSchema())).nullish(),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function DealStageUpdateFilterSchema(): z.ZodObject<Properties<DealStageUpdateFilter>> {
  return z.object({
    and: z.array(z.lazy(() => DealStageUpdateFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => DealStageUpdateFilterSchema())).nullish(),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function DealStageUpdateInputSchema(): z.ZodObject<Properties<DealStageUpdateInput>> {
  return z.object({
    stageId: z.string().nullish(),
    title: z.string().nullish()
  })
}

export function DealSubscriptionFilterSchema(): z.ZodObject<Properties<DealSubscriptionFilter>> {
  return z.object({
    and: z.array(z.lazy(() => DealSubscriptionFilterSchema())).nullish(),
    closeDateDay: z.lazy(() => IntFieldComparisonSchema().nullish()),
    closeDateMonth: z.lazy(() => IntFieldComparisonSchema().nullish()),
    closeDateYear: z.lazy(() => IntFieldComparisonSchema().nullish()),
    companyId: z.lazy(() => IdFilterComparisonSchema().nullish()),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    dealOwnerId: z.lazy(() => IdFilterComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => DealSubscriptionFilterSchema())).nullish(),
    stageId: z.lazy(() => IdFilterComparisonSchema().nullish()),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    value: z.lazy(() => FloatFieldComparisonSchema().nullish())
  })
}

export function DealSumAggregateSchema(): z.ZodObject<Properties<DealSumAggregate>> {
  return z.object({
    __typename: z.literal('DealSumAggregate').optional(),
    closeDateDay: z.number().nullish(),
    closeDateMonth: z.number().nullish(),
    closeDateYear: z.number().nullish(),
    companyId: z.number().nullish(),
    dealOwnerId: z.number().nullish(),
    id: z.number().nullish(),
    stageId: z.number().nullish(),
    value: z.number().nullish()
  })
}

export function DealUpdateFilterSchema(): z.ZodObject<Properties<DealUpdateFilter>> {
  return z.object({
    and: z.array(z.lazy(() => DealUpdateFilterSchema())).nullish(),
    closeDateDay: z.lazy(() => IntFieldComparisonSchema().nullish()),
    closeDateMonth: z.lazy(() => IntFieldComparisonSchema().nullish()),
    closeDateYear: z.lazy(() => IntFieldComparisonSchema().nullish()),
    companyId: z.lazy(() => IdFilterComparisonSchema().nullish()),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    dealOwnerId: z.lazy(() => IdFilterComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => DealUpdateFilterSchema())).nullish(),
    stageId: z.lazy(() => IdFilterComparisonSchema().nullish()),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    value: z.lazy(() => FloatFieldComparisonSchema().nullish())
  })
}

export function DealUpdateInputSchema(): z.ZodObject<Properties<DealUpdateInput>> {
  return z.object({
    closeDateDay: z.number().nullish(),
    closeDateMonth: z.number().nullish(),
    closeDateYear: z.number().nullish(),
    companyId: z.string().nullish(),
    dealContactId: z.string().nullish(),
    dealOwnerId: z.string().nullish(),
    notes: z.string().nullish(),
    stageId: z.string().nullish(),
    title: z.string().nullish(),
    value: z.number().nullish()
  })
}

export function DeleteManyCompaniesInputSchema(): z.ZodObject<Properties<DeleteManyCompaniesInput>> {
  return z.object({
    filter: z.lazy(() => CompanyDeleteFilterSchema())
  })
}

export function DeleteManyCompanyNotesInputSchema(): z.ZodObject<Properties<DeleteManyCompanyNotesInput>> {
  return z.object({
    filter: z.lazy(() => CompanyNoteDeleteFilterSchema())
  })
}

export function DeleteManyContactNotesInputSchema(): z.ZodObject<Properties<DeleteManyContactNotesInput>> {
  return z.object({
    filter: z.lazy(() => ContactNoteDeleteFilterSchema())
  })
}

export function DeleteManyContactsInputSchema(): z.ZodObject<Properties<DeleteManyContactsInput>> {
  return z.object({
    filter: z.lazy(() => ContactDeleteFilterSchema())
  })
}

export function DeleteManyDealStagesInputSchema(): z.ZodObject<Properties<DeleteManyDealStagesInput>> {
  return z.object({
    filter: z.lazy(() => DealStageDeleteFilterSchema())
  })
}

export function DeleteManyDealsInputSchema(): z.ZodObject<Properties<DeleteManyDealsInput>> {
  return z.object({
    filter: z.lazy(() => DealDeleteFilterSchema())
  })
}

export function DeleteManyEventCategoriesInputSchema(): z.ZodObject<Properties<DeleteManyEventCategoriesInput>> {
  return z.object({
    filter: z.lazy(() => EventCategoryDeleteFilterSchema())
  })
}

export function DeleteManyEventsInputSchema(): z.ZodObject<Properties<DeleteManyEventsInput>> {
  return z.object({
    filter: z.lazy(() => EventDeleteFilterSchema())
  })
}

export function DeleteManyQuotesInputSchema(): z.ZodObject<Properties<DeleteManyQuotesInput>> {
  return z.object({
    filter: z.lazy(() => QuoteDeleteFilterSchema())
  })
}

export function DeleteManyResponseSchema(): z.ZodObject<Properties<DeleteManyResponse>> {
  return z.object({
    __typename: z.literal('DeleteManyResponse').optional(),
    deletedCount: z.number()
  })
}

export function DeleteManyTaskCommentsInputSchema(): z.ZodObject<Properties<DeleteManyTaskCommentsInput>> {
  return z.object({
    filter: z.lazy(() => TaskCommentDeleteFilterSchema())
  })
}

export function DeleteManyTaskStagesInputSchema(): z.ZodObject<Properties<DeleteManyTaskStagesInput>> {
  return z.object({
    filter: z.lazy(() => TaskStageDeleteFilterSchema())
  })
}

export function DeleteManyTasksInputSchema(): z.ZodObject<Properties<DeleteManyTasksInput>> {
  return z.object({
    filter: z.lazy(() => TaskDeleteFilterSchema())
  })
}

export function DeleteManyUsersInputSchema(): z.ZodObject<Properties<DeleteManyUsersInput>> {
  return z.object({
    filter: z.lazy(() => UserDeleteFilterSchema())
  })
}

export function DeleteOneAuditSubscriptionFilterInputSchema(): z.ZodObject<Properties<DeleteOneAuditSubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => AuditSubscriptionFilterSchema())
  })
}

export function DeleteOneCompanyInputSchema(): z.ZodObject<Properties<DeleteOneCompanyInput>> {
  return z.object({
    id: z.string()
  })
}

export function DeleteOneCompanyNoteInputSchema(): z.ZodObject<Properties<DeleteOneCompanyNoteInput>> {
  return z.object({
    id: z.string()
  })
}

export function DeleteOneCompanyNoteSubscriptionFilterInputSchema(): z.ZodObject<Properties<DeleteOneCompanyNoteSubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => CompanyNoteSubscriptionFilterSchema())
  })
}

export function DeleteOneCompanySubscriptionFilterInputSchema(): z.ZodObject<Properties<DeleteOneCompanySubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => CompanySubscriptionFilterSchema())
  })
}

export function DeleteOneContactInputSchema(): z.ZodObject<Properties<DeleteOneContactInput>> {
  return z.object({
    id: z.string()
  })
}

export function DeleteOneContactNoteInputSchema(): z.ZodObject<Properties<DeleteOneContactNoteInput>> {
  return z.object({
    id: z.string()
  })
}

export function DeleteOneContactNoteSubscriptionFilterInputSchema(): z.ZodObject<Properties<DeleteOneContactNoteSubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => ContactNoteSubscriptionFilterSchema())
  })
}

export function DeleteOneContactSubscriptionFilterInputSchema(): z.ZodObject<Properties<DeleteOneContactSubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => ContactSubscriptionFilterSchema())
  })
}

export function DeleteOneDealInputSchema(): z.ZodObject<Properties<DeleteOneDealInput>> {
  return z.object({
    id: z.string()
  })
}

export function DeleteOneDealStageInputSchema(): z.ZodObject<Properties<DeleteOneDealStageInput>> {
  return z.object({
    id: z.string()
  })
}

export function DeleteOneDealStageSubscriptionFilterInputSchema(): z.ZodObject<Properties<DeleteOneDealStageSubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => DealStageSubscriptionFilterSchema())
  })
}

export function DeleteOneDealSubscriptionFilterInputSchema(): z.ZodObject<Properties<DeleteOneDealSubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => DealSubscriptionFilterSchema())
  })
}

export function DeleteOneEventCategoryInputSchema(): z.ZodObject<Properties<DeleteOneEventCategoryInput>> {
  return z.object({
    id: z.string()
  })
}

export function DeleteOneEventCategorySubscriptionFilterInputSchema(): z.ZodObject<Properties<DeleteOneEventCategorySubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => EventCategorySubscriptionFilterSchema())
  })
}

export function DeleteOneEventInputSchema(): z.ZodObject<Properties<DeleteOneEventInput>> {
  return z.object({
    id: z.string()
  })
}

export function DeleteOneEventSubscriptionFilterInputSchema(): z.ZodObject<Properties<DeleteOneEventSubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => EventSubscriptionFilterSchema())
  })
}

export function DeleteOneQuoteInputSchema(): z.ZodObject<Properties<DeleteOneQuoteInput>> {
  return z.object({
    id: z.string()
  })
}

export function DeleteOneQuoteSubscriptionFilterInputSchema(): z.ZodObject<Properties<DeleteOneQuoteSubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => QuoteSubscriptionFilterSchema())
  })
}

export function DeleteOneTaskCommentInputSchema(): z.ZodObject<Properties<DeleteOneTaskCommentInput>> {
  return z.object({
    id: z.string()
  })
}

export function DeleteOneTaskCommentSubscriptionFilterInputSchema(): z.ZodObject<Properties<DeleteOneTaskCommentSubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => TaskCommentSubscriptionFilterSchema())
  })
}

export function DeleteOneTaskInputSchema(): z.ZodObject<Properties<DeleteOneTaskInput>> {
  return z.object({
    id: z.string()
  })
}

export function DeleteOneTaskStageInputSchema(): z.ZodObject<Properties<DeleteOneTaskStageInput>> {
  return z.object({
    id: z.string()
  })
}

export function DeleteOneTaskStageSubscriptionFilterInputSchema(): z.ZodObject<Properties<DeleteOneTaskStageSubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => TaskStageSubscriptionFilterSchema())
  })
}

export function DeleteOneTaskSubscriptionFilterInputSchema(): z.ZodObject<Properties<DeleteOneTaskSubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => TaskSubscriptionFilterSchema())
  })
}

export function DeleteOneUserInputSchema(): z.ZodObject<Properties<DeleteOneUserInput>> {
  return z.object({
    id: z.string()
  })
}

export function DeleteOneUserSubscriptionFilterInputSchema(): z.ZodObject<Properties<DeleteOneUserSubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => UserSubscriptionFilterSchema())
  })
}

export function EventSchema(): z.ZodObject<Properties<Event>> {
  return z.object({
    __typename: z.literal('Event').optional(),
    category: z.lazy(() => EventCategorySchema()),
    color: z.string(),
    createdAt: z.string().datetime(),
    createdBy: z.lazy(() => UserSchema()),
    description: z.string(),
    endDate: z.string().datetime(),
    id: z.string(),
    participants: z.array(z.lazy(() => UserSchema())),
    startDate: z.string().datetime(),
    title: z.string(),
    updatedAt: z.string().datetime(),
    updatedBy: z.lazy(() => UserSchema().nullish())
  })
}

export function EventParticipantsArgsSchema(): z.ZodObject<Properties<EventParticipantsArgs>> {
  return z.object({
    filter: z.lazy(() => UserFilterSchema()),
    sorting: z.array(z.lazy(() => UserSortSchema()))
  })
}

export function EventCategorySchema(): z.ZodObject<Properties<EventCategory>> {
  return z.object({
    __typename: z.literal('EventCategory').optional(),
    createdAt: z.string().datetime(),
    createdBy: z.lazy(() => UserSchema()),
    events: z.array(z.lazy(() => EventCategorySchema())),
    id: z.string(),
    title: z.string(),
    updatedAt: z.string().datetime(),
    updatedBy: z.lazy(() => UserSchema().nullish())
  })
}

export function EventCategoryEventsArgsSchema(): z.ZodObject<Properties<EventCategoryEventsArgs>> {
  return z.object({
    filter: z.lazy(() => EventCategoryFilterSchema()),
    sorting: z.array(z.lazy(() => EventCategorySortSchema()))
  })
}

export function EventCategoryConnectionSchema(): z.ZodObject<Properties<EventCategoryConnection>> {
  return z.object({
    __typename: z.literal('EventCategoryConnection').optional(),
    nodes: z.array(z.lazy(() => EventCategorySchema())),
    pageInfo: z.lazy(() => OffsetPageInfoSchema()),
    totalCount: z.number()
  })
}

export function EventCategoryCreateInputSchema(): z.ZodObject<Properties<EventCategoryCreateInput>> {
  return z.object({
    title: z.string()
  })
}

export function EventCategoryDeleteFilterSchema(): z.ZodObject<Properties<EventCategoryDeleteFilter>> {
  return z.object({
    and: z.array(z.lazy(() => EventCategoryDeleteFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => EventCategoryDeleteFilterSchema())).nullish(),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function EventCategoryDeleteResponseSchema(): z.ZodObject<Properties<EventCategoryDeleteResponse>> {
  return z.object({
    __typename: z.literal('EventCategoryDeleteResponse').optional(),
    createdAt: z.string().datetime().nullish(),
    id: z.string().nullish(),
    title: z.string().nullish(),
    updatedAt: z.string().datetime().nullish()
  })
}

export function EventCategoryFilterSchema(): z.ZodObject<Properties<EventCategoryFilter>> {
  return z.object({
    and: z.array(z.lazy(() => EventCategoryFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    createdBy: z.lazy(() => EventCategoryFilterUserFilterSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => EventCategoryFilterSchema())).nullish(),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    updatedBy: z.lazy(() => EventCategoryFilterUserFilterSchema().nullish())
  })
}

export function EventCategoryFilterUserFilterSchema(): z.ZodObject<Properties<EventCategoryFilterUserFilter>> {
  return z.object({
    and: z.array(z.lazy(() => EventCategoryFilterUserFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    email: z.lazy(() => StringFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    jobTitle: z.lazy(() => StringFieldComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => EventCategoryFilterUserFilterSchema())).nullish(),
    phone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    role: z.lazy(() => UserRoleFilterComparisonSchema().nullish()),
    timezone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function EventCategorySortSchema(): z.ZodObject<Properties<EventCategorySort>> {
  return z.object({
    direction: SortDirectionSchema,
    field: EventCategorySortFieldsSchema,
    nulls: SortNullsSchema.nullish()
  })
}

export function EventCategorySubscriptionFilterSchema(): z.ZodObject<Properties<EventCategorySubscriptionFilter>> {
  return z.object({
    and: z.array(z.lazy(() => EventCategorySubscriptionFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => EventCategorySubscriptionFilterSchema())).nullish(),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function EventCategoryUpdateFilterSchema(): z.ZodObject<Properties<EventCategoryUpdateFilter>> {
  return z.object({
    and: z.array(z.lazy(() => EventCategoryUpdateFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => EventCategoryUpdateFilterSchema())).nullish(),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function EventCategoryUpdateInputSchema(): z.ZodObject<Properties<EventCategoryUpdateInput>> {
  return z.object({
    title: z.string()
  })
}

export function EventConnectionSchema(): z.ZodObject<Properties<EventConnection>> {
  return z.object({
    __typename: z.literal('EventConnection').optional(),
    nodes: z.array(z.lazy(() => EventSchema())),
    pageInfo: z.lazy(() => OffsetPageInfoSchema()),
    totalCount: z.number()
  })
}

export function EventCreateInputSchema(): z.ZodObject<Properties<EventCreateInput>> {
  return z.object({
    categoryId: z.string(),
    color: z.string(),
    description: z.string(),
    endDate: z.string().datetime(),
    participantIds: z.array(z.string()),
    startDate: z.string().datetime(),
    title: z.string()
  })
}

export function EventDeleteFilterSchema(): z.ZodObject<Properties<EventDeleteFilter>> {
  return z.object({
    and: z.array(z.lazy(() => EventDeleteFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    description: z.lazy(() => StringFieldComparisonSchema().nullish()),
    endDate: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => EventDeleteFilterSchema())).nullish(),
    startDate: z.lazy(() => DateFieldComparisonSchema().nullish()),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function EventDeleteResponseSchema(): z.ZodObject<Properties<EventDeleteResponse>> {
  return z.object({
    __typename: z.literal('EventDeleteResponse').optional(),
    color: z.string().nullish(),
    createdAt: z.string().datetime().nullish(),
    description: z.string().nullish(),
    endDate: z.string().datetime().nullish(),
    id: z.string().nullish(),
    startDate: z.string().datetime().nullish(),
    title: z.string().nullish(),
    updatedAt: z.string().datetime().nullish()
  })
}

export function EventFilterSchema(): z.ZodObject<Properties<EventFilter>> {
  return z.object({
    and: z.array(z.lazy(() => EventFilterSchema())).nullish(),
    category: z.lazy(() => EventFilterEventCategoryFilterSchema().nullish()),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    createdBy: z.lazy(() => EventFilterUserFilterSchema().nullish()),
    description: z.lazy(() => StringFieldComparisonSchema().nullish()),
    endDate: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => EventFilterSchema())).nullish(),
    startDate: z.lazy(() => DateFieldComparisonSchema().nullish()),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    updatedBy: z.lazy(() => EventFilterUserFilterSchema().nullish())
  })
}

export function EventFilterEventCategoryFilterSchema(): z.ZodObject<Properties<EventFilterEventCategoryFilter>> {
  return z.object({
    and: z.array(z.lazy(() => EventFilterEventCategoryFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => EventFilterEventCategoryFilterSchema())).nullish(),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function EventFilterUserFilterSchema(): z.ZodObject<Properties<EventFilterUserFilter>> {
  return z.object({
    and: z.array(z.lazy(() => EventFilterUserFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    email: z.lazy(() => StringFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    jobTitle: z.lazy(() => StringFieldComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => EventFilterUserFilterSchema())).nullish(),
    phone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    role: z.lazy(() => UserRoleFilterComparisonSchema().nullish()),
    timezone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function EventSortSchema(): z.ZodObject<Properties<EventSort>> {
  return z.object({
    direction: SortDirectionSchema,
    field: EventSortFieldsSchema,
    nulls: SortNullsSchema.nullish()
  })
}

export function EventSubscriptionFilterSchema(): z.ZodObject<Properties<EventSubscriptionFilter>> {
  return z.object({
    and: z.array(z.lazy(() => EventSubscriptionFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    description: z.lazy(() => StringFieldComparisonSchema().nullish()),
    endDate: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => EventSubscriptionFilterSchema())).nullish(),
    startDate: z.lazy(() => DateFieldComparisonSchema().nullish()),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function EventUpdateFilterSchema(): z.ZodObject<Properties<EventUpdateFilter>> {
  return z.object({
    and: z.array(z.lazy(() => EventUpdateFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    description: z.lazy(() => StringFieldComparisonSchema().nullish()),
    endDate: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => EventUpdateFilterSchema())).nullish(),
    startDate: z.lazy(() => DateFieldComparisonSchema().nullish()),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function EventUpdateInputSchema(): z.ZodObject<Properties<EventUpdateInput>> {
  return z.object({
    categoryId: z.string().nullish(),
    color: z.string().nullish(),
    description: z.string().nullish(),
    endDate: z.string().datetime().nullish(),
    participantIds: z.array(z.string()).nullish(),
    startDate: z.string().datetime().nullish(),
    title: z.string().nullish()
  })
}

export function FloatFieldComparisonSchema(): z.ZodObject<Properties<FloatFieldComparison>> {
  return z.object({
    between: z.lazy(() => FloatFieldComparisonBetweenSchema().nullish()),
    eq: z.number().nullish(),
    gt: z.number().nullish(),
    gte: z.number().nullish(),
    in: z.array(z.number()).nullish(),
    is: z.boolean().nullish(),
    isNot: z.boolean().nullish(),
    lt: z.number().nullish(),
    lte: z.number().nullish(),
    neq: z.number().nullish(),
    notBetween: z.lazy(() => FloatFieldComparisonBetweenSchema().nullish()),
    notIn: z.array(z.number()).nullish()
  })
}

export function FloatFieldComparisonBetweenSchema(): z.ZodObject<Properties<FloatFieldComparisonBetween>> {
  return z.object({
    lower: z.number(),
    upper: z.number()
  })
}

export function IdFilterComparisonSchema(): z.ZodObject<Properties<IdFilterComparison>> {
  return z.object({
    eq: z.string().nullish(),
    gt: z.string().nullish(),
    gte: z.string().nullish(),
    iLike: z.string().nullish(),
    in: z.array(z.string()).nullish(),
    is: z.boolean().nullish(),
    isNot: z.boolean().nullish(),
    like: z.string().nullish(),
    lt: z.string().nullish(),
    lte: z.string().nullish(),
    neq: z.string().nullish(),
    notILike: z.string().nullish(),
    notIn: z.array(z.string()).nullish(),
    notLike: z.string().nullish()
  })
}

export function IntFieldComparisonSchema(): z.ZodObject<Properties<IntFieldComparison>> {
  return z.object({
    between: z.lazy(() => IntFieldComparisonBetweenSchema().nullish()),
    eq: z.number().nullish(),
    gt: z.number().nullish(),
    gte: z.number().nullish(),
    in: z.array(z.number()).nullish(),
    is: z.boolean().nullish(),
    isNot: z.boolean().nullish(),
    lt: z.number().nullish(),
    lte: z.number().nullish(),
    neq: z.number().nullish(),
    notBetween: z.lazy(() => IntFieldComparisonBetweenSchema().nullish()),
    notIn: z.array(z.number()).nullish()
  })
}

export function IntFieldComparisonBetweenSchema(): z.ZodObject<Properties<IntFieldComparisonBetween>> {
  return z.object({
    lower: z.number(),
    upper: z.number()
  })
}

export function LoginInputSchema(): z.ZodObject<Properties<LoginInput>> {
  return z.object({
    email: z.string()
  })
}

export function NumberFieldComparisonSchema(): z.ZodObject<Properties<NumberFieldComparison>> {
  return z.object({
    between: z.lazy(() => NumberFieldComparisonBetweenSchema().nullish()),
    eq: z.number().nullish(),
    gt: z.number().nullish(),
    gte: z.number().nullish(),
    in: z.array(z.number()).nullish(),
    is: z.boolean().nullish(),
    isNot: z.boolean().nullish(),
    lt: z.number().nullish(),
    lte: z.number().nullish(),
    neq: z.number().nullish(),
    notBetween: z.lazy(() => NumberFieldComparisonBetweenSchema().nullish()),
    notIn: z.array(z.number()).nullish()
  })
}

export function NumberFieldComparisonBetweenSchema(): z.ZodObject<Properties<NumberFieldComparisonBetween>> {
  return z.object({
    lower: z.number(),
    upper: z.number()
  })
}

export function OffsetPageInfoSchema(): z.ZodObject<Properties<OffsetPageInfo>> {
  return z.object({
    __typename: z.literal('OffsetPageInfo').optional(),
    hasNextPage: z.boolean().nullish(),
    hasPreviousPage: z.boolean().nullish()
  })
}

export function OffsetPagingSchema(): z.ZodObject<Properties<OffsetPaging>> {
  return z.object({
    limit: z.number().nullish(),
    offset: z.number().nullish()
  })
}

export function QuoteSchema(): z.ZodObject<Properties<Quote>> {
  return z.object({
    __typename: z.literal('Quote').optional(),
    company: z.lazy(() => CompanySchema()),
    contact: z.lazy(() => ContactSchema()),
    createdAt: z.string().datetime(),
    createdBy: z.lazy(() => UserSchema()),
    description: z.string().nullish(),
    id: z.string(),
    items: z.array(z.lazy(() => QuoteItemSchema())),
    salesOwner: z.lazy(() => UserSchema()),
    status: QuoteStatusSchema,
    subTotal: z.number(),
    tax: z.number(),
    title: z.string(),
    total: z.number(),
    updatedAt: z.string().datetime(),
    updatedBy: z.lazy(() => UserSchema().nullish())
  })
}

export function QuoteConnectionSchema(): z.ZodObject<Properties<QuoteConnection>> {
  return z.object({
    __typename: z.literal('QuoteConnection').optional(),
    nodes: z.array(z.lazy(() => QuoteSchema())),
    pageInfo: z.lazy(() => OffsetPageInfoSchema()),
    totalCount: z.number()
  })
}

export function QuoteCreateInputSchema(): z.ZodObject<Properties<QuoteCreateInput>> {
  return z.object({
    companyId: z.string(),
    contactId: z.string(),
    salesOwnerId: z.string(),
    title: z.string()
  })
}

export function QuoteDeleteFilterSchema(): z.ZodObject<Properties<QuoteDeleteFilter>> {
  return z.object({
    and: z.array(z.lazy(() => QuoteDeleteFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => QuoteDeleteFilterSchema())).nullish(),
    status: z.lazy(() => QuoteStatusFilterComparisonSchema().nullish()),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    total: z.lazy(() => FloatFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function QuoteDeleteResponseSchema(): z.ZodObject<Properties<QuoteDeleteResponse>> {
  return z.object({
    __typename: z.literal('QuoteDeleteResponse').optional(),
    createdAt: z.string().datetime().nullish(),
    description: z.string().nullish(),
    id: z.string().nullish(),
    items: z.array(z.lazy(() => QuoteItemSchema())).nullish(),
    status: QuoteStatusSchema.nullish(),
    subTotal: z.number().nullish(),
    tax: z.number().nullish(),
    title: z.string().nullish(),
    total: z.number().nullish(),
    updatedAt: z.string().datetime().nullish()
  })
}

export function QuoteFilterSchema(): z.ZodObject<Properties<QuoteFilter>> {
  return z.object({
    and: z.array(z.lazy(() => QuoteFilterSchema())).nullish(),
    company: z.lazy(() => QuoteFilterCompanyFilterSchema().nullish()),
    contact: z.lazy(() => QuoteFilterContactFilterSchema().nullish()),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    createdBy: z.lazy(() => QuoteFilterUserFilterSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => QuoteFilterSchema())).nullish(),
    salesOwner: z.lazy(() => QuoteFilterUserFilterSchema().nullish()),
    status: z.lazy(() => QuoteStatusFilterComparisonSchema().nullish()),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    total: z.lazy(() => FloatFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    updatedBy: z.lazy(() => QuoteFilterUserFilterSchema().nullish())
  })
}

export function QuoteFilterCompanyFilterSchema(): z.ZodObject<Properties<QuoteFilterCompanyFilter>> {
  return z.object({
    and: z.array(z.lazy(() => QuoteFilterCompanyFilterSchema())).nullish(),
    businessType: z.lazy(() => CompanyBusinessTypeFilterComparisonSchema().nullish()),
    companySize: z.lazy(() => CompanyCompanySizeFilterComparisonSchema().nullish()),
    country: z.lazy(() => StringFieldComparisonSchema().nullish()),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    industry: z.lazy(() => CompanyIndustryFilterComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => QuoteFilterCompanyFilterSchema())).nullish(),
    totalRevenue: z.lazy(() => IntFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    website: z.lazy(() => StringFieldComparisonSchema().nullish())
  })
}

export function QuoteFilterContactFilterSchema(): z.ZodObject<Properties<QuoteFilterContactFilter>> {
  return z.object({
    and: z.array(z.lazy(() => QuoteFilterContactFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    email: z.lazy(() => StringFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    jobTitle: z.lazy(() => StringFieldComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => QuoteFilterContactFilterSchema())).nullish(),
    phone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    score: z.lazy(() => IntFieldComparisonSchema().nullish()),
    stage: z.lazy(() => ContactStageFilterComparisonSchema().nullish()),
    status: z.lazy(() => ContactStatusFilterComparisonSchema().nullish()),
    timezone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function QuoteFilterUserFilterSchema(): z.ZodObject<Properties<QuoteFilterUserFilter>> {
  return z.object({
    and: z.array(z.lazy(() => QuoteFilterUserFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    email: z.lazy(() => StringFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    jobTitle: z.lazy(() => StringFieldComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => QuoteFilterUserFilterSchema())).nullish(),
    phone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    role: z.lazy(() => UserRoleFilterComparisonSchema().nullish()),
    timezone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function QuoteItemSchema(): z.ZodObject<Properties<QuoteItem>> {
  return z.object({
    __typename: z.literal('QuoteItem').optional(),
    discount: z.number(),
    quantity: z.number(),
    title: z.string(),
    totalPrice: z.number(),
    unitPrice: z.number()
  })
}

export function QuoteItemInputSchema(): z.ZodObject<Properties<QuoteItemInput>> {
  return z.object({
    discount: z.number(),
    quantity: z.number(),
    title: z.string(),
    unitPrice: z.number()
  })
}

export function QuoteSortSchema(): z.ZodObject<Properties<QuoteSort>> {
  return z.object({
    direction: SortDirectionSchema,
    field: QuoteSortFieldsSchema,
    nulls: SortNullsSchema.nullish()
  })
}

export function QuoteStatusFilterComparisonSchema(): z.ZodObject<Properties<QuoteStatusFilterComparison>> {
  return z.object({
    eq: QuoteStatusSchema.nullish(),
    gt: QuoteStatusSchema.nullish(),
    gte: QuoteStatusSchema.nullish(),
    iLike: QuoteStatusSchema.nullish(),
    in: z.array(QuoteStatusSchema).nullish(),
    is: z.boolean().nullish(),
    isNot: z.boolean().nullish(),
    like: QuoteStatusSchema.nullish(),
    lt: QuoteStatusSchema.nullish(),
    lte: QuoteStatusSchema.nullish(),
    neq: QuoteStatusSchema.nullish(),
    notILike: QuoteStatusSchema.nullish(),
    notIn: z.array(QuoteStatusSchema).nullish(),
    notLike: QuoteStatusSchema.nullish()
  })
}

export function QuoteSubscriptionFilterSchema(): z.ZodObject<Properties<QuoteSubscriptionFilter>> {
  return z.object({
    and: z.array(z.lazy(() => QuoteSubscriptionFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => QuoteSubscriptionFilterSchema())).nullish(),
    status: z.lazy(() => QuoteStatusFilterComparisonSchema().nullish()),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    total: z.lazy(() => FloatFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function QuoteUpdateFilterSchema(): z.ZodObject<Properties<QuoteUpdateFilter>> {
  return z.object({
    and: z.array(z.lazy(() => QuoteUpdateFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => QuoteUpdateFilterSchema())).nullish(),
    status: z.lazy(() => QuoteStatusFilterComparisonSchema().nullish()),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    total: z.lazy(() => FloatFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function QuoteUpdateInputSchema(): z.ZodObject<Properties<QuoteUpdateInput>> {
  return z.object({
    companyId: z.string().nullish(),
    contactId: z.string().nullish(),
    description: z.string().nullish(),
    items: z.array(z.lazy(() => QuoteItemInputSchema())).nullish(),
    salesOwnerId: z.string().nullish(),
    status: QuoteStatusSchema.nullish(),
    tax: z.number().nullish(),
    title: z.string().nullish()
  })
}

export function RegisterInputSchema(): z.ZodObject<Properties<RegisterInput>> {
  return z.object({
    email: z.string(),
    password: z.string()
  })
}

export function StringFieldComparisonSchema(): z.ZodObject<Properties<StringFieldComparison>> {
  return z.object({
    eq: z.string().nullish(),
    gt: z.string().nullish(),
    gte: z.string().nullish(),
    iLike: z.string().nullish(),
    in: z.array(z.string()).nullish(),
    is: z.boolean().nullish(),
    isNot: z.boolean().nullish(),
    like: z.string().nullish(),
    lt: z.string().nullish(),
    lte: z.string().nullish(),
    neq: z.string().nullish(),
    notILike: z.string().nullish(),
    notIn: z.array(z.string()).nullish(),
    notLike: z.string().nullish()
  })
}

export function TaskSchema(): z.ZodObject<Properties<Task>> {
  return z.object({
    __typename: z.literal('Task').optional(),
    checklist: z.array(z.lazy(() => CheckListItemSchema())),
    comments: z.lazy(() => TaskCommentsConnectionSchema()),
    commentsAggregate: z.array(z.lazy(() => TaskCommentsAggregateResponseSchema())),
    completed: z.boolean(),
    createdAt: z.string().datetime(),
    createdBy: z.lazy(() => UserSchema()),
    description: z.string().nullish(),
    dueDate: z.string().datetime().nullish(),
    id: z.string(),
    stage: z.lazy(() => TaskStageSchema().nullish()),
    stageId: z.string().nullish(),
    title: z.string(),
    updatedAt: z.string().datetime(),
    updatedBy: z.lazy(() => UserSchema().nullish()),
    users: z.array(z.lazy(() => UserSchema())),
    usersAggregate: z.array(z.lazy(() => TaskUsersAggregateResponseSchema()))
  })
}

export function TaskCommentsArgsSchema(): z.ZodObject<Properties<TaskCommentsArgs>> {
  return z.object({
    filter: z.lazy(() => TaskCommentFilterSchema()),
    paging: z.lazy(() => OffsetPagingSchema()),
    sorting: z.array(z.lazy(() => TaskCommentSortSchema()))
  })
}

export function TaskCommentsAggregateArgsSchema(): z.ZodObject<Properties<TaskCommentsAggregateArgs>> {
  return z.object({
    filter: z.lazy(() => TaskCommentAggregateFilterSchema().nullish())
  })
}

export function TaskUsersArgsSchema(): z.ZodObject<Properties<TaskUsersArgs>> {
  return z.object({
    filter: z.lazy(() => UserFilterSchema()),
    sorting: z.array(z.lazy(() => UserSortSchema()))
  })
}

export function TaskUsersAggregateArgsSchema(): z.ZodObject<Properties<TaskUsersAggregateArgs>> {
  return z.object({
    filter: z.lazy(() => UserAggregateFilterSchema().nullish())
  })
}

export function TaskAggregateFilterSchema(): z.ZodObject<Properties<TaskAggregateFilter>> {
  return z.object({
    and: z.array(z.lazy(() => TaskAggregateFilterSchema())).nullish(),
    completed: z.lazy(() => BooleanFieldComparisonSchema().nullish()),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    description: z.lazy(() => StringFieldComparisonSchema().nullish()),
    dueDate: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => TaskAggregateFilterSchema())).nullish(),
    stageId: z.lazy(() => IdFilterComparisonSchema().nullish()),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function TaskAggregateGroupBySchema(): z.ZodObject<Properties<TaskAggregateGroupBy>> {
  return z.object({
    __typename: z.literal('TaskAggregateGroupBy').optional(),
    completed: z.boolean().nullish(),
    createdAt: z.string().datetime().nullish(),
    description: z.string().nullish(),
    dueDate: z.string().datetime().nullish(),
    id: z.string().nullish(),
    stageId: z.string().nullish(),
    title: z.string().nullish(),
    updatedAt: z.string().datetime().nullish()
  })
}

export function TaskAggregateGroupByCreatedAtArgsSchema(): z.ZodObject<Properties<TaskAggregateGroupByCreatedAtArgs>> {
  return z.object({
    by: GroupBySchema.default("DAY")
  })
}

export function TaskAggregateGroupByDueDateArgsSchema(): z.ZodObject<Properties<TaskAggregateGroupByDueDateArgs>> {
  return z.object({
    by: GroupBySchema.default("DAY")
  })
}

export function TaskAggregateGroupByUpdatedAtArgsSchema(): z.ZodObject<Properties<TaskAggregateGroupByUpdatedAtArgs>> {
  return z.object({
    by: GroupBySchema.default("DAY")
  })
}

export function TaskAggregateResponseSchema(): z.ZodObject<Properties<TaskAggregateResponse>> {
  return z.object({
    __typename: z.literal('TaskAggregateResponse').optional(),
    avg: z.lazy(() => TaskAvgAggregateSchema().nullish()),
    count: z.lazy(() => TaskCountAggregateSchema().nullish()),
    groupBy: z.lazy(() => TaskAggregateGroupBySchema().nullish()),
    max: z.lazy(() => TaskMaxAggregateSchema().nullish()),
    min: z.lazy(() => TaskMinAggregateSchema().nullish()),
    sum: z.lazy(() => TaskSumAggregateSchema().nullish())
  })
}

export function TaskAvgAggregateSchema(): z.ZodObject<Properties<TaskAvgAggregate>> {
  return z.object({
    __typename: z.literal('TaskAvgAggregate').optional(),
    id: z.number().nullish(),
    stageId: z.number().nullish()
  })
}

export function TaskCommentSchema(): z.ZodObject<Properties<TaskComment>> {
  return z.object({
    __typename: z.literal('TaskComment').optional(),
    comment: z.string(),
    createdAt: z.string().datetime(),
    createdBy: z.lazy(() => UserSchema()),
    id: z.string(),
    task: z.lazy(() => TaskSchema()),
    updatedAt: z.string().datetime(),
    updatedBy: z.lazy(() => UserSchema().nullish())
  })
}

export function TaskCommentAggregateFilterSchema(): z.ZodObject<Properties<TaskCommentAggregateFilter>> {
  return z.object({
    and: z.array(z.lazy(() => TaskCommentAggregateFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => TaskCommentAggregateFilterSchema())).nullish(),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function TaskCommentConnectionSchema(): z.ZodObject<Properties<TaskCommentConnection>> {
  return z.object({
    __typename: z.literal('TaskCommentConnection').optional(),
    nodes: z.array(z.lazy(() => TaskCommentSchema())),
    pageInfo: z.lazy(() => OffsetPageInfoSchema()),
    totalCount: z.number()
  })
}

export function TaskCommentCreateInputSchema(): z.ZodObject<Properties<TaskCommentCreateInput>> {
  return z.object({
    comment: z.string(),
    taskId: z.string()
  })
}

export function TaskCommentDeleteFilterSchema(): z.ZodObject<Properties<TaskCommentDeleteFilter>> {
  return z.object({
    and: z.array(z.lazy(() => TaskCommentDeleteFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => TaskCommentDeleteFilterSchema())).nullish(),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function TaskCommentDeleteResponseSchema(): z.ZodObject<Properties<TaskCommentDeleteResponse>> {
  return z.object({
    __typename: z.literal('TaskCommentDeleteResponse').optional(),
    comment: z.string().nullish(),
    createdAt: z.string().datetime().nullish(),
    id: z.string().nullish(),
    updatedAt: z.string().datetime().nullish()
  })
}

export function TaskCommentFilterSchema(): z.ZodObject<Properties<TaskCommentFilter>> {
  return z.object({
    and: z.array(z.lazy(() => TaskCommentFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    createdBy: z.lazy(() => TaskCommentFilterUserFilterSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => TaskCommentFilterSchema())).nullish(),
    task: z.lazy(() => TaskCommentFilterTaskFilterSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    updatedBy: z.lazy(() => TaskCommentFilterUserFilterSchema().nullish())
  })
}

export function TaskCommentFilterTaskFilterSchema(): z.ZodObject<Properties<TaskCommentFilterTaskFilter>> {
  return z.object({
    and: z.array(z.lazy(() => TaskCommentFilterTaskFilterSchema())).nullish(),
    completed: z.lazy(() => BooleanFieldComparisonSchema().nullish()),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    description: z.lazy(() => StringFieldComparisonSchema().nullish()),
    dueDate: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => TaskCommentFilterTaskFilterSchema())).nullish(),
    stageId: z.lazy(() => IdFilterComparisonSchema().nullish()),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function TaskCommentFilterUserFilterSchema(): z.ZodObject<Properties<TaskCommentFilterUserFilter>> {
  return z.object({
    and: z.array(z.lazy(() => TaskCommentFilterUserFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    email: z.lazy(() => StringFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    jobTitle: z.lazy(() => StringFieldComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => TaskCommentFilterUserFilterSchema())).nullish(),
    phone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    role: z.lazy(() => UserRoleFilterComparisonSchema().nullish()),
    timezone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function TaskCommentSortSchema(): z.ZodObject<Properties<TaskCommentSort>> {
  return z.object({
    direction: SortDirectionSchema,
    field: TaskCommentSortFieldsSchema,
    nulls: SortNullsSchema.nullish()
  })
}

export function TaskCommentSubscriptionFilterSchema(): z.ZodObject<Properties<TaskCommentSubscriptionFilter>> {
  return z.object({
    and: z.array(z.lazy(() => TaskCommentSubscriptionFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => TaskCommentSubscriptionFilterSchema())).nullish(),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function TaskCommentUpdateFilterSchema(): z.ZodObject<Properties<TaskCommentUpdateFilter>> {
  return z.object({
    and: z.array(z.lazy(() => TaskCommentUpdateFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => TaskCommentUpdateFilterSchema())).nullish(),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function TaskCommentUpdateInputSchema(): z.ZodObject<Properties<TaskCommentUpdateInput>> {
  return z.object({
    comment: z.string()
  })
}

export function TaskCommentsAggregateGroupBySchema(): z.ZodObject<Properties<TaskCommentsAggregateGroupBy>> {
  return z.object({
    __typename: z.literal('TaskCommentsAggregateGroupBy').optional(),
    createdAt: z.string().datetime().nullish(),
    id: z.string().nullish(),
    updatedAt: z.string().datetime().nullish()
  })
}

export function TaskCommentsAggregateResponseSchema(): z.ZodObject<Properties<TaskCommentsAggregateResponse>> {
  return z.object({
    __typename: z.literal('TaskCommentsAggregateResponse').optional(),
    avg: z.lazy(() => TaskCommentsAvgAggregateSchema().nullish()),
    count: z.lazy(() => TaskCommentsCountAggregateSchema().nullish()),
    groupBy: z.lazy(() => TaskCommentsAggregateGroupBySchema().nullish()),
    max: z.lazy(() => TaskCommentsMaxAggregateSchema().nullish()),
    min: z.lazy(() => TaskCommentsMinAggregateSchema().nullish()),
    sum: z.lazy(() => TaskCommentsSumAggregateSchema().nullish())
  })
}

export function TaskCommentsAvgAggregateSchema(): z.ZodObject<Properties<TaskCommentsAvgAggregate>> {
  return z.object({
    __typename: z.literal('TaskCommentsAvgAggregate').optional(),
    id: z.number().nullish()
  })
}

export function TaskCommentsConnectionSchema(): z.ZodObject<Properties<TaskCommentsConnection>> {
  return z.object({
    __typename: z.literal('TaskCommentsConnection').optional(),
    nodes: z.array(z.lazy(() => TaskCommentSchema())),
    pageInfo: z.lazy(() => OffsetPageInfoSchema()),
    totalCount: z.number()
  })
}

export function TaskCommentsCountAggregateSchema(): z.ZodObject<Properties<TaskCommentsCountAggregate>> {
  return z.object({
    __typename: z.literal('TaskCommentsCountAggregate').optional(),
    createdAt: z.number().nullish(),
    id: z.number().nullish(),
    updatedAt: z.number().nullish()
  })
}

export function TaskCommentsMaxAggregateSchema(): z.ZodObject<Properties<TaskCommentsMaxAggregate>> {
  return z.object({
    __typename: z.literal('TaskCommentsMaxAggregate').optional(),
    createdAt: z.string().datetime().nullish(),
    id: z.string().nullish(),
    updatedAt: z.string().datetime().nullish()
  })
}

export function TaskCommentsMinAggregateSchema(): z.ZodObject<Properties<TaskCommentsMinAggregate>> {
  return z.object({
    __typename: z.literal('TaskCommentsMinAggregate').optional(),
    createdAt: z.string().datetime().nullish(),
    id: z.string().nullish(),
    updatedAt: z.string().datetime().nullish()
  })
}

export function TaskCommentsSumAggregateSchema(): z.ZodObject<Properties<TaskCommentsSumAggregate>> {
  return z.object({
    __typename: z.literal('TaskCommentsSumAggregate').optional(),
    id: z.number().nullish()
  })
}

export function TaskConnectionSchema(): z.ZodObject<Properties<TaskConnection>> {
  return z.object({
    __typename: z.literal('TaskConnection').optional(),
    nodes: z.array(z.lazy(() => TaskSchema())),
    pageInfo: z.lazy(() => OffsetPageInfoSchema()),
    totalCount: z.number()
  })
}

export function TaskCountAggregateSchema(): z.ZodObject<Properties<TaskCountAggregate>> {
  return z.object({
    __typename: z.literal('TaskCountAggregate').optional(),
    completed: z.number().nullish(),
    createdAt: z.number().nullish(),
    description: z.number().nullish(),
    dueDate: z.number().nullish(),
    id: z.number().nullish(),
    stageId: z.number().nullish(),
    title: z.number().nullish(),
    updatedAt: z.number().nullish()
  })
}

export function TaskCreateInputSchema(): z.ZodObject<Properties<TaskCreateInput>> {
  return z.object({
    checklist: z.array(z.lazy(() => ChecklistItemInputSchema())).nullish(),
    description: z.string().nullish(),
    dueDate: z.string().datetime().nullish(),
    stageId: z.number().nullish(),
    title: z.string(),
    userIds: z.array(z.string()).nullish()
  })
}

export function TaskDeleteFilterSchema(): z.ZodObject<Properties<TaskDeleteFilter>> {
  return z.object({
    and: z.array(z.lazy(() => TaskDeleteFilterSchema())).nullish(),
    completed: z.lazy(() => BooleanFieldComparisonSchema().nullish()),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    description: z.lazy(() => StringFieldComparisonSchema().nullish()),
    dueDate: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => TaskDeleteFilterSchema())).nullish(),
    stageId: z.lazy(() => IdFilterComparisonSchema().nullish()),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function TaskDeleteResponseSchema(): z.ZodObject<Properties<TaskDeleteResponse>> {
  return z.object({
    __typename: z.literal('TaskDeleteResponse').optional(),
    checklist: z.array(z.lazy(() => CheckListItemSchema())).nullish(),
    completed: z.boolean().nullish(),
    createdAt: z.string().datetime().nullish(),
    description: z.string().nullish(),
    dueDate: z.string().datetime().nullish(),
    id: z.string().nullish(),
    stageId: z.string().nullish(),
    title: z.string().nullish(),
    updatedAt: z.string().datetime().nullish()
  })
}

export function TaskFilterSchema(): z.ZodObject<Properties<TaskFilter>> {
  return z.object({
    and: z.array(z.lazy(() => TaskFilterSchema())).nullish(),
    comments: z.lazy(() => TaskFilterTaskCommentFilterSchema().nullish()),
    completed: z.lazy(() => BooleanFieldComparisonSchema().nullish()),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    createdBy: z.lazy(() => TaskFilterUserFilterSchema().nullish()),
    description: z.lazy(() => StringFieldComparisonSchema().nullish()),
    dueDate: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => TaskFilterSchema())).nullish(),
    stage: z.lazy(() => TaskFilterTaskStageFilterSchema().nullish()),
    stageId: z.lazy(() => IdFilterComparisonSchema().nullish()),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    updatedBy: z.lazy(() => TaskFilterUserFilterSchema().nullish())
  })
}

export function TaskFilterTaskCommentFilterSchema(): z.ZodObject<Properties<TaskFilterTaskCommentFilter>> {
  return z.object({
    and: z.array(z.lazy(() => TaskFilterTaskCommentFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => TaskFilterTaskCommentFilterSchema())).nullish(),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function TaskFilterTaskStageFilterSchema(): z.ZodObject<Properties<TaskFilterTaskStageFilter>> {
  return z.object({
    and: z.array(z.lazy(() => TaskFilterTaskStageFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => TaskFilterTaskStageFilterSchema())).nullish(),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function TaskFilterUserFilterSchema(): z.ZodObject<Properties<TaskFilterUserFilter>> {
  return z.object({
    and: z.array(z.lazy(() => TaskFilterUserFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    email: z.lazy(() => StringFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    jobTitle: z.lazy(() => StringFieldComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => TaskFilterUserFilterSchema())).nullish(),
    phone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    role: z.lazy(() => UserRoleFilterComparisonSchema().nullish()),
    timezone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function TaskMaxAggregateSchema(): z.ZodObject<Properties<TaskMaxAggregate>> {
  return z.object({
    __typename: z.literal('TaskMaxAggregate').optional(),
    createdAt: z.string().datetime().nullish(),
    description: z.string().nullish(),
    dueDate: z.string().datetime().nullish(),
    id: z.string().nullish(),
    stageId: z.string().nullish(),
    title: z.string().nullish(),
    updatedAt: z.string().datetime().nullish()
  })
}

export function TaskMinAggregateSchema(): z.ZodObject<Properties<TaskMinAggregate>> {
  return z.object({
    __typename: z.literal('TaskMinAggregate').optional(),
    createdAt: z.string().datetime().nullish(),
    description: z.string().nullish(),
    dueDate: z.string().datetime().nullish(),
    id: z.string().nullish(),
    stageId: z.string().nullish(),
    title: z.string().nullish(),
    updatedAt: z.string().datetime().nullish()
  })
}

export function TaskSortSchema(): z.ZodObject<Properties<TaskSort>> {
  return z.object({
    direction: SortDirectionSchema,
    field: TaskSortFieldsSchema,
    nulls: SortNullsSchema.nullish()
  })
}

export function TaskStageSchema(): z.ZodObject<Properties<TaskStage>> {
  return z.object({
    __typename: z.literal('TaskStage').optional(),
    createdAt: z.string().datetime(),
    createdBy: z.lazy(() => UserSchema()),
    id: z.string(),
    tasks: z.array(z.lazy(() => TaskSchema())),
    tasksAggregate: z.array(z.lazy(() => TaskStageTasksAggregateResponseSchema())),
    title: z.string(),
    updatedAt: z.string().datetime(),
    updatedBy: z.lazy(() => UserSchema().nullish())
  })
}

export function TaskStageTasksArgsSchema(): z.ZodObject<Properties<TaskStageTasksArgs>> {
  return z.object({
    filter: z.lazy(() => TaskFilterSchema()),
    sorting: z.array(z.lazy(() => TaskSortSchema()))
  })
}

export function TaskStageTasksAggregateArgsSchema(): z.ZodObject<Properties<TaskStageTasksAggregateArgs>> {
  return z.object({
    filter: z.lazy(() => TaskAggregateFilterSchema().nullish())
  })
}

export function TaskStageAggregateFilterSchema(): z.ZodObject<Properties<TaskStageAggregateFilter>> {
  return z.object({
    and: z.array(z.lazy(() => TaskStageAggregateFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => TaskStageAggregateFilterSchema())).nullish(),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function TaskStageAggregateGroupBySchema(): z.ZodObject<Properties<TaskStageAggregateGroupBy>> {
  return z.object({
    __typename: z.literal('TaskStageAggregateGroupBy').optional(),
    createdAt: z.string().datetime().nullish(),
    id: z.string().nullish(),
    title: z.string().nullish(),
    updatedAt: z.string().datetime().nullish()
  })
}

export function TaskStageAggregateGroupByCreatedAtArgsSchema(): z.ZodObject<Properties<TaskStageAggregateGroupByCreatedAtArgs>> {
  return z.object({
    by: GroupBySchema.default("DAY")
  })
}

export function TaskStageAggregateGroupByUpdatedAtArgsSchema(): z.ZodObject<Properties<TaskStageAggregateGroupByUpdatedAtArgs>> {
  return z.object({
    by: GroupBySchema.default("DAY")
  })
}

export function TaskStageAggregateResponseSchema(): z.ZodObject<Properties<TaskStageAggregateResponse>> {
  return z.object({
    __typename: z.literal('TaskStageAggregateResponse').optional(),
    avg: z.lazy(() => TaskStageAvgAggregateSchema().nullish()),
    count: z.lazy(() => TaskStageCountAggregateSchema().nullish()),
    groupBy: z.lazy(() => TaskStageAggregateGroupBySchema().nullish()),
    max: z.lazy(() => TaskStageMaxAggregateSchema().nullish()),
    min: z.lazy(() => TaskStageMinAggregateSchema().nullish()),
    sum: z.lazy(() => TaskStageSumAggregateSchema().nullish())
  })
}

export function TaskStageAvgAggregateSchema(): z.ZodObject<Properties<TaskStageAvgAggregate>> {
  return z.object({
    __typename: z.literal('TaskStageAvgAggregate').optional(),
    id: z.number().nullish()
  })
}

export function TaskStageConnectionSchema(): z.ZodObject<Properties<TaskStageConnection>> {
  return z.object({
    __typename: z.literal('TaskStageConnection').optional(),
    nodes: z.array(z.lazy(() => TaskStageSchema())),
    pageInfo: z.lazy(() => OffsetPageInfoSchema()),
    totalCount: z.number()
  })
}

export function TaskStageCountAggregateSchema(): z.ZodObject<Properties<TaskStageCountAggregate>> {
  return z.object({
    __typename: z.literal('TaskStageCountAggregate').optional(),
    createdAt: z.number().nullish(),
    id: z.number().nullish(),
    title: z.number().nullish(),
    updatedAt: z.number().nullish()
  })
}

export function TaskStageCreateInputSchema(): z.ZodObject<Properties<TaskStageCreateInput>> {
  return z.object({
    title: z.string()
  })
}

export function TaskStageDeleteFilterSchema(): z.ZodObject<Properties<TaskStageDeleteFilter>> {
  return z.object({
    and: z.array(z.lazy(() => TaskStageDeleteFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => TaskStageDeleteFilterSchema())).nullish(),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function TaskStageDeleteResponseSchema(): z.ZodObject<Properties<TaskStageDeleteResponse>> {
  return z.object({
    __typename: z.literal('TaskStageDeleteResponse').optional(),
    createdAt: z.string().datetime().nullish(),
    id: z.string().nullish(),
    title: z.string().nullish(),
    updatedAt: z.string().datetime().nullish()
  })
}

export function TaskStageFilterSchema(): z.ZodObject<Properties<TaskStageFilter>> {
  return z.object({
    and: z.array(z.lazy(() => TaskStageFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    createdBy: z.lazy(() => TaskStageFilterUserFilterSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => TaskStageFilterSchema())).nullish(),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    updatedBy: z.lazy(() => TaskStageFilterUserFilterSchema().nullish())
  })
}

export function TaskStageFilterUserFilterSchema(): z.ZodObject<Properties<TaskStageFilterUserFilter>> {
  return z.object({
    and: z.array(z.lazy(() => TaskStageFilterUserFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    email: z.lazy(() => StringFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    jobTitle: z.lazy(() => StringFieldComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => TaskStageFilterUserFilterSchema())).nullish(),
    phone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    role: z.lazy(() => UserRoleFilterComparisonSchema().nullish()),
    timezone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function TaskStageMaxAggregateSchema(): z.ZodObject<Properties<TaskStageMaxAggregate>> {
  return z.object({
    __typename: z.literal('TaskStageMaxAggregate').optional(),
    createdAt: z.string().datetime().nullish(),
    id: z.string().nullish(),
    title: z.string().nullish(),
    updatedAt: z.string().datetime().nullish()
  })
}

export function TaskStageMinAggregateSchema(): z.ZodObject<Properties<TaskStageMinAggregate>> {
  return z.object({
    __typename: z.literal('TaskStageMinAggregate').optional(),
    createdAt: z.string().datetime().nullish(),
    id: z.string().nullish(),
    title: z.string().nullish(),
    updatedAt: z.string().datetime().nullish()
  })
}

export function TaskStageSortSchema(): z.ZodObject<Properties<TaskStageSort>> {
  return z.object({
    direction: SortDirectionSchema,
    field: TaskStageSortFieldsSchema,
    nulls: SortNullsSchema.nullish()
  })
}

export function TaskStageSubscriptionFilterSchema(): z.ZodObject<Properties<TaskStageSubscriptionFilter>> {
  return z.object({
    and: z.array(z.lazy(() => TaskStageSubscriptionFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => TaskStageSubscriptionFilterSchema())).nullish(),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function TaskStageSumAggregateSchema(): z.ZodObject<Properties<TaskStageSumAggregate>> {
  return z.object({
    __typename: z.literal('TaskStageSumAggregate').optional(),
    id: z.number().nullish()
  })
}

export function TaskStageTasksAggregateGroupBySchema(): z.ZodObject<Properties<TaskStageTasksAggregateGroupBy>> {
  return z.object({
    __typename: z.literal('TaskStageTasksAggregateGroupBy').optional(),
    completed: z.boolean().nullish(),
    createdAt: z.string().datetime().nullish(),
    description: z.string().nullish(),
    dueDate: z.string().datetime().nullish(),
    id: z.string().nullish(),
    stageId: z.string().nullish(),
    title: z.string().nullish(),
    updatedAt: z.string().datetime().nullish()
  })
}

export function TaskStageTasksAggregateResponseSchema(): z.ZodObject<Properties<TaskStageTasksAggregateResponse>> {
  return z.object({
    __typename: z.literal('TaskStageTasksAggregateResponse').optional(),
    avg: z.lazy(() => TaskStageTasksAvgAggregateSchema().nullish()),
    count: z.lazy(() => TaskStageTasksCountAggregateSchema().nullish()),
    groupBy: z.lazy(() => TaskStageTasksAggregateGroupBySchema().nullish()),
    max: z.lazy(() => TaskStageTasksMaxAggregateSchema().nullish()),
    min: z.lazy(() => TaskStageTasksMinAggregateSchema().nullish()),
    sum: z.lazy(() => TaskStageTasksSumAggregateSchema().nullish())
  })
}

export function TaskStageTasksAvgAggregateSchema(): z.ZodObject<Properties<TaskStageTasksAvgAggregate>> {
  return z.object({
    __typename: z.literal('TaskStageTasksAvgAggregate').optional(),
    id: z.number().nullish(),
    stageId: z.number().nullish()
  })
}

export function TaskStageTasksCountAggregateSchema(): z.ZodObject<Properties<TaskStageTasksCountAggregate>> {
  return z.object({
    __typename: z.literal('TaskStageTasksCountAggregate').optional(),
    completed: z.number().nullish(),
    createdAt: z.number().nullish(),
    description: z.number().nullish(),
    dueDate: z.number().nullish(),
    id: z.number().nullish(),
    stageId: z.number().nullish(),
    title: z.number().nullish(),
    updatedAt: z.number().nullish()
  })
}

export function TaskStageTasksMaxAggregateSchema(): z.ZodObject<Properties<TaskStageTasksMaxAggregate>> {
  return z.object({
    __typename: z.literal('TaskStageTasksMaxAggregate').optional(),
    createdAt: z.string().datetime().nullish(),
    description: z.string().nullish(),
    dueDate: z.string().datetime().nullish(),
    id: z.string().nullish(),
    stageId: z.string().nullish(),
    title: z.string().nullish(),
    updatedAt: z.string().datetime().nullish()
  })
}

export function TaskStageTasksMinAggregateSchema(): z.ZodObject<Properties<TaskStageTasksMinAggregate>> {
  return z.object({
    __typename: z.literal('TaskStageTasksMinAggregate').optional(),
    createdAt: z.string().datetime().nullish(),
    description: z.string().nullish(),
    dueDate: z.string().datetime().nullish(),
    id: z.string().nullish(),
    stageId: z.string().nullish(),
    title: z.string().nullish(),
    updatedAt: z.string().datetime().nullish()
  })
}

export function TaskStageTasksSumAggregateSchema(): z.ZodObject<Properties<TaskStageTasksSumAggregate>> {
  return z.object({
    __typename: z.literal('TaskStageTasksSumAggregate').optional(),
    id: z.number().nullish(),
    stageId: z.number().nullish()
  })
}

export function TaskStageUpdateFilterSchema(): z.ZodObject<Properties<TaskStageUpdateFilter>> {
  return z.object({
    and: z.array(z.lazy(() => TaskStageUpdateFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => TaskStageUpdateFilterSchema())).nullish(),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function TaskStageUpdateInputSchema(): z.ZodObject<Properties<TaskStageUpdateInput>> {
  return z.object({
    title: z.string()
  })
}

export function TaskSubscriptionFilterSchema(): z.ZodObject<Properties<TaskSubscriptionFilter>> {
  return z.object({
    and: z.array(z.lazy(() => TaskSubscriptionFilterSchema())).nullish(),
    completed: z.lazy(() => BooleanFieldComparisonSchema().nullish()),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    description: z.lazy(() => StringFieldComparisonSchema().nullish()),
    dueDate: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => TaskSubscriptionFilterSchema())).nullish(),
    stageId: z.lazy(() => IdFilterComparisonSchema().nullish()),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function TaskSumAggregateSchema(): z.ZodObject<Properties<TaskSumAggregate>> {
  return z.object({
    __typename: z.literal('TaskSumAggregate').optional(),
    id: z.number().nullish(),
    stageId: z.number().nullish()
  })
}

export function TaskUpdateFilterSchema(): z.ZodObject<Properties<TaskUpdateFilter>> {
  return z.object({
    and: z.array(z.lazy(() => TaskUpdateFilterSchema())).nullish(),
    completed: z.lazy(() => BooleanFieldComparisonSchema().nullish()),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    description: z.lazy(() => StringFieldComparisonSchema().nullish()),
    dueDate: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => TaskUpdateFilterSchema())).nullish(),
    stageId: z.lazy(() => IdFilterComparisonSchema().nullish()),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function TaskUpdateInputSchema(): z.ZodObject<Properties<TaskUpdateInput>> {
  return z.object({
    checklist: z.array(z.lazy(() => ChecklistItemInputSchema())).nullish(),
    completed: z.boolean().nullish(),
    description: z.string().nullish(),
    dueDate: z.string().datetime().nullish(),
    stageId: z.string().nullish(),
    title: z.string().nullish(),
    userIds: z.array(z.string()).nullish()
  })
}

export function TaskUsersAggregateGroupBySchema(): z.ZodObject<Properties<TaskUsersAggregateGroupBy>> {
  return z.object({
    __typename: z.literal('TaskUsersAggregateGroupBy').optional(),
    createdAt: z.string().datetime().nullish(),
    email: z.string().nullish(),
    id: z.string().nullish(),
    jobTitle: z.string().nullish(),
    name: z.string().nullish(),
    phone: z.string().nullish(),
    role: RoleSchema.nullish(),
    timezone: z.string().nullish(),
    updatedAt: z.string().datetime().nullish()
  })
}

export function TaskUsersAggregateResponseSchema(): z.ZodObject<Properties<TaskUsersAggregateResponse>> {
  return z.object({
    __typename: z.literal('TaskUsersAggregateResponse').optional(),
    avg: z.lazy(() => TaskUsersAvgAggregateSchema().nullish()),
    count: z.lazy(() => TaskUsersCountAggregateSchema().nullish()),
    groupBy: z.lazy(() => TaskUsersAggregateGroupBySchema().nullish()),
    max: z.lazy(() => TaskUsersMaxAggregateSchema().nullish()),
    min: z.lazy(() => TaskUsersMinAggregateSchema().nullish()),
    sum: z.lazy(() => TaskUsersSumAggregateSchema().nullish())
  })
}

export function TaskUsersAvgAggregateSchema(): z.ZodObject<Properties<TaskUsersAvgAggregate>> {
  return z.object({
    __typename: z.literal('TaskUsersAvgAggregate').optional(),
    id: z.number().nullish()
  })
}

export function TaskUsersCountAggregateSchema(): z.ZodObject<Properties<TaskUsersCountAggregate>> {
  return z.object({
    __typename: z.literal('TaskUsersCountAggregate').optional(),
    createdAt: z.number().nullish(),
    email: z.number().nullish(),
    id: z.number().nullish(),
    jobTitle: z.number().nullish(),
    name: z.number().nullish(),
    phone: z.number().nullish(),
    role: z.number().nullish(),
    timezone: z.number().nullish(),
    updatedAt: z.number().nullish()
  })
}

export function TaskUsersMaxAggregateSchema(): z.ZodObject<Properties<TaskUsersMaxAggregate>> {
  return z.object({
    __typename: z.literal('TaskUsersMaxAggregate').optional(),
    createdAt: z.string().datetime().nullish(),
    email: z.string().nullish(),
    id: z.string().nullish(),
    jobTitle: z.string().nullish(),
    name: z.string().nullish(),
    phone: z.string().nullish(),
    role: RoleSchema.nullish(),
    timezone: z.string().nullish(),
    updatedAt: z.string().datetime().nullish()
  })
}

export function TaskUsersMinAggregateSchema(): z.ZodObject<Properties<TaskUsersMinAggregate>> {
  return z.object({
    __typename: z.literal('TaskUsersMinAggregate').optional(),
    createdAt: z.string().datetime().nullish(),
    email: z.string().nullish(),
    id: z.string().nullish(),
    jobTitle: z.string().nullish(),
    name: z.string().nullish(),
    phone: z.string().nullish(),
    role: RoleSchema.nullish(),
    timezone: z.string().nullish(),
    updatedAt: z.string().datetime().nullish()
  })
}

export function TaskUsersSumAggregateSchema(): z.ZodObject<Properties<TaskUsersSumAggregate>> {
  return z.object({
    __typename: z.literal('TaskUsersSumAggregate').optional(),
    id: z.number().nullish()
  })
}

export function UpdateManyCompaniesInputSchema(): z.ZodObject<Properties<UpdateManyCompaniesInput>> {
  return z.object({
    filter: z.lazy(() => CompanyUpdateFilterSchema()),
    update: z.lazy(() => CompanyUpdateInputSchema())
  })
}

export function UpdateManyCompanyNotesInputSchema(): z.ZodObject<Properties<UpdateManyCompanyNotesInput>> {
  return z.object({
    filter: z.lazy(() => CompanyNoteUpdateFilterSchema()),
    update: z.lazy(() => CompanyNoteUpdateInputSchema())
  })
}

export function UpdateManyContactNotesInputSchema(): z.ZodObject<Properties<UpdateManyContactNotesInput>> {
  return z.object({
    filter: z.lazy(() => ContactNoteUpdateFilterSchema()),
    update: z.lazy(() => ContactNoteUpdateInputSchema())
  })
}

export function UpdateManyContactsInputSchema(): z.ZodObject<Properties<UpdateManyContactsInput>> {
  return z.object({
    filter: z.lazy(() => ContactUpdateFilterSchema()),
    update: z.lazy(() => ContactUpdateInputSchema())
  })
}

export function UpdateManyDealStagesInputSchema(): z.ZodObject<Properties<UpdateManyDealStagesInput>> {
  return z.object({
    filter: z.lazy(() => DealStageUpdateFilterSchema()),
    update: z.lazy(() => DealStageUpdateInputSchema())
  })
}

export function UpdateManyDealsInputSchema(): z.ZodObject<Properties<UpdateManyDealsInput>> {
  return z.object({
    filter: z.lazy(() => DealUpdateFilterSchema()),
    update: z.lazy(() => DealUpdateInputSchema())
  })
}

export function UpdateManyEventCategoriesInputSchema(): z.ZodObject<Properties<UpdateManyEventCategoriesInput>> {
  return z.object({
    filter: z.lazy(() => EventCategoryUpdateFilterSchema()),
    update: z.lazy(() => EventCategoryUpdateInputSchema())
  })
}

export function UpdateManyEventsInputSchema(): z.ZodObject<Properties<UpdateManyEventsInput>> {
  return z.object({
    filter: z.lazy(() => EventUpdateFilterSchema()),
    update: z.lazy(() => EventUpdateInputSchema())
  })
}

export function UpdateManyQuotesInputSchema(): z.ZodObject<Properties<UpdateManyQuotesInput>> {
  return z.object({
    filter: z.lazy(() => QuoteUpdateFilterSchema()),
    update: z.lazy(() => QuoteUpdateInputSchema())
  })
}

export function UpdateManyResponseSchema(): z.ZodObject<Properties<UpdateManyResponse>> {
  return z.object({
    __typename: z.literal('UpdateManyResponse').optional(),
    updatedCount: z.number()
  })
}

export function UpdateManyTaskCommentsInputSchema(): z.ZodObject<Properties<UpdateManyTaskCommentsInput>> {
  return z.object({
    filter: z.lazy(() => TaskCommentUpdateFilterSchema()),
    update: z.lazy(() => TaskCommentUpdateInputSchema())
  })
}

export function UpdateManyTaskStagesInputSchema(): z.ZodObject<Properties<UpdateManyTaskStagesInput>> {
  return z.object({
    filter: z.lazy(() => TaskStageUpdateFilterSchema()),
    update: z.lazy(() => TaskStageUpdateInputSchema())
  })
}

export function UpdateManyTasksInputSchema(): z.ZodObject<Properties<UpdateManyTasksInput>> {
  return z.object({
    filter: z.lazy(() => TaskUpdateFilterSchema()),
    update: z.lazy(() => TaskUpdateInputSchema())
  })
}

export function UpdateManyUsersInputSchema(): z.ZodObject<Properties<UpdateManyUsersInput>> {
  return z.object({
    filter: z.lazy(() => UserUpdateFilterSchema()),
    update: z.lazy(() => UserUpdateInputSchema())
  })
}

export function UpdateOneAuditSubscriptionFilterInputSchema(): z.ZodObject<Properties<UpdateOneAuditSubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => AuditSubscriptionFilterSchema())
  })
}

export function UpdateOneCompanyInputSchema(): z.ZodObject<Properties<UpdateOneCompanyInput>> {
  return z.object({
    id: z.string(),
    update: z.lazy(() => CompanyUpdateInputSchema())
  })
}

export function UpdateOneCompanyNoteInputSchema(): z.ZodObject<Properties<UpdateOneCompanyNoteInput>> {
  return z.object({
    id: z.string(),
    update: z.lazy(() => CompanyNoteUpdateInputSchema())
  })
}

export function UpdateOneCompanyNoteSubscriptionFilterInputSchema(): z.ZodObject<Properties<UpdateOneCompanyNoteSubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => CompanyNoteSubscriptionFilterSchema())
  })
}

export function UpdateOneCompanySubscriptionFilterInputSchema(): z.ZodObject<Properties<UpdateOneCompanySubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => CompanySubscriptionFilterSchema())
  })
}

export function UpdateOneContactInputSchema(): z.ZodObject<Properties<UpdateOneContactInput>> {
  return z.object({
    id: z.string(),
    update: z.lazy(() => ContactUpdateInputSchema())
  })
}

export function UpdateOneContactNoteInputSchema(): z.ZodObject<Properties<UpdateOneContactNoteInput>> {
  return z.object({
    id: z.string(),
    update: z.lazy(() => ContactNoteUpdateInputSchema())
  })
}

export function UpdateOneContactNoteSubscriptionFilterInputSchema(): z.ZodObject<Properties<UpdateOneContactNoteSubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => ContactNoteSubscriptionFilterSchema())
  })
}

export function UpdateOneContactSubscriptionFilterInputSchema(): z.ZodObject<Properties<UpdateOneContactSubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => ContactSubscriptionFilterSchema())
  })
}

export function UpdateOneDealInputSchema(): z.ZodObject<Properties<UpdateOneDealInput>> {
  return z.object({
    id: z.string(),
    update: z.lazy(() => DealUpdateInputSchema())
  })
}

export function UpdateOneDealStageInputSchema(): z.ZodObject<Properties<UpdateOneDealStageInput>> {
  return z.object({
    id: z.string(),
    update: z.lazy(() => DealStageUpdateInputSchema())
  })
}

export function UpdateOneDealStageSubscriptionFilterInputSchema(): z.ZodObject<Properties<UpdateOneDealStageSubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => DealStageSubscriptionFilterSchema())
  })
}

export function UpdateOneDealSubscriptionFilterInputSchema(): z.ZodObject<Properties<UpdateOneDealSubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => DealSubscriptionFilterSchema())
  })
}

export function UpdateOneEventCategoryInputSchema(): z.ZodObject<Properties<UpdateOneEventCategoryInput>> {
  return z.object({
    id: z.string(),
    update: z.lazy(() => EventCategoryUpdateInputSchema())
  })
}

export function UpdateOneEventCategorySubscriptionFilterInputSchema(): z.ZodObject<Properties<UpdateOneEventCategorySubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => EventCategorySubscriptionFilterSchema())
  })
}

export function UpdateOneEventInputSchema(): z.ZodObject<Properties<UpdateOneEventInput>> {
  return z.object({
    id: z.string(),
    update: z.lazy(() => EventUpdateInputSchema())
  })
}

export function UpdateOneEventSubscriptionFilterInputSchema(): z.ZodObject<Properties<UpdateOneEventSubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => EventSubscriptionFilterSchema())
  })
}

export function UpdateOneQuoteInputSchema(): z.ZodObject<Properties<UpdateOneQuoteInput>> {
  return z.object({
    id: z.string(),
    update: z.lazy(() => QuoteUpdateInputSchema())
  })
}

export function UpdateOneQuoteSubscriptionFilterInputSchema(): z.ZodObject<Properties<UpdateOneQuoteSubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => QuoteSubscriptionFilterSchema())
  })
}

export function UpdateOneTaskCommentInputSchema(): z.ZodObject<Properties<UpdateOneTaskCommentInput>> {
  return z.object({
    id: z.string(),
    update: z.lazy(() => TaskCommentUpdateInputSchema())
  })
}

export function UpdateOneTaskCommentSubscriptionFilterInputSchema(): z.ZodObject<Properties<UpdateOneTaskCommentSubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => TaskCommentSubscriptionFilterSchema())
  })
}

export function UpdateOneTaskInputSchema(): z.ZodObject<Properties<UpdateOneTaskInput>> {
  return z.object({
    id: z.string(),
    update: z.lazy(() => TaskUpdateInputSchema())
  })
}

export function UpdateOneTaskStageInputSchema(): z.ZodObject<Properties<UpdateOneTaskStageInput>> {
  return z.object({
    id: z.string(),
    update: z.lazy(() => TaskStageUpdateInputSchema())
  })
}

export function UpdateOneTaskStageSubscriptionFilterInputSchema(): z.ZodObject<Properties<UpdateOneTaskStageSubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => TaskStageSubscriptionFilterSchema())
  })
}

export function UpdateOneTaskSubscriptionFilterInputSchema(): z.ZodObject<Properties<UpdateOneTaskSubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => TaskSubscriptionFilterSchema())
  })
}

export function UpdateOneUserInputSchema(): z.ZodObject<Properties<UpdateOneUserInput>> {
  return z.object({
    id: z.string(),
    update: z.lazy(() => UserUpdateInputSchema())
  })
}

export function UpdateOneUserSubscriptionFilterInputSchema(): z.ZodObject<Properties<UpdateOneUserSubscriptionFilterInput>> {
  return z.object({
    filter: z.lazy(() => UserSubscriptionFilterSchema())
  })
}

export function UserSchema(): z.ZodObject<Properties<User>> {
  return z.object({
    __typename: z.literal('User').optional(),
    avatarUrl: z.string().nullish(),
    companies: z.lazy(() => UserCompaniesConnectionSchema()),
    contacts: z.lazy(() => UserContactsConnectionSchema()),
    createdAt: z.string().datetime(),
    createdBy: z.lazy(() => UserSchema().nullish()),
    deals: z.lazy(() => UserDealsConnectionSchema()),
    email: z.string(),
    events: z.lazy(() => UserEventsConnectionSchema()),
    id: z.string(),
    jobTitle: z.string().nullish(),
    name: z.string(),
    phone: z.string().nullish(),
    role: RoleSchema,
    tasks: z.lazy(() => UserTasksConnectionSchema()),
    timezone: z.string().nullish(),
    updatedAt: z.string().datetime(),
    updatedBy: z.lazy(() => UserSchema().nullish())
  })
}

export function UserCompaniesArgsSchema(): z.ZodObject<Properties<UserCompaniesArgs>> {
  return z.object({
    filter: z.lazy(() => CompanyFilterSchema()),
    paging: z.lazy(() => OffsetPagingSchema()),
    sorting: z.array(z.lazy(() => CompanySortSchema()))
  })
}

export function UserContactsArgsSchema(): z.ZodObject<Properties<UserContactsArgs>> {
  return z.object({
    filter: z.lazy(() => ContactFilterSchema()),
    paging: z.lazy(() => OffsetPagingSchema()),
    sorting: z.array(z.lazy(() => ContactSortSchema()))
  })
}

export function UserDealsArgsSchema(): z.ZodObject<Properties<UserDealsArgs>> {
  return z.object({
    filter: z.lazy(() => DealFilterSchema()),
    paging: z.lazy(() => OffsetPagingSchema()),
    sorting: z.array(z.lazy(() => DealSortSchema()))
  })
}

export function UserEventsArgsSchema(): z.ZodObject<Properties<UserEventsArgs>> {
  return z.object({
    filter: z.lazy(() => EventFilterSchema()),
    paging: z.lazy(() => OffsetPagingSchema()),
    sorting: z.array(z.lazy(() => EventSortSchema()))
  })
}

export function UserTasksArgsSchema(): z.ZodObject<Properties<UserTasksArgs>> {
  return z.object({
    filter: z.lazy(() => TaskFilterSchema()),
    paging: z.lazy(() => OffsetPagingSchema()),
    sorting: z.array(z.lazy(() => TaskSortSchema()))
  })
}

export function UserAggregateFilterSchema(): z.ZodObject<Properties<UserAggregateFilter>> {
  return z.object({
    and: z.array(z.lazy(() => UserAggregateFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    email: z.lazy(() => StringFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    jobTitle: z.lazy(() => StringFieldComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => UserAggregateFilterSchema())).nullish(),
    phone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    role: z.lazy(() => UserRoleFilterComparisonSchema().nullish()),
    timezone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function UserCompaniesConnectionSchema(): z.ZodObject<Properties<UserCompaniesConnection>> {
  return z.object({
    __typename: z.literal('UserCompaniesConnection').optional(),
    nodes: z.array(z.lazy(() => CompanySchema())),
    pageInfo: z.lazy(() => OffsetPageInfoSchema()),
    totalCount: z.number()
  })
}

export function UserConnectionSchema(): z.ZodObject<Properties<UserConnection>> {
  return z.object({
    __typename: z.literal('UserConnection').optional(),
    nodes: z.array(z.lazy(() => UserSchema())),
    pageInfo: z.lazy(() => OffsetPageInfoSchema()),
    totalCount: z.number()
  })
}

export function UserContactsConnectionSchema(): z.ZodObject<Properties<UserContactsConnection>> {
  return z.object({
    __typename: z.literal('UserContactsConnection').optional(),
    nodes: z.array(z.lazy(() => ContactSchema())),
    pageInfo: z.lazy(() => OffsetPageInfoSchema()),
    totalCount: z.number()
  })
}

export function UserCreateInputSchema(): z.ZodObject<Properties<UserCreateInput>> {
  return z.object({
    email: z.string(),
    jobTitle: z.string(),
    name: z.string(),
    phone: z.string(),
    role: RoleSchema,
    timezone: z.string()
  })
}

export function UserDealsConnectionSchema(): z.ZodObject<Properties<UserDealsConnection>> {
  return z.object({
    __typename: z.literal('UserDealsConnection').optional(),
    nodes: z.array(z.lazy(() => DealSchema())),
    pageInfo: z.lazy(() => OffsetPageInfoSchema()),
    totalCount: z.number()
  })
}

export function UserDeleteFilterSchema(): z.ZodObject<Properties<UserDeleteFilter>> {
  return z.object({
    and: z.array(z.lazy(() => UserDeleteFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    email: z.lazy(() => StringFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    jobTitle: z.lazy(() => StringFieldComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => UserDeleteFilterSchema())).nullish(),
    phone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    role: z.lazy(() => UserRoleFilterComparisonSchema().nullish()),
    timezone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function UserDeleteResponseSchema(): z.ZodObject<Properties<UserDeleteResponse>> {
  return z.object({
    __typename: z.literal('UserDeleteResponse').optional(),
    avatarUrl: z.string().nullish(),
    createdAt: z.string().datetime().nullish(),
    email: z.string().nullish(),
    id: z.string().nullish(),
    jobTitle: z.string().nullish(),
    name: z.string().nullish(),
    phone: z.string().nullish(),
    role: RoleSchema.nullish(),
    timezone: z.string().nullish(),
    updatedAt: z.string().datetime().nullish()
  })
}

export function UserEventsConnectionSchema(): z.ZodObject<Properties<UserEventsConnection>> {
  return z.object({
    __typename: z.literal('UserEventsConnection').optional(),
    nodes: z.array(z.lazy(() => EventSchema())),
    pageInfo: z.lazy(() => OffsetPageInfoSchema()),
    totalCount: z.number()
  })
}

export function UserFilterSchema(): z.ZodObject<Properties<UserFilter>> {
  return z.object({
    and: z.array(z.lazy(() => UserFilterSchema())).nullish(),
    companies: z.lazy(() => UserFilterCompanyFilterSchema().nullish()),
    contacts: z.lazy(() => UserFilterContactFilterSchema().nullish()),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    createdBy: z.lazy(() => UserFilterUserFilterSchema().nullish()),
    deals: z.lazy(() => UserFilterDealFilterSchema().nullish()),
    email: z.lazy(() => StringFieldComparisonSchema().nullish()),
    events: z.lazy(() => UserFilterEventFilterSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    jobTitle: z.lazy(() => StringFieldComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => UserFilterSchema())).nullish(),
    phone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    role: z.lazy(() => UserRoleFilterComparisonSchema().nullish()),
    tasks: z.lazy(() => UserFilterTaskFilterSchema().nullish()),
    timezone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    updatedBy: z.lazy(() => UserFilterUserFilterSchema().nullish())
  })
}

export function UserFilterCompanyFilterSchema(): z.ZodObject<Properties<UserFilterCompanyFilter>> {
  return z.object({
    and: z.array(z.lazy(() => UserFilterCompanyFilterSchema())).nullish(),
    businessType: z.lazy(() => CompanyBusinessTypeFilterComparisonSchema().nullish()),
    companySize: z.lazy(() => CompanyCompanySizeFilterComparisonSchema().nullish()),
    country: z.lazy(() => StringFieldComparisonSchema().nullish()),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    industry: z.lazy(() => CompanyIndustryFilterComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => UserFilterCompanyFilterSchema())).nullish(),
    totalRevenue: z.lazy(() => IntFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    website: z.lazy(() => StringFieldComparisonSchema().nullish())
  })
}

export function UserFilterContactFilterSchema(): z.ZodObject<Properties<UserFilterContactFilter>> {
  return z.object({
    and: z.array(z.lazy(() => UserFilterContactFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    email: z.lazy(() => StringFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    jobTitle: z.lazy(() => StringFieldComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => UserFilterContactFilterSchema())).nullish(),
    phone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    score: z.lazy(() => IntFieldComparisonSchema().nullish()),
    stage: z.lazy(() => ContactStageFilterComparisonSchema().nullish()),
    status: z.lazy(() => ContactStatusFilterComparisonSchema().nullish()),
    timezone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function UserFilterDealFilterSchema(): z.ZodObject<Properties<UserFilterDealFilter>> {
  return z.object({
    and: z.array(z.lazy(() => UserFilterDealFilterSchema())).nullish(),
    closeDateDay: z.lazy(() => IntFieldComparisonSchema().nullish()),
    closeDateMonth: z.lazy(() => IntFieldComparisonSchema().nullish()),
    closeDateYear: z.lazy(() => IntFieldComparisonSchema().nullish()),
    companyId: z.lazy(() => IdFilterComparisonSchema().nullish()),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    dealOwnerId: z.lazy(() => IdFilterComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => UserFilterDealFilterSchema())).nullish(),
    stageId: z.lazy(() => IdFilterComparisonSchema().nullish()),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    value: z.lazy(() => FloatFieldComparisonSchema().nullish())
  })
}

export function UserFilterEventFilterSchema(): z.ZodObject<Properties<UserFilterEventFilter>> {
  return z.object({
    and: z.array(z.lazy(() => UserFilterEventFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    description: z.lazy(() => StringFieldComparisonSchema().nullish()),
    endDate: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => UserFilterEventFilterSchema())).nullish(),
    startDate: z.lazy(() => DateFieldComparisonSchema().nullish()),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function UserFilterTaskFilterSchema(): z.ZodObject<Properties<UserFilterTaskFilter>> {
  return z.object({
    and: z.array(z.lazy(() => UserFilterTaskFilterSchema())).nullish(),
    completed: z.lazy(() => BooleanFieldComparisonSchema().nullish()),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    description: z.lazy(() => StringFieldComparisonSchema().nullish()),
    dueDate: z.lazy(() => DateFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    or: z.array(z.lazy(() => UserFilterTaskFilterSchema())).nullish(),
    stageId: z.lazy(() => IdFilterComparisonSchema().nullish()),
    title: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function UserFilterUserFilterSchema(): z.ZodObject<Properties<UserFilterUserFilter>> {
  return z.object({
    and: z.array(z.lazy(() => UserFilterUserFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    email: z.lazy(() => StringFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    jobTitle: z.lazy(() => StringFieldComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => UserFilterUserFilterSchema())).nullish(),
    phone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    role: z.lazy(() => UserRoleFilterComparisonSchema().nullish()),
    timezone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function UserRoleFilterComparisonSchema(): z.ZodObject<Properties<UserRoleFilterComparison>> {
  return z.object({
    eq: RoleSchema.nullish(),
    in: z.array(RoleSchema).nullish(),
    neq: RoleSchema.nullish(),
    notIn: z.array(RoleSchema).nullish()
  })
}

export function UserSortSchema(): z.ZodObject<Properties<UserSort>> {
  return z.object({
    direction: SortDirectionSchema,
    field: UserSortFieldsSchema,
    nulls: SortNullsSchema.nullish()
  })
}

export function UserSubscriptionFilterSchema(): z.ZodObject<Properties<UserSubscriptionFilter>> {
  return z.object({
    and: z.array(z.lazy(() => UserSubscriptionFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    email: z.lazy(() => StringFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    jobTitle: z.lazy(() => StringFieldComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => UserSubscriptionFilterSchema())).nullish(),
    phone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    role: z.lazy(() => UserRoleFilterComparisonSchema().nullish()),
    timezone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function UserTasksConnectionSchema(): z.ZodObject<Properties<UserTasksConnection>> {
  return z.object({
    __typename: z.literal('UserTasksConnection').optional(),
    nodes: z.array(z.lazy(() => TaskSchema())),
    pageInfo: z.lazy(() => OffsetPageInfoSchema()),
    totalCount: z.number()
  })
}

export function UserUpdateFilterSchema(): z.ZodObject<Properties<UserUpdateFilter>> {
  return z.object({
    and: z.array(z.lazy(() => UserUpdateFilterSchema())).nullish(),
    createdAt: z.lazy(() => DateFieldComparisonSchema().nullish()),
    email: z.lazy(() => StringFieldComparisonSchema().nullish()),
    id: z.lazy(() => IdFilterComparisonSchema().nullish()),
    jobTitle: z.lazy(() => StringFieldComparisonSchema().nullish()),
    name: z.lazy(() => StringFieldComparisonSchema().nullish()),
    or: z.array(z.lazy(() => UserUpdateFilterSchema())).nullish(),
    phone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    role: z.lazy(() => UserRoleFilterComparisonSchema().nullish()),
    timezone: z.lazy(() => StringFieldComparisonSchema().nullish()),
    updatedAt: z.lazy(() => DateFieldComparisonSchema().nullish())
  })
}

export function UserUpdateInputSchema(): z.ZodObject<Properties<UserUpdateInput>> {
  return z.object({
    email: z.string().nullish(),
    jobTitle: z.string().nullish(),
    name: z.string().nullish(),
    phone: z.string().nullish(),
    role: RoleSchema.nullish(),
    timezone: z.string().nullish()
  })
}
