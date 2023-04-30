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

export const INSERT_ACCESSORIES = gql`
  mutation ($acc: accessories_insert_input!) {
    insert_accessories(objects: [$acc]) {
      returning {
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

export const INSERT_BEANS = gql`
  mutation ($beans: beans_insert_input!) {
    insert_beans(objects: [$beans]) {
      returning {
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

export const INSERT_BUNDLE = gql`
  mutation ($bundle: bundles_insert_input!) {
    insert_bundles(objects: [$bundle]) {
      returning {
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

export const INSERT_COFFEE = gql`
  mutation ($coffee: coffee_insert_input!) {
    insert_coffee(objects: [$coffee]) {
      returning {
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

export const INSERT_DESERT = gql`
  mutation ($deserts: deserts_insert_input!) {
    insert_deserts(objects: [$deserts]) {
      returning {
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

export const INSERT_LEAF_TEA = gql`
  mutation ($leaf: leaf_tea_insert_input!) {
    insert_leaf_tea(objects: [$leaf]) {
      returning {
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

export const INSERT_TEA = gql`
  mutation ($tea: tea_insert_input!) {
    insert_tea(objects: [$tea]) {
      returning {
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

`