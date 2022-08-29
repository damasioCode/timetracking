import styled from "styled-components";

const UserCardWrapper = styled.ul`
  /* display: grid; */
  display: flex;
  flex-basis: 230px;
  /* flex-grow: ; */
  /* max-width: 400px; */
  gap: 1rem;
  flex-wrap: wrap;
  /* grid-template-columns: 1fr 1fr 1fr; */

  @media (max-width:780px) {
    flex: 1 1 230px;
  }
`

export default UserCardWrapper