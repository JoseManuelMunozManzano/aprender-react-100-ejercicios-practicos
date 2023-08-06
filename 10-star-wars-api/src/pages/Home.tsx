import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPeople } from '../apis/api';
import { getIdFromUrl, getPaginationLinks } from '../utils/utils';
import { Result } from '../interfaces/star-wars.interface';
import { Box, BoxContainer, Pagination } from '../styles/styled';

const Home = () => {
  const { p = 1 } = useParams();
  const [page, setPage] = useState<number>(1);
  const [people, setPeople] = useState<Result[]>([]);
  const [elementsAmount, setElementsAmount] = useState<number>(0);

  useEffect(() => {
    getPeople(page)
      .then((res) => {
        setElementsAmount(res.data.count);
        setPeople(res.data.results);
      })
      .catch(console.error);
  }, [page]);

  useEffect(() => {
    setPage(+p);
  }, [p]);

  return (
    <>
      <BoxContainer>
        {people.map((person, i) => (
          <Box to={'/profile/' + getIdFromUrl(person.url)} key={i}>
            <div key={i}>
              <img src={`https://starwars-visualguide.com/assets/img/characters/${getIdFromUrl(person.url)}.jpg`} />
              <p>{person.name}</p>
            </div>
          </Box>
        ))}
      </BoxContainer>

      <Pagination>
        {getPaginationLinks(elementsAmount, 10).map((n) => (
          <Link key={n} to={`/${n + 1}`}>
            {n + 1}
          </Link>
        ))}
      </Pagination>
    </>
  );
};

export default Home;
