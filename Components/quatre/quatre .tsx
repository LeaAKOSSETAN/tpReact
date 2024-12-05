// // Podcast.tsx
// import React from 'react';

// // Définir les props pour la carte
// interface PostCardProps {
//   title: string;
//   date: string;
//   category: string;
//   image: string;
//   description: string;
// }

// // Fonction qui retourne une carte avec les détails d'un podcast
// const PostCard: React.FC<PostCardProps> = ({ title, date, category, image, description }) => {
//   return (
//     <div className="flex flex-col gap-4">
//       <img src={image} alt={title} className="rounded-md" />
//       <div>
//         <h3 className="text-xl font-bold">{title}</h3>
//         <p className="text-sm text-red-500">{date} / {category}</p>
//         <p className="text-gray-700">{description}</p>
//       </div>
//     </div>
//   );
// };

// // Composant principal qui rend plusieurs cartes
// const Podcast: React.FC = () => {
//   const posts = [
//     {
//       title: "Eleifend sodales molestie deserunt",
//       date: "November 2, 2017",
//       category: "Outdoors",
//       image: "https://via.placeholder.com/300x200", // Remplacez par l'URL réelle
//       description:
//         "Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Lorem ipsum dolor.",
//     },
//     {
//       title: "Crporis quae purus inventore!",
//       date: "October 17, 2017",
//       category: "Outdoors",
//       image: "https://via.placeholder.com/300x200", // Remplacez par l'URL réelle
//       description:
//         "Luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent.",
//     },
//   ];

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {posts.map((post, index) => (
//           <PostCard
//             key={index}
//             title={post.title}
//             date={post.date}
//             category={post.category}
//             image={post.image}
//             description={post.description}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Podcast;
