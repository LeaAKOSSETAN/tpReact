import React from 'react';
import image1 from './image2.jpg';
import FirstImage from './texte';
import ImageItem from './image';
import image3 from './image3.jpg'
import image4 from './image4.jpg'

function ImageList() {
  const images = [
    {
      id: 1,
      titre: 'Icinia soluta. Lacus quas.',
      lien: 'November 7, 2017 / Outdoors',
      url: image1,  // Utilisation correcte de image1
      description: 'Dolor sit amet consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in elit. Class […]',
      link: 'lien',
    },
    
    {
      id: 2,
      titre: 'Eleifend sodales molestiae deserunt',
      lien: 'November 2, 2017 / Outdoors',
      url: '',  // Aucune image, cela sera géré conditionnellement
      description: 'Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Lorem ipsum dolor',
      link: 'lien',
    },
    {
      id: 3,
      titre: 'Eleifend sodales molestiae deserunt',
      lien: 'November 2, 2017 / Outdoors',
      url: image3,  // Utilisation correcte de image3
      description: 'Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Lorem ipsum dolor',
      link: 'lien',
    },
    {
      id: 4,
      titre: 'Crporis quae purus inventore!',
      lien: 'October 17, 2017 / Outdoors',
      url: image4,  // URL externe
      description: 'Luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
      link: 'lien',
    },
    {
      id: 5,
      titre: 'Litora aptent magnam laoreet!',
      lien: 'November 7, 2017 / Living Room',
      url: '',  // Vous pouvez gérer le cas où l'URL est vide
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu',
      link: 'lien',
    },
  ];

  return (
    <div style={styles.imageList as React.CSSProperties}>
      {images.map((image) =>
        image.id === 1 ? (
          <div style={styles.firstimage} key={image.id}>
            <FirstImage
              titre={image.titre}
              lien={image.lien}
              url={image.url}
              description={image.description}
              link={image.link}
            />
          </div>
        ) : (
          <div style={styles.imageitem} key={image.id}>
            {image.url ? (
              <ImageItem
                titre={image.titre}
                lien={image.lien}
                url={image.url}
                description={image.description}
                link={image.link}
              />
            ) : (
              <div>No image available</div>  // Si l'URL est vide, afficher un message
            )}
          </div>
        )
      )}
    </div>
  );
}

const styles = {
  imageList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
  },
  firstimage: {},
  imageitem: {},
};

export default ImageList;
