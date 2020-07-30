import React from 'react';
import Menu from '../../components/Menu';
import initialData from '../../data/initial_data.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />

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

      <Footer />
    </div>
  );
}

export default Home;
