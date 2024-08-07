import styled from "styled-components";

const UserCardWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
  padding: 50px;
  border-radius: 15px;
  background: #fefefe;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.2);
`;

const UserProfilePictureWrapper = styled.div`
  width: 117px;
  height: 117px;
`;

const UserProfilePicture = styled.img`
  width: inherit;
  height: inherit;
  border-radius: 50%;
`;

const UserProfileInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const UserProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const UserProfileName = styled.h3`
  font-family: "Space Mono";
  color: #2b3442;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const UserProfileUsername = styled.p`
  color: #0079ff;
  font-family: "Space Mono";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const UserProfileBio = styled.p`
  color: #4b6a9b;
  font-family: "Space Mono";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
`;

const UserProfileNetworkInfoWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding: 32px 35px;
  margin-top: 32px;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  background: #f6f8ff;
`;

const UserProfileInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const UserProfileInfoItemTitle = styled.p`
  color: #4b6a9b;
  font-family: "Space Mono", monospace;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const UserProfileInfoItemNumber = styled.p`
  color: #2b3442;
  font-family: "Space Mono", monospace;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;

export {
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
    UserProfileInfoItemNumber,
};
