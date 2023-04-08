import { gql } from '@apollo/client';

export const GET_TEA = gql`
query MyQuery {
  tea {
    category
    description
    id
    image
    name
    price
  }
}
`