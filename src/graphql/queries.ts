import { gql } from "@apollo/client";

export const CATEGORIES = gql`
  query {
    category(order_by: { id: desc }) {
      name
      image
      id
      description
    }
  }
`;

export const ACCESSORIES = gql`
  query {
    accessories(order_by: { id: desc }) {
      category
      description
      id
      image
      name
      price
    }
  }
`;

export const BEANS = gql`
  query {
    beans(order_by: { id: desc }) {
      category
      description
      id
      image
      name
      price
    }
  }
`;

export const BUNDLES = gql`
  query {
    bundles(order_by: { id: desc }) {
      price
      name
      image
      id
      description
      category
    }
  }
`;

export const COFFEE = gql`
  query {
    coffee(order_by: { id: desc }) {
      price
      name
      image
      id
      description
      category
    }
  }
`;

export const DESERTS = gql`
  query {
    deserts(order_by: { id: desc }) {
      price
      name
      image
      id
      description
      category
    }
  }
`;

export const LEAF_TEA = gql`
  query {
    leaf_tea(order_by: { id: desc }) {
      price
      name
      image
      id
      description
      category
    }
  }
`;

export const TEA = gql`
  query {
    tea(order_by: { id: desc }) {
      category
      description
      id
      image
      name
      price
    }
  }
`;

export const PRODUCTS = gql`
  query {
    product(order_by: { id: desc }) {
      product_category {
        id
        name
      }
      description
      id
      name
      price
      image
    }
  }
`;
export const BLOGS = gql`
  query {
    blog(order_by: { created: desc }) {
      name
      image
      id
      filling
      created
    }
  }
`;

export const CAROUSEL_ACTIVE = gql`
  query {
    carousel (where: {carouselCategory: {category: {_eq: "Активирован"}}})  {
      carouselCategory {
        category
        id
      }
      id
      image
    }
  }
`;

export const CAROUSEL_ARCHIVE = gql`
  query {
    carousel (where: {carouselCategory: {category: {_eq: "Отключен"}}})  {
      carouselCategory {
        category
        id
      }
      id
      image
    }
  }
`;

export const CAROUSEL_CATEGORY = gql`
  query {
    carouselCategory {
      category
      id
    }
  }
`;
