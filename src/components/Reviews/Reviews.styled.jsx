import styled from '@emotion/styled';

export const ReviewsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 15px;
    list-style: none;
`
export const ReviewsItem = styled.li`
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 14%) 0px 1px 1px,
    rgb(0 0 0 / 20%) 0px 2px 1px;
  border-radius: 6px;
`
export const AuthorName = styled.p`
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
`

export const ReviewText = styled.p`
font-size: 20px;
`
export const NoReview = styled.p`
  text-transform: uppercase;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 50px;
`