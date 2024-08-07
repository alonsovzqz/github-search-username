import { IGithubUser } from "../../interfaces/IGithubUser";
import {
  UserCardWrapper,
  UserProfilePictureWrapper,
  UserProfilePicture,
  UserProfileInfoWrapper,
  UserProfileHeader,
  UserProfileName,
  UserProfileUsername,
  UserProfileBio,
  UserProfileNetworkInfoWrapper,
  UserProfileInfoItem,
  UserProfileInfoItemTitle,
  UserProfileInfoItemNumber
} from "./styles";

type UserCardType = {
  user: IGithubUser;
};

const UserCard = ({ user }: UserCardType) => {
  return (
    <UserCardWrapper>
      <UserProfilePictureWrapper>
        <UserProfilePicture src={user.avatar_url} alt={user.login} />
      </UserProfilePictureWrapper>
      <UserProfileInfoWrapper>
        <UserProfileHeader>
          <UserProfileName>{user.name ? user.name : ""}</UserProfileName>
          <UserProfileUsername>@{user.login}</UserProfileUsername>
        </UserProfileHeader>
        <UserProfileBio>
          {user.bio ? user.bio : "This profile has no bio"}
        </UserProfileBio>
        <UserProfileNetworkInfoWrapper>
          <UserProfileInfoItem>
            <UserProfileInfoItemTitle>Repos</UserProfileInfoItemTitle>
            <UserProfileInfoItemNumber>
              {user.public_repos}
            </UserProfileInfoItemNumber>
          </UserProfileInfoItem>
          <UserProfileInfoItem>
            <UserProfileInfoItemTitle>Followers</UserProfileInfoItemTitle>
            <UserProfileInfoItemNumber>
              {user.followers}
            </UserProfileInfoItemNumber>
          </UserProfileInfoItem>
          <UserProfileInfoItem>
            <UserProfileInfoItemTitle>Following</UserProfileInfoItemTitle>
            <UserProfileInfoItemNumber>
              {user.following}
            </UserProfileInfoItemNumber>
          </UserProfileInfoItem>
        </UserProfileNetworkInfoWrapper>
      </UserProfileInfoWrapper>
    </UserCardWrapper>
  );
};

export default UserCard;
