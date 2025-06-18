import { gql } from "@apollo/client";

export const FEATURED_SERVICES_QUERY = gql`
  query FeaturedServices {
    page(id: "home", idType: URI) {
      homeSections {
        featuredServices {
          nodes {
            ... on Service {
              id
              slug
              serviceId
              serviceFields {
                catName
                serviceIconn {
                  node {
                    mediaItemUrl
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const featureDoctorsQuery = gql`
  query FeaturedDoctors {
  page(id: "home", idType: URI) {
    homeSections {
      featuredDoctors {
        nodes {
          ... on Doctor {
            id
            slug
            doctorId
            doctorField {
              consultationFees
              experience
              rating
              consultationFeesOnline
              consultationFeesDiscount
              location {
                nodes {
                  ... on Location {
                    id
                    title
                  }
                }
              }
            }
            title
            featuredImage {
              node {
                mediaItemUrl
              }
            }
            specialities {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  }
}
`;

export const singleDoctorQuery = gql`
  query SingleDoctor($slug: ID!) {
    doctor(id: $slug, idType: SLUG) {
      doctorId
      title
      content
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      doctorField {
        consultationFees
        consultationFeesDiscount
        consultationFeesOnline
        certification {
          nodes {
            mediaItemUrl
          }
        }
        experience
        longDescription
        rating
        linkedinLink {
          url
        }
        socialLinks {
          url
        }
        chamber {
          nodes {
            ... on Chamber {
              id
              title
              chamberFields {
                timing
              }
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
            }
          }
        }
        service {
          nodes {
            ... on Service {
              id
              slug
              serviceFields {
                catName
                serviceIconn {
                  node {
                    mediaItemUrl
                  }
                }
              }
            }
          }
        }
        imageGallery {
          nodes {
            mediaItemUrl
          }
        }
      }
      specialities {
        nodes {
          taxonomyName
          id
          databaseId
          name
        }
      }
      bodyBasedServices {
        nodes {
          bodyBasedServiceId
          taxonomyName
          bodyBasedServicesField {
            image {
              node {
                mediaItemUrl
              }
            }
          }
          name
        }
      }
    }
  }
`;

export const singleServiceQuery = gql`
  query SingleService($slug: ID!) {
    service(id: $slug, idType: SLUG) {
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      title
      content
      serviceFields {
        longDescription
        subtitle
        longDescriptionCopy {
          nodes {
            ... on Doctor {
              id
              slug
              doctorId
              title
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
              doctorField {
                consultationFees
                consultationFeesDiscount
                consultationFeesOnline
                experience
                rating
                chamber {
                  nodes {
                    ... on Chamber {
                      id
                      title
                    }
                  }
                }
              }
              specialities {
                nodes {
                  name
                }
              }
            }
          }
        }
        diagnosisTreatment
      }
      serviceFaqs {
        nodes {
          description
          name
        }
      }
      serviceOverviews {
        nodes {
          description
          name
        }
      }
    }
  }
`;
//blogs
export const getAllBlogsQuery = gql`
  query getBlogs($after: String = "", $before: String = "", $first: Int = 10) {
    posts(after: $after, before: $before, first: $first) {
      nodes {
        id
        title
        slug
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            id
            slug
            name
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;
export const getSingleBlogBySlugQuery = gql`
  query getSingleBlogBySlugQuery($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      slug
      content
      date
      excerpt
      featuredImage {
        node {
          sourceUrl
        }
      }
      categories {
        nodes {
          id
          name
          slug
        }
      }
      author {
        node {
          name
          firstName
          lastName
          avatar {
            url
          }
        }
      }
    }
  }
`;

export const getHomePageBlogsQuery = gql`
  query {
    posts(first: 2) {
      nodes {
        id
        title
        slug
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
`;

export const getAllServices = gql`
  query AllServices {
    services {
      nodes {
        title
        databaseId
      }
    }
  }
`;

export const getAllDoctors = gql`
  query AllDoctors {
    doctors {
      nodes {
        title
        databaseId
      }
    }
  }
`;

export const GET_JOB_NOTICES = gql`
  query JobNotice {
    jobNotices {
      nodes {
        title
        content
      }
    }
  }
`;

export const getNavMenu = gql`
  query NavMenu {
    serviceCategories {
      nodes {
        name
        description
        services {
          nodes {
            title
            slug
          }
        } 
      }
    }
  }
`;