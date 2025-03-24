async function fetchGraphQLQuery(query, variables = {}) {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({query, variables}),
    });
    const {data, errors} = await response.json();
    if (errors) throw new Error(errors[0].message);
    return data;
}

export async function getFeatureServices() {
    const query = `
      query FeaturedServices {
        page(id: "home", idType: URI) {
          homeSections {
            featuredServices {
              nodes {
                ... on Service {
                  id
                  serviceId
                  serviceFields {
                    serviceIconn {
                      node {
                        mediaItemUrl
                      }
                    }
                    catName
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
              }
              title
              featuredImage {
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
`;
    return fetchGraphQLQuery(query);
}

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
    return fetchGraphQLQuery(query, {id});
}

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
    return fetchGraphQLQuery(query, {id});
}