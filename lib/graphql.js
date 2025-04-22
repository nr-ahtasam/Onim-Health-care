import { gql } from "@apollo/client";

async function fetchGraphQLQuery(query, variables = {}) {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });
  const { data, errors } = await response.json();
  if (errors) throw new Error(errors[0].message);
  return data;
}

export const FEATURED_SERVICES_QUERY = gql`
  query FeaturedServices {
    page(id: "home", idType: URI) {
      homeSections {
        featuredServices {
          nodes {
            ... on Service {
              id
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

export const featureServicesQuery = gql`
  query FeaturedServices {
    page(id: "home", idType: URI) {
      homeSections {
        featuredServices {
          nodes {
            ... on Service {
              id
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

export async function getFeaturedDoctors() {
  const query = `
    query FeaturedDoctors {
    page(id: "home", idType: URI) {
      homeSections {
        featuredDoctors {
          nodes {
            ... on Doctor {
              id
              doctorId
              doctorField {
                consultationFees
                experience
                rating
                consultationFeesOnline
                consultationFeesDiscount
                chamber {
                  nodes {
                    ... on Chamber {
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
  return fetchGraphQLQuery(query);
}
export const featureDoctorsQuery = gql`
  query FeaturedDoctors {
    page(id: "home", idType: URI) {
      homeSections {
        featuredDoctors {
          nodes {
            ... on Doctor {
              id
              doctorId
              doctorField {
                consultationFees
                experience
                rating
                consultationFeesOnline
                consultationFeesDiscount
                chamber {
                  nodes {
                    ... on Chamber {
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

export const getDoctorById = async (id) => {
  const query = `
  query SingleDoctor($id: ID!) {
    doctor(id: $id, idType: URI) {
      title
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      doctorField {
        consultationFees
        experience
        certification {
          nodes {
            mediaItemUrl
          }
        }
        longDescription
        rating
        socialLinks {
          url
        }
      }
    }
  }
`;
  return fetchGraphQLQuery(query, { id });
};
export const singleDoctorQuery = gql`
  query SingleDoctor($id: ID!) {
    doctor(id: $id, idType: DATABASE_ID) {
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

export async function getSingleService(id) {
  const query = `
  query SingleService($id: ID!) {
    service(id: $id, idType: DATABASE_ID) {
      title
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      serviceFields {
        longDescription
        subtitle
      }
      content
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
  return fetchGraphQLQuery(query, { id });
}
export const singleServiceQuery = gql`
  query SingleService($id: ID!) {
    service(id: $id, idType: DATABASE_ID) {
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
