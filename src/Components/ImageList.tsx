import React from 'react';
import ImageItem from './ImageItem';
import FirstImage from './FirstImage';


function ImageList() {
  const images = [
    {
      id: 1,
      titre: 'Consectetuer vehicula ab',
      lien:'November 21, 2017 / Kitchen, Lifestyle',
      url: 'https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic26-free-img.jpg',
      description: 'Consectetuer vehicula ab? Blandit? Suspendisse feugiat elementum dictum! Minus eum eveniet, praesentium elementum interdum! Sodales, metus, velit voluptatibus voluptas lorem, etiam vulputate? Aenean possimus montes fugiat […]',
      link: 'lien', 
    },
    {
      id: 2,
      titre: 'Taciti hendrerit dis odit incidunt',
      lien: 'November 21, 2017 / Kitchen, Living Room, Reading Room',
      url: 'https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero01-free-img.jpg',
      description: 'Cillum corrupti accumsan non cumque alias ipsa, platea! Mollis auctor, repellendus sagittis? Corporis dictumst mollis, curae. Eaque, quam per, praesent pretium eu non cumque animi dolorem',
      link: 'lien', 
    },
    {
      id: 3,
      titre: 'Sunt doloremque blandit inven',
      lien:'November 20, 2017 / Living Room',
      url: 'https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic20-free-img.jpg',
      description: 'Nisl vel urna debitis morbi fringilla malesuada maiores optio! Ratione, facilis. Illum accusantium eros sed tristique, cubilia? Vel eu cupiditate. Habitasse urna molestie hendrerit, animi eros',
      link: 'lien',  
    },

    {
        id: 4,
        titre: 'Fugit quaerat vulputate! Irure. ',
        lien: 'November 20, 2017 / Living Room',
        url: 'https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero01-free-img.jpg',
        description: 'Sodales inceptos dolorem elit molestias minima quam ipsa proident maecenas magnam massa. Hac maiores? Dis elit facilisis sapiente! Vulputate praesent esse! Hic? Possimus elit? Molestiae voluptates',
        link: 'lien',  
      },

      {
        id: 5,
        titre: 'Litora aptent magnam laoreet!',
        lien: 'November 7, 2017 / Living Room',
        url: 'https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/sofa-with-pot.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu',
        link: 'lien',  
      },
  ];

  return (
    <div style={styles.imageList as React.CSSProperties}>
      {images.map((image) => image.id === 1?(
        <div style={styles.firstimage }>
          <FirstImage
          key={image.id}
          titre={image.titre}
          lien={image.lien}
          url={image.url}
          description={image.description}
          link={image.link}
        />
        </div>) : (
        <div style={styles.imageitem }>
          <ImageItem
          key={image.id}
          titre={image.titre}
          lien={image.lien}
          url={image.url}
          description={image.description}
          link={image.link}
        />
        </div>

      ))}
    </div>
  );
}

const styles = {
  imageList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
  
  },

  firstimage:{},

  imageitem:{},
};

export default ImageList;
