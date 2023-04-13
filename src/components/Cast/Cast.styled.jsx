import styled from '@emotion/styled';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  margin-top: 30px;
  padding: 0 40px;
  list-style: none;
  color: ${p => p.theme.colors.dark};
`;

export const ActorCard = styled.li``;

export const WrapActorCard = styled.div`
  width: 154px;
  height: auto;
  overflow: hidden;
`;

export const ActorFoto = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const ActorName = styled.p`
  text-align: center;
`;
