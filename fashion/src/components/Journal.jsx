import './Journal.css';

const posts = [
  {
    id: 1,
    category: "Corporate",
    title: "Be the office Baddie",
    content: "Lorem ipsum dolor sit amet...",
    image: "https://i.pinimg.com/736x/59/e3/23/59e323de24776395410aefda1390605b.jpg",
    button: "View more"
  },
  {
    id: 2,
    category: "Summer",
    title: "Perfect Summer Look",
    content: "Lorem ipsum dolor sit amet...",
    image: "https://i.pinimg.com/736x/e4/89/7c/e4897cba31a089629c3bdecee4c93def.jpg",
    button: "View more"
  },
  {
    id: 3,
    category:"Street",
    title: "Street vibes, no compromise.",
    content: "Lorem ipsum dolor sit amet.... ",
    image:"https://i.pinimg.com/736x/91/9f/59/919f59f4ea04c68bf2c871283d1ed8cc.jpg",
    button: "View more"
  },
  {
    id: 4,
    category:"Casual",
    title: "Effortless style, everyday vibes.",
    content: "Lorem ipsum dolor sit amet.... ",
    image:"https://i.pinimg.com/736x/4c/02/23/4c0223187ff34bb99545665711740f99.jpg",
    button: "View more"
  },
  {
    id: 5,
    category:"Ethnic / Traditional Wear",
    title: "Rooted in culture, styled for today.",
    content: "Lorem ipsum dolor sit amet.... ",
    image:"https://i.pinimg.com/1200x/b8/1b/5f/b81b5feb08fea317b7665286b6578762.jpg",
    button: "View more"
  },
  {
    id: 6,
    category:"Evening / Party Wear",
    title: "Own the night, shine in style.",
    content: "Lorem ipsum dolor sit amet.... ",
    image:"https://i.pinimg.com/736x/23/fe/99/23fe9978a14e7164a9af17bd72d89c2d.jpg",
    button: "View more"
  },
];

const Journal = () => {
  return (
    <div className='journal'>
    <h1 className='journal-heading'>Pick Your Style</h1>
    <div className="journal-container">
        
      {posts.map((item) => (
        <div key={item.id} className="journal-item">
          <img src={item.image} alt={item.title} />
          <h2>{item.title}</h2>
          <p>{item.content}</p>
          <a>{item.button}</a>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Journal;
