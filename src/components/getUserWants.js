import { useQuery, gql } from '@apollo/client';

const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      itemsTheyWant {
        name
      }
    }
  }
`;


export default function GetUserWants({ userId }) {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: userId },
  })

  if (loading) return null; // or some loading indicator
  if (error) return console.log(error);

  console.log(data.user)
  const user = data.user;
  return user.itemsTheyWant.map((item) => item.name);
};

