import './Journal.css';

const posts = [
  {
    id: 1,
    category: "Corporate",
    title: "Corporate",
    content: "Be the office Baddie",
    image: "https://i.pinimg.com/736x/59/e3/23/59e323de24776395410aefda1390605b.jpg",
    
  },
  {
    id: 2,
    category: "Summer",
    title: "Summer",
    content: "Perfect Summer Look",
    image: "https://i.pinimg.com/736x/e4/89/7c/e4897cba31a089629c3bdecee4c93def.jpg",
    
  },
  {
    id: 3,
    category:"Street",
    title: " Streetwear",
    content: "Street vibes, no compromise. ",
    image:"https://i.pinimg.com/736x/91/9f/59/919f59f4ea04c68bf2c871283d1ed8cc.jpg",
    
  },
  {
    id: 4,
    category:"Casual",
    title: " Casual",
    content: "Effortless style, everyday vibes. ",
    image:"https://i.pinimg.com/736x/4c/02/23/4c0223187ff34bb99545665711740f99.jpg",
    
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
          <button className="view-more-btn">View More</button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Journal;
