export const dSocialTypeDefs = '

scalar DateTime

enum SortPostField {
  timestamp
  postLoveCount
  postRepliesCount
  postFavoritesCount
  postUpvoteTotal
  postRepostCount
}

enum SortDirection {
  ASCENDING
  DESCENDING
}

enum SortUserField {
  followerCount
  followingCount
  favoritedPostCount
  repostCount
  lovedPostCount
  upvotePostTotal
  upvotedPostCount
}

input DateRange {
  first: Int = 25
  start: Int = 0
}

input SortPost {
  sort: SortDirection = DESCENDING
  sortBy: SortPostField = timestamp
}

input PostFilter {
  createdBetween: DateRange
  byHashTag: String
  bySearchText: String
  byUser: ID
  byLocation: String
  byReplyTo: Int
  byFollowers: [User!]
}

input SortUser {
  sort: SortDirection = DESCENDING
  sortBy: SortUserField = followerCount
}

input UserFilter {
  byStatus: Boolean
  byUserFollowers: [User!]
  byLocation: String
  byBioSearch: String
  byDisplayName: String
}

type User {
  username: ID
  displayName: String
  bio: String
  followers: [User!]
  following: [User!]
  followerCount: Int
  followingCount: Int
  profileUrl: String
  profileImage: String
  headerImage: String
  allUserPosts(
    filter: PostFilter
    paging: DataPage
    sorting: DataSort
  ): [Post!]
  favoritedPosts: [Post!]
  pinnedPost: Post
  favoritedPostCount: Int
  reposts: [Post!]
  repostCount: Int
  lovedPosts: [Post!]
  lovedPostCount: Int
  upvotedPosts: [Post!]
  upvotedPostCount: Int
  upvotePostTotal: String
  hiddenPosts: [Post!]
  status: Boolean
}

type Post {
  postUUID: ID
  postingUser: User
  postLoveCount: Int
  postLoves: [User!]
  inReplyTo: Int
  postReplies(
    filter: PostFilter
    paging: DataPage
    sorting: PostSort
  ): [Post!]
  postRepliesCount: Int
  postFavorites: [User!]
  postFavoritesCount: Int
  postUpvotes: [Upvote!]
  postUpvoteTotal: String
  postReposts: [User!]
  postRepostCount: Int
  postData: String
  postDrive: String
  timestamp: Int
}

type Upvote {
  upvoteID: ID!
  upvoteUser: User!
  upvotedPost: Post!
  upvotedAmount: String!
  upvoteTimeout: Int!
}

type Query {
  Post(postUUID: ID!): Post!
  User(username: ID!): User!
  allPosts(filter: PostFilter paging: DataPage sorting: SortPost): [Post!]!
  allUsers(filter: UserFilter paging: DataPage sorting: SortUser): [User!]!
  filteredPosts(filter: PostFilter paging: DataPage sorting: SortPost): [Post!]!
  filteredUsers(filter: UserFilter paging: DataPage sorting: SortUser): [User!]!
}'
