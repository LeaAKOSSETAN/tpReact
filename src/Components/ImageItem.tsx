import React from "react";
function ImageItem(props:{titre: string; lien: string; url: string; description: string; link: string}){
    return(
    
        <div style={styles.imageItem as React.CSSProperties}>
            <h3 style={styles.title}>{props.titre}</h3>
            <a href={props.lien} style={styles.lien}>{props.lien}</a>
            <img src={props.url} alt={props.titre} style={styles.image} />
            <p style={styles.description}>{props.description}</p>
            <a href={props.link} style={styles.readMore}>Read More »</a>
        </div>
    );

}

const styles = {
    imageItem: {
      width: '1300px', 
      marginBottom: '70px',
      padding: '60px',   
      transition: 'transform 0.3s ease',  
    },

    lien:{
        fontSize: '40px',
        marginBottom: '200px',
        color: 'red',
        textDecoration: 'underline',
    },
    title: {
      fontSize: '100px',
      marginBottom: '10px',
      fontWeight: 'bold',
      color: '#333',
    },
    image: {
      width: '1300px',
      height: '700px',
      marginBottom: '10px',
      marginTop:'30px',
    },
    description: {
      fontSize: '65px',
      color: '#555',
      lineHeight: '1.5',
      marginBottom: '50px',
    },
    readMore: {
      display: 'inline-block',
      marginTop: '70px',
      color: 'red',
      textDecoration: 'none',
      fontSize: '65px',
    },
    readMoreHover: {
      color: '#0056b3',
      textDecoration: 'underline',
    },
  };
  
  export default ImageItem;
  