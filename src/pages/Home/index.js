import React, {} from 'react';

import initialData from '../../data/initial_data.json';
import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

function Home() {
  return (
    <PageDefault paddingAll={0}>
      <BannerMain
        videoTitle={initialData.categories[0].videos[0].title}
        url={initialData.categories[0].videos[0].url}
        videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
      />

      {initialData.categories.map((category, index) => (
        <Carousel
          key={category.title}
          category={category}
          ignoreFirstVideo={index === 0}
        />
      ))}
    </PageDefault>
  );
}

export default Home;
