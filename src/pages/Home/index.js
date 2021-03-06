import React from 'react';

import useFetch from '../../hooks/useFetch';

import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import LoadingAnimation from '../../components/AnimatedElement';

import animationData from '../../assets/video/loading.json';

function Home() {
  const [response, loading] = useFetch('/categories?_embed=videos');

  return (
    <PageDefault paddingAll={0}>
      {loading && <LoadingAnimation animationData={animationData} /> }

      {response && (
        <>
          <BannerMain
            videoTitle={response[0].videos[0].title}
            url={response[0].videos[0].url}
            videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
          />

          {response.map((category, index) => (
            category.videos.length ? (
              <Carousel
                key={category.title}
                category={category}
                ignoreFirstVideo={index === 0}
              />
            ) : <></>
          ))}
        </>
      )}
    </PageDefault>
  );
}

export default Home;
