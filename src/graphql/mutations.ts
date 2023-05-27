import { gql } from "@apollo/client";

export const INSERT_CATEGORY = gql`
  mutation ($cat: category_insert_input!) {
    insert_category(objects: [$cat]) {
      returning {
        name
        image
        id
        description
      }
    }
  }
`;

export const INSERT_PRODUCT = gql`
mutation ($product: product_insert_input!) {
  insert_product(objects: [$product]){
    returning{
		    price
        name
        image
        id
        description
        category
    }
  }
}
`;

export const REMOVE_CATEGORY = gql`
mutation ($item: Int!) {
  delete_category(where: {id: {_eq: $item}}){
    returning{
      id
    }
  }
}
`;

export const REMOVE_PRODUCT = gql`
mutation ($product: Int!) {
  delete_product(where: {id: {_eq: $product}}){
    returning{
      id
    }
  }
}
`;

export const INSERT_BLOG = gql`
mutation ($blog: blog_insert_input!) {
  insert_blog(objects: [$blog]){
    returning{
        name
        image
        id
        filling
        created
    }
  }
}
`;

export const REMOVE_BLOG = gql`
mutation ($blog: Int!) {
  delete_blog(where: {id: {_eq: $blog}}){
    returning{
      id
    }
  }
}
`;



export const ADD_CAROUSEL = gql`
mutation ($carousel: carousel_insert_input!) {
  insert_carousel(objects: [$carousel]){
    returning{
        image
        id
        category
    }
  }
}
`;

export const REMOVE_CAROUSEL = gql`
mutation ($item: Int!) {
  delete_carousel(where: {id: {_eq: $item}}){
    returning{
      id
    }
  }
}
`

export const UPDATE_BLOG = gql`
mutation ($blog: blog_set_input!, $id: Int!) {
  update_blog(where: {id: {_eq: $id}}, _set: $blog) {
    returning {
      name
      image
      id
      filling
    }
  }
}
`;

export const UPDATE_PRODUCT = gql`
mutation ($product: product_set_input!, $id: Int!) {
  update_product(where: {id: {_eq: $id}}, _set: $product) {
    returning {
      name
      image
      id
      price
      description
      category
    }
  }
}
`;

export const UPDATE_CAROUSEL = gql`
mutation ($carousel: carousel_set_input!, $id: Int!) {
  update_carousel(where: {id: {_eq: $id}}, _set: $carousel) {
    returning {
      image
      id
      category
    }
  }
}
`;

export const UPDATE_CATEGORY = gql`
mutation ($category: category_set_input!, $id: Int!) {
  update_category(where: {id: {_eq: $id}}, _set: $category) {
    returning {
      image
      id
      name
      description
    }
  }
}
`