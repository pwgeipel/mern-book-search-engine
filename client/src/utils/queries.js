import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    {
        me {
            username
            email
            _id
            savedBooks {
                authors
                title
                image
                description
                bookId
                link
            }
        }
    }`